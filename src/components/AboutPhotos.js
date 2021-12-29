import React from 'react';
import myPhoto from '../images/renan-trybe.jpeg'

export default function Photos() {
  return (
    <img  className="about-img" src={ myPhoto } alt="Foto de um homem com camiseta da escola Trybe, ao funco há um computador" />
  );
}
