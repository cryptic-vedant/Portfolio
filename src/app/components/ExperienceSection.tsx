'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'project' | 'certification' | 'achievement';
  icon: string;
  color: 'primary' | 'accent' | 'secondary';
  current?: boolean;
}

const timeline: TimelineItem[] = [
  {
    date: 'May 2023',
    title: 'Class 12 – CBSE Completed',
    subtitle: 'Atmiya Vidyapeeth, Kutch, Gujarat',
    description: 'Completed Class 12 with Physics, Chemistry, Mathematics — 83.8%. Strong foundation in mathematics and analytical thinking.',
    type: 'education',
    icon: 'AcademicCapIcon',
    color: 'accent',
  },
  {
    date: 'Sep 2023',
    title: 'B.Tech CSE (AI & ML) – Started',
    subtitle: 'Vellore Institute of Technology, Bhopal',
    description: 'Enrolled in B.Tech Computer Science & Engineering with specialization in Artificial Intelligence and Machine Learning. Current CGPA: 8.39.',
    type: 'education',
    icon: 'BuildingLibraryIcon',
    color: 'primary',
  },
  {
    date: '2024',
    title: 'Certifications – University of Michigan & NPTEL',
    subtitle: 'Applied ML in Python · IoT · Cloud Computing',
    description: 'Completed Applied Machine Learning in Python (University of Michigan), Introduction to IoT (NPTEL), and Cloud Computing (NPTEL).',
    type: 'certification',
    icon: 'TrophyIcon',
    color: 'secondary',
  },
  {
    date: '2025',
    title: 'Google & Oracle Certifications',
    subtitle: 'Google Cloud Generative AI · OCI Data Science',
    description: 'Earned Google Cloud Generative AI certification and Oracle Cloud Infrastructure (OCI) Data Science certification, expanding cloud and GenAI expertise.',
    type: 'certification',
    icon: 'StarIcon',
    color: 'accent',
  },
  {
    date: 'Jan 2026 – Apr 2026',
    title: 'HydroSense — AI Crop Advisor',
    subtitle: 'Major Project · XGBoost + IoT Sensor Integration',
    description: 'Integrated XGBoost ML model into a web application enabling real-time crop recommendations using live environmental sensor data. Delivered scalable backend and user-friendly interface.',
    type: 'project',
    icon: 'CpuChipIcon',
    color: 'accent',
  },
  {
    date: 'Jul 2026 – Present',
    title: 'FinGuard AI — Personal Finance Platform',
    subtitle: 'Ongoing Project · AI-Powered Fraud Detection',
    description: 'Building an AI-powered personal finance platform with ML-based fraud detection, spending pattern analysis, and personalized financial insights via REST APIs.',
    type: 'project',
    icon: 'BoltIcon',
    color: 'primary',
    current: true,
  },
];

const colorMap: Record<string, string> = {
  primary: 'var(--primary)',
  accent: 'var(--accent)',
  secondary: 'var(--secondary)',
};
const bgColorMap: Record<string, string> = {
  primary: 'rgba(59,130,246,0.15)',
  accent: 'rgba(6,182,212,0.15)',
  secondary: 'rgba(139,92,246,0.15)',
};
const borderColorMap: Record<string, string> = {
  primary: 'rgba(59,130,246,0.3)',
  accent: 'rgba(6,182,212,0.3)',
  secondary: 'rgba(139,92,246,0.3)',
};
const typeBadge: Record<string, string> = {
  education: 'Education',
  project: 'Project',
  certification: 'Certification',
  achievement: 'Achievement',
};

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll('.section-reveal, .slide-left, .slide-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 sm:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(139,92,246,0.04) 0%, transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <span className="font-mono-style text-xs font-medium tracking-widest text-accent uppercase">Journey</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Experience &amp; <span className="text-gradient-secondary">Timeline</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 timeline-line"
            style={{ transform: 'translateX(-50%)' }}
            aria-hidden="true"
          />

          <div className="space-y-8">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex items-start gap-4 sm:gap-0 ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } ${isEven ? 'slide-left' : 'slide-right'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Spacer for desktop alignment */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />

                  {/* Center Node */}
                  <div
                    className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center sm:mx-0 ml-0"
                    style={{
                      background: bgColorMap[item.color],
                      border: `2px solid ${colorMap[item.color]}`,
                      boxShadow: `0 0 15px ${colorMap[item.color]}40`,
                    }}
                  >
                    <Icon
                      name={item.icon as Parameters<typeof Icon>[0]['name']}
                      size={20}
                      style={{ color: colorMap[item.color] }}
                    />
                    {item.current && (
                      <span
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-pulse border-2 border-background"
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div className={`flex-1 sm:w-[calc(50%-2rem)] ${isEven ? 'sm:ml-6' : 'sm:mr-6'} ml-4 sm:ml-0`}>
                    <div
                      className="glass-card rounded-2xl p-5 skill-card-hover"
                      style={{ borderLeft: `3px solid ${colorMap[item.color]}` }}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full"
                              style={{
                                color: colorMap[item.color],
                                background: bgColorMap[item.color],
                                border: `1px solid ${borderColorMap[item.color]}`,
                              }}
                            >
                              {typeBadge[item.type]}
                            </span>
                            {item.current && (
                              <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">
                                Current
                              </span>
                            )}
                          </div>
                          <h3 className="font-bold text-foreground text-sm">{item.title}</h3>
                          <p className="text-xs font-medium mt-0.5" style={{ color: colorMap[item.color] }}>
                            {item.subtitle}
                          </p>
                        </div>
                        <span className="font-mono-style text-xs text-muted-foreground whitespace-nowrap flex-shrink-0">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}