import React from 'react';
import { Award, BookCheck, Sparkles, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { content, language } = useLanguage();

  return (
    <section id="about" className="section about-section" aria-label="About Abha Mundra">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Profile Card & Certifications */}
          <motion.div
            className="about-profile-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">
              <span className="section-tag-dot" />
              {language === 'hi' ? 'शिक्षिका परिचय' : 'Tutor Profile'}
            </span>
            
            <blockquote className="about-lead-quote">
              &ldquo;{content.tutor.philosophy}&rdquo;
            </blockquote>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '14px', color: 'var(--color-editorial-blue-deep)' }}>
              {content.tutor.credentialsTitle}
            </h3>

            <div className="credentials-list">
              <div className="credential-item">
                <Award size={20} />
                <div>
                  <strong>{content.tutor.experienceYears} {content.tutor.experienceLabel}</strong>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                    {language === 'hi' ? 'निरंतर हिंदी भाषा अध्यापन व अकादमिक मार्गदर्शन' : 'Continuous Hindi language pedagogy and academic coaching'}
                  </div>
                </div>
              </div>

              {content.tutor.certifications.map((cert) => (
                <div key={cert} className="credential-item">
                  <BookCheck size={20} />
                  <div>
                    <strong>{cert}</strong>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                      {content.tutor.certDescription}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '26px', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-editorial-blue-deep)', marginBottom: '10px' }}>
                {content.tutor.curriculaTitle}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {content.tutor.curricula.map((curr) => (
                  <span
                    key={curr}
                    style={{
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-border)',
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--color-editorial-blue)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    {curr}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative & Features */}
          <motion.div
            className="about-text-content"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-header" style={{ marginBottom: '20px' }}>
              <span className="section-tag">
                <span className="section-tag-dot" />
                {language === 'hi' ? 'शिक्षिका के विषय में' : 'About the Educator'}
              </span>
              <h2 className="section-title">
                {language === 'hi'
                  ? 'प्रत्येक विद्यार्थी के अनुकूल समर्पित हिंदी मार्गदर्शन'
                  : 'Dedicated Hindi Mentorship Tailored to Every Learner'}
              </h2>
            </div>

            {content.tutor.bio.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-features-grid">
              <motion.div
                className="about-feature-box"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <h4>
                  <Sparkles size={16} style={{ display: 'inline', marginRight: '6px', color: 'var(--color-coral-orange)' }} />
                  {language === 'hi' ? 'तर्कसंगत व्याकरण' : 'Conceptual Grammar'}
                </h4>
                <p>
                  {language === 'hi'
                    ? 'रटने के स्थान पर व्यावहारिक नियमों व स्पष्ट तर्कों के साथ व्याकरण की समझ।'
                    : 'Demystifying Vyakaran with logical rules and clear application rather than rote recitation.'}
                </p>
              </motion.div>

              <motion.div
                className="about-feature-box"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <h4>
                  <Check size={16} style={{ display: 'inline', marginRight: '6px', color: 'var(--color-coral-orange)' }} />
                  {language === 'hi' ? 'परीक्षा तकनीक' : 'Exam Technique'}
                </h4>
                <p>
                  {language === 'hi'
                    ? 'बोर्ड मार्किंग रूब्रिक्स, समयबद्ध निबंध लेखन और अपठित बोध का लक्षित अभ्यास।'
                    : 'Targeted practice on board rubrics, timed essay composition, and reading comprehension.'}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
