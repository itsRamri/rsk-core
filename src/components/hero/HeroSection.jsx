import React, { useState } from 'react';

export const HeroSection = ({ onOpenResume }) => {
  const [portraitLoaded, setPortraitLoaded] = useState(false);

  return (
    <section className="rsk-new-hero-section" id="hero">
      
      {/* ------------------------------------------------------------
          BACKGROUND LAYERS: Dashed Orbit Ring, Plus Markers
          ------------------------------------------------------------ */}
      <div className="rsk-hero-bg-rings" aria-hidden="true">
        <svg viewBox="0 0 600 600" className="dskr-ring-svg">
          <circle
            cx="300"
            cy="300"
            r="250"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            className="ring-dashed"
          />
        </svg>
      </div>

      {/* Decorative Plus Marker */}
      <div className="rsk-plus-marker marker-mid" aria-hidden="true">+</div>

      {/* ============================================================
          MAIN HERO CONTENT (2-Column Grid)
          ============================================================ */}
      <div className="container rsk-hero-main-container">
        
        {/* ------------------------------------------------------------
            LEFT COLUMN: Badge, Headline, Bio, Motto, Buttons, Stats
            ------------------------------------------------------------ */}
        <div className="rsk-hero-left-col">
          
          {/* Target / Circuit Badge */}
          <div className="rsk-hero-badge">
            <div className="badge-target-icon">
              <span className="target-dot">◎</span>
              <span className="target-line">──</span>
            </div>
            <span className="badge-text">ELECTRONICS &amp; COMMUNICATION ENGINEERING STUDENT</span>
          </div>

          {/* Main Headline */}
          <h1 className="rsk-hero-headline">
            Hello,<br />
            <span className="highlight-bronze-headline">I'm Shubham.</span>
          </h1>

          {/* Bio Description */}
          <p className="rsk-hero-bio">
            I build electronic systems, digital experiences and <br className="desktop-br" />
            technology-driven solutions.
          </p>

          {/* Handwritten Motto */}
          <div className="rsk-hero-motto">
            <span>Build. Learn. Create.</span>
          </div>

          {/* Action Buttons: VIEW PROJECTS ↗ & CONTACT ME */}
          <div className="rsk-hero-cta-group">
            <a href="#projects" className="rsk-btn-primary">
              <span>VIEW PROJECTS</span>
              <i className="fa-solid fa-arrow-up-right-from-square btn-icon-ext"></i>
            </a>
            <a href="#contact" className="rsk-btn-secondary">
              <span>CONTACT ME</span>
            </a>
          </div>

          {/* Bottom Left Stats Bar (Matching Screenshot) */}
          <div className="rsk-hero-stats-bar">
            {/* Stat 1: Projects */}
            <div className="stats-item">
              <i className="fa-solid fa-microchip stat-icon"></i>
              <div className="stat-content">
                <span className="stat-value">03+</span>
                <span className="stat-label">PROJECTS</span>
              </div>
            </div>

            {/* Stat 2: ECE */}
            <div className="stats-item">
              <span className="stat-icon-signal">((•))</span>
              <div className="stat-content">
                <span className="stat-value">ECE</span>
                <span className="stat-label">ENGINEERING</span>
              </div>
            </div>

            {/* Stat 3: India / Available */}
            <div className="stats-item">
              <i className="fa-solid fa-location-dot stat-icon"></i>
              <div className="stat-content">
                <span className="stat-value">INDIA</span>
                <span className="stat-label">AVAILABLE</span>
              </div>
            </div>
          </div>

        </div>

        {/* ------------------------------------------------------------
            RIGHT COLUMN: Giant RSK, Doodle, Tagline, PCB Traces, Photo
            ------------------------------------------------------------ */}
        <div className="rsk-hero-right-col">
          
          {/* Top-Left Handwritten Doodle with smooth rightward arrow */}
          <div className="rsk-doodle-wrapper" aria-hidden="true">
            <div className="doodle-text">
              <span>App Development</span>
              <span>Electronics &amp; IoT</span>
              <span>Web Development</span>
            </div>
            <div className="doodle-arrow-curved">
              <svg viewBox="0 0 50 48" className="scribble-arrow-svg" fill="none">
                {/* Dashed curved line */}
                <path
                  d="M 6 6 C 18 9, 32 20, 40 38"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeDasharray="4.2 3.2"
                  strokeLinecap="round"
                />
                {/* Hand-drawn arrowhead */}
                <path
                  d="M 28 35 L 40 39 L 41 27"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Top-Right Stacked Tagline with Bullets (• DREAM • DESIGN • DEVELOP) */}
          <div className="rsk-stacked-tagline" aria-hidden="true">
            <span>• DREAM</span>
            <span>• DESIGN</span>
            <span>• DEVELOP</span>
          </div>

          {/* Giant RSK Typography Behind Cutout */}
          <div className="rsk-giant-letters-bg" aria-hidden="true">
            <span className="giant-char char-r">R</span>
            <span className="giant-char char-s">S</span>
            <span className="giant-char char-k">K</span>
          </div>

          {/* Cursive Overlapping Signature Shubham over letter K */}
          <div className="rsk-script-signature" aria-hidden="true">
            <span>Shubham</span>
          </div>

          {/* PCB Circuit Traces Graphic (Bottom-Right behind arm) */}
          <div className="rsk-pcb-traces-svg" aria-hidden="true">
            <svg viewBox="0 0 260 200" className="pcb-svg">
              <circle cx="20" cy="140" r="3.5" fill="#786B5A" />
              <line x1="20" y1="140" x2="70" y2="140" stroke="#786B5A" strokeWidth="1.5" />
              <line x1="70" y1="140" x2="110" y2="100" stroke="#786B5A" strokeWidth="1.5" />
              <circle cx="110" cy="100" r="3.5" fill="#786B5A" />
              <line x1="110" y1="100" x2="170" y2="100" stroke="#786B5A" strokeWidth="1.5" />
              <line x1="170" y1="100" x2="210" y2="60" stroke="#786B5A" strokeWidth="1.5" />
              <circle cx="210" cy="60" r="3.5" fill="#786B5A" />
              <line x1="210" y1="60" x2="250" y2="60" stroke="#786B5A" strokeWidth="1.5" />
              
              <line x1="130" y1="100" x2="160" y2="130" stroke="#786B5A" strokeWidth="1.2" strokeDasharray="3 3" />
              <circle cx="160" cy="130" r="2.5" fill="#786B5A" />
              <line x1="160" y1="130" x2="220" y2="130" stroke="#786B5A" strokeWidth="1.2" />
              <circle cx="220" cy="130" r="2.5" fill="#786B5A" />
            </svg>
          </div>

          {/* Cutout Portrait Image Stage */}
          <div className={`rsk-cutout-container ${portraitLoaded ? 'loaded' : ''}`}>
            <img
              src="/ezgif-476a1f2348609364-jpg/shubham-cutout.png"
              alt="Ramri Shubham Kumar"
              className="rsk-cutout-image"
              onLoad={() => setPortraitLoaded(true)}
              loading="eager"
            />
          </div>

        </div>

      </div>

      {/* Horizontal Divider Line above Biography / About Section */}
      <div className="rsk-hero-bottom-divider" aria-hidden="true">
        <div className="container">
          <div className="hero-divider-bar"></div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
