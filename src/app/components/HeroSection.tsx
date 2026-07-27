'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const roles = ['AI & Machine Learning Engineer', 'Data Science Enthusiast'];

function NetworkSVG() {
  return (
    <svg
      viewBox="0 0 500 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="Abstract AI neural network visualization with interconnected nodes"
    >
      {/* Animated network lines */}
      <line x1="250" y1="210" x2="120" y2="100" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.5" className="animate-network-pulse" />
      <line x1="250" y1="210" x2="380" y2="100" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.5" className="animate-network-pulse" style={{ animationDelay: '0.5s' }} />
      <line x1="250" y1="210" x2="80" y2="260" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.5" className="animate-network-pulse" style={{ animationDelay: '1s' }} />
      <line x1="250" y1="210" x2="420" y2="260" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.5" className="animate-network-pulse" style={{ animationDelay: '1.5s' }} />
      <line x1="250" y1="210" x2="200" y2="340" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.5" className="animate-network-pulse" style={{ animationDelay: '0.7s' }} />
      <line x1="250" y1="210" x2="310" y2="340" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.5" className="animate-network-pulse" style={{ animationDelay: '0.3s' }} />
      <line x1="120" y1="100" x2="380" y2="100" stroke="var(--primary)" strokeWidth="1" opacity="0.25" />
      <line x1="80" y1="260" x2="420" y2="260" stroke="var(--accent)" strokeWidth="1" opacity="0.25" />
      <line x1="120" y1="100" x2="80" y2="260" stroke="var(--secondary)" strokeWidth="1" opacity="0.2" />
      <line x1="380" y1="100" x2="420" y2="260" stroke="var(--primary)" strokeWidth="1" opacity="0.2" />
      <line x1="200" y1="340" x2="80" y2="260" stroke="var(--accent)" strokeWidth="1" opacity="0.2" />
      <line x1="310" y1="340" x2="420" y2="260" stroke="var(--secondary)" strokeWidth="1" opacity="0.2" />
      {/* Secondary nodes */}
      <line x1="120" y1="100" x2="60" y2="60" stroke="var(--primary)" strokeWidth="1" opacity="0.3" />
      <line x1="380" y1="100" x2="440" y2="60" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
      <line x1="80" y1="260" x2="30" y2="310" stroke="var(--secondary)" strokeWidth="1" opacity="0.3" />
      <line x1="420" y1="260" x2="470" y2="310" stroke="var(--primary)" strokeWidth="1" opacity="0.3" />
      {/* Outer ring */}
      <circle cx="250" cy="210" r="130" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2" className="animate-rotate-slow" />
      <circle cx="250" cy="210" r="175" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 12" opacity="0.12" />
      {/* Main center node */}
      <circle cx="250" cy="210" r="32" fill="var(--primary)" fillOpacity="0.15" stroke="var(--primary)" strokeWidth="2" className="animate-pulse-glow" />
      <circle cx="250" cy="210" r="18" fill="var(--primary)" fillOpacity="0.3" />
      <circle cx="250" cy="210" r="8" fill="var(--primary)" />
      {/* Satellite nodes */}
      <circle cx="120" cy="100" r="18" fill="var(--accent)" fillOpacity="0.15" stroke="var(--accent)" strokeWidth="1.5" className="animate-network-pulse" />
      <circle cx="120" cy="100" r="8" fill="var(--accent)" />
      <circle cx="380" cy="100" r="18" fill="var(--secondary)" fillOpacity="0.15" stroke="var(--secondary)" strokeWidth="1.5" className="animate-network-pulse" style={{ animationDelay: '1s' }} />
      <circle cx="380" cy="100" r="8" fill="var(--secondary)" />
      <circle cx="80" cy="260" r="14" fill="var(--primary)" fillOpacity="0.15" stroke="var(--primary)" strokeWidth="1.5" />
      <circle cx="80" cy="260" r="6" fill="var(--primary)" />
      <circle cx="420" cy="260" r="14" fill="var(--accent)" fillOpacity="0.15" stroke="var(--accent)" strokeWidth="1.5" />
      <circle cx="420" cy="260" r="6" fill="var(--accent)" />
      <circle cx="200" cy="340" r="12" fill="var(--secondary)" fillOpacity="0.15" stroke="var(--secondary)" strokeWidth="1.5" />
      <circle cx="200" cy="340" r="5" fill="var(--secondary)" />
      <circle cx="310" cy="340" r="12" fill="var(--primary)" fillOpacity="0.15" stroke="var(--primary)" strokeWidth="1.5" />
      <circle cx="310" cy="340" r="5" fill="var(--primary)" />
      {/* Outer micro nodes */}
      <circle cx="60" cy="60" r="6" fill="var(--primary)" fillOpacity="0.5" />
      <circle cx="440" cy="60" r="6" fill="var(--accent)" fillOpacity="0.5" />
      <circle cx="30" cy="310" r="5" fill="var(--secondary)" fillOpacity="0.5" />
      <circle cx="470" cy="310" r="5" fill="var(--primary)" fillOpacity="0.5" />
      {/* Labels */}
      <text x="108" y="88" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)" opacity="0.7">ML</text>
      <text x="368" y="88" fill="var(--secondary)" fontSize="9" fontFamily="var(--font-mono)" opacity="0.7">AI</text>
      <text x="230" y="206" fill="white" fontSize="9" fontFamily="var(--font-mono)" opacity="0.9" textAnchor="middle">VT</text>
    </svg>
  );
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; opacity: number; color: string }[] = [];
    const colors = ['rgba(59,130,246', 'rgba(6,182,212', 'rgba(139,92,246'];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color},${p.opacity})`;
        ctx.fill();
      });
      // Draw connecting lines for nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${0.05 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-lines-bg" aria-hidden="true" />
      <div className="absolute inset-0 hero-glow" aria-hidden="true" />
      <ParticleCanvas />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-4rem)] py-16">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono-style text-xs font-medium tracking-widest text-accent uppercase">
                Open to Opportunities
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              Hi, I&apos;m{' '}
              <span className="text-gradient-primary">Vedant Tule</span>
            </h1>

            {/* Typing subtitle */}
            <div className="flex items-center h-10 sm:h-12">
              <span className="text-xl sm:text-2xl font-semibold text-muted-foreground">
                {displayText}
                <span className="typing-cursor" aria-hidden="true" />
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Computer Science &amp; Engineering (AI &amp; ML) student at VIT Bhopal, building
              AI-powered applications and scalable software solutions. Passionate about predictive
              modelling, data-driven insights, and full-stack development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-all btn-glow text-sm"
              >
                <Icon name="FolderOpenIcon" size={18} />
                View Projects
              </button>
              <a
                href="/assets/Vedant Tule - Resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 glass-card text-foreground font-semibold rounded-full hover:border-primary/40 transition-all text-sm"
              >
                <Icon name="ArrowDownTrayIcon" size={18} />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-6 py-3 border border-accent/40 text-accent font-semibold rounded-full hover:bg-accent/10 transition-all text-sm"
              >
                <Icon name="EnvelopeIcon" size={18} />
                Contact
              </button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { val: '4+', label: 'Projects' },
                { val: '15+', label: 'Technologies' },
                { val: '5', label: 'Certifications' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-extrabold text-gradient-primary">{s.val}</div>
                  <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Network SVG */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] animate-float-slow">
              {/* Glow behind SVG */}
              <div
                className="absolute inset-8 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(30px)' }}
                aria-hidden="true"
              />
              <NetworkSVG />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-slow">
          <span className="text-xs text-muted-foreground font-mono-style tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}