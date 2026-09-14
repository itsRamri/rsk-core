import React, { useEffect, useRef, useState } from 'react';

export const SkillCard = ({ skill }) => {
  const [animatedWidth, setAnimatedWidth] = useState('0%');
  const cardRef = useRef(null);

  useEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          setAnimatedWidth(`${skill.percent}%`);
        }
      });
    }, { threshold: 0, rootMargin: '120px 0px 50px 0px' });

    observer.observe(cardEl);

    // Fallback timer ensures visibility & progress bar animation
    const timer = setTimeout(() => {
      if (cardEl) {
        cardEl.classList.add('revealed');
      }
      setAnimatedWidth(`${skill.percent}%`);
    }, 150);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [skill.percent, skill.id]);

  return (
    <div
      className="skill-card glass-card"
      data-category={skill.category}
      data-reveal
      ref={cardRef}
    >
      <div className="skill-head">
        <div className="skill-icon-box">
          <i className={skill.icon}></i>
        </div>
        <div className="skill-title-box">
          <h4>{skill.title}</h4>
          <span className="skill-level">{skill.level}</span>
        </div>
        <span className="skill-percent">{skill.percent}%</span>
      </div>

      <div className="skill-bar-wrapper">
        <div
          className="skill-bar-fill"
          style={{ width: animatedWidth }}
        ></div>
      </div>

      <div className="skill-tags">
        {skill.tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </div>

      {/* Schematic Diagram Proof Images (Cadence OrCAD CIS) */}
      {skill.images && skill.images.length > 0 && (
        <div className="skill-schematic-proof">
          <span className="skill-schematic-title">
            <i className="fa-solid fa-file-waveform"></i> Schematic Diagram (OrCAD CIS 17.2):
          </span>
          <div className="skill-schematic-grid">
            {skill.images.map((imgSrc, idx) => (
              <a
                key={idx}
                href={imgSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-schematic-thumb-link"
                title="Click to open full schematic in new tab"
              >
                <img
                  src={imgSrc}
                  alt={`${skill.title} schematic proof ${idx + 1}`}
                  className="skill-schematic-thumb-img"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
