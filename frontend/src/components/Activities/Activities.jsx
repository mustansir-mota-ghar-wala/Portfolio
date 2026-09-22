import React from 'react';
import './Activities.css';

export default function Activities({ data }) {
  const {
    sectionLabel = "EXTRACURRICULAR & LEADERSHIP",
    title = "Activities & Leadership",
    subtitle = "Collaborative initiatives, hackathons, and community contributions.",
    items = []
  } = data || {};

  return (
    <section className="section section--alt" id="activities">
      <div className="container">
        {/* Section Header */}
        <div className="section__header reveal">
          <span className="section__label">{sectionLabel}</span>
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>

        {/* Activities Grid */}
        <div className="activities__grid">
          {items.map((act) => (
            <div key={act.id} className="card activities__card reveal">
              <div className="activities__header">
                <span className="activities__icon" role="img" aria-hidden="true">
                  {act.icon}
                </span>
                <span className="badge badge-status">{act.badge}</span>
              </div>

              <h3 className="activities__title">{act.title}</h3>
              <p className="activities__desc">{act.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
