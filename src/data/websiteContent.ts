export interface CurriculumItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
}

export interface ExpertiseArea {
  id: string;
  title: string;
  hindiTitle?: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  focusAreas: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  highlight?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface WebsiteContentData {
  brand: {
    name: string;
    descriptor: string;
    attribution: string;
    tagline: string;
    headlinePart1: string;
    headlinePart2: string;
    supportingText: string;
    ctaEnquire: string;
    ctaWhatsApp: string;
    ctaDiscuss: string;
    ctaSchedule: string;
  };
  tutor: {
    name: string;
    title: string;
    experienceYears: string;
    experienceLabel: string;
    curriculaCount: string;
    curriculaLabel: string;
    certifiedBadge: string;
    certifiedLabel: string;
    modesCount: string;
    modesLabel: string;
    credentialsTitle: string;
    certifications: string[];
    certDescription: string;
    curriculaTitle: string;
    curricula: string[];
    bio: string[];
    philosophy: string;
    cardPoints: string[];
    cardNote: string;
  };
  contactInfo: {
    whatsappNumber: string;
    displayWhatsApp: string;
    email: string;
    prefilledMessage: string;
    offlineLocationNotice: string;
  };
  curricula: CurriculumItem[];
  learningAreas: ExpertiseArea[];
  teachingMethodology: ServiceItem[];
  learningModes: {
    online: {
      badge: string;
      title: string;
      description: string;
      features: string[];
      notice: string;
      ctaText: string;
    };
    offline: {
      badge: string;
      title: string;
      description: string;
      features: string[];
      mandatoryPolicy: {
        heading: string;
        body: string;
      };
      ctaText: string;
    };
  };
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  faqs: FaqItem[];
  contactSection: {
    sectionTag: string;
    title: string;
    subtitle: string;
    sidebarTitle: string;
    sidebarText: string;
    sidebarButton: string;
    emailLabel: string;
    communicationLabel: string;
    communicationValue: string;
    offlineLocationLabel: string;
    offlineLocationValue: string;
    policyHeading: string;
    policyBody: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    curriculumLabel: string;
    curriculumOptions: { value: string; label: string }[];
    modeLabel: string;
    modeOnline: string;
    modeOffline: string;
    offlineNotice: string;
    onlineNotice: string;
    messageLabel: string;
    messagePlaceholder: string;
    privacyNotice: string;
    submitButton: string;
    submittingButton: string;
    successHeading: string;
    successMessage: string;
    errorHeading: string;
    errorMessage: string;
    validationErrors: {
      name: string;
      email: string;
      emailFormat: string;
      phone: string;
      phoneFormat: string;
      curriculum: string;
      message: string;
    };
  };
  footer: {
    description: string;
    offlineNoticeHeading: string;
    offlineNoticeBody: string;
    quickLinksHeading: string;
    curriculaHeading: string;
    contactHeading: string;
    allRightsReserved: string;
    backToTop: string;
  };
  navigation: NavItem[];
}

export const websiteContentEn: WebsiteContentData = {
  brand: {
    name: "Bhasha Gyaan",
    descriptor: "Hindi Teaching",
    attribution: "Bhasha Gyaan by Abha Mundra",
    tagline: "Discover the Beauty of Hindi. Master the Language with Confidence.",
    headlinePart1: "Discover the Beauty of Hindi.",
    headlinePart2: "Master the Language with Confidence.",
    supportingText:
      "Learn Hindi with Abha Mundra, an experienced Hindi language educator with over 20 years of teaching experience. Structured guidance tailored to your learning needs and curriculum.",
    ctaEnquire: "Enquire About Classes",
    ctaWhatsApp: "Connect on WhatsApp",
    ctaDiscuss: "Discuss Your Syllabus Requirements",
    ctaSchedule: "Schedule an Assessment",
  },

  tutor: {
    name: "Abha Mundra",
    title: "Hindi Language Educator",
    experienceYears: "20+",
    experienceLabel: "Years of Hindi Teaching",
    curriculaCount: "4",
    curriculaLabel: "Curricula Mastered",
    certifiedBadge: "Certified",
    certifiedLabel: "IGCSE & A-Level Educator",
    modesCount: "2 Modes",
    modesLabel: "Online & Residence Offline",
    credentialsTitle: "Confirmed Credentials & Experience",
    certifications: [
      "IGCSE Teaching Certification",
      "A-Level Teaching Certification",
    ],
    certDescription: "Cambridge International Examinations certified",
    curriculaTitle: "Curricula Supported:",
    curricula: ["CBSE", "IGCSE", "IB", "A-Levels"],
    bio: [
      "Bhasha Gyaan by Abha Mundra offers Hindi language learning and academic support, backed by over 20 years of teaching experience. Students develop their Hindi language skills through structured guidance tailored to their learning needs and school curriculum.",
      "With specialized certifications in IGCSE and A-Level Hindi pedagogy and extensive experience across CBSE and International Baccalaureate (IB) frameworks, Abha provides student-centered instruction that bridges foundational language literacy with advanced academic rigor.",
      "Her approach prioritizes conceptual clarity in grammar, authentic spoken communication, and analytical comprehension, ensuring students feel confident in both daily expression and curriculum assessments.",
    ],
    philosophy:
      "Language learning thrives on patience, consistency, and structured clarity. Rather than rote memorization, instruction is centered on understanding linguistic logic, cultural context, and systematic practice.",
    cardPoints: [
      "20+ Years of dedicated classroom and private tuition",
      "Certified in Cambridge IGCSE & A-Level Hindi",
      "Comprehensive Grammar, Literature & Conversation",
      "Customized pace for CBSE, IGCSE, IB & A-Levels",
    ],
    cardNote:
      "Offline classes held at tutor's residence • Online sessions available worldwide",
  },

  contactInfo: {
    whatsappNumber: "",
    displayWhatsApp: "WhatsApp Chat Available",
    email: "enquiry@bhashagyaan.com",
    prefilledMessage:
      "Hello! I am interested in Hindi classes at Bhasha Gyaan. Could you please share more details about your courses and availability?",
    offlineLocationNotice:
      "Exact residence address shared privately upon enquiry confirmation.",
  },

  curricula: [
    {
      id: "cbse",
      name: "CBSE Curriculum",
      tagline: "Core & Elective Hindi Courses",
      description:
        "Comprehensive support for CBSE Course A and Course B syllabi, focusing on grammar precision, textbook prose, poetry analysis, and board examination patterns.",
      features: [
        "Structured Vyakaran (Grammar) mastery",
        "Kavyanjali & prose chapter analysis",
        "Creative writing: Essay, Letter, & Report writing",
        "CBSE board format practice papers",
      ],
    },
    {
      id: "igcse",
      name: "Cambridge IGCSE",
      tagline: "First & Second Language Hindi",
      description:
        "Certified IGCSE coaching designed to develop analytical reading, concise summary writing, grammar, and communicative proficiency in line with Cambridge guidelines.",
      features: [
        "Certified Cambridge IGCSE pedagogy",
        "Reading comprehension & critical evaluation",
        "Directed writing & continuous composition",
        "Past papers and rubric-focused guidance",
      ],
    },
    {
      id: "ib",
      name: "International Baccalaureate (IB)",
      tagline: "Language B (SL & HL) & Ab Initio",
      description:
        "In-depth guidance for IB Hindi learners emphasizing contextual understanding, cultural themes, text analysis, and both written and oral assessment criteria.",
      features: [
        "Prescribed IB themes exploration",
        "Individual Oral (IO) preparation & spoken fluency",
        "Paper 1 productive skills (text types & formats)",
        "Paper 2 receptive skills (reading comprehension)",
      ],
    },
    {
      id: "alevels",
      name: "Cambridge International A-Levels",
      tagline: "Advanced Hindi Language & Literature",
      description:
        "Certified A-Level coaching covering advanced grammar, linguistic nuance, literary texts, topic essays, and rigorous critical analysis.",
      features: [
        "Certified A-Level teaching standards",
        "Advanced essay writing on contemporary themes",
        "Literary text commentary and critique",
        "In-depth grammatical accuracy & nuance",
      ],
    },
  ],

  learningAreas: [
    {
      id: "fundamentals",
      title: "Fundamentals & Pronunciation",
      hindiTitle: "वर्णमाला एवं उच्चारण",
      description:
        "Varnamala (alphabets), Matras (vowel signs), correct phonetic pronunciation, and basic sentence construction for early and intermediate learners.",
    },
    {
      id: "grammar",
      title: "Hindi Grammar (Vyakaran)",
      hindiTitle: "व्याकरण",
      description:
        "Systematic coverage of Sangya, Sarvanam, Kriya, Kaal, Karak, Sandhi, Samas, and sentence transformation with rule-grounded clarity.",
    },
    {
      id: "reading-writing",
      title: "Reading & Writing Skills",
      hindiTitle: "पठन एवं लेखन",
      description:
        "Fluent Devanagari script writing, handwriting improvement, correct spelling (Vartani), and expressive reading aloud.",
    },
    {
      id: "comprehension",
      title: "Reading Comprehension",
      hindiTitle: "अपठित बोध",
      description:
        "Strategies for decoding unseen passages (Apatit Gadyansh & Padyansh), answering inferential questions, and vocabulary in context.",
    },
    {
      id: "creative-writing",
      title: "Creative & Essay Writing",
      hindiTitle: "रचनात्मक लेखन",
      description:
        "Structured Nibandh (essays), Patra (formal & informal letters), Anuchhed (paragraphs), Samvaad (dialogues), and Vigyapan (advertisements).",
    },
    {
      id: "spoken-communication",
      title: "Spoken Hindi & Communication",
      hindiTitle: "वार्तालाप एवं अभिव्यक्ति",
      description:
        "Building confidence in conversational Hindi, situational speaking, vocabulary expansion, and clear articulation for school presentations and interviews.",
    },
    {
      id: "academic-coaching",
      title: "Curriculum-Specific Coaching",
      hindiTitle: "पाठ्यक्रम मार्गदर्शन",
      description:
        "Targeted support mapped directly to school textbooks, prescribed syllabi, coursework, and internal assessment submissions.",
    },
    {
      id: "exam-prep",
      title: "Examination Preparation",
      hindiTitle: "परीक्षा की तैयारी",
      description:
        "Reviewing marking schemes, time management techniques, solving previous years' papers, and refining answering methodologies.",
    },
  ],

  teachingMethodology: [
    {
      id: "foundations",
      title: "Diagnostic Assessment & Foundation Building",
      description:
        "Every student starts with a gentle assessment of their current proficiency in script, vocabulary, and grammar to identify strengths and learning gaps.",
      focusAreas: [
        "Personalized pace according to student readiness",
        "Reinforcing Devanagari script and phonetic rules",
        "Overcoming hesitation and building early confidence",
      ],
    },
    {
      id: "concept-clarity",
      title: "Grammar with Logic, Not Just Rules",
      description:
        "Hindi grammar rules are broken down into logical principles with relatable examples, helping learners retain concepts naturally instead of relying on rote cramming.",
      focusAreas: [
        "Clear rule breakdown with comparative examples",
        "Frequent short drills and contextual sentence exercises",
        "Correction of recurring grammatical and spelling errors",
      ],
    },
    {
      id: "integrated-skills",
      title: "Four-Pillared Language Development",
      description:
        "Balanced integration of Listening (Suno), Speaking (Bolo), Reading (Padho), and Writing (Likho) to foster holistic language mastery.",
      focusAreas: [
        "Expressive reading for tone and flow",
        "Structured written compositions following marking rubrics",
        "Oral discussions that enrich active vocabulary",
      ],
    },
    {
      id: "curriculum-alignment",
      title: "Syllabus Alignment & Assessment Readiness",
      description:
        "Direct alignment with CBSE, IGCSE, IB, or A-Level guidelines, preparing learners thoroughly for school internal assessments and final board examinations.",
      focusAreas: [
        "In-depth analysis of prescribed literature and poetry",
        "Marking scheme breakdown and answering techniques",
        "Structured practice with timed sample question papers",
      ],
    },
  ],

  learningModes: {
    online: {
      badge: "Flexible & Global",
      title: "Online Classes",
      description:
        "Interactive virtual sessions accessible from anywhere. Students engage in real-time reading, digital whiteboard exercises, and live verbal practice.",
      features: [
        "One-on-one personalized attention",
        "Flexible scheduling discussed during enquiry",
        "Digital learning resources & worksheets provided",
        "Open to students across India and international curricula",
      ],
      notice:
        "Online classes are available. Please share your preferred schedule and learning requirements in the enquiry form so that availability and arrangements can be discussed.",
      ctaText: "Enquire for Online Classes",
    },
    offline: {
      badge: "In-Person at Tutor's Residence",
      title: "Offline Classes",
      description:
        "Face-to-face sessions held in an attentive, academic home environment, ideal for focused guidance, direct handwriting review, and dedicated study time.",
      features: [
        "Direct personal instruction and real-time correction",
        "In-depth handwriting and script formation oversight",
        "Quiet, dedicated teaching environment",
        "Location details provided privately upon enquiry",
      ],
      mandatoryPolicy: {
        heading: "Important Offline Class Policy",
        body:
          "Offline classes are conducted exclusively at Abha Mundra's residence. Students are required to travel to the teaching location to attend in-person sessions. Home visits by the tutor are not available. The location details can be shared privately upon enquiry.",
      },
      ctaText: "Enquire for Offline Classes",
    },
  },

  whyChooseUs: [
    {
      title: "20+ Years of Teaching Experience",
      description:
        "Two decades of dedicated classroom and private tuition experience guiding students to master Hindi with clarity and poise.",
    },
    {
      title: "Certified IGCSE & A-Level Educator",
      description:
        "Holds official teaching certifications for Cambridge IGCSE and A-Level Hindi, ensuring full alignment with international exam boards.",
    },
    {
      title: "Multi-Curriculum Expertise",
      description:
        "Demonstrated familiarity with CBSE (Course A & B), Cambridge IGCSE, IB (SL, HL, Ab Initio), and A-Level syllabi and marking schemes.",
    },
    {
      title: "Comprehensive Language Coverage",
      description:
        "From foundational Devanagari script and phonetic basics to advanced literature critique, grammar logic, and creative composition.",
    },
    {
      title: "Clear, Respectful Learning Modes",
      description:
        "Transparent learning arrangements with flexible online sessions and structured, residence-based offline tuition.",
    },
    {
      title: "Student-Centered Mentorship",
      description:
        "Encouraging, structured guidance adapted to each student's current proficiency, school timeline, and specific learning pace.",
    },
  ],

  faqs: [
    {
      id: "curricula",
      question: "Which curricula do you support?",
      answer:
        "Abha Mundra supports students following CBSE, Cambridge IGCSE (First and Second Language), International Baccalaureate (IB Language B and Ab Initio), and Cambridge International A-Level curricula.",
    },
    {
      id: "beginners",
      question: "Do you teach beginners?",
      answer:
        "Yes. Instruction covers absolute beginners who need to learn the Devanagari alphabet (Varnamala), pronunciation, and basic vocabulary, as well as students seeking academic reinforcement for their school syllabus.",
    },
    {
      id: "skills-covered",
      question: "Do you provide support for Hindi reading, writing, grammar, and speaking?",
      answer:
        "Yes, comprehensive instruction covers all core language skills: reading fluency, handwriting and spelling, grammar (Vyakaran), reading comprehension (Apatit Gadyansh/Padyansh), creative essay writing (Nibandh), and conversational Hindi.",
    },
    {
      id: "online-available",
      question: "Are online classes available?",
      answer:
        "Yes, online Hindi classes are available. Interactive sessions are conducted virtually with live guidance. You can enquire via the contact form or WhatsApp to discuss schedule availability.",
    },
    {
      id: "offline-available",
      question: "Are offline classes available?",
      answer:
        "Yes, offline in-person classes are available. Please review the offline teaching policy regarding location and travel arrangements.",
    },
    {
      id: "offline-location",
      question: "Where are offline classes conducted?",
      answer:
        "Offline classes take place exclusively at Abha Mundra's residence. The exact location details and address are shared privately upon enquiry confirmation.",
      highlight: true,
    },
    {
      id: "offline-travel",
      question: "Do students need to visit the tutor's residence for offline classes?",
      answer:
        "Yes. Students are required to travel to the tutor's residence to attend all in-person classes.",
      highlight: true,
    },
    {
      id: "home-visits",
      question: "Does the tutor provide home visits?",
      answer:
        "No. The tutor does not travel to students' homes and does not provide home visits under any circumstances. In-person classes are held only at the tutor's residence.",
      highlight: true,
    },
    {
      id: "exam-prep",
      question: "Do you help students prepare for examinations?",
      answer:
        "Yes. Guidance includes curriculum-aligned revision, solving past board papers, understanding rubric expectations, refining time management, and practicing answer presentation.",
    },
    {
      id: "class-format",
      question: "Are individual or group sessions available?",
      answer:
        "Class formats depend on student needs and availability. You can enquire about individual or small-group sessions via the enquiry form or WhatsApp.",
    },
    {
      id: "demo-class",
      question: "Can I enquire about a demo class?",
      answer:
        "Yes, you can enquire about demo class availability through the contact form or via WhatsApp. The tutor will get in touch to confirm availability and schedule.",
    },
    {
      id: "fees-timings",
      question: "How can I find out about class timings and fees?",
      answer:
        "Class timings and fee structures depend on the curriculum, grade level, and mode of learning (online or offline). Please submit an enquiry form or message on WhatsApp for customized information.",
    },
  ],

  contactSection: {
    sectionTag: "Get in Touch",
    title: "Enquire About Hindi Classes",
    subtitle:
      "Submit your learning requirements below or reach out via WhatsApp for details on availability, curriculum support, and arrangements.",
    sidebarTitle: "Connect Directly",
    sidebarText:
      "Have immediate questions about course schedules, syllabus alignment, or fees? Feel free to send a WhatsApp message.",
    sidebarButton: "Message on WhatsApp",
    emailLabel: "Email Enquiries",
    communicationLabel: "Direct Communication",
    communicationValue: "Available via WhatsApp & Email",
    offlineLocationLabel: "Offline Location",
    offlineLocationValue:
      "Tutor's residence (exact address shared upon enquiry confirmation)",
    policyHeading: "In-Person Teaching Policy",
    policyBody:
      "Offline classes are conducted exclusively at Abha Mundra's residence. Students must travel to the tutor's residence. Home visits by the tutor are not available.",
    formTitle: "Send an Enquiry",
    formSubtitle:
      "Fill in the form and Abha Mundra will contact you to discuss schedules and course details.",
    nameLabel: "Parent / Student Name",
    namePlaceholder: "e.g. Priya Sharma",
    emailInputLabel: "Email Address",
    emailPlaceholder: "name@example.com",
    phoneLabel: "WhatsApp / Contact Number",
    phonePlaceholder: "+91 98765 43210",
    curriculumLabel: "Curriculum / Syllabus",
    curriculumOptions: [
      { value: "CBSE", label: "CBSE (Course A / Course B)" },
      { value: "IGCSE", label: "Cambridge IGCSE (First / Second Language)" },
      { value: "IB", label: "International Baccalaureate (IB)" },
      { value: "A-Levels", label: "Cambridge International A-Levels" },
      { value: "Other", label: "Other / Foundational Hindi Learning" },
    ],
    modeLabel: "Preferred Learning Mode",
    modeOnline: "Online Classes (Virtual)",
    modeOffline: "Offline (At Tutor's Residence)",
    offlineNotice:
      "Notice: Offline classes are conducted at Abha Mundra's residence. Students are required to travel to the teaching location to attend in-person sessions. Home visits by the tutor are not available. The location details can be shared upon enquiry.",
    onlineNotice:
      "Online Mode: Online classes are available. Please share your preferred schedule and learning requirements in the message so that availability and arrangements can be discussed.",
    messageLabel: "Message / Learning Needs",
    messagePlaceholder:
      "Tell us about the student's current grade, school, specific areas needing help (e.g. grammar, essay writing, board exam preparation), and preferred days/times.",
    privacyNotice:
      "Your contact details are kept private and used only to respond to this enquiry.",
    submitButton: "Send Enquiry",
    submittingButton: "Sending Enquiry...",
    successHeading: "Enquiry Sent Successfully",
    successMessage:
      "Thank you! Your enquiry has been sent to Abha Mundra. You will receive a response shortly.",
    errorHeading: "Submission Error",
    errorMessage:
      "There was an issue sending your enquiry. Please reach out directly via WhatsApp or email.",
    validationErrors: {
      name: "Please enter parent or student name.",
      email: "Please enter an email address.",
      emailFormat: "Please provide a valid email format (e.g. name@domain.com).",
      phone: "Please enter a contact number.",
      phoneFormat: "Please enter a valid phone or WhatsApp number.",
      curriculum: "Please select a curriculum.",
      message: "Please share your enquiry or learning requirements.",
    },
  },

  footer: {
    description:
      "Structured Hindi coaching with over 20 years of experience, supporting students across CBSE, Cambridge IGCSE, IB, and A-Level curricula.",
    offlineNoticeHeading: "Offline Class Notice:",
    offlineNoticeBody:
      "Conducted exclusively at Abha Mundra's residence. Home visits by the tutor are not available.",
    quickLinksHeading: "Quick Links",
    curriculaHeading: "Curricula",
    contactHeading: "Contact",
    allRightsReserved: "All rights reserved.",
    backToTop: "Back to Top",
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Teaching Approach", href: "#approach" },
    { label: "Learning Modes", href: "#modes" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],
};

export const websiteContentHi: WebsiteContentData = {
  brand: {
    name: "भाषा ज्ञान",
    descriptor: "हिंदी शिक्षण",
    attribution: "आभा मूंदड़ा द्वारा भाषा ज्ञान",
    tagline: "हिंदी के सौंदर्य को जानें। आत्मविश्वास के साथ भाषा में प्रवीणता पाएं।",
    headlinePart1: "हिंदी के सौंदर्य को जानें।",
    headlinePart2: "आत्मविश्वास के साथ भाषा में प्रवीणता पाएं।",
    supportingText:
      "20 से अधिक वर्षों के समृद्ध अध्यापन अनुभव वाली हिंदी भाषा शिक्षिका आभा मूंदड़ा से हिंदी सीखें। आपके पाठ्यक्रम और अध्ययन आवश्यकताओं के अनुरूप सुनियोजित एवं संरचित मार्गदर्शन।",
    ctaEnquire: "कक्षाओं के लिए पूछताछ करें",
    ctaWhatsApp: "व्हाट्सएप पर संपर्क करें",
    ctaDiscuss: "अपने पाठ्यक्रम पर चर्चा करें",
    ctaSchedule: "मूल्यांकन सत्र तय करें",
  },

  tutor: {
    name: "आभा मूंदड़ा",
    title: "हिंदी भाषा शिक्षिका",
    experienceYears: "20+",
    experienceLabel: "वर्षों का अध्यापन अनुभव",
    curriculaCount: "4",
    curriculaLabel: "प्रमुख पाठ्यक्रम विशेषज्ञता",
    certifiedBadge: "प्रमाणित",
    certifiedLabel: "IGCSE एवं A-Level शिक्षिका",
    modesCount: "2 माध्यम",
    modesLabel: "ऑनलाइन एवं निवास पर ऑफलाइन",
    credentialsTitle: "प्रमाणित योग्यताएं एवं अनुभव",
    certifications: [
      "कैम्ब्रिज IGCSE शिक्षण प्रमाणन",
      "कैम्ब्रिज A-Level शिक्षण प्रमाणन",
    ],
    certDescription: "कैम्ब्रिज इंटरनेशनल एग्जामिनेशंस द्वारा आधिकारिक प्रमाणित",
    curriculaTitle: "समर्थित पाठ्यक्रम:",
    curricula: ["सीबीएसई (CBSE)", "आईजीसीएसई (IGCSE)", "आईबी (IB)", "ए-लेवल्स (A-Levels)"],
    bio: [
      "आभा मूंदड़ा द्वारा 'भाषा ज्ञान' 20 से अधिक वर्षों के अध्यापन अनुभव के साथ हिंदी भाषा अधिगम और शैक्षणिक सहयोग प्रदान करता है। विद्यार्थी अपनी व्यक्तिगत गति और विद्यालयीन पाठ्यक्रम के अनुरूप संरचित मार्गदर्शन प्राप्त करते हैं।",
      "कैम्ब्रिज IGCSE एवं A-Level हिंदी शिक्षणशास्त्र में विशिष्ट प्रमाणन तथा CBSE और इंटरनेशनल बैकालॉरिएट (IB) पाठ्यक्रमों के व्यापक अनुभव के साथ, आभा जी विद्यार्थी-केंद्रित शिक्षण प्रदान करती हैं जो बुनियादी साक्षरता से लेकर उन्नत साहित्यिक विश्लेषण तक को सहज बनाता है।",
      "उनकी शिक्षण पद्धति व्याकरण की सैद्धांतिक स्पष्टता, प्रामाणिक मौखिक अभिव्यक्ति और विश्लेषणात्मक बोध को प्राथमिकता देती है, जिससे विद्यार्थी दैनिक जीवन और परीक्षा दोनों में पूर्ण आत्मविश्वास का अनुभव करते हैं।",
    ],
    philosophy:
      "भाषा शिक्षण धैर्य, निरंतरता और स्पष्ट संरचना से समृद्ध होता है। रटने के बजाय हमारा बल भाषाई तर्क, सांस्कृतिक संदर्भ और सुनियोजित अभ्यास पर रहता है।",
    cardPoints: [
      "कक्षा एवं व्यक्तिगत अध्यापन का 20+ वर्षों का अनुभव",
      "कैम्ब्रिज IGCSE एवं A-Level हिंदी में प्रमाणित",
      "व्याकरण, साहित्य एवं मौखिक वार्तालाप का समग्र मार्गदर्शन",
      "CBSE, IGCSE, IB एवं A-Levels के अनुरूप व्यक्तिगत गति",
    ],
    cardNote:
      "ऑफलाइन कक्षाएं शिक्षिका के निवास पर • ऑनलाइन कक्षाएं वैश्विक स्तर पर उपलब्ध",
  },

  contactInfo: {
    whatsappNumber: "",
    displayWhatsApp: "व्हाट्सएप चैट उपलब्ध",
    email: "enquiry@bhashagyaan.com",
    prefilledMessage:
      "नमस्ते! मैं भाषा ज्ञान में हिंदी कक्षाओं के विषय में जानकारी प्राप्त करना चाहता/चाहती हूँ। क्या आप पाठ्यक्रमों और समय-सारणी का विवरण साझा कर सकती हैं?",
    offlineLocationNotice:
      "पूछताछ की पुष्टि के बाद निवास स्थान का सटीक पता व्यक्तिगत रूप से साझा किया जाता है।",
  },

  curricula: [
    {
      id: "cbse",
      name: "सीबीएसई (CBSE)",
      tagline: "कोर एवं इलेक्टिव हिंदी पाठ्यक्रम",
      description:
        "सीबीएसई कोर्स 'ए' और कोर्स 'बी' के लिए व्यापक मार्गदर्शन; व्याकरण की शुद्धता, पाठ्यपुस्तक गद्य-पद्य विश्लेषण और बोर्ड परीक्षा पैटर्न पर विशेष ध्यान।",
      features: [
        "व्यवस्थित व्याकरण (संज्ञा, सर्वनाम, कारक, संधि, समास)",
        "काव्यांजलि एवं गद्य पाठों का गहन भावार्थ व विश्लेषण",
        "रचनात्मक लेखन: निबंध, पत्र, अनुच्छेद एवं विज्ञापन लेखन",
        "बोर्ड परीक्षा पैटर्न पर आधारित प्रश्नपत्रों का नियमित अभ्यास",
      ],
    },
    {
      id: "igcse",
      name: "कैम्ब्रिज IGCSE",
      tagline: "प्रथम एवं द्वितीय भाषा हिंदी",
      description:
        "कैम्ब्रिज मानकों के अनुसार विश्लेषणात्मक पठन, सार-लेखन (Summary), व्याकरण और संवादात्मक प्रवीणता विकसित करने हेतु प्रमाणित IGCSE कोचिंग।",
      features: [
        "प्रमाणित कैम्ब्रिज IGCSE शिक्षण पद्धति",
        "अपठित गद्यांश बोध एवं समालोचनात्मक मूल्यांकन",
        "निर्देशित लेखन (Directed Writing) एवं निबंध रचना",
        "विगत वर्षों के प्रश्नपत्रों एवं मार्किंग रूब्रिक्स का अभ्यास",
      ],
    },
    {
      id: "ib",
      name: "इंटरनेशनल बैकालॉरिएट (IB)",
      tagline: "भाषा बी (SL & HL) एवं अब इनिशियो",
      description:
        "आईबी हिंदी शिक्षार्थियों के लिए प्रासंगिक सांस्कृतिक संदर्भ, वैश्विक विषय, पाठ विश्लेषण और मौखिक व लिखित परीक्षा मानदंडों का गहन अध्ययन।",
      features: [
        "निर्धारित आईबी वैश्विक विषयों (Themes) का अन्वेषण",
        "व्यक्तिगत मौखिक परीक्षा (Individual Oral - IO) की तैयारी",
        "पेपर 1: पाठ प्रकार एवं विभिन्न प्रारूपों में लेखन कौशल",
        "पेपर 2: ग्रहणशील कौशल (Receptive Skills) पठन बोध",
      ],
    },
    {
      id: "alevels",
      name: "कैम्ब्रिज ए-लेवल्स (A-Levels)",
      tagline: "उन्नत हिंदी भाषा एवं साहित्य",
      description:
        "उन्नत व्याकरण, भाषाई सूक्ष्मताओं, साहित्यिक कृतियों, सामयिक निबंधों और आलोचनात्मक विश्लेषण को समाहित करने वाला प्रमाणित A-Level मार्गदर्शन।",
      features: [
        "प्रमाणित कैम्ब्रिज A-Level अध्यापन मानक",
        "समकालीन सामाजिक विषयों पर गंभीर निबंध लेखन",
        "साहित्यिक ग्रंथों एवं कविताओं की आलोचनात्मक व्याख्या",
        "उच्च स्तरीय व्याकरणिक शुद्धता और शब्द-चयन",
      ],
    },
  ],

  learningAreas: [
    {
      id: "fundamentals",
      title: "वर्णमाला एवं उच्चारण",
      hindiTitle: "वर्णमाला एवं उच्चारण",
      description:
        "स्वर, व्यंजन, मात्राएं, संयुक्त अक्षर, शुद्ध ध्वन्यात्मक उच्चारण और प्राथमिक वाक्य निर्माण का सुदृढ़ अभ्यास।",
    },
    {
      id: "grammar",
      title: "हिंदी व्याकरण (Vyakaran)",
      hindiTitle: "व्याकरण",
      description:
        "संज्ञा, सर्वनाम, क्रिया, काल, कारक, वाच्य, संधि, समास और वाक्य रूपांतरण का नियमों व तार्किक उदाहरणों सहित स्पष्टीकरण।",
    },
    {
      id: "reading-writing",
      title: "पठन एवं लेखन कौशल",
      hindiTitle: "पठन एवं लेखन",
      description:
        "देवनागरी लिपि का सुडौल हस्तलेखन (Handwriting), वर्तनी की शुद्धता (Spelling) और आरोह-अवरोह सहित धाराप्रवाह वाचन।",
    },
    {
      id: "comprehension",
      title: "अपठित बोध (Comprehension)",
      hindiTitle: "अपठित बोध",
      description:
        "अपठित गद्यांश एवं पद्यांश के मूल भाव को समझना, संदर्भ आधारित प्रश्नों के सटीक उत्तर लिखना और शब्दावली संवर्धन।",
    },
    {
      id: "creative-writing",
      title: "रचनात्मक एवं निबंध लेखन",
      hindiTitle: "रचनात्मक लेखन",
      description:
        "संरचित निबंध (Nibandh), औपचारिक व अनौपचारिक पत्र, अनुच्छेद, संवाद एवं विज्ञापन लेखन की प्रभावी तकनीकों का अभ्यास।",
    },
    {
      id: "spoken-communication",
      title: "वार्तालाप एवं मौखिक अभिव्यक्ति",
      hindiTitle: "वार्तालाप एवं अभिव्यक्ति",
      description:
        "दैनिक एवं औपचारिक बातचीत में आत्मविश्वास, शुद्ध उच्चारण, समृद्ध शब्दावली और विद्यालयीन प्रस्तुतियों के लिए संकोच-मुक्ति।",
    },
    {
      id: "academic-coaching",
      title: "पाठ्यक्रम आधारित मार्गदर्शन",
      hindiTitle: "पाठ्यक्रम मार्गदर्शन",
      description:
        "विद्यालय की पाठ्यपुस्तकों, निर्धारित पाठ्यक्रम और आंतरिक मूल्यांकनों के अनुसार चरणबद्ध व समर्पित सहयोग।",
    },
    {
      id: "exam-prep",
      title: "परीक्षा की तैयारी",
      hindiTitle: "परीक्षा की तैयारी",
      description:
        "अंक विभाजन योजना, समय प्रबंधन, मॉडल उत्तर लेखन और विगत वर्षों के बोर्ड प्रश्नपत्रों का समयबद्ध अभ्यास।",
    },
  ],

  teachingMethodology: [
    {
      id: "foundations",
      title: "प्रारंभिक मूल्यांकन एवं बुनियादी तैयारी",
      description:
        "प्रत्येक विद्यार्थी के साथ लिपि, शब्दावली और व्याकरण के प्रारंभिक स्तर का सहज आकलन करके सीखने की गति निर्धारित की जाती है।",
      focusAreas: [
        "विद्यार्थी की सीखने की तत्परता अनुसार व्यक्तिगत गति",
        "देवनागरी लिपि और ध्वन्यात्मक नियमों का सुदृढ़ीकरण",
        "संकोच को दूर कर शुरुआती आत्मविश्वास का निर्माण",
      ],
    },
    {
      id: "concept-clarity",
      title: "तर्कसंगत व्याकरण, केवल रटना नहीं",
      description:
        "व्याकरण के नियमों को सरल एवं तार्किक सिद्धांतों में समझाया जाता है, जिससे विद्यार्थी रटने के स्थान पर स्वाभाविक रूप से नियमों को समझ सकें।",
      focusAreas: [
        "व्यावहारिक उदाहरणों के साथ स्पष्ट नियम-विभाजन",
        "नियमित संक्षिप्त अभ्यास और संदर्भात्मक वाक्य रचना",
        "बार-बार होने वाली व्याकरणिक व वर्तनीगत त्रुटियों का सुधार",
      ],
    },
    {
      id: "integrated-skills",
      title: "भाषा के चार आधार स्तंभों का विकास",
      description:
        "सुनना (श्रवण), बोलना (मौखिक), पढ़ना (पठन) और लिखना (लेखन) का संतुलित समन्वय ताकि भाषा पर सर्वांगीण अधिकार प्राप्त हो सके।",
      focusAreas: [
        "उचित भाव एवं लय के साथ सस्वर पठन",
        "मार्किंग रूब्रिक्स के अनुसार संरचित लिखित रचनाएं",
        "सक्रिय शब्दावली को समृद्ध करने वाली मौखिक चर्चाएं",
      ],
    },
    {
      id: "curriculum-alignment",
      title: "पाठ्यक्रम संरेखण एवं परीक्षा तत्परता",
      description:
        "CBSE, IGCSE, IB या A-Level के दिशानिर्देशों के साथ सीधा संरेखण, जिससे विद्यार्थी आंतरिक मूल्यांकनों व अंतिम बोर्ड परीक्षाओं के लिए पूर्णतः तैयार रहें।",
      focusAreas: [
        "निर्धारित साहित्य एवं कविताओं का गहन अध्ययन",
        "अंक योजना (Marking Scheme) की समझ और उत्तर प्रस्तुति",
        "समयबद्ध मॉडल टेस्ट पेपर्स का निरंतर अभ्यास",
      ],
    },
  ],

  learningModes: {
    online: {
      badge: "सुविधाजनक एवं वैश्विक",
      title: "ऑनलाइन कक्षाएं",
      description:
        "कहीं से भी सुलभ इंटरैक्टिव वर्चुअल सत्र। विद्यार्थी रीयल-टाइम पठन, डिजिटल व्हाइटबोर्ड अभ्यास और जीवंत मौखिक संवाद में संलग्न होते हैं।",
      features: [
        "वन-ऑन-वन व्यक्तिगत मार्गदर्शन एवं ध्यान",
        "पूछताछ के समय सुविधानुसार समय-सारणी पर विचार",
        "डिजिटल अध्ययन सामग्री एवं अभ्यास कार्यपत्रक उपलब्ध",
        "भारत एवं अंतर्राष्ट्रीय पाठ्यक्रमों के विद्यार्थियों हेतु खुला",
      ],
      notice:
        "ऑनलाइन कक्षाएं उपलब्ध हैं। कृपया पूछताछ फॉर्म में अपनी पसंदीदा समय-सारणी और आवश्यकताएं साझा करें ताकि उपलब्धता पर चर्चा की जा सके।",
      ctaText: "ऑनलाइन कक्षाओं के लिए पूछताछ करें",
    },
    offline: {
      badge: "शिक्षिका के निवास पर व्यक्तिगत कक्षाएं",
      title: "ऑफलाइन कक्षाएं",
      description:
        "शांत और अध्ययन-अनुकूल घरेलू वातावरण में व्यक्तिगत मार्गदर्शन, जो एकाग्रता, हस्तलेखन सुधार और समर्पित अभ्यास के लिए अत्यंत उपयुक्त है।",
      features: [
        "प्रत्यक्ष व्यक्तिगत मार्गदर्शन और तत्काल त्रुटि सुधार",
        "हस्तलेखन और लिपि गठन का निरंतर निरीक्षण",
        "शांत, समर्पित शैक्षणिक परिवेश",
        "सटीक पते की जानकारी पूछताछ के बाद साझा की जाती है",
      ],
      mandatoryPolicy: {
        heading: "महत्वपूर्ण ऑफलाइन कक्षा नीति",
        body:
          "ऑफलाइन कक्षाएं विशेष रूप से आभा मूंदड़ा के निवास स्थान पर आयोजित की जाती हैं। विद्यार्थियों को व्यक्तिगत कक्षाओं के लिए शिक्षिका के निवास स्थान पर आना आवश्यक है। शिक्षिका द्वारा विद्यार्थियों के घर जाकर ट्यूशन देने की सुविधा उपलब्ध नहीं है। सटीक पते की जानकारी पूछताछ के बाद निजी तौर पर साझा की जाती है।",
      },
      ctaText: "ऑफलाइन कक्षाओं के लिए पूछताछ करें",
    },
  },

  whyChooseUs: [
    {
      title: "20+ वर्षों का शिक्षण अनुभव",
      description:
        "दो दशकों का समर्पित कक्षा और व्यक्तिगत ट्यूशन अनुभव, जो विद्यार्थियों को स्पष्टता और आत्मविश्वास के साथ हिंदी में दक्ष बनाता है।",
    },
    {
      title: "प्रमाणित IGCSE एवं A-Level शिक्षिका",
      description:
        "कैम्ब्रिज IGCSE और A-Level हिंदी के लिए आधिकारिक शिक्षण प्रमाणन, जो अंतर्राष्ट्रीय परीक्षा बोर्डों के मानकों की पूर्ण पूर्ति सुनिश्चित करता है।",
    },
    {
      title: "बहु-पाठ्यक्रम विशेषज्ञता",
      description:
        "CBSE (कोर्स A और B), कैम्ब्रिज IGCSE, IB (SL, HL, अब इनिशियो) और A-Level के पाठ्यक्रमों और मूल्यांकन विधियों का प्रमाणित ज्ञान।",
    },
    {
      title: "समग्र भाषाई कवरेज",
      description:
        "बुनियादी देवनागरी लिपि और ध्वन्यात्मकता से लेकर उन्नत साहित्यिक समीक्षा, व्याकरणिक तर्क और रचनात्मक निबंध रचना तक।",
    },
    {
      title: "पारदर्शी एवं स्पष्ट शिक्षण व्यवस्था",
      description:
        "सुविधाजनक ऑनलाइन सत्रों और सुव्यवस्थित निवास-आधारित ऑफलाइन कक्षाओं के साथ स्पष्ट व सम्मानजनक अधिगम व्यवस्था।",
    },
    {
      title: "विद्यार्थी-केंद्रित मार्गदर्शन",
      description:
        "प्रत्येक विद्यार्थी की वर्तमान दक्षता, विद्यालयीन समय-सारणी और व्यक्तिगत गति के अनुसार अनुकूलित व प्रोत्साहक शिक्षण।",
    },
  ],

  faqs: [
    {
      id: "curricula",
      question: "आप किन पाठ्यक्रमों (Curricula) का मार्गदर्शन करती हैं?",
      answer:
        "आभा मूंदड़ा सीबीएसई (CBSE), कैम्ब्रिज आईजीसीएसई (Cambridge IGCSE प्रथम व द्वितीय भाषा), इंटरनेशनल बैकालॉरिएट (IB भाषा बी व अब इनिशियो), तथा कैम्ब्रिज इंटरनेशनल ए-लेवल्स (A-Levels) के विद्यार्थियों को मार्गदर्शन प्रदान करती हैं।",
    },
    {
      id: "beginners",
      question: "क्या आप शुरुआती (Beginners) विद्यार्थियों को भी पढ़ाती हैं?",
      answer:
        "हाँ। शिक्षण में उन शुरुआती शिक्षार्थियों को भी शामिल किया जाता है जिन्हें देवनागरी वर्णमाला, मात्राएं, उच्चारण और बुनियादी शब्दावली सीखनी है, साथ ही उन विद्यार्थियों को भी जो अपने विद्यालयीन पाठ्यक्रम में अतिरिक्त सहयोग चाहते हैं।",
    },
    {
      id: "skills-covered",
      question: "क्या आप पठन, लेखन, व्याकरण और मौखिक हिंदी सभी में सहायता करती हैं?",
      answer:
        "हाँ, समग्र शिक्षण में भाषा के सभी प्रमुख पहलू शामिल हैं: शुद्ध वाचन, सुलेख व वर्तनी, व्याकरण (Vyakaran), अपठित गद्यांश/पद्यांश बोध, रचनात्मक निबंध लेखन और संवादात्मक हिंदी।",
    },
    {
      id: "online-available",
      question: "क्या ऑनलाइन कक्षाएं उपलब्ध हैं?",
      answer:
        "हाँ, ऑनलाइन हिंदी कक्षाएं उपलब्ध हैं। जीवंत मार्गदर्शन के साथ आभासी माध्यम से इंटरैक्टिव सत्र आयोजित किए जाते हैं। समय-सारणी की उपलब्धता पर चर्चा हेतु आप संपर्क फॉर्म या व्हाट्सएप से जुड़ सकते हैं।",
    },
    {
      id: "offline-available",
      question: "क्या ऑफलाइन कक्षाएं उपलब्ध हैं?",
      answer:
        "हाँ, ऑफलाइन व्यक्तिगत कक्षाएं उपलब्ध हैं। कृपया स्थान और यात्रा व्यवस्था के संबंध में ऑफलाइन शिक्षण नीति का अवलोकन करें।",
    },
    {
      id: "offline-location",
      question: "ऑफलाइन कक्षाएं कहाँ आयोजित की जाती हैं?",
      answer:
        "ऑफलाइन कक्षाएं केवल आभा मूंदड़ा के निवास स्थान पर आयोजित की जाती हैं। पूछताछ की पुष्टि होने के पश्चात सटीक पते का विवरण व्यक्तिगत रूप से साझा किया जाता है।",
      highlight: true,
    },
    {
      id: "offline-travel",
      question: "क्या विद्यार्थियों को ऑफलाइन कक्षाओं के लिए शिक्षिका के निवास पर आना होगा?",
      answer:
        "हाँ। विद्यार्थियों को सभी व्यक्तिगत (in-person) कक्षाओं के लिए शिक्षिका के निवास स्थान पर आना आवश्यक है।",
      highlight: true,
    },
    {
      id: "home-visits",
      question: "क्या शिक्षिका विद्यार्थी के घर जाकर पढ़ाती हैं (Home Visits)?",
      answer:
        "नहीं। शिक्षिका विद्यार्थियों के घर नहीं जाती हैं और किसी भी परिस्थिति में होम विजिट उपलब्ध नहीं है। व्यक्तिगत कक्षाएं केवल शिक्षिका के निवास स्थान पर ही आयोजित होती हैं।",
      highlight: true,
    },
    {
      id: "exam-prep",
      question: "क्या आप विद्यार्थियों को परीक्षाओं की तैयारी में सहयोग करती हैं?",
      answer:
        "हाँ। मार्गदर्शन में पाठ्यक्रम-संरेखित पुनरावृत्ति, विगत वर्षों के बोर्ड प्रश्नपत्रों का समाधान, मार्किंग रूब्रिक्स की समझ, समय प्रबंधन और उत्तर प्रस्तुति का अभ्यास शामिल है।",
    },
    {
      id: "class-format",
      question: "क्या व्यक्तिगत (Individual) या समूह (Group) सत्र उपलब्ध हैं?",
      answer:
        "कक्षा का प्रारूप विद्यार्थी की आवश्यकता और समय की उपलब्धता पर निर्भर करता है। आप पूछताछ फॉर्म या व्हाट्सएप के माध्यम से व्यक्तिगत या छोटे समूहों के संबंध में जानकारी प्राप्त कर सकते हैं।",
    },
    {
      id: "demo-class",
      question: "क्या मैं डेमो क्लास के बारे में पूछताछ कर सकता/सकती हूँ?",
      answer:
        "हाँ, आप संपर्क फॉर्म या व्हाट्सएप के माध्यम से डेमो क्लास की उपलब्धता के संबंध में पूछताछ कर सकते हैं। उपलब्धता और समय तय करने हेतु शिक्षिका आपसे संपर्क करेंगी।",
    },
    {
      id: "fees-timings",
      question: "कक्षाओं के समय और शुल्क की जानकारी कैसे प्राप्त करें?",
      answer:
        "कक्षाओं का समय और शुल्क संरचना पाठ्यक्रम, कक्षा स्तर और सीखने के माध्यम (ऑनलाइन या ऑफलाइन) पर निर्भर करती है। अनुकूलित जानकारी के लिए कृपया पूछताछ फॉर्म भरें या व्हाट्सएप पर संदेश भेजें।",
    },
  ],

  contactSection: {
    sectionTag: "संपर्क करें",
    title: "हिंदी कक्षाओं के लिए पूछताछ करें",
    subtitle:
      "अपनी अध्ययन संबंधी आवश्यकताएं नीचे प्रेषित करें या उपलब्धता, पाठ्यक्रम और व्यवस्था के विवरण हेतु व्हाट्सएप पर संपर्क करें।",
    sidebarTitle: "सीधे संपर्क करें",
    sidebarText:
      "समय-सारणी, पाठ्यक्रम संरेखण या शुल्क के संबंध में तुरंत जानकारी चाहते हैं? व्हाट्सएप पर निःसंकोच संदेश भेजें।",
    sidebarButton: "व्हाट्सएप पर संदेश भेजें",
    emailLabel: "ईमेल द्वारा पूछताछ",
    communicationLabel: "सीधा संपर्क",
    communicationValue: "व्हाट्सएप एवं ईमेल द्वारा उपलब्ध",
    offlineLocationLabel: "ऑफलाइन कक्षा स्थल",
    offlineLocationValue:
      "शिक्षिका का निवास स्थान (सटीक पता पूछताछ के बाद साझा किया जाता है)",
    policyHeading: "व्यक्तिगत शिक्षण नीति",
    policyBody:
      "ऑफलाइन कक्षाएं केवल आभा मूंदड़ा के निवास स्थान पर आयोजित की जाती हैं। विद्यार्थियों को व्यक्तिगत कक्षाओं के लिए शिक्षिका के निवास पर आना होगा। होम विजिट उपलब्ध नहीं है।",
    formTitle: "पूछताछ फॉर्म भेजें",
    formSubtitle:
      "कृपया यह फॉर्म भरें; आभा मूंदड़ा आपसे समय-सारणी और पाठ्यक्रम विवरण पर चर्चा करने हेतु शीघ्र संपर्क करेंगी।",
    nameLabel: "अभिभावक / विद्यार्थी का नाम",
    namePlaceholder: "जैसे: प्रिया शर्मा",
    emailInputLabel: "ईमेल पता",
    emailPlaceholder: "name@example.com",
    phoneLabel: "व्हाट्सएप / संपर्क नंबर",
    phonePlaceholder: "+91 98765 43210",
    curriculumLabel: "पाठ्यक्रम / बोर्ड",
    curriculumOptions: [
      { value: "CBSE", label: "सीबीएसई (कोर्स ए / कोर्स बी)" },
      { value: "IGCSE", label: "कैम्ब्रिज IGCSE (प्रथम / द्वितीय भाषा)" },
      { value: "IB", label: "इंटरनेशनल बैकालॉरिएट (IB)" },
      { value: "A-Levels", label: "कैम्ब्रिज इंटरनेशनल A-Levels" },
      { value: "Other", label: "अन्य / बुनियादी हिंदी शिक्षण" },
    ],
    modeLabel: "पसंदीदा अध्ययन माध्यम",
    modeOnline: "ऑनलाइन कक्षाएं (आभासी)",
    modeOffline: "ऑफलाइन (शिक्षिका के निवास पर)",
    offlineNotice:
      "सूचना: ऑफलाइन कक्षाएं आभा मूंदड़ा के निवास पर आयोजित की जाती हैं। विद्यार्थियों को व्यक्तिगत कक्षाओं के लिए शिक्षिका के निवास स्थान पर आना आवश्यक है। होम विजिट उपलब्ध नहीं है। सटीक पता पूछताछ के बाद साझा किया जाता है।",
    onlineNotice:
      "ऑनलाइन माध्यम: ऑनलाइन कक्षाएं उपलब्ध हैं। कृपया संदेश में अपनी पसंदीदा समय-सारणी और आवश्यकताएं साझा करें ताकि उपलब्धता पर चर्चा की जा सके।",
    messageLabel: "संदेश / सीखने की आवश्यकताएं",
    messagePlaceholder:
      "कृपया विद्यार्थी की वर्तमान कक्षा, विद्यालय, जिन क्षेत्रों में सहायता चाहिए (जैसे व्याकरण, निबंध लेखन, बोर्ड परीक्षा) और पसंदीदा दिन/समय का उल्लेख करें।",
    privacyNotice:
      "आपकी संपर्क जानकारी पूरी तरह गोपनीय रखी जाती है और इसका उपयोग केवल इस पूछताछ का उत्तर देने के लिए किया जाता है।",
    submitButton: "पूछताछ भेजें",
    submittingButton: "पूछताछ भेजी जा रही है...",
    successHeading: "पूछताछ सफलतापूर्वक प्रेषित",
    successMessage:
      "धन्यवाद! आपकी पूछताछ आभा मूंदड़ा को भेज दी गई है। आपको शीघ्र ही उत्तर प्राप्त होगा।",
    errorHeading: "प्रेषण में त्रुटि",
    errorMessage:
      "पूछताछ भेजने में समस्या आई। कृपया सीधे व्हाट्सएप या ईमेल के माध्यम से संपर्क करें।",
    validationErrors: {
      name: "कृपया अभिभावक या विद्यार्थी का नाम दर्ज करें।",
      email: "कृपया ईमेल पता दर्ज करें।",
      emailFormat: "कृपया एक वैध ईमेल पता दर्ज करें (उदा. name@domain.com)।",
      phone: "कृपया संपर्क नंबर दर्ज करें।",
      phoneFormat: "कृपया एक वैध फोन या व्हाट्सएप नंबर दर्ज करें।",
      curriculum: "कृपया पाठ्यक्रम चुनें।",
      message: "कृपया अपनी पूछताछ या सीखने की आवश्यकताएं साझा करें।",
    },
  },

  footer: {
    description:
      "20 से अधिक वर्षों के अनुभव के साथ संरचित हिंदी शिक्षण; CBSE, Cambridge IGCSE, IB और A-Level पाठ्यक्रमों के विद्यार्थियों के लिए समर्पित मार्गदर्शन।",
    offlineNoticeHeading: "ऑफलाइन कक्षा सूचना:",
    offlineNoticeBody:
      "कक्षाएं केवल आभा मूंदड़ा के निवास स्थान पर आयोजित की जाती हैं। होम विजिट उपलब्ध नहीं है।",
    quickLinksHeading: "त्वरित लिंक",
    curriculaHeading: "पाठ्यक्रम",
    contactHeading: "संपर्क",
    allRightsReserved: "सर्वाधिकार सुरक्षित।",
    backToTop: "शीर्ष पर जाएं",
  },

  navigation: [
    { label: "गृह", href: "#hero" },
    { label: "परिचय", href: "#about" },
    { label: "पाठ्यक्रम", href: "#expertise" },
    { label: "शिक्षण विधि", href: "#approach" },
    { label: "अध्ययन माध्यम", href: "#modes" },
    { label: "प्रश्नोत्तरी", href: "#faqs" },
    { label: "संपर्क", href: "#contact" },
  ],
};

export const websiteContent = websiteContentEn;
