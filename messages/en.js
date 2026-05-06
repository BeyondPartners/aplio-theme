const messages = {
  common: {
    bookingCalendlyUrl: 'https://calendly.com/justin-warambourg/beyond-partners-consultation',
    brandHomeAria: 'BeyondPartners — home',
  },
  metadata: {
    home: { title: 'BeyondPartners' },
    legal: {
      title: 'Legal Notice',
      description: 'Terms, privacy policy and legal information — Beyond Partners, a brand of LS Fintech.',
    },
    banner: {
      title: 'LinkedIn banner — proposal',
      description:
        'Mockup and guidelines for the BeyondPartners LinkedIn company page banner: dimensions, copy and safe area.',
    },
  },
  sections: {
    home: 'home',
    program: 'our-program',
    testimonials: 'testimonials',
    faq: 'faq',
    about: 'about-us',
    approach: 'approach',
  },
  nav: {
    contact: 'Contact us',
    contactMobile: 'Contact us',
    menu: [
      { id: 1, title: 'Home', path: '#home' },
      { id: 2, title: 'Our approach', path: '#our-program' },
      { id: 3, title: 'Testimonials', path: '#testimonials' },
      { id: 4, title: 'FAQ', path: '#faq' },
      { id: 5, title: 'About us', path: '#about-us' },
    ],
  },
  hero: {
    axes: [
      {
        title: 'Full team training',
        desc: 'So your people master Claude Cowork in day-to-day work.',
      },
      {
        title: 'Integration into your key processes',
        desc: 'Claude Cowork is embedded in your 3 most time-consuming workflows.',
      },
      {
        title: 'Strategy and change management',
        desc: 'From 30 to 90 days, led by your teams, for lasting transformation.',
      },
    ],
    h1Lead: 'Boost the productivity',
    h1Rest: 'of your architecture firm with Claude Cowork',
    sub: 'Equip your teams with the leading AI assistant and accelerate every project phase, from sketch to delivery.',
    cta: 'Talk to an expert',
  },
  trustBar: {
    ariaLabel: 'Companies we work with',
  },
  painPoints: {
    headingBefore: 'Do these ',
    headingHighlight: 'sound familiar',
    headingAfter: '?',
    sub: 'These are the blockers we hear in every firm we support.',
    carouselAriaLabel: 'Common blockers',
    dotAriaPrefix: 'Show item ',
    slideAriaSeparator: 'of',
    cta: 'Here is how we can help',
    items: [
      {
        iconKey: 'clipboard',
        title: 'Productivity held back by low-value tasks',
        desc: 'Teams work hard—but not always where impact is highest.',
        tag: 'Productivity',
      },
      {
        iconKey: 'glass',
        title: 'An operating model that caps growth',
        desc: 'What works today can become a glass ceiling for what comes next.',
        tag: 'Structure',
      },
      {
        iconKey: 'aiBlur',
        title: 'AI potential seen, but concrete use cases still unclear',
        desc: 'The lever is obvious—how to apply it in practice, much less so.',
        tag: 'Leadership',
      },
      {
        iconKey: 'dispersed',
        title: 'Scattered AI experiments with no shared playbook',
        desc: 'One-off initiatives exist—but without a common frame or compounding effect.',
        tag: 'Adoption',
      },
    ],
  },
  offer: {
    intro:
      'We work with ambitious architecture firms that know AI will deeply change how we work—and want to get ahead of the curve.',
    sticky: {
      h2Before: 'Activate your AI strategy in ',
      h2Nowrap: '4 weeks',
      p1: 'The goal: master Claude Cowork and make your teams autonomous to carry this AI shift over time.',
      p2: 'After 4 weeks you have a trained team, AI-augmented processes, and a roadmap built with your people.',
      cta: 'Talk to an expert',
    },
    programBlocks: [
      {
        id: 'Phase 1',
        title: '1 day of training with your teams',
        timeframe: '',
        description: 'By end of day, your people know Claude Cowork and can apply it immediately in their daily work.',
        pills: ['2 half-days'],
        cta: 'See training details',
        imageSrc: '/images/photo_formation_6.jpg',
        imageAlt: 'In-person training session with a team in the room',
      },
      {
        id: 'Phase 2',
        title: '4 hands-on workshops to embed Claude Cowork in your processes and build your AI transformation roadmap',
        timeframe: '',
        description:
          'Designated colleagues work with our trainers to integrate Claude Cowork into your 3 heaviest workflows, define a 90-day roadmap—and become the drivers of your AI transformation.',
        pills: ['4 half-days'],
        cta: 'See workshop details',
        imageSrc: '/images/photo_formation_7.jpg',
        imageAlt: 'In-person training session with a team in the room',
      },
    ],
    imagePlaceholderSuffix: 'visual · coming soon',
    continuous: {
      kicker: 'Ongoing support for 4 weeks',
      h3: 'Beyond training and workshops',
      p: 'You get continuous support to make new habits stick.',
      items: [
        {
          title: 'Answers to your questions within 24 hours',
          description: 'Stuck on Claude Cowork? We commit to a response within 24 hours.',
        },
        {
          title: 'Access to best practices',
          description: 'What we learn across many client engagements is distilled for your teams—without the noise.',
        },
      ],
    },
    afterProgram: {
      h2: 'And after this program?',
      p: 'This is only the beginning of your AI journey. We stay with you as a trusted AI partner.',
    },
    lifelongCarousel: {
      ariaRegion: 'After the program',
      slideLabelSeparator: 'of',
      dotLabelPrefix: 'Show card ',
    },
    lifelongBenefits: [
      {
        id: 'brief',
        title: 'Monthly brief tailored to you',
        description: 'Claude updates that matter for your context—filtered and summarized, no noise, no wasted time.',
      },
      {
        id: 'skills',
        title: 'A living Claude skills library',
        description: 'Your teams always find up-to-date practices—not outdated playbooks.',
      },
      {
        id: 'access',
        title: 'Priority access to our experts',
        description: 'Advanced usage or Claude changes? Our trainers answer you first.',
      },
    ],
  },
  resultDashboard: {
    badge: 'Outcome',
    h3: 'At the end of this program',
    sub: 'You leave with:',
    footer: 'Your internal AI champions can carry this transformation to the rest of the firm.',
    metrics: [
      {
        id: 'team',
        value: 100,
        suffix: '%',
        title: 'Team trained and autonomous',
        micro: '',
        animate: true,
      },
      {
        id: 'process',
        value: 3,
        suffix: ' of your processes',
        title: 'the most time-consuming ones are augmented with Claude Cowork',
        micro: '',
        animate: true,
      },
      {
        id: 'roadmap',
        value: 90,
        suffix: '',
        unit: 'days',
        title: 'Co-built roadmap ready to execute',
        micro: '',
        animate: true,
      },
      {
        id: 'partner',
        value: 1,
        suffix: ' AI partner',
        title: 'you trust for the long run',
        micro: '',
        animate: true,
      },
    ],
  },
  faq: {
    h2Lead: 'Frequently asked ',
    h2Accent: 'questions',
    sub: 'What teams want to know before starting their AI transformation.',
    items: [
      {
        q: 'What is Claude Cowork, in practice?',
        a: 'Claude Cowork combines training on the Claude AI assistant with implementation in your workflows—drafting, summaries, triage, coordination—so you save time on repetitive tasks while keeping control of professional decisions.',
      },
      {
        q: 'Is this suitable if we are new to AI?',
        a: 'Yes. We start from your team’s real level: clear vocabulary, concrete first use cases, step-by-step progress. No technical prerequisites; the aim is practical daily value for everyone.',
      },
      {
        q: 'How do we find the right use cases for our firm?',
        a: 'We map your flows with you, prioritize low-risk, high-time tasks, and quickly test on real documents before scaling. Use cases come from your work—not a generic checklist.',
      },
      {
        q: 'Will this fit our existing tools and processes?',
        a: 'The approach builds on what you already do: email, documents, line-of-business tools as relevant. We connect Claude progressively—without rebuilding everything overnight.',
      },
      {
        q: 'Is Claude Cowork compatible with GDPR?',
        a: 'The program applies data minimization, purpose limitation, and traceability. We help you frame usage (personal data, processors, DPIAs where needed) consistent with your role as controller.',
      },
      {
        q: 'What about the security of our data?',
        a: 'Good practices cover confidentiality of materials, access control, and environments aligned with your internal policy. Sensitive topics are handled with your IT or legal contacts case by case.',
      },
      {
        q: 'What happens after the training?',
        a: 'You leave with a team autonomous on validated use cases and a roadmap to broaden adoption. Depending on the format, follow-up can cover relevant updates, refreshed playbooks, and support for day-to-day questions.',
      },
    ],
  },
  testimonial: {
    tagline: 'Testimonials',
    title: 'What our clients say',
    prev: 'Previous testimonial',
    next: 'Next testimonial',
    pagination: 'Testimonial pagination',
    items: [
      {
        id: 2,
        logoLight: '/images/made_in_courtage_logo.png',
        logoDark: '/images/made_in_courtage_logo.png',
        testimonial:
          'Huge thanks to Yasmina for understanding our needs, reframing what we wanted, and delivering our AI-powered legal assistant incredibly fast!',
        author: { name: 'Eric', designation: 'Made In Courtage', image: '/images/eric_debese_avatar.jpg' },
      },
      {
        id: 1,
        logoLight: '/images/kilome_logo.png',
        logoDark: '/images/kilome_logo.png',
        testimonial:
          'Thank you Yasmina for the training—it was excellent. The modules were clear, concrete, and matched my expectations perfectly.',
        author: { name: 'Jaafar', designation: 'Kilome', image: '/images/jaafar_avatar.webp' },
      },
      {
        id: 3,
        logoLight: '/images/fit_routine_logo.png',
        logoDark: '/images/fit_routine_logo.png',
        testimonial:
          'Justin has a real gift for understanding needs. He wants to grasp your business end to end before recommending a plan. I wholeheartedly recommend him for the quality of his work and outstanding professionalism.',
        author: { name: 'Nicolas', designation: 'Fit Routine', image: '' },
      },
      {
        id: 6,
        logoLight: '/images/pharmassist_logo.png',
        logoDark: '/images/pharmassist_logo.png',
        testimonial:
          'Yasmina is not only a great teacher—she handles every request with such care that I felt reassured immediately. Today I have solid foundations and real motivation to keep going on my own.',
        author: { name: 'Mat', designation: 'AI training', image: '' },
      },
      {
        id: 4,
        logoLight: null,
        logoDark: null,
        testimonial:
          'Thank you again Yasmina for the AI talk—it was enriching, precise, and accessible. Your clarity and flow made even technical topics easy to follow.',
        author: { name: 'Florent', designation: 'AI talk', image: '' },
      },
      {
        id: 5,
        logoLight: null,
        logoDark: null,
        testimonial:
          'Thank you Yasmina for an inspiring, insightful session. You made it tangible why companies should embrace AI now—with clarity, pedagogy, and real momentum.',
        author: { name: 'An attendee', designation: 'AI masterclass', image: '' },
      },
    ],
  },
  team: {
    tagline: 'Our team',
    title: 'Teaching-first, results-driven',
    bios: {
      1: 'With 14 years in investment banking leading major digital transformation programs, Yasmina brings deep experience running complex change initiatives.',
      2: 'With a dual background in technology and business, Justin is your technical partner with a real grasp of what matters in your practice.',
    },
  },
  footer: {
    legal: 'Legal notices',
    linkedInAria: 'Beyond Partners on LinkedIn',
    copyright: `${new Date().getFullYear()} Beyond Partners. All rights reserved.`,
    language: {
      label: 'Language',
      fr: 'FR',
      en: 'EN',
      switchToFr: 'Afficher le site en français',
      switchToEn: 'Show site in English',
    },
  },
  legalPage: {
    backHome: 'Back to home',
    h2: 'Legal notices',
  },
  bannerPage: {
    backHome: 'Back to home',
    h1: 'LinkedIn banner proposal — company page',
    intro:
      'Use the mockup below as a visual reference, then recreate it in Figma or Canva at the stated dimensions to export an image ready to upload to LinkedIn. You can also screenshot the preview for a quick draft (for best quality, export a PNG at the correct size).',
    specsTitle: 'Specifications',
    specsDimensionsLabel: 'Dimensions',
    specsFormatsLabel: 'Formats',
    specsSafeZoneLabel: 'Safe area',
    specsDimensionsTemplate: 'Mockup: {width} × {height} px (−20% width vs 1,128 px). LinkedIn export: 1,128 × 191 px.',
    specsFormats: 'PNG or JPEG, ≤ 3–4 MB per LinkedIn guidance',
    specsSafeZone: 'Keep logo and copy in the central third; avoid edges (mobile crops).',
    mockupTitleTemplate: 'Mockup ({width} : {height} proportions, −20% width)',
    mockupHint:
      'Same visual language as the homepage: white background, accent glow, peach strip (#ffefea) like under the hero, BeyondPartners logo, headline with accent keyword. Bottom-left reserved for the LinkedIn logo (avoid placing text there).',
    copyTitle: 'Copy to paste',
    copyIntro: 'Paste these lines into your design file or LinkedIn page description if you reuse them elsewhere.',
    copyBlocks: [
      {
        title: 'Headline (as on the homepage)',
        lines: ['Multiply productivity at your architecture firm with Claude Cowork'],
      },
      {
        title: 'Subhead (hero paragraph)',
        lines: [
          'Equip your teams with the leading AI assistant and accelerate every project phase—from sketch to delivery.',
        ],
      },
      {
        title: 'Short banner line',
        lines: ['Multiply productivity · Claude Cowork for architecture firms'],
      },
    ],
    bannerMobileTag: 'Claude Cowork · architecture firms',
    bannerLine1: 'Multiply productivity',
    bannerLine2a: 'at your firm',
    bannerLine2b: 'with Claude Cowork',
    tipLead: 'Tip:',
    tipBody:
      'After export, check the banner on desktop and in the LinkedIn mobile app. If text is cropped, move it toward the center or reduce type size.',
  },
}

export default messages
