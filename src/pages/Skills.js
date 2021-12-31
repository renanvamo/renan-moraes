import React from 'react';
import { Footer, Header } from '../components'

export default function Skills() {
  // Todos os icones usados são do site https://icons8.com.br/icons/set/free-icons
  
  const skillsFront = {
    HTML5: 'https://img.icons8.com/color/48/000000/html-5--v1.png',
    CSS3: 'https://img.icons8.com/color/48/000000/css3.png',
    Javascript: 'https://img.icons8.com/color/48/000000/javascript--v1.png',
    ReactJS: 'https://img.icons8.com/color/48/000000/react-native.png',
    Redux: 'https://img.icons8.com/color/48/000000/redux.png',
  };

  const skillsBack = {
    NodeJS: 'https://img.icons8.com/color/48/000000/nodejs.png',
    MongoDB: 'https://img.icons8.com/color/48/000000/mongodb.png',
    MySQL: 'https://img.icons8.com/fluency/48/000000/mysql-logo.png',
  };

  const skillMap = (obj) => (
    Object.entries(obj).map((skill) => (
      <div>
        <img 
          src={ skill[1] }
          alt={ `logotipo de ${skill[0]}` }  
        />
        <span>{ skill[0] }</span>
      </div>
    ))
  );

  return (
    <>
      <Header />
      <h1>tech skills.</h1>
      <h2>Front end</h2>
      { skillMap(skillsFront) }
      <h2>Back end</h2>
      { skillMap(skillsBack) }
      <Footer />
    </>
  );
}
