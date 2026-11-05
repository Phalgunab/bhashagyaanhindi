import React from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  char: string;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const particles: Particle[] = [
  { id: 1, char: 'अ', x: '8%', y: '15%', size: 38, duration: 18, delay: 0, opacity: 0.12 },
  { id: 2, char: 'ज्ञ', x: '88%', y: '22%', size: 54, duration: 22, delay: 2, opacity: 0.14 },
  { id: 3, char: 'क', x: '18%', y: '55%', size: 32, duration: 16, delay: 1, opacity: 0.1 },
  { id: 4, char: 'भा', x: '82%', y: '68%', size: 48, duration: 20, delay: 3, opacity: 0.15 },
  { id: 5, char: 'ऋ', x: '6%', y: '82%', size: 36, duration: 24, delay: 4, opacity: 0.11 },
  { id: 6, char: 'ॐ', x: '92%', y: '90%', size: 42, duration: 19, delay: 2.5, opacity: 0.12 },
  { id: 7, char: 'श', x: '50%', y: '10%', size: 30, duration: 21, delay: 1.5, opacity: 0.08 },
  { id: 8, char: 'म', x: '45%', y: '88%', size: 34, duration: 25, delay: 5, opacity: 0.09 },
];

export const FloatingDevanagariParticles: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          style={{
            position: 'absolute',
            left: p.x,
            top: p.y,
            fontSize: `${p.size}px`,
            fontFamily: "'Rozha One', 'Noto Serif Devanagari', serif",
            color: 'var(--color-deep-burgundy)',
            opacity: p.opacity,
            userSelect: 'none',
          }}
          animate={{
            y: [0, -32, 0],
            x: [0, 16, 0],
            rotate: [0, 8, -6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {p.char}
        </motion.span>
      ))}
    </div>
  );
};
