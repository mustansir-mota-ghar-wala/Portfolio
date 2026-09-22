import React from 'react';
import './Skills.css';

export default function Skills({ data }) {
  const {
    sectionLabel = "WHAT I WORK WITH",
    title = "Technical Skills",
    subtitle = "A curated overview of my engineering toolkit across backend, frontend, databases, and DevOps.",
    categories = []
  } = data || {};

  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Header */}
        <div className="section__header reveal">
          <span className="section__label">{sectionLabel}</span>
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>

        {/* Responsive Grid */}
        <div className="skills__grid">
          {categories.map((category) => (
            <div key={category.id} className="card skills__card reveal">
              <div className="skills__card-header">
                <span className="skills__icon" role="img" aria-label={category.title}>
                  {category.icon}
                </span>
                <h3 className="skills__category-title">{category.title}</h3>
              </div>

              <div className="skills__chips-wrap">
                {category.skills.map((skill) => (
                  <span key={skill} className="badge skills__chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
