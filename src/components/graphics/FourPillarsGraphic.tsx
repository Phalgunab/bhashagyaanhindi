import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, MessageSquare, BookOpen, PenTool, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const FourPillarsGraphic: React.FC = () => {
  const { language } = useLanguage();
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: 'listening',
      icon: Headphones,
      num: '01',
      titleEn: 'Suno (Listening)',
      titleHi: 'श्रवण (सुनना)',
      subtitleEn: 'Acoustic Nuance & Phonetics',
      subtitleHi: 'ध्वनि विज्ञान एवं शुद्ध श्रवण',
      descEn: 'Developing an ear for tonal nuances, correct vowel elongation (ह्रस्व व दीर्घ स्वर), and authentic Hindi rhythm.',
      descHi: 'स्वर व मात्राओं की ध्वन्यात्मक बारीकियों (ह्रस्व एवं दीर्घ स्वर), शुद्ध उच्चारण और सहज भाषाई लय को आत्मसात करना।',
      featuresEn: [
        'Phonetic clarity for Matras and Nukta',
        'Listening comprehension drills',
        'Textbook audio & poetry recitation appreciation',
      ],
      featuresHi: [
        'मात्राओं और नुक्ता के शुद्ध उच्चारण की पहचान',
        'श्रवण बोध आधारित अभ्यास व प्रश्नोत्तर',
        'काव्य पाठ एवं गद्य वाचन के भाव को समझना',
      ],
      progress: 96,
    },
    {
      id: 'speaking',
      icon: MessageSquare,
      num: '02',
      titleEn: 'Bolo (Speaking)',
      titleHi: 'मौखिक (बोलना)',
      subtitleEn: 'Spontaneous Conversational Fluency',
      subtitleHi: 'सहज एवं आत्मविश्वासपूर्ण संवाद',
      descEn: 'Overcoming hesitation, mastering conversational idioms, and preparing for school vivas and Cambridge/IB oral assessments.',
      descHi: 'संकोच से मुक्ति, समृद्ध शब्दावली का व्यावहारिक प्रयोग तथा विद्यालयीन मौखिक परीक्षा व IB/IGCSE ओरल की तैयारी।',
      featuresEn: [
        'Individual Oral (IO) structured presentations',
        'Everyday situational conversation practice',
        'Debate, extempore, and speech delivery',
      ],
      featuresHi: [
        'व्यक्तिगत मौखिक परीक्षा (IO) की सुनियोजित तैयारी',
        'दैनिक जीवन के विभिन्न प्रसंगों पर धाराप्रवाह संवाद',
        'वाद-विवाद, आशुभाषण और भाषण प्रस्तुति कला',
      ],
      progress: 94,
    },
    {
      id: 'reading',
      icon: BookOpen,
      num: '03',
      titleEn: 'Padho (Reading)',
      titleHi: 'पठन (पढ़ना)',
      subtitleEn: 'Literary Comprehension & Flow',
      subtitleHi: 'गहन भावबोध एवं आरोह-अवरोह',
      descEn: 'Expressive reading aloud, critical evaluation of unseen prose/poetry, and understanding cultural metaphors in literature.',
      descHi: 'उचित यति-गति के साथ सस्वर वाचन, अपठित गद्यांश-पद्यांश का समालोचनात्मक बोध और साहित्यिक मुहावरों की समझ।',
      featuresEn: [
        'Unseen passages (Apatit Gadyansh) decoding',
        'Classical & contemporary literature commentary',
        'Vocabulary expansion in literary context',
      ],
      featuresHi: [
        'अपठित गद्यांश व पद्यांश का त्वरित एवं सटीक विश्लेषण',
        'प्राचीन एवं समकालीन साहित्य पाठों की भावार्थ व्याख्या',
        'साहित्यिक संदर्भों में नए शब्दों का स्वाभाविक ग्रहण',
      ],
      progress: 98,
    },
    {
      id: 'writing',
      icon: PenTool,
      num: '04',
      titleEn: 'Likho (Writing)',
      titleHi: 'लेखन (लिखना)',
      subtitleEn: 'Calligraphic Elegance & Board Formats',
      subtitleHi: 'सुलेख, व्याकरणिक शुद्धता व प्रारूप',
      descEn: 'Flawless Devanagari script formation, grammar precision, and mastery over formal letters, essays, and board answer sheets.',
      descHi: 'सुडौल देवनागरी लिपि, त्रुटिरहित वर्तनी, निबंध (Nibandh), पत्र, संवाद एवं बोर्ड परीक्षा प्रारूपों में उच्च अंक प्राप्ति।',
      featuresEn: [
        'Devanagari handwriting & spelling correction',
        'Structured essay, letter, and report writing',
        'Board examination rubric-focused presentation',
      ],
      featuresHi: [
        'हस्तलेखन सुलेख सुधार एवं वर्तनी दोष निवारण',
        'संरचित निबंध, पत्र, संवाद व विज्ञापन लेखन',
        'बोर्ड परीक्षा अंकन योजना अनुसार समयबद्ध उत्तर लेखन',
      ],
      progress: 95,
    },
  ];

  const current = pillars[activePillar];
  const Icon = current.icon;

  return (
    <div className="four-pillars-interactive-card">
      <div className="pillars-grid-nav">
        {pillars.map((p, index) => {
          const PIcon = p.icon;
          const isActive = index === activePillar;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActivePillar(index)}
              className={`pillar-tab-btn ${isActive ? 'active' : ''}`}
            >
              <div className="pillar-btn-inner">
                <div className="pillar-icon-badge">
                  <PIcon size={20} />
                </div>
                <div className="pillar-btn-text">
                  <span className="pillar-num">{p.num}</span>
                  <span className="pillar-title">
                    {language === 'hi' ? p.titleHi : p.titleEn}
                  </span>
                </div>
              </div>
              {isActive && (
                <motion.div
                  layoutId="active-pillar-border"
                  className="pillar-active-glow"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Detail Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          className="pillar-detail-display"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pillar-display-header">
            <div className="pillar-main-icon-wrap">
              <Icon size={32} />
            </div>
            <div>
              <span className="section-tag" style={{ margin: '0 0 6px 0' }}>
                <Sparkles size={13} style={{ marginRight: 4 }} />
                {language === 'hi' ? 'भाषा स्तंभ' : 'Language Pillar'} {current.num}
              </span>
              <h3 className="pillar-display-title">
                {language === 'hi' ? current.titleHi : current.titleEn}
              </h3>
              <p className="pillar-display-sub">
                {language === 'hi' ? current.subtitleHi : current.subtitleEn}
              </p>
            </div>
          </div>

          <p className="pillar-display-desc">
            {language === 'hi' ? current.descHi : current.descEn}
          </p>

          <div className="pillar-features-row">
            {(language === 'hi' ? current.featuresHi : current.featuresEn).map((feat, idx) => (
              <div key={idx} className="pillar-feature-chip">
                <CheckCircle2 size={16} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
