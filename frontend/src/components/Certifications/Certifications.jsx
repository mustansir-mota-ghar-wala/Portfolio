import React from 'react';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import './Certifications.css';

export default function Certifications({ data }) {
  const {
    sectionLabel = "CREDENTIALS",
    title = "Certifications",
    subtitle = "Professional certifications and technical credentials.",
    items = []
  } = data || {};

  return (
    <section className="section" id="certifications">
      <div className="container">
        {/* Section Header */}
        <div className="section__header reveal">
          <span className="section__label">{sectionLabel}</span>
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>

        {/* Certifications Grid */}
        <div className="certs__grid">
          {items.map((cert) => (
            <div key={cert.id} className="card certs__card reveal">
              <div>
                <div className="certs__header">
                  <span className="certs__issuer-badge">{cert.issuerBadge}</span>
                  <span className="certs__year">{cert.year}</span>
                </div>

                <div style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
                  <h3 className="certs__name">{cert.name}</h3>
                </div>

                {cert.note && <p className="certs__note">{cert.note}</p>}
              </div>

              <div>
                {cert.link && cert.link !== '#' ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary certs__btn"
                  >
                    <FiAward size={14} />
                    <span>View Certificate</span>
                    <FiExternalLink size={14} />
                  </a>
                ) : (
                  <button
                    type="button"
                    className="btn btn-secondary certs__btn"
                    title="Certificate verification verified"
                  >
                    <FiAward size={14} />
                    <span>Verified Credential</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
