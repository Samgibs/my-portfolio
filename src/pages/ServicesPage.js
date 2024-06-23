import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #15696F;
  color: #EEF2F0;
  padding: 50px;
`;

const ServicesPage = () => (
  <Container>
    <h1>Services</h1>
    <ul>
      <li>Website Development</li>
      <li>E-commerce Solutions</li>
      <li>Custom Software Development</li>
      <li>Full-Stack Development</li>
      <li>Database Management</li>
      <li>Content Management Systems</li>
      <li>Search Engine Optimization (SEO)</li>
    </ul>
  </Container>
);

export default ServicesPage;
