import React from 'react';
import { FiTarget } from 'react-icons/fi';
import './About.css';

export default function About({ data }) {
  const {
    sectionLabel = "ABOUT ME",
    title = "Who I Am",
    paragraphs = [],
    currentFocus = [],
    highlights = [
      { label: "Education", value: "MCA (Pursuing)", detail: "Vishwakarma Univ." },
      { label: "Commercial", value: "burhani.store", detail: "Live Platform" },
      { label: "Specialty", value: "Backend & DevOps", detail: "Python · React · CI/CD" }
    ]
  } = data || {};

  return (
    <section className="section section--alt" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section__header reveal">
          <span className="section__label">{sectionLabel}</span>
          <h2 className="section__title">{title}</h2>
        </div>

        {/* 2-Column Grid */}
        <div className="about__grid">
          {/* Left Column: Narrative + Highlights */}
          <div className="about__narrative reveal">
            <div className="about__paragraphs">
              {paragraphs.map((p, index) => (
                <p key={index} className="about__paragraph">
                  {p}
                </p>
              ))}
            </div>

            {/* Quick Highlights / Stats Grid */}
            <div className="about__highlights">
              {highlights.map((h, index) => (
                <div key={index} className="about__highlight-card">
                  <span className="about__highlight-label">{h.label}</span>
                  <strong className="about__highlight-value">{h.value}</strong>
                  <span className="about__highlight-detail">{h.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sticky Current Focus Card */}
          <div className="about__focus-wrapper reveal">
            <aside className="about__focus-card">
              <div className="about__focus-header">
                <FiTarget size={20} color="var(--color-accent)" />
                <h3 className="about__focus-title">Current Focus & Core Competencies</h3>
              </div>

              <ul className="about__focus-list">
                {currentFocus.map((item, index) => (
                  <li key={index} className="about__focus-item">
                    <span className="about__focus-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
