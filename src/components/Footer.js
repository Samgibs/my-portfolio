import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #282828;
  color: #EEF2F0;
  padding: 20px;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Samuel Gichohi. All rights reserved.</p>
    <p>
      <a href="https://www.linkedin.com/in/samuel-gichohi-2a44822b3/">LinkedIn</a> | 
      <a href="https://github.com/Samgibs">GitHub</a> | 
      <a href="https://x.com/samuelgibson722">Twitter</a>
    </p>
  </FooterContainer>
);

export default Footer;

