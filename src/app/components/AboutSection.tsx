'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const stats = [
{ end: 4, suffix: '+', label: 'Projects', icon: 'FolderOpenIcon' },
{ end: 15, suffix: '+', label: 'Technologies', icon: 'CpuChipIcon' },
{ end: 5, suffix: '', label: 'Certifications', icon: 'AcademicCapIcon' },
{ end: 10, suffix: '+', label: 'GitHub Repos', icon: 'CodeBracketIcon' }];


const interests = ['Artificial Intelligence', 'Machine Learning', 'Problem Solving', 'Data Science'];

function useCountUp(end: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, end, duration]);
  return count;
}

function StatCard({ end, suffix, label, icon, triggered }: {end: number;suffix: string;label: string;icon: string;triggered: boolean;}) {
  const count = useCountUp(end, 1200, triggered);
  return (
    <div className="glass-card rounded-2xl p-5 text-center skill-card-hover">
      <Icon name={icon as Parameters<typeof Icon>[0]['name']} size={24} className="text-accent mx-auto mb-2" />
      <div className="text-3xl font-extrabold text-gradient-primary">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium mt-1">{label}</div>
    </div>);

}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            setTriggered(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    const el = sectionRef.current;
    if (el) {
      el.querySelectorAll('.section-reveal, .slide-left, .slide-right').forEach((c) => observer.observe(c));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines-bg opacity-40" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <span className="font-mono-style text-xs font-medium tracking-widest text-accent uppercase">About Me</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Turning Data into <span className="text-gradient-secondary">Decisions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Photo + Info */}
          <div className="flex flex-col gap-8 slide-left">
            {/* Photo */}
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-primary/40"
                  style={{ boxShadow: '0 0 30px rgba(59,130,246,0.2)' }}>
                  
                  <AppImage
                    src="/assets/images/Vedant Tule.jpg"
                    alt="Vedant Tule"
                    width={144}
                    height={144}
                    className="w-full h-full object-cover" />
                  
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="CheckBadgeIcon" size={16} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Vedant Tule</h3>
                <p className="text-sm text-accent font-medium">AI/ML Engineer · Data Scientist</p>
                <p className="text-xs text-muted-foreground mt-1">Kutch, Gujarat, India</p>
                <div className="flex items-center gap-1 mt-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-medium">Available for Opportunities</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Summary</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Computer Science &amp; Engineering (AI &amp; ML) student with hands-on experience in machine learning,
                data analysis, and AI-driven application development. Skilled in predictive modelling,
                data preprocessing, and cloud platforms — building solutions that bridge research and production.
              </p>
            </div>

            {/* Career Objective */}
            <div className="border-l-4 border-accent pl-5">
              <p className="text-sm font-bold text-foreground mb-1">Career Objective</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To leverage AI/ML expertise and full-stack development skills to build impactful,
                data-driven products at top product companies and AI startups, while continuing to grow
                as an engineer and researcher.
              </p>
            </div>

            {/* Interests */}
            <div>
              <p className="text-sm font-bold text-foreground mb-3">Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) =>
                <span key={i} className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-medium rounded-full">
                    {i}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Education + Stats */}
          <div className="flex flex-col gap-8 slide-right">
            {/* Education */}
            <div>
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <Icon name="AcademicCapIcon" size={18} className="text-accent" />
                Education
              </h4>
              <div className="space-y-4">
                <div className="glass-card rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-foreground text-sm">B.Tech in CSE – AI &amp; ML</p>
                      <p className="text-accent text-sm font-medium">Vellore Institute of Technology, Bhopal</p>
                      <p className="text-xs text-muted-foreground mt-1">Sep 2023 – May 2027</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="px-2 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-bold rounded-lg">
                        CGPA: 8.39
                      </span>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-foreground text-sm">Class 12 – CBSE (PCM)</p>
                      <p className="text-secondary text-sm font-medium">Atmiya Vidyapeeth</p>
                      <p className="text-xs text-muted-foreground mt-1">Mar 2022 – May 2023</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="px-2 py-1 bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold rounded-lg">
                        83.8%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div>
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <Icon name="ChartBarIcon" size={18} className="text-primary" />
                By the Numbers
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) =>
                <StatCard key={s.label} {...s} triggered={triggered} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}