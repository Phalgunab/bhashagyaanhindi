import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export const Navbar: React.FC = () => {
  const { content } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100)));
      }

      const sectionIds = ["home", "about", "contact"];
      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      {/* Scroll Progress Indicator (Section 6) */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      <div className="container">
        {/* Brand */}
        <a href="#home" className="brand-link" aria-label="Bhasha Gyaan Home">
          <span className="brand-title">{content.brand.name}</span>
          <span className="brand-sub">{content.brand.attribution}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary Navigation">
          <ul className="nav-links">
            {content.navigation.links.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={"nav-item-link " + (activeSection === item.href.replace("#", "") ? "active" : "")}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions-desktop">
          <LanguageToggle />
          <a href="#contact" className="btn btn-primary btn-sm">
            {content.navigation.enquireNow}
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="mobile-header-controls">
          <LanguageToggle className="mobile-header-lang" />
          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isOpen && (
          <div className="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            {content.navigation.links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            ))}
            <div className="mobile-nav-actions">
              <a href="#contact" className="btn btn-primary" onClick={handleLinkClick}>
                {content.navigation.enquireNow}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
