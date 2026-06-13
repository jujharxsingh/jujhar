import React from 'react';
import { motion } from 'framer-motion';

export default function TrustBadge({ text, icon }) {
  return (
    <motion.div
      whileHover={{ 
        y: -3, 
        scale: 1.03, 
        boxShadow: '0 10px 25px -10px rgba(135, 0, 86, 0.25)',
        borderColor: 'rgba(135, 0, 86, 0.3)'
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-gold/15 bg-white/45 backdrop-blur-md shadow-premium-sm select-none cursor-default group"
    >
      {/* Icon with dot indicator */}
      <div className="relative flex items-center justify-center shrink-0">
        {icon ? (
          <span className="text-gold group-hover:text-gold-dark transition-colors duration-250 flex items-center justify-center">
            {icon}
          </span>
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        )}
        {/* Glow indicator dot (only visible/pulsing on hover) */}
        <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-burgundy opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-250" />
      </div>
      <span className="text-2xs sm:text-xs font-bold text-espresso/80 tracking-wide font-sans">{text}</span>
    </motion.div>
  );
}
