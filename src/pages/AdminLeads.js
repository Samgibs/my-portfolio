import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faSearch,
  faFilter,
  faEye,
  faEdit,
  faTrash,
  faArrowLeft,
  faDownload,
  faPlus,
  faSort,
  faSortUp,
  faSortDown
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

const MainContent = styled.div`
  padding: 40px;
  max-width: 1400px;
  margin: 0 auto;
`;

const FiltersSection = styled.div`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 20px;
  align-items: end;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SearchInputWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px 15px 50px;
  border: 1px solid rgba(74, 158, 255, 0.3);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #4a9eff;
    background: rgba(74, 158, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(74, 158, 255, 0.7);
  font-size: 1rem;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid rgba(74, 158, 255, 0.3);
  border-radius: 12px;
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

const ActionButton = styled(motion.button)`
  background: ${props => props.variant === 'primary' ? 
    'linear-gradient(135deg, #4a9eff 0%, #0066cc 100%)' : 
    'rgba(74, 158, 255, 0.1)'};
  color: white;
  border: 1px solid rgba(74, 158, 255, 0.3);
  padding: 15px 25px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 158, 255, 0.3);
  }
`;

const LeadsSection = styled.div`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(74, 158, 255, 0.2);
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

const StatsRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const StatItem = styled.div`
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid rgba(74, 158, 255, 0.2);
  border-radius: 10px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  span {
    font-weight: 600;
    color: #4a9eff;
  }
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
    cursor: pointer;
    position: relative;
    
    &:hover {
      color: #fff;
    }
  }
  
  td {
    color: rgba(255, 255, 255, 0.9);
  }
  
  tr:hover {
    background: rgba(74, 158, 255, 0.05);
  }
`;

const SortIcon = styled.span`
  margin-left: 5px;
  font-size: 0.8rem;
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;

const PageButton = styled(motion.button)`
  background: ${props => props.active ? 
    'linear-gradient(135deg, #4a9eff 0%, #0066cc 100%)' : 
    'rgba(74, 158, 255, 0.1)'};
  color: white;
  border: 1px solid rgba(74, 158, 255, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 
      'linear-gradient(135deg, #4a9eff 0%, #0066cc 100%)' : 
      'rgba(74, 158, 255, 0.2)'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const AdminLeads = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [leadsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchLeads();
  }, [navigate]);

  useEffect(() => {
    filterAndSortLeads();
  }, [leads, search, statusFilter, priorityFilter, sortBy, sortOrder]);

  const fetchLeads = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/leads?limit=100', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setLeads(data);
      }
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortLeads = () => {
    let filtered = leads.filter(lead => {
      const matchesSearch = !search || 
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        lead.subject.toLowerCase().includes(search.toLowerCase());
      
      const matchesStatus = !statusFilter || lead.status === statusFilter;
      const matchesPriority = !priorityFilter || lead.priority === priorityFilter;
      
      return matchesSearch && matchesStatus && matchesPriority;
    });

    // Sort leads
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortBy === 'created_at') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredLeads(filtered);
    setCurrentPage(1);
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };

  const handleDelete = async (id) => {
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
          setLeads(leads.filter(lead => lead.id !== id));
        }
      } catch (error) {
        console.error('Error deleting lead:', error);
      }
    }
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

  const getSortIcon = (column) => {
    if (sortBy !== column) return faSort;
    return sortOrder === 'asc' ? faSortUp : faSortDown;
  };

  // Pagination
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = filteredLeads.slice(indexOfFirstLead, indexOfLastLead);
  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  const getStats = () => {
    return {
      total: filteredLeads.length,
      new: filteredLeads.filter(l => l.status === 'new').length,
      contacted: filteredLeads.filter(l => l.status === 'contacted').length,
      qualified: filteredLeads.filter(l => l.status === 'qualified').length,
      closed: filteredLeads.filter(l => l.status === 'closed').length
    };
  };

  const stats = getStats();

  if (loading) {
    return (
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <h2>Loading Leads...</h2>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton
          onClick={() => navigate('/admin/dashboard')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Dashboard
        </BackButton>
        <Title>Lead Management</Title>
        <div></div>
      </Header>

      <MainContent>
        {/* Filters */}
        <FiltersSection>
          <SearchInputWrapper>
            <SearchIcon>
              <FontAwesomeIcon icon={faSearch} />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search leads by name, email, or subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchInputWrapper>

          <FilterSelect
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="closed">Closed</option>
          </FilterSelect>

          <FilterSelect
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </FilterSelect>

          <ActionButton
            variant="secondary"
            onClick={fetchLeads}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faDownload} />
            Refresh
          </ActionButton>
        </FiltersSection>

        {/* Leads Table */}
        <LeadsSection>
          <SectionHeader>
            <h2>
              <FontAwesomeIcon icon={faUsers} style={{ marginRight: '10px' }} />
              Leads ({filteredLeads.length})
            </h2>
          </SectionHeader>

          <StatsRow>
            <StatItem>
              <span>{stats.total}</span> Total
            </StatItem>
            <StatItem>
              <span>{stats.new}</span> New
            </StatItem>
            <StatItem>
              <span>{stats.contacted}</span> Contacted
            </StatItem>
            <StatItem>
              <span>{stats.qualified}</span> Qualified
            </StatItem>
            <StatItem>
              <span>{stats.closed}</span> Closed
            </StatItem>
          </StatsRow>

          <div style={{ overflowX: 'auto' }}>
            <Table>
              <thead>
                <tr>
                  <th onClick={() => handleSort('name')}>
                    Name
                    <SortIcon>
                      <FontAwesomeIcon icon={getSortIcon('name')} />
                    </SortIcon>
                  </th>
                  <th onClick={() => handleSort('email')}>
                    Email
                    <SortIcon>
                      <FontAwesomeIcon icon={getSortIcon('email')} />
                    </SortIcon>
                  </th>
                  <th>Subject</th>
                  <th onClick={() => handleSort('status')}>
                    Status
                    <SortIcon>
                      <FontAwesomeIcon icon={getSortIcon('status')} />
                    </SortIcon>
                  </th>
                  <th onClick={() => handleSort('priority')}>
                    Priority
                    <SortIcon>
                      <FontAwesomeIcon icon={getSortIcon('priority')} />
                    </SortIcon>
                  </th>
                  <th onClick={() => handleSort('created_at')}>
                    Date
                    <SortIcon>
                      <FontAwesomeIcon icon={getSortIcon('created_at')} />
                    </SortIcon>
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentLeads.map((lead) => (
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
                          title="View Details"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </ActionIconButton>
                        <ActionIconButton
                          onClick={() => navigate(`/admin/leads/${lead.id}/edit`)}
                          whileHover={{ scale: 1.1 }}
                          title="Edit Lead"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </ActionIconButton>
                        <ActionIconButton
                          className="delete"
                          onClick={() => handleDelete(lead.id)}
                          whileHover={{ scale: 1.1 }}
                          title="Delete Lead"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </ActionIconButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination>
              <PageButton
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                whileHover={{ scale: currentPage === 1 ? 1 : 1.1 }}
              >
                ←
              </PageButton>
              
              {[...Array(totalPages)].map((_, index) => (
                <PageButton
                  key={index + 1}
                  active={currentPage === index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  whileHover={{ scale: 1.1 }}
                >
                  {index + 1}
                </PageButton>
              ))}
              
              <PageButton
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                whileHover={{ scale: currentPage === totalPages ? 1 : 1.1 }}
              >
                →
              </PageButton>
            </Pagination>
          )}
        </LeadsSection>
      </MainContent>
    </Container>
  );
};

export default AdminLeads; 