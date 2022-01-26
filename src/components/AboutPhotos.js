import React from 'react';
import renan from '../static/images/renan-trybe.jpeg'
import heitor from '../static/images/fio-lindo.jpeg';
import renan_e_fabiana from '../static/images/renan-e-fabi.jpg';

export default function Photos() {
  return (
    <section className='album'>
      <img  className="about-img" src={ renan } alt="Foto de um homem com camiseta da escola Trybe, ao funco há um computador" />
      <img  className="about-img" src={ heitor } alt="Foto de um bebê com sorrindo" />
      <img  className="about-img" src={ renan_e_fabiana } alt="Foto de um homem com e uma mulher sorrindo, ela segura um teste de gravidez positivo" />
    </section>
    );
}
