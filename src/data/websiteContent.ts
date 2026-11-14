export interface CurriculumItem {
  name: string;
  level: string;
  description: string;
  shortDescription: string;
}

export interface LearningAreaItem {
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
}

export interface WebsiteContent {
  brand: {
    name: string;
    attribution: string;
    tutorName: string;
    tutorTitle: string;
    experienceYears: string;
    experienceShort: string;
  };
  navigation: {
    links: Array<{
      label: string;
      href: string;
    }>;
    enquireNow: string;
  };
  hero: {
    headlineLine1: string;
    headlineLine2: string;
    headline: string;
    supportingMessage: string;
    supportingMessageMobile: string;
    ctaExplore: string;
    ctaConnect: string;
  };
  about: {
    sectionId: string;
    sectionTag: string;
    title: string;
    subtitle: string;
    subtitleMobile: string;
    tutorBio: string;
    tutorBioMobile: string;
    profileHighlights: string[];
    curriculaTitle: string;
    curricula: CurriculumItem[];
    learningAreasTitle: string;
    learningAreas: LearningAreaItem[];
  };
  contact: {
    sectionId: string;
    sectionTag: string;
    title: string;
    subtitle: string;
    subtitleMobile: string;
    whatsappNumber: string;
    displayWhatsApp: string;
    email: string;
    prefilledWhatsAppMessage: string;
    formLabels: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      curriculum: string;
      learningMode: string;
      modeOnline: string;
      modeOffline: string;
      modeUnsure: string;
      message: string;
      messagePlaceholder: string;
      submitButton: string;
      submittingButton: string;
      directCommTitle: string;
      directCommDesc: string;
      whatsappButton: string;
      privacyTitle: string;
      privacyDesc: string;
      successTitle: string;
      successMessage: string;
      errorTitle: string;
      errorMessage: string;
    };
    modeNotices: {
      online: string;
      offline: string;
      unsure: string;
    };
    modeNoticesMobile: {
      online: string;
      offline: string;
      unsure: string;
    };
    validationMessages: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      phoneRequired: string;
      phoneInvalid: string;
      curriculumRequired: string;
      messageRequired: string;
    };
  };
  footer: {
    brand: string;
    attribution: string;
    tutorName: string;
    tutorTitle: string;
    description: string;
    descriptionMobile: string;
    navHeading: string;
    connectHeading: string;
    backToTop: string;
    copyright: string;
  };
}

export const websiteContentEn: WebsiteContent = {
  brand: {
    name: "Bhasha Gyaan",
    attribution: "Bhasha Gyaan by Abha Mundra",
    tutorName: "Abha Mundra",
    tutorTitle: "Hindi Language Educator",
    experienceYears: "20+ Years",
    experienceShort: "20+ Years of Teaching Experience",
  },
  navigation: {
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    enquireNow: "Enquire Now",
  },
  hero: {
    headlineLine1: "Discover the beauty of Hindi.",
    headlineLine2: "Speak it. Read it. Live it.",
    headline: "Discover the beauty of Hindi. Speak it. Read it. Live it.",
    supportingMessage:
      "Learn Hindi with Abha Mundra, an experienced Hindi language educator with over 20 years of teaching experience across CBSE, IGCSE, IB and A-Levels.",
    supportingMessageMobile:
      "Learn Hindi with Abha Mundra, an experienced Hindi language educator with 20+ years of teaching experience.",
    ctaExplore: "Explore Learning",
    ctaConnect: "Let's Connect",
  },
  about: {
    sectionId: "about",
    sectionTag: "Educator Profile & Pedagogy",
    title: "About & Teaching Expertise",
    subtitle:
      "20+ years of dedicated Hindi pedagogy, certified expertise across international and national curricula, and a proven track record of student excellence.",
    subtitleMobile:
      "20+ years of certified Hindi pedagogy across international and Indian boards.",
    tutorBio:
      "Abha Mundra is an accomplished Hindi Language Educator with over two decades of classroom and individual mentoring experience. Holding specialized teaching certifications in Cambridge IGCSE and A-Levels, she combines deep linguistic scholarship with warm, intuitive guidance tailored to each student's learning style.",
    tutorBioMobile:
      "Certified Cambridge IGCSE and A-Level Hindi educator with 20+ years of dedicated mentoring across global and Indian curricula.",
    profileHighlights: [
      "20+ years of Hindi teaching experience",
      "Cambridge IGCSE teaching certification",
      "Cambridge A-Level teaching certification",
      "Experience teaching CBSE, IGCSE, IB and A-Level students",
    ],
    curriculaTitle: "Curriculum Expertise",
    curricula: [
      {
        name: "CBSE",
        level: "Classes 1 to 12",
        description:
          "Comprehensive textbook coverage, structured grammar fundamentals, creative writing, and board examination preparation.",
        shortDescription:
          "Textbook mastery, grammar fundamentals, and board examination preparation.",
      },
      {
        name: "IGCSE",
        level: "Cambridge Assessment",
        description:
          "Focused training in reading, analytical writing, oral comprehension, and examination techniques aligned with Cambridge benchmarks.",
        shortDescription:
          "Cambridge reading, analytical writing, and oral examination techniques.",
      },
      {
        name: "IB",
        level: "Language B & ab initio",
        description:
          "Inquiry-driven learning, conceptual understanding, cultural themes, text analysis, and internal assessment guidance.",
        shortDescription:
          "Conceptual understanding, text analysis, and internal assessment guidance.",
      },
      {
        name: "A-Levels",
        level: "Advanced Level",
        description:
          "Rigorous literary analysis, critical essays, advanced translation, and nuanced oral communication skills.",
        shortDescription:
          "Literary analysis, advanced critical essays, and oral fluency.",
      },
    ],
    learningAreasTitle: "Hindi Learning Areas",
    learningAreas: [
      {
        title: "Hindi Fundamentals, Alphabets & Pronunciation",
        shortTitle: "Fundamentals & Pronunciation",
        description: "Varnamala (swar and vyanjan), correct phonetic articulation, matras, and handwriting neatness.",
        shortDescription: "Varnamala, phonetic articulation, matras, and handwriting.",
      },
      {
        title: "Vocabulary & Grammar",
        shortTitle: "Vocabulary & Grammar",
        description: "Vyakaran rules, sandhi, samas, idioms (muhavare), antonyms/synonyms, and sentence syntax.",
        shortDescription: "Vyakaran, sandhi, samas, idioms, and syntax.",
      },
      {
        title: "Reading & Writing",
        shortTitle: "Reading & Writing",
        description: "Fluent textual reading with correct intonation and structured prose composition.",
        shortDescription: "Fluent textual reading and structured composition.",
      },
      {
        title: "Reading Comprehension",
        shortTitle: "Reading Comprehension",
        description: "Unseen passage analysis (apadhit gadyansh/kavyansh), contextual inference, and accurate answering.",
        shortDescription: "Unseen passage analysis and accurate answering.",
      },
      {
        title: "Creative & Essay Writing",
        shortTitle: "Creative & Essay Writing",
        description: "Nibandh lekhan, formal/informal patra lekhan, samvaad lekhan, and descriptive essays.",
        shortDescription: "Essays, formal/informal letters, and dialogues.",
      },
      {
        title: "Spoken Hindi & Communication",
        shortTitle: "Spoken Hindi & Fluency",
        description: "Conversational fluency, everyday dialogue, clear diction, and self-confidence in speaking.",
        shortDescription: "Conversational fluency, clear diction, and confidence.",
      },
      {
        title: "Curriculum-Specific Academic Coaching",
        shortTitle: "Board-Specific Coaching",
        description: "Targeted support aligned strictly with your school or exam board's specific syllabus and marking schemes.",
        shortDescription: "Targeted support aligned with board syllabus & marking schemes.",
      },
      {
        title: "Examination Preparation",
        shortTitle: "Exam Preparation & Past Papers",
        description: "Past paper practice, timed test simulations, presentation tips, and score optimization strategies.",
        shortDescription: "Past paper drills, timed mocks, and score optimization.",
      },
    ],
  },
  contact: {
    sectionId: "contact",
    sectionTag: "Get in Touch",
    title: "Your Hindi learning journey starts here.",
    subtitle:
      "Get in touch directly to discuss your curriculum, schedule preferences, and learning objectives.",
    subtitleMobile:
      "Connect directly to discuss curriculum, schedule, and learning goals.",
    whatsappNumber: "6588321025",
    displayWhatsApp: "+65 8832 1025",
    email: "aarushi.mundra@gmail.com",
    prefilledWhatsAppMessage:
      "Hello! I am interested in Hindi classes at Bhasha Gyaan. Could you please share more details about your courses and availability?",
    formLabels: {
      name: "Parent / Student Name",
      namePlaceholder: "Enter full name",
      email: "Email Address",
      emailPlaceholder: "name@example.com",
      phone: "WhatsApp / Contact Number",
      phonePlaceholder: "+65 8832 1025",
      curriculum: "Curriculum",
      learningMode: "Learning Mode",
      modeOnline: "Online Classes",
      modeOffline: "Offline (At Tutor's Residence)",
      modeUnsure: "Not sure yet",
      message: "Message",
      messagePlaceholder: "Tell us about the student's grade, curriculum goals, or schedule preferences...",
      submitButton: "Send Enquiry",
      submittingButton: "Sending Enquiry...",
      directCommTitle: "Direct Communication",
      directCommDesc: "Prefer immediate messaging? Reach out directly to discuss availability and learning requirements.",
      whatsappButton: "Connect on WhatsApp ↗",
      privacyTitle: "Confidentiality & Privacy",
      privacyDesc: "Student and contact information is handled confidentially. Offline teaching location coordinates are shared privately upon schedule confirmation.",
      successTitle: "Enquiry Received!",
      successMessage: "Thank you for your enquiry! Abha Mundra will connect with you shortly to discuss availability.",
      errorTitle: "Submission Notice",
      errorMessage: "Could not submit the form at this moment. Please reach out directly via WhatsApp or email.",
    },
    modeNotices: {
      online:
        "Online classes are available. Please share your preferred schedule and learning requirements so that availability and arrangements can be discussed.",
      offline:
        "Offline classes take place exclusively at Abha Mundra's residence. Students must travel to the teaching location. Home visits by the tutor are not available. Location details are shared privately after enquiry.",
      unsure:
        "Not sure yet? Please indicate your learning goals and we will help you decide between online and offline arrangements.",
    },
    modeNoticesMobile: {
      online:
        "Online classes available worldwide. Share your preferred schedule & learning goals.",
      offline:
        "Classes take place at tutor's residence. Students travel; home visits not available.",
      unsure:
        "Share your learning goals and we will help guide your learning format.",
    },
    validationMessages: {
      nameRequired: "Please enter your name (parent or student).",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      phoneRequired: "Please enter your WhatsApp or contact number.",
      phoneInvalid: "Please enter a valid phone number (at least 7 digits).",
      curriculumRequired: "Please select a curriculum.",
      messageRequired: "Please share a brief message regarding your learning goals or schedule.",
    },
  },
  footer: {
    brand: "Bhasha Gyaan",
    attribution: "Bhasha Gyaan by Abha Mundra",
    tutorName: "Abha Mundra",
    tutorTitle: "Hindi Language Educator",
    description:
      "Discover the beauty of Hindi. Speak it. Read it. Live it. Over 20 years of expert teaching for CBSE, IGCSE, IB, and A-Levels.",
    descriptionMobile:
      "20+ years of expert Hindi coaching for CBSE, IGCSE, IB, and A-Levels.",
    navHeading: "Navigation",
    connectHeading: "Connect",
    backToTop: "Back to top ↑",
    copyright: "© " + new Date().getFullYear() + " Bhasha Gyaan. All rights reserved.",
  },
};

export const websiteContentHi: WebsiteContent = {
  brand: {
    name: "भाषा ज्ञान",
    attribution: "आभा मूंदड़ा द्वारा भाषा ज्ञान",
    tutorName: "आभा मूंदड़ा",
    tutorTitle: "हिंदी भाषा शिक्षिका",
    experienceYears: "२०+ वर्ष",
    experienceShort: "२०+ वर्षों का शिक्षण अनुभव",
  },
  navigation: {
    links: [
      { label: "गृह", href: "#home" },
      { label: "परिचय", href: "#about" },
      { label: "संपर्क", href: "#contact" },
    ],
    enquireNow: "अभी संपर्क करें",
  },
  hero: {
    headlineLine1: "हिंदी की सुंदरता को जानें।",
    headlineLine2: "बोलें। पढ़ें। जिएं।",
    headline: "हिंदी की सुंदरता को जानें। बोलें। पढ़ें। जिएं।",
    supportingMessage:
      "२० से अधिक वर्षों के समृद्ध शिक्षण अनुभव के साथ, अनुभवी हिंदी भाषा शिक्षिका आभा मूंदड़ा से हिंदी सीखें।",
    supportingMessageMobile:
      "CBSE, IGCSE, IB और A-Levels के लिए २०+ वर्षों के अनुभव के साथ आभा मूंदड़ा द्वारा विशेषज्ञ हिंदी मार्गदर्शन।",
    ctaExplore: "अध्ययन प्रारूप देखें",
    ctaConnect: "सीधे जुड़ें ↗",
  },
  about: {
    sectionId: "about",
    sectionTag: "शिक्षिका परिचय एवं शिक्षण पद्धति",
    title: "परिचय एवं शिक्षण विशेषज्ञता",
    subtitle:
      "२०+ वर्षों का समर्पित हिंदी शिक्षण, राष्ट्रीय और अंतर्राष्ट्रीय पाठ्यक्रमों में प्रमाणित विशेषज्ञता, एवं विद्यार्थियों की शैक्षणिक उत्कृष्टता का प्रमाणित इतिहास।",
    subtitleMobile:
      "२०+ वर्षों का प्रमाणित हिंदी शिक्षण अनुभव — राष्ट्रीय एवं अंतर्राष्ट्रीय बोर्ड।",
    tutorBio:
      "आभा मूंदड़ा एक अनुभवी हिंदी भाषा शिक्षिका हैं, जिनके पास दो दशकों से अधिक का कक्षा और व्यक्तिगत मार्गदर्शन का अनुभव है। कैम्ब्रिज IGCSE और A-Levels में विशेषज्ञ शिक्षण प्रमाणन के साथ, वे प्रत्येक विद्यार्थी की सीखने की शैली के अनुरूप गहन भाषाई ज्ञान और सहज मार्गदर्शन प्रदान करती हैं।",
    tutorBioMobile:
      "कैम्ब्रिज IGCSE और A-Level प्रमाणित हिंदी शिक्षिका, राष्ट्रीय एवं अंतर्राष्ट्रीय बोर्डों के लिए २०+ वर्षों का समर्पित शिक्षण अनुभव।",
    profileHighlights: [
      "२०+ वर्षों का हिंदी शिक्षण अनुभव",
      "कैम्ब्रिज IGCSE शिक्षण प्रमाणन",
      "कैम्ब्रिज A-Level शिक्षण प्रमाणन",
      "CBSE, IGCSE, IB और A-Level के विद्यार्थियों को पढ़ाने का अनुभव",
    ],
    curriculaTitle: "पाठ्यक्रम विशेषज्ञता",
    curricula: [
      {
        name: "CBSE",
        level: "कक्षा १ से १२",
        description:
          "पाठ्यपुस्तकों का गहन अध्ययन, सुव्यवस्थित व्याकरण, रचनात्मक लेखन एवं बोर्ड परीक्षा की संपूर्ण तैयारी।",
        shortDescription:
          "पाठ्यपुस्तक अध्ययन, व्याकरण नियम एवं बोर्ड परीक्षा की तैयारी।",
      },
      {
        name: "IGCSE",
        level: "कैम्ब्रिज असेसमेंट",
        description:
          "कैम्ब्रिज मानकों के अनुरूप पठन, विश्लेषणात्मक लेखन, मौखिक अभिव्यक्ति एवं परीक्षा तकनीकों का विशेष प्रशिक्षण।",
        shortDescription:
          "कैम्ब्रिज पठन, विश्लेषणात्मक लेखन एवं मौखिक परीक्षा अभ्यास।",
      },
      {
        name: "IB",
        level: "लैंग्वेज बी एवं अब इनिशियो",
        description:
          "अवधारणात्मक समझ, सांस्कृतिक विषय, पाठ विश्लेषण एवं आंतरिक मूल्यांकन (IA) का संपूर्ण मार्गदर्शन।",
        shortDescription:
          "अवधारणात्मक समझ, पाठ विश्लेषण एवं आंतरिक मूल्यांकन मार्गदर्शन।",
      },
      {
        name: "A-Levels",
        level: "एडवांस्ड लेवल",
        description:
          "साहित्यिक विश्लेषण, आलोचनात्मक निबंध लेखन, उच्च स्तरीय अनुवाद एवं स्वाभाविक मौखिक संवाद कौशल।",
        shortDescription:
          "साहित्यिक विश्लेषण, आलोचनात्मक निबंध एवं मौखिक प्रवाह।",
      },
    ],
    learningAreasTitle: "हिंदी अध्ययन क्षेत्र",
    learningAreas: [
      {
        title: "हिंदी वर्णमाला, ध्वनियाँ एवं शुद्ध उच्चारण",
        shortTitle: "वर्णमाला एवं उच्चारण",
        description: "वर्णमाला (स्वर एवं व्यंजन), शुद्ध उच्चारण, मात्राओं का सही प्रयोग एवं सुलेख अभ्यास।",
        shortDescription: "वर्णमाला, शुद्ध उच्चारण, मात्राएं एवं सुलेख अभ्यास।",
      },
      {
        title: "शब्द-भंडार एवं व्याकरण",
        shortTitle: "शब्द-भंडार एवं व्याकरण",
        description: "व्याकरण नियम, संधि, समास, मुहावरे, पर्यायवाची/विलोम एवं वाक्य संरचना में दक्षता।",
        shortDescription: "व्याकरण नियम, संधि, समास, मुहावरे एवं वाक्य रचना।",
      },
      {
        title: "पठन एवं लेखन कौशल",
        shortTitle: "पठन एवं लेखन",
        description: "उचित लय व सुर के साथ शुद्ध पठन एवं सुव्यवस्थित गद्य लेखन का अभ्यास।",
        shortDescription: "शुद्ध पठन, सही आरोह-अवरोह एवं गद्य लेखन।",
      },
      {
        title: "अपठित बोध (Comprehension)",
        shortTitle: "अपठित बोध",
        description: "अपठित गद्यांश व काव्यांश विश्लेषण, संदर्भ से अर्थ ग्रहण एवं सटीक उत्तर लेखन।",
        shortDescription: "अपठित गद्यांश/काव्यांश विश्लेषण एवं सटीक उत्तर।",
      },
      {
        title: "रचनात्मक एवं निबंध लेखन",
        shortTitle: "निबंध एवं पत्र लेखन",
        description: "निबंध लेखन, औपचारिक व अनौपचारिक पत्र लेखन, संवाद लेखन एवं विस्तृत अभिव्यक्ति।",
        shortDescription: "निबंध, पत्र लेखन, संवाद एवं रचनात्मक अभिव्यक्ति।",
      },
      {
        title: "मौखिक हिंदी एवं संवाद कौशल",
        shortTitle: "मौखिक हिंदी एवं संवाद",
        description: "दैनिक वार्तालाप, शुद्ध उच्चारण, स्पष्ट संवाद एवं बोलने में स्वाभाविक आत्मविश्वास।",
        shortDescription: "वार्तालाप प्रवाह, शुद्ध उच्चारण एवं आत्मविश्वास।",
      },
      {
        title: "पाठ्यक्रम-विशिष्ट शैक्षणिक कोचिंग",
        shortTitle: "बोर्ड पाठ्यक्रम कोचिंग",
        description: "आपके विद्यालय एवं बोर्ड के निर्धारित पाठ्यक्रम तथा अंकन योजना के अनुरूप सटीक तैयारी।",
        shortDescription: "बोर्ड पाठ्यक्रम एवं अंकन योजना अनुरूप विशेष तैयारी।",
      },
      {
        title: "परीक्षा की विशेष तैयारी",
        shortTitle: "परीक्षा अभ्यास एवं मॉक टेस्ट",
        description: "विगत वर्षों के प्रश्न-पत्र हल, समयबद्ध मॉक टेस्ट एवं परीक्षा में अधिकतम अंक लाने की रणनीतियाँ।",
        shortDescription: "विगत प्रश्न-पत्र अभ्यास, समय प्रबंधन एवं मॉक टेस्ट।",
      },
    ],
  },
  contact: {
    sectionId: "contact",
    sectionTag: "संपर्क करें",
    title: "आपकी हिंदी सीखने की यात्रा यहीं से शुरू होती है।",
    subtitle:
      "अपने पाठ्यक्रम, समय-सारणी एवं सीखने के लक्ष्यों पर चर्चा करने के लिए सीधे संपर्क करें।",
    subtitleMobile:
      "पाठ्यक्रम, समय एवं सीखने के लक्ष्यों पर चर्चा के लिए संपर्क करें।",
    whatsappNumber: "6588321025",
    displayWhatsApp: "+65 8832 1025",
    email: "aarushi.mundra@gmail.com",
    prefilledWhatsAppMessage:
      "नमस्ते! मैं भाषा ज्ञान में हिंदी कक्षाओं के संबंध में जानकारी प्राप्त करना चाहता/चाहती हूँ। कृपया पाठ्यक्रम और समय की उपलब्धता साझा करें।",
    formLabels: {
      name: "अभिभावक / विद्यार्थी का नाम",
      namePlaceholder: "पूरा नाम दर्ज करें",
      email: "ईमेल पता",
      emailPlaceholder: "name@example.com",
      phone: "व्हाट्सएप / संपर्क नंबर",
      phonePlaceholder: "+65 8832 1025",
      curriculum: "पाठ्यक्रम",
      learningMode: "अध्ययन का माध्यम",
      modeOnline: "ऑनलाइन कक्षाएं",
      modeOffline: "ऑफ़लाइन (शिक्षिका के आवास पर)",
      modeUnsure: "अभी निश्चित नहीं",
      message: "संदेश",
      messagePlaceholder: "विद्यार्थी की कक्षा, बोर्ड परीक्षा के लक्ष्य या समय की प्राथमिकता के बारे में बताएं...",
      submitButton: "पूछताछ भेजें",
      submittingButton: "भेजा जा रहा है...",
      directCommTitle: "सीधा संवाद",
      directCommDesc: "तुरंत संवाद चाहते हैं? उपलब्धता और सीखने की व्यवस्था पर सीधे चर्चा के लिए संपर्क करें।",
      whatsappButton: "व्हाट्सएप पर सीधे जुड़ें ↗",
      privacyTitle: "गोपनीयता एवं सुरक्षा",
      privacyDesc: "विद्यार्थी एवं संपर्क विवरण पूरी तरह गोपनीय रखे जाते हैं। ऑफ़लाइन पते का विवरण समय निर्धारित होने पर निजी रूप से साझा किया जाता है।",
      successTitle: "पूछताछ प्राप्त हुई!",
      successMessage: "आपकी पूछताछ प्राप्त हो गई है! आभा मूंदड़ा जल्द ही उपलब्धता पर चर्चा के लिए आपसे संपर्क करेंगी।",
      errorTitle: "सूचना",
      errorMessage: "इस समय फॉर्म जमा नहीं हो सका। कृपया सीधे व्हाट्सएप या ईमेल से संपर्क करें।",
    },
    modeNotices: {
      online:
        "ऑनलाइन कक्षाएं उपलब्ध हैं। उपलब्धता व व्यवस्था पर चर्चा के लिए कृपया अपनी पसंदीदा समय-सारणी और आवश्यकताएं साझा करें।",
      offline:
        "ऑफ़लाइन कक्षाएं केवल आभा मूंदड़ा के आवास पर आयोजित होती हैं। विद्यार्थियों को आवास पर आना अनिवार्य है। गृह-भ्रमण (Home visit) उपलब्ध नहीं है।",
      unsure:
        "अभी निश्चित नहीं? अपने सीखने के लक्ष्य साझा करें, हम आपको उपयुक्त माध्यम चुनने में सहायता करेंगे।",
    },
    modeNoticesMobile: {
      online:
        "ऑनलाइन कक्षाएं उपलब्ध। पसंदीदा समय-सारणी साझा करें।",
      offline:
        "कक्षाएं केवल शिक्षिका के आवास पर होंगी। गृह-भ्रमण उपलब्ध नहीं है।",
      unsure:
        "अपने सीखने के लक्ष्य बताएं, हम उपयुक्त माध्यम चुनने में सहायता करेंगे।",
    },
    validationMessages: {
      nameRequired: "कृपया अपना या विद्यार्थी का नाम दर्ज करें।",
      emailRequired: "कृपया अपना ईमेल पता दर्ज करें।",
      emailInvalid: "कृपया एक मान्य ईमेल पता दर्ज करें।",
      phoneRequired: "कृपया अपना व्हाट्सएप या संपर्क नंबर दर्ज करें।",
      phoneInvalid: "कृपया एक मान्य फोन नंबर दर्ज करें (कम से कम ७ अंक)।",
      curriculumRequired: "कृपया एक पाठ्यक्रम चुनें।",
      messageRequired: "कृपया अपने सीखने के लक्ष्य या समय के संबंध में एक संक्षिप्त संदेश लिखें।",
    },
  },
  footer: {
    brand: "भाषा ज्ञान",
    attribution: "आभा मूंदड़ा द्वारा भाषा ज्ञान",
    tutorName: "आभा मूंदड़ा",
    tutorTitle: "हिंदी भाषा शिक्षिका",
    description:
      "हिंदी की सुंदरता को जानें। बोलें। पढ़ें। जिएं। CBSE, IGCSE, IB और A-Levels के लिए २०+ वर्षों का विशेषज्ञ शिक्षण।",
    descriptionMobile:
      "CBSE, IGCSE, IB और A-Levels के लिए २०+ वर्षों का विशेषज्ञ हिंदी शिक्षण।",
    navHeading: "नेविगेशन",
    connectHeading: "संपर्क सूत्र",
    backToTop: "शीर्ष पर जाएं ↑",
    copyright: "© " + new Date().getFullYear() + " भाषा ज्ञान। सर्वाधिकार सुरक्षित।",
  },
};

export const websiteContent = websiteContentEn;
