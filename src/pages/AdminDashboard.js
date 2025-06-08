import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faEnvelope, 
  faChartLine,
  faSignOutAlt,
  faEye,
  faEdit,
  faTrash,
  faFilter,
  faRefresh,
  faBell,
  faSearch,
  faCalendarAlt,
  faExclamationTriangle,
  faCheckCircle,
  faClock
} from '@fortawesome/free-solid-svg-icons';

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #1a1a2e);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  color: #ffffff;
  min-height: 100vh;
`;

const Header = styled.div`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(74, 158, 255, 0.2);
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    background: linear-gradient(45deg, #fff, #e0e0e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a9eff 0%, #0066cc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const LogoutButton = styled(motion.button)`
  background: rgba(244, 67, 54, 0.2);
  border: 1px solid rgba(244, 67, 54, 0.3);
  color: #f44336;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(244, 67, 54, 0.3);
    transform: translateY(-2px);
  }
`;

const MainContent = styled.div`
  padding: 40px;
  max-width: 1400px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const StatCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #4a9eff;
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(74, 158, 255, 0.1);
  }
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #4a9eff 0%, #0066cc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: white;
`;

const StatValue = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 5px 0;
  color: #fff;
`;

const StatLabel = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

const Section = styled.div`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  margin-bottom: 30px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    color: #fff;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
`;

const ActionButton = styled(motion.button)`
  background: ${props => props.variant === 'primary' ? 
    'linear-gradient(135deg, #4a9eff 0%, #0066cc 100%)' : 
    'rgba(74, 158, 255, 0.1)'};
  color: white;
  border: 1px solid rgba(74, 158, 255, 0.3);
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 158, 255, 0.3);
  }
`;

const LeadsTable = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid rgba(74, 158, 255, 0.1);
  }
  
  th {
    color: #4a9eff;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  td {
    color: rgba(255, 255, 255, 0.9);
  }
  
  tr:hover {
    background: rgba(74, 158, 255, 0.05);
  }
`;

const StatusBadge = styled.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${props => {
    switch(props.status) {
      case 'new':
        return 'background: rgba(76, 175, 80, 0.2); color: #4caf50; border: 1px solid rgba(76, 175, 80, 0.3);';
      case 'contacted':
        return 'background: rgba(255, 193, 7, 0.2); color: #ffc107; border: 1px solid rgba(255, 193, 7, 0.3);';
      case 'qualified':
        return 'background: rgba(74, 158, 255, 0.2); color: #4a9eff; border: 1px solid rgba(74, 158, 255, 0.3);';
      case 'closed':
        return 'background: rgba(156, 39, 176, 0.2); color: #9c27b0; border: 1px solid rgba(156, 39, 176, 0.3);';
      default:
        return 'background: rgba(158, 158, 158, 0.2); color: #9e9e9e; border: 1px solid rgba(158, 158, 158, 0.3);';
    }
  }}
`;

const PriorityBadge = styled.span`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  
  ${props => {
    switch(props.priority) {
      case 'high':
        return 'background: rgba(244, 67, 54, 0.2); color: #f44336;';
      case 'medium':
        return 'background: rgba(255, 152, 0, 0.2); color: #ff9800;';
      case 'low':
        return 'background: rgba(76, 175, 80, 0.2); color: #4caf50;';
      default:
        return 'background: rgba(158, 158, 158, 0.2); color: #9e9e9e;';
    }
  }}
`;

const ActionIconButton = styled(motion.button)`
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid rgba(74, 158, 255, 0.3);
  color: #4a9eff;
  width: 35px;
  height: 35px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 158, 255, 0.2);
    transform: scale(1.1);
  }
  
  &.delete {
    color: #f44336;
    border-color: rgba(244, 67, 54, 0.3);
    background: rgba(244, 67, 54, 0.1);
    
    &:hover {
      background: rgba(244, 67, 54, 0.2);
    }
  }
`;

const AdminDashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const userData = localStorage.getItem('adminUser');
    
    if (!token) {
      navigate('/admin');
      return;
    }

    if (userData) {
      setUser(JSON.parse(userData));
    }

    fetchDashboardData();
  }, [navigate]);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      
      // Fetch analytics
      const analyticsResponse = await fetch('http://localhost:5000/api/analytics', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (analyticsResponse.ok) {
        const analyticsData = await analyticsResponse.json();
        setAnalytics(analyticsData);
      }

      // Fetch leads
      const leadsResponse = await fetch('http://localhost:5000/api/leads?limit=10', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (leadsResponse.ok) {
        const leadsData = await leadsResponse.json();
        setLeads(leadsData);
      }
      
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'new': return faExclamationTriangle;
      case 'contacted': return faClock;
      case 'qualified': return faCheckCircle;
      default: return faUsers;
    }
  };

  if (loading) {
    return (
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <h2>Loading Dashboard...</h2>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Logo>
          <h1>Portfolio CRM Dashboard</h1>
        </Logo>
        <UserInfo>
          <span>Welcome, {user?.username || 'Admin'}</span>
          <UserAvatar>
            {user?.username?.charAt(0).toUpperCase() || 'A'}
          </UserAvatar>
          <LogoutButton
            onClick={handleLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </LogoutButton>
        </UserInfo>
      </Header>

      <MainContent>
        {/* Analytics Stats */}
        <StatsGrid>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StatIcon>
              <FontAwesomeIcon icon={faUsers} />
            </StatIcon>
            <StatValue>{analytics?.totalLeads || 0}</StatValue>
            <StatLabel>Total Leads</StatLabel>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <StatIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </StatIcon>
            <StatValue>{leads.filter(lead => lead.status === 'new').length}</StatValue>
            <StatLabel>New Leads</StatLabel>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StatIcon>
              <FontAwesomeIcon icon={faCheckCircle} />
            </StatIcon>
            <StatValue>{leads.filter(lead => lead.status === 'qualified').length}</StatValue>
            <StatLabel>Qualified</StatLabel>
          </StatCard>

          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <StatIcon>
              <FontAwesomeIcon icon={faChartLine} />
            </StatIcon>
            <StatValue>{analytics?.recentLeads?.length || 0}</StatValue>
            <StatLabel>This Month</StatLabel>
          </StatCard>
        </StatsGrid>

        {/* Recent Leads */}
        <Section>
          <SectionHeader>
            <h2>Recent Leads</h2>
            <ActionButtons>
              <ActionButton
                onClick={fetchDashboardData}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faRefresh} />
                Refresh
              </ActionButton>
              <ActionButton
                variant="primary"
                onClick={() => navigate('/admin/leads')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faEye} />
                View All
              </ActionButton>
            </ActionButtons>
          </SectionHeader>

          <LeadsTable>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td>{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.subject}</td>
                    <td>
                      <StatusBadge status={lead.status}>
                        {lead.status}
                      </StatusBadge>
                    </td>
                    <td>
                      <PriorityBadge priority={lead.priority}>
                        {lead.priority}
                      </PriorityBadge>
                    </td>
                    <td>{formatDate(lead.created_at)}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <ActionIconButton
                          onClick={() => navigate(`/admin/leads/${lead.id}`)}
                          whileHover={{ scale: 1.1 }}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </ActionIconButton>
                        <ActionIconButton
                          onClick={() => navigate(`/admin/leads/${lead.id}/edit`)}
                          whileHover={{ scale: 1.1 }}
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </ActionIconButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </LeadsTable>
        </Section>
      </MainContent>
    </Container>
  );
};

export default AdminDashboard; 