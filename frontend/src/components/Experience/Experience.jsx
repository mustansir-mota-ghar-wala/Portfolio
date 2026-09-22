import React from 'react';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';
import './Experience.css';

export default function Experience({ data }) {
  const {
    sectionLabel = "WORK HISTORY",
    title = "Experience",
    subtitle = "Hands-on engineering experience building production systems and lead architecture.",
    timeline = []
  } = data || {};

  return (
    <section className="section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section__header reveal">
          <span className="section__label">{sectionLabel}</span>
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>

        {/* Timeline */}
        <div className="experience__timeline">
          {/* Vertical Track Line */}
          <div className="experience__spine" aria-hidden="true" />

          {timeline.map((item) => (
            <div key={item.id} className="experience__item reveal">
              {/* Timeline Dot Node */}
              <div className="experience__node" aria-hidden="true" />

              <article className="card experience__card">
                <div className="experience__header">
                  <div className="experience__role-row">
                    <h3 className="experience__role">{item.role}</h3>
                    {item.projectTag && (
                      <span className="badge badge-status">
                        {item.projectTag}
                      </span>
                    )}
                  </div>

                  <div className="experience__company-row">
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience__company"
                      >
                        {item.company}
                      </a>
                    ) : (
                      <span className="experience__company">{item.company}</span>
                    )}

                    <span className="experience__meta">
                      <FiCalendar size={14} />
                      <span>{item.duration}</span>
                    </span>

                    <span className="experience__meta">
                      <FiMapPin size={14} />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <p className="experience__desc">{item.description}</p>

                {item.responsibilities && item.responsibilities.length > 0 && (
                  <div>
                    <div className="experience__resp-label" style={{ marginBottom: '0.625rem' }}>
                      Key Responsibilities & Deliverables
                    </div>
                    <ul className="experience__resp-list">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="experience__resp-item">
                          <span className="experience__resp-dot" aria-hidden="true" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
