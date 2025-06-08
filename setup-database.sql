-- Portfolio CRM Database Setup
-- Run this script in your MariaDB/MySQL client

-- Create database
CREATE DATABASE IF NOT EXISTS portfolio_crm;
USE portfolio_crm;

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create leads table
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
);

-- Insert default admin user (username: admin, password: admin123)
-- Password is hashed using bcrypt
INSERT IGNORE INTO admin_users (username, email, password) 
VALUES ('admin', 'mukabi339@gmail.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

-- Show tables
SHOW TABLES;

-- Show admin user
SELECT id, username, email, created_at FROM admin_users;

COMMIT; 