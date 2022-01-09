import React from 'react';
import { Footer, Header, PageTransition } from '../components';export default function Home() {
  return (
    <>
      <Header />
      <PageTransition>
        <section className="home-body">
          <h1 className="home-title">Renan Moraes</h1>
          <p>Full Stack Web Developer</p>
          <p>Working and studying at Trybe</p>
          
          <blockquote>
            "I want to make difference, bringing aknowledge and opportunities to people"
          </blockquote>
        </section>
      </PageTransition>
      <Footer />
    </>
  );
}
