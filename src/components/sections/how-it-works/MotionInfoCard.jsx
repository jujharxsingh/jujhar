import React from 'react';
import { motion } from 'framer-motion';

export default function MotionInfoCard({ number, stepText, title, description, icon }) {
  return (
    <motion.div
      whileHover={{ 
        y: -6, 
        rotate: 2, 
        scale: 1.01,
        boxShadow: '0 25px 45px -12px rgba(24, 24, 27, 0.08), 0 0 1px rgba(135, 0, 86, 0.25)'
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="flex flex-col space-y-4.5 p-6 sm:p-8 rounded-2.5xl border border-espresso/[0.04] bg-white/80 backdrop-blur-md shadow-depth-sm hover:border-gold/35 transition-all duration-350 text-left relative overflow-hidden group select-none"
    >
      {/* Faint large absolute background number */}
      <div className="absolute -bottom-8 -right-6 text-9xl font-black text-espresso/[0.02] select-none font-mono group-hover:text-gold/[0.05] group-hover:scale-105 transition-all duration-350 pointer-events-none">
        {number}
      </div>

      {/* Row with Step micro-badge & small icon bubble */}
      <div className="flex justify-between items-center w-full relative z-10">
        {/* Step Micro-badge */}
        <span className="inline-flex items-center px-3 py-1 rounded-full border border-gold/15 bg-gold/5 text-[9px] font-bold font-mono text-gold-dark uppercase tracking-wider">
          {stepText || `Step ${number}`}
        </span>

        {/* Small Icon Bubble */}
        <div className="h-9 w-9 rounded-xl bg-gold/5 text-gold flex items-center justify-center shadow-premium-sm group-hover:bg-gold/15 group-hover:text-gold-dark transition-all duration-350 shrink-0">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-2 relative z-10">
        <h3 className="text-base sm:text-lg font-extrabold text-espresso tracking-tight group-hover:text-gold transition-colors duration-350">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Tiny Animated accent line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-burgundy to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-350 overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-white/25"
        />
      </div>
    </motion.div>
  );
}
