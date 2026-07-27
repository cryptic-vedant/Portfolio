import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <AppLogo size={24} />
          <span className="text-sm text-muted-foreground">
            Designed &amp; Developed by{' '}
            <span className="text-gradient-primary font-semibold">Vedant Tule</span>
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-foreground transition-colors">Home</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}