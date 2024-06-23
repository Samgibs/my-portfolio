import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #858585;
  color: #EEF2F0;
  padding: 50px;
`;

const AboutPage = () => (
  <Container>
    <h1>About Me</h1>
    <p>
      As a seasoned software engineer, my journey in the tech world began...
    </p>
  </Container>
);

export default AboutPage;
