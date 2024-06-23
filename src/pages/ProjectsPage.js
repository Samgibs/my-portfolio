import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #EEF2F0;
  color: #282828;
  padding: 50px;
`;

const ProjectsPage = () => (
  <Container>
    <h1>My Projects</h1>
    <p>Here’s a showcase of some of my best work...</p>
    <div>
      <h2>Online Marketplace</h2>
      <p>Developed a robust, scalable online marketplace...</p>
      <h2>Marketing Website for Construction Company</h2>
      <p>Created a dynamic and visually appealing website...</p>
      <h2>E-commerce Clothing Store</h2>
      <p>Built an e-commerce platform with features...</p>
    </div>
  </Container>
);

export default ProjectsPage;
