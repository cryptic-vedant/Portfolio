'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Cert {
  name: string;
  issuer: string;
  issuerShort: string;
  icon: string;
  color: 'primary' | 'accent' | 'secondary';
  year: string;
}

// 5 certs in grid-cols-3:
// Row 1: [col-1: Cert1] [col-2: Cert2] [col-3: Cert3]
// Row 2: [col-1: Cert4 cs-1] [col-2: Cert5 cs-2 to fill remaining]
// Placed 5/5 ✓

const certifications: Cert[] = [
  {
    name: 'Applied Machine Learning in Python',
    issuer: 'University of Michigan',
    issuerShort: 'UMich',
    icon: 'AcademicCapIcon',
    color: 'primary',
    year: '2024',
  },
  {
    name: 'Introduction to Internet of Things',
    issuer: 'NPTEL',
    issuerShort: 'NPTEL',
    icon: 'CpuChipIcon',
    color: 'accent',
    year: '2024',
  },
  {
    name: 'Google Cloud Generative AI',
    issuer: 'Google',
    issuerShort: 'Google',
    icon: 'SparklesIcon',
    color: 'secondary',
    year: '2025',
  },
  {
    name: 'OCI Data Science',
    issuer: 'Oracle Cloud Infrastructure',
    issuerShort: 'Oracle',
    icon: 'CloudIcon',
    color: 'primary',
    year: '2025',
  },
  {
    name: 'Cloud Computing',
    issuer: 'NPTEL',
    issuerShort: 'NPTEL',
    icon: 'ServerIcon',
    color: 'accent',
    year: '2024',
  },
];

const colorMap: Record<string, string> = {
  primary: 'var(--primary)',
  accent: 'var(--accent)',
  secondary: 'var(--secondary)',
};
const bgColorMap: Record<string, string> = {
  primary: 'rgba(59,130,246,0.1)',
  accent: 'rgba(6,182,212,0.1)',
  secondary: 'rgba(139,92,246,0.1)',
};
const borderColorMap: Record<string, string> = {
  primary: 'rgba(59,130,246,0.25)',
  accent: 'rgba(6,182,212,0.25)',
  secondary: 'rgba(139,92,246,0.25)',
};

export default function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines-bg opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <span className="font-mono-style text-xs font-medium tracking-widest text-accent uppercase">Credentials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Certifications &amp; <span className="text-gradient-primary">Credentials</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Third-party validated expertise from world-class institutions.
          </p>
        </div>

        {/* Certs Grid — 3 cols desktop, 2 tablet, 1 mobile */}
        {/* Row 1: [Cert1][Cert2][Cert3] — Row 2: [Cert4][Cert5 col-span-2] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => {
            // Last cert (idx 4) in lg grid: Row 2 has Cert4 at col-1, Cert5 should span col-2+col-3
            const isLastOnLg = idx === 4;
            return (
              <div
                key={cert.name}
                className={`glass-card rounded-2xl p-6 cert-card-hover section-reveal group ${
                  isLastOnLg ? 'lg:col-span-2' : ''
                }`}
                style={{
                  transitionDelay: `${idx * 80}ms`,
                  borderTop: `3px solid ${colorMap[cert.color]}`,
                }}
              >
                <div className={`flex items-start gap-4 ${isLastOnLg ? 'lg:max-w-md' : ''}`}>
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: bgColorMap[cert.color],
                      border: `1px solid ${borderColorMap[cert.color]}`,
                    }}
                  >
                    <Icon
                      name={cert.icon as Parameters<typeof Icon>[0]['name']}
                      size={24}
                      style={{ color: colorMap[cert.color] }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-sm leading-tight mb-1">{cert.name}</h3>
                    <p className="text-xs font-medium mb-2" style={{ color: colorMap[cert.color] }}>
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2 py-0.5 text-xs font-bold rounded-md"
                        style={{
                          background: bgColorMap[cert.color],
                          color: colorMap[cert.color],
                          border: `1px solid ${borderColorMap[cert.color]}`,
                        }}
                      >
                        {cert.issuerShort}
                      </span>
                      <span className="font-mono-style text-xs text-muted-foreground">{cert.year}</span>
                      <a
                        href="#"
                        className="ml-auto flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`View ${cert.name} certificate`}
                      >
                        <Icon name="ArrowTopRightOnSquareIcon" size={12} />
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}