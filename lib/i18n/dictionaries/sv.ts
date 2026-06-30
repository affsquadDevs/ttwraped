import type { Dictionary } from './en'

export const dictionary: Dictionary = {
  nav: {
    home: 'Hem',
    analyze: 'Analysera',
    example: 'Exempel',
    about: 'Om oss',
    blog: 'Blogg',
    contact: 'Kontakt',
  },

  langSwitcher: {
    label: 'Språk',
  },

  cta: {
    analyzeData: 'Analysera din TikTok-data →',
    viewExample: 'Visa ett exempel på TikTok Wrapped →',
    backToHome: '← Tillbaka till startsidan',
  },

  disclaimer: {
    underH1:
      'Oberoende och inofficiellt verktyg — inte anslutet till, godkänt av eller på något sätt kopplat till TikTok eller ByteDance Ltd.',
  },

  consent: {
    ariaLabel: 'Cookie-samtycke',
    text:
      'Vi värnar om din integritet. Vi använder cookies för att köra analys (Google Tag Manager) och för att visa annonser via Google AdSense, inklusive för annonspersonalisering. Med ditt samtycke kan Google och dess partner använda cookies för att anpassa annonser baserat på dina besök på den här och andra webbplatser. Du kan godkänna, avvisa eller ändra ditt val när som helst. Se vår [[privacy:integritetspolicy]].',
    accept: 'Godkänn alla',
    reject: 'Avvisa icke-nödvändiga',
  },

  footer: {
    description:
      'Ett oberoende, inofficiellt verktyg för att förstå din exporterade TikTok-data — tittarvanor, en rolig personlighetsrankning och hela din TikTok-historia.',
    productTitle: 'Produkt',
    legalTitle: 'Juridiskt',
    resourcesTitle: 'Resurser',
    links: {
      home: 'Hem',
      analyze: 'Analysera',
      example: 'Exempel',
      exampleWrapped: 'Exempel på Wrapped',
      about: 'Om oss',
      privacy: 'Integritetspolicy',
      terms: 'Användarvillkor',
      contact: 'Kontakt',
      blog: 'Blogg',
    },
    copyright: '© {year} TikTok Wrapped. Med ensamrätt.',
    disclaimer:
      'TikTok Wrapped är ett oberoende verktyg för att analysera din egen exporterade TikTok-data. Det är inte anslutet till, godkänt av eller på något sätt kopplat till TikTok eller ByteDance Ltd. ”TikTok” är ett varumärke som tillhör respektive ägare.',
    privacy: 'Integritet',
    terms: 'Villkor',
    cookieSettings: 'Cookie-inställningar',
  },

  home: {
    trust: ["Gratis", "100% privat", "Ingen inloggning"],
    logoSubtitle: 'Analysera din exporterade TikTok-data',
    heroTagline: 'Ditt år på TikTok, avslöjat 🎬',
    heroPlatformTagline:
      'En oberoende plattform för att förstå din personliga TikTok-aktivitetsdata.',
    features: ['Få din personlighetsrankning', 'Se detaljerad tittarstatistik'],
    heroDescription:
      'TikTok Wrapped är ett oberoende onlineverktyg som hjälper dig att förstå din personliga TikTok-aktivitet med hjälp av din officiella exporterade TikTok-data. När du begär ut din data från TikTok levereras den som en ZIP- eller JSON-fil som innehåller rå aktivitetsinformation. TikTok Wrapped analyserar den här filen och omvandlar den till tydliga sammanfattningar och visuella insikter, såsom användningsmönster, aktivitetstidslinjer och allmän engagemangsstatistik. Tjänsten arbetar endast med data som du väljer att ladda upp och är avsedd för informativt och personligt analyssyfte.',
    learnMoreTitle: 'Läs mer om TikTok-data',
    learnMoreText:
      'TikTok låter användare ladda ner en detaljerad export av sin personliga aktivitetsdata, men denna information levereras ofta i ett tekniskt format som kan vara svårt att tolka. TikTok Wrapped hjälper användare att förstå hur deras data fungerar, vad den innehåller och hur den kan analyseras på ett ansvarsfullt sätt. Genom pedagogiska guider och förklaringar fokuserar vi på transparens, integritet och tydlighet — och hjälper användare att förstå sin egen data utan antaganden eller åtkomst till plattformen.',
    learnMoreLinks: [
      { slug: 'tiktok-wrapped-explained-what-it-is-how-it-works', label: 'TikTok Wrapped förklarat: Vad det är och hur det fungerar' },
      { slug: 'how-to-download-analyze-tiktok-data', label: 'Så här laddar du ner och analyserar TikTok-data' },
      { slug: 'what-your-tiktok-usage-says-about-your-digital-habits', label: 'Vad din TikTok-användning säger om dina digitala vanor' },
      { slug: 'how-to-analyze-tiktok-data-safely-privacy-first-guide', label: 'Så här analyserar du TikTok-data på ett säkert sätt' },
    ],
    revealTitle: 'Vad TikTok-data kan avslöja',
    revealItems: [
      'Användningsfrekvens och aktivitetstrender över tid',
      'Engagemangsmönster utifrån tid på dygnet',
      'Allmänt interaktionsbeteende (gilla-markeringar, kommentarer, delningar)',
      'Långsiktiga förändringar i appanvändningsvanor',
    ],
    revealDisclaimer:
      'Alla insikter baseras på användarägda dataexporter och är endast avsedda för informativt och personligt syfte.',
    howItWorksTitle: 'Så fungerar TikTok Wrapped',
    howItWorksText:
      'TikTok Wrapped fungerar genom att analysera officiella exporterade TikTok-data som användare själva väljer att ladda ner. Plattformen fokuserar på att sammanfatta och organisera denna information till läsbara insikter utan att komma åt användarkonton eller samla in ytterligare data. Detaljerade instruktioner och analysverktyg finns på en [[analyze:separat sida]] för användare som vill utforska sin data ytterligare.',
    analyzeButton: 'Analysera din TikTok-data →',
    demoTitle: '🎬 Se det i praktiken',
    demoDescription:
      'Vill du se vad TikTok Wrapped skapar innan du börjar? Bläddra igenom ett komplett, verklighetstroget exempel byggt på exempeldata — ingen uppladdning krävs.',
    demoButton: 'Visa ett exempel på TikTok Wrapped →',
    moreStatsTitle: '✨ Och så mycket mer väntar på dig...',
    statTags: [
      '🔍 Toppsökningar',
      '📅 Aktivitet per år',
      '⏰ Mest aktiva timmar',
      '❤️ Gilla-markeringar och kommentarer',
      '📤 Delningshistorik',
      '🔴 Livesändningar',
    ],
    demoCta: 'Redo att upptäcka din statistik? [[analyze:Analysera din data nu! →]]',
  },

  analyze: {
    subtitle: 'Analysera din TikTok-data',
    howToTitle: '📱 Så här får du tag i din TikTok-data',
    importantLabel: 'Viktigt:',
    importantText:
      'TikTok tillhandahåller din data endast på begäran. När du har skickat en begäran kan det ta från några timmar upp till 3 dagar innan din data är klar. Se till att välja formatet ”JSON” när du gör begäran!',
    steps: [
      { title: 'Öppna Inställningar', text: 'Gå till din profil → tryck på menyn ☰ → välj Inställningar', alt: 'Steg 1: Öppna Inställningar' },
      { title: 'Gå till Konto', text: 'Under Inställningar och integritet, hitta och tryck på Konto', alt: 'Steg 2: Gå till Konto' },
      { title: 'Ladda ner din data', text: 'Scrolla ner och tryck på ”Ladda ner din data”', alt: 'Steg 3: Ladda ner din data' },
      { title: 'Begär data (JSON)', text: 'Ändra formatet till ”JSON”, välj ”All data” och tryck sedan på ”Begär data”', alt: 'Steg 4: Begär data' },
    ],
    footerSteps: [
      'Du får en avisering när din data är klar',
      'Ladda ner ZIP-filen från fliken ”Ladda ner data”',
      'Ladda upp den här och njut av din statistik!',
    ],
    dropPrompt: 'Släpp din ZIP- eller JSON-fil här',
    dropHint: 'TikTok → Inställningar → Integritet → Ladda ner data',
    analyzeBtn: '🔍 Analysera',
    analyzingBtn: '⏳ Analyserar...',
    privacyNote:
      'Din fil bearbetas endast för att generera dina resultat. Vi säljer, delar eller använder inte uppladdad data för annonsering.',
    howToLink: 'Har du inte din data? Lär dig hur du laddar ner den ↓',
    selectFileError: 'Välj en fil',
    fileTypeError: 'Välj en ZIP- eller JSON-fil',
    genericError: 'Ett fel uppstod när filen bearbetades',
    jsonNotFound: 'JSON-filen hittades inte i arkivet',
    progress: {
      reading: 'Läser filen...',
      extracting: 'Extraherar ZIP-arkiv...',
      readingFile: 'Läser {name}...',
      parsing: 'Tolkar JSON...',
      analyzing: 'Analyserar data...',
      processing: 'Bearbetar data...',
    },
    results: {
      yourStats: '🎰 Din statistik',
      videosWatched: 'Visade videor',
      hoursOnTikTok: 'Timmar på TikTok',
      daysOfWatching: 'Dagar av tittande',
      yourRank: 'Din TikTok-rankning',
      followers: 'Följare',
      following: 'Följer',
      interests: 'Intressen',
      whenActive: '⏰ När du är som mest aktiv',
      peakHour: 'Mest aktiva timme',
      mostActiveDay: 'Mest aktiva dag',
      firstWatch: 'Första tittningen',
      lastWatch: 'Senaste tittningen',
      engagement: '❤️ Engagemang',
      videosLiked: 'Gillade videor',
      favorites: 'Favoriter',
      comments: 'Kommentarer',
      shares: 'Delningar',
      activityByYear: '📅 Aktivitet per år',
      year: 'År',
      videos: 'videor',
      mostActiveMonth: 'Mest aktiva månad',
      avgPerDayPrefix: 'Genomsnitt',
      avgPerDaySuffix: 'videor per dag',
      collections: '📂 Dina samlingar',
      favoritesTitle: '⭐ Favoriter',
      favoriteSounds: 'Favoritljud',
      favoriteEffects: 'Favoriteffekter',
      favoriteHashtags: 'Favorithashtaggar',
      topSearches: '🔍 Toppsökningar',
      totalSearches: 'Totalt antal sökningar',
      shareDestinations: '📤 Delningsdestinationer',
      yourComments: '💭 Dina kommentarer',
      totalComments: 'Totalt antal kommentarer',
      avgChars: 'i genomsnitt {n} tecken',
      messages: '💬 Meddelanden',
      chats: 'Chattar',
      messagesLabel: 'Meddelanden',
      sent: 'Skickade',
      received: 'Mottagna',
      topChats: 'Toppchattar:',
      recentFollowers: '👥 Senaste följarna',
      devicesNetworks: '📱 Enheter och nätverk',
      totalLogins: 'Totalt antal inloggningar',
      devices: 'Enheter',
      networks: 'Nätverk',
      tiktokLive: '🔴 TikTok Live',
      livesWatched: 'Visade livesändningar',
      liveComments: 'Live-kommentarer',
      blocked: '🚫 Blockerade',
      messagesCountSuffix: 'meddelanden',
    },
  },

  example: {
    title: 'Exempel på TikTok Wrapped',
    subtitle: 'Ett komplett, verklighetstroget exempel — ingen uppladdning krävs',
    introText:
      'Den här sidan visar exakt vad du får från [[home:TikTok Wrapped]] efter att ha analyserat en exporterad TikTok-data — utan att ladda upp något. Varje siffra nedan tillhör ett fiktivt exempelkonto och är endast i illustrativt syfte. När du [[analyze:analyserar din egen export]] genereras samma sammanställning privat i din webbläsare utifrån din riktiga fil. TikTok Wrapped är ett oberoende, inofficiellt verktyg och är inte anslutet till eller godkänt av TikTok eller ByteDance Ltd.',
    rankExplanation:
      'Din rankning baseras på uppskattad tittartid. Det här exempelkontots 408 timmar placerar det i nivån ”Main Character” — det finns 16 rankningar totalt, från ”NPC Energy” hela vägen upp till ”No Life Speedrun WR”.',
    ctaTitle: '🎬 Redo att se din egen?',
    ctaDescription:
      'Din riktiga TikTok Wrapped genereras helt och hållet i din webbläsare utifrån din egen exporterade data — din fil lämnar aldrig din enhet.',
    ctaButton: 'Analysera din TikTok-data →',
    ctaLearn: 'Ny på dataexporter? [[blog:Lär dig hur du laddar ner din TikTok-data ↗]]',
    sample: {
      displayName: 'Exempelanvändare',
      interests: ['Komedi', 'Matlagning', 'Resor', 'Träning', 'Musik'],
      activeDay: 'Söndag',
      activeMonth: 'November 2024',
      firstWatch: '4 mars 2022',
      lastWatch: '14 dec 2025',
      searches: [
        'enkla middagsrecept',
        'maratonträning',
        'resetips',
        'standupkomedi',
        'hemmaträning',
        'budgetresor europa',
        'gitarrlektion',
        'idéer för matlådor',
        'produktivitetstips',
        'gatumat',
      ],
      shareMethods: ['Direktmeddelande', 'Kopiera länk', 'WhatsApp', 'Instagram'],
      networks: ['Wi-Fi', 'Mobildata'],
    },
  },

  about: {
    title: 'Om oss',
    paragraphs: [
      'TikTok Wrapped är en oberoende onlinetjänst som är utformad för att hjälpa användare att bättre förstå sin personliga TikTok-aktivitetsdata.',
      'TikTok låter användare ladda ner en officiell dataexport som innehåller information om deras aktivitet på plattformen. Även om denna data tillhör användaren levereras den ofta i ett rått och ostrukturerat format som är svårt att tolka. TikTok Wrapped tillhandahåller verktyg som organiserar denna data och presenterar den på ett tydligt, läsbart och användarvänligt sätt.',
      'Webbplatsen låter användare ladda upp sin egen exporterade TikTok-data och få automatiserade insikter som enbart baseras på den filen. Tjänsten fokuserar på sammanfattning, visualisering och allmän analys av användningsmönster för att hjälpa användare att få en bättre förståelse för sitt digitala beteende.',
      'TikTok Wrapped skapar inga konton, kräver ingen registrering och erbjuder inga funktioner för sociala nätverk eller innehållslagring. Webbplatsen finns enbart som ett informationsverktyg som bearbetar användartillhandahållna filer på användarens begäran.',
      'Vi strävar efter att erbjuda en enkel, transparent och integritetsfokuserad upplevelse. Webbplatsen är gratis att använda och finansieras genom annonsering; se vår [[privacy:integritetspolicy]] för hur cookies och annonser fungerar.',
      'TikTok Wrapped drivs av AffSquad och kan nås på [[email:hello@ttwrapper.com]]. Det är ett oberoende, inofficiellt verktyg och är inte anslutet till, godkänt av eller på något sätt kopplat till TikTok eller ByteDance Ltd.',
    ],
    faqTitle: 'Vanliga frågor',
    faq: [
      { q: 'Vad är TikTok Wrapped?', a: 'TikTok Wrapped är ett onlineverktyg som hjälper användare att analysera och bättre förstå sin personliga TikTok-aktivitet med hjälp av sin officiella exporterade TikTok-data.' },
      { q: 'Hur får jag tag i min exporterade TikTok-data?', a: 'Du kan begära och ladda ner din dataexport från TikToks inställningar (Data/Integritet). När du har fått ZIP-filen från TikTok kan du ladda upp den till TikTok Wrapped.' },
      { q: 'Lagrar ni min uppladdade ZIP-fil?', a: 'Filer bearbetas endast för att generera de insikter du har begärt. Vi lagrar eller säljer inte uppladdad data och använder den inte för annonspersonalisering.' },
      { q: 'Är TikTok Wrapped anslutet till TikTok?', a: 'Nej. TikTok Wrapped är en oberoende tjänst och är inte ansluten till eller godkänd av TikTok eller ByteDance.' },
      { q: 'Är TikTok Wrapped gratis att använda?', a: 'Webbplatsens grundläggande funktioner är tillgängliga utan kostnad. Webbplatsen kan visa annonser för att finansiera löpande utveckling och driftskostnader.' },
    ],
  },

  contact: {
    title: 'Kontakta oss',
    intro:
      'Om du har frågor om TikTok Wrapped, vår webbplats eller hur tjänsten fungerar kan du nå oss via kontaktuppgifterna nedan.',
    welcomeTitle: 'Vi välkomnar förfrågningar gällande:',
    welcomeItems: [
      'allmänna frågor om plattformen,',
      'integritet och datahantering,',
      'tekniska problem eller feedback,',
      'juridiska eller policyrelaterade frågor.',
    ],
    howToTitle: 'Så här kontaktar du oss',
    emailLabel: 'E-post:',
    responseNote: 'Vi strävar efter att besvara alla legitima förfrågningar inom 2–3 arbetsdagar.',
    aboutTitle: 'Om kommunikation',
    aboutText1:
      'TikTok Wrapped är en oberoende onlinetjänst som drivs av AffSquad och som fokuserar på att analysera användartillhandahållna exporterade TikTok-data. Det är inte anslutet till, godkänt av eller på något sätt kopplat till TikTok eller ByteDance Ltd. Vi erbjuder inte kundsupport via sociala medier och vi erbjuder för närvarande inte telefonsupport.',
    aboutText2:
      'Skicka inte känslig personlig information via e-post om det inte är nödvändigt för att hantera din förfrågan.',
  },

  privacy: {
    title: 'Integritetspolicy',
    lastUpdatedLabel: 'Senast uppdaterad:',
    lastUpdatedDate: '20 juni 2026',
    intro:
      'Denna integritetspolicy förklarar hur TikTok Wrapped (”TikTok Wrapped”, ”vi”, ”oss”) samlar in, använder och skyddar information när du besöker ttwrapper.com. TikTok Wrapped är ett oberoende, inofficiellt verktyg och är inte anslutet till, godkänt av eller på något sätt kopplat till TikTok eller ByteDance Ltd.',
    cookieTable: {
      providerHeader: 'Leverantör',
      purposeHeader: 'Syfte',
      typeHeader: 'Typ',
      rows: [
        { provider: 'TikTok Wrapped', purpose: 'Kommer ihåg ditt val av cookie-samtycke', type: 'Nödvändig' },
        { provider: 'Google Tag Manager / Analytics', purpose: 'Aggregerad, anonym användningsstatistik', type: 'Analys (samtycke krävs)' },
        { provider: 'Google AdSense / DoubleClick', purpose: 'Visning och mätning av annonser, inklusive personaliserade annonser', type: 'Annonsering (samtycke krävs)' },
      ],
    },
    sections: [
      { title: '1. Vilka vi är (personuppgiftsansvarig)', paragraphs: ['TikTok Wrapped drivs av AffSquad, den personuppgiftsansvarige som ansvarar för denna webbplats. Om du har några frågor om denna policy eller hur dina uppgifter hanteras kan du kontakta oss på [[email:hello@ttwrapper.com]] eller via vår [[contact:kontaktsida]].'] },
      { title: '2. Din uppladdade TikTok-data', paragraphs: ['När du använder analysverktyget läses och bearbetas din exporterade TikTok-data (ZIP eller JSON) helt och hållet i din egen webbläsare. Filen laddas inte upp till eller lagras på våra servrar, och vi bygger inga profiler eller databaser utifrån den. Analysen finns endast i din webbläsarflik och försvinner när du stänger eller uppdaterar sidan.', 'Vi kräver ingen kontoregistrering, inloggning eller personlig identifiering för att använda analysverktyget.'] },
      { title: '3. Information som samlas in automatiskt', paragraphs: ['Som på de flesta webbplatser kan viss teknisk information samlas in när du besöker ttwrapper.com, genom cookies och liknande tekniker av oss och av tredjepartsleverantörer (såsom Google), inklusive:'], list: ['enhets- och webbläsartyp, skärmstorlek och operativsystem;', 'IP-adress (används för att uppskatta ungefärlig plats och av säkerhetsskäl);', 'besökta sidor, hänvisande URL:er och interaktionshändelser;', 'cookie-identifierare som används för analys och annonsering.'], afterList: ['Denna information bearbetas endast där du har gett ditt samtycke eller där vi har ett berättigat intresse, enligt beskrivningen nedan.'] },
      { title: '4. Cookies och liknande tekniker', paragraphs: ['Vi använder cookies och liknande tekniker för nödvändig funktionalitet, analys och annonsering. Icke-nödvändiga cookies (analys och annonsering) sätts endast efter att du har gett ditt samtycke via vår cookie-banner. De huvudsakliga kategorierna är:'], hasCookieTable: true, afterList: ['Du kan ändra eller återkalla ditt samtycke när som helst via länken ”Cookie-inställningar” i sidfoten.'] },
      { title: '5. Annonsering (Google AdSense)', paragraphs: ['Vi använder Google AdSense för att visa annonser. Följande information gäller:'], list: ['Tredjepartsleverantörer, inklusive Google, använder cookies för att visa annonser baserat på dina tidigare besök på denna webbplats och andra webbplatser.', 'Googles användning av annonscookies (inklusive DoubleClick-cookien) gör att Google och dess partner kan visa annonser för dig baserat på dina besök på denna och/eller andra webbplatser på internet.', 'Du kan välja bort personaliserad annonsering genom att besöka [[adsSettings:Googles annonsinställningar]].', 'Du kan välja bort vissa tredjepartsleverantörers användning av cookies för personaliserad annonsering på [[aboutAds:aboutads.info/choices]] eller [[yourChoices:youronlinechoices.eu]].', 'Läs om hur Google använder information från webbplatser som använder dess tjänster på [[partnerSites:policies.google.com/technologies/partner-sites]].'], afterList: ['Om du inte samtycker till personaliserad annonsering kan Google fortfarande visa icke-personaliserade annonser baserat på allmän kontext snarare än din webbhistorik.'] },
      { title: '6. Analys', paragraphs: ['Vi använder Google Tag Manager och Googles analystjänster för att i aggregerad form förstå hur besökare använder webbplatsen (till exempel vilka sidor som är populära). Dessa tjänster kan sätta cookies och bearbeta tekniska uppgifter såsom din IP-adress. De laddas endast efter att du samtyckt till analyscookies.'] },
      { title: '7. Hantering av samtycke', paragraphs: ['Vi använder Google Consent Mode v2. Som standard är lagring för annonsering och analys inställd på nekad, och de relaterade taggarna laddas inte förrän du gör ett val i vår cookie-banner. Du kan öppna bannern igen och ändra ditt beslut när som helst via länken ”Cookie-inställningar” i sidfoten. Besökare i Europeiska ekonomiska samarbetsområdet, Storbritannien och Schweiz tillfrågas om samtycke innan några icke-nödvändiga cookies används.'] },
      { title: '8. Hur vi använder information', paragraphs: [], list: ['för att driva, underhålla och säkra webbplatsen;', 'för att generera insikter från den data du väljer att analysera (i din webbläsare);', 'för att förstå aggregerad användning och förbättra tjänsten;', 'för att visa annonser som hjälper till att finansiera den kostnadsfria tjänsten.'], afterList: ['Vi säljer inte dina personuppgifter och vi använder inte din uppladdade TikTok-export för annonsering eller profilering.'] },
      { title: '9. Delning av data', paragraphs: ['Vi delar inte din uppladdade TikTok-data med någon. Teknisk data och cookie-data som beskrivs ovan kan bearbetas av våra tjänsteleverantörer, inklusive Google (annonsering och analys) och vår värdleverantör (Vercel), som var och en agerar enligt sina egna integritetspolicyer.'] },
      { title: '10. Lagring av data', paragraphs: ['Din uppladdade TikTok-export lagras aldrig av oss, så det finns inget att bevara eller radera hos oss. Aggregerad analys- och annonsdata som innehas av våra leverantörer bevaras enligt deras egna lagringsperioder (till exempel Googles standardinställningar för lagring).'] },
      { title: '11. Dina integritetsrättigheter (GDPR/UK GDPR)', paragraphs: ['Om du befinner dig inom EES eller i Storbritannien har du rätt att få tillgång till, rätta, radera, begränsa eller invända mot behandlingen av dina personuppgifter, samt rätt till dataportabilitet och att återkalla samtycke när som helst. För att utöva dessa rättigheter, kontakta oss på [[email:hello@ttwrapper.com]]. Du har också rätt att lämna in ett klagomål till din lokala dataskyddsmyndighet.'] },
      { title: '12. Integritetsrättigheter i Kalifornien (CCPA/CPRA)', paragraphs: ['Invånare i Kalifornien har rätt att få veta vilka personuppgifter som samlas in, att begära radering och att välja bort ”försäljning” eller ”delning” av personuppgifter. Vi säljer inte personuppgifter. För att utöva dina rättigheter, kontakta oss på [[email:hello@ttwrapper.com]].'] },
      { title: '13. Internationella dataöverföringar', paragraphs: ['Våra leverantörer kan bearbeta data på servrar som finns utanför ditt land, inklusive i USA. Där det krävs skyddas sådana överföringar av lämpliga skyddsåtgärder, såsom leverantörernas standardavtalsklausuler.'] },
      { title: '14. Barns integritet', paragraphs: ['TikTok Wrapped riktar sig inte till barn under 13 år, och vi samlar inte medvetet in personuppgifter från dem. TikToks egna åldersgränser gäller för att erhålla en dataexport.'] },
      { title: '15. Ändringar i denna policy', paragraphs: ['Vi kan komma att uppdatera denna integritetspolicy då och då. Väsentliga ändringar återspeglas genom att datumet ”Senast uppdaterad” högst upp på denna sida uppdateras.'] },
      { title: '16. Kontakt', paragraphs: ['Frågor om denna integritetspolicy? Mejla [[email:hello@ttwrapper.com]] eller använd vår [[contact:kontaktsida]].'] },
    ],
  },

  terms: {
    title: 'Användarvillkor',
    lastUpdatedLabel: 'Senast uppdaterad:',
    lastUpdatedDate: '20 juni 2026',
    intro:
      'Genom att gå in på eller använda TikTok Wrapped (ttwrapper.com) godkänner du dessa användarvillkor. Om du inte godkänner dem, vänligen använd inte webbplatsen.',
    sections: [
      { title: 'Tjänstebeskrivning', paragraphs: ['TikTok Wrapped tillhandahåller ett automatiserat, webbläsarbaserat verktyg för att analysera en användares egen exporterade TikTok-data. Tjänsten är oberoende och är inte ansluten till, godkänd av eller på något sätt kopplad till TikTok eller ByteDance Ltd. Den tillhandahålls ”i befintligt skick” och endast för informativt och personligt bruk.'] },
      { title: 'Användarens ansvar', paragraphs: ['Användare ansvarar för:'], list: ['att endast ladda upp data som de äger eller har rätt att använda,', 'att säkerställa att uppladdade filer kommer från TikToks officiella dataexportfunktion.'] },
      { title: 'Acceptabel användning', paragraphs: ['Du samtycker till att inte:'], list: ['använda tjänsten för något olagligt syfte eller i strid med tillämplig lag;', 'försöka störa, överbelasta, bakåtkompilera eller skaffa obehörig åtkomst till tjänsten;', 'ladda upp filer som innehåller skadlig kod eller data som du inte har behörighet att använda.'] },
      { title: 'Inga garantier', paragraphs: ['Även om vi strävar efter noggrannhet garanterar TikTok Wrapped inte att alla insikter är fullständiga, felfria eller lämpliga för specifika beslut. Resultaten ska inte betraktas som professionell, juridisk eller ekonomisk rådgivning.'] },
      { title: 'Immateriella rättigheter', paragraphs: ['Webbplatsens design, ursprungliga varumärke, text och programvarulogik för TikTok Wrapped tillhör dess operatör om inget annat anges. ”TikTok” och relaterade kännetecken är varumärken som tillhör respektive ägare och används här endast beskrivande; vi gör inga anspråk på dem. Användare behåller fullständig äganderätt till sin uppladdade data.'] },
      { title: 'Ansvarsbegränsning', paragraphs: ['TikTok Wrapped ansvarar inte för:'], list: ['beslut som fattats baserat på genererade insikter,', 'dataförlust orsakad av användarfel,', 'avbrott eller tillfällig otillgänglighet av tjänsten.'] },
      { title: 'Tillämplig lag', paragraphs: ['Dessa villkor regleras av och tolkas i enlighet med tillämplig konsumentskyddslagstiftning och allmän lagstiftning, utan hänsyn till lagvalsprinciper. Eventuella tvister hanteras av behöriga domstolar på operatörens verksamhetsort.'] },
      { title: 'Ändringar av dessa villkor', paragraphs: ['Vi kan komma att uppdatera dessa villkor då och då. Ändringar träder i kraft när de publiceras, och datumet ”Senast uppdaterad” ovan återspeglar den senaste versionen. Fortsatt användning av webbplatsen efter ändringar innebär att du godkänner de uppdaterade villkoren.'] },
      { title: 'Kontakt', paragraphs: ['Frågor om dessa villkor? Mejla [[email:hello@ttwrapper.com]] eller använd vår [[contact:kontaktsida]].'] },
    ],
  },

  notFound: {
    title: '404 — Sidan hittades inte',
    text: 'Tyvärr, vi kunde inte hitta den sidan. Den kan ha flyttats eller finns inte längre. Här är några ställen där du kan ta vid där du slutade:',
    links: { home: 'Hem', analyze: 'Analysera din data', example: 'Se ett exempel', blog: 'Blogg' },
  },

  blog: {
    backToBlog: '← Tillbaka till bloggen',
    indexTitle: 'Blogg',
    indexIntro:
      'Den här bloggen finns för att hjälpa användare att bättre förstå TikTok-data, integritet och personliga användningsmönster genom tydligt, oberoende och pedagogiskt innehåll. TikTok låter användare ladda ner sin aktivitetsdata, men den kommer ofta i råa, tekniska format som kan vara svåra att tolka. Våra artiklar förklarar vad denna data innehåller, hur den är strukturerad och hur du analyserar den på ett ansvarsfullt sätt med hjälp av dina egna dataexporter. Vi tar upp ämnen som nedladdning av TikTok-data, datafilstrukturer, integritetsaspekter, analys av användningsbeteende och skillnaderna mellan plattformsanalys och oberoende dataverktyg.',
    faqHeading: 'Vanliga frågor',
  },

  meta: {
    home: {
      title: 'TikTok Wrapped (Inofficiell) — Gratis TikTok-statistik & sammanfattning',
      description:
        'Se din TikTok Wrapped: tittartid, toppsökningar, favoritkreatörer och en rolig personlighetsrankning, skapad utifrån din exporterade TikTok-data. Gratis, privat, ingen inloggning — din fil lämnar aldrig din webbläsare. Inofficiellt verktyg.',
    },
    analyze: {
      title: 'Analysera din exporterade TikTok-data — Ladda upp och få din statistik',
      description:
        'Ladda upp din officiella exporterade TikTok-data (ZIP eller JSON) och se direkt din tittartid, dina toppsökningar, dina favoritkreatörer, dina mest aktiva timmar och en personlighetsrankning. Bearbetas privat i din webbläsare — inget laddas upp till en server.',
    },
    example: {
      title: 'Exempel på TikTok Wrapped — Se ett komplett exempel (ingen uppladdning krävs)',
      description:
        'Se exakt vad TikTok Wrapped skapar från en exporterad TikTok-data: ett komplett exempel med tittartid, personlighetsrankning, toppsökningar, mest aktiva timmar, engagemang och enhetsstatistik. Exempeldata — ingen uppladdning krävs.',
    },
    about: {
      title: 'Om oss - TikTok Wrapped',
      description:
        'Lär dig om TikTok Wrapped — en oberoende tjänst som hjälper dig att förstå din TikTok-aktivitetsdata. Integritetsfokuserad, gratis och inte ansluten till TikTok.',
    },
    contact: {
      title: 'Kontakta oss - TikTok Wrapped',
      description:
        'Kontakta TikTok Wrapped för frågor om tjänsten, integritet, tekniska problem eller juridiska frågor. E-post: hello@ttwrapper.com',
    },
    privacy: {
      title: 'Integritetspolicy - TikTok Wrapped',
      description:
        'Så hanterar TikTok Wrapped din data: bearbetning av din TikTok-export på klientsidan, cookies, annonsering och analys via Google AdSense, dina rättigheter enligt GDPR/CCPA, datalagring och alternativ för att välja bort.',
    },
    terms: {
      title: 'Användarvillkor - TikTok Wrapped',
      description:
        'TikTok Wrappeds användarvillkor — tjänstebeskrivning, användarens ansvar, acceptabel användning, immateriella rättigheter, ansvarsfriskrivningar, tillämplig lag och ändringar av dessa villkor.',
    },
    blog: {
      title: 'Blogg - TikTok Wrapped',
      description:
        'Läs guider och artiklar om analys av TikTok-data, integritet och hur du förstår din aktivitet på sociala medier.',
    },
    notFound: {
      title: 'Sidan hittades inte (404) - TikTok Wrapped',
      description:
        'Sidan du letar efter kunde inte hittas. Utforska TikTok Wrapped — analysera din exporterade TikTok-data, se ett exempel eller läs våra guider.',
    },
  },
}
