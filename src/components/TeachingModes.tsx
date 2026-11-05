import React from 'react';
import { Laptop, Home, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface TeachingModesProps {
  onSelectMode?: (mode: 'online' | 'offline') => void;
}

export const TeachingModes: React.FC<TeachingModesProps> = ({ onSelectMode }) => {
  const { content, language } = useLanguage();
  const { online, offline } = content.learningModes;

  const handleEnquire = (mode: 'online' | 'offline') => {
    if (onSelectMode) {
      onSelectMode(mode);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="modes" className="section modes-section" aria-label="Learning Modes">
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
            {language === 'hi' ? 'अध्ययन के लचीले विकल्प' : 'Flexible Learning Options'}
          </span>
          <h2 className="section-title">
            {language === 'hi' ? 'ऑनलाइन एवं व्यक्तिगत शिक्षण माध्यम' : 'Online & In-Person Learning Modes'}
          </h2>
          <p className="section-subtitle center-block">
            {language === 'hi'
              ? 'वह माध्यम चुनें जो आपके बच्चे की दिनचर्या और स्थान के सर्वाधिक अनुकूल हो। दोनों माध्यमों में आभा मूंदड़ा का प्रत्यक्ष व्यक्तिगत मार्गदर्शन प्राप्त होता है।'
              : 'Choose the format that best fits your child\'s routine and location. Both modes receive Abha Mundra\'s direct personal instruction and curriculum guidance.'}
          </p>
        </motion.div>

        {/* 2 Comparison Cards */}
        <div className="modes-grid">
          {/* Online Classes Card */}
          <motion.div
            className="mode-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="mode-badge">{online.badge}</span>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-blue-tint)',
                  border: '1px solid rgba(27, 78, 117, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-editorial-blue)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Laptop size={22} />
              </div>
            </div>

            <h3 className="mode-title">{online.title}</h3>
            <p className="mode-desc">{online.description}</p>

            <ul className="mode-features-list">
              {online.features.map((feature, idx) => (
                <li key={idx} className="mode-feature-item">
                  <CheckCircle2 size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="online-notice-box">
              <p>{online.notice}</p>
            </div>

            <motion.button
              type="button"
              className="btn btn-secondary"
              onClick={() => handleEnquire('online')}
              style={{ width: '100%', marginTop: 'auto' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{online.ctaText}</span>
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Offline Classes Card - With Prominent Residence Policy */}
          <motion.div
            className="mode-card featured-mode"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span className="mode-badge" style={{ backgroundColor: 'var(--color-warning-bg)', borderColor: 'var(--color-warning-border)', color: 'var(--color-warning-text)' }}>
                {offline.badge}
              </span>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-coral-tint)',
                  border: '1px solid rgba(239, 115, 67, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-coral-dark)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Home size={22} />
              </div>
            </div>

            <h3 className="mode-title">{offline.title}</h3>
            <p className="mode-desc">{offline.description}</p>

            <ul className="mode-features-list">
              {offline.features.map((feature, idx) => (
                <li key={idx} className="mode-feature-item">
                  <CheckCircle2 size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* MANDATORY POLICY BANNER */}
            <div className="policy-box-offline" role="alert" aria-label={offline.mandatoryPolicy.heading}>
              <div className="policy-box-header">
                <AlertCircle size={18} />
                <span>{offline.mandatoryPolicy.heading}</span>
              </div>
              <p className="policy-box-text">
                {offline.mandatoryPolicy.body}
              </p>
            </div>

            <motion.button
              type="button"
              className="btn btn-primary"
              onClick={() => handleEnquire('offline')}
              style={{ width: '100%', marginTop: 'auto' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{offline.ctaText}</span>
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
