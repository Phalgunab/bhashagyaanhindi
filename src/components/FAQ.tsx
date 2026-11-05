import React, { useState } from 'react';
import { ChevronDown, HelpCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const FAQ: React.FC = () => {
  const { content, language } = useLanguage();
  // Keep first question open by default
  const [openIds, setOpenIds] = useState<string[]>(['curricula']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faqs" className="section" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }} aria-label="Frequently Asked Questions">
      <div className="container faq-container">
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
            {language === 'hi' ? 'सामान्य प्रश्नोत्तर' : 'Common Inquiries'}
          </span>
          <h2 className="section-title">
            {language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
          </h2>
          <p className="section-subtitle center-block">
            {language === 'hi'
              ? 'पाठ्यक्रम, ऑनलाइन एवं ऑफलाइन व्यवस्था तथा शिक्षण प्रारूप से संबंधित स्पष्ट जानकारी।'
              : 'Clear information about curricula, online and offline arrangements, and course structure.'}
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="faq-list">
          {content.faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <motion.div
                key={faq.id}
                className={`faq-item ${isOpen ? 'open' : ''} ${faq.highlight ? 'highlight-faq' : ''}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3 }}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {faq.highlight && (
                      <AlertCircle size={18} style={{ color: 'var(--color-coral-orange)', flexShrink: 0 }} />
                    )}
                    {faq.question}
                  </span>
                  <motion.span
                    className="faq-icon"
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      className="faq-answer"
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          style={{
            marginTop: '40px',
            textAlign: 'center',
            padding: '24px',
            backgroundColor: 'var(--color-warm-ivory)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <HelpCircle size={24} style={{ color: 'var(--color-editorial-blue)', margin: '0 auto 10px' }} />
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', marginBottom: '14px', fontWeight: 500 }}>
            {language === 'hi'
              ? 'क्या आपके पास अपने बच्चे के पाठ्यक्रम या समय-सारणी से संबंधित कोई विशेष प्रश्न है?'
              : 'Have a question specific to your child\'s curriculum or schedule?'}
          </p>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            style={{ padding: '9px 20px', fontSize: '0.875rem' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {language === 'hi' ? 'सीधे प्रश्न पूछें' : 'Ask a Question Directly'}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
