# Bhasha Gyaan -- Complete Business Requirements Document

## 1. Project Overview

### 1.1 Project Name

**Bhasha Gyaan -- Hindi Teaching Portfolio Website**

### 1.2 Business Overview

Bhasha Gyaan is the professional online presence of **Abha Mundra**, a
Hindi Language Educator with over 20 years of teaching experience. The
website will introduce the tutor, showcase her teaching expertise,
explain available learning modes, and make it easy for prospective
students and parents to enquire about Hindi classes.

### 1.3 Project Objective

Develop a modern, elegant, responsive, and user-friendly single-page
website that:

-   Establishes a professional digital presence for Bhasha Gyaan.
-   Highlights Abha Mundra's teaching experience, qualifications, and
    expertise.
-   Presents the curricula and learning services offered.
-   Clearly explains the availability and arrangements for online and
    offline classes.
-   Enables prospective students and parents to submit enquiries.
-   Provides direct communication through WhatsApp.

### 1.4 Target Audience

-   Parents seeking Hindi tuition for school-going children.
-   Students studying under CBSE, IGCSE, IB, and A-Level curricula.
-   Learners who want to develop Hindi reading, writing, speaking, and
    comprehension skills.
-   Students preparing for Hindi assessments and examinations.

### 1.5 Project Scope

The initial release will be a responsive, single-page React website. It
will focus on information, enquiries, and direct communication.

The initial release will not include student accounts, a learning
management system, online payments, class booking, progress tracking, or
a content management system. These may be considered as future
enhancements if required.

------------------------------------------------------------------------

## 2. Tutor Profile and Professional Highlights

### 2.1 Brand Information

-   **Brand name:** Bhasha Gyaan
-   **Brand descriptor:** Hindi Teaching
-   **Tutor:** Abha Mundra
-   **Professional title:** Hindi Language Educator
-   **Teaching experience:** 20+ years

### 2.2 Qualifications and Curriculum Experience

The website may state that Abha Mundra has:

-   IGCSE teaching certification.
-   A-Level teaching certification.
-   Experience teaching students following CBSE, IGCSE, IB, and A-Level
    curricula.

Do not add qualifications, affiliations, awards, or certifications that
have not been confirmed.

### 2.3 Professional Introduction

Suggested positioning:

> Bhasha Gyaan by Abha Mundra offers Hindi language learning and
> academic support, backed by over 20 years of teaching experience.
> Students can develop their Hindi language skills through structured
> guidance tailored to their learning needs and curriculum.

------------------------------------------------------------------------

## 3. Website Structure and Functional Requirements

The website will be a single-page application with clearly defined
sections and navigation links.

### 3.1 Home / Hero Section

**Purpose:** Introduce Bhasha Gyaan and communicate the tutor's value
proposition immediately.

**Content requirements:**

-   Bhasha Gyaan brand name.
-   Abha Mundra's name and professional title.
-   A concise introduction highlighting 20+ years of teaching
    experience.
-   A professional tutor photograph, if supplied and approved.
-   Primary call to action: **Book a Free Demo Class**.
-   Secondary call to action: **Connect on WhatsApp**.

**Suggested headline:**

> Discover the Beauty of Hindi. Master the Language with Confidence.

**Suggested supporting text:**

> Learn Hindi with Abha Mundra, an experienced Hindi language educator
> with over 20 years of teaching experience.

### 3.2 About Abha Mundra

**Purpose:** Build trust by presenting the tutor's background and
teaching experience.

Include:

-   Professional introduction.
-   20+ years of Hindi teaching experience.
-   IGCSE and A-Level teaching certifications.
-   Experience supporting CBSE, IGCSE, IB, and A-Level learners.
-   Teaching philosophy and approach, using only details confirmed by
    the tutor.
-   Professional photograph, if available.

### 3.3 Teaching Expertise and Curricula

Present the teaching areas in clear, easy-to-scan cards or sections.

**Curricula supported:**

-   CBSE
-   IGCSE
-   IB
-   A-Levels

**Hindi learning areas:**

-   Hindi fundamentals, alphabets, and pronunciation.
-   Vocabulary development.
-   Hindi grammar.
-   Reading and writing.
-   Reading comprehension.
-   Creative and essay writing.
-   Spoken Hindi and communication.
-   Curriculum-specific academic coaching.
-   Examination preparation.

Avoid promising specific examination outcomes or results.

### 3.4 Teaching Methodology and Services

Explain the learning support available to students. The content should
communicate a structured and learner-focused approach without making
unverified claims.

Potential areas to describe:

-   Building a foundation in Hindi.
-   Developing reading and writing skills.
-   Improving grammar and vocabulary.
-   Supporting spoken Hindi and communication.
-   Strengthening comprehension and creative writing.
-   Preparing for curriculum-based assessments and examinations.

The tutor should approve the final descriptions before publication.

### 3.5 Learning Modes: Online and Offline

Clearly explain the two available learning modes.

#### Online Classes

-   Online Hindi classes are available.
-   Students can enquire about schedules and arrangements.
-   The website should direct prospective students to the enquiry form
    or WhatsApp for details.

#### Offline Classes

**Important operational requirement:**

-   Offline classes take place at Abha Mundra's residence.
-   Students are required to travel to the tutor's residence to attend
    in-person classes.
-   The tutor does **not** travel to students' homes and does **not**
    provide home visits.
-   The exact location or address can be shared upon enquiry.

Display this information clearly wherever offline classes are described.
Do not use wording or imagery that suggests the tutor visits students.

### 3.6 Why Choose Bhasha Gyaan

This section may highlight confirmed strengths, including:

-   Over 20 years of Hindi teaching experience.
-   IGCSE and A-Level teaching certifications.
-   Support for CBSE, IGCSE, IB, and A-Level curricula.
-   Coverage of language fundamentals and academic Hindi skills.
-   Online and residence-based offline learning options.

Do not add unsupported claims such as guaranteed grades, rankings, or
exceptional success rates.

### 3.7 Testimonials

Testimonials are optional.

-   Publish only genuine feedback.
-   Obtain permission before publishing a student's or parent's name,
    photograph, or feedback.
-   Do not create fictional testimonials or imply that sample text is a
    real review.
-   If approved testimonials are unavailable, omit this section from the
    initial release.

### 3.8 Contact and Enquiry Section

Provide a simple enquiry form for parents and students.

**Suggested fields:**

  Field                       Requirement
  --------------------------- --------------------------------------------
  Parent / Student Name       Mandatory
  Email Address               Mandatory
  WhatsApp / Contact Number   Mandatory
  Curriculum                  Dropdown: CBSE, IGCSE, IB, A-Levels, Other
  Preferred Learning Mode     Online or Offline
  Message                     Mandatory

**Form behaviour:**

-   Validate mandatory fields and email format.
-   Display clear validation messages.
-   Display a confirmation message after successful submission.
-   Display a helpful error message if submission fails.
-   Include basic spam protection.
-   Send an enquiry notification to the tutor using the configured form
    service.
-   Do not expose private API keys or secret credentials in frontend
    code.

**Conditional content for Offline selection:**

Display the following message when a visitor selects Offline:

> Offline classes are conducted at Abha Mundra's residence. Students are
> required to travel to the teaching location to attend in-person
> sessions. Home visits by the tutor are not available. The location
> details can be shared upon enquiry.

**Conditional content for Online selection:**

> Online classes are available. Please share your preferred schedule and
> learning requirements in the enquiry form so that availability and
> arrangements can be discussed.

### 3.9 WhatsApp Integration

Provide direct WhatsApp communication through:

-   A WhatsApp button in the contact section.
-   A floating WhatsApp button that remains accessible without
    obstructing content.
-   A prefilled enquiry message.

**Suggested prefilled message:**

> Hello! I am interested in Hindi classes at Bhasha Gyaan. Could you
> please share more details about your courses and availability?

The actual WhatsApp number must be supplied and verified before launch.
Do not invent or assume a number.

### 3.10 Footer

Include:

-   Bhasha Gyaan brand name.
-   Abha Mundra's name and professional title.
-   A short description of the teaching service.
-   Navigation links to the main website sections.
-   WhatsApp contact link.
-   Email contact link, once supplied.
-   Copyright notice.
-   Social media links only if official profiles are provided.

------------------------------------------------------------------------

## 4. UI/UX Design Requirements

### 4.1 Design Philosophy

The website should have a minimalistic, elegant, and editorial visual
style.

Design principles:

-   Clean layouts and clear visual hierarchy.
-   Generous but purposeful whitespace.
-   Readable typography.
-   Consistent spacing and alignment.
-   Simple navigation and clear calls to action.
-   Subtle interactions only where useful.
-   A consistent visual identity across all sections and devices.

### 4.2 Brand Colour Palette

Use the following exact brand colours:

  -----------------------------------------------------------------------
  Colour                  Hex Code                Intended Usage
  ----------------------- ----------------------- -----------------------
  Warm Ivory              `#EAE6DE`               Primary page background

  Deep Editorial Blue     `#226192`               Headings, navigation,
                                                  important text, and
                                                  links

  Coral Orange            `#EF8557`               Primary buttons,
                                                  highlights, and
                                                  restrained accents

  White                   `#FFFFFF`               Selected content
                                                  surfaces and contrast

  Dark Text               `#333333`               Body copy where
                                                  appropriate
  -----------------------------------------------------------------------

**Colour usage guidance:**

-   Warm Ivory should be the dominant background colour.
-   Deep Editorial Blue should provide structure and strong text
    contrast.
-   Coral Orange should be used selectively for calls to action and
    small highlights.
-   White may be used for selected cards or form surfaces.
-   Do not introduce additional prominent colours that dilute the brand
    palette.

### 4.3 Typography

Suggested fonts:

-   **Headings:** Playfair Display.
-   **Body text:** Inter or Lato.
-   **Hindi text:** Noto Sans Devanagari.

Typography must remain legible across mobile, tablet, and desktop
screens. Use responsive font sizing where appropriate.

### 4.4 Layout and Spacing

-   Use a consistent content container with a maximum width.
-   Align section headings and content consistently.
-   Use a predictable spacing scale.
-   Avoid unnecessarily dense content.
-   Ensure the layout does not stretch excessively on large screens.
-   Keep important information and calls to action easy to find.

### 4.5 CSS and Styling Constraints

-   Keep CSS minimal, readable, and maintainable.
-   Prefer reusable CSS variables for colours, typography, spacing, and
    layout.
-   Use Flexbox and CSS Grid where appropriate.
-   Avoid unnecessary styling libraries and UI frameworks.
-   Avoid excessive gradients, shadows, borders, animations, decorative
    patterns, and elaborate rounded shapes.
-   Use simple transitions only where they improve usability.
-   Avoid fixed dimensions that prevent content from adapting to
    different screens.

Suggested CSS variables:

``` css
:root {
  --color-warm-ivory: #EAE6DE;
  --color-editorial-blue: #226192;
  --color-coral-orange: #EF8557;
  --color-white: #FFFFFF;
  --color-text: #333333;

  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --font-hindi: 'Noto Sans Devanagari', sans-serif;

  --container-width: 1200px;
  --section-spacing: 80px;
}
```

### 4.6 Responsive Design and Device Compatibility

The website must provide a fully responsive experience across **mobile
phones, iPads and other tablets, MacBooks, laptops, and large desktop
screens**. Responsive behaviour must be implemented primarily through
CSS using a mobile-first approach.

#### Supported Screen Ranges

  Device Category                      Target Screen Width
  ---------------------------------- ---------------------
  Small mobile phones                       320px to 374px
  Standard and large mobile phones          375px to 767px
  iPads and tablets                        768px to 1024px
  MacBooks and laptops                    1025px to 1440px
  Large desktop screens                       Above 1440px

These ranges are implementation guidelines. The layout must adapt
smoothly between breakpoints rather than relying only on a few fixed
device sizes.

#### CSS Implementation Requirements

-   Follow a mobile-first CSS development approach.
-   Use CSS media queries to adapt layouts at suitable breakpoints.
-   Use CSS Flexbox and Grid for responsive layouts.
-   Use relative units such as `%`, `rem`, `em`, `vw`, and `clamp()`
    where appropriate.
-   Use responsive typography so headings and body text scale naturally.
-   Ensure images resize proportionally without distortion.
-   Use a consistent maximum content width to prevent excessive
    stretching on large screens.
-   Adapt navigation for mobile devices with a compact, accessible menu.
-   Stack multi-column sections vertically on smaller screens.
-   Ensure buttons, links, and form controls are touch-friendly.
-   Prevent horizontal scrolling, overlapping content, and clipped
    elements.
-   Maintain appropriate spacing, alignment, and readability across
    breakpoints.
-   Support portrait and landscape orientations on mobile devices and
    tablets.
-   Do not rely on user-agent or device-name detection to achieve
    responsive behaviour.

#### Device-Specific Layout Expectations

  -----------------------------------------------------------------------
  Component         Mobile            iPad / Tablet     MacBook / Desktop
  ----------------- ----------------- ----------------- -----------------
  Navigation        Compact mobile    Adaptable         Full navigation
                    menu              navigation        

  Hero section      Stacked layout    Balanced layout   Side-by-side
                                                        layout where
                                                        suitable

  About section     Single column     Balanced image    Side-by-side
                                      and text          layout where
                                                        suitable

  Curriculum cards  Single column     Two columns where Grid layout
                                      suitable          

  Teaching services Stacked content   Two-column layout Multi-column
                                      where suitable    layout where
                                                        appropriate

  Contact form      Full-width fields Optimised form    Balanced form
                                      width             layout

  Footer            Stacked sections  Adaptable columns Multi-column
                                                        layout
  -----------------------------------------------------------------------

#### Responsive Acceptance Criteria

1.  The website must work correctly on mobile phones, iPads, tablets,
    MacBooks, laptops, and desktop screens.
2.  No horizontal scrolling should occur at supported screen sizes.
3.  Text must remain readable without requiring users to zoom.
4.  Images, cards, buttons, and forms must resize and reposition
    appropriately.
5.  Navigation must be easy to access and operate on touch devices.
6.  The brand colours and visual identity must remain consistent across
    devices.
7.  All website sections must maintain appropriate spacing, alignment,
    and proportions.
8.  Responsive behaviour must be validated using browser developer tools
    and representative physical devices.
9.  The website must remain usable in both portrait and landscape
    orientations.

### 4.7 Visual Restrictions

Avoid:

-   Heavy visual effects and excessive animations.
-   Unnecessary carousels.
-   Large decorative backgrounds that compete with the content.
-   Excessive icons or illustrations.
-   Inconsistent card styles and corner radii.
-   Layouts that sacrifice readability for visual effects.

------------------------------------------------------------------------

## 5. Technical and Non-Functional Requirements

### 5.1 Application Architecture

-   Build the website as one lightweight React frontend application.
-   Use a single-page architecture with reusable components.
-   Do not introduce microservices or a complex backend for the initial
    release.
-   Keep content separate from presentation where practical so that text
    and contact details can be updated easily.

### 5.2 Recommended Technology Stack

  Area              Recommended Technology
  ----------------- ------------------------
  Frontend          React.js
  Language          TypeScript
  Build Tool        Vite
  Styling           Minimal custom CSS
  Icons             Lucide React, optional
  Enquiry Form      EmailJS or Formspree
  Communication     WhatsApp Click-to-Chat
  Version Control   Git and GitHub
  Hosting           Vercel or Netlify

Use only the libraries needed for the website. Avoid adding dependencies
without a clear functional benefit.

### 5.3 Suggested Project Structure

``` text
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
│   │   ├── About.tsx
│   │   ├── Expertise.tsx
│   │   ├── Services.tsx
│   │   ├── TeachingModes.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
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

This is a suggested structure. Components may be combined or adjusted
where that keeps the implementation simpler without reducing
maintainability.

### 5.4 Enquiry Form Integration

-   Use EmailJS or Formspree for the initial release.
-   Configure the service using its documented public integration
    method.
-   Never place private API keys, secret tokens, or credentials in
    frontend source code.
-   Add client-side validation and spam protection.
-   If server-side processing becomes necessary, use a secure serverless
    function or backend endpoint and store secrets securely.

### 5.5 WhatsApp Integration

Use the official WhatsApp Click-to-Chat URL format with the verified
tutor contact number and an encoded prefilled message. The number must
be provided by the business owner before deployment.

### 5.6 Responsive Performance

-   Optimise images and use suitable modern formats where supported.
-   Use appropriately sized images for different screen widths.
-   Lazy-load non-critical images where appropriate.
-   Avoid unnecessary JavaScript and large dependencies.
-   Minimise layout shifts and ensure content remains usable while
    assets load.
-   Validate performance on mobile as well as desktop.

### 5.7 SEO Requirements

-   Use semantic HTML elements.
-   Provide a unique page title and meta description.
-   Use a logical heading hierarchy.
-   Add descriptive alternative text to meaningful images.
-   Include Open Graph metadata.
-   Provide a sitemap and `robots.txt`.
-   Use relevant, natural search terms relating to Hindi tuition and the
    supported curricula.
-   Consider appropriate structured data where accurate business details
    are available.
-   Ensure the deployed implementation is discoverable by search
    engines. If client-side rendering limits indexing, consider a
    lightweight prerendering or static-generation solution without
    unnecessarily complicating the architecture.

### 5.8 Security and Privacy

-   Serve the website over HTTPS.
-   Validate form inputs.
-   Use spam protection for the enquiry form.
-   Do not expose private credentials in client-side code.
-   Collect only information needed to respond to enquiries.
-   Do not publish personal contact details or the residence address
    unless the tutor explicitly approves.
-   Share the offline teaching location privately after an enquiry.

### 5.9 Browser Compatibility

Support the latest stable versions of:

-   Google Chrome
-   Apple Safari
-   Mozilla Firefox
-   Microsoft Edge

Pay particular attention to Safari compatibility on iPhones, iPads, and
MacBooks.

### 5.10 Maintainability

-   Use reusable React components.
-   Keep styles organised and avoid duplicated CSS.
-   Keep website content and configuration easy to update.
-   Use clear naming conventions.
-   Keep dependencies and implementation complexity to a minimum.

------------------------------------------------------------------------

## 6. Suggested Website Navigation

Recommended navigation:

1.  Home
2.  About
3.  Expertise
4.  Teaching Approach
5.  Learning Modes
6.  FAQs
7.  Contact

The navigation may use anchor links to the corresponding sections of the
single-page website.

------------------------------------------------------------------------

## 7. Recommended User Journey

1.  A visitor opens the Bhasha Gyaan website.
2.  The hero section introduces Abha Mundra and her teaching experience.
3.  The visitor reviews the tutor profile and supported curricula.
4.  The visitor explores the teaching expertise and learning approach.
5.  The visitor reviews online and offline class arrangements.
6.  If considering offline classes, the visitor sees that classes are
    held at the tutor's residence and that students must travel there.
7.  The visitor submits the enquiry form or starts a WhatsApp
    conversation.
8.  The tutor receives the enquiry and follows up directly.

------------------------------------------------------------------------

## 8. Frequently Asked Questions

The following questions are recommended for the FAQ section. Answers
should be reviewed by the tutor before publication.

1.  Which curricula do you support?
2.  Do you teach beginners?
3.  Do you provide support for Hindi reading, writing, grammar, and
    speaking?
4.  Are online classes available?
5.  Are offline classes available?
6.  Where are offline classes conducted?
7.  Do students need to visit the tutor's residence for offline classes?
8.  Does the tutor provide home visits?
9.  Do you help students prepare for examinations?
10. Are individual or group sessions available?
11. Can I enquire about a demo class?
12. How can I find out about class timings and fees?

**Required clarification in the offline FAQ:**

Offline classes are conducted at Abha Mundra's residence. Students must
travel to the tutor's residence. Home visits by the tutor are not
available. The location details can be shared upon enquiry.

Do not publish specific fees, schedules, group sizes, or demo-class
availability until confirmed by the tutor.

------------------------------------------------------------------------

## 9. Content and Information Dependencies

The following information must be supplied or confirmed before launch:

  Item                Required Input
  ------------------- ------------------------------------------------
  Tutor photograph    Approved professional photograph, if available
  WhatsApp number     Verified number with country code
  Email address       Email address for enquiries
  Offline location    Address to share privately upon enquiry
  Class timings       Confirmed availability, if to be published
  Fees                Confirmed fee information, if to be published
  Testimonials        Genuine approved testimonials, if available
  Social profiles     Official profile links, if to be displayed
  Teaching approach   Tutor-approved description
  Demo class          Confirmation of whether a free demo is offered

Do not invent missing business information. Use an enquiry call to
action until the relevant details are confirmed.

------------------------------------------------------------------------

## 10. Acceptance Criteria

The initial release will be considered complete when:

### Business and Content

-   Bhasha Gyaan is presented as the Hindi teaching brand.
-   Abha Mundra is identified as the Hindi Language Educator.
-   The website accurately states 20+ years of teaching experience.
-   IGCSE and A-Level teaching certifications are represented
    accurately.
-   CBSE, IGCSE, IB, and A-Level curricula are listed.
-   Teaching expertise and services are clearly explained.
-   Online and offline learning modes are described accurately.
-   Offline classes are clearly identified as taking place at the
    tutor's residence.
-   The website explicitly states that students must visit the residence
    and that tutor home visits are not available.

### Functionality

-   Navigation links move visitors to the relevant sections.
-   Enquiry form validation works.
-   Enquiry submissions are delivered to the configured destination.
-   Success and failure feedback is displayed.
-   Offline and online conditional messages appear correctly.
-   WhatsApp links open a conversation with the verified number and
    prefilled message.
-   The floating WhatsApp button does not obstruct important content or
    controls.

### Design and Responsiveness

-   The website follows the approved brand palette.
-   The design remains minimal, elegant, and consistent.
-   The website adapts to mobile, iPad/tablet, MacBook, laptop, and
    desktop screen sizes.
-   No horizontal scrolling, content overlap, or clipped controls occur
    at supported viewport sizes.
-   Text, images, navigation, cards, and forms adapt appropriately.
-   Touch targets are comfortable to use on mobile and tablet devices.
-   Portrait and landscape layouts remain usable.

### Technical Quality

-   The React application builds and runs successfully.
-   The website works in supported browsers.
-   Images and assets are optimised.
-   Semantic HTML, page metadata, and image alt text are implemented.
-   No private credentials are exposed in frontend code.
-   The implementation avoids unnecessary libraries and architectural
    complexity.

------------------------------------------------------------------------

## 11. Brand Positioning and Website Messaging

### Brand Name

**Bhasha Gyaan**

### Brand Descriptor

**Hindi Teaching**

### Brand Attribution

**Bhasha Gyaan by Abha Mundra**

### Suggested Tagline

**Discover the Beauty of Hindi. Master the Language with Confidence.**

### Suggested Supporting Message

Learn Hindi with Abha Mundra, an experienced Hindi language educator
with over 20 years of teaching experience. Explore structured Hindi
learning support for CBSE, IGCSE, IB, and A-Level curricula.

### Recommended Calls to Action

-   Book a Free Demo Class
-   Connect on WhatsApp
-   Explore Teaching Services
-   Send an Enquiry

The "Free Demo Class" call to action should be used only after the tutor
confirms that a free demo is offered. Otherwise, use "Enquire About
Classes".

------------------------------------------------------------------------

## 12. Implementation Priorities

  -----------------------------------------------------------------------
  Priority                Feature                 Release
  ----------------------- ----------------------- -----------------------
  High                    React single-page       Initial
                          website foundation      

  High                    Home / Hero section     Initial

  High                    Tutor profile and       Initial
                          experience              

  High                    Curriculum and teaching Initial
                          expertise               

  High                    Teaching services and   Initial
                          methodology             

  High                    Online and offline      Initial
                          class information       

  High                    Clear residence-based   Initial
                          offline class policy    

  High                    Enquiry form with       Initial
                          validation              

  High                    WhatsApp integration    Initial

  High                    Responsive CSS for      Initial
                          mobile, iPad, MacBook,  
                          laptop, and desktop     

  High                    Minimal brand-aligned   Initial
                          design                  

  High                    Basic SEO and           Initial
                          performance             
                          optimisation            

  Medium                  FAQ section             Initial

  Medium                  Genuine testimonials,   Optional initial
                          if approved             

  Future                  Google Maps or location Only if the tutor
                          map                     chooses to publish
                                                  location details

  Future                  Blog or learning        Future enhancement
                          resources               

  Future                  Student portal or       Future enhancement
                          learning management     
                          features                

  Future                  Online payments and     Future enhancement
                          class booking           
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 13. Final Implementation Guidelines

1.  Build a lightweight React and TypeScript single-page website using
    Vite.
2.  Use reusable components, but avoid unnecessary abstraction.
3.  Keep styling in a small, organised custom CSS structure.
4.  Use the exact brand colours: `#EAE6DE`, `#226192`, and `#EF8557`.
5.  Implement mobile-first responsive CSS and validate the experience on
    mobile phones, iPads, MacBooks, laptops, and desktop screens.
6.  Keep the website visually minimal, elegant, and editorial.
7.  Make the tutor's experience, curricula, teaching services, and
    contact options easy to understand.
8.  State the offline teaching arrangement prominently and consistently:
    students attend classes at the tutor's residence; the tutor does not
    provide home visits.
9.  Use a lightweight enquiry form integration and WhatsApp
    Click-to-Chat.
10. Do not invent contact details, address, fees, schedules,
    testimonials, qualifications, or availability.
11. Optimise for accessibility, performance, SEO, and maintainability.
12. Keep the initial release focused on the portfolio and enquiry
    experience. Add larger features only when there is a confirmed
    business requirement.

------------------------------------------------------------------------

## 14. Project Success Criteria

The project will be successful when prospective students and parents
can:

-   Understand who Abha Mundra is and her Hindi teaching experience.
-   Identify whether their curriculum is supported.
-   Understand the subjects and skills covered.
-   Clearly distinguish online classes from residence-based offline
    classes.
-   Understand that offline students must travel to the tutor's
    residence and that home visits are not available.
-   Submit an enquiry or contact the tutor through WhatsApp without
    friction.
-   Use the website comfortably across mobile phones, iPads, MacBooks,
    laptops, and desktop screens.

The final website should establish a clear, trustworthy, and accessible
digital presence for **Bhasha Gyaan by Abha Mundra**.
