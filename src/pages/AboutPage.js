import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faBriefcase, 
  faCode, 
  faLightbulb,
  faAward,
  faCalendarAlt,
  faMapMarkerAlt,
  faRocket,
  faMobile,
  faServer,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';
import { 
  faJava, 
  faPython, 
  faPhp, 
  faReact, 
  faAndroid,
  faGithub,
  faLinkedin,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import profileImage from '../assets/profile-image-new.jpg';

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const Container = styled.div`
  background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #1a1a2e);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  color: #ffffff;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled(Section)`
  text-align: center;
  padding-bottom: 40px;
`;

const ProfileImageWrapper = styled(motion.div)`
  position: relative;
  display: inline-block;
  margin-bottom: 40px;
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid rgba(255, 255, 255, 0.3);
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(10px);
  animation: ${float} 6s ease-in-out infinite;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const Card = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px 30px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(74, 158, 255, 0.1);
    border-color: #4a9eff;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4a9eff, #0066cc);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: white;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #fff;
`;

const CardContent = styled.div`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
`;

const TimelineSection = styled(Section)`
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #ff6b6b, #ee5a52);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 60px;
  
  &:nth-child(odd) {
    padding-left: 60%;
    
    @media (max-width: 768px) {
      padding-left: 60px;
      padding-right: 0;
    }
  }
  
  &:nth-child(even) {
    padding-right: 60%;
    text-align: right;
    
    @media (max-width: 768px) {
      padding-left: 60px;
      padding-right: 0;
      text-align: left;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ff6b6b, #ee5a52);
    border: 4px solid rgba(255, 255, 255, 0.3);
    
    @media (min-width: 769px) {
      left: 50%;
      transform: translateX(-50%);
    }
    
    @media (max-width: 768px) {
      left: 12px;
    }
  }
`;

const TimelineCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const TimelineDate = styled.div`
  color: #4a9eff;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TimelineTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #fff;
`;

const TimelineSubtitle = styled.p`
  color: #4a9eff;
  font-weight: 500;
  margin-bottom: 15px;
`;

const TimelineDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const SkillsSection = styled(Section)``;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px 20px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(74, 158, 255, 0.1);
    border-color: #4a9eff;
  }
`;

const SkillIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4a9eff, #0066cc);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-size: 1.2rem;
  color: white;
`;

const SkillName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #fff;
`;

const SkillLevel = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
`;

const StatsSection = styled(Section)`
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

const StatCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px 20px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(74, 158, 255, 0.1);
    border-color: #4a9eff;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #4a9eff;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
`;

const AboutPage = () => {
  const skills = [
    { name: 'Kotlin', icon: faAndroid, level: 'Advanced' },
    { name: 'Java', icon: faJava, level: 'Advanced' },
    { name: 'Spring Boot', icon: faServer, level: 'Advanced' },
    { name: 'PHP Laravel', icon: faPhp, level: 'Advanced' },
    { name: 'Python', icon: faPython, level: 'Expert' },
    { name: 'React', icon: faReact, level: 'Advanced' },
    { name: 'Mobile Dev', icon: faMobile, level: 'Advanced' },
    { name: 'Version Control', icon: faGitAlt, level: 'Expert' }
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '8+', label: 'Technologies' },
    { number: '30+', label: 'Happy Clients' }
  ];

  return (
    <Container>
      <HeroSection>
        <ProfileImageWrapper
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ProfileImage src={profileImage} alt="Samuel Gichohi" />
        </ProfileImageWrapper>
        
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Samuel Gichohi
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A passionate full-stack mobile developer with expertise in modern technologies, 
          dedicated to creating innovative digital solutions that make a real impact.
        </Subtitle>

        <ContentGrid>
          <Card
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faLightbulb} />
            </CardIcon>
            <CardTitle>Innovation</CardTitle>
            <CardContent>
              I thrive on solving complex problems with creative solutions, 
              always staying ahead of technology trends and best practices.
            </CardContent>
          </Card>

          <Card
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faRocket} />
            </CardIcon>
            <CardTitle>Performance</CardTitle>
            <CardContent>
              Building scalable, high-performance applications that deliver 
              exceptional user experiences across all platforms.
            </CardContent>
          </Card>

          <Card
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={faCode} />
            </CardIcon>
            <CardTitle>Clean Code</CardTitle>
            <CardContent>
              Writing maintainable, well-documented code following industry 
              standards and best practices for long-term project success.
            </CardContent>
          </Card>
        </ContentGrid>
      </HeroSection>

      <TimelineSection>
        <SectionTitle
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          My Journey
        </SectionTitle>
        
        <Timeline>
          <TimelineItem
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <TimelineCard>
              <TimelineDate>
                <FontAwesomeIcon icon={faCalendarAlt} />
                2021 - 2024
              </TimelineDate>
              <TimelineTitle>Bachelor of Science in Information Science</TimelineTitle>
              <TimelineSubtitle>Jomo Kenyatta University of Agriculture and Technology</TimelineSubtitle>
              <TimelineDescription>
                Graduated with comprehensive knowledge in information systems, 
                software development, and data management. Specialized in modern 
                programming paradigms and software engineering principles.
              </TimelineDescription>
            </TimelineCard>
          </TimelineItem>

          <TimelineItem
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TimelineCard>
              <TimelineDate>
                <FontAwesomeIcon icon={faCalendarAlt} />
                2022 - 2023
              </TimelineDate>
              <TimelineTitle>Full Stack Software Engineering</TimelineTitle>
              <TimelineSubtitle>Africa Leadership Program</TimelineSubtitle>
              <TimelineDescription>
                Intensive program focusing on modern web technologies, mobile development, 
                and industry best practices. Gained hands-on experience with real-world projects.
              </TimelineDescription>
            </TimelineCard>
          </TimelineItem>

          <TimelineItem
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TimelineCard>
              <TimelineDate>
                <FontAwesomeIcon icon={faCalendarAlt} />
                2023 - Present
              </TimelineDate>
              <TimelineTitle>Full-Stack Mobile Developer</TimelineTitle>
              <TimelineSubtitle>Freelance & Contract Work</TimelineSubtitle>
              <TimelineDescription>
                Specialized in Kotlin, Java, Spring Boot, PHP Laravel, and Python development. 
                Successfully delivered 50+ projects for various clients across different industries.
              </TimelineDescription>
            </TimelineCard>
          </TimelineItem>
        </Timeline>
      </TimelineSection>

      <SkillsSection>
        <SectionTitle
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Technical Expertise
        </SectionTitle>
        
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCategory
              key={skill.name}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillIcon>
                <FontAwesomeIcon icon={skill.icon} />
              </SkillIcon>
              <SkillName>{skill.name}</SkillName>
              <SkillLevel>{skill.level}</SkillLevel>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsSection>

      <StatsSection>
        <SectionTitle
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          By the Numbers
        </SectionTitle>
        
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsSection>
    </Container>
  );
};

export default AboutPage;

