import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Target, BookMarked, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const CurriculumVisualPathway: React.FC = () => {
  const { language, content } = useLanguage();
  const [activeCurriculum, setActiveCurriculum] = useState(0);

  const curriculumMeta = [
    {
      id: 'cbse',
      board: 'CBSE',
      fullNameEn: 'Central Board of Secondary Education',
      fullNameHi: 'केंद्रीय माध्यमिक शिक्षा बोर्ड',
      taglineEn: 'Course A & Course B Syllabi',
      taglineHi: 'कोर्स ए एवं कोर्स बी पाठ्यक्रम',
      examPattern: 'Grammar (16 marks), Literature (34 marks), Writing (20 marks)',
      examPatternHi: 'व्याकरण (16 अंक), पाठ्यपुस्तक (34 अंक), रचनात्मक लेखन (20 अंक)',
      focusMetrics: [
        { labelEn: 'Vyakaran (Grammar)', labelHi: 'व्याकरण शुद्धता', val: 98 },
        { labelEn: 'Board Exam Pattern', labelHi: 'बोर्ड परीक्षा प्रारूप', val: 95 },
        { labelEn: 'Essay & Letter Writing', labelHi: 'निबंध व पत्र लेखन', val: 92 },
      ],
    },
    {
      id: 'igcse',
      board: 'Cambridge IGCSE',
      fullNameEn: 'Cambridge Assessment International Education (0549 / 0508)',
      fullNameHi: 'कैम्ब्रिज असेसमेंट इंटरनेशनल एजुकेशन (0549 / 0508)',
      taglineEn: 'First & Second Language Hindi',
      taglineHi: 'प्रथम एवं द्वितीय भाषा हिंदी',
      examPattern: 'Paper 1 (Reading & Directed Writing), Paper 2 (Continuous Writing)',
      examPatternHi: 'पेपर 1 (पठन एवं निर्देशित लेखन), पेपर 2 (रचनात्मक लेखन)',
      focusMetrics: [
        { labelEn: 'Critical Reading & Summary', labelHi: 'अपठित पठन व सार-लेखन', val: 96 },
        { labelEn: 'Cambridge Marking Rubrics', labelHi: 'कैम्ब्रिज मार्किंग रूब्रिक्स', val: 99 },
        { labelEn: 'Continuous Writing', labelHi: 'प्रवाहपूर्ण निबंध रचना', val: 94 },
      ],
    },
    {
      id: 'ib',
      board: 'IB Diploma',
      fullNameEn: 'International Baccalaureate (Language B SL/HL & Ab Initio)',
      fullNameHi: 'इंटरनेशनल बैकालॉरिएट (लैंग्वेज बी SL/HL व अब इनिशियो)',
      taglineEn: 'Global Themes & Individual Oral (IO)',
      taglineHi: 'वैश्विक विषय एवं व्यक्तिगत मौखिक परीक्षा',
      examPattern: 'Paper 1 (Productive Text Types), Paper 2 (Receptive), Internal IO',
      examPatternHi: 'पेपर 1 (विविध पाठ प्रारूप), पेपर 2 (पठन बोध), आंतरिक IO',
      focusMetrics: [
        { labelEn: 'Global Themes & Context', labelHi: 'वैश्विक विषय एवं सांस्कृतिक संदर्भ', val: 95 },
        { labelEn: 'Individual Oral (IO)', labelHi: 'व्यक्तिगत मौखिक परीक्षा', val: 98 },
        { labelEn: 'Text Types & Formats', labelHi: 'विभिन्न पाठ प्रारूप व शैलियां', val: 93 },
      ],
    },
    {
      id: 'alevels',
      board: 'Cambridge A-Levels',
      fullNameEn: 'Cambridge International AS & A Level Hindi (8687 / 9687)',
      fullNameHi: 'कैम्ब्रिज इंटरनेशनल AS एवं A Level हिंदी (8687 / 9687)',
      taglineEn: 'Advanced Literary Criticism & Essay',
      taglineHi: 'उन्नत साहित्यिक समीक्षा एवं गंभीर निबंध',
      examPattern: 'Paper 2 (Reading & Writing), Paper 3 (Essay), Paper 4 (Texts)',
      examPatternHi: 'पेपर 2 (पठन व लेखन), पेपर 3 (निबंध), पेपर 4 (साहित्य ग्रंथ)',
      focusMetrics: [
        { labelEn: 'Literary Critique & Prose', labelHi: 'साहित्यिक आलोचना व गद्य व्याख्या', val: 97 },
        { labelEn: 'Contemporary Thematic Essays', labelHi: 'सामयिक सामाजिक निबंध', val: 96 },
        { labelEn: 'Nuanced Grammatical Accuracy', labelHi: 'उच्च स्तरीय व्याकरण शुद्धता', val: 99 },
      ],
    },
  ];

  const currentMeta = curriculumMeta[activeCurriculum];
  const currentContent = content.curricula[activeCurriculum];

  return (
    <div className="curriculum-pathway-card">
      {/* Board Selector Tabs */}
      <div className="curriculum-tabs-bar">
        {curriculumMeta.map((c, idx) => {
          const isActive = idx === activeCurriculum;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCurriculum(idx)}
              className={`curriculum-tab-btn ${isActive ? 'active' : ''}`}
            >
              <span className="tab-board-name">{c.board}</span>
              <span className="tab-board-sub">
                {language === 'hi' ? c.taglineHi : c.taglineEn}
              </span>
              {isActive && (
                <motion.div
                  layoutId="active-curriculum-pill"
                  className="curriculum-active-pill"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Pathway Showcase Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMeta.id}
          className="curriculum-showcase-content"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="showcase-left-pane">
            <div className="showcase-badge-row">
              <span className="section-tag" style={{ margin: 0 }}>
                <Award size={14} style={{ marginRight: 6 }} />
                {currentMeta.board}
              </span>
              <span className="exam-mode-badge">
                <Target size={13} style={{ marginRight: 4 }} />
                {language === 'hi' ? 'विशेषज्ञ कोचिंग' : 'Certified Pedagogy'}
              </span>
            </div>

            <h3 className="showcase-title">{currentContent.name}</h3>
            <p className="showcase-fullname">
              {language === 'hi' ? currentMeta.fullNameHi : currentMeta.fullNameEn}
            </p>

            <p className="showcase-description">{currentContent.description}</p>

            <div className="showcase-features-list">
              {currentContent.features.map((feat, i) => (
                <div key={i} className="showcase-feature-item">
                  <CheckCircle2 size={16} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px' }}>
              <a href="#contact" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
                <span>{language === 'hi' ? 'इस पाठ्यक्रम के लिए पूछताछ करें' : 'Enquire for this Curriculum'}</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="showcase-right-pane">
            <div className="metrics-box">
              <div className="metrics-box-header">
                <BookMarked size={18} />
                <span>{language === 'hi' ? 'परीक्षा फोकस एवं कौशल भार' : 'Exam Structure & Focus Weightage'}</span>
              </div>
              <p className="exam-pattern-note">
                <strong>{language === 'hi' ? 'परीक्षा प्रारूप:' : 'Assessment Pattern:'}</strong>{' '}
                {language === 'hi' ? currentMeta.examPatternHi : currentMeta.examPattern}
              </p>

              <div className="focus-meters-list">
                {currentMeta.focusMetrics.map((metric, i) => (
                  <div key={i} className="meter-item">
                    <div className="meter-labels">
                      <span className="meter-title">{language === 'hi' ? metric.labelHi : metric.labelEn}</span>
                      <span className="meter-pct">{metric.val}%</span>
                    </div>
                    <div className="meter-bar-track">
                      <motion.div
                        className="meter-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.val}%` }}
                        transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
