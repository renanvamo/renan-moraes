import React, { useState } from 'react';
import { Footer, Header } from '../components'

const skillsFront = {
  ReactJS: 'https://img.icons8.com/color/200/000000/react-native.png',
  Redux: 'https://img.icons8.com/color/200/000000/redux.png',
  Javascript: 'https://img.icons8.com/color/200/000000/javascript--v1.png',
  CSS3: 'https://img.icons8.com/color/200/000000/css3.png',
  HTML5: 'https://img.icons8.com/color/144/000000/html-5--v1.png',
};

const skillsBack = {
  NodeJS: 'https://img.icons8.com/color/200/000000/nodejs.png',
  MongoDB: 'https://img.icons8.com/color/200/000000/mongodb.png',
  MySQL: 'https://img.icons8.com/fluency/200/000000/mysql-logo.png',
};

export default function Skills() {
  // Todos os icones usados são do site https://icons8.com.br/icons/set/free-icons
  const [isFrontActive, setFrontActive] = useState(false);
  const [isBackActive, setBackActive] = useState(false);

  const toggleClass = (name) => {
    console.log(name);
    if (name === 'front') setFrontActive(!isFrontActive);
    if (name === 'back') setBackActive(!isBackActive);
  }

  const skillMap = (skills, stack) => {
    if (stack === 'front') {
      return Object.entries(skills).map((skill, i) => (
        <li
          className={ `card front-${i + 1}` }
          onClick={ (e) => toggleClass(e.target.name) }
          key={ `card${i}}` }
        >
          <div className='content'>
            <img 
              src={ skill[1] }
              alt={ `logotipo de ${skill[0]}` } 
              name='front'
              draggable="false"
            />
            <div className='skill-desc'>
              <p>{ skill[0] }</p>
            </div>
          </div>
        </li>
      ))
    }
    return Object.entries(skills).map((skill, i) => (
      <li
        className={ `card back-${i + 1}` }
        onClick={ (e) => toggleClass(e.target.name) }
        key={ `card${i}}` }
        name='back'
      >
        <div className='content'>
          <img 
            src={ skill[1] }
            alt={ `logotipo de ${skill[0]}` }  
            name='back'
            draggable="false"
          />
          <div className='skill-desc'>
            <p >{ skill[0] }</p>
          </div>
        </div>
      </li>
    ))
  };

  return (
    <>
      <Header />
      <section className='skills-container'>
        <h1 className='skills-title'>tech skills.</h1>
        <h2>Front end</h2>
        <ul className={ isFrontActive ? 'cards transition': 'cards' } >
          { skillMap(skillsFront, 'front') }
        </ul>
        <h2>Back end</h2>
        <ul className={ isBackActive ? 'cards transition': 'cards' } >
          { skillMap(skillsBack, 'back') }
        </ul>
      </section>
      <Footer />
    </>
  );
}
