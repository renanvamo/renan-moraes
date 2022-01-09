import React from 'react';
import { Header, ContactForm, Footer, WhatasApp, PageTransition } from '../components'

export default function Contact() {
  return (
    <>
      <Header />
      <PageTransition>
        <ContactForm />
      </PageTransition>
      <WhatasApp />
      <Footer />
    </>
  );
} 