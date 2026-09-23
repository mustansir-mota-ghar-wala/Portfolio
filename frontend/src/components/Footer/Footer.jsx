import React from 'react';
import { personalConfig } from '../../data/config';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__brand">{personalConfig.name}</div>
        <p className="footer__tagline">{personalConfig.specialtyTagline}</p>

        <div className="footer__links" aria-label="Footer links">
          <a
            href={personalConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
          <span className="footer__sep" aria-hidden="true">|</span>
          <a
            href={personalConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
          <span className="footer__sep" aria-hidden="true">|</span>
          <a
            href={personalConfig.liveStore}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Burhani.store
          </a>
          <span className="footer__sep" aria-hidden="true">|</span>
          <a href={`mailto:${personalConfig.email}`} className="footer__link">
            {personalConfig.email}
          </a>
          <span className="footer__sep" aria-hidden="true">|</span>
          <a
            href={personalConfig.resumePath}
            download="Mustansir_Resume.pdf"
            className="footer__link"
          >
            Resume PDF
          </a>
        </div>

        <p className="footer__copyright">
          © {currentYear} {personalConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
