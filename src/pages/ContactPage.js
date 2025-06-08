import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faPaperPlane,
  faUser,
  faMessage,
  faLinkedin,
  faGithub,
  faTwitter
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin as faLinkedinBrand, faGithub as faGithubBrand, faTwitter as faTwitterBrand } from '@fortawesome/free-brands-svg-icons';

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
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

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
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

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #d0d0d0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactInfo = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(74, 158, 255, 0.2);
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: #fff;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(74, 158, 255, 0.1);
  border-radius: 15px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 158, 255, 0.2);
    transform: translateX(5px);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4a9eff, #0066cc);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  animation: ${float} 3s ease-in-out infinite;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: 0.9rem;
  color: #4a9eff;
  font-weight: 500;
  margin-bottom: 5px;
`;

const ContactValue = styled.div`
  font-size: 1.1rem;
  color: #fff;
  font-weight: 600;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  justify-content: center;
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

const ContactForm = styled(motion.form)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(74, 158, 255, 0.2);
`;

const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: #fff;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
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
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(74, 158, 255, 0.3);
  width: 100%;
  justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(74, 158, 255, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled.div`
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-weight: 500;
  
  &.success {
    background: rgba(76, 175, 80, 0.2);
    border: 1px solid rgba(76, 175, 80, 0.3);
    color: #4caf50;
  }
  
  &.error {
    background: rgba(244, 67, 54, 0.2);
    border: 1px solid rgba(244, 67, 54, 0.3);
    color: #f44336;
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

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
          subject: 'New Contact Form Submission'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Section>
        <Header>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </Subtitle>
        </Header>

        <ContentGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
            
            <ContactItem>
              <ContactIcon>
                <FontAwesomeIcon icon={faEnvelope} />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>mukabi339@gmail.com</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <FontAwesomeIcon icon={faPhone} />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel>Phone</ContactLabel>
                <ContactValue>+254719271828</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel>Location</ContactLabel>
                <ContactValue>Nairobi, Kenya</ContactValue>
              </ContactDetails>
            </ContactItem>

            <SocialLinks>
              <SocialIcon
                href="https://www.linkedin.com/in/samuel-gichohi-2a44822b3/"
                target="_blank"
                whileHover={{ scale: 1.1, rotateZ: 5 }}
              >
                <FontAwesomeIcon icon={faLinkedinBrand} />
              </SocialIcon>
              <SocialIcon
                href="https://github.com/Samgibs"
                target="_blank"
                whileHover={{ scale: 1.1, rotateZ: -5 }}
              >
                <FontAwesomeIcon icon={faGithubBrand} />
              </SocialIcon>
              <SocialIcon
                href="https://x.com/samuelgibson722"
                target="_blank"
                whileHover={{ scale: 1.1, rotateZ: 5 }}
              >
                <FontAwesomeIcon icon={faTwitterBrand} />
              </SocialIcon>
            </SocialLinks>
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onSubmit={handleSubmit}
          >
            <FormTitle>Send Me a Message</FormTitle>
            
            {status.message && (
              <StatusMessage className={status.type}>
                {status.message}
              </StatusMessage>
            )}

            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input
          type="text"
                id="name"
          name="name"
                placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Your Email</Label>
              <Input
          type="email"
                id="email"
          name="email"
                placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Your Message</Label>
              <TextArea
                id="message"
          name="message"
                placeholder="Tell me about your project or ask any questions..."
          value={formData.message}
          onChange={handleChange}
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
      </ContactForm>
        </ContentGrid>
      </Section>
    </Container>
  );
};

export default ContactPage;




