import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile-image.jpg';
import pythonIcon from '../assets/python-icon.png';
import djangoIcon from '../assets/django-icon.png';
import mernIcon from '../assets/mern-icon.png';
import gitIcon from '../assets/git-icon.png';
import githubIcon from '../assets/github-icon.png';
import htmlIcon from '../assets/html_and_css-icon.jpeg';
import cssIcon from '../assets/html_and_css-icon.jpeg';

const Container = styled.div`
  background: #858585;
  color: #EEF2F0;
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
  border: 5px solid #EEF2F0;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Title = styled.h2`
  margin: 10px 0;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 20px;
`;

const Education = styled.div`
  margin: 20px 0;
`;

const Skills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
`;

const Skill = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #282828;
  border-radius: 10px;
  padding: 10px;
  width: 100px;
  height: 100px;
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
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

const AboutPage = () => (
  <Container>
    <ProfileImage
      src={profileImage}
      alt="Samuel Gichohi"
      whileHover={{ boxShadow: '0px 0px 20px 5px rgba(238, 242, 240, 0.9)' }}
      transition={{ duration: 0.5 }}
    />
    <h1>About Me</h1>
    <Description>
      As a seasoned software engineer, my journey in the tech world began with a strong foundation in information science and a passion for creating impactful software solutions.
    </Description>
    <Education>
      <Title>Education</Title>
      <p>Jomo Kenyatta University of Agriculture and Technology</p>
      <p>Bachelor of Science in Information Science</p>
      <p>Africa Leadership Program</p>
      <p>Full Stack Software Engineering</p>
    </Education>
    <Skills>
      <Skill
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <SkillIcon src={pythonIcon} alt="Python" />
        <p>Python</p>
      </Skill>
      <Skill
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <SkillIcon src={djangoIcon} alt="Django" />
        <p>Django</p>
      </Skill>
      <Skill
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <SkillIcon src={mernIcon} alt="MERN Stack" />
        <p>MERN Stack</p>
      </Skill>
      <Skill
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <SkillIcon src={gitIcon} alt="Git" />
        <p>Git</p>
      </Skill>
      <Skill
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <SkillIcon src={githubIcon} alt="GitHub" />
        <p>GitHub</p>
      </Skill>
      <Skill
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <SkillIcon src={htmlIcon} alt="HTML" />
        <p>HTML</p>
      </Skill>
      <Skill
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <SkillIcon src={cssIcon} alt="CSS" />
        <p>CSS</p>
      </Skill>
    </Skills>
  </Container>
);

export default AboutPage;

