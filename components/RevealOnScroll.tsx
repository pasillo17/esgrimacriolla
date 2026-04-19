import React from 'react';
import { motion, Variants } from 'motion/react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  className = "", 
  threshold = 0.1, 
  delay = 0,
  direction = 'up'
}) => {
  const variants: Variants = {
    hidden: { 
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: delay / 1000,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
