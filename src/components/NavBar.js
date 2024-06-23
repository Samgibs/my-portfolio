import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import HireMePage from './pages/HireMePage';
import ContactPage from './pages/ContactPage';
import './App.css';

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/hire-me" component={HireMePage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
