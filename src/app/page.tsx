'use client';
import { useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Achievements from '@/components/sections/achievements';
import Education from '@/components/sections/education';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';
import Certifications from '@/components/sections/certifications';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.section-visible').forEach((section) => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
