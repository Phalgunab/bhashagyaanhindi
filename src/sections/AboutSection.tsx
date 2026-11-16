import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';

export const AboutSection: React.FC = () => {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <section id={about.sectionId} className="section about-section" aria-label="About and Expertise">
      <div className="container">
        {/* Section Header */}
        <Reveal>
          <div className="section-header">
            <span className="section-tag">{about.sectionTag}</span>
            <h2 className="section-title editorial-heading">{about.title}</h2>
            <p className="section-subtitle">
              <span className="desktop-text">{about.subtitle}</span>
              <span className="mobile-text">{about.subtitleMobile}</span>
            </p>
          </div>
        </Reveal>

        {/* Curricula Expertise (Typographic Grid) */}
        <div className="curricula-wrapper">
          <Reveal delay={0.12}>
            <h3 className="sub-heading editorial-heading">
              <GraduationCap size={22} className="sub-heading-icon" aria-hidden="true" />
              <span>{about.curriculaTitle}</span>
            </h3>
          </Reveal>
          <div className="curricula-grid">
            {about.curricula.map((item, idx) => (
              <Reveal key={item.name} delay={0.08 * (idx + 1)}>
                <div className="curriculum-card">
                  <div className="curriculum-card-header">
                    <span className="curriculum-name editorial-heading">{item.name}</span>
                    <span className="curriculum-badge">{item.level}</span>
                  </div>
                  <p className="curriculum-desc">
                    <span className="desktop-text">{item.description}</span>
                    <span className="mobile-text">{item.shortDescription}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Hindi Learning Areas */}
        <div className="learning-areas-wrapper">
          <Reveal delay={0.14}>
            <h3 className="sub-heading editorial-heading">
              <BookOpen size={22} className="sub-heading-icon" aria-hidden="true" />
              <span>{about.learningAreasTitle}</span>
            </h3>
          </Reveal>
          <div className="learning-areas-grid">
            {about.learningAreas.map((area, idx) => (
              <Reveal key={idx} delay={0.05 * (idx + 1)}>
                <div className="learning-area-item">
                  <div className="learning-area-title">
                    <span className="learning-area-title-bullet" aria-hidden="true" />
                    <span className="desktop-text">{area.title}</span>
                    <span className="mobile-text">{area.shortTitle}</span>
                  </div>
                  <p className="learning-area-desc">
                    <span className="desktop-text">{area.description}</span>
                    <span className="mobile-text">{area.shortDescription}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
