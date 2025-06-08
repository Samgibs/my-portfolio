import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faLock, 
  faSignInAlt,
  faShieldAlt,
  faEye,
  faEyeSlash
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const LoginCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 60px 50px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 450px;
  text-align: center;
`;

const Logo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(135deg, #4a9eff 0%, #0066cc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  font-size: 2rem;
  color: white;
  box-shadow: 0 10px 30px rgba(74, 158, 255, 0.3);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #fff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InputGroup = styled.div`
  position: relative;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #4a9eff;
  font-weight: 500;
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 15px 50px 15px 50px;
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

const InputIcon = styled.div`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(74, 158, 255, 0.7);
  font-size: 1rem;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    color: #4a9eff;
  }
`;

const LoginButton = styled(motion.button)`
  background: linear-gradient(135deg, #4a9eff 0%, #0066cc 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(74, 158, 255, 0.3);
  margin-top: 20px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(74, 158, 255, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.div`
  background: rgba(244, 67, 54, 0.2);
  border: 1px solid rgba(244, 67, 54, 0.3);
  color: #f44336;
  padding: 15px;
  border-radius: 10px;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const DefaultCredentials = styled.div`
  background: rgba(74, 158, 255, 0.1);
  border: 1px solid rgba(74, 158, 255, 0.2);
  border-radius: 10px;
  padding: 15px;
  margin-top: 30px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  
  h4 {
    color: #4a9eff;
    margin: 0 0 8px 0;
    font-size: 0.9rem;
  }
  
  p {
    margin: 0;
    font-family: 'Courier New', monospace;
  }
`;

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if already logged in
    const token = localStorage.getItem('adminToken');
    if (token) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminUser', JSON.stringify(data.user));
        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('Connection error. Please ensure the server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <LoginCard
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Logo>
          <FontAwesomeIcon icon={faShieldAlt} />
        </Logo>
        
        <Title>Admin Dashboard</Title>
        <Subtitle>Portfolio CRM System</Subtitle>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="username">Username</Label>
            <InputWrapper>
              <InputIcon>
                <FontAwesomeIcon icon={faUser} />
              </InputIcon>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <InputWrapper>
              <InputIcon>
                <FontAwesomeIcon icon={faLock} />
              </InputIcon>
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <PasswordToggle
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </PasswordToggle>
            </InputWrapper>
          </InputGroup>

          <LoginButton
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
          >
            <FontAwesomeIcon icon={faSignInAlt} />
            {isLoading ? 'Signing In...' : 'Sign In'}
          </LoginButton>
        </Form>
      </LoginCard>
    </Container>
  );
};

export default AdminLogin; 