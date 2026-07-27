'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Icon from '@/components/ui/AppIcon';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/cryptic-vedant',
    icon: FaGithub,
    color: 'primary',
    handle: '@cryptic-vedant',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vedant-tule-29m/',
    icon: FaLinkedin,
    color: 'accent',
    handle: 'Vedant Tule',
  },
  {
    name: 'Email',
    href: 'mailto:tulevedant@gmail.com',
    icon: FaEnvelope,
    color: 'secondary',
    handle: 'tulevedant@gmail.com',
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

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.section-reveal, .slide-left, .slide-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});

const [status, setStatus] = useState<
  "idle" | "sending" | "sent" | "error"
>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setStatus("sending");

  const formData = new FormData();

  formData.append("access_key", "21d6c72f-a171-4d5e-a220-f7a63e2df550");
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("message", form.message);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setStatus("sent");

      // Clear all fields
      setForm({
        name: "",
        email: "",
        message: "",
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } else {
      setStatus("error");
    }
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};

  return (
    <section id="contact" ref={sectionRef} className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines-bg opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.06) 0%, transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <span className="font-mono-style text-xs font-medium tracking-widest text-accent uppercase">Get in Touch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Let&apos;s <span className="text-gradient-secondary">Connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Open to internships, full-time roles, research collaborations, and exciting projects. Let&apos;s build something impactful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Info + Social */}
          <div className="flex flex-col gap-8 slide-left">
            {/* Availability */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="font-bold text-foreground">Available for Opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Currently seeking internships and full-time roles in AI/ML engineering, data science, and full-stack development.
                Based in Kutch, Gujarat — open to remote and relocation.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                {[
                  { label: 'Location', val: 'Kutch, Gujarat, India' },
                  { label: 'Phone', val: '+91 7874404555' },
                  { label: 'Email', val: 'tulevedant@gmail.com' },
                  { label: 'Status', val: 'Open to Work' },
                ].map((info) => (
                  <div key={info.label} className="p-3 bg-muted/30 rounded-xl">
                    <p className="text-muted-foreground mb-0.5">{info.label}</p>
                    <p className="font-semibold text-foreground truncate">{info.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-4">Find me on</h4>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/40 transition-all group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: bgColorMap[link.color] }}
                      >
                        <IconComponent
                          size={20}
                          style={{ color: colorMap[link.color] }}
                        />
                      </div>

                      <div>
                        <p className="font-semibold text-foreground text-sm">{link.name}</p>
                        <p className="text-xs text-muted-foreground">{link.handle}</p>
                      </div>

                      <Icon
                        name="ArrowTopRightOnSquareIcon"
                        size={14}
                        className="text-muted-foreground ml-auto"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="slide-right">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-foreground mb-6">
                Send a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                {/* Replace this with your own Web3Forms Access Key */}
                <input
                  type="hidden"
                  name="access_key"
                  value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
                />

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    required
                    placeholder="Vedant Tule"
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    placeholder="youremail@example.com"
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={5}
                    required
                    placeholder="Hi Vedant, I'd like to discuss an opportunity..."
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-all btn-glow disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                >
                  {status === "sending" ? (
                    <>
                      <Icon
                        name="ArrowPathIcon"
                        size={18}
                        className="animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Icon
                        name="PaperAirplaneIcon"
                        size={18}
                      />
                      Send Message
                    </>
                  )}
                </button>
                {/* Success Message */}
                {status === "sent" && (
                  <div className="mt-4 flex justify-center animate-pulse">
                    <p className="text-green-400 font-medium text-sm">
                      Email sent successfully!
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <p className="text-red-500 mt-3 text-sm text-center">
                    Failed to send email. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}