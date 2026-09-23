import React, { useState, useEffect } from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiFileText,
  FiSun,
  FiMoon,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { personalConfig } from '../../data/config';
import './Navbar.css';

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showThemeHint, setShowThemeHint] = useState(false);

  // Check if first-time visitor to gently introduce theme toggle
  useEffect(() => {
    const hasSeenHint = localStorage.getItem('hasSeenThemeHint');
    if (!hasSeenHint) {
      const showTimer = setTimeout(() => {
        setShowThemeHint(true);
      }, 1200);

      const hideTimer = setTimeout(() => {
        setShowThemeHint(false);
        localStorage.setItem('hasSeenThemeHint', 'true');
      }, 9500);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  const dismissHint = () => {
    setShowThemeHint(false);
    localStorage.setItem('hasSeenThemeHint', 'true');
  };

  const handleToggleTheme = () => {
    dismissHint();
    onToggleTheme();
  };

  // Handle scroll class
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle section highlighting with IntersectionObserver
  useEffect(() => {
    const sectionIds = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Handle Escape key and window resize to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 900 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        {/* Brand Logo & Name */}
        <a href="#" className="navbar__brand" aria-label="Mustansir Home">
          <div className="navbar__logo-box">
            {personalConfig.profileImage ? (
              <img
                src={personalConfig.profileImage}
                alt={personalConfig.name}
                className="navbar__logo-img"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) fallback.style.display = 'inline';
                }}
              />
            ) : null}
            <span
              className="navbar__logo-letter"
              style={{ display: personalConfig.profileImage ? 'none' : 'inline' }}
            >
              {personalConfig.logoLetter}
            </span>
          </div>
          <span className="navbar__brand-name">{personalConfig.name}</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar__nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`navbar__link ${
                activeSection === link.id ? 'navbar__link--active' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="navbar__actions">
          {/* GitHub Icon */}
          <a
            href={personalConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <FiGithub size={18} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href={personalConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>

          {/* Download Resume Button */}
          <a
            href={personalConfig.resumePath}
            download="Mustansir_Resume.pdf"
            className="btn btn-primary navbar__resume-btn"
          >
            <FiFileText size={16} />
            <span>Resume</span>
          </a>

          {/* Dark / Light Mode Toggle with First-Time Visitor Tip */}
          <div className="navbar__theme-wrapper">
            <button
              type="button"
              className="btn-icon navbar__toggle-btn"
              onClick={handleToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {showThemeHint && (
              <div className="theme-hint-popover" role="status" aria-live="polite">
                <span className="theme-hint-icon" aria-hidden="true">💡</span>
                <div className="theme-hint-content">
                  <p className="theme-hint-text">
                    Prefer dark mode? Click here to switch anytime!
                  </p>
                </div>
                <button
                  type="button"
                  className="theme-hint-close"
                  onClick={dismissHint}
                  aria-label="Dismiss theme tip"
                >
                  <FiX size={14} />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="btn-icon navbar__hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`navbar__mobile-drawer ${
          mobileMenuOpen ? 'navbar__mobile-drawer--open' : ''
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={handleLinkClick}
            className={`navbar__mobile-link ${
              activeSection === link.id ? 'navbar__mobile-link--active' : ''
            }`}
          >
            {link.label}
          </a>
        ))}

        <div className="navbar__mobile-actions">
          <a
            href={personalConfig.resumePath}
            download="Mustansir_Resume.pdf"
            className="btn btn-primary"
            onClick={handleLinkClick}
          >
            <FiFileText size={18} />
            <span>Download Resume</span>
          </a>

          <div className="navbar__mobile-socials">
            <a
              href={personalConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1 }}
            >
              <FiGithub size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={personalConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1 }}
            >
              <FiLinkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
