import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Character({ progress, index, total, char }) {
  // Compute start/end scroll fraction for this character
  const start = index / total;
  const end = Math.min(1, (index + 5) / total); // overlap slightly for smoother scrolling
  
  // Transform scroll progress to opacity 0.2 -> 1
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder to maintain layout */}
      <span className="opacity-0 select-none pointer-events-none">{char === ' ' ? '\u00A0' : char}</span>
      {/* Absolute positioned animated span */}
      <motion.span 
        style={{ opacity }} 
        className="absolute left-0 top-0 select-none pointer-events-none"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = '' }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25']
  });

  const chars = text.split('');

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center`}>
      {chars.map((char, idx) => (
        <Character 
          key={idx} 
          progress={scrollYProgress} 
          index={idx} 
          total={chars.length} 
          char={char} 
        />
      ))}
    </p>
  );
}
