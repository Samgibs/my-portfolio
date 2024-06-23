import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile-image.jpg';

const Container = styled.div`
  background: #EEF2F0;
  color: #282828;
  padding: 50px;
  text-align: center;
`;

const HomePage = () => (
  <Container>
    <motion.img
      src={profileImage}
      alt="Samuel Gichohi"
      whileHover={{ scale: 1.1 }}
      style={{ borderRadius: '50%', width: '200px', height: '200px' }}
    />
    <h1>Welcome to My Portfolio</h1>
    <p>I am Samuel Gichohi, a seasoned software engineer...</p>
  </Container>
);

export default HomePage;

