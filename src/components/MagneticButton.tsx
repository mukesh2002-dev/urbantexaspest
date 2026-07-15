'use client';
import { useRef, useState, MouseEvent, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function MagneticButton({ children, onClick, className = '', href, type = 'button', variant = 'primary' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  const baseStyles = 'relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 overflow-hidden group cursor-pointer';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
    outline: 'bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10',
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return <button type={type}>{content}</button>;
}
