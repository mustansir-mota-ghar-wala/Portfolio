import React, { useState } from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiLinkedin,
  FiGithub,
  FiFileText,
  FiMessageCircle
} from 'react-icons/fi';
import { personalConfig } from '../../data/config';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open user's default email client pre-filled with subject and message
    const mailtoUrl = `mailto:${personalConfig.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section__header reveal">
          <span className="section__label">GET IN TOUCH</span>
          <h2 className="section__title">Start a Conversation</h2>
          <p className="section__subtitle">
            Whether you have a role opportunity, project idea, or simply want to connect, feel free to reach out!
          </p>
        </div>

        {/* Central Contact Card */}
        <div className="contact__wrapper reveal">
          <div className="card contact__card">
            {/* Info Boxes */}
            <div className="contact__info-grid">
              <div className="contact__info-box">
                <div className="contact__info-icon">
                  <FiMail size={20} />
                </div>
                <div>
                  <div className="contact__info-label">Email</div>
                  <a href={`mailto:${personalConfig.email}`} className="contact__info-val">
                    {personalConfig.email}
                  </a>
                </div>
              </div>

              <div className="contact__info-box">
                <div className="contact__info-icon">
                  <FiPhone size={20} />
                </div>
                <div>
                  <div className="contact__info-label">Phone</div>
                  <a href={`tel:${personalConfig.phone}`} className="contact__info-val">
                    {personalConfig.phone}
                  </a>
                </div>
              </div>

              <div className="contact__info-box">
                <div className="contact__info-icon">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <div className="contact__info-label">Location</div>
                  <span className="contact__info-val">{personalConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons Row */}
            <div className="contact__actions-row">
              <a
                href={`mailto:${personalConfig.email}`}
                className="btn btn-primary"
              >
                <FiMail size={16} />
                <span>Email Me</span>
              </a>

              <a
                href={personalConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FiMessageCircle size={16} />
                <span>WhatsApp</span>
              </a>

              <a
                href={personalConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FiLinkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FiGithub size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personalConfig.resumePath}
                download="Mustansir_Resume.pdf"
                className="btn btn-secondary"
              >
                <FiFileText size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Interactive Direct Message Form */}
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__input-group">
                  <label htmlFor="contact-name" className="contact__label">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="contact__input"
                    placeholder="e.g. Alex Morgan"
                  />
                </div>

                <div className="contact__input-group">
                  <label htmlFor="contact-email" className="contact__label">
                    Your Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="contact__input"
                    placeholder="alex@example.com"
                  />
                </div>
              </div>

              <div className="contact__input-group">
                <label htmlFor="contact-subject" className="contact__label">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact__input"
                  placeholder="e.g. Project Discussion / Job Opportunity"
                />
              </div>

              <div className="contact__input-group">
                <label htmlFor="contact-message" className="contact__label">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__textarea"
                  placeholder="Hi Mustansir, I would like to discuss..."
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                <FiSend size={16} />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="contact__form-status">
                  ✓ Opening your email client to send your message. Thank you for reaching out!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
