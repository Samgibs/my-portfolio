import React from 'react';
import styled from 'styled-components';
import projectImage1 from '../assets/project-image1.jpeg';
import projectImage2 from '../assets/project-image2.jpeg';
import projectImage3 from '../assets/project-image3.jpeg';

const Container = styled.div`
  background: #EEF2F0;
  color: #282828;
  padding: 50px 20px;
  text-align: center;
  min-height: 100vh;
`;

const ProjectsHeader = styled.div`
  margin-bottom: 40px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: box-shadow 0.3s ease-in-out;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const ProjectTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const ProjectsPage = () => (
  <Container>
    <ProjectsHeader>
      <h1>My Projects</h1>
      <p>Here’s a showcase of some of my best work...</p>
    </ProjectsHeader>
    <ProjectsGrid>
      <ProjectCard>
        <ProjectImage src={projectImage1} alt="Online Marketplace" />
        <ProjectTitle>Online Marketplace</ProjectTitle>
        <ProjectDescription>
          Developed a robust, scalable online marketplace...
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={projectImage2} alt="Marketing Website" />
        <ProjectTitle>Marketing Website for Construction Company</ProjectTitle>
        <ProjectDescription>
          Created a dynamic and visually appealing website...
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectImage src={projectImage3} alt="E-commerce Clothing Store" />
        <ProjectTitle>E-commerce Clothing Store</ProjectTitle>
        <ProjectDescription>
          Built an e-commerce platform with features...
        </ProjectDescription>
      </ProjectCard>
    </ProjectsGrid>
  </Container>
);

export default ProjectsPage;

