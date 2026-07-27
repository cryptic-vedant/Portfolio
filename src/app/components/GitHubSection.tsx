'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const techStats = [
  { name: 'Python', pct: 45, color: 'primary' },
  { name: 'JavaScript', pct: 25, color: 'accent' },
  { name: 'Java', pct: 15, color: 'secondary' },
  { name: 'C++', pct: 10, color: 'primary' },
  { name: 'Others', pct: 5, color: 'accent' },
];

const colorMap: Record<string, string> = {
  primary: 'var(--primary)',
  accent: 'var(--accent)',
  secondary: 'var(--secondary)',
};
const bgColorMap: Record<string, string> = {
  primary: 'rgba(59,130,246,0.12)',
  accent: 'rgba(6,182,212,0.12)',
  secondary: 'rgba(139,92,246,0.12)',
};

export default function GitHubSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [contributions, setContributions] = useState<{ bg: string; count: number }[]>([]);
  const [githubData, setGithubData] = useState<any>(null);
  const repos = Array.isArray(githubData?.repos)
  ? githubData.repos
  : [];

  const featuredRepos = repos
  .sort(
    (a: any, b: any) =>
      new Date(b.updated_at).getTime() -
      new Date(a.updated_at).getTime()
  )
  .slice(0, 4);

  useEffect(() => {
    const items = Array.from({ length: 364 }, () => {
      const rand = Math.random();
      let bg = 'rgba(255,255,255,0.04)';
      if (rand > 0.85) bg = 'rgba(59,130,246,0.7)';
      else if (rand > 0.7) bg = 'rgba(59,130,246,0.4)';
      else if (rand > 0.55) bg = 'rgba(59,130,246,0.2)';
      return { bg, count: Math.floor(rand * 5) };
    });
    setContributions(items);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.section-reveal, .slide-left, .slide-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  async function loadGithub() {
    try {
      const response = await fetch("/api/github");
      const data = await response.json();
      console.log("API Response:", data);

      setGithubData({
        profile: data.profile,
        repos: Array.isArray(data.repos) ? data.repos : [],
      });
    } catch (err) {
      console.error(err);
    }
  }
  loadGithub();
}, []);

  if (
  !githubData ||
  !githubData.profile ||
  !Array.isArray(githubData.repos)
  )  {
  return (
    <section className="py-20 text-center">
      <h2>Loading GitHub...</h2>
    </section>
  );
}

  return (
    <section id="github" ref={sectionRef} className="py-20 sm:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(59,130,246,0.05) 0%, transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <span className="font-mono-style text-xs font-medium tracking-widest text-accent uppercase">Open Source</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            GitHub <span className="text-gradient-primary">Activity</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Profile + Stats */}
          <div className="flex flex-col gap-6 slide-left">
            {/* Profile Card */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon name="CodeBracketSquareIcon" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{githubData.profile.login}</h3>
                  <p className="text-sm text-muted-foreground">{githubData.profile.html_url.replace("https://","")}</p>
                </div>
                <a
                  href={githubData.profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-full hover:opacity-90 transition-all btn-glow"
                >
                  <Icon name="ArrowTopRightOnSquareIcon" size={14} />
                  Visit
                </a>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: githubData.profile.public_repos, label: 'Repositories' },
                  { val: githubData.profile.followers, label: 'Followers' },
                  { val: githubData.repos.length, label: 'Projects' },
                ].map((s) => (
                  <div key={s.label} className="text-center p-3 bg-muted/30 rounded-xl">
                    <div className="text-xl font-extrabold text-gradient-primary">{s.val}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contribution Graph Placeholder */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="CalendarDaysIcon" size={16} className="text-accent" />
                Contribution Activity
              </h4>
              <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(52, 1fr)' }}>
                {contributions.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-sm"
                    style={{ background: item.bg, aspectRatio: '1', minWidth: '4px' }}
                    title={`${item.count} contributions`}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">Contribution graph — 2025–2026</p>
            </div>
          </div>

          {/* Right: Language Stats + Repos */}
          <div className="flex flex-col gap-6 slide-right">
            {/* Language Stats */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="ChartPieIcon" size={16} className="text-secondary" />
                Most Used Languages
              </h4>
              <div className="space-y-3">
                {techStats.map((t) => (
                  <div key={t.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-foreground">{t.name}</span>
                      <span className="font-mono-style text-xs text-muted-foreground">{t.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${t.pct}%`, background: colorMap[t.color] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Repo Highlights */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                <Icon name="StarIcon" size={16} className="text-accent" />
                Featured Repositories
              </h4>
              <div className="space-y-3">
                {featuredRepos.map((repo: any) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: bgColorMap.primary }}
                    >
                      <Icon name="CodeBracketIcon" size={16} style={{ color: colorMap.primary }}/>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground font-mono-style group-hover:text-primary transition-colors truncate">
                        {repo.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">{repo.description}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Icon name="StarIcon" size={12} className="text-yellow-400" />
                        {repo.stargazers_count}
                      </div>
                      <span className="text-xs font-medium" style={{ color: colorMap.primary }}>
                        {repo.language}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}