import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faHandshake,
  faCalendarAlt,
  faDollarSign,
  faProjectDiagram,
  faUser,
  faTimes,
  faPaperPlane,
  faRocket,
  faCheckCircle,
  faClock,
  faAward
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import profileImage from '../assets/profile-image-new.jpg';

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

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

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const ProfileImageWrapper = styled(motion.div)`
  position: relative;
  border-radius: 50%;
  padding: 8px;
  background: linear-gradient(45deg, rgba(74, 158, 255, 0.3), rgba(0, 102, 204, 0.2));
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation: ${float} 6s ease-in-out infinite;
  width: 250px;
  height: 250px;
  margin: 0 auto 30px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 3px solid rgba(74, 158, 255, 0.5);
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
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

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: #4a9eff;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #d0d0d0;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.8;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: linear-gradient(45deg, #4a9eff, #0066cc);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1rem;
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
  border: 2px solid rgba(74, 158, 255, 0.5);
  padding: 15px 40px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1rem;
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

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`;

const InfoCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  
  &:hover {
    border-color: #4a9eff;
    background: rgba(74, 158, 255, 0.1);
  }
`;

const InfoIcon = styled.div`
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
`;

const InfoTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #fff;
`;

const InfoDescription = styled.p`
  font-size: 1rem;
  color: #d0d0d0;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  text-align: center;
  margin-bottom: 40px;
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: #fff;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
  color: #d0d0d0;
  font-size: 1.1rem;
  
  .icon {
    color: #4a9eff;
    width: 20px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
`;

const SocialIcon = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(74, 158, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1.2rem;
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

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  border: 1px solid rgba(74, 158, 255, 0.2);
  position: relative;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(74, 158, 255, 0.2);
  border: 1px solid rgba(74, 158, 255, 0.3);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  
  &:hover {
    background: rgba(74, 158, 255, 0.3);
  }
`;

const ModalTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #fff;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #4a9eff;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid rgba(74, 158, 255, 0.3);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #4a9eff;
    background: rgba(74, 158, 255, 0.1);
  }
  
  &::placeholder {
    color: #b0b0b0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid rgba(74, 158, 255, 0.3);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #4a9eff;
    background: rgba(74, 158, 255, 0.1);
  }
  
  &::placeholder {
    color: #b0b0b0;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, #4a9eff, #0066cc);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(74, 158, 255, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(74, 158, 255, 0.4);
  }
`;

const HireMePage = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isHireModalOpen, setHireModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'Contact Request from Portfolio'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setContactModalOpen(false);
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };

  const handleHireSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'Hiring Request from Portfolio'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setHireModalOpen(false);
        alert('Thank you for your interest in hiring me! I\'ll contact you within 24 hours to discuss your project.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };

  const whyHireMe = [
    {
      icon: faAward,
      title: "Proven Expertise",
      description: "3+ years of experience delivering enterprise-grade solutions for various industries with cutting-edge technologies."
    },
    {
      icon: faRocket,
      title: "Fast Delivery",
      description: "Efficient development process with agile methodologies ensuring timely project completion and regular updates."
    },
    {
      icon: faCheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes to ensure robust, scalable, and maintainable software solutions."
    },
    {
      icon: faClock,
      title: "24/7 Support",
      description: "Ongoing support and maintenance services to keep your applications running smoothly and updated."
    }
  ];

  return (
    <Container>
      <Section>
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
            Ready to Hire Me?
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Samuel Gichohi - Full-Stack Mobile Developer
          </Subtitle>
          
          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I am a seasoned full-stack mobile developer with over 3 years of experience building 
            scalable, efficient, and innovative software solutions. I specialize in mobile app development, 
            enterprise systems, and creating impactful digital experiences that drive business growth.
      </Description>
          
          <ActionButtons>
            <PrimaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setHireModalOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <FontAwesomeIcon icon={faHandshake} />
              Hire Me Now
            </PrimaryButton>
            
            <SecondaryButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setContactModalOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
      >
              <FontAwesomeIcon icon={faEnvelope} />
        Get in Touch
            </SecondaryButton>
          </ActionButtons>
        </HeroSection>

        <InfoGrid>
          {whyHireMe.map((item, index) => (
            <InfoCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <InfoIcon>
                <FontAwesomeIcon icon={item.icon} />
              </InfoIcon>
              <InfoTitle>{item.title}</InfoTitle>
              <InfoDescription>{item.description}</InfoDescription>
            </InfoCard>
          ))}
        </InfoGrid>

      <ContactInfo>
          <ContactTitle>Contact Information</ContactTitle>
          
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
      </ContactInfo>

        <Description style={{ textAlign: 'center', marginTop: '40px' }}>
          Thank you for considering me for your project. I look forward to the opportunity 
          to work with you and create something amazing together that will drive your business forward.
      </Description>

        <AnimatePresence>
      {isContactModalOpen && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setContactModalOpen(false)}
            >
              <ModalContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton 
                  onClick={() => setContactModalOpen(false)}
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </CloseButton>
                
                <ModalTitle>Contact Me</ModalTitle>
                
            <form onSubmit={handleContactSubmit}>
                  <FormGroup>
                    <Label htmlFor="contact-name">Your Name</Label>
              <Input
                      id="contact-name"
                type="text"
                name="name"
                      placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="contact-email">Your Email</Label>
              <Input
                      id="contact-email"
                type="email"
                name="email"
                      placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="contact-message">Your Message</Label>
              <TextArea
                      id="contact-message"
                name="message"
                      placeholder="Tell me about your project or ask any questions..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
                  </FormGroup>
                  
                  <SubmitButton
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Send Message
                  </SubmitButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}

      {isHireModalOpen && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setHireModalOpen(false)}
            >
              <ModalContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton 
                  onClick={() => setHireModalOpen(false)}
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </CloseButton>
                
                <ModalTitle>Hire Me</ModalTitle>
                
            <form onSubmit={handleHireSubmit}>
                  <FormGroup>
                    <Label htmlFor="hire-name">Your Name</Label>
              <Input
                      id="hire-name"
                type="text"
                name="name"
                      placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="hire-email">Your Email</Label>
              <Input
                      id="hire-email"
                type="email"
                name="email"
                      placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="hire-message">Project Details</Label>
              <TextArea
                      id="hire-message"
                name="message"
                      placeholder="Describe your project, timeline, budget, and requirements..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
                  </FormGroup>
                  
                  <SubmitButton
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FontAwesomeIcon icon={faHandshake} />
                    Submit Hiring Request
                  </SubmitButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
        </AnimatePresence>
      </Section>
    </Container>
  );
};

export default HireMePage;



