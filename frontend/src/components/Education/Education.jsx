import React from 'react';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import './Education.css';

export default function Education({ data }) {
  const {
    sectionLabel = "ACADEMIC BACKGROUND",
    title = "Education",
    subtitle = "Formal academic qualifications in computer applications and science.",
    items = []
  } = data || {};

  return (
    <section className="section section--alt" id="education">
      <div className="container">
        {/* Section Header */}
        <div className="section__header reveal">
          <span className="section__label">{sectionLabel}</span>
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>

        {/* Education Cards Grid */}
        <div className="education__grid">
          {items.map((item) => (
            <div key={item.id} className="card education__card reveal">
              {/* Top 3px gradient accent bar */}
              <div className="education__accent-bar" aria-hidden="true" />

              {/* Header with 56x56 monogram & degree info */}
              <div className="education__header">
                <div className="education__monogram" aria-hidden="true">
                  {item.monogram}
                </div>

                <div className="education__info">
                  <h3 className="education__degree">{item.degree}</h3>
                  <div className="education__institution">{item.institution}</div>
                  <div className="education__location">
                    <FiMapPin size={13} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {item.description && (
                <p className="education__desc">{item.description}</p>
              )}

              {/* Card Footer */}
              <div className="education__footer">
                <div className="education__status-wrap">
                  <span className="badge badge-status">{item.status}</span>
                  <span className="education__duration">
                    <FiCalendar size={13} style={{ display: 'inline', marginRight: '4px' }} />
                    {item.duration}
                  </span>
                </div>

                {item.cgpa && (
                  <div className="education__cgpa">{item.cgpa}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
