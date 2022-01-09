import { motion } from 'framer-motion';
import React from 'react'

export default function InitialTransition() {
  const blackBox = {
    initial: {
      height: "100vh", 
      y: -50   
    },
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="relative z-50 w-full bg-black"
        initial="initial"
        animate="animate"
	      variants={blackBox}
      />      
    </div>
  )
}
