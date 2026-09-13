import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const Navbar = () => {
  const { mode, toggleMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 140;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero', id: 'hero' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header className={`rsk-navbar ${isScrolled ? 'scrolled' : ''}`} id="header">
        <div className="container rsk-nav-container">
          
          {/* Left: Brand Logo (RSK.) */}
          <div className="rsk-nav-brand">
            <a href="#hero" className="rsk-brand-logo" title="RSK Portfolio">
              <span className="brand-text">RSK<span className="brand-dot">.</span></span>
            </a>
          </div>

          {/* Center: Navigation Links */}
          <nav className={`rsk-nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Main Navigation">
            <ul className="rsk-nav-list">
              {navLinks.map((link) => (
                <li key={link.id} className="rsk-nav-item">
                  <a
                    href={link.href}
                    className={`rsk-nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                    {activeSection === link.id && <span className="rsk-nav-active-line" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Theme Toggle + LET'S TALK ↗ Button + Mobile Hamburger */}
          <div className="rsk-nav-actions">
            {/* Theme Toggle Button (Moon / Sun) */}
            <button
              type="button"
              className="rsk-theme-toggle-btn"
              onClick={toggleMode}
              aria-label="Toggle theme mode"
              title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
            >
              {mode === 'dark' ? (
                <i className="fa-solid fa-sun theme-icon-sun"></i>
              ) : (
                <i className="fa-solid fa-moon theme-icon-moon"></i>
              )}
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="rsk-nav-talk-btn"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                const contactEl = document.getElementById('contact-form') || document.getElementById('contact');
                if (contactEl) {
                  e.preventDefault();
                  contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <span>LET'S TALK</span>
              <i className="fa-solid fa-arrow-up-right-from-square nav-talk-arrow"></i>
            </a>

            {/* Mobile Hamburger */}
            <button
              className={`rsk-hamburger ${isMobileMenuOpen ? 'open' : ''}`}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="rsk-mobile-backdrop" 
          onClick={() => setIsMobileMenuOpen(false)} 
          aria-hidden="true" 
        />
      )}
    </>
  );
};

export default Navbar;
