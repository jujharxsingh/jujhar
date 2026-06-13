import React from 'react';
import { motion } from 'framer-motion';

export default function LiveProjectButton({ label = "Live Project", onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, backgroundColor: 'rgba(215, 226, 234, 0.1)' }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-250 select-none cursor-pointer"
    >
      {label}
    </motion.button>
  );
}
