import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Menu, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, site } from '../../content/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isDrawerShaped = isOpen || isClosing;
  const logoImg = `${import.meta.env.BASE_URL}agency-logo-nav.png`;

  const scrollToPageTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const closeMenu = () => {
    if (!isOpen) {
      setIsClosing(false);
      return;
    }

    setIsClosing(true);
    setIsOpen(false);
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setIsClosing(false);
    }, 260);
  };

  const handleApplyNow = () => {
    closeMenu();
    navigate(site.applicationPath);
    scrollToPageTop();
    window.requestAnimationFrame(scrollToPageTop);
    window.setTimeout(scrollToPageTop, 280);
  };

  const handleMobileNavigation = (path) => {
    setIsClosing(true);
    setIsOpen(false);

    if (location.pathname !== path) {
      navigate(path);
    }

    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setIsClosing(false);
    }, 260);

    scrollToPageTop();
    window.requestAnimationFrame(scrollToPageTop);
    window.setTimeout(scrollToPageTop, 80);
    window.setTimeout(scrollToPageTop, 280);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => window.clearTimeout(closeTimerRef.current);
  }, []);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 w-full px-3 sm:top-4 sm:px-6 pointer-events-none">
      <motion.div
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        className={`mx-auto w-full overflow-hidden border border-white/15 bg-[#09090b]/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.10)] pointer-events-auto transition-[background-color,border-color,box-shadow,padding,max-width] duration-300 ${
          isScrolled ? 'max-w-4xl py-2 px-4 sm:px-5 bg-[#09090b]/75 border-white/20' : 'max-w-5xl py-2.5 px-4 sm:py-3 sm:px-6'
        } ${isDrawerShaped ? 'rounded-[1.75rem] sm:rounded-[2rem]' : 'rounded-full'}`}
      >
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <NavLink to="/" className="flex min-w-0 items-center space-x-2.5 group" onClick={closeMenu}>
            <motion.div 
              layout
              className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-white/10 border border-white/10 p-0.5 transition-all duration-350 ease-smooth group-hover:scale-105 shadow-sm ${
                isScrolled ? 'h-8 w-8' : 'h-9 w-9'
              }`}
            >
              <img
                src={logoImg}
                alt="IM Models Agency Logo"
                className="h-full w-full object-contain rounded-lg"
              />
            </motion.div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-sans text-[10px] font-extrabold tracking-wider text-white uppercase leading-none">
                IM Models
              </span>
              <span className="truncate font-mono text-[7px] font-bold tracking-widest text-gold-light uppercase mt-0.5 leading-none">
                Agency
              </span>
            </div>
          </NavLink>

          {/* Separator 1 */}
          <div className="hidden lg:block h-4 w-[1px] bg-white/15 mx-1" />

          {/* Desktop Navigation */}
          <nav className="hidden space-x-1 lg:flex relative items-center">
            {navItems.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  key={link.label}
                  to={link.path}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors duration-250 ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {/* Sliding Hover Indicator */}
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="hoverIndicator"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 26 }}
                    />
                  )}
                  {/* Active Indicator (Dot under text) */}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-light"
                      transition={{ type: 'spring', stiffness: 350, damping: 26 }}
                    />
                  )}
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Separator 2 */}
          <div className="hidden lg:block h-4 w-[1px] bg-white/15 mx-1" />

          {/* Desktop Action */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={handleApplyNow}
              className="text-[13px] font-bold tracking-normal text-white/70 transition-colors duration-250 hover:text-white"
            >
              Apply Now!
            </button>
            <div className="h-5 w-[1px] bg-white/15" />
            <div className="flex items-center gap-2">
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook profile"
                className="grid h-7 w-7 place-items-center rounded-md text-white/55 transition-all duration-250 hover:bg-white/10 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="grid h-7 w-7 place-items-center rounded-md text-white/55 transition-all duration-250 hover:bg-white/10 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp chat"
                className="grid h-7 w-7 place-items-center rounded-md text-white/55 transition-all duration-250 hover:bg-white/10 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => {
              if (isOpen) {
                closeMenu();
              } else {
                window.clearTimeout(closeTimerRef.current);
                setIsClosing(false);
                setIsOpen(true);
              }
            }}
            className="grid h-9 w-9 place-items-center rounded-full text-white hover:text-gold-light lg:hidden focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Mobile Drawer (Nest-expanding) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-white/10 lg:hidden flex flex-col space-y-4 pb-2">
                <nav className="flex flex-col space-y-2.5">
                  {navItems.map((link) => (
                    <button
                      key={link.label}
                      type="button"
                      onClick={() => handleMobileNavigation(link.path)}
                      className={`text-left text-[11px] font-bold uppercase tracking-wider transition-colors py-1 ${
                        location.pathname === link.path ? 'text-white' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-4">
                    <button
                      type="button"
                      onClick={handleApplyNow}
                      className="text-[13px] font-bold text-white/75 transition-colors hover:text-white"
                    >
                      Apply Now!
                    </button>
                    <div className="flex items-center gap-2">
                      <a
                        href={site.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook profile"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/60 transition-all hover:bg-white/10 hover:text-white"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a
                        href={site.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram profile"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/60 transition-all hover:bg-white/10 hover:text-white"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                      <a
                        href={site.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp chat"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/60 transition-all hover:bg-white/10 hover:text-white"
                      >
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
