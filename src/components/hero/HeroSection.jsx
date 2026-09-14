import React, { useState } from 'react';

export const HeroSection = ({ onOpenResume }) => {
  const [portraitLoaded, setPortraitLoaded] = useState(false);

  return (
    <section className="rsk-new-hero-section" id="hero">
      
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

          {/* Left Stats Bar (4 Items matching reference photo) */}
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
              <span className="stat-icon-antenna" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="antenna-svg">
                  <circle cx="12" cy="7.5" r="1.8" fill="currentColor" />
                  <line x1="12" y1="9.3" x2="12" y2="20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M 8.5 4.5 C 7 6 7 9 8.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M 5.8 2.5 C 3.2 5.5 3.2 10.5 5.8 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M 15.5 4.5 C 17 6 17 9 15.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M 18.2 2.5 C 20.8 5.5 20.8 10.5 18.2 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </span>
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

            {/* Stat 4: Scroll Down */}
            <a href="#about" className="stats-item stat-scroll-link">
              <span className="stat-icon-scroll" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="split-circle-svg" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="2" />
                  <line x1="12" y1="2.5" x2="12" y2="21.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <div className="stat-content">
                <span className="stat-value">SCROLL</span>
                <span className="stat-label">DOWN &darr;</span>
              </div>
            </a>
          </div>

        </div>

        {/* ------------------------------------------------------------
            RIGHT COLUMN: Giant RSK, Doodle, Tagline, PCB Traces, Photo
            ------------------------------------------------------------ */}
        <div className="rsk-hero-right-col">

          {/* Dual Concentric Dashed Orbit Arcs (Arching above head, completely clear of RSK letters) */}
          <div className="rsk-hero-head-ring" aria-hidden="true">
            <svg viewBox="0 0 500 500" className="dskr-ring-svg">
              {/* Inner Arc */}
              <path
                d="M 112 195 A 150 150 0 0 1 388 195"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeDasharray="4 6"
                strokeLinecap="round"
                className="ring-dashed-inner"
              />
              {/* Outer Arc (slightly larger) */}
              <path
                d="M 52 172 A 215 215 0 0 1 448 172"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeDasharray="4 6"
                strokeLinecap="round"
                className="ring-dashed-outer"
              />
            </svg>
          </div>

          {/* Top-Left Handwritten Doodle with smooth rightward arrow over letter R */}
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

          {/* Giant RSK Typography Behind Cutout (S directly behind head) */}
          <div className="rsk-giant-letters-bg" aria-hidden="true">
            <span className="giant-char char-r">R</span>
            <span className="giant-char char-s">S</span>
            <span className="giant-char char-k">K</span>
          </div>

          {/* Cursive Overlapping Signature Shubham (Lower down, clear of hand/arm) */}
          <div className="rsk-script-signature" aria-hidden="true">
            <span>Shubham</span>
          </div>

          {/* PCB Circuit Traces Graphic (Exact Image 3 Reference Match) */}
          <div className="rsk-pcb-traces-svg" aria-hidden="true">
            <svg viewBox="0 0 260 300" className="pcb-svg" fill="none">
              {/* Top vertical stem with dot */}
              <circle cx="230" cy="22" r="3.5" fill="#786B5A" />
              <line x1="230" y1="22" x2="230" y2="100" stroke="#786B5A" strokeWidth="1.6" strokeLinecap="round" />
              
              {/* 45° diagonal segment from vertical stem to main junction */}
              <line x1="230" y1="100" x2="160" y2="170" stroke="#786B5A" strokeWidth="1.6" strokeLinecap="round" />

              {/* Parallel double track on upper-right of diagonal */}
              <line x1="202" y1="132" x2="168" y2="166" stroke="#786B5A" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="202" cy="132" r="3.5" fill="#786B5A" />

              {/* Horizontal spur to the left */}
              <line x1="160" y1="170" x2="85" y2="170" stroke="#786B5A" strokeWidth="1.6" strokeLinecap="round" />

              {/* Central junction dot */}
              <circle cx="160" cy="170" r="3.5" fill="#786B5A" />

              {/* Branch 1 (diagonal -> horizontal -> diagonal) */}
              <line x1="160" y1="170" x2="110" y2="220" stroke="#786B5A" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="110" y1="220" x2="38" y2="220" stroke="#786B5A" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="38" cy="220" r="3.5" fill="#786B5A" />
              <line x1="38" y1="220" x2="10" y2="248" stroke="#786B5A" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="10" cy="248" r="3.5" fill="#786B5A" />

              {/* Branch 2 (vertical down -> diagonal) */}
              <line x1="160" y1="170" x2="160" y2="230" stroke="#786B5A" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="160" y1="230" x2="115" y2="275" stroke="#786B5A" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="115" cy="275" r="3.5" fill="#786B5A" />
            </svg>
          </div>

          {/* Cutout Portrait Image Stage (Centered directly over S) */}
          <div className={`rsk-cutout-container ${portraitLoaded ? 'loaded' : ''}`}>
            <img
              src="/ezgif-476a1f2348609364-jpg/shubham-cutout.png"
              alt="Ramri Shubham Kumar"
              className="rsk-cutout-image"
              onLoad={() => setPortraitLoaded(true)}
              loading="eager"
            />
          </div>

          {/* Tagline (Placed top-right on desktop, below photo on mobile) */}
          <div className="rsk-stacked-tagline" aria-hidden="true">
            <span>• DREAM</span>
            <span>• DESIGN</span>
            <span>• DEVELOP</span>
          </div>

        </div>

      </div>

      {/* Centered Biography Pill / Tab removed per user request */}

    </section>
  );
};

export default HeroSection;
