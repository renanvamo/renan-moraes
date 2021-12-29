import React from 'react';
import linkedin from '../images/linkedin.png';
import github from '../images/logotipo-do-github.png';
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();
  const tabs = ['Skills', 'Career', 'Contact' ];
  const myLinkedin = 'https://linkedin.com/in/renan-vamo';
  const myGithub = 'https://github.com/renanvamo';

  return (
    <header>
      <nav>
        <span onClick={ () => navigate(`/`) }>RM</span>
        <ul className='nav-left'>
          { tabs.map((tab, i) => (
            <li
              key={ `${i}-${tab}` }
              onClick={ () => navigate(`/${tab.toLowerCase()}`) }
            >
              { tab }
            </li>
          )) }
        </ul>
        <div className='nav-right'>
          <a href={ myLinkedin } target="_blank" rel="noreferrer"><img src={ linkedin } alt="logotipo-linkedin" /></a>
          <a href={ myGithub } target="_blank" rel="noreferrer"><img src= { github } alt="logotipo-github" /></a>
        </div>
      </nav>
    </header>
  );
}
