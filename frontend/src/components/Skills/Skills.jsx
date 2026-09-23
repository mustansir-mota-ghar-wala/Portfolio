import React, { useState, useMemo, useEffect } from 'react';
import { FiSearch, FiLayers, FiCheck, FiSliders } from 'react-icons/fi';
import './Skills.css';

export default function Skills({ data }) {
  const {
    sectionLabel = "WHAT I WORK WITH",
    title = "Technical Skills",
    subtitle = "A curated overview of my engineering toolkit across backend, frontend, databases, and DevOps.",
    categories = []
  } = data || {};

  // Find DevOps & Cloud category dynamically
  const devopsCategory = useMemo(() => {
    return categories.find(
      (c) => c.id?.toLowerCase().includes('devops') || c.title?.toLowerCase().includes('devops')
    );
  }, [categories]);

  const [activeCategory, setActiveCategory] = useState('devops');
  const [searchQuery, setSearchQuery] = useState('');

  // Automatically select DevOps & Cloud as soon as categories load from API or local data
  useEffect(() => {
    if (categories.length > 0) {
      const targetCat = categories.find(
        (c) => c.id?.toLowerCase().includes('devops') || c.title?.toLowerCase().includes('devops')
      );
      if (targetCat) {
        setActiveCategory(targetCat.id);
      }
    }
  }, [categories]);

  // Flatten all skills for the matrix
  const allSkillsList = useMemo(() => {
    const list = [];
    categories.forEach((cat) => {
      cat.skills.forEach((skill) => {
        list.push({
          name: skill,
          categoryId: cat.id,
          categoryTitle: cat.title,
          categoryIcon: cat.icon
        });
      });
    });
    return list;
  }, [categories]);

  // Separate active category skills vs other skills for prioritized display
  const { activeCategorySkills, otherSkills } = useMemo(() => {
    if (activeCategory === 'all') {
      return { activeCategorySkills: allSkillsList, otherSkills: [] };
    }
    const active = allSkillsList.filter((item) => item.categoryId === activeCategory);
    const others = allSkillsList.filter((item) => item.categoryId !== activeCategory);
    return { activeCategorySkills: active, otherSkills: others };
  }, [allSkillsList, activeCategory]);

  // Filter skills when user is searching
  const filteredSkills = useMemo(() => {
    if (!searchQuery.trim()) return allSkillsList;
    return allSkillsList.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
  }, [allSkillsList, searchQuery]);

  // Selected category data
  const currentCategoryObj = useMemo(() => {
    if (activeCategory === 'all') return null;
    return categories.find((c) => c.id === activeCategory);
  }, [categories, activeCategory]);

  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Header */}
        <div className="section__header reveal">
          <span className="section__label">{sectionLabel}</span>
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>

        {/* 2-Card Side-by-Side Bento Grid */}
        <div className="skills__bento">
          {/* Card 1 (Left): Category Explorer & Domain Hub */}
          <div className="card skills__bento-card skills__bento-category reveal">
            <div className="skills__tile-header">
              <div className="skills__tile-title-group">
                <span className="skills__tile-badge">
                  <FiLayers size={14} />
                  <span>Domain Hub</span>
                </span>
                <h3 className="skills__tile-title">Engineering Domains</h3>
              </div>
              <span className="skills__tile-counter">
                {categories.length} Categories
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="skills__category-pills">
              <button
                type="button"
                className={`skills__cat-pill ${activeCategory === 'all' ? 'skills__cat-pill--active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                <span>⚡</span>
                <span>All Skills</span>
                <span className="skills__cat-count">{allSkillsList.length}</span>
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`skills__cat-pill ${activeCategory === cat.id ? 'skills__cat-pill--active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.title}</span>
                  <span className="skills__cat-count">{cat.skills.length}</span>
                </button>
              ))}
            </div>

            {/* Active Category Snapshot */}
            <div className="skills__category-preview">
              <div className="skills__preview-header">
                <span className="skills__preview-label">
                  {currentCategoryObj ? `${currentCategoryObj.icon} ${currentCategoryObj.title}` : '⚡ Full Engineering Toolkit'}
                </span>
                <span className="skills__preview-status">Production Ready</span>
              </div>
              <div className="skills__preview-chips">
                {(currentCategoryObj ? currentCategoryObj.skills : allSkillsList.slice(0, 8).map((s) => s.name)).map((skill) => (
                  <span key={skill} className="skills__preview-tag">
                    <FiCheck size={12} className="skills__tag-check" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 (Right): Interactive Tech Chip Matrix */}
          <div className="card skills__bento-card skills__bento-matrix reveal">
            <div className="skills__tile-header">
              <div className="skills__tile-title-group">
                <span className="skills__tile-badge">
                  <FiSliders size={14} />
                  <span>Interactive Catalog</span>
                </span>
                <h3 className="skills__tile-title">Tech Chip Matrix</h3>
              </div>
              <span className="skills__tile-counter">
                {searchQuery.trim()
                  ? `${filteredSkills.length} matches`
                  : activeCategory === 'all'
                  ? `${allSkillsList.length} Skills`
                  : `${activeCategorySkills.length} Focus • ${allSkillsList.length} Total`}
              </span>
            </div>

            {/* Search Input Bar */}
            <div className="skills__search-box">
              <FiSearch size={15} className="skills__search-icon" />
              <input
                type="text"
                placeholder="Search skills (e.g. Django, React, Docker)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="skills__search-input"
                aria-label="Search skills"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="skills__search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Scrollable & Filled Matrix Chips */}
            <div className="skills__matrix-chips">
              {searchQuery.trim() ? (
                /* Search Filter Results */
                filteredSkills.length > 0 ? (
                  filteredSkills.map((item) => (
                    <div
                      key={item.name}
                      className="badge skills__matrix-chip"
                      title={`Domain: ${item.categoryTitle}`}
                    >
                      <span className="skills__chip-icon">{item.categoryIcon}</span>
                      <span className="skills__chip-name">{item.name}</span>
                      <span className="skills__chip-category">{item.categoryTitle.split(' ')[0]}</span>
                    </div>
                  ))
                ) : (
                  <div className="skills__empty-search">
                    <p>No skills match "<strong>{searchQuery}</strong>".</p>
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSearchQuery('')}
                    >
                      Clear Search
                    </button>
                  </div>
                )
              ) : activeCategory === 'all' ? (
                /* All Skills */
                allSkillsList.map((item) => (
                  <div
                    key={item.name}
                    className="badge skills__matrix-chip"
                    title={`Domain: ${item.categoryTitle}`}
                  >
                    <span className="skills__chip-icon">{item.categoryIcon}</span>
                    <span className="skills__chip-name">{item.name}</span>
                    <span className="skills__chip-category">{item.categoryTitle.split(' ')[0]}</span>
                  </div>
                ))
              ) : (
                /* Selected Domain First, Followed by All Other Skills */
                <>
                  <div className="skills__matrix-group-label">
                    <span>{currentCategoryObj ? `${currentCategoryObj.icon} ${currentCategoryObj.title} Focus` : 'Focused Domain'}</span>
                    <span className="skills__matrix-group-badge">{activeCategorySkills.length} tools</span>
                  </div>

                  {activeCategorySkills.map((item) => (
                    <div
                      key={item.name}
                      className="badge skills__matrix-chip skills__matrix-chip--featured"
                      title={`Domain: ${item.categoryTitle}`}
                    >
                      <span className="skills__chip-icon">{item.categoryIcon}</span>
                      <span className="skills__chip-name">{item.name}</span>
                      <span className="skills__chip-category skills__chip-category--featured">Selected</span>
                    </div>
                  ))}

                  <div className="skills__matrix-group-label skills__matrix-group-label--secondary">
                    <span>Other Technologies in Toolkit</span>
                    <span className="skills__matrix-group-badge">{otherSkills.length} tools</span>
                  </div>

                  {otherSkills.map((item) => (
                    <div
                      key={item.name}
                      className="badge skills__matrix-chip skills__matrix-chip--subtle"
                      title={`Domain: ${item.categoryTitle}`}
                    >
                      <span className="skills__chip-icon">{item.categoryIcon}</span>
                      <span className="skills__chip-name">{item.name}</span>
                      <span className="skills__chip-category">{item.categoryTitle.split(' ')[0]}</span>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
