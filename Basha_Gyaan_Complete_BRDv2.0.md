# Bhasha Gyaan
## Hindi Teaching Portfolio Website

### 1. Project Overview

**Brand:** Bhasha Gyaan  
**Brand Attribution:** Bhasha Gyaan by Abha Mundra  
**Tutor:** Abha Mundra  
**Professional Title:** Hindi Language Educator  
**Experience:** 20+ Years

Bhasha Gyaan is a professional portfolio website for Abha Mundra, an experienced Hindi Language Educator.

The website will establish a professional online presence, showcase her teaching experience and curriculum expertise, explain available learning options, and provide a simple way for parents and students to enquire about Hindi classes.

**Primary Objectives**
- Establish a professional digital presence.
- Showcase teaching experience, qualifications and expertise.
- Present supported curricula and Hindi learning areas.
- Explain online and offline class arrangements.
- Generate enquiries through a contact form and WhatsApp.

The website must be minimal, elegant, responsive and conversion-focused.

The initial release will be a single-page React application without student accounts, online payments, class booking or learning management functionality.

---

### 2. Website Structure

The website must contain only four primary sections.

The overall experience should communicate all essential information within approximately 2-3 full-screen scrolls on a typical desktop or laptop.

| Section | Content | Purpose |
|---|---|---|
| Home | Brand, introduction, headline, photograph and CTA | First impression |
| About & Expertise | Tutor profile, experience, qualifications and curricula | Establish credibility |
| Learning Experience | Teaching areas, online and offline arrangements | Explain services |
| Contact | Enquiry form, WhatsApp and footer | Generate enquiries |

The design should not force every section to occupy an entire screen. Content should determine the height.

#### 2.1 Home / Hero

**Objective:** Introduce Bhasha Gyaan and create a strong first impression.

Content:
- Bhasha Gyaan branding.
- Abha Mundra's name and professional title.
- Short introduction highlighting 20+ years of teaching experience.
- Professional tutor photograph, if supplied and approved.
- Supported curriculum highlights.
- Primary and secondary calls to action.

Suggested headline:

"Discover the Beauty of Hindi. Master the Language with Confidence."

Supporting message:

"Learn Hindi with Abha Mundra, an experienced Hindi Language Educator with over 20 years of teaching experience."

Supporting highlights:
- 20+ Years of Experience
- CBSE | IGCSE | IB | A-Levels
- Online & Offline Classes

CTA:
- Explore Classes
- Connect on WhatsApp

Navigation:

Home | About | Learning | Contact

**Design recommendation:** Use a two-column desktop layout with text on the left and the tutor's photograph on the right. Stack the content on mobile devices.

#### 2.2 About & Teaching Expertise

**Objective:** Establish professional credibility without overwhelming visitors with information.

Profile information:
- 20+ years of Hindi teaching experience.
- IGCSE teaching certification.
- A-Level teaching certification.
- Experience teaching CBSE, IGCSE, IB and A-Level students.

Curriculum expertise:

CBSE | IGCSE | IB | A-Levels

Hindi learning areas:
- Hindi fundamentals, alphabets and pronunciation.
- Vocabulary and grammar.
- Reading and writing.
- Reading comprehension.
- Creative and essay writing.
- Spoken Hindi and communication.
- Curriculum-specific academic coaching.
- Examination preparation.

Present the information through a compact, visually organised layout.

**Design recommendation:** Consolidate professional highlights, teaching expertise, services and teaching methodology into this section. Do not create separate sections for information that communicates essentially the same message.

#### 2.3 Learning Experience

**Objective:** Explain available learning options and the teaching arrangements.

Present two learning options.

**Online Classes**

- Online Hindi classes are available.
- Students can enquire about schedules and arrangements.
- Availability will be discussed directly with the tutor.

**Offline Classes**

- Offline classes take place at Abha Mundra's residence.
- Students must travel to the tutor's residence.
- The tutor does not provide home visits.
- Exact location details will be shared upon enquiry.

The offline arrangement must be clearly visible and must not be hidden within expandable content.

**Design recommendation:** Present Online and Offline as two simple content blocks rather than elaborate service cards. Make the offline location arrangement particularly clear.

#### 2.4 Contact & Enquiry

**Objective:** Make it easy for prospective students and parents to contact the tutor.

Provide a simple enquiry form.

| Field | Requirement |
|---|---|
| Parent / Student Name | Mandatory |
| Email Address | Mandatory |
| WhatsApp / Contact Number | Mandatory |
| Curriculum | CBSE, IGCSE, IB, A-Levels, Other |
| Learning Mode | Online / Offline |
| Message | Mandatory |

Functional requirements:
- Validate mandatory fields.
- Validate email format.
- Display appropriate validation messages.
- Display success and failure notifications.
- Send enquiries to the configured tutor email.
- Include basic spam protection.
- Do not expose private credentials in frontend code.

Conditional messages:

**When Online is selected:**

"Online classes are available. Please share your preferred schedule and learning requirements so that availability and arrangements can be discussed."

**When Offline is selected:**

"Offline classes are conducted at Abha Mundra's residence. Students are required to travel to the teaching location. Home visits by the tutor are not available. Location details can be shared upon enquiry."

WhatsApp integration:
- Provide a WhatsApp contact button.
- Include a floating WhatsApp button.
- Open WhatsApp with a prefilled enquiry message.

Suggested message:

"Hello! I am interested in Hindi classes at Bhasha Gyaan. Could you please share more details about your courses and availability?"

The actual WhatsApp number must be supplied and verified before deployment.

The footer should contain:
- Bhasha Gyaan branding.
- Abha Mundra's name and professional title.
- Short teaching description.
- Navigation links.
- WhatsApp and email links.
- Copyright notice.

---

### 3. UI/UX Design Requirements

#### 3.1 Design Philosophy

The website should follow a minimalist, elegant and editorial design language.

Design priorities:
- Clean layouts.
- Strong typography.
- Generous whitespace.
- Simple navigation.
- Clear visual hierarchy.
- Minimal decorative elements.
- Subtle interactions.
- Consistent visual identity.

The website should feel like a premium personal educator portfolio rather than a conventional tuition centre website.

#### 3.2 Brand Colour Palette

Use the following colours consistently.

| Colour | Hex Code | Usage |
|---|---|---|
| Warm Ivory | #EAE6DE | Primary background |
| Deep Editorial Blue | #226192 | Headings, navigation and links |
| Coral Orange | #EF8557 | Buttons and highlights |
| White | #FFFFFF | Content surfaces |
| Dark Text | #333333 | Body text |

Warm Ivory should be the dominant background.

Deep Editorial Blue should provide visual structure.

Coral Orange should be reserved for important highlights and calls to action.

Do not introduce additional prominent colours.

#### 3.3 Typography

Recommended fonts:
- Headings: Playfair Display.
- Body: Inter or Lato.
- Hindi: Noto Sans Devanagari.

Use responsive typography to maintain readability across screen sizes.

#### 3.4 Styling Constraints

- Use minimal custom CSS.
- Define reusable CSS variables.
- Prefer CSS Grid and Flexbox.
- Avoid unnecessary UI frameworks.
- Avoid excessive shadows, gradients and animations.
- Maintain consistent spacing and alignment.
- Use simple transitions where useful.
- Avoid excessive rounded cards and decorative containers.

#### 3.5 Responsive Design

The website must work across:

| Device | Target Width |
|---|---|
| Small mobile | 320px onwards |
| Standard mobile | 375px onwards |
| iPads and tablets | 768px onwards |
| MacBooks and laptops | 1025px onwards |
| Large desktop | Above 1440px |

Implementation requirements:
- Mobile-first CSS.
- Responsive navigation.
- Flexible layouts using Grid and Flexbox.
- Responsive typography using clamp().
- Proportional image resizing.
- Touch-friendly buttons and form controls.
- No horizontal scrolling.
- No overlapping or clipped content.
- Support portrait and landscape orientations.

All four sections must adapt naturally without unnecessary vertical expansion.

---

### 4. Technical Requirements

#### 4.1 Technology Stack

| Area | Technology |
|---|---|
| Frontend | React |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Custom CSS |
| Icons | Lucide React (optional) |
| Enquiry Form | EmailJS or Formspree |
| Communication | WhatsApp Click-to-Chat |
| Version Control | Git / GitHub |
| Hosting | Vercel or Netlify |

Use a single lightweight React application.

Avoid introducing a backend or complex architecture unless required.

#### 4.2 Suggested Project Structure

```text
bhasha-gyaan/
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutExpertise.tsx
│   │   ├── LearningExperience.tsx
│   │   ├── ContactForm.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── websiteContent.ts
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

Components may be combined where appropriate. Avoid unnecessary abstraction.

#### 4.3 SEO and Performance

- Implement semantic HTML.
- Add page title and meta description.
- Implement Open Graph metadata.
- Use meaningful image alt attributes.
- Include sitemap.xml and robots.txt.
- Optimise images.
- Lazy-load non-critical images.
- Minimise JavaScript and dependencies.
- Ensure good mobile performance.
- Support search engine indexing.

#### 4.4 Security and Privacy

- Serve through HTTPS.
- Validate form submissions.
- Implement spam protection.
- Do not expose private credentials.
- Collect only necessary enquiry information.
- Do not publish the tutor's residence address.
- Share offline location details privately upon enquiry.

#### 4.5 Browser Compatibility

Support the latest stable versions of:
- Chrome
- Safari
- Firefox
- Microsoft Edge

Pay particular attention to Safari on iPhones, iPads and MacBooks.

---

### 5. Content Dependencies

The following information must be confirmed before deployment.

| Item | Requirement |
|---|---|
| Tutor Photograph | Approved professional photograph |
| WhatsApp Number | Verified number with country code |
| Email Address | Enquiry destination |
| Offline Location | Address to share privately |
| Teaching Approach | Tutor-approved description |
| Class Timings | Only if confirmed |
| Fees | Only if confirmed |
| Free Demo | Confirmation required before advertising |
| Testimonials | Genuine feedback with permission, optional |

Do not invent missing information, testimonials, qualifications, contact details, fees or availability.

---

### 6. Acceptance Criteria

The website is considered complete when:

**Content**
- Bhasha Gyaan branding is correctly represented.
- Abha Mundra is introduced as a Hindi Language Educator.
- 20+ years of experience is highlighted.
- IGCSE and A-Level certifications are represented accurately.
- CBSE, IGCSE, IB and A-Level curricula are displayed.
- Teaching expertise and learning areas are clearly explained.
- Online and offline arrangements are accurately communicated.
- Offline students are explicitly informed that they must visit the tutor's residence.
- Home visits are explicitly stated as unavailable.

**Functionality**
- Navigation links work correctly.
- Enquiry form validation works.
- Enquiries reach the configured destination.
- Success and failure messages are displayed.
- Learning-mode conditional messages work.
- WhatsApp links open the correct conversation.
- Floating WhatsApp button does not obstruct content.

**Design**
- Website follows the approved colour palette.
- Only four primary sections are implemented.
- Content is concise and avoids repetition.
- Overall page length targets approximately 2-3 full-screen scrolls where practical.
- Responsive behaviour works across mobile, tablet and desktop.
- No horizontal scrolling or overlapping elements occur.
- Navigation remains accessible across devices.

**Technical Quality**
- React application builds successfully.
- Supported browsers work correctly.
- SEO metadata is implemented.
- Images are optimised.
- No private credentials are exposed.
- Implementation remains lightweight and maintainable.

---

### 7. Additional Design Recommendations

The following recommendations are part of the proposed design direction and should be considered during implementation.

#### 7.1 Remove Standalone FAQ Section

Do not create a separate FAQ section in the initial release.

Reason:
- The website has only four primary sections.
- Most FAQ information is already covered in the About, Learning Experience and Contact sections.
- Repeating the same information increases page length without adding meaningful value.

If additional questions become necessary, incorporate them contextually into the relevant section.

#### 7.2 Remove Standalone Testimonials Section

Do not include testimonials in the initial release.

Reason:
- Testimonials are not essential to establishing the tutor's initial online presence.
- Unverified or placeholder testimonials must never be published.
- The tutor's 20+ years of experience and qualifications already provide professional credibility.

Genuine, approved testimonials can be introduced later without changing the overall website structure.

#### 7.3 Keep Navigation Minimal and Accessible

- Use a compact navigation bar.
- Prefer a sticky header on desktop, tablet and mobile where it improves navigation.
- Use anchor-based navigation.
- Highlight the active section subtly if practical.
- Use a compact mobile navigation menu.
- Ensure navigation does not consume excessive vertical space.

#### 7.4 Avoid Repetitive Content

Each section must have a distinct purpose.

- Home: Who is the tutor?
- About: Why should visitors trust the tutor's experience?
- Learning: What is taught and how are classes conducted?
- Contact: How can visitors enquire?

Do not repeat the same introduction, experience statements or curriculum information unnecessarily across sections.

#### 7.5 Prioritise Conversion Over Decoration

- Keep enquiry actions visible.
- Make WhatsApp communication easily accessible.
- Use clear and concise CTA labels.
- Do not add unnecessary interactive elements.
- Avoid excessive cards, statistics, icons and illustrations.
- Do not use carousels unless there is a genuine content requirement.

#### 7.6 Control Overall Page Length

The target experience should require approximately 2-3 full-screen scrolls on a typical desktop or laptop.

Guidelines:
- Avoid unnecessary section padding.
- Use content-driven section heights.
- Combine related information.
- Avoid full-screen sections when the content does not justify them.
- Keep mobile layouts compact without making text or controls difficult to use.

The scroll target is a design objective, not a reason to compromise readability or accessibility.

#### 7.7 Use Photography Strategically

- Prefer one strong professional photograph of Abha Mundra.
- Avoid generic stock photographs of classrooms or students.
- Do not use decorative illustrations that do not add meaningful information.
- Optimise photographs for mobile and desktop.
- Maintain consistent image proportions and presentation.

#### 7.8 Keep Future Enhancements Out of the Initial Release

Do not introduce the following features unless a confirmed business requirement arises:

- Student registration and login.
- Learning management system.
- Online payments.
- Class booking and scheduling.
- Student progress tracking.
- Blog or learning resources.
- Google Maps or public residence location.
- Content management system.

The initial release should remain focused on the tutor portfolio and enquiry experience.

---

### 8. Final Design Direction

The final website should feel like a premium personal educator portfolio rather than a conventional tuition centre website.

**Four sections. One clear message. Minimal distractions. Easy enquiries.**

Prioritise:

1. A strong first impression.
2. Clear professional credibility.
3. Concise presentation of teaching expertise.
4. Transparent online and offline arrangements.
5. Simple enquiry and WhatsApp communication.

**Core design principle: Less content, stronger presentation, easier enquiries.**

The website should communicate everything essential without making visitors navigate through repetitive sections or excessive content.