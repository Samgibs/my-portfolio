const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// JWT Secret (In production, use environment variable)
const JWT_SECRET = 'your-super-secret-jwt-key-change-in-production';

// Database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'sam',
  database: 'portfolio_crm'
};

// Create database connection pool
const pool = mysql.createPool(dbConfig);

// Initialize database
async function initializeDatabase() {
  try {
    // Create database if it doesn't exist
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'sam'
    });
    
    await connection.execute('CREATE DATABASE IF NOT EXISTS portfolio_crm');
    await connection.end();

    // Create tables
    const db = await pool.getConnection();
    
    // Admin users table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Leads table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS leads (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        message TEXT,
        subject VARCHAR(200),
        source VARCHAR(50) DEFAULT 'contact_form',
        status ENUM('new', 'contacted', 'qualified', 'closed') DEFAULT 'new',
        priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
        notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create default admin user (username: admin, password: admin123)
    const defaultPassword = bcrypt.hashSync('admin123', 10);
    await db.execute(`
      INSERT IGNORE INTO admin_users (username, email, password) 
      VALUES ('admin', 'mukabi339@gmail.com', ?)
    `, [defaultPassword]);
    
    db.release();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
}

// Initialize database on startup
initializeDatabase();

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mukabi339@gmail.com',
    pass: 'ofplwlqtymfwqobc' 
  }
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// AUTH ROUTES

// Admin login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const db = await pool.getConnection();

    const [rows] = await db.execute('SELECT * FROM admin_users WHERE username = ?', [username]);
    const user = rows[0];

    if (!user || !bcrypt.compareSync(password, user.password)) {
      db.release();
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    db.release();
    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Verify token
app.get('/api/auth/verify', authenticateToken, (req, res) => {
  res.json({ valid: true, user: req.user });
});

// LEAD MANAGEMENT ROUTES

// Get all leads
app.get('/api/leads', authenticateToken, async (req, res) => {
  try {
    const { status, priority, limit = 50, offset = 0 } = req.query;
    const db = await pool.getConnection();
    
    let query = 'SELECT * FROM leads WHERE 1=1';
    let params = [];

    if (status) {
      query += ' AND status = ?';
      params.push(status);
    }

    if (priority) {
      query += ' AND priority = ?';
      params.push(priority);
    }

    query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
    params.push(parseInt(limit), parseInt(offset));

    const [rows] = await db.execute(query, params);
    db.release();
    res.json(rows);
  } catch (error) {
    console.error('Get leads error:', error);
    res.status(500).json({ message: 'Database error' });
  }
});

// Get lead by ID
app.get('/api/leads/:id', authenticateToken, async (req, res) => {
  try {
    const db = await pool.getConnection();
    const [rows] = await db.execute('SELECT * FROM leads WHERE id = ?', [req.params.id]);
    const lead = rows[0];
    
    db.release();
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(lead);
  } catch (error) {
    console.error('Get lead error:', error);
    res.status(500).json({ message: 'Database error' });
  }
});

// Update lead
app.put('/api/leads/:id', authenticateToken, async (req, res) => {
  try {
    const { status, priority, notes } = req.body;
    const db = await pool.getConnection();
    
    const [result] = await db.execute(
      'UPDATE leads SET status = ?, priority = ?, notes = ? WHERE id = ?',
      [status, priority, notes, req.params.id]
    );
    
    db.release();
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json({ message: 'Lead updated successfully' });
  } catch (error) {
    console.error('Update lead error:', error);
    res.status(500).json({ message: 'Database error' });
  }
});

// Delete lead
app.delete('/api/leads/:id', authenticateToken, async (req, res) => {
  try {
    const db = await pool.getConnection();
    const [result] = await db.execute('DELETE FROM leads WHERE id = ?', [req.params.id]);
    
    db.release();
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json({ message: 'Lead deleted successfully' });
  } catch (error) {
    console.error('Delete lead error:', error);
    res.status(500).json({ message: 'Database error' });
  }
});

// Get dashboard analytics
app.get('/api/analytics', authenticateToken, async (req, res) => {
  try {
    const db = await pool.getConnection();
    const analytics = {};

    // Get total leads
    const [totalResult] = await db.execute('SELECT COUNT(*) as total FROM leads');
    analytics.totalLeads = totalResult[0].total;

    // Get leads by status
    const [statusData] = await db.execute('SELECT status, COUNT(*) as count FROM leads GROUP BY status');
    analytics.leadsByStatus = statusData;

    // Get leads by source
    const [sourceData] = await db.execute('SELECT source, COUNT(*) as count FROM leads GROUP BY source');
    analytics.leadsBySource = sourceData;

    // Get recent leads (last 30 days)
    const [recentData] = await db.execute(`
      SELECT DATE(created_at) as date, COUNT(*) as count 
      FROM leads 
      WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY) 
      GROUP BY DATE(created_at) 
      ORDER BY date DESC
    `);
    analytics.recentLeads = recentData;

    db.release();
    res.json(analytics);
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ message: 'Database error' });
  }
});

// ENHANCED EMAIL ROUTE (now saves leads to database)

app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message, subject = 'New Contact Form Submission' } = req.body;

    // Save lead to database
    const db = await pool.getConnection();
    await db.execute(
      'INSERT INTO leads (name, email, message, subject, source) VALUES (?, ?, ?, ?, ?)',
      [name, email, message, subject, 'contact_form']
    );
    db.release();

    const mailOptions = {
      from: 'mukabi339@gmail.com',
      to: 'mukabi339@gmail.com',
      replyTo: email,
      subject: `${subject} - From ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4a9eff; border-bottom: 2px solid #4a9eff; padding-bottom: 10px;">
            New Message from Portfolio Website
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-left: 4px solid #4a9eff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f0f8ff; border-radius: 8px;">
            <p style="margin: 0; color: #666;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Close database connection on exit
process.on('SIGINT', async () => {
  try {
    await pool.end();
    console.log('Database connection pool closed.');
    process.exit(0);
  } catch (error) {
    console.error('Error closing database pool:', error);
    process.exit(1);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Admin Dashboard: http://localhost:3000/admin');
  console.log('Default login - Username: admin, Password: admin123');
});