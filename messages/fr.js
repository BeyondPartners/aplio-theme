const messages = {
  common: {
    bookingCalendlyUrl: 'https://calendly.com/justin-warambourg/beyond-partners-consultation',
    brandHomeAria: 'BeyondPartners — accueil',
  },
  metadata: {
    home: { title: 'BeyondPartners' },
    legal: {
      title: 'Mentions légales',
      description: 'CGV, politique de confidentialité et mentions légales — Beyond Partners, marque de LS Fintech.',
    },
    banner: {
      title: 'Bannière LinkedIn — proposition',
      description:
        'Maquette et repères pour la bannière de la page entreprise LinkedIn BeyondPartners : dimensions, textes et zone sûre.',
    },
  },
  sections: {
    home: 'home',
    program: 'notre-accompagnement',
    testimonials: 'temoignages',
    faq: 'faq',
    about: 'a-propos-de-nous',
    approach: 'approche',
  },
  nav: {
    contact: 'Nous Contacter',
    contactMobile: 'Nous contacter',
    menu: [
      { id: 1, title: 'Accueil', path: '#home' },
      { id: 2, title: 'Notre accompagnement', path: '#notre-accompagnement' },
      { id: 3, title: 'Temoignages', path: '#temoignages' },
      { id: 4, title: 'FAQ', path: '#faq' },
      { id: 5, title: 'À propos de nous', path: '#a-propos-de-nous' },
    ],
  },
  hero: {
    axes: [
      {
        title: 'Formation complète des équipes',
        desc: 'Pour une maîtrise de Claude Cowork au quotidien.',
      },
      {
        title: 'Intégration dans vos process clés',
        desc: 'Claude Cowork est intégré à vos 3 process les plus chronophages.',
      },
      {
        title: 'Définition de la stratégie et conduite du changement',
        desc: 'De 30 à 90 jours et portée par vos équipes, pour une transformation durable.',
      },
    ],
    h1Lead: 'Démultipliez la productivité',
    h1Rest: "de votre cabinet d'architecte avec Claude Cowork",
    sub: "Équipez vos collaborateurs du meilleur assistant IA du marché et accélerez chaque phase de projet, de l'esquisse à la réalisation.",
    cta: 'Échanger avec un expert',
  },
  trustBar: {
    ariaLabel: 'Entreprises accompagnées',
  },
  painPoints: {
    headingBefore: 'Vous vous ',
    headingHighlight: 'reconnaissez',
    headingAfter: '\u00a0?',
    sub: 'Ces blocages sont ceux que nous entendons dans chaque cabinet que nous accompagnons.',
    carouselAriaLabel: 'Points de blocage',
    dotAriaPrefix: 'Afficher le point ',
    slideAriaSeparator: 'sur',
    cta: 'Voici comment on peut vous aider',
    items: [
      {
        iconKey: 'clipboard',
        title: 'Productivité freinée par des tâches à faible valeur ajoutée',
        desc: "Les équipes travaillent beaucoup… mais pas toujours là où l'impact est maximal.",
        tag: 'Productivité',
      },
      {
        iconKey: 'glass',
        title: 'Organisation qui limite la croissance',
        desc: "La structure actuelle fonctionne… mais crée un plafond de verre qui empêche l'évolution.",
        tag: 'Structure',
      },
      {
        iconKey: 'aiBlur',
        title: "Potentiel de l'IA identifié, mais qui reste flou",
        desc: "Le levier de l'intelligence artificielle est clair… son application concrète beaucoup moins.",
        tag: 'Direction',
      },
      {
        iconKey: 'dispersed',
        title: "Usages de l'IA dispersés et non capitalisés",
        desc: 'Des initiatives ponctuelles existent… mais sans cadre commun ni effet cumulé.',
        tag: 'Utilisation',
      },
    ],
  },
  offer: {
    intro:
      "Nous accompagnons les bureaux d'architectes ambitieux qui savent que l'IA va transformer en profondeur les façons de travailler — et qui veulent prendre une longueur d'avance.",
    sticky: {
      h2Before: 'Activez votre stratégie IA en ',
      h2Nowrap: '4 semaines',
      p1: "L'objectif : maîtriser Claude Cowork et rendre vos équipes autonomes pour porter cette transformation IA durablement.",
      p2: "À l'issue des 4 semaines, vous disposez d'une équipe formée, de process augmentés par l'IA et d'une feuille de route construite avec votre équipe.",
      cta: 'Échanger avec un expert',
    },
    programBlocks: [
      {
        id: 'Phase 1',
        title: '1 journée de formation avec vos équipes',
        timeframe: '',
        description:
          "À la fin de la journée, vos collaborateurs maîtrisent Claude Cowork et savent l'intégrer immédiatement dans leur quotidien.",
        pills: ['2 demi-journées'],
        cta: 'Voir le détail de la formation',
        imageSrc: '/images/photo_formation_6.jpg',
        imageAlt: 'Session de formation en présentiel avec une équipe en salle',
      },
      {
        id: 'Phase 2',
        title:
          '4 ateliers pratiques pour intégrer Claude Cowork dans vos process et construire la feuille de route de votre transformation IA',
        timeframe: '',
        description:
          'Des collaborateurs désignés travaillent avec nos formateurs pour intégrer Claude Cowork dans vos 3 process les plus chronophages, établissent une feuille de route à 90 jours — Ils deviennent ainsi les moteurs de votre transformation IA.',
        pills: ['4 demi-journées'],
        cta: 'Voir le détail des ateliers',
        imageSrc: '/images/photo_formation_7.jpg',
        imageAlt: 'Session de formation en présentiel avec une équipe en salle',
      },
    ],
    imagePlaceholderSuffix: '· à venir',
    continuous: {
      kicker: 'Accompagnement continu pendant 4 semaines',
      h3: 'Au-delà de la formation et des ateliers',
      p: "Vous bénéficiez d'un accompagnement continu pour ancrer durablement les usages.",
      items: [
        {
          title: 'Des réponses à vos questions en moins de 24 heures',
          description:
            'Une question ou un blocage avec Claude Cowork ? Nous vous garantissons une réponse des les 24 heures.',
        },
        {
          title: 'Accès aux bonnes pratiques',
          description:
            "Nos retours d'expériences issus de nombreuses entreprises accompagnées sont mis à disposition de vos équipes.",
        },
      ],
    },
    afterProgram: {
      h2: 'Et après ce programme ?',
      p: "Ce programme n'est que le début de votre transformation IA. Nous restons à vos côtés comme partenaire IA de confiance.",
    },
    lifelongCarousel: {
      ariaRegion: 'Après le programme',
      slideLabelSeparator: 'sur',
      dotLabelPrefix: 'Afficher la carte ',
    },
    lifelongBenefits: [
      {
        id: 'brief',
        title: 'Brief mensuel personnalisé',
        description:
          'Les nouveautés Claude pertinentes pour votre contexte métier, filtrées et synthétisées — sans bruit, sans perte de temps.',
      },
      {
        id: 'skills',
        title: 'Base de skills Claude mise à jour en continu',
        description:
          'Vos équipes retrouvent toujours les bonnes pratiques actuelles — jamais des méthodes déjà obsolètes.',
      },
      {
        id: 'access',
        title: 'Accès prioritaire à nos experts',
        description:
          'Une question sur un usage avancé ou une évolution de Claude ? Nos formateurs vous répondent en priorité.',
      },
    ],
  },
  resultDashboard: {
    badge: 'Résultat',
    h3: "À l'issue de ce programme",
    sub: 'Vous repartez avec :',
    footer: 'Vos spécialistes IA internes sont autonomes pour porter cette transformation auprès des autres équipes.',
    metrics: [
      {
        id: 'team',
        value: 100,
        suffix: '%',
        title: 'Équipe formée et autonome',
        micro: '',
        animate: true,
      },
      {
        id: 'process',
        value: 3,
        suffix: ' de vos process',
        title: 'les plus chronophages bénéficient de Claude Cowork',
        micro: '',
        animate: true,
      },
      {
        id: 'roadmap',
        value: 90,
        suffix: '',
        unit: 'jours',
        title: 'Feuille de route co-construite et prête à exécuter',
        micro: '',
        animate: true,
      },
      {
        id: 'partner',
        value: 1,
        suffix: ' partenaire IA',
        title: 'de confiance qui vous accompagne dans la durée',
        micro: '',
        animate: true,
      },
    ],
  },
  faq: {
    h2Lead: 'Questions ',
    h2Accent: 'fréquentes',
    sub: 'Tout ce que vous voulez savoir avant de démarrer votre transformation IA.',
    items: [
      {
        q: 'Qu’est-ce que Claude Cowork concrètement ?',
        a: 'Claude Cowork est un accompagnement qui combine formation à l’assistant IA Claude et mise en œuvre dans vos process métier : rédaction, synthèses, qualification de dossiers, coordination — pour gagner du temps sur les tâches répétitives tout en gardant le contrôle sur les décisions professionnelles.',
      },
      {
        q: 'Est-ce adapté à un cabinet qui débute complètement avec l’IA ?',
        a: 'Oui. Le parcours part du niveau réel de l’équipe : vocabulaire clair, premiers cas concrets, progression par étapes. Aucun prérequis technique n’est exigé ; l’objectif est que chacun s’approprie des usages utiles au quotidien.',
      },
      {
        q: 'Comment identifier les bons cas d’usage dans notre cabinet ?',
        a: 'Nous cartographions vos flux avec vous, priorisons les tâches chronophages à faible risque, et testons rapidement sur vos vrais documents pour valider la pertinence avant de généraliser. Les cas d’usage émergent de votre activité, pas d’une liste générique.',
      },
      {
        q: 'Est-ce que ça s’intègre facilement dans nos outils et process existants ?',
        a: 'L’approche vise à enrichir ce que vous faites déjà : messagerie, documents, outils métier selon les cas. On s’appuie sur vos process actuels pour y brancher Claude de façon progressive, sans tout reconstruire d’un coup.',
      },
      {
        q: 'Claude Cowork est-il conforme au RGPD ?',
        a: 'L’accompagnement intègre les principes de minimisation des données, de finalité et de traçabilité. Nous vous aidons à cadrer les usages (données personnelles, sous-traitance, analyses d’impact si besoin) en cohérence avec votre rôle de responsable de traitement.',
      },
      {
        q: 'Qu’en est-il de la sécurité de nos données ?',
        a: 'Les bonnes pratiques couvrent la confidentialité des supports, la gestion des accès et le choix des environnements adaptés à votre politique interne. Les sujets sensibles sont traités avec vos référents IT ou juridiques au cas par cas.',
      },
      {
        q: 'Que se passe-t-il après la formation ?',
        a: 'Vous repartez avec une équipe autonome sur les usages validés et une feuille de route pour étendre l’adoption. Selon le format retenu, un suivi peut prolonger le dispositif : brief sur les évolutions pertinentes, mise à jour des bonnes pratiques et accès à un support pour les questions d’usage.',
      },
    ],
  },
  testimonial: {
    tagline: 'Témoignages',
    title: 'Ce que nos clients disent de nous',
    prev: 'Témoignage précédent',
    next: 'Témoignage suivant',
    pagination: 'Pagination des témoignages',
    items: [
      {
        id: 2,
        logoLight: '/images/made_in_courtage_logo.png',
        logoDark: '/images/made_in_courtage_logo.png',
        testimonial:
          "Un immense BRAVO à Yasmina qui a su comprendre nos besoins, reformuler nos envies et nous livrer dans un temps record notre assistant juridique dopé à l'IA !",
        author: { name: 'Eric', designation: 'Made In Courtage', image: '/images/eric_debese_avatar.jpg' },
      },
      {
        id: 1,
        logoLight: '/images/kilome_logo.png',
        logoDark: '/images/kilome_logo.png',
        testimonial:
          'Merci Yasmina pour la formation, que j’ai trouvée vraiment top. Les différents modules étaient très clairs et concrets, et répondaient parfaitement à mes attentes.',
        author: { name: 'Jaafar', designation: 'Kilome', image: '/images/jaafar_avatar.webp' },
      },
      {
        id: 3,
        logoLight: '/images/fit_routine_logo.png',
        logoDark: '/images/fit_routine_logo.png',
        testimonial:
          'Justin a cette force de comprendre nos besoins. Il veut comprendre de A à Z comment fonctionne ton activité pour bien savoir quel plan mettre en place. Je recommande à 1000 % les compétences de Justin pour la qualité de son travail et son professionnalisme hors pair.',
        author: { name: 'Nicolas', designation: 'Fit Routine', image: '' },
      },
      {
        id: 6,
        logoLight: '/images/pharmassist_logo.png',
        logoDark: '/images/pharmassist_logo.png',
        testimonial:
          'Non seulement Yasmina est une fine pédagogue mais surtout sa capacité à prendre en charge avec douceur toutes mes demandes m’a immédiatement rassuré. Aujourd’hui, j’ai des bases solides et une furieuse envie de faire par moi-même en toute autonomie.',
        author: { name: 'Mat', designation: 'Formation IA', image: '' },
      },
      {
        id: 4,
        logoLight: null,
        logoDark: null,
        testimonial:
          'Merci Yasmina encore pour cette conférence sur l’intelligence artificielle c’était vraiment enrichissant, très précis et surtout accessible. Un vrai plus… ta clarté et la fluidité de ta présentation : on suit facilement, même sur des sujets parfois techniques.',
        author: { name: 'Florent', designation: 'Conférence IA', image: '' },
      },
      {
        id: 5,
        logoLight: null,
        logoDark: null,
        testimonial:
          'Merci beaucoup Yasmina pour cette conférence inspirante et très éclairante. Tu as su rendre concrète et accessible l’importance, pour les entreprises, d’accueillir l’IA dès aujourd’hui. Un grand merci pour la clarté, la pédagogie et l’élan que tu nous transmets.',
        author: { name: 'Une participante', designation: 'Masterclass IA', image: '' },
      },
    ],
  },
  team: {
    tagline: 'Notre équipe',
    title: 'Pédagogue et orientée résultats',
    bios: {},
  },
  footer: {
    legal: 'Mentions Légales',
    legalPath: '/mentions-legales',
    linkedInAria: 'Beyond Partners sur LinkedIn',
    copyright: `${new Date().getFullYear()} Beyond Partners. Tous droits réservés.`,
    language: {
      label: 'Langue',
      fr: 'FR',
      en: 'EN',
      switchToFr: 'Afficher le site en français',
      switchToEn: 'Show site in English',
    },
  },
  legalPage: {
    backHome: "Retour à l'accueil",
    h2: 'Mentions légales',
  },
  bannerPage: {
    backHome: "Retour à l'accueil",
    h1: 'Proposition de bannière — page entreprise LinkedIn',
    intro:
      "Utilisez la maquette ci-dessous comme référence visuelle, puis recréez-la dans Figma ou Canva aux dimensions indiquées pour exporter une image prête à être téléversée sur LinkedIn. Vous pouvez aussi faire une capture d'écran de la zone de prévisualisation si vous avez besoin d'un brouillon rapide (pour une qualité optimale, préférez un export PNG aux bonnes dimensions).",
    specsTitle: 'Spécifications',
    specsDimensionsLabel: 'Dimensions',
    specsFormatsLabel: 'Formats',
    specsSafeZoneLabel: 'Zone sûre',
    specsDimensionsTemplate:
      'Maquette : {width} × {height} px (−20 % de largeur vs 1 128 px). Export LinkedIn : 1 128 × 191 px.',
    specsFormats: 'PNG ou JPEG, ≤ 3–4 Mo selon LinkedIn',
    specsSafeZone: 'Garder logo et texte dans le tiers central ; éviter les bords (recadrage mobile).',
    mockupTitleTemplate: 'Maquette (proportions {width} : {height}, largeur −20 %)',
    mockupHint:
      "Même langage visuel que l'accueil : fond blanc, halo accent, bandeau pêche (#ffefea) comme sous le Hero, logo BeyondPartners, accroche avec mot-clé en accent. Espace réservé en bas à gauche pour le logo LinkedIn (éviter d'y placer du texte).",
    copyTitle: 'Textes à copier-coller',
    copyIntro:
      'Collez ces formulations dans votre fichier de design ou dans la description de la page LinkedIn si vous les réutilisez ailleurs.',
    copyBlocks: [
      {
        title: "Titre (comme sur la page d'accueil)",
        lines: ['Démultipliez la productivité de votre cabinet d’architecte avec Claude Cowork'],
      },
      {
        title: 'Sous-titre (paragraphe Hero)',
        lines: [
          'Équipez vos collaborateurs du meilleur assistant IA du marché et accélerez chaque phase de projet, de l’esquisse à la réalisation.',
        ],
      },
      {
        title: 'Piste courte pour la bannière',
        lines: ['Démultipliez la productivité · Claude Cowork pour cabinets d’architectes'],
      },
    ],
    bannerMobileTag: "Claude Cowork · cabinets d'architectes",
    bannerLine1: 'Démultipliez la productivité',
    bannerLine2a: 'de votre cabinet',
    bannerLine2b: 'avec Claude Cowork',
    tipLead: 'Conseil :',
    tipBody:
      "après export, vérifiez la bannière sur ordinateur et sur l'application mobile LinkedIn. Si le texte est rogné, rapprochez-le du centre ou réduisez la taille des caractères.",
  },
}

export default messages
