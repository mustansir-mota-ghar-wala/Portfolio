import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Activities from './components/Activities/Activities';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { usePortfolioData } from './hooks/usePortfolioData';
import { useReveal } from './hooks/useReveal';

export default function App() {
  // Theme state: persists to localStorage; first-time visitors get light mode.
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // No saved preference — start with light mode (no Flash of Unstyled Theme).
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Portfolio data hook with remote API fallback
  const { data } = usePortfolioData();

  // Scroll reveal IntersectionObserver trigger
  useReveal();

  return (
    <div className="app-layout">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero data={data.hero} />
        <Projects data={data.projects} />
        <Skills data={data.skills} />
        <Experience data={data.experience} />
        <Education data={data.education} />
        <Certifications data={data.certifications} />
        <Activities data={data.activities} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
