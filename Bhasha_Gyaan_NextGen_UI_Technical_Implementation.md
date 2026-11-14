# Bhasha Gyaan Website Redesign

## Technical Implementation Specification & As-Built Documentation

**Project:** Bhasha Gyaan by Abha Mundra  
**Objective:** Transform the React website into a premium, editorial-style bilingual Hindi education experience with distinctive typography, subtle motion, clear visual hierarchy, and a memorable, uncluttered first impression.  
**Hosting:** Firebase Hosting (live at [https://bhashagyaan-hindi.web.app](https://bhashagyaan-hindi.web.app)).  
**Scope:** Front-end redesign, bilingual support (English & हिन्दी), viewport-adaptive content, and refinement of the enquiry experience.

---

## 1. Product and design direction

### 1.1 Creative concept

**An Editorial Hindi Learning Experience**

The website feels like a premium educator's personal brand, not a conventional tuition-centre template. It combines:

- Editorial typography using **Fraunces**, **Manrope**, and **Noto Sans Devanagari**.
- Warm, tactile surfaces with restrained Indian-language visual motifs (low-opacity Devanagari background watermark).
- A confident, typography-led hero opening directly with the core message.
- Small, purposeful transitions that guide attention via **Motion for React** (`motion/react`).
- Clear, reassuring information about Abha's 20+ years of teaching experience and class formats.
- Instant bilingual toggling between English and हिन्दी.

### 1.2 Success criteria (Achieved)

1. **Immediate First Impression:** The hero communicates the brand, tutor identity, and teaching proposition immediately without visual clutter.
2. **Distinctive Typography:** Distinctive through Fraunces serif headings, Manrope body text, and Noto Sans Devanagari script.
3. **Subtle Motion:** Powered by Motion for React with full `reducedMotion="user"` and `prefers-reduced-motion` support.
4. **Bilingual Capability:** Seamless dual-linguistic version with persistent language preference (`localStorage`).
5. **Verified Contact Paths:** Direct WhatsApp integration to verified number (`+65 8832 1025`) and verified destination email (`aarushi.mundra@gmail.com`).
6. **Lightweight & Responsive:** Mobile-first layout with zero layout shifts and unobstructed touch targets.

### 1.3 Verified content and business rules

- **Brand:** Bhasha Gyaan by Abha Mundra (भाषा ज्ञान / आभा मूंदड़ा द्वारा भाषा ज्ञान).
- **Tutor:** Abha Mundra, Hindi Language Educator (हिंदी भाषा शिक्षिका).
- **Experience:** 20+ years (२०+ वर्ष).
- **Curriculum experience:** CBSE, IGCSE, IB, and A-Levels.
- **Learning areas:** Fundamentals & pronunciation, vocabulary & grammar, reading & writing, reading comprehension, creative & essay writing, spoken Hindi & communication, board-specific academic coaching, and examination preparation.
- **Online classes:** Available worldwide. Scheduling and availability are discussed during enquiry.
- **Offline classes:** Take place exclusively **at Abha Mundra's residence**. Students must travel to her residence. She does not visit students or provide home visits. The exact location is shared privately after enquiry.
- **WhatsApp:** `+65 8832 1025` (Click-to-Chat: `https://wa.me/6588321025`).
- **Email:** `aarushi.mundra@gmail.com`.

---

## 2. Information architecture

The final application is streamlined into **three primary editorial sections**, eliminating redundant content and maintaining focus on conversion:

| Section | Purpose | Primary Content |
|---|---|---|
| **1. Home / Hero** | Make an immediate, confident first impression | Editorial headline, supporting copy, primary CTA (*Explore Learning*), and secondary CTA (*Let's Connect ↗*). |
| **2. About & Expertise** | Establish deep pedagogical credibility | Large `20+` typographic anchor, Cambridge certifications, tutor bio, 4 curriculum cards, and 8 learning areas. |
| **3. Contact & Enquiry** | Convert interest into enquiries | Interactive form with Online/Offline/Unsure mode selector, dynamic residence policy notices, direct WhatsApp, and direct email. |

> **Note on Learning Section Consolidation:** The standalone *Learning Experience* section was consolidated. Delivery details—online availability worldwide and offline attendance strictly at the educator's residence with no home visits—are integrated directly into the Contact & Enquiry mode selector and dynamic guidance callouts.

### Navigation

- **Home** (`#home`)
- **About** (`#about`)
- **Contact** (`#contact`)
- **Language Toggle:** `English | हिन्दी` (desktop) / `EN | हिं` (mobile)
- **Persistent CTA:** **Enquire Now** (अभी संपर्क करें)

Compact sticky header on desktop. Full-screen mobile drawer on mobile viewports with background scroll lock.

---

## 3. Visual design system

### 3.1 Brand colours

| Token | Hex / Value | Usage |
|---|---|---|
| **Warm Ivory** | `#EAE6DE` | Primary background across all pages |
| **Deep Editorial Blue** | `#226192` | Primary brand colour, headings, links, active states |
| **Coral Orange** | `#EF8557` | Primary CTA buttons, accents, italic highlights |
| **White** | `#FFFFFF` | Content cards, form inputs, toggle background |
| **Charcoal / Ink** | `#333333` | Body copy and secondary text |
| **Dark Blue** | `#174766` | Footer background and high-contrast anchors |
| **Soft Ivory** | `#F4F1EB` | Surface contrast tints and secondary cards |

### 3.2 Typography

A three-font system loaded via Google Fonts in `index.html`:

- **Fraunces:** Large editorial headlines, section titles, and selected italic emphasis (`em { font-style: italic; color: var(--color-coral); }`).
- **Manrope:** Clean, modern geometric body copy, navigation links, buttons, and form labels.
- **Noto Sans Devanagari:** Pure, authentic Devanagari rendering when Hindi language is toggled.

```css
:root {
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Manrope", Arial, sans-serif;
  --font-hindi: "Noto Sans Devanagari", sans-serif;
}

html[lang="hi"] body {
  font-family: var(--font-hindi), var(--font-body);
}

html[lang="hi"] .editorial-heading,
html[lang="hi"] .section-title,
html[lang="hi"] .hero-headline {
  font-family: var(--font-hindi), var(--font-display);
}
```

---

## 4. Section-by-section specification

### 4.1 Home / Hero

- **Background Watermark:** Oversized, low-opacity Devanagari watermark (`हिन्दी`) rendered at `opacity: 0.04`.
- **Headline:**
  - Line 1: *"Discover the beauty of Hindi."* (हिंदी की सुंदरता को जानें।)
  - Line 2: *`<em>Speak it. Read it. Live it.</em>`* (*बोलें। पढ़ें। जिएं।*)
- **Supporting Copy:** Viewport-adaptive text highlighting 20+ years of teaching experience.
- **CTAs:**
  - Primary: **Explore Learning** (smooth scrolls to `#about`).
  - Secondary: **Let's Connect ↗** (opens WhatsApp Click-to-Chat with prefilled message).
- **Streamlining Decision:** Removed redundant `hero-eyebrow`, `hero-visual-frame` (portrait frame), and `hero-credibility-strip` to deliver an uncluttered, immediate editorial headline opening.

### 4.2 About & Expertise

- **Editorial Split Layout:**
  - **Typographic Anchor Card:** Large `20+` display anchor with Cambridge IGCSE and Cambridge A-Level certification badges.
  - **Biography & Credentials:** Verified educator biography and 4 core credentials checklist.
- **Curricula Grid:** 4 structured cards covering **CBSE** (Classes 1 to 12), **IGCSE** (Cambridge Assessment), **IB** (Language B & ab initio), and **A-Levels** (Advanced Level).
- **Hindi Learning Areas:** 8 targeted learning domains presented in a clean grid with short mobile variants and complete desktop variants.

### 4.3 Contact & Enquiry

- **Headline:** *"Your Hindi learning journey starts here."* (आपकी हिंदी सीखने की यात्रा यहीं से शुरू होती है।)
- **Form Fields:**
  - Parent / Student Name (Mandatory)
  - Email Address (Mandatory, validated)
  - WhatsApp / Contact Number (Mandatory, minimum 7 digits)
  - Curriculum: CBSE, IGCSE, IB, A-Levels, Other
  - Learning Mode: 3 options—Online Classes, Offline (At Tutor's Residence), Not sure yet
  - Message (Mandatory)
- **Dynamic Guidance Notices:** Instant callout updates based on selected mode:
  - *Online:* Informs students about worldwide interactive sessions and schedule discussion.
  - *Offline:* Explicitly states classes take place exclusively at Abha Mundra's residence; students must travel; home visits not available.
  - *Not sure yet:* Reassures students that learning goals can be shared to determine the best format.
- **Anti-Spam:** Visually hidden honeypot field (`websiteUrl`).
- **Direct Communication Sidebar:** WhatsApp Click-to-Chat button (`+65 8832 1025`) and direct email link (`aarushi.mundra@gmail.com`).

### 4.4 Footer

- **Streamlining Decision:** Removed redundant `#### Navigation` link column to keep the footer compact.
- **Two-Column Layout:**
  - **Left:** Bhasha Gyaan branding, Abha Mundra attribution, and concise brand description.
  - **Right:** Direct connect links (WhatsApp: `+65 8832 1025` and Email: `aarushi.mundra@gmail.com`).
- **Bottom Bar:** Copyright notice and accessible **Back to top ↑** button.
- **Safe Margin:** `5.25rem` bottom padding on mobile to guarantee the floating WhatsApp button never obstructs footer links.

---

## 5. Dual-linguistic (bilingual) architecture

### 5.1 Language context & persistence

Implemented in `src/context/LanguageContext.tsx`:

- Supports `en` (English) and `hi` (हिन्दी).
- Persists language choice in browser `localStorage` (`bhasha_gyaan_lang`).
- Dynamically updates `document.documentElement.lang`.
- Provides centralized `useLanguage()` hook returning `{ language, setLanguage, content }`.

### 5.2 Complete Hindi translation coverage

All UI text, badges, descriptions, error messages, and form placeholders are translated in `websiteContentHi`:
- Prefilled WhatsApp message in Hindi:
  `"नमस्ते! मैं भाषा ज्ञान में हिंदी कक्षाओं के संबंध में जानकारी प्राप्त करना चाहता/चाहती हूँ। कृपया पाठ्यक्रम और समय की उपलब्धता साझा करें।"`

### 5.3 Language toggle component

Implemented in `src/components/LanguageToggle.tsx`:
- Accessible pill toggle (`role="group"`, `aria-pressed`).
- Desktop view: `English | हिन्दी`
- Mobile view: `EN | हिं` with globe icon.
- Integrated into both desktop navigation and mobile header controls.

---

## 6. Viewport-adaptive content strategy

To eliminate tedious scrolling on mobile devices while preserving rich academic depth on desktop, dual content strings are maintained in `src/data/websiteContent.ts`:

| Content Element | Desktop (Comprehensive) | Mobile (Concise & Punchy) |
|---|---|---|
| **Hero Supporting** | 2-sentence comprehensive description | 1-sentence punchy overview |
| **Tutor Bio** | Full 2-paragraph background | 1-sentence high-impact credential statement |
| **Curricula Cards** | Detailed syllabus & board breakdown | Single-line outcome summary |
| **Learning Areas** | Full academic explanations | Concise domain summaries |
| **Contact Subtitle** | Full enquiry guidance | Direct 1-line callout |
| **Footer Description**| Extended teaching motto | Single-line brand statement |

### Zero-layout-shift implementation

Switching is handled via pure CSS utility classes:

```css
.mobile-text { display: none !important; }
.desktop-text { display: inline; }

@media (max-width: 640px) {
  .desktop-text { display: none !important; }
  .mobile-text { display: inline !important; }
}
```

---

## 7. Motion and interaction system

- **Library:** `motion/react` (Motion for React).
- **Reduced Motion:** Wrapped in `<MotionConfig reducedMotion="user">` to automatically respect OS accessibility preferences.
- **Reusable Component:** `src/components/Reveal.tsx` providing coordinated scroll entrances with `viewport={{ once: true, amount: 0.15 }}`.
- **Scroll Progress Indicator:** Real-time 3px coral progress line fixed to the top of the sticky header.
- **Micro-interactions:** Coral arrow translation on button hover (`translateX(4px)`).

---

## 8. Technical architecture & file structure

```text
src/
├── components/
│   ├── Navbar.tsx            # Sticky header, scroll progress, mobile menu, language toggle
│   ├── LanguageToggle.tsx    # Accessible EN | हिं toggle pill
│   ├── Reveal.tsx            # Motion scroll-reveal wrapper
│   ├── WhatsAppButton.tsx    # Inline CTA & floating WhatsApp button
│   └── Footer.tsx            # Compact 2-column footer (Brand + Connect)
├── sections/
│   ├── HeroSection.tsx       # Fraunces headline, Devanagari watermark, CTAs
│   ├── AboutSection.tsx      # Typographic 20+ anchor, curricula, learning areas
│   └── ContactSection.tsx    # Enquiry form, 3-mode selector, sidebar, feedback
├── context/
│   └── LanguageContext.tsx   # React context for bilingual state & persistence
├── data/
│   └── websiteContent.ts     # Complete bilingual & viewport-adaptive content
├── services/
│   └── firebase.ts           # Firestore submission with timeout & localStorage fallback
├── styles/
│   └── global.css            # Unified editorial design system & responsive rules
├── App.tsx                   # Top-level composition with MotionConfig & LanguageProvider
└── main.tsx                  # React DOM mount point
```

---

## 9. Mobile UX & responsive optimizations

1. **Full-Screen Mobile Drawer:** `position: fixed; height: calc(100dvh - var(--header-height))` prevents background content and footer bleed-through.
2. **Scroll Lock:** Locks `document.body.style.overflow = "hidden"` when mobile drawer is open.
3. **Non-Obstructive Floating WhatsApp Button:** Compact 44px circular touch target on mobile with non-intrusive positioning (`bottom: 1rem; right: 1rem`).
4. **No Collisions:** Curricula badges and contact cards have safe right padding (`2.25rem`), ensuring the floating button never obscures text or touch targets.

---

## 10. Deployment & verification

- **Hosting Provider:** Firebase Hosting
- **Build Command:** `npm run build` (`tsc && vite build`)
- **Deploy Command:** `firebase deploy --only hosting`
- **Production URL:** [https://bhashagyaan-hindi.web.app](https://bhashagyaan-hindi.web.app)
- **Alternative URL:** [https://bhashagyaan-hindi.firebaseapp.com](https://bhashagyaan-hindi.firebaseapp.com)
- **Verified Status:** HTTP/2 `200 OK` response verified live.
