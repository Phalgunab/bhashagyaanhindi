import React from 'react';
import { Award, GraduationCap, Compass, BookOpenCheck, CheckCircle2, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const icons = [
  GraduationCap,
  Award,
  Compass,
  BookOpenCheck,
  CheckCircle2,
  UserCheck,
];

export const WhyChooseUs: React.FC = () => {
  const { content, language } = useLanguage();

  return (
    <section className="section" aria-label="Why Choose Bhasha Gyaan">
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
            {language === 'hi' ? 'प्रमुख विशेषताएं' : 'Key Distinctions'}
          </span>
          <h2 className="section-title">
            {language === 'hi' ? 'भाषा ज्ञान क्यों चुनें' : 'Why Learn with Bhasha Gyaan'}
          </h2>
          <p className="section-subtitle center-block">
            {language === 'hi'
              ? 'दो दशकों से अधिक के प्रमाणित अध्यापन, व्यक्तिगत धैर्य और सशक्त पाठ्यक्रम विशेषज्ञता पर आधारित।'
              : 'Grounded in over two decades of verified pedagogy, individual patience, and rigorous curriculum mastery.'}
          </p>
        </motion.div>

        {/* 6 Grid Cards */}
        <div className="why-grid">
          {content.whyChooseUs.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                className="why-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
              >
                <div className="why-icon-wrap" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
