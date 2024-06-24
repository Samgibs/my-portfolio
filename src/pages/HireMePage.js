import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile-image.jpg';

const Container = styled.div`
  background: #EEF2F0;
  color: #282828;
  padding: 50px 20px;
  text-align: center;
  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const ProfileImage = styled(motion.img)`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 20px;
`;

const Button = styled(motion.button)`
  background: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: #0056b3;
  }
  &:active {
    background: #004080;
  }
`;

const ContactInfo = styled.div`
  margin: 20px 0;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  background: #007BFF;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const HomePage = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isHireModalOpen, setHireModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle contact form submission
    setContactModalOpen(false);
    alert('Contact form submitted!');
  };

  const handleHireSubmit = (e) => {
    e.preventDefault();
    // Handle hire form submission
    setHireModalOpen(false);
    alert('Hire form submitted!');
  };

  return (
    <Container>
      <ProfileImage
        src={profileImage}
        alt="Samuel Gichohi"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
      <h1>Welcome to My Portfolio</h1>
      <Title>Samuel Gichohi, Software Engineer</Title>
      <Description>
        I am Samuel Gichohi, a seasoned software engineer with over 3 years of experience in building scalable and efficient software solutions. I specialize in full-stack development and have a strong passion for creating impactful digital experiences.
      </Description>
      <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setContactModalOpen(true)}
      >
        Get in Touch
      </Button>
      <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setHireModalOpen(true)}
      >
        Hire Now
      </Button>
      <ContactInfo>
        <p>Email: mukabi339@gmail.com</p>
        <p>Phone: 0719271828</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/samuel-gichohi/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/samuel-gichohi/</a></p>
      </ContactInfo>

      <Description>
        Thank you for visiting my portfolio. I look forward to the possibility of working with you and creating something amazing together.
      </Description>

      {isContactModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Contact Me</h2>
            <form onSubmit={handleContactSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <TextArea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button type="submit">Send</Button>
              <CloseButton onClick={() => setContactModalOpen(false)}>Close</CloseButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}

      {isHireModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Hire Me</h2>
            <form onSubmit={handleHireSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <TextArea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button type="submit">Send</Button>
              <CloseButton onClick={() => setHireModalOpen(false)}>Close</CloseButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default HomePage;



