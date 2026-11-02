import React, { useState, useEffect } from 'react';
import {
  FolderHeart,
  Eye,
  X,
  CheckCircle2,
  MapPin,
  Stethoscope,
  Users,
  Image as ImageIcon,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/projects.css';

function getProjectIcon(id) {
  if (id === 'holeseeker') return <MapPin size={21} />;
  if (id === 'pet-grooming-vet') return <Stethoscope size={21} />;
  return <Users size={21} />;
}

function getProjectImages(project) {
  if (Array.isArray(project.screenshots) && project.screenshots.length > 0) {
    return project.screenshots.filter(Boolean);
  }
  if (project.screenshot) {
    return [project.screenshot];
  }
  return [];
}

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [cardSlideIndex, setCardSlideIndex] = useState({});
  const [lightboxState, setLightboxState] = useState(null); // { project, index }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxState) {
          setLightboxState(null);
        } else {
          setSelectedProject(null);
        }
      } else if (lightboxState && e.key === 'ArrowRight') {
        const imgs = getProjectImages(lightboxState.project);
        if (imgs.length > 1) {
          setLightboxState((prev) => ({
            ...prev,
            index: (prev.index + 1) % imgs.length,
          }));
        }
      } else if (lightboxState && e.key === 'ArrowLeft') {
        const imgs = getProjectImages(lightboxState.project);
        if (imgs.length > 1) {
          setLightboxState((prev) => ({
            ...prev,
            index: (prev.index - 1 + imgs.length) % imgs.length,
          }));
        }
      }
    };

    if (selectedProject || lightboxState) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, lightboxState]);

  const handleCardSlide = (e, project, direction) => {
    e.stopPropagation();
    const imgs = getProjectImages(project);
    if (imgs.length <= 1) return;
    const current = cardSlideIndex[project.id] || 0;
    const next = (current + direction + imgs.length) % imgs.length;
    setCardSlideIndex((prev) => ({ ...prev, [project.id]: next }));
  };

  const openLightbox = (project, index = 0) => {
    setLightboxState({ project, index });
  };

  return (
    <section
      id="projects"
      className="projects-section section-container reveal-section"
    >
      <div className="section-header">
        <div className="section-eyebrow">
          <FolderHeart size={14} aria-hidden="true" />
          <span>Chapter 03 · IT Projects</span>
        </div>
        <h2 className="section-title">
          Things I&apos;ve <em>created ♡</em>
        </h2>
        <p className="section-subtitle">{projects.supportingText}</p>
      </div>

      <div className="projects-grid">
        {projects.items.map((project) => {
          const images = getProjectImages(project);
          const currentIndex = cardSlideIndex[project.id] || 0;
          const activeImage = images[currentIndex] || null;

          return (
            <article key={project.id} className="project-card">
              {/* Screenshot or Feminine Browser Window Placeholder */}
              <div className={`project-preview accent-${project.accent}`}>
                {activeImage ? (
                  <>
                    <img
                      src={activeImage}
                      alt={`Screenshot of ${project.title}`}
                      className="project-preview-img"
                      onClick={() => openLightbox(project, currentIndex)}
                    />
                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="project-carousel-nav prev"
                          onClick={(e) => handleCardSlide(e, project, -1)}
                          aria-label={`Previous screenshot for ${project.title}`}
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          type="button"
                          className="project-carousel-nav next"
                          onClick={(e) => handleCardSlide(e, project, 1)}
                          aria-label={`Next screenshot for ${project.title}`}
                        >
                          <ChevronRight size={16} />
                        </button>
                      </>
                    )}
                    <button
                      type="button"
                      className="project-enlarge-btn"
                      onClick={() => openLightbox(project, currentIndex)}
                      aria-label={`Enlarge screenshot of ${project.title}`}
                    >
                      <ZoomIn size={14} />
                      <span>Click to enlarge</span>
                    </button>
                  </>
                ) : (
                  <div className="project-placeholder-window">
                    <div className="project-window-bar" aria-hidden="true">
                      <span className="window-dot pink" />
                      <span className="window-dot lavender" />
                      <span className="window-dot cream" />
                    </div>
                    <div className="project-window-body">
                      <div className="project-window-icon" aria-hidden="true">
                        {getProjectIcon(project.id)}
                      </div>
                      <p className="project-window-label">{project.title}</p>
                      <p className="project-window-hint">
                        Screenshot placeholder · Replace in{' '}
                        <code>{project.screenshotHint}</code>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="project-body">
                <span className="project-category-badge">
                  {project.category}
                </span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-list" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="project-details-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye size={16} />
                  <span>View Details</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Accessible Project Details Modal */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="project-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              <X size={18} />
            </button>

            <span className="project-category-badge">
              {selectedProject.category}
            </span>
            <h3
              id="modal-project-title"
              className="project-title"
              style={{ fontSize: '1.8rem', marginTop: '6px' }}
            >
              {selectedProject.title}
            </h3>

            {getProjectImages(selectedProject).length > 0 && (
              <div
                className="project-modal-screenshot-wrap"
                onClick={() => openLightbox(selectedProject, 0)}
                title="Click to enlarge screenshot"
              >
                <img
                  src={getProjectImages(selectedProject)[0]}
                  alt={`Preview of ${selectedProject.title}`}
                  className="project-modal-screenshot"
                />
                <button
                  type="button"
                  className="project-enlarge-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(selectedProject, 0);
                  }}
                >
                  <ZoomIn size={14} />
                  <span>Enlarge Preview</span>
                </button>
              </div>
            )}

            <p className="project-description" style={{ marginTop: '14px' }}>
              {selectedProject.description}
            </p>

            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: 'var(--dark-plum)',
                marginTop: '16px',
              }}
            >
              Key System Overview ♡
            </h4>

            <ul className="project-modal-highlights">
              {selectedProject.highlights.map((point) => (
                <li key={point}>
                  <CheckCircle2
                    size={18}
                    color="#B76E8B"
                    style={{ flexShrink: 0, marginTop: '3px' }}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="project-tech-list" style={{ marginBottom: 0 }}>
              {selectedProject.technologies.map((tech) => (
                <span key={tech} className="project-tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-modal-note">
              <ImageIcon
                size={15}
                style={{
                  display: 'inline',
                  verticalAlign: 'middle',
                  marginRight: '6px',
                }}
              />
              Click the screenshot above anytime to view the full-size preview.
            </div>
          </div>
        </div>
      )}

      {/* Click-to-Enlarge Lightbox */}
      {lightboxState && (
        <div
          className="project-lightbox-backdrop"
          onClick={() => setLightboxState(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxState.project.title} enlarged screenshot`}
        >
          <div
            className="project-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setLightboxState(null)}
              aria-label="Close enlarged screenshot"
              style={{ top: '14px', right: '14px', zIndex: 10 }}
            >
              <X size={18} />
            </button>

            <div className="project-lightbox-img-wrap">
              <img
                src={
                  getProjectImages(lightboxState.project)[lightboxState.index]
                }
                alt={`${lightboxState.project.title} full screenshot`}
                className="project-lightbox-img"
              />

              {getProjectImages(lightboxState.project).length > 1 && (
                <>
                  <button
                    type="button"
                    className="project-carousel-nav prev"
                    onClick={() => {
                      const imgs = getProjectImages(lightboxState.project);
                      setLightboxState((prev) => ({
                        ...prev,
                        index: (prev.index - 1 + imgs.length) % imgs.length,
                      }));
                    }}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    className="project-carousel-nav next"
                    onClick={() => {
                      const imgs = getProjectImages(lightboxState.project);
                      setLightboxState((prev) => ({
                        ...prev,
                        index: (prev.index + 1) % imgs.length,
                      }));
                    }}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>

            <div className="project-lightbox-caption">
              <span className="project-lightbox-title">
                {lightboxState.project.title}
              </span>
              <span className="project-category-badge" style={{ marginBottom: 0 }}>
                {lightboxState.project.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
