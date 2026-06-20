import type { Dictionary } from './en'

export const dictionary: Dictionary = {
  nav: {
    home: 'Startseite',
    analyze: 'Analysieren',
    example: 'Beispiel',
    about: 'Über uns',
    blog: 'Blog',
    contact: 'Kontakt',
  },

  langSwitcher: {
    label: 'Sprache',
  },

  cta: {
    analyzeData: 'Analysiere deine TikTok-Daten →',
    viewExample: 'Beispiel-TikTok Wrapped ansehen →',
    backToHome: '← Zurück zur Startseite',
  },

  disclaimer: {
    underH1:
      'Unabhängiges und inoffizielles Tool — nicht verbunden mit, unterstützt von oder in Verbindung mit TikTok oder ByteDance Ltd.',
  },

  consent: {
    ariaLabel: 'Cookie-Einwilligung',
    text:
      'Deine Privatsphäre ist uns wichtig. Wir verwenden Cookies für Analysen (Google Tag Manager) und zur Anzeige von Werbung über Google AdSense, einschließlich personalisierter Werbung. Mit deiner Einwilligung können Google und seine Partner Cookies verwenden, um Werbung anhand deiner Besuche auf dieser und anderen Websites zu personalisieren. Du kannst jederzeit zustimmen, ablehnen oder deine Auswahl ändern. Siehe unsere [[privacy:Datenschutzerklärung]].',
    accept: 'Alle akzeptieren',
    reject: 'Nicht notwendige ablehnen',
  },

  footer: {
    description:
      'Ein unabhängiges, inoffizielles Tool, um deinen TikTok-Datenexport zu verstehen — Sehgewohnheiten, ein unterhaltsamer Persönlichkeitsrang und deine komplette TikTok-Geschichte.',
    productTitle: 'Produkt',
    legalTitle: 'Rechtliches',
    resourcesTitle: 'Ressourcen',
    links: {
      home: 'Startseite',
      analyze: 'Analysieren',
      example: 'Beispiel',
      exampleWrapped: 'Beispiel-Wrapped',
      about: 'Über uns',
      privacy: 'Datenschutzerklärung',
      terms: 'Nutzungsbedingungen',
      contact: 'Kontakt',
      blog: 'Blog',
    },
    copyright: '© {year} TikTok Wrapped. Alle Rechte vorbehalten.',
    disclaimer:
      'TikTok Wrapped ist ein unabhängiges Tool zur Analyse deines eigenen TikTok-Datenexports. Es ist nicht verbunden mit, unterstützt von oder in Verbindung mit TikTok oder ByteDance Ltd. „TikTok“ ist eine Marke des jeweiligen Inhabers.',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    cookieSettings: 'Cookie-Einstellungen',
  },

  home: {
    logoSubtitle: 'Analysiere deinen TikTok-Datenexport',
    heroTagline: 'Dein Jahr auf TikTok, enthüllt 🎬',
    heroPlatformTagline:
      'Eine unabhängige Plattform, um persönliche TikTok-Aktivitätsdaten zu verstehen.',
    features: ['Erhalte deinen Persönlichkeitsrang', 'Sieh detaillierte Seh-Statistiken'],
    heroDescription:
      'TikTok Wrapped ist ein unabhängiges Online-Tool, das dir hilft, deine persönliche TikTok-Aktivität anhand deines offiziellen TikTok-Datenexports zu verstehen. Wenn du deine Daten bei TikTok anforderst, werden sie als ZIP- oder JSON-Datei mit rohen Aktivitätsinformationen bereitgestellt. TikTok Wrapped analysiert diese Datei und wandelt sie in klare Zusammenfassungen und visuelle Einblicke um, etwa Nutzungsmuster, Aktivitätsverläufe und allgemeine Engagement-Statistiken. Der Dienst arbeitet ausschließlich mit Daten, die du selbst hochlädst, und ist für informative und persönliche Analysezwecke gedacht.',
    learnMoreTitle: 'Mehr über TikTok-Daten erfahren',
    learnMoreText:
      'TikTok ermöglicht es Nutzern, einen detaillierten Export ihrer persönlichen Aktivitätsdaten herunterzuladen, doch diese Informationen werden oft in einem technischen Format bereitgestellt, das schwer zu interpretieren ist. TikTok Wrapped hilft Nutzern zu verstehen, wie ihre Daten funktionieren, was sie enthalten und wie sie verantwortungsvoll analysiert werden können. Mit lehrreichen Anleitungen und Erklärungen legen wir den Fokus auf Transparenz, Datenschutz und Klarheit — und helfen Nutzern, ihre eigenen Daten ohne Annahmen oder Plattformzugriff zu verstehen.',
    learnMoreLinks: [
      { slug: 'tiktok-wrapped-explained-what-it-is-how-it-works', label: 'TikTok Wrapped erklärt: Was es ist und wie es funktioniert' },
      { slug: 'how-to-download-analyze-tiktok-data', label: 'So lädst du TikTok-Daten herunter und analysierst sie' },
      { slug: 'what-your-tiktok-usage-says-about-your-digital-habits', label: 'Was deine TikTok-Nutzung über deine digitalen Gewohnheiten verrät' },
      { slug: 'how-to-analyze-tiktok-data-safely-privacy-first-guide', label: 'So analysierst du TikTok-Daten sicher' },
    ],
    revealTitle: 'Was TikTok-Daten verraten können',
    revealItems: [
      'Nutzungshäufigkeit und Aktivitätstrends im Zeitverlauf',
      'Engagement-Muster nach Tageszeit',
      'Allgemeines Interaktionsverhalten (Likes, Kommentare, Shares)',
      'Langfristige Veränderungen der App-Nutzungsgewohnheiten',
    ],
    revealDisclaimer:
      'Alle Einblicke basieren auf nutzereigenen Datenexporten und sind ausschließlich zu informativen und persönlichen Zwecken gedacht.',
    howItWorksTitle: 'So funktioniert TikTok Wrapped',
    howItWorksText:
      'TikTok Wrapped funktioniert, indem es offizielle TikTok-Datenexporte analysiert, die Nutzer selbst herunterladen. Die Plattform konzentriert sich darauf, diese Informationen in lesbare Einblicke zusammenzufassen und zu strukturieren, ohne auf Nutzerkonten zuzugreifen oder zusätzliche Daten zu sammeln. Ausführliche Anleitungen und Analyse-Tools findest du auf einer [[analyze:separaten Seite]] für Nutzer, die ihre Daten weiter erkunden möchten.',
    analyzeButton: 'Analysiere deine TikTok-Daten →',
    demoTitle: '🎬 Sieh es in Aktion',
    demoDescription:
      'Möchtest du sehen, was TikTok Wrapped erstellt, bevor du loslegst? Durchstöbere ein vollständiges, realistisch wirkendes Beispiel aus Musterdaten — kein Upload erforderlich.',
    demoButton: 'Beispiel-TikTok Wrapped ansehen →',
    moreStatsTitle: '✨ Und noch so viel mehr erwartet dich...',
    statTags: [
      '🔍 Top-Suchanfragen',
      '📅 Aktivität nach Jahr',
      '⏰ Stoßzeiten',
      '❤️ Likes & Kommentare',
      '📤 Share-Verlauf',
      '🔴 Livestreams',
    ],
    demoCta: 'Bereit, deine Statistiken zu entdecken? [[analyze:Analysiere jetzt deine Daten! →]]',
  },

  analyze: {
    subtitle: 'Analysiere deine TikTok-Daten',
    howToTitle: '📱 So erhältst du deine TikTok-Daten',
    importantLabel: 'Wichtig:',
    importantText:
      'TikTok stellt deine Daten nur auf Anfrage bereit. Nachdem du eine Anfrage gestellt hast, kann es einige Stunden bis zu 3 Tage dauern, bis deine Daten bereit sind. Achte darauf, beim Anfordern das Format „JSON“ auszuwählen!',
    steps: [
      { title: 'Einstellungen öffnen', text: 'Gehe zu deinem Profil → tippe auf das Menü ☰ → wähle Einstellungen', alt: 'Schritt 1: Einstellungen öffnen' },
      { title: 'Zum Konto gehen', text: 'Suche und tippe unter „Einstellungen und Datenschutz“ auf Konto', alt: 'Schritt 2: Zum Konto gehen' },
      { title: 'Deine Daten herunterladen', text: 'Scrolle nach unten und tippe auf „Deine Daten herunterladen“', alt: 'Schritt 3: Deine Daten herunterladen' },
      { title: 'Daten anfordern (JSON)', text: 'Ändere das Format auf „JSON“, wähle „Alle Daten“ und tippe dann auf „Daten anfordern“', alt: 'Schritt 4: Daten anfordern' },
    ],
    footerSteps: [
      'Du erhältst eine Benachrichtigung, sobald deine Daten bereit sind',
      'Lade die ZIP-Datei im Tab „Daten herunterladen“ herunter',
      'Lade sie hier hoch und genieße deine Statistiken!',
    ],
    dropPrompt: 'Lege deine ZIP- oder JSON-Datei hier ab',
    dropHint: 'TikTok → Einstellungen → Datenschutz → Daten herunterladen',
    analyzeBtn: '🔍 Analysieren',
    analyzingBtn: '⏳ Analysiere...',
    privacyNote:
      'Deine Datei wird ausschließlich verarbeitet, um deine Ergebnisse zu erzeugen. Wir verkaufen, teilen oder verwenden hochgeladene Daten nicht für Werbung.',
    howToLink: 'Du hast deine Daten noch nicht? Erfahre, wie du sie herunterlädst ↓',
    selectFileError: 'Bitte wähle eine Datei aus',
    fileTypeError: 'Bitte wähle eine ZIP- oder JSON-Datei aus',
    genericError: 'Bei der Verarbeitung der Datei ist ein Fehler aufgetreten',
    jsonNotFound: 'JSON-Datei im Archiv nicht gefunden',
    progress: {
      reading: 'Datei wird gelesen...',
      extracting: 'ZIP-Archiv wird entpackt...',
      readingFile: '{name} wird gelesen...',
      parsing: 'JSON wird verarbeitet...',
      analyzing: 'Daten werden analysiert...',
      processing: 'Daten werden verarbeitet...',
    },
    results: {
      yourStats: '🎰 Deine Statistiken',
      videosWatched: 'Angesehene Videos',
      hoursOnTikTok: 'Stunden auf TikTok',
      daysOfWatching: 'Tage mit Ansehen',
      yourRank: 'Dein TikTok-Rang',
      followers: 'Follower',
      following: 'Gefolgt',
      interests: 'Interessen',
      whenActive: '⏰ Wann du am aktivsten bist',
      peakHour: 'Stoßzeit',
      mostActiveDay: 'Aktivster Tag',
      firstWatch: 'Erstes Ansehen',
      lastWatch: 'Letztes Ansehen',
      engagement: '❤️ Engagement',
      videosLiked: 'Gelikte Videos',
      favorites: 'Favoriten',
      comments: 'Kommentare',
      shares: 'Shares',
      activityByYear: '📅 Aktivität nach Jahr',
      year: 'Jahr',
      videos: 'Videos',
      mostActiveMonth: 'Aktivster Monat',
      avgPerDayPrefix: 'Durchschnittlich',
      avgPerDaySuffix: 'Videos pro Tag',
      collections: '📂 Deine Sammlungen',
      favoritesTitle: '⭐ Favoriten',
      favoriteSounds: 'Lieblings-Sounds',
      favoriteEffects: 'Lieblings-Effekte',
      favoriteHashtags: 'Lieblings-Hashtags',
      topSearches: '🔍 Top-Suchanfragen',
      totalSearches: 'Suchanfragen insgesamt',
      shareDestinations: '📤 Share-Ziele',
      yourComments: '💭 Deine Kommentare',
      totalComments: 'Kommentare insgesamt',
      avgChars: 'durchschn. {n} Zeichen',
      messages: '💬 Nachrichten',
      chats: 'Chats',
      messagesLabel: 'Nachrichten',
      sent: 'Gesendet',
      received: 'Empfangen',
      topChats: 'Top-Chats:',
      recentFollowers: '👥 Neueste Follower',
      devicesNetworks: '📱 Geräte & Netzwerke',
      totalLogins: 'Anmeldungen insgesamt',
      devices: 'Geräte',
      networks: 'Netzwerke',
      tiktokLive: '🔴 TikTok Live',
      livesWatched: 'Angesehene Lives',
      liveComments: 'Live-Kommentare',
      blocked: '🚫 Blockiert',
      messagesCountSuffix: 'Nachrichten',
    },
  },

  example: {
    title: 'Beispiel-TikTok Wrapped',
    subtitle: 'Ein vollständiges, realistisch wirkendes Beispiel — kein Upload erforderlich',
    introText:
      'Diese Seite zeigt genau, was du von [[home:TikTok Wrapped]] nach der Analyse eines TikTok-Datenexports erhältst — ohne etwas hochzuladen. Jede Zahl unten gehört zu einem fiktiven Musterkonto und dient ausschließlich der Veranschaulichung. Wenn du [[analyze:deinen eigenen Export analysierst]], wird dieselbe Auswertung privat in deinem Browser aus deiner echten Datei erstellt. TikTok Wrapped ist ein unabhängiges, inoffizielles Tool und ist nicht mit TikTok oder ByteDance Ltd. verbunden oder von diesen unterstützt.',
    rankExplanation:
      'Dein Rang basiert auf der geschätzten Sehzeit. Die 408 Stunden dieses Musterkontos landen es in der Stufe „Main Character“ — es gibt insgesamt 16 Ränge, von „NPC Energy“ bis ganz hinauf zu „No Life Speedrun WR“.',
    ctaTitle: '🎬 Bereit, dein eigenes zu sehen?',
    ctaDescription:
      'Dein echtes TikTok Wrapped wird vollständig in deinem Browser aus deinem eigenen Datenexport erstellt — deine Datei verlässt niemals dein Gerät.',
    ctaButton: 'Analysiere deine TikTok-Daten →',
    ctaLearn: 'Neu bei Datenexporten? [[blog:Erfahre, wie du deine TikTok-Daten herunterlädst ↗]]',
    sample: {
      displayName: 'Beispielnutzer',
      interests: ['Comedy', 'Kochen', 'Reisen', 'Fitness', 'Musik'],
      activeDay: 'Sonntag',
      activeMonth: 'November 2024',
      firstWatch: '4. März 2022',
      lastWatch: '14. Dez. 2025',
      searches: [
        'einfache abendessen rezepte',
        'marathon training',
        'reise hacks',
        'standup comedy',
        'workout für zuhause',
        'günstig reisen europa',
        'gitarren tutorial',
        'meal prep ideen',
        'produktivitäts tipps',
        'street food',
      ],
      shareMethods: ['Direktnachricht', 'Link kopieren', 'WhatsApp', 'Instagram'],
      networks: ['WLAN', 'Mobilfunk'],
    },
  },

  about: {
    title: 'Über uns',
    paragraphs: [
      'TikTok Wrapped ist ein unabhängiger Online-Dienst, der Nutzern helfen soll, ihre persönlichen TikTok-Aktivitätsdaten besser zu verstehen.',
      'TikTok ermöglicht es Nutzern, einen offiziellen Datenexport mit Informationen über ihre Aktivität auf der Plattform herunterzuladen. Obwohl diese Daten dem Nutzer gehören, werden sie oft in einem rohen und unstrukturierten Format bereitgestellt, das schwer zu interpretieren ist. TikTok Wrapped bietet Tools, die diese Daten strukturieren und auf klare, lesbare und benutzerfreundliche Weise darstellen.',
      'Die Website ermöglicht es Nutzern, ihren eigenen TikTok-Datenexport hochzuladen und automatisierte Einblicke zu erhalten, die ausschließlich auf dieser Datei basieren. Der Dienst konzentriert sich auf Zusammenfassung, Visualisierung und allgemeine Analyse von Nutzungsmustern, um Nutzern zu helfen, ihr digitales Verhalten besser zu verstehen.',
      'TikTok Wrapped erstellt keine Konten, erfordert keine Registrierung und bietet keine Funktionen für soziale Netzwerke oder Content-Hosting. Die Website existiert ausschließlich als informatives Tool, das vom Nutzer bereitgestellte Dateien auf Wunsch des Nutzers verarbeitet.',
      'Wir möchten ein einfaches, transparentes und datenschutzorientiertes Erlebnis bieten. Die Website ist kostenlos nutzbar und wird durch Werbung finanziert; siehe unsere [[privacy:Datenschutzerklärung]] dazu, wie Cookies und Werbung funktionieren.',
      'TikTok Wrapped wird von AffSquad betrieben und ist unter [[email:hello@affsquad.com]] erreichbar. Es ist ein unabhängiges, inoffizielles Tool und ist nicht verbunden mit, unterstützt von oder in Verbindung mit TikTok oder ByteDance Ltd.',
    ],
    faqTitle: 'FAQ',
    faq: [
      { q: 'Was ist TikTok Wrapped?', a: 'TikTok Wrapped ist ein Online-Tool, das Nutzern hilft, ihre persönliche TikTok-Aktivität anhand ihres offiziellen TikTok-Datenexports zu analysieren und besser zu verstehen.' },
      { q: 'Wie erhalte ich meinen TikTok-Datenexport?', a: 'Du kannst deinen Datenexport in den TikTok-Einstellungen (Daten / Datenschutz) anfordern und herunterladen. Sobald du die ZIP-Datei von TikTok erhalten hast, kannst du sie bei TikTok Wrapped hochladen.' },
      { q: 'Speichert ihr meine hochgeladene ZIP-Datei?', a: 'Dateien werden ausschließlich verarbeitet, um die von dir angeforderten Einblicke zu erzeugen. Wir speichern oder verkaufen hochgeladene Daten nicht und verwenden sie nicht zur Personalisierung von Werbung.' },
      { q: 'Ist TikTok Wrapped mit TikTok verbunden?', a: 'Nein. TikTok Wrapped ist ein unabhängiger Dienst und ist nicht mit TikTok oder ByteDance verbunden oder von diesen unterstützt.' },
      { q: 'Ist TikTok Wrapped kostenlos nutzbar?', a: 'Die Kernfunktionen der Website sind ohne Bezahlung verfügbar. Die Seite kann Werbung anzeigen, um die laufende Entwicklung und die Hosting-Kosten zu finanzieren.' },
    ],
  },

  contact: {
    title: 'Kontaktiere uns',
    intro:
      'Wenn du Fragen zu TikTok Wrapped, unserer Website oder zur Funktionsweise des Dienstes hast, kannst du uns über die unten stehenden Kontaktinformationen erreichen.',
    welcomeTitle: 'Wir freuen uns über Anfragen zu:',
    welcomeItems: [
      'allgemeinen Fragen zur Plattform,',
      'Datenschutz und Datenverarbeitung,',
      'technischen Problemen oder Feedback,',
      'rechtlichen oder richtlinienbezogenen Angelegenheiten.',
    ],
    howToTitle: 'So kontaktierst du uns',
    emailLabel: 'E-Mail:',
    responseNote: 'Wir bemühen uns, alle berechtigten Anfragen innerhalb von 2–3 Werktagen zu beantworten.',
    aboutTitle: 'Über die Kommunikation',
    aboutText1:
      'TikTok Wrapped ist ein unabhängiger Online-Dienst, der von AffSquad betrieben wird und sich auf die Analyse von nutzerbereitgestellten TikTok-Datenexporten konzentriert. Er ist nicht verbunden mit, unterstützt von oder in Verbindung mit TikTok oder ByteDance Ltd. Wir bieten keinen Kundensupport über soziale Medien an und bieten derzeit keinen telefonischen Support.',
    aboutText2:
      'Bitte sende keine sensiblen personenbezogenen Informationen per E-Mail, sofern dies nicht zur Bearbeitung deines Anliegens erforderlich ist.',
  },

  privacy: {
    title: 'Datenschutzerklärung',
    lastUpdatedLabel: 'Zuletzt aktualisiert:',
    lastUpdatedDate: '20. Juni 2026',
    intro:
      'Diese Datenschutzerklärung erläutert, wie TikTok Wrapped („TikTok Wrapped“, „wir“, „uns“) Informationen erhebt, verwendet und schützt, wenn du ttwrapper.com besuchst. TikTok Wrapped ist ein unabhängiges, inoffizielles Tool und ist nicht verbunden mit, unterstützt von oder in Verbindung mit TikTok oder ByteDance Ltd.',
    cookieTable: {
      providerHeader: 'Anbieter',
      purposeHeader: 'Zweck',
      typeHeader: 'Typ',
      rows: [
        { provider: 'TikTok Wrapped', purpose: 'Speichert deine Cookie-Einwilligungsentscheidung', type: 'Notwendig' },
        { provider: 'Google Tag Manager / Analytics', purpose: 'Aggregierte, anonyme Nutzungsstatistiken', type: 'Analyse (Einwilligung erforderlich)' },
        { provider: 'Google AdSense / DoubleClick', purpose: 'Ausspielen und Messen von Werbung, einschließlich personalisierter Werbung', type: 'Werbung (Einwilligung erforderlich)' },
      ],
    },
    sections: [
      { title: '1. Wer wir sind (Verantwortlicher)', paragraphs: ['TikTok Wrapped wird von AffSquad betrieben, dem für diese Website verantwortlichen Datenverantwortlichen. Wenn du Fragen zu dieser Erklärung oder zur Verarbeitung deiner Daten hast, kannst du uns unter [[email:hello@affsquad.com]] oder über unsere [[contact:Kontakt]]-Seite erreichen.'] },
      { title: '2. Deine hochgeladenen TikTok-Daten', paragraphs: ['Wenn du den Analyzer verwendest, wird dein TikTok-Datenexport (ZIP oder JSON) vollständig in deinem eigenen Browser gelesen und verarbeitet. Die Datei wird nicht auf unsere Server hochgeladen oder dort gespeichert, und wir erstellen daraus keine Profile oder Datenbanken. Die Analyse existiert nur in deinem Browser-Tab und ist verschwunden, sobald du die Seite schließt oder neu lädst.', 'Wir erfordern für die Nutzung des Analyzers keine Kontoerstellung, keine Anmeldung und keine persönliche Identifizierung.'] },
      { title: '3. Automatisch erhobene Informationen', paragraphs: ['Wie bei den meisten Websites können beim Besuch von ttwrapper.com bestimmte technische Informationen durch Cookies und ähnliche Technologien von uns und von Drittanbietern (wie Google) erhoben werden, darunter:'], list: ['Geräte- und Browsertyp, Bildschirmgröße und Betriebssystem;', 'IP-Adresse (zur ungefähren Standortbestimmung und zur Sicherheit verwendet);', 'besuchte Seiten, verweisende URLs und Interaktionsereignisse;', 'Cookie-Kennungen, die für Analyse und Werbung verwendet werden.'], afterList: ['Diese Informationen werden nur verarbeitet, sofern du eingewilligt hast oder wir ein berechtigtes Interesse haben, wie unten beschrieben.'] },
      { title: '4. Cookies und ähnliche Technologien', paragraphs: ['Wir verwenden Cookies und ähnliche Technologien für wesentliche Funktionen, Analysen und Werbung. Nicht notwendige Cookies (Analyse und Werbung) werden erst gesetzt, nachdem du über unser Cookie-Banner eingewilligt hast. Die wichtigsten Kategorien sind:'], hasCookieTable: true, afterList: ['Du kannst deine Einwilligung jederzeit über den Link „Cookie-Einstellungen“ im Footer der Website ändern oder widerrufen.'] },
      { title: '5. Werbung (Google AdSense)', paragraphs: ['Wir verwenden Google AdSense zur Anzeige von Werbung. Es gelten die folgenden Hinweise:'], list: ['Drittanbieter, einschließlich Google, verwenden Cookies, um Werbung anhand deiner früheren Besuche auf dieser und anderen Websites auszuspielen.', 'Googles Verwendung von Werbe-Cookies (einschließlich des DoubleClick-Cookies) ermöglicht es Google und seinen Partnern, dir Werbung anhand deiner Besuche auf dieser und/oder anderen Websites im Internet auszuspielen.', 'Du kannst personalisierte Werbung deaktivieren, indem du die [[adsSettings:Google-Anzeigeneinstellungen]] besuchst.', 'Du kannst die Verwendung von Cookies durch einige Drittanbieter für personalisierte Werbung unter [[aboutAds:aboutads.info/choices]] oder [[yourChoices:youronlinechoices.eu]] deaktivieren.', 'Erfahre, wie Google Informationen von Websites verwendet, die seine Dienste nutzen, unter [[partnerSites:policies.google.com/technologies/partner-sites]].'], afterList: ['Wenn du personalisierter Werbung nicht zustimmst, kann Google dennoch nicht personalisierte Werbung anhand des allgemeinen Kontexts statt deines Browserverlaufs ausspielen.'] },
      { title: '6. Analyse', paragraphs: ['Wir verwenden Google Tag Manager und Google-Analysedienste, um in aggregierter Form zu verstehen, wie Besucher die Seite nutzen (zum Beispiel, welche Seiten beliebt sind). Diese Dienste können Cookies setzen und technische Daten wie deine IP-Adresse verarbeiten. Sie werden erst geladen, nachdem du Analyse-Cookies zugestimmt hast.'] },
      { title: '7. Einwilligungsverwaltung', paragraphs: ['Wir verwenden Google Consent Mode v2. Standardmäßig sind die Speicherung für Werbung und Analyse auf „abgelehnt“ gesetzt, und die zugehörigen Tags werden erst geladen, wenn du in unserem Cookie-Banner eine Auswahl triffst. Du kannst das Banner jederzeit über den Link „Cookie-Einstellungen“ im Footer erneut öffnen und deine Entscheidung ändern. Besucher im Europäischen Wirtschaftsraum, im Vereinigten Königreich und in der Schweiz werden um Einwilligung gebeten, bevor nicht notwendige Cookies verwendet werden.'] },
      { title: '8. Wie wir Informationen verwenden', paragraphs: [], list: ['um die Website zu betreiben, zu warten und abzusichern;', 'um Einblicke aus den Daten zu erzeugen, die du zur Analyse auswählst (in deinem Browser);', 'um die aggregierte Nutzung zu verstehen und den Dienst zu verbessern;', 'um Werbung anzuzeigen, die zur Finanzierung des kostenlosen Dienstes beiträgt.'], afterList: ['Wir verkaufen deine personenbezogenen Daten nicht und verwenden deinen hochgeladenen TikTok-Export nicht für Werbung oder Profilbildung.'] },
      { title: '9. Datenweitergabe', paragraphs: ['Wir geben deine hochgeladenen TikTok-Daten an niemanden weiter. Die oben beschriebenen technischen Daten und Cookie-Daten können von unseren Dienstleistern verarbeitet werden, darunter Google (Werbung und Analyse) und unser Hosting-Anbieter (Vercel), die jeweils nach ihren eigenen Datenschutzrichtlinien handeln.'] },
      { title: '10. Datenspeicherung', paragraphs: ['Dein hochgeladener TikTok-Export wird von uns niemals gespeichert, sodass es auf unserer Seite nichts zu speichern oder zu löschen gibt. Aggregierte Analyse- und Werbedaten, die bei unseren Anbietern liegen, werden gemäß deren eigenen Aufbewahrungsfristen gespeichert (zum Beispiel Googles Standard-Aufbewahrungseinstellungen).'] },
      { title: '11. Deine Datenschutzrechte (DSGVO/UK-DSGVO)', paragraphs: ['Wenn du dich im EWR oder im Vereinigten Königreich befindest, hast du das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung oder Widerspruch gegen die Verarbeitung deiner personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit und auf jederzeitigen Widerruf der Einwilligung. Um diese Rechte auszuüben, kontaktiere uns unter [[email:hello@affsquad.com]]. Du hast außerdem das Recht, eine Beschwerde bei deiner lokalen Datenschutzbehörde einzureichen.'] },
      { title: '12. Datenschutzrechte in Kalifornien (CCPA/CPRA)', paragraphs: ['Einwohner Kaliforniens haben das Recht zu erfahren, welche personenbezogenen Daten erhoben werden, deren Löschung zu verlangen und dem „Verkauf“ oder der „Weitergabe“ personenbezogener Daten zu widersprechen. Wir verkaufen keine personenbezogenen Daten. Um deine Rechte auszuüben, kontaktiere uns unter [[email:hello@affsquad.com]].'] },
      { title: '13. Internationale Datenübermittlungen', paragraphs: ['Unsere Anbieter können Daten auf Servern außerhalb deines Landes verarbeiten, einschließlich der Vereinigten Staaten. Wo erforderlich, werden solche Übermittlungen durch geeignete Garantien wie die Standardvertragsklauseln der Anbieter geschützt.'] },
      { title: '14. Datenschutz von Kindern', paragraphs: ['TikTok Wrapped richtet sich nicht an Kinder unter 13 Jahren, und wir erheben wissentlich keine personenbezogenen Daten von ihnen. Für das Anfordern eines Datenexports gelten die Mindestaltersanforderungen von TikTok selbst.'] },
      { title: '15. Änderungen dieser Erklärung', paragraphs: ['Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wesentliche Änderungen werden durch die Aktualisierung des Datums „Zuletzt aktualisiert“ oben auf dieser Seite kenntlich gemacht.'] },
      { title: '16. Kontakt', paragraphs: ['Fragen zu dieser Datenschutzerklärung? Schreibe an [[email:hello@affsquad.com]] oder nutze unsere [[contact:Kontakt]]-Seite.'] },
    ],
  },

  terms: {
    title: 'Nutzungsbedingungen',
    lastUpdatedLabel: 'Zuletzt aktualisiert:',
    lastUpdatedDate: '20. Juni 2026',
    intro:
      'Durch den Zugriff auf oder die Nutzung von TikTok Wrapped (ttwrapper.com) stimmst du diesen Nutzungsbedingungen zu. Wenn du nicht zustimmst, nutze die Website bitte nicht.',
    sections: [
      { title: 'Leistungsbeschreibung', paragraphs: ['TikTok Wrapped stellt ein automatisiertes, browserbasiertes Tool zur Analyse des eigenen TikTok-Datenexports eines Nutzers bereit. Der Dienst ist unabhängig und ist nicht verbunden mit, unterstützt von oder in Verbindung mit TikTok oder ByteDance Ltd. Er wird „wie besehen“ und ausschließlich zu informativen und persönlichen Zwecken bereitgestellt.'] },
      { title: 'Pflichten des Nutzers', paragraphs: ['Nutzer sind verantwortlich für:'], list: ['das Hochladen ausschließlich von Daten, die ihnen gehören oder zu deren Nutzung sie berechtigt sind,', 'die Sicherstellung, dass hochgeladene Dateien aus der offiziellen Datenexport-Funktion von TikTok stammen.'] },
      { title: 'Zulässige Nutzung', paragraphs: ['Du verpflichtest dich, Folgendes zu unterlassen:'], list: ['den Dienst für rechtswidrige Zwecke oder unter Verstoß gegen geltendes Recht zu nutzen;', 'zu versuchen, den Dienst zu stören, zu überlasten, zurückzuentwickeln oder unbefugten Zugriff darauf zu erlangen;', 'Dateien hochzuladen, die Schadsoftware oder Daten enthalten, zu deren Nutzung du nicht berechtigt bist.'] },
      { title: 'Keine Garantien', paragraphs: ['Auch wenn wir uns um Genauigkeit bemühen, garantiert TikTok Wrapped nicht, dass alle Einblicke vollständig, fehlerfrei oder für bestimmte Entscheidungen geeignet sind. Die Ergebnisse sollten nicht als professionelle, rechtliche oder finanzielle Beratung betrachtet werden.'] },
      { title: 'Geistiges Eigentum', paragraphs: ['Das Website-Design, das ursprüngliche Branding, die Texte und die Software-Logik von TikTok Wrapped gehören, sofern nicht anders angegeben, seinem Betreiber. „TikTok“ und zugehörige Zeichen sind Marken ihrer jeweiligen Inhaber und werden hier nur beschreibend verwendet; wir beanspruchen keine Rechte daran. Nutzer behalten das volle Eigentum an ihren hochgeladenen Daten.'] },
      { title: 'Haftungsbeschränkung', paragraphs: ['TikTok Wrapped ist nicht verantwortlich für:'], list: ['Entscheidungen, die auf Grundlage der erzeugten Einblicke getroffen werden,', 'Datenverlust durch Nutzerfehler,', 'Unterbrechungen oder vorübergehende Nichtverfügbarkeit des Dienstes.'] },
      { title: 'Anwendbares Recht', paragraphs: ['Diese Bedingungen unterliegen dem geltenden Verbraucherschutzrecht und den allgemeinen Gesetzen und werden in Übereinstimmung mit diesen ausgelegt, ohne Berücksichtigung kollisionsrechtlicher Grundsätze. Etwaige Streitigkeiten werden von den zuständigen Gerichten am Geschäftssitz des Betreibers behandelt.'] },
      { title: 'Änderungen dieser Bedingungen', paragraphs: ['Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Änderungen treten mit ihrer Veröffentlichung in Kraft, und das Datum „Zuletzt aktualisiert“ oben gibt die neueste Version wieder. Die fortgesetzte Nutzung der Website nach Änderungen gilt als Annahme der aktualisierten Bedingungen.'] },
      { title: 'Kontakt', paragraphs: ['Fragen zu diesen Bedingungen? Schreibe an [[email:hello@affsquad.com]] oder nutze unsere [[contact:Kontakt]]-Seite.'] },
    ],
  },

  notFound: {
    title: '404 — Seite nicht gefunden',
    text: 'Entschuldigung, wir konnten diese Seite nicht finden. Sie wurde möglicherweise verschoben oder existiert nicht mehr. Hier sind einige Orte, an denen du weitermachen kannst:',
    links: { home: 'Startseite', analyze: 'Analysiere deine Daten', example: 'Beispiel ansehen', blog: 'Blog' },
  },

  blog: {
    backToBlog: '← Zurück zum Blog',
    indexTitle: 'Blog',
    indexIntro:
      'Dieser Blog soll Nutzern helfen, TikTok-Daten, Datenschutz und persönliche Nutzungsmuster durch klare, unabhängige und lehrreiche Inhalte besser zu verstehen. TikTok ermöglicht es Nutzern, ihre Aktivitätsdaten herunterzuladen, doch diese kommen oft in rohen, technischen Formaten, die schwer zu interpretieren sind. Unsere Artikel erklären, was diese Daten enthalten, wie sie strukturiert sind und wie du sie anhand deiner eigenen Datenexporte verantwortungsvoll analysierst. Wir behandeln Themen wie TikTok-Datendownloads, Datendateistrukturen, Datenschutzaspekte, die Analyse von Nutzungsverhalten und die Unterschiede zwischen Plattform-Analysen und unabhängigen Daten-Tools.',
    faqHeading: 'FAQ',
  },

  meta: {
    home: {
      title: 'TikTok Wrapped (Inoffiziell) — Analysiere deine TikTok-Daten & Statistiken',
      description:
        'TikTok Wrapped ist ein unabhängiges, inoffizielles Tool, das deinen offiziellen TikTok-Datenexport analysiert, um deine Sehzeit, Top-Suchanfragen, Lieblingsinhalte und einen unterhaltsamen Persönlichkeitsrang zu enthüllen. Privat, kostenlos und nicht mit TikTok oder ByteDance Ltd. verbunden.',
    },
    analyze: {
      title: 'Analysiere deinen TikTok-Datenexport — Hochladen & Statistiken erhalten',
      description:
        'Lade deinen offiziellen TikTok-Datenexport (ZIP oder JSON) hoch und sieh sofort deine Sehzeit, Top-Suchanfragen, Lieblings-Creator, Stoßzeiten und einen Persönlichkeitsrang. Privat in deinem Browser verarbeitet — nichts wird auf einen Server hochgeladen.',
    },
    example: {
      title: 'Beispiel-TikTok Wrapped — Sieh ein vollständiges Muster (kein Upload nötig)',
      description:
        'Sieh genau, was TikTok Wrapped aus einem TikTok-Datenexport erstellt: ein vollständiges Beispiel mit Sehzeit, Persönlichkeitsrang, Top-Suchanfragen, Stoßzeiten, Engagement und Gerätestatistiken. Musterdaten — kein Upload erforderlich.',
    },
    about: {
      title: 'Über uns - TikTok Wrapped',
      description:
        'Erfahre mehr über TikTok Wrapped — einen unabhängigen Dienst, der dir hilft, deine TikTok-Aktivitätsdaten zu verstehen. Datenschutzorientiert, kostenlos und nicht mit TikTok verbunden.',
    },
    contact: {
      title: 'Kontakt - TikTok Wrapped',
      description:
        'Kontaktiere TikTok Wrapped bei Fragen zum Dienst, zum Datenschutz, zu technischen Problemen oder rechtlichen Angelegenheiten. E-Mail: hello@affsquad.com',
    },
    privacy: {
      title: 'Datenschutzerklärung - TikTok Wrapped',
      description:
        'Wie TikTok Wrapped mit deinen Daten umgeht: clientseitige Verarbeitung deines TikTok-Exports, Cookies, Google-AdSense-Werbung und Analysen, deine DSGVO/CCPA-Rechte, Datenspeicherung und Opt-out-Möglichkeiten.',
    },
    terms: {
      title: 'Nutzungsbedingungen - TikTok Wrapped',
      description:
        'Nutzungsbedingungen von TikTok Wrapped — Leistungsbeschreibung, Pflichten des Nutzers, zulässige Nutzung, geistiges Eigentum, Haftungsausschlüsse, anwendbares Recht und Änderungen dieser Bedingungen.',
    },
    blog: {
      title: 'Blog - TikTok Wrapped',
      description:
        'Lies Anleitungen und Artikel zur Analyse von TikTok-Daten, zum Datenschutz und dazu, wie du deine Social-Media-Aktivität verstehst.',
    },
    notFound: {
      title: 'Seite nicht gefunden (404) - TikTok Wrapped',
      description:
        'Die gesuchte Seite konnte nicht gefunden werden. Entdecke TikTok Wrapped — analysiere deinen TikTok-Datenexport, sieh ein Beispiel oder lies unsere Anleitungen.',
    },
  },
}
