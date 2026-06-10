import React from 'react';
import { Link } from 'react-router-dom';

const base =
  'inline-flex min-h-11 items-center justify-center rounded-pill px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-250 ease-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]';

const variants = {
  primary: 'bg-gradient-burgundy text-white shadow-depth hover:brightness-115',
  secondary: 'border border-gold text-espresso bg-cream/40 backdrop-blur-sm hover:bg-cream hover:text-burgundy',
  ghost: 'text-espresso/60 hover:text-burgundy',
};

export default function Button({ as = Link, variant = 'primary', className = '', children, ...props }) {
  const Component = as;

  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
