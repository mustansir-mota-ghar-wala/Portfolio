import React from 'react';
import {
  FiMapPin,
  FiCalendar,
  FiAward,
  FiCheckCircle,
  FiBookOpen,
  FiShield
} from 'react-icons/fi';
import './Education.css';

export default function Education({ data }) {
  const {
    sectionLabel = "ACADEMIC BACKGROUND",
    title = "Education & Credentials",
    subtitle = "Formal academic qualifications, verified degrees, and core computer science specializations.",
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

        {/* Digital Credential Cards Grid */}
        <div className="education__credentials-grid">
          {items.map((item, idx) => {
            const isPursuing =
              item.status?.toLowerCase().includes('pursuing') ||
              item.status?.toLowerCase().includes('progress');

            return (
              <div key={item.id || idx} className="edu-credential-card reveal">
                {/* Subtle Background Watermark */}
                <div className="edu-credential__watermark" aria-hidden="true">
                  <FiShield />
                </div>

                {/* Top Bar: Ribbon & Performance Pill */}
                <div className="edu-credential__top-bar">
                  <div className="edu-credential__ribbon-tag">
                    <FiAward className="edu-credential__ribbon-icon" />
                    <span>DEGREE CREDENTIAL</span>
                  </div>

                  <div className="edu-credential__top-badges">
                    {item.cgpa && (
                      <span className="edu-credential__score-pill">
                        {item.cgpa}
                      </span>
                    )}
                    <span
                      className={`edu-credential__status-pill ${
                        isPursuing ? 'status--active' : 'status--completed'
                      }`}
                    >
                      <span className="edu-credential__status-dot" />
                      <span>{isPursuing ? 'Pursuing' : 'Conferred'}</span>
                    </span>
                  </div>
                </div>

                {/* Degree & Institution Info */}
                <div className="edu-credential__main">
                  <div className="edu-credential__seal" aria-hidden="true">
                    <span>{item.monogram || 'DEG'}</span>
                  </div>

                  <div className="edu-credential__details">
                    <h3 className="edu-credential__degree">{item.degree}</h3>
                    <div className="edu-credential__meta-line">
                      <span className="edu-credential__institution">
                        <FiBookOpen size={13} />
                        {item.institution}
                      </span>
                      <span className="edu-credential__meta-sep">•</span>
                      <span className="edu-credential__meta-sub">
                        <FiMapPin size={12} />
                        {item.location}
                      </span>
                      <span className="edu-credential__meta-sep">•</span>
                      <span className="edu-credential__meta-sub">
                        <FiCalendar size={12} />
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="edu-credential__desc">{item.description}</p>
                )}

                {/* Compact Coursework Tags */}
                {item.modules && item.modules.length > 0 && (
                  <div className="edu-credential__tags">
                    {item.modules.map((mod, mIdx) => (
                      <span key={mIdx} className="edu-credential__tag">
                        {mod}
                      </span>
                    ))}
                  </div>
                )}

                {/* Compact Footer */}
                <div className="edu-credential__footer">
                  <div className="edu-credential__verification">
                    <FiCheckCircle size={13} className="edu-credential__verify-icon" />
                    <span>Official University Record</span>
                  </div>
                  {item.honors && (
                    <span className="edu-credential__honors-text">
                      ★ {item.honors}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
