import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faInfoCircle, 
  faProjectDiagram, 
  faConciergeBell, 
  faHandHoldingUsd, 
  faEnvelope, 
  faBars, 
  faTimes,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: ${props => props.scrolled ? 
    'rgba(26, 26, 46, 0.95)' : 
    'rgba(26, 26, 46, 0.8)'
  };
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(74, 158, 255, 0.2);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #4a9eff, #0066cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover, &.active {
    color: #fff;
    background: rgba(74, 158, 255, 0.2);
    transform: translateY(-2px);
  }
  
  &.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: linear-gradient(45deg, #4a9eff, #0066cc);
    border-radius: 1px;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: rgba(74, 158, 255, 0.2);
  border: 1px solid rgba(74, 158, 255, 0.3);
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  font-size: 1.1rem;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(74, 158, 255, 0.3);
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 999;
`;

const MobileNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: 15px;
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(74, 158, 255, 0.2);
  min-width: 250px;
  justify-content: center;
  
  &:hover, &.active {
    background: rgba(74, 158, 255, 0.2);
    transform: translateY(-3px);
    color: #4a9eff;
    border-color: #4a9eff;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(74, 158, 255, 0.2);
  border: 1px solid rgba(74, 158, 255, 0.3);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  backdrop-filter: blur(10px);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(74, 158, 255, 0.3);
    transform: rotate(90deg);
  }
`;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { path: '/', icon: faHome, label: 'Home' },
    { path: '/about', icon: faInfoCircle, label: 'About' },
    { path: '/projects', icon: faProjectDiagram, label: 'Projects' },
    { path: '/services', icon: faConciergeBell, label: 'Services' },
    { path: '/testimonials', icon: faQuoteLeft, label: 'Testimonials' },
    { path: '/hire-me', icon: faHandHoldingUsd, label: 'Hire Me' },
    { path: '/contact', icon: faEnvelope, label: 'Contact' }
  ];

  return (
    <>
      <Nav
        scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <NavContainer>
          <Logo
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Samuel Gichohi
          </Logo>
          
          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                <FontAwesomeIcon icon={item.icon} size="sm" />
                {item.label}
              </NavLink>
            ))}
          </NavLinks>
          
          <MobileMenuButton
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
            
            {navItems.map((item, index) => (
              <MobileNavLink
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={item.icon} />
                {item.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;

