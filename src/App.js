// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contactme">Contact Me</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
