import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LittleThings from './components/LittleThings';
import QuoteSection from './components/QuoteSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AMBIENT_DECORATIONS = [
  { icon: '🌸', top: '12%', left: '4%', size: '1.35rem', duration: '9s', delay: '0s' },
  { icon: '🦋', top: '26%', right: '5%', size: '1.25rem', duration: '11s', delay: '1.5s' },
  { icon: '🎀', top: '48%', left: '3%', size: '1.2rem', duration: '10s', delay: '2.2s' },
  { icon: '✨', top: '64%', right: '4%', size: '1.3rem', duration: '8s', delay: '0.8s' },
  { icon: '🌷', top: '82%', left: '5%', size: '1.35rem', duration: '12s', delay: '3.1s' },
  { icon: '💗', top: '90%', right: '6%', size: '1.15rem', duration: '9.5s', delay: '1.9s' },
];

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'little-things',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // 1. Fade-in Scroll Reveal Observer
    const revealElements = document.querySelectorAll('.reveal-section');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // 2. Active Navigation Section Tracker
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 240;

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  return (
    <div className="app-wrapper">
      {/* Subtle Ambient Floating Decorations */}
      <div className="ambient-decorations" aria-hidden="true">
        {AMBIENT_DECORATIONS.map((item, idx) => (
          <span
            key={idx}
            className="ambient-item"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              '--size': item.size,
              '--duration': item.duration,
              '--delay': item.delay,
            }}
          >
            {item.icon}
          </span>
        ))}
      </div>

      {/* Floating Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main>
        <Hero />
        <div className="section-divider" aria-hidden="true">
          <span>🎀</span>
          <span>♡</span>
          <span>🌷</span>
        </div>

        <About />
        <div className="section-divider" aria-hidden="true">
          <span>✨</span>
          <span>♡</span>
          <span>🌸</span>
        </div>

        <Skills />
        <div className="section-divider" aria-hidden="true">
          <span>🦋</span>
          <span>♡</span>
          <span>🎀</span>
        </div>

        <Projects />

        {/* Personal Diary & Digital Scrapbook Section */}
        <LittleThings />

        {/* Dreamy Personal Quote Section */}
        <QuoteSection />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Cute Minimal Footer */}
      <Footer />
    </div>
  );
}
