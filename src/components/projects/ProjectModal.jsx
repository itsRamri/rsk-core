import React from 'react';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} id="project-modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container glass-card">
        <button
          className="modal-close-btn"
          id="modal-close-btn"
          aria-label="Close modal"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="modal-body" id="modal-body">
          <div className="modal-project-header">
            <span className="project-cat-pill">{project.categoryLabel}</span>
            <h2 style={{ fontSize: '1.6rem', margin: '0.6rem 0 0.2rem', color: '#ffffff' }}>
              {project.title}
            </h2>
            <p style={{ color: 'var(--primary)', fontFamily: 'var(--font-heading)', marginBottom: '1.2rem' }}>
              {project.subtitle}
            </p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.6)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '1.2rem' }}>
            <h4 style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              <i className="fa-solid fa-network-wired"></i> System Architecture
            </h4>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#ffffff' }}>
              {project.architecture}
            </p>
          </div>

          <div style={{ marginBottom: '1.2rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              <i className="fa-solid fa-microchip highlight"></i> Technical Specifications
            </h4>
            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6', listStyle: 'disc' }}>
              {project.specs.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>
          </div>

          {/* Engineering Schematics & CAD Proof */}
          {project.images && project.images.length > 0 && (
            <div style={{ marginBottom: '1.4rem' }}>
              <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.6rem' }}>
                <i className="fa-solid fa-images highlight"></i> Schematic Captures & CAD Proof (OrCAD CIS 17.2)
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.8rem' }}>
                {project.images.map((imgSrc, idx) => (
                  <a
                    key={idx}
                    href={imgSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.18)',
                      background: '#ffffff',
                      textDecoration: 'none'
                    }}
                    title="Click to view full high-res schematic"
                  >
                    <img
                      src={imgSrc}
                      alt={`${project.title} Schematic ${idx + 1}`}
                      style={{
                        width: '100%',
                        height: '160px',
                        objectFit: 'contain',
                        display: 'block',
                        padding: '6px',
                        background: '#ffffff'
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              <i className="fa-solid fa-circle-info highlight"></i> Project Overview & Engineering Rationale
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {project.description}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.2rem' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary btn-glow"
            >
              <i className="fa-brands fa-github"></i> View GitHub Repository
            </a>
            <button className="btn btn-sm btn-secondary" onClick={onClose}>
              Close Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
