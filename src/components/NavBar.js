import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faProjectDiagram, faConciergeBell, faHandHoldingUsd, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import './App.css';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #15696F;
  color: #EEF2F0;

  .icon {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavLink = styled(Link)`
  color: #EEF2F0;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    color: #FFD700;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 1rem 0;
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    width: 100%;
  }
`;

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Nav>
      <MenuIcon icon={menuOpen ? faTimes : faBars} onClick={toggleMenu} size="lg" />
      <Menu open={menuOpen || !isMobile}>
        <NavLink to="/" className="nav-link">
          <FontAwesomeIcon icon={faHome} className="icon" />
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          <FontAwesomeIcon icon={faInfoCircle} className="icon" />
          About
        </NavLink>
        <NavLink to="/projects" className="nav-link">
          <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
          Projects
        </NavLink>
        <NavLink to="/services" className="nav-link">
          <FontAwesomeIcon icon={faConciergeBell} className="icon" />
          Services
        </NavLink>
        <NavLink to="/hire-me" className="nav-link">
          <FontAwesomeIcon icon={faHandHoldingUsd} className="icon" />
          Hire Me
        </NavLink>
        <NavLink to="/testimonials" className="nav-link">
          <FontAwesomeIcon icon={faConciergeBell} className="icon" />
          Testimonials
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          Contact
        </NavLink>
      </Menu>
    </Nav>
  );
};

export default NavBar;

