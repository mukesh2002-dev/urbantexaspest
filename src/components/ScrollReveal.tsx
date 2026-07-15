'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up', duration = 0.7 }: Props) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const directionVariants = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ ...directionVariants[direction], opacity: 0 }}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : { ...directionVariants[direction], opacity: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
