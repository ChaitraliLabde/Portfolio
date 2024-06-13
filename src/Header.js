// Header.js

import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Chaitrali's Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
