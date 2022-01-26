import React from 'react';
import linkedin from '../static/images/linkedin.png';
import github from '../static/images/logotipo-do-github.png';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const actualRoute = useLocation().pathname;
  const tabs = ['about', 'skills', 'career', 'contact' ];
  const myLinkedin = 'https://linkedin.com/in/renan-vamo';
  const myGithub = 'https://github.com/renanvamo';

  const navigateTo = (e, path) => {
    e.preventDefault();
    navigate(path);
  }

  return (
    <header>
      <nav className='nav-site'>
        <span onClick={ (e) => navigateTo(e, '/') } className='nav-logo'>RM</span>
        <ul className='nav-center'>
          { tabs.map((tab, i) => {
            const path = `/${tab}`
            console.log(actualRoute);
            return (
              <li
                key={ `${i}-${tab}` }
                onClick={ (e) => navigateTo(e, path) }
                className={ actualRoute === path ? 'active-page' : '' }
              >
                <a href={ path } className={ actualRoute === path ? 'active-page' : '' }>{ tab } </a>
              </li>      
            )
          }) }
        </ul>
        <div className='nav-right'>
          <a href={ myLinkedin } target="_blank" rel="noreferrer"><img src={ linkedin } alt="logotipo-linkedin" /></a>
          <a href={ myGithub } target="_blank" rel="noreferrer"><img src= { github } alt="logotipo-github" /></a>
        </div>
      </nav>
    </header>
  );
}
