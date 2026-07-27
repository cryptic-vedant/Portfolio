'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  tagColors: string[];
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  challenges: string;
  learnings: string;
  gradient: string;
}

const projects: Project[] = [
{
  id: 'finguard',
  title: 'FinGuard AI',
  tagline: 'AI-Powered Personal Finance & Fraud Detection',
  description:
  'An AI-powered personal finance platform that analyzes spending patterns, categorizes expenses, and generates personalized financial insights using ML models with real-time fraud detection.',
  image: "https://images.unsplash.com/photo-1571677246347-5040036b95cc",
  imageAlt: 'Dark financial dashboard with glowing blue charts and data visualization on a computer screen, moody atmospheric lighting',
  tags: ['Python', 'ML Models', 'REST APIs', 'Git', 'Pandas', 'XGBoost'],
  tagColors: ['primary', 'accent', 'secondary', 'primary', 'accent', 'secondary'],
  problem:
  'Individuals struggle to track spending, detect fraudulent transactions, and make data-driven financial decisions without professional guidance.',
  solution:
  'Built an AI-powered platform leveraging ML models for anomaly detection, spending categorization, and predictive forecasting integrated via REST APIs.',
  features: [
  'Real-time transaction anomaly detection',
  'Spending pattern analysis with visualizations',
  'Personalized financial insights via ML',
  'Fraud detection with configurable thresholds',
  'REST API integration for seamless data flow',
  'Feature engineering pipeline for model performance'],
  architecture:
  'Python backend with Flask REST APIs, XGBoost and Scikit-learn models for fraud detection and forecasting, Pandas/NumPy for data preprocessing, MongoDB for transaction storage.',
  challenges:
  'Handling class imbalance in fraud datasets, ensuring low-latency real-time predictions, and building a robust feature engineering pipeline from raw transaction data.',
  learnings:
  'Advanced feature engineering techniques, SMOTE for class imbalance, REST API design patterns, and integrating ML models into production web applications.',
  gradient: 'from-primary/20 via-accent/10 to-transparent',
  githubUrl: "https://github.com/cryptic-vedant/finguard-ai",
  liveUrl: "https://finguard-ai-sable.vercel.app"
},
{
  id: 'hydrosense',
  title: 'HydroSense',
  tagline: 'AI Crop Advisor with Real-Time Sensor Data',
  description:
  'Integrated XGBoost ML model into a web application enabling real-time crop recommendations using live environmental sensor data for precision agriculture.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_180fbe810-1767513602162.png",
  imageAlt: 'Agricultural field with green crops under bright daylight, sensor devices in foreground, open sky background',
  tags: ['XGBoost', 'Python', 'Sensor Data', 'Web App', 'Scikit-learn'],
  tagColors: ['accent', 'primary', 'secondary', 'accent', 'primary'],
  problem:
  'Farmers lack real-time, data-driven crop recommendations that account for live soil and environmental conditions, leading to suboptimal yields.',
  solution:
  'Built a web application integrating XGBoost crop recommendation model with live sensor data ingestion for instant, accurate crop advisory.',
  features: [
  'Real-time crop recommendation engine',
  'Live environmental sensor data integration',
  'XGBoost model with >92% validation accuracy',
  'Scalable backend for multiple sensor streams',
  'User-friendly interface for non-technical farmers',
  'Cross-validated model across multiple scenarios'],
  architecture:
  'XGBoost classification model trained on agricultural datasets, Python/Flask backend for sensor data ingestion, REST endpoints for recommendations, web frontend for farmer interface.',
  challenges:
  'Ensuring model reliability across diverse soil types, handling sensor data noise and missing values, and designing an interface accessible to non-technical users.',
  learnings:
  'IoT data preprocessing, XGBoost hyperparameter tuning, model deployment in real-world scenarios, and user-centered design for agricultural applications.',
  gradient: 'from-accent/20 via-secondary/10 to-transparent',
  githubUrl: "https://github.com/cryptic-vedant/HydroSense",
  liveUrl: "YOUR_DEPLOYED_URL"
},
{
  id: 'churn',
  title: 'Customer Churn Prediction',
  tagline: 'ML-Powered Retention Intelligence',
  description:
  'Predictive ML model to identify at-risk customers before they churn, enabling proactive retention strategies with interpretable feature importance analysis.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14f7f8189-1772803300389.png",
  imageAlt: 'Business analytics dashboard on a laptop showing customer retention charts and bar graphs in a bright office environment',
  tags: ['Python', 'Scikit-learn', 'Pandas', 'EDA', 'XGBoost', 'SQL'],
  tagColors: ['primary', 'accent', 'secondary', 'primary', 'accent', 'secondary'],
  problem:
  'Businesses lose revenue to customer churn without early warning systems to identify and retain at-risk customers.',
  solution:
  'Developed an end-to-end ML pipeline from EDA to model deployment, using ensemble methods to predict churn with high precision and recall.',
  features: [
  'Comprehensive EDA and feature engineering',
  'Multiple model comparison (LR, RF, XGBoost)',
  'SHAP-based feature importance visualization',
  'Precision-recall optimization for imbalanced data',
  'Threshold tuning for business requirements',
  'Exportable prediction reports'],
  architecture:
  'Scikit-learn pipeline with preprocessing, feature selection, and ensemble classifiers. XGBoost as final model with SHAP explainability. Pandas for EDA and SQL for data extraction.',
  challenges:
  'Handling severe class imbalance, selecting the right evaluation metric for business impact, and making model predictions interpretable for non-technical stakeholders.',
  learnings:
  'End-to-end ML pipeline design, SHAP explainability, business metric alignment, and communicating model results to diverse audiences.',
  gradient: 'from-secondary/20 via-primary/10 to-transparent',
  githubUrl: "https://github.com/cryptic-vedant/customer_churn_prediction",
  liveUrl: "YOUR_DEPLOYED_URL"
}];


const colorMap: Record<string, string> = {
  primary: 'rgba(59,130,246,0.15)',
  accent: 'rgba(6,182,212,0.15)',
  secondary: 'rgba(139,92,246,0.15)'
};
const textColorMap: Record<string, string> = {
  primary: 'text-primary',
  accent: 'text-accent',
  secondary: 'text-secondary'
};
const borderColorMap: Record<string, string> = {
  primary: 'rgba(59,130,246,0.3)',
  accent: 'rgba(6,182,212,0.3)',
  secondary: 'rgba(139,92,246,0.3)'
};

function ProjectModal({ project, onClose }: {project: Project;onClose: () => void;}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay"
      onClick={onClose}>
      
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl scrollbar-thin"
        onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header Image */}
        <div className="relative h-48 overflow-hidden rounded-t-3xl">
          <AppImage
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-12">
            <h3 className="text-2xl font-extrabold text-foreground">{project.title}</h3>
            <p className="text-sm text-accent">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 glass-card rounded-full hover:bg-white/10 transition-all"
            aria-label="Close modal">
            
            <Icon name="XMarkIcon" size={20} className="text-foreground" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) =>
            <span
              key={tag}
              className={`px-3 py-1 text-xs font-semibold rounded-full ${textColorMap[project.tagColors[i] || 'primary']}`}
              style={{
                background: colorMap[project.tagColors[i] || 'primary'],
                border: `1px solid ${borderColorMap[project.tagColors[i] || 'primary']}`
              }}>
              
                {tag}
              </span>
            )}
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4">
              <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                <Icon name="ExclamationTriangleIcon" size={14} className="text-accent" />
                Problem
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>
            <div className="glass-card rounded-xl p-4">
              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
                <Icon name="LightBulbIcon" size={14} className="text-primary" />
                Solution
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3 flex items-center gap-2">
              <Icon name="SparklesIcon" size={14} className="text-secondary" />
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((f) =>
              <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Icon name="CheckCircleIcon" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  {f}
                </div>
              )}
            </div>
          </div>

          {/* Architecture */}
          <div className="glass-card rounded-xl p-4">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
              <Icon name="CubeTransparentIcon" size={14} />
              Architecture
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.architecture}</p>
          </div>

          {/* Challenges & Learnings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-4">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                <Icon name="WrenchScrewdriverIcon" size={14} />
                Challenges
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.challenges}</p>
            </div>
            <div className="glass-card rounded-xl p-4">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                <Icon name="AcademicCapIcon" size={14} />
                Learnings
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.learnings}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-full text-sm font-semibold text-foreground hover:border-primary/40 transition-all">
              
              <Icon name="CodeBracketIcon" size={16} />
              GitHub
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-all btn-glow">
              
              <Icon name="ArrowTopRightOnSquareIcon" size={16} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>);

}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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
    <section id="projects" ref={sectionRef} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines-bg opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.05) 0%, transparent 60%)' }}
        aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <span className="font-mono-style text-xs font-medium tracking-widest text-accent uppercase">Featured Work</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Projects &amp; <span className="text-gradient-primary">Solutions</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            AI-powered applications and data-driven systems built for real-world impact.
          </p>
        </div>

        {/* Projects Grid — BENTO: 2 equal + 2 equal */}
        {/* Row 1: [col-1: FinGuard AI] [col-2: HydroSense] */}
        {/* Row 2: [col-1: Customer Churn] [col-2: Fraud Detection] */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) =>
          <div
            key={project.id}
            className="glass-card rounded-3xl overflow-hidden project-card-hover cursor-pointer section-reveal"
            style={{ transitionDelay: `${idx * 100}ms` }}
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
            aria-label={`View details for ${project.title}`}>
            
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105" />
              
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`} />
                <div className="absolute top-3 right-3 p-1.5 glass-card rounded-lg">
                  <Icon name="ArrowsPointingOutIcon" size={14} className="text-muted-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
                <p className="text-xs text-accent font-medium mb-3">{project.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag, i) =>
                <span
                  key={tag}
                  className={`px-2 py-0.5 text-xs font-medium rounded-md ${textColorMap[project.tagColors[i] || 'primary']}`}
                  style={{
                    background: colorMap[project.tagColors[i] || 'primary'],
                    border: `1px solid ${borderColorMap[project.tagColors[i] || 'primary']}`
                  }}>
                  
                      {tag}
                    </span>
                )}
                  {project.tags.length > 4 &&
                <span className="px-2 py-0.5 text-xs font-medium text-muted-foreground glass-card rounded-md">
                      +{project.tags.length - 4}
                    </span>
                }
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-1.5 glass-card rounded-lg text-xs font-semibold text-foreground hover:border-primary/40 transition-all">
                  
                    <Icon name="CodeBracketIcon" size={13} />
                    GitHub
                  </a>
                  <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-xs font-semibold text-primary hover:bg-primary/20 transition-all">
                  
                    <Icon name="ArrowTopRightOnSquareIcon" size={13} />
                    Live Demo
                  </a>
                  <button
                  className="ml-auto flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-all"
                  onClick={(e) => {e.stopPropagation();setSelectedProject(project);}}>
                  
                    Details
                    <Icon name="ChevronRightIcon" size={13} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedProject &&
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      }
    </section>);

}