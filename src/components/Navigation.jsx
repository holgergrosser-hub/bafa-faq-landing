import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="https://qm-guru.de" className="flex items-center space-x-2">
            <div className="font-display text-2xl font-bold text-primary">
              QM-Guru
            </div>
          </a>

          {/* CTA */}
          <a
            href="https://calendly.com/grosser-qmguru/bafa-berater-werden"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Jetzt beraten lassen
          </a>

          {/* Mobile CTA */}
          <a
            href="tel:+4991149522541"
            className="md:hidden inline-flex items-center px-4 py-2 bg-primary text-white font-semibold rounded-lg"
          >
            Anrufen
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
