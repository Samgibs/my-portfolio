import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import WebDevIcon from '../assets/webdev-icon.png';
import ECommerceIcon from '../assets/ecommerce-icon.png';
import CustomSoftwareIcon from '../assets/customsoftware-icon.png';
import FullStackIcon from '../assets/fullstack-icon.png';
import DatabaseIcon from '../assets/database-icon.png';
import CMSIcon from '../assets/cms-icon.jpeg';
import SEOIcon from '../assets/seo-icon.png';

const Container = styled.div`
  background: #15696F;
  color: #EEF2F0;
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 40px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled(motion.div)`
  background: #EEF2F0;
  color: #15696F;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  margin-bottom: 20px;
  img {
    width: 50px;
    height: 50px;
  }
`;

const ServiceTitle = styled.h2`
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
`;

const services = [
  {
    title: 'Website Development',
    description: 'Building responsive and engaging websites.',
    icon: WebDevIcon,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Creating robust e-commerce platforms.',
    icon: ECommerceIcon,
  },
  {
    title: 'Custom Software Development',
    description: 'Developing tailored software solutions.',
    icon: CustomSoftwareIcon,
  },
  {
    title: 'Full-Stack Development',
    description: 'Handling both frontend and backend development.',
    icon: FullStackIcon,
  },
  {
    title: 'Database Management',
    description: 'Efficiently managing data and databases.',
    icon: DatabaseIcon,
  },
  {
    title: 'Content Management Systems',
    description: 'Implementing and customizing CMS.',
    icon: CMSIcon,
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Optimizing websites for better search engine ranking.',
    icon: SEOIcon,
  },
];

const ServicesPage = () => (
  <Container>
    <Title>Services</Title>
    <ServicesGrid>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ServiceIcon>
            <img src={service.icon} alt={`${service.title} Icon`} />
          </ServiceIcon>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
        </ServiceCard>
      ))}
    </ServicesGrid>
  </Container>
);

export default ServicesPage;
