import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Certifications from './components/Certifications/Certifications';
import Activities from './components/Activities/Activities';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import { usePortfolioData } from './hooks/usePortfolioData';
import { useReveal } from './hooks/useReveal';

export default function App() {
  // Theme state: defaults to 'dark', persists to localStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'dark'; // obsidian dark mode by default per specs
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
        <About data={data.about} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
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
