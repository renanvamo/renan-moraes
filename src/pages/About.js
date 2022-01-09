import React from 'react';
import { Header, AboutMe, Footer, PageTransition } from '../components'

export default function About() {
  return (
    <>
      <Header />
      <PageTransition>
        <AboutMe />
      </PageTransition>
      <Footer />
    </>
  );
}
