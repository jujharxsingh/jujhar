import React from 'react';

export default function ColorTransition({ 
  direction = 'light-to-dark', 
  variant = 'warm' // 'warm' | 'vibrant' | 'cool'
}) {
  // Select vertical gradient class based on variant and direction
  let gradientClass = 'gradient-transition-warm-ld';
  if (variant === 'warm') {
    gradientClass = direction === 'light-to-dark' ? 'gradient-transition-warm-ld' : 'gradient-transition-warm-dl';
  } else if (variant === 'vibrant') {
    gradientClass = direction === 'light-to-dark' ? 'gradient-transition-vibrant-ld' : 'gradient-transition-vibrant-dl';
  } else if (variant === 'cool') {
    gradientClass = direction === 'light-to-dark' ? 'gradient-transition-cool-ld' : 'gradient-transition-cool-dl';
  }

  // Select horizontal glow gradient based on variant
  let glowGradient = 'from-[#C90080]/35 via-[#870056]/80 to-[#5F003D]/65';
  if (variant === 'vibrant') {
    glowGradient = 'from-[#d9b3e2]/40 via-[#9d54d5]/80 to-[#522ca4]/60';
  } else if (variant === 'cool') {
    glowGradient = 'from-[#2bf598]/40 via-[#07aeea]/80 to-[#0b343f]/60';
  }

  return (
    <div className={`relative h-48 w-full overflow-hidden ${gradientClass} pointer-events-none`}>
      {/* 
        Horizontal neon-glow divider.
        Calibrated height and blur to fade out perfectly before the container edge to prevent clipping.
      */}
      <div className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r ${glowGradient} blur-[32px] opacity-80`} />
    </div>
  );
}
