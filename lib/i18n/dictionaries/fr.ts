import type { Dictionary } from './en'

export const dictionary: Dictionary = {
  nav: {
    home: 'Accueil',
    analyze: 'Analyser',
    example: 'Exemple',
    about: 'À propos',
    blog: 'Blog',
    contact: 'Contact',
  },

  langSwitcher: {
    label: 'Langue',
  },

  cta: {
    analyzeData: 'Analysez vos données TikTok →',
    viewExample: 'Voir un exemple de TikTok Wrapped →',
    backToHome: "← Retour à l'accueil",
  },

  disclaimer: {
    underH1:
      "Outil indépendant et non officiel — sans aucune affiliation, approbation ni lien avec TikTok ou ByteDance Ltd.",
  },

  consent: {
    ariaLabel: 'Consentement aux cookies',
    text:
      "Nous accordons de l'importance à votre vie privée. Nous utilisons des cookies pour réaliser des analyses statistiques (Google Tag Manager) et pour afficher des publicités via Google AdSense, y compris à des fins de personnalisation publicitaire. Avec votre consentement, Google et ses partenaires peuvent utiliser des cookies pour personnaliser les publicités en fonction de vos visites sur ce site et sur d'autres sites. Vous pouvez accepter, refuser ou modifier votre choix à tout moment. Consultez notre [[privacy:Politique de confidentialité]].",
    accept: 'Tout accepter',
    reject: 'Refuser les cookies non essentiels',
  },

  footer: {
    description:
      "Un outil indépendant et non officiel pour comprendre l'export de vos données TikTok — vos habitudes de visionnage, un classement de personnalité ludique et l'histoire complète de votre TikTok.",
    productTitle: 'Produit',
    legalTitle: 'Mentions légales',
    resourcesTitle: 'Ressources',
    links: {
      home: 'Accueil',
      analyze: 'Analyser',
      example: 'Exemple',
      exampleWrapped: 'Exemple de Wrapped',
      about: 'À propos',
      privacy: 'Politique de confidentialité',
      terms: "Conditions d'utilisation",
      contact: 'Contact',
      blog: 'Blog',
    },
    copyright: '© {year} TikTok Wrapped. Tous droits réservés.',
    disclaimer:
      "TikTok Wrapped est un outil indépendant permettant d'analyser l'export de vos propres données TikTok. Il n'a aucune affiliation, approbation ni lien avec TikTok ou ByteDance Ltd. « TikTok » est une marque déposée de son propriétaire respectif.",
    privacy: 'Confidentialité',
    terms: 'Conditions',
    cookieSettings: 'Paramètres des cookies',
  },

  home: {
    logoSubtitle: "Analysez l'export de vos données TikTok",
    heroTagline: 'Votre année sur TikTok, dévoilée 🎬',
    heroPlatformTagline:
      "Une plateforme indépendante pour comprendre vos données d'activité personnelles sur TikTok.",
    features: ['Obtenez votre classement de personnalité', 'Consultez des statistiques de visionnage détaillées'],
    heroDescription:
      "TikTok Wrapped est un outil en ligne indépendant qui vous aide à comprendre votre activité personnelle sur TikTok à partir de l'export officiel de vos données TikTok. Lorsque vous demandez vos données à TikTok, elles vous sont remises sous la forme d'un fichier ZIP ou JSON contenant des informations d'activité brutes. TikTok Wrapped analyse ce fichier et le convertit en résumés clairs et en visualisations explicites, comme des tendances d'utilisation, des chronologies d'activité et des statistiques générales d'engagement. Le service fonctionne uniquement avec les données que vous choisissez de téléverser et est destiné à des fins d'information et d'analyse personnelle.",
    learnMoreTitle: 'En savoir plus sur les données TikTok',
    learnMoreText:
      "TikTok permet aux utilisateurs de télécharger un export détaillé de leurs données d'activité personnelles, mais ces informations sont souvent fournies dans un format technique difficile à interpréter. TikTok Wrapped aide les utilisateurs à comprendre comment fonctionnent leurs données, ce qu'elles contiennent et comment les analyser de manière responsable. À travers des guides pédagogiques et des explications, nous mettons l'accent sur la transparence, la confidentialité et la clarté — en aidant les utilisateurs à donner du sens à leurs propres données, sans suppositions ni accès à la plateforme.",
    learnMoreLinks: [
      { slug: 'tiktok-wrapped-explained-what-it-is-how-it-works', label: "TikTok Wrapped expliqué : ce que c'est et comment ça marche" },
      { slug: 'how-to-download-analyze-tiktok-data', label: 'Comment télécharger et analyser vos données TikTok' },
      { slug: 'what-your-tiktok-usage-says-about-your-digital-habits', label: 'Ce que votre utilisation de TikTok révèle de vos habitudes numériques' },
      { slug: 'how-to-analyze-tiktok-data-safely-privacy-first-guide', label: 'Comment analyser vos données TikTok en toute sécurité' },
    ],
    revealTitle: 'Ce que les données TikTok peuvent révéler',
    revealItems: [
      "Fréquence d'utilisation et tendances d'activité au fil du temps",
      "Habitudes d'engagement selon l'heure de la journée",
      "Comportement général d'interaction (mentions j'aime, commentaires, partages)",
      "Évolution à long terme de vos habitudes d'utilisation de l'application",
    ],
    revealDisclaimer:
      "Toutes les analyses reposent sur les exports de données appartenant à l'utilisateur et sont destinées uniquement à des fins d'information et de compréhension personnelle.",
    howItWorksTitle: 'Comment fonctionne TikTok Wrapped',
    howItWorksText:
      "TikTok Wrapped fonctionne en analysant les exports officiels de données TikTok que les utilisateurs choisissent de télécharger eux-mêmes. La plateforme se concentre sur la synthèse et l'organisation de ces informations en analyses lisibles, sans accéder aux comptes des utilisateurs ni collecter de données supplémentaires. Des instructions détaillées et des outils d'analyse sont disponibles sur une [[analyze:page dédiée]] pour les utilisateurs qui souhaitent approfondir l'exploration de leurs données.",
    analyzeButton: 'Analysez vos données TikTok →',
    demoTitle: '🎬 Voyez-le en action',
    demoDescription:
      "Vous voulez voir ce que produit TikTok Wrapped avant de vous lancer ? Parcourez un exemple complet et réaliste créé à partir de données fictives — aucun téléversement requis.",
    demoButton: 'Voir un exemple de TikTok Wrapped →',
    moreStatsTitle: '✨ Et bien plus encore vous attend...',
    statTags: [
      '🔍 Top recherches',
      '📅 Activité par année',
      '⏰ Heures de pointe',
      "❤️ Mentions j'aime et commentaires",
      '📤 Historique de partages',
      '🔴 Lives',
    ],
    demoCta: 'Prêt à découvrir vos statistiques ? [[analyze:Analysez vos données maintenant ! →]]',
  },

  analyze: {
    subtitle: 'Analysez vos données TikTok',
    howToTitle: '📱 Comment récupérer vos données TikTok',
    importantLabel: 'Important :',
    importantText:
      "TikTok ne fournit vos données que sur demande. Après avoir soumis une demande, il peut s'écouler de quelques heures à 3 jours avant que vos données soient prêtes. Veillez à sélectionner le format « JSON » lors de votre demande !",
    steps: [
      { title: 'Ouvrez les Paramètres', text: 'Allez sur votre profil → appuyez sur le menu ☰ → sélectionnez Paramètres', alt: 'Étape 1 : Ouvrir les Paramètres' },
      { title: 'Accédez au Compte', text: 'Dans Paramètres et confidentialité, trouvez et appuyez sur Compte', alt: 'Étape 2 : Accéder au Compte' },
      { title: 'Téléchargez vos données', text: 'Faites défiler vers le bas et appuyez sur « Télécharger vos données »', alt: 'Étape 3 : Télécharger vos données' },
      { title: 'Demandez vos données (JSON)', text: 'Changez le format en « JSON », sélectionnez « Toutes les données », puis appuyez sur « Demander les données »', alt: 'Étape 4 : Demander les données' },
    ],
    footerSteps: [
      'Vous recevrez une notification lorsque vos données seront prêtes',
      "Téléchargez le fichier ZIP depuis l'onglet « Télécharger les données »",
      'Téléversez-le ici et profitez de vos statistiques !',
    ],
    dropPrompt: 'Déposez votre fichier ZIP ou JSON ici',
    dropHint: 'TikTok → Paramètres → Confidentialité → Télécharger les données',
    analyzeBtn: '🔍 Analyser',
    analyzingBtn: '⏳ Analyse en cours...',
    privacyNote:
      "Votre fichier est traité uniquement pour générer vos résultats. Nous ne vendons, ne partageons ni n'utilisons les données téléversées à des fins publicitaires.",
    howToLink: "Vous n'avez pas vos données ? Découvrez comment les télécharger ↓",
    selectFileError: 'Veuillez sélectionner un fichier',
    fileTypeError: 'Veuillez sélectionner un fichier ZIP ou JSON',
    genericError: 'Une erreur est survenue lors du traitement du fichier',
    jsonNotFound: "Fichier JSON introuvable dans l'archive",
    progress: {
      reading: 'Lecture du fichier...',
      extracting: "Extraction de l'archive ZIP...",
      readingFile: 'Lecture de {name}...',
      parsing: 'Analyse du JSON...',
      analyzing: 'Analyse des données...',
      processing: 'Traitement des données...',
    },
    results: {
      yourStats: '🎰 Vos statistiques',
      videosWatched: 'Vidéos regardées',
      hoursOnTikTok: 'Heures sur TikTok',
      daysOfWatching: 'Jours de visionnage',
      yourRank: 'Votre classement TikTok',
      followers: 'Abonnés',
      following: 'Abonnements',
      interests: "Centres d'intérêt",
      whenActive: '⏰ Quand vous êtes le plus actif',
      peakHour: 'Heure de pointe',
      mostActiveDay: 'Jour le plus actif',
      firstWatch: 'Premier visionnage',
      lastWatch: 'Dernier visionnage',
      engagement: '❤️ Engagement',
      videosLiked: 'Vidéos aimées',
      favorites: 'Favoris',
      comments: 'Commentaires',
      shares: 'Partages',
      activityByYear: '📅 Activité par année',
      year: 'Année',
      videos: 'vidéos',
      mostActiveMonth: 'Mois le plus actif',
      avgPerDayPrefix: 'Moyenne de',
      avgPerDaySuffix: 'vidéos par jour',
      collections: '📂 Vos collections',
      favoritesTitle: '⭐ Favoris',
      favoriteSounds: 'Sons favoris',
      favoriteEffects: 'Effets favoris',
      favoriteHashtags: 'Hashtags favoris',
      topSearches: '🔍 Top recherches',
      totalSearches: 'Total des recherches',
      shareDestinations: '📤 Destinations de partage',
      yourComments: '💭 Vos commentaires',
      totalComments: 'Total des commentaires',
      avgChars: 'moy. {n} caractères',
      messages: '💬 Messages',
      chats: 'Conversations',
      messagesLabel: 'Messages',
      sent: 'Envoyés',
      received: 'Reçus',
      topChats: 'Top conversations :',
      recentFollowers: '👥 Abonnés récents',
      devicesNetworks: '📱 Appareils et réseaux',
      totalLogins: 'Total des connexions',
      devices: 'Appareils',
      networks: 'Réseaux',
      tiktokLive: '🔴 TikTok Live',
      livesWatched: 'Lives regardés',
      liveComments: 'Commentaires en live',
      blocked: '🚫 Bloqués',
      messagesCountSuffix: 'messages',
    },
  },

  example: {
    title: 'Exemple de TikTok Wrapped',
    subtitle: 'Un exemple complet et réaliste — aucun téléversement requis',
    introText:
      "Cette page montre exactement ce que vous obtenez avec [[home:TikTok Wrapped]] après l'analyse d'un export de données TikTok — sans rien téléverser. Chaque chiffre ci-dessous appartient à un compte fictif et n'est fourni qu'à titre d'illustration. Lorsque vous [[analyze:analysez votre propre export]], le même récapitulatif est généré de manière privée dans votre navigateur à partir de votre fichier réel. TikTok Wrapped est un outil indépendant et non officiel, sans aucune affiliation ni approbation de TikTok ou ByteDance Ltd.",
    rankExplanation:
      "Votre classement repose sur le temps de visionnage estimé. Les 408 heures de ce compte fictif le placent dans le palier « Main Character » — il existe 16 classements au total, de « NPC Energy » jusqu'au sommet « No Life Speedrun WR ».",
    ctaTitle: '🎬 Prêt à découvrir le vôtre ?',
    ctaDescription:
      "Votre véritable TikTok Wrapped est généré entièrement dans votre navigateur à partir de votre propre export de données — votre fichier ne quitte jamais votre appareil.",
    ctaButton: 'Analysez vos données TikTok →',
    ctaLearn: "Nouveau dans les exports de données ? [[blog:Découvrez comment télécharger vos données TikTok ↗]]",
    sample: {
      displayName: 'Utilisateur exemple',
      interests: ['Humour', 'Cuisine', 'Voyage', 'Fitness', 'Musique'],
      activeDay: 'Dimanche',
      activeMonth: 'Novembre 2024',
      firstWatch: '4 mars 2022',
      lastWatch: '14 déc. 2025',
      searches: [
        'recettes de dîner faciles',
        'entraînement marathon',
        'astuces de voyage',
        'spectacle de stand-up',
        'entraînement à la maison',
        'voyage en europe pas cher',
        'tutoriel guitare',
        'idées de meal prep',
        'conseils de productivité',
        'street food',
      ],
      shareMethods: ['Message direct', 'Copier le lien', 'WhatsApp', 'Instagram'],
      networks: ['Wi-Fi', 'Données mobiles'],
    },
  },

  about: {
    title: 'À propos de nous',
    paragraphs: [
      "TikTok Wrapped est un service en ligne indépendant conçu pour aider les utilisateurs à mieux comprendre leurs données d'activité personnelles sur TikTok.",
      "TikTok permet aux utilisateurs de télécharger un export officiel de données contenant des informations sur leur activité sur la plateforme. Bien que ces données appartiennent à l'utilisateur, elles sont souvent fournies dans un format brut et non structuré, difficile à interpréter. TikTok Wrapped propose des outils qui organisent ces données et les présentent de manière claire, lisible et conviviale.",
      "Le site web permet aux utilisateurs de téléverser leur propre export de données TikTok et de recevoir des analyses automatisées basées uniquement sur ce fichier. Le service se concentre sur la synthèse, la visualisation et l'analyse générale des tendances d'utilisation afin d'aider les utilisateurs à mieux comprendre leur comportement numérique.",
      "TikTok Wrapped ne crée pas de comptes, n'exige aucune inscription et ne propose ni fonctionnalités de réseau social ni hébergement de contenu. Le site existe uniquement en tant qu'outil d'information qui traite les fichiers fournis par l'utilisateur, à la demande de celui-ci.",
      "Nous visons à offrir une expérience simple, transparente et respectueuse de la vie privée. Le site est gratuit et financé par la publicité ; consultez notre [[privacy:Politique de confidentialité]] pour savoir comment fonctionnent les cookies et les publicités.",
      "TikTok Wrapped est exploité par AffSquad et peut être contacté à l'adresse [[email:hello@ttwrapper.com]]. C'est un outil indépendant et non officiel, sans aucune affiliation, approbation ni lien avec TikTok ou ByteDance Ltd.",
    ],
    faqTitle: 'FAQ',
    faq: [
      { q: "Qu'est-ce que TikTok Wrapped ?", a: "TikTok Wrapped est un outil en ligne qui aide les utilisateurs à analyser et à mieux comprendre leur activité personnelle sur TikTok à partir de l'export officiel de leurs données TikTok." },
      { q: 'Comment obtenir mon export de données TikTok ?', a: "Vous pouvez demander et télécharger votre export de données depuis les paramètres de TikTok (Données / Confidentialité). Une fois le fichier ZIP reçu de TikTok, vous pouvez le téléverser sur TikTok Wrapped." },
      { q: 'Conservez-vous mon fichier ZIP téléversé ?', a: "Les fichiers sont traités uniquement pour générer les analyses que vous demandez. Nous ne stockons ni ne vendons les données téléversées et ne les utilisons pas pour la personnalisation publicitaire." },
      { q: 'TikTok Wrapped est-il affilié à TikTok ?', a: "Non. TikTok Wrapped est un service indépendant, sans aucune affiliation ni approbation de TikTok ou ByteDance." },
      { q: 'TikTok Wrapped est-il gratuit ?', a: "Les fonctionnalités principales du site sont accessibles gratuitement. Le site peut afficher des publicités afin de financer son développement et ses coûts d'hébergement continus." },
    ],
  },

  contact: {
    title: 'Contactez-nous',
    intro:
      "Si vous avez des questions sur TikTok Wrapped, notre site web ou le fonctionnement du service, vous pouvez nous joindre en utilisant les coordonnées ci-dessous.",
    welcomeTitle: 'Nous accueillons volontiers les demandes concernant :',
    welcomeItems: [
      'les questions générales sur la plateforme,',
      'la confidentialité et le traitement des données,',
      'les problèmes techniques ou les retours,',
      'les questions juridiques ou liées à nos politiques.',
    ],
    howToTitle: 'Comment nous contacter',
    emailLabel: 'E-mail :',
    responseNote: "Nous nous efforçons de répondre à toute demande légitime sous 2 à 3 jours ouvrés.",
    aboutTitle: 'À propos de la communication',
    aboutText1:
      "TikTok Wrapped est un service en ligne indépendant exploité par AffSquad, dédié à l'analyse des exports de données TikTok fournis par les utilisateurs. Il n'a aucune affiliation, approbation ni lien avec TikTok ou ByteDance Ltd. Nous n'offrons pas d'assistance client via les réseaux sociaux et ne proposons pas d'assistance téléphonique pour le moment.",
    aboutText2:
      "Veuillez ne pas envoyer d'informations personnelles sensibles par e-mail, sauf si cela est nécessaire pour traiter votre demande.",
  },

  privacy: {
    title: 'Politique de confidentialité',
    lastUpdatedLabel: 'Dernière mise à jour :',
    lastUpdatedDate: '20 juin 2026',
    intro:
      "Cette politique de confidentialité explique comment TikTok Wrapped (« TikTok Wrapped », « nous ») collecte, utilise et protège les informations lorsque vous visitez ttwrapper.com. TikTok Wrapped est un outil indépendant et non officiel, sans aucune affiliation, approbation ni lien avec TikTok ou ByteDance Ltd.",
    cookieTable: {
      providerHeader: 'Fournisseur',
      purposeHeader: 'Finalité',
      typeHeader: 'Type',
      rows: [
        { provider: 'TikTok Wrapped', purpose: 'Mémorise votre choix de consentement aux cookies', type: 'Essentiel' },
        { provider: 'Google Tag Manager / Analytics', purpose: "Statistiques d'utilisation agrégées et anonymes", type: 'Analytique (consentement requis)' },
        { provider: 'Google AdSense / DoubleClick', purpose: 'Diffusion et mesure des publicités, y compris les publicités personnalisées', type: 'Publicité (consentement requis)' },
      ],
    },
    sections: [
      { title: '1. Qui nous sommes (responsable du traitement)', paragraphs: ["TikTok Wrapped est exploité par AffSquad, le responsable du traitement des données pour ce site web. Si vous avez des questions sur cette politique ou sur la manière dont vos données sont traitées, vous pouvez nous contacter à l'adresse [[email:hello@ttwrapper.com]] ou via notre page [[contact:Contact]]."] },
      { title: '2. Vos données TikTok téléversées', paragraphs: ["Lorsque vous utilisez l'analyseur, l'export de vos données TikTok (ZIP ou JSON) est lu et traité entièrement au sein de votre propre navigateur. Le fichier n'est ni téléversé sur nos serveurs ni stocké chez nous, et nous ne créons aucun profil ni base de données à partir de celui-ci. L'analyse existe uniquement dans l'onglet de votre navigateur et disparaît lorsque vous fermez ou actualisez la page.", "Nous n'exigeons ni création de compte, ni connexion, ni identification personnelle pour utiliser l'analyseur."] },
      { title: '3. Informations collectées automatiquement', paragraphs: ['Comme la plupart des sites web, lorsque vous visitez ttwrapper.com, certaines informations techniques peuvent être collectées au moyen de cookies et de technologies similaires, par nous et par des fournisseurs tiers (tels que Google), notamment :'], list: ["le type d'appareil et de navigateur, la taille de l'écran et le système d'exploitation ;", "l'adresse IP (utilisée pour estimer votre localisation générale et à des fins de sécurité) ;", "les pages visitées, les URL de provenance et les événements d'interaction ;", 'les identifiants de cookies utilisés pour les statistiques et la publicité.'], afterList: ['Ces informations ne sont traitées que lorsque vous avez donné votre consentement ou lorsque nous avons un intérêt légitime, comme décrit ci-dessous.'] },
      { title: '4. Cookies et technologies similaires', paragraphs: ["Nous utilisons des cookies et des technologies similaires pour les fonctionnalités essentielles, les statistiques et la publicité. Les cookies non essentiels (statistiques et publicité) ne sont déposés qu'après que vous avez donné votre consentement via notre bannière de cookies. Les principales catégories sont les suivantes :"], hasCookieTable: true, afterList: ["Vous pouvez modifier ou retirer votre consentement à tout moment à l'aide du lien « Paramètres des cookies » situé en bas de page du site."] },
      { title: '5. Publicité (Google AdSense)', paragraphs: ["Nous utilisons Google AdSense pour afficher de la publicité. Les informations suivantes s'appliquent :"], list: ["Des fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des publicités en fonction de vos visites antérieures sur ce site web et sur d'autres sites.", "L'utilisation par Google de cookies publicitaires (y compris le cookie DoubleClick) lui permet, ainsi qu'à ses partenaires, de vous diffuser des publicités en fonction de vos visites sur ce site et/ou d'autres sites sur Internet.", 'Vous pouvez refuser la publicité personnalisée en visitant [[adsSettings:les paramètres des annonces Google]].', "Vous pouvez refuser l'utilisation de cookies à des fins de publicité personnalisée par certains fournisseurs tiers sur [[aboutAds:aboutads.info/choices]] ou [[yourChoices:youronlinechoices.eu]].", "Découvrez comment Google utilise les informations provenant des sites qui font appel à ses services sur [[partnerSites:policies.google.com/technologies/partner-sites]]."], afterList: ["Si vous ne consentez pas à la publicité personnalisée, Google peut tout de même vous diffuser des publicités non personnalisées, basées sur le contexte général plutôt que sur votre historique de navigation."] },
      { title: '6. Statistiques', paragraphs: ["Nous utilisons Google Tag Manager et les services d'analyse de Google pour comprendre, de manière agrégée, comment les visiteurs utilisent le site (par exemple, quelles pages sont populaires). Ces services peuvent déposer des cookies et traiter des données techniques telles que votre adresse IP. Ils ne se chargent qu'après que vous avez consenti aux cookies de statistiques."] },
      { title: '7. Gestion du consentement', paragraphs: ["Nous utilisons Google Consent Mode v2. Par défaut, le stockage à des fins publicitaires et statistiques est défini sur « refusé », et les balises associées ne se chargent pas tant que vous n'avez pas fait votre choix dans notre bannière de cookies. Vous pouvez rouvrir la bannière et modifier votre décision à tout moment via le lien « Paramètres des cookies » en bas de page. Les visiteurs de l'Espace économique européen, du Royaume-Uni et de la Suisse se voient demander leur consentement avant l'utilisation de tout cookie non essentiel."] },
      { title: '8. Comment nous utilisons les informations', paragraphs: [], list: ['exploiter, maintenir et sécuriser le site web ;', "générer des analyses à partir des données que vous choisissez d'analyser (dans votre navigateur) ;", "comprendre l'utilisation agrégée et améliorer le service ;", 'afficher des publicités qui contribuent à financer ce service gratuit.'], afterList: ["Nous ne vendons pas vos informations personnelles et nous n'utilisons pas votre export TikTok téléversé à des fins publicitaires ou de profilage."] },
      { title: '9. Partage des données', paragraphs: ["Nous ne partageons vos données TikTok téléversées avec personne. Les données techniques et de cookies décrites ci-dessus peuvent être traitées par nos prestataires de services, notamment Google (publicité et statistiques) et notre hébergeur (Vercel), chacun agissant conformément à sa propre politique de confidentialité."] },
      { title: '10. Conservation des données', paragraphs: ["Votre export TikTok téléversé n'est jamais stocké par nos soins ; il n'y a donc rien à conserver ou à supprimer de notre côté. Les données agrégées de statistiques et de publicité détenues par nos prestataires sont conservées conformément à leurs propres durées de conservation (par exemple, les paramètres de conservation standard de Google)."] },
      { title: '11. Vos droits en matière de confidentialité (RGPD / RGPD britannique)', paragraphs: ["Si vous résidez dans l'EEE ou au Royaume-Uni, vous disposez du droit d'accès, de rectification, d'effacement, de limitation ou d'opposition au traitement de vos données personnelles, ainsi que du droit à la portabilité des données et du droit de retirer votre consentement à tout moment. Pour exercer ces droits, contactez-nous à l'adresse [[email:hello@ttwrapper.com]]. Vous avez également le droit d'introduire une réclamation auprès de votre autorité locale de protection des données."] },
      { title: '12. Droits à la vie privée en Californie (CCPA / CPRA)', paragraphs: ["Les résidents de Californie ont le droit de savoir quelles informations personnelles sont collectées, de demander leur suppression et de refuser la « vente » ou le « partage » de leurs informations personnelles. Nous ne vendons pas d'informations personnelles. Pour exercer vos droits, contactez-nous à l'adresse [[email:hello@ttwrapper.com]]."] },
      { title: '13. Transferts internationaux de données', paragraphs: ["Nos prestataires peuvent traiter des données sur des serveurs situés en dehors de votre pays, y compris aux États-Unis. Lorsque cela est requis, ces transferts sont protégés par des garanties appropriées, telles que les clauses contractuelles types des prestataires."] },
      { title: "14. Confidentialité des enfants", paragraphs: ["TikTok Wrapped ne s'adresse pas aux enfants de moins de 13 ans, et nous ne collectons pas sciemment d'informations personnelles les concernant. Les exigences d'âge minimum propres à TikTok s'appliquent pour obtenir un export de données."] },
      { title: '15. Modifications de cette politique', paragraphs: ["Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Les modifications importantes seront indiquées par la mise à jour de la date de « Dernière mise à jour » en haut de cette page."] },
      { title: '16. Contact', paragraphs: ["Des questions sur cette politique de confidentialité ? Écrivez à [[email:hello@ttwrapper.com]] ou utilisez notre page [[contact:Contact]]."] },
    ],
  },

  terms: {
    title: "Conditions d'utilisation",
    lastUpdatedLabel: 'Dernière mise à jour :',
    lastUpdatedDate: '20 juin 2026',
    intro:
      "En accédant à TikTok Wrapped (ttwrapper.com) ou en l'utilisant, vous acceptez les présentes conditions d'utilisation. Si vous n'êtes pas d'accord, veuillez ne pas utiliser le site web.",
    sections: [
      { title: 'Description du service', paragraphs: ["TikTok Wrapped fournit un outil automatisé, basé sur le navigateur, pour analyser l'export de données TikTok appartenant à l'utilisateur. Le service est indépendant et n'a aucune affiliation, approbation ni lien avec TikTok ou ByteDance Ltd. Il est fourni « en l'état » et destiné uniquement à un usage informatif et personnel."] },
      { title: "Responsabilités de l'utilisateur", paragraphs: ['Les utilisateurs sont responsables de :'], list: ["ne téléverser que des données dont ils sont propriétaires ou qu'ils ont le droit d'utiliser,", "s'assurer que les fichiers téléversés proviennent de la fonctionnalité officielle d'export de données de TikTok."] },
      { title: 'Utilisation acceptable', paragraphs: ['Vous vous engagez à ne pas :'], list: ['utiliser le service à des fins illégales ou en violation de toute loi applicable ;', "tenter de perturber, de surcharger, de faire de l'ingénierie inverse ou d'obtenir un accès non autorisé au service ;", "téléverser des fichiers contenant des logiciels malveillants ou des données que vous n'êtes pas autorisé à utiliser."] },
      { title: 'Aucune garantie', paragraphs: ["Bien que nous nous efforcions d'assurer l'exactitude, TikTok Wrapped ne garantit pas que toutes les analyses sont complètes, exemptes d'erreurs ou adaptées à des décisions spécifiques. Les résultats ne doivent pas être considérés comme des conseils professionnels, juridiques ou financiers."] },
      { title: 'Propriété intellectuelle', paragraphs: ["La conception du site web, l'identité visuelle originale, les textes et la logique logicielle de TikTok Wrapped appartiennent à son exploitant, sauf indication contraire. « TikTok » et les marques associées sont des marques déposées de leurs propriétaires respectifs et ne sont utilisées ici qu'à titre descriptif ; nous ne revendiquons aucun droit sur celles-ci. Les utilisateurs conservent la pleine propriété de leurs données téléversées."] },
      { title: 'Limitation de responsabilité', paragraphs: ["TikTok Wrapped n'est pas responsable de :"], list: ['décisions prises sur la base des analyses générées,', "pertes de données causées par une erreur de l'utilisateur,", 'interruptions ou indisponibilité temporaire du service.'] },
      { title: 'Droit applicable', paragraphs: ["Les présentes conditions sont régies et interprétées conformément aux lois applicables en matière de protection des consommateurs et au droit général, sans tenir compte des principes de conflit de lois. Tout litige sera soumis aux tribunaux compétents du lieu d'établissement de l'exploitant."] },
      { title: 'Modifications de ces conditions', paragraphs: ["Nous pouvons mettre à jour ces conditions de temps à autre. Les modifications prennent effet dès leur publication, et la date de « Dernière mise à jour » ci-dessus reflétera la version la plus récente. La poursuite de l'utilisation du site web après les modifications vaut acceptation des conditions mises à jour."] },
      { title: 'Contact', paragraphs: ["Des questions sur ces conditions ? Écrivez à [[email:hello@ttwrapper.com]] ou utilisez notre page [[contact:Contact]]."] },
    ],
  },

  notFound: {
    title: '404 — Page introuvable',
    text: "Désolé, nous n'avons pas trouvé cette page. Elle a peut-être été déplacée ou n'existe plus. Voici quelques endroits pour reprendre là où vous en étiez :",
    links: { home: 'Accueil', analyze: 'Analyser vos données', example: 'Voir un exemple', blog: 'Blog' },
  },

  blog: {
    backToBlog: '← Retour au blog',
    indexTitle: 'Blog',
    indexIntro:
      "Ce blog existe pour aider les utilisateurs à mieux comprendre les données TikTok, la confidentialité et leurs habitudes d'utilisation personnelles, à travers un contenu clair, indépendant et pédagogique. TikTok permet aux utilisateurs de télécharger leurs données d'activité, mais celles-ci sont souvent fournies dans des formats bruts et techniques, difficiles à interpréter. Nos articles expliquent ce que contiennent ces données, comment elles sont structurées et comment les analyser de manière responsable à partir de vos propres exports de données. Nous abordons des sujets tels que le téléchargement des données TikTok, la structure des fichiers de données, les considérations de confidentialité, l'analyse du comportement d'utilisation et les différences entre les statistiques de la plateforme et les outils de données indépendants.",
    faqHeading: 'FAQ',
  },

  meta: {
    home: {
      title: 'TikTok Wrapped (non officiel) — Analysez vos données et statistiques TikTok',
      description:
        "TikTok Wrapped est un outil indépendant et non officiel qui analyse l'export officiel de vos données TikTok pour révéler votre temps de visionnage, vos top recherches, vos contenus favoris et un classement de personnalité ludique. Privé, gratuit et sans affiliation avec TikTok ou ByteDance Ltd.",
    },
    analyze: {
      title: "TikTok Wrapped — Analysez l'export de vos données TikTok et obtenez vos statistiques",
      description:
        "Téléversez l'export officiel de vos données TikTok (ZIP ou JSON) et découvrez instantanément votre temps de visionnage, vos top recherches, vos créateurs favoris, vos heures de pointe et un classement de personnalité. Traité en privé dans votre navigateur — rien n'est envoyé à un serveur.",
    },
    example: {
      title: 'TikTok Wrapped — Exemple complet (aucun téléversement requis)',
      description:
        "Découvrez exactement ce que TikTok Wrapped produit à partir d'un export de données TikTok : un exemple complet avec temps de visionnage, classement de personnalité, top recherches, heures de pointe, engagement et statistiques sur les appareils. Données fictives — aucun téléversement requis.",
    },
    about: {
      title: 'À propos de nous - TikTok Wrapped',
      description:
        "Découvrez TikTok Wrapped — un service indépendant qui vous aide à comprendre vos données d'activité TikTok. Respectueux de la vie privée, gratuit et sans affiliation avec TikTok.",
    },
    contact: {
      title: 'Contactez-nous - TikTok Wrapped',
      description:
        'Contactez TikTok Wrapped pour toute question sur le service, la confidentialité, des problèmes techniques ou des sujets juridiques. E-mail : hello@ttwrapper.com',
    },
    privacy: {
      title: 'Politique de confidentialité - TikTok Wrapped',
      description:
        "Comment TikTok Wrapped traite vos données : traitement côté client de votre export TikTok, cookies, publicité et statistiques Google AdSense, vos droits RGPD/CCPA, conservation des données et options de refus.",
    },
    terms: {
      title: "Conditions d'utilisation - TikTok Wrapped",
      description:
        "Conditions d'utilisation de TikTok Wrapped — description du service, responsabilités de l'utilisateur, utilisation acceptable, propriété intellectuelle, clauses de non-responsabilité, droit applicable et modifications des conditions.",
    },
    blog: {
      title: 'Blog - TikTok Wrapped',
      description:
        "Lisez des guides et des articles sur l'analyse des données TikTok, la confidentialité et la compréhension de votre activité sur les réseaux sociaux.",
    },
    notFound: {
      title: 'Page introuvable (404) - TikTok Wrapped',
      description:
        "La page que vous recherchez est introuvable. Explorez TikTok Wrapped — analysez l'export de vos données TikTok, consultez un exemple ou lisez nos guides.",
    },
  },
}
