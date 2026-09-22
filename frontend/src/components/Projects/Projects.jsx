import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi';
import './Projects.css';

export default function Projects({ data }) {
  const {
    sectionLabel = "FEATURED WORK",
    title = "Featured Projects",
    subtitle = "Real-world production platforms, statutory compliance systems, and AI-driven applications.",
    filters = ["All", "Full Stack", "Backend", "Team Project"],
    items = []
  } = data || {};

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = items.filter((item) => {
    if (activeFilter === "All") return true;
    return item.category === activeFilter;
  });

  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section__header reveal">
          <span className="section__label">{sectionLabel}</span>
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>

        {/* Filter Bar Pills */}
        <div className="projects__filters reveal">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`projects__filter-btn ${
                activeFilter === filter ? 'projects__filter-btn--active' : ''
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards List */}
        <div className="projects__grid">
          {filteredItems.map((project) => (
            <article key={project.id} className="card projects__card reveal">
              {/* Card Header */}
              <div className="projects__card-header">
                <div className="projects__title-row">
                  <div>
                    <h3 className="projects__card-title">{project.title}</h3>
                    <p className="projects__card-subtitle">{project.subtitle}</p>
                  </div>

                  {project.status && (
                    <span className="badge-status">
                      <span>●</span>
                      <span>{project.status}</span>
                    </span>
                  )}
                </div>

                <p className="projects__card-desc">{project.description}</p>
              </div>

              {/* Tech Stack Row */}
              <div className="projects__tech-row" aria-label="Technologies used">
                {project.techStack.map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key Features Box (2-column on desktop) */}
              {project.features && project.features.length > 0 && (
                <div className="projects__features-box">
                  <div className="projects__features-label">Key Features & Architecture</div>
                  <ul className="projects__features-list">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="projects__feature-item">
                        <span className="projects__feature-bullet">
                          <FiCheck size={14} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action CTAs */}
              <div className="projects__actions">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <FiGithub size={16} />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="btn btn-secondary btn-disabled" title="Repository Private">
                    <FiGithub size={16} />
                    <span>Private Repository</span>
                  </span>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
