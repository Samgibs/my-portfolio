import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/profile-image-new.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDownload, 
  faArrowDown, 
  faCode, 
  faMobile, 
  faServer, 
  faDatabase,
  faGraduationCap,
  faBriefcase,
  faAward,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { 
  faReact, 
  faJava, 
  faPython, 
  faPhp, 
  faGitAlt, 
  faGithub, 
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
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
  position: relative;
`;

const HeroSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const TextContent = styled.div`
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Greeting = styled(motion.h1)`
  font-size: 1.2rem;
  color: #b0b0b0;
  margin-bottom: 10px;
  font-weight: 300;
`;

const Name = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TypedText = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 30px;
  height: 60px;
  color: #4a9eff;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    height: 50px;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 40px;
  color: #d0d0d0;
  max-width: 500px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: linear-gradient(45deg, #4a9eff, #0066cc);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(74, 158, 255, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(74, 158, 255, 0.4);
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 15px 30px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(74, 158, 255, 0.1);
    border-color: #4a9eff;
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 158, 255, 0.2);
    border-color: #4a9eff;
    transform: translateY(-5px) scale(1.1);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ProfileImageWrapper = styled(motion.div)`
  position: relative;
  border-radius: 50%;
  padding: 8px;
  background: linear-gradient(45deg, rgba(74, 158, 255, 0.3), rgba(0, 102, 204, 0.2));
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation: ${float} 6s ease-in-out infinite;
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 3px solid rgba(74, 158, 255, 0.5);
  
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const StatsSection = styled(Section)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: -50px auto 80px;
  border: 1px solid rgba(74, 158, 255, 0.2);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
`;

const StatItem = styled(motion.div)`
  padding: 20px;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #4a9eff;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #d0d0d0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SkillsSection = styled(Section)`
  text-align: center;
`;

const SectionTitle = styled(motion.h3)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #d0d0d0;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const SkillCategory = styled(motion.div)`
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
  }
`;

const CategoryIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4a9eff, #0066cc);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 2rem;
  color: white;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const CategoryTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #fff;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const SkillTag = styled.span`
  background: rgba(74, 158, 255, 0.2);
  color: #e0e0e0;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(74, 158, 255, 0.3);
`;

const ScrollIndicator = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  z-index: 10;
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const ScrollArrow = styled(motion.div)`
  font-size: 1.5rem;
  animation: ${float} 2s ease-in-out infinite;
`;

const HomePage = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skills = {
    "Mobile Development": {
      icon: faMobile,
      skills: ["Kotlin", "Java", "Android SDK", "Flutter", "React Native"]
    },
    "Backend Development": {
      icon: faServer,
      skills: ["Spring Boot", "Node.js", "PHP Laravel", "Python Django", "Express.js"]
    },
    "Frontend Development": {
      icon: faCode,
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Bootstrap"]
    },
    "Database & DevOps": {
      icon: faDatabase,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Git", "GitHub", "Docker"]
    }
  };

  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <TextContent>
            <Greeting
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hello, I'm
            </Greeting>
            
            <Name
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Samuel Gichohi
            </Name>
            
            <TypedText>
              <TypeAnimation
                sequence={[
                  'Full-Stack Mobile Developer',
                  2000,
                  'Spring Boot Expert',
                  2000,
                  'Kotlin Developer',
                  2000,
                  'PHP Laravel Specialist',
                  2000,
                  'Python Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </TypedText>
            
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Passionate full-stack mobile developer with expertise in Kotlin, Java, Spring Boot, 
              PHP Laravel, and Python. I create scalable, user-centric applications that bridge 
              the gap between innovative design and robust functionality.
            </Description>
            
            <ButtonGroup>
              <Link to="/contact">
                <PrimaryButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={faUsers} />
                  Let's Connect
                </PrimaryButton>
              </Link>
              
              <SecondaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('#', '_blank')}
              >
                <FontAwesomeIcon icon={faDownload} />
                Download CV
              </SecondaryButton>
            </ButtonGroup>
            
            <SocialLinks>
              <SocialIcon
                href="https://www.linkedin.com/in/samuel-gichohi-2a44822b3/"
                target="_blank"
                whileHover={{ scale: 1.1, rotateZ: 5 }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </SocialIcon>
              <SocialIcon
                href="https://github.com/Samgibs"
                target="_blank"
                whileHover={{ scale: 1.1, rotateZ: -5 }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </SocialIcon>
              <SocialIcon
                href="https://x.com/samuelgibson722"
                target="_blank"
                whileHover={{ scale: 1.1, rotateZ: 5 }}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </SocialIcon>
            </SocialLinks>
          </TextContent>
          
          <ImageContainer>
            <ProfileImageWrapper
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ProfileImage src={profileImage} alt="Samuel Gichohi" />
            </ProfileImageWrapper>
          </ImageContainer>
        </HeroContent>
        
        <ScrollIndicator
          whileHover={{ scale: 1.1 }}
          onClick={() => document.getElementById('stats').scrollIntoView({ behavior: 'smooth' })}
        >
          <ScrollText>Scroll Down</ScrollText>
          <ScrollArrow>
            <FontAwesomeIcon icon={faArrowDown} />
          </ScrollArrow>
        </ScrollIndicator>
      </HeroSection>

      <StatsSection id="stats">
        <StatsGrid>
          <StatItem
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <StatNumber>
              <CountUp end={50} duration={2} suffix="+" />
            </StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          
          <StatItem
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StatNumber>
              <CountUp end={3} duration={2} suffix=" Years" />
            </StatNumber>
            <StatLabel>Experience</StatLabel>
          </StatItem>
          
          <StatItem
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StatNumber>
              <CountUp end={30} duration={2} suffix="+" />
            </StatNumber>
            <StatLabel>Happy Clients</StatLabel>
          </StatItem>
          
          <StatItem
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <StatNumber>
              <CountUp end={8} duration={2} suffix="+" />
            </StatNumber>
            <StatLabel>Tech Stacks</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsSection>

      <SkillsSection ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <SectionTitle variants={itemVariants}>
            Technical Expertise
          </SectionTitle>
          <SectionSubtitle variants={itemVariants}>
            Cutting-edge technologies and frameworks I use to build exceptional digital experiences
          </SectionSubtitle>
          
          <SkillsGrid>
            {Object.entries(skills).map(([category, data], index) => (
              <SkillCategory
                key={category}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <CategoryIcon>
                  <FontAwesomeIcon icon={data.icon} />
                </CategoryIcon>
                <CategoryTitle>{category}</CategoryTitle>
                <SkillsList>
                  {data.skills.map((skill, skillIndex) => (
                    <SkillTag key={skillIndex}>{skill}</SkillTag>
                  ))}
                </SkillsList>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </motion.div>
      </SkillsSection>
    </Container>
  );
};

export default HomePage;