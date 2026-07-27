'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
    const sections = navLinks.map((l) => l.href.replace('#', ''));
    let current = 'home';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100) current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleTheme = () => {
    setIsLight((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('light', next);
      return next;
    });
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-lg border-b border-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            // className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            // style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)' }}
            onClick={() => handleNavClick('#home')}
          >
            <Icon name="CommandLineIcon" size={30} className="text-primary" />
          </div>
          <span className="font-bold text-lg tracking-tight text-foreground hidden sm:block">
            Vedant <span className="text-gradient-primary"> Portfolio</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 px-4 py-2 glass-card rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-accent bg-accent/10' :'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-card hover:border-primary/40 transition-all duration-200"
            aria-label="Toggle theme"
          >
            <Icon name={isLight ? 'MoonIcon' : 'SunIcon'} size={18} className="text-muted-foreground" />
          </button>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="hidden lg:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-full hover:opacity-90 transition-all btn-glow"
          >
            Hire Me
          </a>
          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-full glass-card"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={20} className="text-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-accent bg-accent/10' :'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="mt-2 px-4 py-3 bg-primary text-primary-foreground text-sm font-bold rounded-lg text-center btn-glow"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}