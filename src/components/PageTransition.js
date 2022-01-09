import { motion } from 'framer-motion';
import React from 'react';

export default function PageTransition(props) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { scale: .8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { delay: .2 } },
      }}
    >
      { props.children }
    </motion.div>
  )
}
