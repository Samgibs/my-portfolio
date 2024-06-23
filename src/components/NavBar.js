import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #282828;
  color: #63BDB5;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = () => (
  <Nav>
    <h1>Samuel Gichohi</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/services">Services</Link>
      <Link to="/hire-me">Hire Me</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </Nav>
);

export default NavBar;


