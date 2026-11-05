import React from 'react';
import { motion } from 'framer-motion';

export const InteractiveBookGraphic: React.FC = () => {
  return (
    <div className="literary-book-wrapper">
      <motion.div
        className="literary-book-container"
        whileHover={{ rotateY: -8, rotateX: 6, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Soft atmospheric book aura */}
        <div className="book-aura" />

        {/* The Open Book SVG Artwork */}
        <svg
          viewBox="0 0 540 360"
          className="book-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Cover Depth / Spine */}
          <path
            d="M270 320 C230 330 140 325 35 305 L35 70 C140 90 230 95 270 85 C310 95 400 90 505 70 L505 305 C400 325 310 330 270 320 Z"
            fill="#561E25"
            stroke="#8E3944"
            strokeWidth="3"
          />

          {/* Book Edges / Pages Block */}
          <path
            d="M270 315 C232 324 145 318 42 300 L45 74 C148 92 234 98 270 90 C306 98 392 92 495 74 L498 300 C395 318 308 324 270 315 Z"
            fill="#DDD4CA"
          />

          {/* Left Page (Mocha Cream Paper) */}
          <path
            d="M270 310 C235 320 150 314 50 295 L55 76 C152 94 235 100 270 92 Z"
            fill="url(#leftPageGradient)"
            stroke="rgba(183, 168, 154, 0.4)"
            strokeWidth="1.5"
          />

          {/* Right Page (Mocha Cream Paper) */}
          <path
            d="M270 310 C305 320 390 314 490 295 L485 76 C388 94 305 100 270 92 Z"
            fill="url(#rightPageGradient)"
            stroke="rgba(183, 168, 154, 0.4)"
            strokeWidth="1.5"
          />

          {/* Center Spine Crease */}
          <line
            x1="270"
            y1="90"
            x2="270"
            y2="312"
            stroke="#722F37"
            strokeWidth="3"
            opacity="0.6"
          />

          {/* Golden Silk Bookmark Ribbon */}
          <motion.path
            d="M270 88 C265 140 255 220 260 335 L272 320 L284 335 C280 220 275 140 270 88 Z"
            fill="url(#ribbonGradient)"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Left Page Decorative Manuscript Text Lines */}
          <g opacity="0.35" stroke="#722F37" strokeWidth="2" strokeLinecap="round">
            <line x1="85" y1="130" x2="235" y2="130" />
            <line x1="85" y1="155" x2="230" y2="155" />
            <line x1="85" y1="180" x2="215" y2="180" />
            <line x1="85" y1="205" x2="235" y2="205" />
            <line x1="85" y1="230" x2="195" y2="230" />
            <line x1="85" y1="255" x2="225" y2="255" />
          </g>

          {/* Right Page Decorative Manuscript Text Lines */}
          <g opacity="0.35" stroke="#722F37" strokeWidth="2" strokeLinecap="round">
            <line x1="305" y1="130" x2="455" y2="130" />
            <line x1="310" y1="155" x2="455" y2="155" />
            <line x1="305" y1="180" x2="435" y2="180" />
            <line x1="310" y1="205" x2="455" y2="205" />
            <line x1="305" y1="230" x2="415" y2="230" />
            <line x1="310" y1="255" x2="445" y2="255" />
          </g>

          {/* Left Page Calligraphic Drop Cap "भा" */}
          <text
            x="115"
            y="112"
            fontFamily="'Rozha One', 'Noto Serif Devanagari', serif"
            fontSize="32"
            fontWeight="bold"
            fill="#722F37"
            textAnchor="middle"
          >
            भा
          </text>

          {/* Right Page Calligraphic Seal "ज्ञ" */}
          <text
            x="425"
            y="112"
            fontFamily="'Rozha One', 'Noto Serif Devanagari', serif"
            fontSize="32"
            fontWeight="bold"
            fill="#722F37"
            textAnchor="middle"
          >
            ज्ञ
          </text>

          {/* Gradients */}
          <defs>
            <linearGradient id="leftPageGradient" x1="50" y1="190" x2="270" y2="190" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FAF7F2" />
              <stop offset="85%" stopColor="#F5EFE6" />
              <stop offset="100%" stopColor="#E2D6C5" />
            </linearGradient>

            <linearGradient id="rightPageGradient" x1="270" y1="190" x2="490" y2="190" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E2D6C5" />
              <stop offset="15%" stopColor="#F5EFE6" />
              <stop offset="100%" stopColor="#FAF7F2" />
            </linearGradient>

            <linearGradient id="ribbonGradient" x1="270" y1="88" x2="270" y2="335" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C49A45" />
              <stop offset="50%" stopColor="#E6BE68" />
              <stop offset="100%" stopColor="#A87F2E" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Animated Golden Quill Pen on top of Book */}
        <motion.div
          className="floating-quill-wrapper"
          animate={{
            y: [0, -14, 0],
            rotate: [0, 3, -2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Feather Quill / Pen */}
            <path
              d="M100 10 C80 30 45 70 25 125 L20 142 L32 135 C65 95 105 45 100 10 Z"
              fill="url(#quillGradient)"
              stroke="#561E25"
              strokeWidth="2"
            />
            {/* Nib Tip */}
            <path d="M20 142 L12 148 L22 138 Z" fill="#D4AF37" stroke="#722F37" strokeWidth="1.5" />
            <circle cx="16" cy="144" r="1.5" fill="#722F37" />

            {/* Glowing ink droplet */}
            <motion.circle
              cx="11"
              cy="150"
              r="3.5"
              fill="#722F37"
              animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <defs>
              <linearGradient id="quillGradient" x1="100" y1="10" x2="20" y2="142" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8E3944" />
                <stop offset="45%" stopColor="#722F37" />
                <stop offset="85%" stopColor="#B7A89A" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Floating Calligraphy Letters popping from the page */}
        <motion.span
          className="floating-glyph g1"
          animate={{ y: [0, -22, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          ज्ञान
        </motion.span>
        <motion.span
          className="floating-glyph g2"
          animate={{ y: [0, -26, 0], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
        >
          साहित्य
        </motion.span>
        <motion.span
          className="floating-glyph g3"
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 3.8, repeat: Infinity, delay: 2, ease: 'easeInOut' }}
        >
          संस्कृति
        </motion.span>
      </motion.div>
    </div>
  );
};
