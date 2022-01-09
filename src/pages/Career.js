import React from 'react';
import { Footer, Header, PageTransition } from '../components'

export default function Career() {
  return (
    <>
      <Header />
      <PageTransition>
        <section className='carrer-container'>
          <h1 className='career-title'>Career</h1>
          
          <p>Jul 2021 to present - Working in improvments of course content, projects and evaluators at Trybe school.</p>
          <Footer />
        </section>
      </PageTransition>
      <Footer />
    </>
  );
}
