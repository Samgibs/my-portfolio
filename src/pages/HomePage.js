import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile-image.jpg';
import htmlIcon from '../assets/html_and_css-icon.jpeg';
import cssIcon from '../assets/html_and_css-icon.jpeg';
import jsIcon from '../assets/mern-icon.png';
import reactIcon from '../assets/mern-icon.png';
import PythonIcon from '../assets/python-icon.png';

const Container = styled.div`
  background: #EEF2F0;
  color: #282828;
  padding: 50px 20px;
  text-align: center;
  min-height: 100vh;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding: 20px;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const NavLink = styled.a`
  color: #282828;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  padding: 50px 0;
`;

const TextSection = styled.div`
  max-width: 500px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #282828;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const Description = styled.p`
  margin: 20px 0;
  line-height: 1.5;
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
`;

const ProfileImage = styled(motion.img)`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  border: 5px solid #EEF2F0;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.8);
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const SkillsSection = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const SkillsTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.8rem;
`;

const Skills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Skill = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #282828;
  border-radius: 10px;
  padding: 10px;
  width: 100px;
  height: 120px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 80px;
    height: 100px;
  }
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const SkillName = styled.span`
  color: #EEF2F0;
  font-size: 0.9rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const HomePage = () => (
  <Container>
    <Content>
      <TextSection>
        <Title>Hello, I am Samuel Gichohi.</Title>
        <Subtitle>A Full-Stack Software Engineer</Subtitle>
        <Description>
          As a seasoned software engineer, my journey in the tech world began with a strong foundation in information science and a passion for creating impactful software solutions.
        </Description>
      
        <Link to="/contact">
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </Button>
        </Link>
      </TextSection>
      <ProfileImage
        src={profileImage}
        alt="Samuel Gichohi"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
    </Content>
    <SkillsSection>
      <SkillsTitle>Tech Skills</SkillsTitle>
      <Skills>
        <Skill>
          <SkillIcon src={htmlIcon} alt="HTML" />
          <SkillName>HTML</SkillName>
        </Skill>
        <Skill>
          <SkillIcon src={cssIcon} alt="CSS" />
          <SkillName>CSS</SkillName>
        </Skill>
        <Skill>
          <SkillIcon src={jsIcon} alt="JavaScript" />
          <SkillName>JavaScript</SkillName>
        </Skill>
        <Skill>
          <SkillIcon src={reactIcon} alt="React" />
          <SkillName>React</SkillName>
        </Skill>
        <Skill>
          <SkillIcon src={PythonIcon} alt="Python" />
          <SkillName>Python</SkillName>
        </Skill>
      </Skills>
    </SkillsSection>
  </Container>
);

export default HomePage;