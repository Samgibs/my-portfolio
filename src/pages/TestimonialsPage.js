import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQuoteLeft, 
  faQuoteRight, 
  faStar,
  faUser,
  faChevronLeft,
  faChevronRight,
  faPlus,
  faImage
} from '@fortawesome/free-solid-svg-icons';

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
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const TestimonialSlider = styled.div`
  position: relative;
  margin-bottom: 80px;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(45deg, #4a9eff, #0066cc);
    border-radius: 20px 20px 0 0;
  }
`;

const QuoteIcon = styled.div`
  font-size: 3rem;
  color: rgba(74, 158, 255, 0.3);
  margin-bottom: 20px;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e0e0e0;
  margin-bottom: 30px;
  font-style: italic;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const ClientImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(74, 158, 255, 0.5);
`;

const ClientDetails = styled.div`
  text-align: left;
`;

const ClientName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 5px;
`;

const ClientRole = styled.p`
  font-size: 0.9rem;
  color: #4a9eff;
`;

const StarRating = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
  justify-content: center;
`;

const Star = styled.span`
  color: #ffd700;
  font-size: 1.2rem;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

const NavButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(74, 158, 255, 0.2);
  border: 1px solid rgba(74, 158, 255, 0.3);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 158, 255, 0.3);
    border-color: #4a9eff;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const AddTestimonialSection = styled.div`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  text-align: center;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #fff;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: #d0d0d0;
  margin-bottom: 30px;
`;

const TestimonialForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const FormGroup = styled.div`
  text-align: left;
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

const FileInput = styled.input`
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
  grid-column: 1 / -1;
  justify-self: center;
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

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([
    {
      name: 'John Kamau',
      role: 'CEO, Tech Solutions Ltd',
      message: 'Samuel delivered an exceptional mobile application for our business. His expertise in Kotlin and Spring Boot helped us create a robust system that has significantly improved our operations.',
      image: null,
      rating: 5
    },
    {
      name: 'Sarah Wanjiku',
      role: 'Founder, Digital Ventures',
      message: 'Working with Samuel was a game-changer for our e-commerce platform. His attention to detail and technical skills are outstanding. Highly recommended!',
      image: null,
      rating: 5
    },
    {
      name: 'Michael Ochieng',
      role: 'Operations Manager, Fleet Co.',
      message: 'The fleet management system Samuel built for us has revolutionized how we track and manage our vehicles. Professional, reliable, and technically brilliant.',
      image: null,
      rating: 5
    }
  ]);
  
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    message: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files.length > 0) {
      setFormData((prevData) => ({ 
        ...prevData, 
        [name]: URL.createObjectURL(files[0]) 
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      const newTestimonial = {
        ...formData,
        rating: 5 // Default rating
      };
      setTestimonials([...testimonials, newTestimonial]);
      setFormData({ name: '', role: '', message: '', image: null });
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Container>
      <Section>
        <Header>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Client Testimonials
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear what my clients say about working with me and the impact of the solutions I've delivered.
          </Subtitle>
        </Header>

        {testimonials.length > 0 && (
          <TestimonialSlider>
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <QuoteIcon>
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </QuoteIcon>
                
                <TestimonialText>
                  "{currentTestimonial.message}"
                </TestimonialText>
                
                <StarRating>
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i}>
                      <FontAwesomeIcon icon={faStar} />
                    </Star>
                  ))}
                </StarRating>
                
                <ClientInfo>
                  {currentTestimonial.image ? (
                    <ClientImage 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name} 
                    />
                  ) : (
                    <div 
                      style={{ 
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid rgba(74, 158, 255, 0.5)',
                        backgroundColor: 'rgba(74, 158, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.5rem', color: 'white' }} />
                    </div>
                  )}
                  <ClientDetails>
                    <ClientName>{currentTestimonial.name}</ClientName>
                    <ClientRole>{currentTestimonial.role}</ClientRole>
                  </ClientDetails>
                </ClientInfo>
              </TestimonialCard>
            </AnimatePresence>
            
            <NavigationButtons>
              <NavButton
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={testimonials.length <= 1}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </NavButton>
              <NavButton
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={testimonials.length <= 1}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </NavButton>
            </NavigationButtons>
          </TestimonialSlider>
        )}

        <AddTestimonialSection>
          <SectionTitle>Share Your Experience</SectionTitle>
          <SectionDescription>
            Worked with me? I'd love to hear about your experience! 
            Your testimonial helps others understand the value of professional software development.
          </SectionDescription>
          
          <TestimonialForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Your Name *</Label>
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
              <Label htmlFor="role">Your Role/Company</Label>
              <Input
                type="text"
                id="role"
                name="role"
                placeholder="e.g., CEO at Tech Company"
                value={formData.role}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup style={{ gridColumn: '1 / -1' }}>
              <Label htmlFor="message">Your Testimonial *</Label>
              <TextArea
                id="message"
          name="message"
                placeholder="Share your experience working with me..."
          value={formData.message}
          onChange={handleChange}
          required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="image">Profile Picture (Optional)</Label>
              <FileInput
          type="file"
                id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faPlus} />
              Add Testimonial
            </SubmitButton>
          </TestimonialForm>
        </AddTestimonialSection>
      </Section>
    </Container>
  );
};

export default TestimonialsPage;

