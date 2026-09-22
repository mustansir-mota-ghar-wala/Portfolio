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
    headlineRole = "Full Stack Developer",
    headlineAccent = "Backend Architect",
    summary = personalConfig.specialtyTagline,
    techStack = ["Python", "Django 6.0", "REST APIs", "React.js", "PostgreSQL", "Docker"],
    chips = ["Django 6.0", "PostgreSQL", "React.js", "FastAPI", "REST APIs", "Groq AI", "Razorpay"],
    status = "Open to opportunities"
  } = data || {};

  return (
    <section className="hero" id="hero">
      <div className="container hero__container">
        {/* Left Column: Core Introduction */}
        <div className="hero__content reveal">
          {/* Greeting Pill */}
          <div className="hero__greeting-pill">
            <span className="hero__pulse-dot" />
            <span>{greeting}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero__headline">
            {headlineRole}{' '}
            <span className="hero__headline-accent">& {headlineAccent}</span>
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
          <div className="hero__card">
            {/* 80x80 Gradient Avatar Monogram */}
            <div className="hero__card-avatar" aria-hidden="true">
              {personalConfig.initials}
            </div>

            <h2 className="hero__card-name">{personalConfig.name}</h2>
            <p className="hero__card-subtitle">{personalConfig.roleHeadline}</p>

            <div className="hero__card-divider" />

            {/* Cloud of mini skill badge chips */}
            <div className="hero__card-chips" aria-label="Key Technologies">
              {chips.map((chip) => (
                <span key={chip} className="badge">
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
