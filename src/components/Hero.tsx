import React from 'react';
import { ArrowRight, CheckCircle2, Award, BookOpen, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppButton } from './WhatsAppButton';

export const Hero: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      {/* Ambient background glow */}
      <div className="hero-backdrop-glow" aria-hidden="true" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="hero-badge-row"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="section-tag" style={{ margin: 0 }}>
                <span className="section-tag-dot" />
                {content.brand.attribution}
              </span>
              <span className="badge-curricula">
                CBSE &bull; IGCSE &bull; IB &bull; A-Levels
              </span>
            </motion.div>

            <motion.h1
              className="hero-headline"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {content.brand.headlinePart1}{' '}
              <em>{content.brand.headlinePart2}</em>
            </motion.h1>

            <motion.p
              className="hero-lead"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {content.brand.supportingText}
            </motion.p>

            <motion.div
              className="hero-educator-tag"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.38, duration: 0.5 }}
            >
              <Award size={19} />
              <span>
                <strong>{content.tutor.name}</strong> &mdash;{' '}
                {content.tutor.title}
              </span>
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{content.brand.ctaEnquire}</span>
                <ArrowRight size={16} />
              </motion.a>
              <WhatsAppButton variant="button" label={content.brand.ctaWhatsApp} />
            </motion.div>

            {/* Quick Stats / Highlights Strip */}
            <motion.div
              className="hero-highlights-strip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <div className="hero-highlight-item">
                <span className="highlight-number">{content.tutor.experienceYears}</span>
                <span className="highlight-label">{content.tutor.experienceLabel}</span>
              </div>
              <div className="hero-highlight-item">
                <span className="highlight-number">{content.tutor.curriculaCount}</span>
                <span className="highlight-label">{content.tutor.curriculaLabel}</span>
              </div>
              <div className="hero-highlight-item">
                <span className="highlight-number">{content.tutor.certifiedBadge}</span>
                <span className="highlight-label">{content.tutor.certifiedLabel}</span>
              </div>
              <div className="hero-highlight-item">
                <span className="highlight-number">{content.tutor.modesCount}</span>
                <span className="highlight-label">{content.tutor.modesLabel}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Tutor Card */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="tutor-avatar-frame" aria-hidden="true">
                  <span className="tutor-avatar-inner">भा</span>
                  <motion.div
                    className="tutor-verified-badge"
                    title={content.tutor.certifiedBadge}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Award size={16} />
                  </motion.div>
                </div>
                <h2 className="hero-card-name">{content.tutor.name}</h2>
                <p className="hero-card-role">{content.tutor.title}</p>
              </div>

              <ul className="hero-card-points">
                <li className="hero-card-point">
                  <CheckCircle2 size={16} />
                  <span>{content.tutor.cardPoints[0]}</span>
                </li>
                <li className="hero-card-point">
                  <BookOpen size={16} />
                  <span>{content.tutor.cardPoints[1]}</span>
                </li>
                <li className="hero-card-point">
                  <Sparkles size={16} />
                  <span>{content.tutor.cardPoints[2]}</span>
                </li>
                <li className="hero-card-point">
                  <Clock size={16} />
                  <span>{content.tutor.cardPoints[3]}</span>
                </li>
              </ul>

              <div className="hero-card-footer">
                <p className="hero-card-note">{content.tutor.cardNote}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
