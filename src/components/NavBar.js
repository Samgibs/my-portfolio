import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome, faInfoCircle, faProjectDiagram, faConciergeBell, faHandHoldingUsd, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';



const NavBar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-link">
      <FontAwesomeIcon icon={faHome} className="icon" />
      Home
    </Link>
    <Link to="/about" className="nav-link">
      <FontAwesomeIcon icon={faInfoCircle} className="icon" />
      About
    </Link>
    <Link to="/projects" className="nav-link">
      <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
      Projects
    </Link>
    <Link to="/services" className="nav-link">
      <FontAwesomeIcon icon={faConciergeBell} className="icon" />
      Services
    </Link>
    <Link to="/hire-me" className="nav-link">
      <FontAwesomeIcon icon={faHandHoldingUsd} className="icon" />
      Hire Me
    </Link>
    <Link to="/testimonials" className="nav-link">
        <FontAwesomeIcon icon={faConciergeBell} className="icon" />
        Testimonials
      </Link>
    <Link to="/contact" className="nav-link">
      <FontAwesomeIcon icon={faEnvelope} className="icon" />
      Contact
    </Link>
  </nav>
);

export default NavBar;
