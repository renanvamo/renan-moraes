import React from 'react';
import Linkedin from '../images/linkedin.png';
import Github from '../images/logotipo-do-github.png';

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <p>RM</p>
          <p>Skills</p>
          <p>Career</p>
        </div>
        <div>
          <img src={ Linkedin } alt="logotipo-linkedin"></img>
          <img src= { Github } alt="logotipo-github"></img>
        </div>
      </nav>
    </header>
  );
}
