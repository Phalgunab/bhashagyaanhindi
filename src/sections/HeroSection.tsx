import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppButton } from '../components/WhatsAppButton';

export const HeroSection: React.FC = () => {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section id="home" className="section hero-section" aria-label="Hero Introduction">
      {/* Editorial Low-Opacity Devanagari Background Motif */}
      <div className="hero-devanagari-watermark" aria-hidden="true">
        हिन्दी
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.h1
            className="hero-headline editorial-heading"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            <motion.span
              className="hero-headline-line"
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {hero.headlineLine1}
            </motion.span>
            <motion.span
              className="hero-headline-line italic-emphasis"
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <em>{hero.headlineLine2}</em>
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-supporting"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="desktop-text">{hero.supportingMessage}</span>
            <span className="mobile-text">{hero.supportingMessageMobile}</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#about" className="btn btn-primary hero-btn-primary">
              <span>{hero.ctaExplore}</span>
              <ArrowRight size={17} className="btn-arrow" aria-hidden="true" />
            </a>
            <WhatsAppButton variant="button" label={hero.ctaConnect} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
