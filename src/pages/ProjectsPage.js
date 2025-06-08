import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCar, 
  faBox, 
  faUsers, 
  faWarehouse, 
  faHeadset,
  faCashRegister,
  faBuilding,
  faTruck,
  faMobile,
  faCreditCard,
  faTaxi,
  faShoppingCart,
  faExternalLinkAlt,
  faGithub,
  faChartLine,
  faCalendarCheck,
  faUserTie,
  faCode,
  faStar
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

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
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
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
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
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 35px;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.9) 100%);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 0;
  border: 1px solid rgba(74, 158, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    border-color: rgba(74, 158, 255, 0.4);
    box-shadow: 0 20px 60px rgba(74, 158, 255, 0.15), 0 0 0 1px rgba(74, 158, 255, 0.1);
    
    .project-header {
      background: linear-gradient(135deg, #4a9eff 0%, #0066cc 100%);
    }
    
    .project-icon {
      transform: scale(1.1) rotateY(360deg);
    }
    
    .shimmer-effect {
      animation: ${shimmer} 1.5s ease-in-out;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(74, 158, 255, 0.03) 0%, rgba(0, 102, 204, 0.02) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ProjectHeader = styled.div`
  background: linear-gradient(135deg, rgba(74, 158, 255, 0.2) 0%, rgba(0, 102, 204, 0.15) 100%);
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid rgba(74, 158, 255, 0.1);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
  width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`;

const ProjectIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, #4a9eff 0%, #0066cc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: white;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 24px rgba(74, 158, 255, 0.3);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #4a9eff, #0066cc, #4a9eff);
    border-radius: 18px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 0.7;
  }
`;

const ProjectTitleWrapper = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #ffffff;
  line-height: 1.3;
`;

const ProjectCategory = styled.span`
  font-size: 0.85rem;
  color: #4a9eff;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProjectContent = styled.div`
  padding: 30px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 25px;
  font-weight: 400;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
`;

const TechTag = styled.span`
  background: linear-gradient(135deg, rgba(74, 158, 255, 0.15) 0%, rgba(0, 102, 204, 0.1) 100%);
  color: #4a9eff;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(74, 158, 255, 0.2);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: linear-gradient(135deg, rgba(74, 158, 255, 0.25) 0%, rgba(0, 102, 204, 0.2) 100%);
    color: #ffffff;
    border-color: rgba(74, 158, 255, 0.4);
    transform: translateY(-2px);
  }
`;

const ProjectFooter = styled.div`
  padding: 0 30px 30px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4a9eff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 10px 16px;
  border: 1.5px solid rgba(74, 158, 255, 0.3);
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(74, 158, 255, 0.1) 0%, rgba(0, 102, 204, 0.05) 100%);
  
  &:hover {
    color: #ffffff;
    background: linear-gradient(135deg, #4a9eff 0%, #0066cc 100%);
    border-color: #4a9eff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 158, 255, 0.3);
  }
`;

const ProjectStats = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  
  .icon {
    color: #4a9eff;
  }
`;

const ProjectsPage = () => {
  const projects = [
    {
      title: "Mobile Booking Application",
      category: "Mobile Development",
      description: "Comprehensive booking system for service-based businesses with real-time scheduling, notifications, and payment integration. Features advanced calendar management and customer communication tools.",
      icon: faMobile,
      techStack: ["Kotlin", "Java", "Android SDK", "Firebase", "REST APIs", "Real-time"],
      links: [],
      complexity: "High",
      
    },
    {
      title: "Advanced Point of Sale System",
      category: "Enterprise Software",
      description: "Feature-rich POS system with inventory management, sales analytics, and multi-payment gateway support for retail businesses. Includes real-time reporting and multi-location support.",
      icon: faCashRegister,
      techStack: ["Java", "Spring Boot", "MySQL", "Android", "Payment APIs", "Analytics"],
      links: [],
      complexity: "High",
      
    },
    {
      title: "Mobile Payment Gateway",
      category: "FinTech Solution",
      description: "Secure payment processing system supporting multiple payment methods including mobile money, cards, and bank transfers. Built with enterprise-grade security and fraud prevention.",
      icon: faCreditCard,
      techStack: ["Java", "Spring Boot", "Security", "Payment APIs", "MySQL", "Encryption"],
      links: [],
      complexity: "Expert",
      
    },
    {
      title: "Multitenant SaaS Platform",
      category: "SaaS Development",
      description: "Scalable SaaS solution serving multiple businesses with isolated data, custom branding, and role-based access control. Features automated billing and tenant management.",
      icon: faBuilding,
      techStack: ["PHP Laravel", "MySQL", "Vue.js", "Multi-tenancy", "Redis", "SaaS"],
      links: [],
      complexity: "Expert",
      
    },
    {
      title: "Fleet Management System",
      category: "IoT & Tracking",
      description: "Real-time vehicle tracking and management system with GPS integration, maintenance scheduling, and driver management. Includes route optimization and fuel monitoring.",
      icon: faTruck,
      techStack: ["PHP Laravel", "MySQL", "Google Maps API", "Real-time tracking", "Bootstrap"],
      links: [],
      complexity: "High",
      
    },
    {
      title: "Marlin Mobility",
      category: "Startup Project",
      description: "Innovative taxi hailing application with real-time matching, route optimization, and integrated payment systems. Features driver and passenger apps with live tracking.",
      icon: faTaxi,
      techStack: ["Kotlin", "Node.js", "MongoDB", "Google Maps", "Socket.io", "Payment APIs"],
      links: [
        { label: "View Demo", url: "#", icon: faExternalLinkAlt }
      ],
      complexity: "Expert",
      
    },
    {
      title: "Civrot E-commerce Platform",
      category: "E-commerce",
      description: "Modern e-commerce platform with advanced product catalog, secure payments, and comprehensive admin dashboard. Features inventory management and order tracking.",
      icon: faShoppingCart,
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redux"],
      links: [
        { label: "Visit Store", url: "#", icon: faExternalLinkAlt }
      ],
      complexity: "High",
      
    },
    {
      title: "Car Valuation Platform",
      category: "AI & Analytics",
      description: "Automated vehicle valuation platform using market data analysis and machine learning for accurate pricing estimates. Features comprehensive vehicle database and market trends.",
      icon: faCar,
      techStack: ["Python", "Django", "PostgreSQL", "Machine Learning", "REST APIs", "Data Analytics"],
      links: [],
      complexity: "Expert",
      
    },
    {
      title: "Project Management System",
      category: "Enterprise Tools",
      description: "Enterprise project planning and tracking platform with task assignment, timeline management, and progress reporting. Features team collaboration and resource allocation.",
      icon: faCalendarCheck,
      techStack: ["Java", "Spring Boot", "MySQL", "Angular", "REST APIs", "Project Management"],
      links: [],
      complexity: "High",
      
    },
    {
      title: "Inventory Management System",
      category: "Enterprise Software",
      description: "Comprehensive inventory tracking system with stock alerts, supplier management, and automated reordering. Features barcode scanning and warehouse management.",
      icon: faWarehouse,
      techStack: ["Java", "Spring Boot", "MySQL", "Angular", "Barcode scanning", "Automation"],
      links: [],
      complexity: "High",
      
    },
    {
      title: "Human Resource Management",
      category: "HR Technology",
      description: "Complete HRMS with employee records, payroll processing, and performance tracking. Features leave management, attendance tracking, and report generation.",
      icon: faUserTie,
      techStack: ["Java", "Spring Boot", "MySQL", "Angular", "PDF Reports", "Payroll"],
      links: [],
      complexity: "High",
      
    },
    {
      title: "NGO Management Platform",
      category: "Non-Profit Tech",
      description: "Comprehensive management system for NGO operations including donor management, project tracking, and financial reporting. Features grant management and impact measurement.",
      icon: faUsers,
      techStack: ["PHP Laravel", "MySQL", "Bootstrap", "Chart.js", "PDF Generation", "Reporting"],
      links: [],
      complexity: "Medium",
      
    }
  ];

  const getComplexityColor = (complexity) => {
    switch(complexity) {
      case 'Expert': return '#ff6b6b';
      case 'High': return '#4ecdc4';
      case 'Medium': return '#45b7d1';
      default: return '#96ceb4';
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
            Featured Projects
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of innovative software solutions I've developed, spanning mobile applications, 
            enterprise systems, e-commerce platforms, and SaaS solutions that solve real-world business challenges.
          </Subtitle>
        </Header>

    <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectHeader className="project-header">
                <ProjectIcon className="project-icon">
                  <FontAwesomeIcon icon={project.icon} />
                </ProjectIcon>
                <ProjectTitleWrapper>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectCategory>{project.category}</ProjectCategory>
                </ProjectTitleWrapper>
                <div className="shimmer-effect" />
              </ProjectHeader>
              
              <ProjectContent>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TechStack>
                  {project.techStack.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
              
              <ProjectFooter>
                <ProjectStats>
                  <StatItem>
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <span style={{ color: getComplexityColor(project.complexity) }}>
                      {project.complexity}
                    </span>
                  </StatItem>
                  <StatItem>
                    <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
                    <span>{project.duration}</span>
                  </StatItem>
                </ProjectStats>
                
                {project.links && project.links.length > 0 && (
                  <ProjectLinks>
                    {project.links.map((link, linkIndex) => (
                      <ProjectLink 
                        key={linkIndex} 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={link.icon} />
                        {link.label}
                      </ProjectLink>
                    ))}
                  </ProjectLinks>
                )}
              </ProjectFooter>
      </ProjectCard>
          ))}
    </ProjectsGrid>
      </Section>
  </Container>
);
};

export default ProjectsPage;

