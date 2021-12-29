import React from 'react';
import { Header } from '../components';
import myPhoto from '../images/renan-trybe.jpeg'


export default function Home() {
  return (
    <>
      <Header />
      <h1 className="home-title">Renan Moraes</h1>
      <p>Working and Studying at Trybe</p>
      <p>Trying to bring aknowledge and opportunities to people</p>
    </>
  );
}
