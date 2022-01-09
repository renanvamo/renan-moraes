import { motion } from 'framer-motion';
import React from 'react';

export default function PageTransition(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }} 
    >
      { props.children }
    </motion.div>
  )
}
