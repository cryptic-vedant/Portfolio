import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import CertificationsSection from '@/app/components/CertificationsSection';
// import GitHubSection from '@/app/components/GitHubSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      {/* <GitHubSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}