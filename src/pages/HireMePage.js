import React from 'react';
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

const ClientsSection = styled.div`
  margin-top: 30px;
  text-align: left;
`;

const Client = styled.div`
  background: white;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const HomePage = () => (
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
      I am Samuel Gichohi, a seasoned software engineer with over 10 years of experience in building scalable and efficient software solutions. I specialize in full-stack development and have a strong passion for creating impactful digital experiences.
    </Description>
    <Button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Get in Touch
    </Button>
    <Button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Hire Now
    </Button>
    <ContactInfo>
      <p>Email: mukabi339@gmail.com</p>
      <p>Phone: 0719271828</p>
      <p>linkedIn: https://www.linkedin.com/in/samuel-gichohi/</p>
    </ContactInfo>

    <Description>
      Thank you for visiting my portfolio. I look forward to the possibility of working with you and creating something amazing together.
    </Description>
  </Container>
);

export default HomePage;


