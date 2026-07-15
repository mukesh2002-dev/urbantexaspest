'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-primary/20 rounded-full pointer-events-none z-[9998] mix-blend-difference hidden lg:block"
      style={{ translateX: '-50%', translateY: '-50%' }}
      animate={{ x: position.x, y: position.y, opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
    />
  );
}
