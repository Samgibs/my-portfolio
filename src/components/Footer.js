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
      <a href="https://linkedin.com/in/samuel-gichohi">LinkedIn</a> | 
      <a href="https://github.com/samuel-gichohi">GitHub</a> | 
      <a href="https://twitter.com/samuel_gichohi">Twitter</a>
    </p>
  </FooterContainer>
);

export default Footer;
