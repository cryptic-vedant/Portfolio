import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, DM_Mono } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Vedant Tule — AI/ML Engineer & Full Stack Developer',
  description:
    'Portfolio of Vedant Tule, B.Tech CSE (AI & ML) student at VIT Bhopal. Building AI-powered applications and scalable full-stack software solutions.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'Vedant Tule — AI/ML Engineer',
    description: 'AI-powered projects, full-stack skills, and production-ready software.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dmMono.variable}`}>
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}