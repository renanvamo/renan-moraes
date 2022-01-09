import React from 'react';
import { Footer, Header } from '../components';
import { motion } from "framer-motion";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
  }

  return (
    <>
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
      />
      <section className="home-body">
        <h1 className="home-title">Renan Moraes</h1>
        <p>Full Stack Web Developer</p>
        <p>Working and studying at Trybe</p>
        
        <blockquote>
          "I want to make difference, bringing aknowledge and opportunities to people"
        </blockquote>
      </section>
      <Footer />
    </>
  );
}
