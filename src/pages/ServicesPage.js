import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMobile, 
  faServer, 
  faShoppingCart, 
  faDatabase, 
  faCogs, 
  faCloud,
  faCode,
  faUsers,
  faCreditCard,
  faChartLine,
  faShieldAlt,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

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

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
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
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 60px;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px 30px;
  border: 1px solid rgba(74, 158, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    background: rgba(74, 158, 255, 0.1);
    border-color: #4a9eff;
    box-shadow: 0 20px 40px rgba(74, 158, 255, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(45deg, #4a9eff, #0066cc);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4a9eff, #0066cc);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 2rem;
  color: white;
  animation: ${float} 4s ease-in-out infinite;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #fff;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #d0d0d0;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  text-align: left;
`;

const ServiceFeature = styled.li`
  color: #b0b0b0;
  font-size: 0.9rem;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #4a9eff;
    font-weight: bold;
  }
`;



const CTASection = styled.div`
  text-align: center;
  margin-top: 80px;
  padding: 60px 40px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(74, 158, 255, 0.2);
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #fff;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: #d0d0d0;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(45deg, #4a9eff, #0066cc);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(74, 158, 255, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(74, 158, 255, 0.4);
  }
`;

const ServicesPage = () => {
const services = [
  {
      title: 'Mobile App Development',
      description: 'Native Android applications built with Kotlin and Java, delivering exceptional user experiences and performance.',
      icon: faMobile,
      features: [
        'Native Android Development',
        'Kotlin & Java Expertise',
        'Material Design Implementation',
        'API Integration',
        'Play Store Deployment',
        'Maintenance & Support'
      ]
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side solutions using Spring Boot, PHP Laravel, and Python Django for scalable applications.',
      icon: faServer,
      features: [
        'Spring Boot Applications',
        'PHP Laravel Systems',
        'Python Django Development',
        'REST API Development',
        'Database Design',
        'Security Implementation'
      ]
  },
  {
    title: 'E-commerce Solutions',
      description: 'Complete online store development with payment integration, inventory management, and admin dashboards.',
      icon: faShoppingCart,
      features: [
        'Custom E-commerce Platforms',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing Systems',
        'Admin Dashboards',
        'Mobile Optimization'
      ]
    },
    {
      title: 'Enterprise Systems',
      description: 'Custom ERP solutions including project management, HRMS, inventory systems, and business automation.',
      icon: faCogs,
      features: [
        'ERP System Development',
        'Project Management Tools',
        'HRMS Solutions',
        'Inventory Management',
        'Business Process Automation',
        'Custom Integrations'
      ]
    },
    {
      title: 'Point of Sale Systems',
      description: 'Advanced POS solutions with real-time inventory, sales analytics, and multi-payment gateway support.',
      icon: faCreditCard,
      features: [
        'Multi-tenant POS Systems',
        'Real-time Inventory Tracking',
        'Sales Analytics & Reporting',
        'Payment Gateway Integration',
        'Receipt Management',
        'Staff Management'
      ]
    },
    {
      title: 'Database Solutions',
      description: 'Database design, optimization, and management services for MySQL, PostgreSQL, and MongoDB systems.',
      icon: faDatabase,
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration Services',
        'Backup & Recovery Solutions',
        'Security Implementation',
        'Ongoing Maintenance'
      ]
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet specific business requirements and industry needs.',
      icon: faCode,
      features: [
        'Requirements Analysis',
        'Custom Application Development',
        'System Integration',
        'User Training',
        'Documentation',
        'Ongoing Support'
      ]
    },
    {
      title: 'Fleet Management Systems',
      description: 'Real-time vehicle tracking and management solutions with GPS integration and maintenance scheduling.',
      icon: faChartLine,
      features: [
        'Real-time GPS Tracking',
        'Vehicle Maintenance Scheduling',
        'Driver Management',
        'Route Optimization',
        'Fuel Management',
        'Reporting & Analytics'
      ]
    }
  ];

  return (
  <Container>
      <Section>
        <Header>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional Services
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive software development services designed to elevate your business 
            with cutting-edge technology solutions and enterprise-grade applications.
          </Subtitle>
        </Header>

    <ServicesGrid>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
        >
          <ServiceIcon>
                <FontAwesomeIcon icon={service.icon} />
          </ServiceIcon>
              
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
              
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
        </ServiceCard>
      ))}
    </ServicesGrid>

        <CTASection>
          <CTATitle>Ready to Start Your Project?</CTATitle>
          <CTADescription>
            Let's discuss your requirements and build something amazing together. 
            I'm committed to delivering high-quality solutions that drive your business forward.
          </CTADescription>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
          >
            <FontAwesomeIcon icon={faRocket} style={{ marginRight: '10px' }} />
            Get Started Today
          </CTAButton>
        </CTASection>
      </Section>
  </Container>
);
};

export default ServicesPage;
