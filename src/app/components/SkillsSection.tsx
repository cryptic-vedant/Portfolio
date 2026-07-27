'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  category: string;
  categoryIcon: string;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    categoryIcon: 'CodeBracketIcon',
    color: 'primary',
    skills: [
      { name: 'Python', icon: 'CommandLineIcon', color: 'primary' },
      { name: 'Java', icon: 'CpuChipIcon', color: 'primary' },
      { name: 'C++', icon: 'BoltIcon', color: 'primary' },
      { name: 'SQL', icon: 'CircleStackIcon', color: 'primary' },
    ],
  },
  {
    category: 'AI / ML',
    categoryIcon: 'CpuChipIcon',
    color: 'accent',
    skills: [
      { name: 'Machine Learning', icon: 'CpuChipIcon', color: 'accent' },
      { name: 'Deep Learning', icon: 'BoltIcon', color: 'accent' },
      { name: 'NLP', icon: 'ChatBubbleBottomCenterTextIcon', color: 'accent' },
      { name: 'Scikit-learn', icon: 'BeakerIcon', color: 'accent' },
      { name: 'XGBoost', icon: 'ChartBarIcon', color: 'accent' },
      { name: 'Predictive Modelling', icon: 'PresentationChartLineIcon', color: 'accent' },
      { name: 'Model Validation', icon: 'CheckBadgeIcon', color: 'accent' },
    ],
  },
  {
    category: 'Data Analytics',
    categoryIcon: 'ChartBarIcon',
    color: 'secondary',
    skills: [
      { name: 'Pandas', icon: 'TableCellsIcon', color: 'secondary' },
      { name: 'NumPy', icon: 'CalculatorIcon', color: 'secondary' },
      { name: 'SQL', icon: 'CircleStackIcon', color: 'secondary' },
      { name: 'EDA', icon: 'MagnifyingGlassIcon', color: 'secondary' },
      { name: 'Feature Engineering', icon: 'WrenchScrewdriverIcon', color: 'secondary' },
      { name: 'Data Visualization', icon: 'PresentationChartBarIcon', color: 'secondary' },
      { name: 'Dashboarding & Reporting', icon: 'DocumentChartBarIcon', color: 'secondary' },
    ],
  },
  {
    category: 'Databases',
    categoryIcon: 'CircleStackIcon',
    color: 'primary',
    skills: [
      { name: 'MySQL', icon: 'TableCellsIcon', color: 'primary' },
      { name: 'MongoDB', icon: 'CircleStackIcon', color: 'primary' },
    ],
  },
  {
    category: 'Tools & Platforms',
    categoryIcon: 'WrenchScrewdriverIcon',
    color: 'accent',
    skills: [
      { name: 'Git', icon: 'CodeBracketSquareIcon', color: 'accent' },
      { name: 'GitHub', icon: 'CodeBracketSquareIcon', color: 'accent' },
      { name: 'Jupyter Notebook', icon: 'DocumentChartBarIcon', color: 'accent' },
      { name: 'Postman', icon: 'PaperAirplaneIcon', color: 'accent' },
      { name: 'AWS', icon: 'CloudIcon', color: 'accent' },
      { name: 'GCP', icon: 'CloudIcon', color: 'accent' },
      { name: 'OCI', icon: 'ServerIcon', color: 'accent' },
      { name: 'Render', icon: 'RocketLaunchIcon', color: 'accent' },
      { name: 'Vercel', icon: 'RocketLaunchIcon', color: 'accent' },
    ],
  },
  {
    category: 'Development',
    categoryIcon: 'ServerIcon',
    color: 'secondary',
    skills: [
      { name: 'REST APIs', icon: 'LinkIcon', color: 'secondary' },
      { name: 'Flask', icon: 'BeakerIcon', color: 'secondary' },
      { name: 'Django', icon: 'CubeTransparentIcon', color: 'secondary' },
    ],
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
  primary: 'rgba(59,130,246,0.2)',
  accent: 'rgba(6,182,212,0.2)',
  secondary: 'rgba(139,92,246,0.2)',
};

export default function SkillsSection() {
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
    <section id="skills" ref={sectionRef} className="py-20 sm:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(139,92,246,0.05) 0%, transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <span className="font-mono-style text-xs font-medium tracking-widest text-accent uppercase">Technical Stack</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Skills &amp; <span className="text-gradient-primary">Technologies</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            A curated toolkit spanning AI/ML research, full-stack development, and cloud infrastructure.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.category}
              className="glass-card rounded-2xl p-6 section-reveal"
              style={{ transitionDelay: `${ci * 80}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: bgColorMap[cat.color], border: `1px solid ${borderColorMap[cat.color]}` }}
                >
                  <Icon
                    name={cat.categoryIcon as Parameters<typeof Icon>[0]['name']}
                    size={18}
                    style={{ color: colorMap[cat.color] }}
                  />
                </div>
                <h3 className="font-bold text-foreground text-sm">{cat.category}</h3>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl skill-card-hover cursor-default"
                    style={{
                      background: bgColorMap[skill.color],
                      border: `1px solid ${borderColorMap[skill.color]}`,
                    }}
                  >
                    <Icon
                      name={skill.icon as Parameters<typeof Icon>[0]['name']}
                      size={14}
                      style={{ color: colorMap[skill.color] }}
                    />
                    <span className="text-xs font-semibold text-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}