import React from 'react';
import { Check, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const { content, language } = useLanguage();

  return (
    <section id="approach" className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }} aria-label="Teaching Approach and Methodology">
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
            {language === 'hi' ? 'शिक्षण कार्यप्रणाली' : 'Teaching Methodology'}
          </span>
          <h2 className="section-title">
            {language === 'hi'
              ? 'संरचित एवं शिक्षार्थी-केंद्रित दृष्टिकोण'
              : 'A Structured, Learner-Centered Approach'}
          </h2>
          <p className="section-subtitle center-block">
            {language === 'hi'
              ? 'प्रत्येक सत्र हिंदी को सहज, तार्किक रूप से स्पष्ट और शैक्षणिक रूप से फलदायी बनाने हेतु संकल्पित है, जिसमें निरंतर प्रगति और वैचारिक दृढ़ता पर बल दिया जाता है।'
              : 'Every session is designed to make Hindi accessible, logically clear, and academically rewarding, focusing on steady progress and conceptual mastery.'}
          </p>
        </motion.div>

        {/* 4 Methodology Cards */}
        <div className="methodology-grid">
          {content.teachingMethodology.map((step, index) => (
            <motion.div
              key={step.id}
              className="method-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
            >
              <span className="method-step-num">0{index + 1}</span>
              <h3 className="method-title">{step.title}</h3>
              <p className="method-desc">{step.description}</p>

              <ul className="method-focus-list">
                {step.focusAreas.map((point, idx) => (
                  <li key={idx} className="method-focus-item">
                    <Check size={15} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Callout box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: '44px',
            backgroundColor: 'var(--color-warm-ivory)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '28px 36px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', maxWidth: '680px' }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-editorial-blue)',
                flexShrink: 0,
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <Compass size={26} />
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--color-editorial-blue-deep)', fontSize: '1.0625rem', marginBottom: '3px' }}>
                {language === 'hi' ? 'पाठ्यक्रम-विशिष्ट अनुकूलन' : 'Curriculum-Specific Customization'}
              </strong>
              <span style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.5 }}>
                {language === 'hi'
                  ? 'अध्ययन सत्र आपके बच्चे के स्कूल कैलेंडर, आगामी इकाई परीक्षाओं और निर्धारित पाठ्यपुस्तकों के अनुसार आयोजित किए जाते हैं।'
                  : 'Lessons are paced according to your child\'s school calendar, upcoming unit assessments, and specific textbook chapters.'}
              </span>
            </div>
          </div>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: '11px 22px', fontSize: '0.875rem' }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>{content.brand.ctaSchedule}</span>
            <ArrowRight size={15} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
