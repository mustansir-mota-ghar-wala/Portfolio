import React from 'react';
import {
  FiArrowDown,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiChevronDown
} from 'react-icons/fi';
import { personalConfig } from '../../data/config';
import './Hero.css';

export default function Hero({ data }) {
  const {
    greeting = `Hi, I'm ${personalConfig.firstName}`,
    headlineRole = "Software Engineer",
    headlineAccent = "DevOps Engineer",
    summary = personalConfig.specialtyTagline,
    techStack = ["Python", "Java", "FastAPI", "React.js", "PostgreSQL", "Docker", "CI/CD"],
    chips = ["Python", "Java", "Django 6.0", "FastAPI", "React.js", "PostgreSQL", "Docker", "GitHub Actions", "DevOps"],
    status = "Open to opportunities",
    profileImage = personalConfig.profileImage
  } = data || {};

  return (
    <section className="hero" id="hero">
      <div className="container hero__container">
        {/* Left Column: Core Introduction */}
        <div className="hero__content reveal">
          {/* Mobile-Only Top-Right Profile Photo */}
          <div className="hero__mobile-avatar" aria-hidden="true">
            {profileImage ? (
              <img
                src={profileImage}
                alt={personalConfig.name}
                className="hero__mobile-avatar-img"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement.querySelector('.hero__mobile-avatar-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
            ) : null}
            <div
              className="hero__mobile-avatar-fallback"
              style={{ display: profileImage ? 'none' : 'flex' }}
            >
              <span>{personalConfig.initials}</span>
            </div>
          </div>

          {/* Greeting Pill */}
          <div className="hero__greeting-pill">
            <span className="hero__pulse-dot" />
            <span>{greeting}</span>
          </div>

          {/* Main Headline (accent part is optional — omit it for a single designation) */}
          <h1 className="hero__headline">
            {headlineRole}
            {headlineAccent ? (
              <>
                {' '}
                <span className="hero__headline-accent">{'& '}{headlineAccent}</span>
              </>
            ) : null}
          </h1>

          {/* Introductory Summary */}
          <p className="hero__summary">{summary}</p>

          {/* Monospace Tech Stack Bar */}
          <div className="hero__tech-bar" aria-label="Core Tech Stack">
            {techStack.map((tech, index) => (
              <React.Fragment key={tech}>
                <span className="hero__tech-item">{tech}</span>
                {index < techStack.length - 1 && (
                  <span className="hero__tech-dot" aria-hidden="true">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Dual Call To Actions */}
          <div className="hero__ctas">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <FiArrowDown size={16} />
            </a>

            <a
              href={personalConfig.resumePath}
              download="Mustansir_Resume.pdf"
              className="btn btn-secondary"
            >
              <FiDownload size={16} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Row & Location */}
          <div className="hero__social-row">
            <div className="hero__social-links">
              <a
                href={personalConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                title="GitHub"
                aria-label="GitHub Profile"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={personalConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={18} />
              </a>
            </div>

            <div className="hero__divider" aria-hidden="true" />

            <div className="hero__location">
              <FiMapPin size={15} />
              <span>{personalConfig.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Identity Card (Desktop) */}
        <div className="hero__visual-card-col reveal">
          <div className="hero__card hero__card--photo">
            {/* Full Card Background Image with Monogram Fallback */}
            <div className="hero__card-bg-wrap">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt={personalConfig.name}
                  className="hero__card-bg-img"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement.querySelector('.hero__card-bg-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              ) : null}
              <div
                className="hero__card-bg-fallback"
                style={{ display: profileImage ? 'none' : 'flex' }}
                aria-hidden="true"
              >
                <span>{personalConfig.initials}</span>
              </div>
            </div>

            {/* Bottom Translucent Frosted Glass Layer */}
            <div className="hero__card-overlay">
              {/* Cloud of mini skill badge chips */}
              <div className="hero__card-chips" aria-label="Key Technologies">
                {chips.map((chip) => (
                  <span key={chip} className="badge hero__card-badge">
                    {chip}
                  </span>
                ))}
              </div>

              {/* Live status badge */}
              <div className="hero__card-status">
                <span className="hero__status-dot" />
                <span>{status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Bouncing Scroll Indicator */}
      <a
        href="#about"
        className="hero__scroll-hint"
        aria-label="Scroll to About Section"
      >
        <FiChevronDown size={28} className="hero__scroll-icon" />
      </a>
    </section>
  );
}
