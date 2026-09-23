import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FiGithub, FiExternalLink, FiCheck, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
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
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const touchStartX = useRef(null);

  const filteredItems = items.filter((item) => {
    if (activeFilter === "All") return true;
    return item.category === activeFilter;
  });

  const totalCards = filteredItems.length;

  // Reset to first card when category changes
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setActiveCardIndex(0);
  };

  const goToPrev = useCallback(() => {
    if (totalCards <= 1) return;
    setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : totalCards - 1));
  }, [totalCards]);

  const goToNext = useCallback(() => {
    if (totalCards <= 1) return;
    setActiveCardIndex((prev) => (prev < totalCards - 1 ? prev + 1 : 0));
  }, [totalCards]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrev, goToNext]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) goToNext();
    else if (diff < -45) goToPrev();
    touchStartX.current = null;
  };

  // 3D Card Stack placement calculation - fans out visibly to left and right
  const getCardStyle = (index) => {
    if (totalCards <= 1) {
      return {
        transform: 'translate3d(0, 0, 0) scale(1) rotate(0deg)',
        zIndex: 20,
        opacity: 1,
        pointerEvents: 'auto'
      };
    }

    let offset = index - activeCardIndex;
    const half = Math.floor(totalCards / 2);
    if (offset > half) offset -= totalCards;
    if (offset < -half) offset += totalCards;

    if (offset === 0) {
      return {
        transform: 'translate3d(0, 0, 0) scale(1) rotate(0deg)',
        zIndex: 20,
        opacity: 1,
        pointerEvents: 'auto'
      };
    }

    const absOffset = Math.abs(offset);
    if (absOffset <= 2) {
      // Fan cards outward to left (negative) and right (positive)
      const sign = Math.sign(offset);
      const translateX = sign * (48 + (absOffset - 1) * 36);
      const translateY = absOffset * 10;
      const rotate = sign * (3.5 + (absOffset - 1) * 2.5);
      const scale = 1 - absOffset * 0.045;
      const opacity = Math.max(0.75, 1 - absOffset * 0.14);

      return {
        transform: `translate3d(${translateX}px, ${translateY}px, -${absOffset * 30}px) scale(${scale}) rotate(${rotate}deg)`,
        zIndex: 20 - absOffset,
        opacity: opacity,
        pointerEvents: 'auto',
        cursor: 'pointer'
      };
    }

    return {
      transform: 'translate3d(0, 40px, -120px) scale(0.85) rotate(0deg)',
      zIndex: 1,
      opacity: 0,
      pointerEvents: 'none'
    };
  };

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
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 3D Stack Stage */}
        <div
          className="projects__deck-wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Floating Side Arrows for Instant Accessibility */}
          {totalCards > 1 && (
            <>
              <button
                type="button"
                className="projects__side-arrow projects__side-arrow--prev"
                onClick={goToPrev}
                aria-label="Previous project card"
              >
                <FiArrowLeft size={20} />
              </button>
              <button
                type="button"
                className="projects__side-arrow projects__side-arrow--next"
                onClick={goToNext}
                aria-label="Next project card"
              >
                <FiArrowRight size={20} />
              </button>
            </>
          )}
          <div className="projects__deck-stage">
            {filteredItems.map((project, index) => {
              const isActive = index === activeCardIndex;
              const cardStyle = getCardStyle(index);

              return (
                <article
                  key={project.id}
                  className={`card projects__card projects__card--stacked ${
                    isActive ? 'projects__card--active' : 'projects__card--behind'
                  }`}
                  style={cardStyle}
                  onClick={() => {
                    if (!isActive) setActiveCardIndex(index);
                  }}
                  aria-hidden={!isActive}
                >
                  {/* Visual Peek Hint for Background Cards */}
                  {!isActive && (
                    <div className="projects__peek-badge">
                      <span>Click to explore →</span>
                    </div>
                  )}

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

                  {/* Key Features Box */}
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
                        tabIndex={isActive ? 0 : -1}
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
                        tabIndex={isActive ? 0 : -1}
                      >
                        <span>Live Demo</span>
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Deck Controls (Previous, Pagination Counter, Next) */}
          {totalCards > 1 && (
            <div className="projects__deck-controls">
              <button
                type="button"
                className="projects__deck-arrow"
                onClick={goToPrev}
                aria-label="Previous project card"
              >
                <FiArrowLeft size={18} />
              </button>

              <div className="projects__deck-counter">
                <span className="projects__counter-current">
                  {String(activeCardIndex + 1).padStart(2, '0')}
                </span>
                <span className="projects__counter-divider">/</span>
                <span className="projects__counter-total">
                  {String(totalCards).padStart(2, '0')}
                </span>
              </div>

              <button
                type="button"
                className="projects__deck-arrow projects__deck-arrow--primary"
                onClick={goToNext}
                aria-label="Next project card"
              >
                <FiArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
