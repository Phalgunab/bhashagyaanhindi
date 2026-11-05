import React from 'react';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { CurriculumVisualPathway } from './graphics/CurriculumVisualPathway';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
};

export const Expertise: React.FC = () => {
  const { content, language } = useLanguage();

  return (
    <section id="expertise" className="section" aria-label="Curricula and Teaching Expertise">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag center-block">
            <span className="section-tag-dot" />
            {language === 'hi' ? 'इंटरैक्टिव पाठ्यक्रम अन्वेषक' : 'Interactive Curriculum Pathway'}
          </span>
          <h2 className="section-title">
            {language === 'hi' ? 'समर्थित शिक्षण पाठ्यक्रम' : 'Teaching Curricula Supported'}
          </h2>
          <p className="section-subtitle center-block">
            {language === 'hi'
              ? 'आधिकारिक बोर्ड पाठ्यक्रमों, अंकन मानदंडों और लिखित-मौखिक परीक्षाओं के अनुरूप विशिष्ट कोचिंग।'
              : 'Specialized coaching aligned directly with official board syllabi, marking criteria, and text examinations.'}
          </p>
        </motion.div>

        {/* UI 2.0 Interactive Curriculum Pathway Showcase */}
        <CurriculumVisualPathway />

        {/* Hindi Language Learning Areas Box */}
        <motion.div
          className="learning-areas-box"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <span className="section-tag center-block">
              <span className="section-tag-dot" />
              {language === 'hi' ? 'समग्र भाषाई प्रवीणता' : 'Complete Language Mastery'}
            </span>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.15rem)', color: 'var(--color-deep-burgundy-deep)', marginBottom: '12px' }}>
              {language === 'hi' ? 'व्यापक हिंदी अध्ययन क्षेत्र' : 'Comprehensive Hindi Learning Areas'}
            </h3>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
              {language === 'hi'
                ? 'बुनियादी देवनागरी लिपि से लेकर उन्नत साहित्यिक विश्लेषण तक, कक्षाएं भाषा के प्रत्येक पहलू को समाहित करती हैं।'
                : 'From foundational Devanagari script to advanced literary analysis, classes cover every facet of the language.'}
            </p>
          </div>

          <motion.div
            className="areas-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {content.learningAreas.map((area) => (
              <motion.div
                key={area.id}
                className="area-card"
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                {area.hindiTitle && (
                  <span className="area-hindi-title font-hindi">{area.hindiTitle}</span>
                )}
                <h4 className="area-title">{area.title}</h4>
                <p className="area-desc">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div style={{ marginTop: '36px', textAlign: 'center' }}>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <BookOpen size={17} />
              <span>{content.brand.ctaDiscuss}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
