import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faEdit,
  faTrash,
  faEnvelope,
  faUser,
  faCalendarAlt,
  faFlag,
  faExclamationTriangle,
  faCheckCircle,
  faClock,
  faSave
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

const BackButton = styled(motion.button)`
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid rgba(74, 158, 255, 0.3);
  color: #4a9eff;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 158, 255, 0.2);
    transform: translateX(-5px);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, #fff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
`;

const ActionButton = styled(motion.button)`
  background: ${props => {
    if (props.variant === 'primary') return 'linear-gradient(135deg, #4a9eff 0%, #0066cc 100%)';
    if (props.variant === 'danger') return 'rgba(244, 67, 54, 0.2)';
    return 'rgba(74, 158, 255, 0.1)';
  }};
  color: ${props => props.variant === 'danger' ? '#f44336' : 'white'};
  border: 1px solid ${props => props.variant === 'danger' ? 'rgba(244, 67, 54, 0.3)' : 'rgba(74, 158, 255, 0.3)'};
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
    box-shadow: 0 8px 20px ${props => props.variant === 'danger' ? 'rgba(244, 67, 54, 0.3)' : 'rgba(74, 158, 255, 0.3)'};
  }
`;

const MainContent = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  margin-top: 20px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const LeadInfo = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(74, 158, 255, 0.2);
`;

const LeadActions = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  height: fit-content;
`;

const Section = styled.div`
  margin-bottom: 30px;
  
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: #4a9eff;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(74, 158, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const InfoLabel = styled.span`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`;

const InfoValue = styled.span`
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
`;

const MessageBox = styled.div`
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid rgba(74, 158, 255, 0.2);
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`;

const StatusBadge = styled.span`
  padding: 6px 15px;
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
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
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

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #4a9eff;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid rgba(74, 158, 255, 0.3);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #4a9eff;
    background: rgba(74, 158, 255, 0.1);
  }
  
  option {
    background: #1a1a2e;
    color: #fff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid rgba(74, 158, 255, 0.3);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #4a9eff;
    background: rgba(74, 158, 255, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const UpdateButton = styled(motion.button)`
  background: linear-gradient(135deg, #4a9eff 0%, #0066cc 100%);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  width: 100%;
  justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 158, 255, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const LeadDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [formData, setFormData] = useState({
    status: '',
    priority: '',
    notes: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchLead();
  }, [id, navigate]);

  const fetchLead = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/leads/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setLead(data);
        setFormData({
          status: data.status || 'new',
          priority: data.priority || 'medium',
          notes: data.notes || ''
        });
      } else {
        navigate('/admin/leads');
      }
    } catch (error) {
      console.error('Error fetching lead:', error);
      navigate('/admin/leads');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`http://localhost:5000/api/leads/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // Refresh lead data
        await fetchLead();
        alert('Lead updated successfully!');
      }
    } catch (error) {
      console.error('Error updating lead:', error);
      alert('Error updating lead. Please try again.');
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`http://localhost:5000/api/leads/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          alert('Lead deleted successfully!');
          navigate('/admin/leads');
        }
      } catch (error) {
        console.error('Error deleting lead:', error);
        alert('Error deleting lead. Please try again.');
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
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
      default: return faUser;
    }
  };

  if (loading) {
    return (
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <h2>Loading Lead Details...</h2>
        </div>
      </Container>
    );
  }

  if (!lead) {
    return (
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <h2>Lead not found</h2>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton
          onClick={() => navigate('/admin/leads')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Leads
        </BackButton>
        <Title>Lead Details</Title>
        <ActionButtons>
          <ActionButton
            variant="danger"
            onClick={handleDelete}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faTrash} />
            Delete
          </ActionButton>
        </ActionButtons>
      </Header>

      <MainContent>
        <ContentGrid>
          <LeadInfo
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Section>
              <h3>
                <FontAwesomeIcon icon={faUser} />
                Contact Information
              </h3>
              <InfoRow>
                <InfoLabel>Name:</InfoLabel>
                <InfoValue>{lead.name}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Email:</InfoLabel>
                <InfoValue>{lead.email}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Subject:</InfoLabel>
                <InfoValue>{lead.subject}</InfoValue>
              </InfoRow>
            </Section>

            <Section>
              <h3>
                <FontAwesomeIcon icon={faFlag} />
                Lead Status
              </h3>
              <InfoRow>
                <InfoLabel>Status:</InfoLabel>
                <StatusBadge status={lead.status}>
                  <FontAwesomeIcon icon={getStatusIcon(lead.status)} style={{ marginRight: '5px' }} />
                  {lead.status}
                </StatusBadge>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Priority:</InfoLabel>
                <PriorityBadge priority={lead.priority}>
                  {lead.priority}
                </PriorityBadge>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Source:</InfoLabel>
                <InfoValue>{lead.source}</InfoValue>
              </InfoRow>
            </Section>

            <Section>
              <h3>
                <FontAwesomeIcon icon={faCalendarAlt} />
                Timeline
              </h3>
              <InfoRow>
                <InfoLabel>Created:</InfoLabel>
                <InfoValue>{formatDate(lead.created_at)}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Last Updated:</InfoLabel>
                <InfoValue>{formatDate(lead.updated_at)}</InfoValue>
              </InfoRow>
            </Section>

            <Section>
              <h3>
                <FontAwesomeIcon icon={faEnvelope} />
                Message
              </h3>
              <MessageBox>
                {lead.message}
              </MessageBox>
            </Section>

            {lead.notes && (
              <Section>
                <h3>Notes</h3>
                <MessageBox>
                  {lead.notes}
                </MessageBox>
              </Section>
            )}
          </LeadInfo>

          <LeadActions
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Section>
              <h3>
                <FontAwesomeIcon icon={faEdit} />
                Update Lead
              </h3>
              <form onSubmit={handleUpdate}>
                <FormGroup>
                  <Label>Status</Label>
                  <Select
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="closed">Closed</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label>Priority</Label>
                  <Select
                    value={formData.priority}
                    onChange={(e) => setFormData({...formData, priority: e.target.value})}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label>Notes</Label>
                  <TextArea
                    placeholder="Add your notes about this lead..."
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  />
                </FormGroup>

                <UpdateButton
                  type="submit"
                  disabled={updating}
                  whileHover={{ scale: updating ? 1 : 1.02 }}
                  whileTap={{ scale: updating ? 1 : 0.98 }}
                >
                  <FontAwesomeIcon icon={faSave} />
                  {updating ? 'Updating...' : 'Update Lead'}
                </UpdateButton>
              </form>
            </Section>
          </LeadActions>
        </ContentGrid>
      </MainContent>
    </Container>
  );
};

export default LeadDetails;