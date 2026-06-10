import React from 'react';
import { Link } from 'react-router-dom';
import { navItems, site } from '../../content/site';
import ColorTransition from '../ui/ColorTransition';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const logoImg = `${import.meta.env.BASE_URL}agency-logo-nav.png`;

  return (
    <>
      <ColorTransition direction="light-to-dark" variant="warm" />
      <footer className="bg-espresso text-cream py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-16">
          {/* Brand Col */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white p-0.5 shadow-sm">
                <img 
                  src={logoImg} 
                  alt="IM Models Agency Logo" 
                  className="h-full w-full object-contain rounded-md"
                />
              </div>
              <span className="font-sans text-xs font-bold tracking-wider text-cream uppercase">
                IM Models Agency
              </span>
            </Link>
            <p className="text-xs text-cream/60 max-w-sm font-light leading-relaxed">
              Premium personal management and live streaming operations for independent digital talent. We empower creators with dedicated profile support, technology guidance, and active mentoring.
            </p>
          </div>

          {/* Links Col */}
          <div className="flex flex-col space-y-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="text-xs text-cream/70 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to={site.applicationPath} 
                className="text-xs text-cream/70 transition-colors hover:text-gold"
              >
                Apply As Creator
              </Link>
            </div>
          </div>

          {/* Disclaimers & Security Col */}
          <div className="flex flex-col space-y-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gold">
              Security & Policy
            </span>
            <ul className="space-y-2 text-[11px] text-cream/50 font-light leading-relaxed">
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                <span>Strictly 18+ creators only</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                <span>Zero upfront fees or investment</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                <span>Not adult work — focused on live social talent</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                <span>NDA protected profile & data privacy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between text-[10px] text-cream/40">
          <p>
            &copy; {currentYear} {site.name}. All rights reserved. Professional social streaming management and mentoring.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/apply" className="hover:text-gold">Private Application</Link>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp Support</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
