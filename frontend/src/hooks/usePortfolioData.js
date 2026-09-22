import { useState, useEffect } from 'react';
import { portfolioData as localPortfolioData } from '../data/portfolioData';

/**
 * Custom hook to retrieve portfolio data with dual-mode fetching:
 * 1. If VITE_API_URL is configured, executes Promise.all across all 7 FastAPI endpoints:
 *    - /api/profile
 *    - /api/skills
 *    - /api/projects
 *    - /api/experience
 *    - /api/education
 *    - /api/certifications
 *    - /api/activities
 * 2. Merges the remote responses into the portfolio state structure.
 * 3. Gracefully falls back to local portfolioData.js if the backend is unreachable.
 */
export function usePortfolioData() {
  const [data, setData] = useState(localPortfolioData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (!apiUrl) {
      return;
    }

    setLoading(true);

    const endpoints = [
      `${apiUrl}/api/profile`,
      `${apiUrl}/api/skills`,
      `${apiUrl}/api/projects`,
      `${apiUrl}/api/experience`,
      `${apiUrl}/api/education`,
      `${apiUrl}/api/certifications`,
      `${apiUrl}/api/activities`
    ];

    Promise.all(
      endpoints.map((url) =>
        fetch(url).then((res) => {
          if (!res.ok) {
            throw new Error(`API endpoint ${url} failed with status: ${res.status}`);
          }
          return res.json();
        })
      )
    )
      .then(
        ([
          profile,
          skills,
          projects,
          experience,
          education,
          certifications,
          activities
        ]) => {
          // Category mapper for projects filter pills
          const formatCategory = (cat) => {
            if (cat === 'fullstack') return 'Full Stack';
            if (cat === 'team') return 'Team Project';
            return 'Backend';
          };

          // Build merged state honoring both FastAPI schema & rich UI tokens
          const mergedData = {
            ...localPortfolioData,

            hero: {
              ...localPortfolioData.hero,
              greeting: `Hi, I'm ${profile.name.split(' ')[0]}`,
              headlineRole: profile.headline.includes('&')
                ? profile.headline.split('&')[0].trim()
                : profile.headline,
              headlineAccent: profile.headline.includes('&')
                ? profile.headline.split('&')[1].trim()
                : '',
              summary: profile.description || localPortfolioData.hero.summary,
              techStack: profile.tech_line || localPortfolioData.hero.techStack
            },

            skills: {
              ...localPortfolioData.skills,
              categories: skills.map((cat, index) => {
                const localMatch = localPortfolioData.skills.categories[index] || {};
                return {
                  id: cat.category.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                  title: cat.category,
                  icon: localMatch.icon || '⚙️',
                  skills: cat.skills
                };
              })
            },

            projects: {
              ...localPortfolioData.projects,
              items: projects.map((p) => {
                const localMatch =
                  localPortfolioData.projects.items.find((item) => item.id === p.id) || {};
                return {
                  id: p.id,
                  title: p.name,
                  subtitle: p.subtitle,
                  status: p.status,
                  category: formatCategory(p.category),
                  description: p.description,
                  techStack: p.technologies,
                  features: p.features,
                  githubUrl: p.github_url,
                  liveUrl: p.live_url,
                  image: localMatch.image || null
                };
              })
            },

            experience: {
              ...localPortfolioData.experience,
              timeline: experience.map((exp, index) => {
                const localMatch =
                  localPortfolioData.experience.timeline[index] || {};
                return {
                  id: `exp-${index}`,
                  role: exp.position,
                  company: exp.company,
                  companyUrl: localMatch.companyUrl || null,
                  duration: exp.duration,
                  startYear: exp.start_year,
                  endYear: exp.end_year,
                  location: exp.location,
                  projectTag: exp.project_name,
                  description: exp.description,
                  responsibilities: exp.responsibilities
                };
              })
            },

            education: {
              ...localPortfolioData.education,
              items: education.map((edu, index) => {
                const localMatch = localPortfolioData.education.items[index] || {};
                return {
                  id: `edu-${index}`,
                  degree: edu.full_degree || edu.degree,
                  monogram: edu.degree,
                  institution: edu.university,
                  location: edu.location,
                  duration: edu.duration,
                  status: edu.status || 'Completed',
                  cgpa: edu.cgpa,
                  description: localMatch.description || ''
                };
              })
            },

            certifications: {
              ...localPortfolioData.certifications,
              items: certifications.map((cert, index) => {
                const localMatch =
                  localPortfolioData.certifications.items[index] || {};
                return {
                  id: `cert-${index}`,
                  name: cert.name,
                  issuer: cert.issuer,
                  issuerBadge: localMatch.issuerBadge || cert.issuer.split(' ')[0],
                  year: localMatch.year || '2026',
                  status: localMatch.status || 'Verified',
                  link: cert.url || localMatch.link || '#',
                  note: localMatch.note || ''
                };
              })
            },

            activities: {
              ...localPortfolioData.activities,
              items: activities.map((act, index) => {
                const localMatch = localPortfolioData.activities.items[index] || {};
                return {
                  id: `act-${index}`,
                  title: act.title,
                  badge: localMatch.badge || 'Contributor',
                  icon: localMatch.icon || '🚀',
                  description: act.description
                };
              })
            }
          };

          setData(mergedData);
          setLoading(false);
        }
      )
      .catch((err) => {
        console.warn('Backend API fetch error, fallback to local data:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
