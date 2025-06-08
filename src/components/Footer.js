import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLinkedin, 
  faGithub, 
  faTwitter, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faHeart, 
  faCode, 
  faArrowUp,
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(15, 52, 96, 0.9));
  backdrop-filter: blur(20px);
  color: #ffffff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(74, 158, 255, 0.5), transparent);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px 20px;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
`;

const FooterSection = styled(motion.div)`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
    background: linear-gradient(45deg, #4a9eff, #0066cc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  
  .icon {
    width: 20px;
    color: #4a9eff;
  }
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(74, 158, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1.1rem;
  border: 1px solid rgba(74, 158, 255, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 158, 255, 0.3);
    color: #4a9eff;
    transform: translateY(-3px);
    border-color: #4a9eff;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const QuickLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: #4a9eff;
    transform: translateX(5px);
  }
  
  &::before {
    content: '→';
    opacity: 0;
    margin-right: 5px;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
`;

const TechTag = styled.span`
  background: rgba(74, 158, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(74, 158, 255, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 158, 255, 0.3);
    color: #4a9eff;
    border-color: #4a9eff;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(74, 158, 255, 0.2);
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  .heart {
    color: #4a9eff;
    animation: heartbeat 1.5s ease-in-out infinite;
  }
  
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const BackToTop = styled(motion.button)`
  background: linear-gradient(45deg, #4a9eff, #0066cc);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  box-shadow: 0 10px 30px rgba(74, 158, 255, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(74, 158, 255, 0.4);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  
  const techStack = [
    'Kotlin', 'Java', 'Spring Boot', 'PHP Laravel', 
    'Python', 'React', 'React Native', 'Node.js'
  ];

  return (
  <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Samuel Gichohi</h3>
            <p>
              Passionate full-stack mobile developer creating innovative digital experiences 
              that bridge the gap between design and functionality.
            </p>
            <ContactInfo>
              <ContactItem>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <span>mukabi339@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <span>+254719271828</span>
              </ContactItem>
              <ContactItem>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                <span>Nairobi, Kenya</span>
              </ContactItem>
            </ContactInfo>
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
              <SocialIcon
                href="#"
                target="_blank"
                whileHover={{ scale: 1.1, rotateZ: -5 }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </SocialIcon>
            </SocialLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Quick Links</h3>
            <QuickLinks>
              <QuickLink href="/">Home</QuickLink>
              <QuickLink href="/about">About Me</QuickLink>
              <QuickLink href="/projects">Projects</QuickLink>
              <QuickLink href="/services">Services</QuickLink>
              <QuickLink href="/testimonials">Testimonials</QuickLink>
              <QuickLink href="/contact">Contact</QuickLink>
            </QuickLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Tech Stack</h3>
            <p>Technologies I work with to build amazing applications</p>
            <TechStack>
              {techStack.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </TechStack>
          </FooterSection>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            <span>&copy; {currentYear} Samuel Gichohi. Made with</span>
            <FontAwesomeIcon icon={faHeart} className="heart" />
            <span>and</span>
            <FontAwesomeIcon icon={faCode} style={{ color: '#4a9eff' }} />
            <span>All rights reserved.</span>
          </Copyright>
          
          <BackToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </BackToTop>
        </FooterBottom>
      </FooterContent>
  </FooterContainer>
);
};

export default Footer;

