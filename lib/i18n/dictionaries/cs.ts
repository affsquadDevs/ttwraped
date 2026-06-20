import type { Dictionary } from './en'

export const dictionary: Dictionary = {
  nav: {
    home: 'Domů',
    analyze: 'Analyzovat',
    example: 'Příklad',
    about: 'O nás',
    blog: 'Blog',
    contact: 'Kontakt',
  },

  langSwitcher: {
    label: 'Jazyk',
  },

  cta: {
    analyzeData: 'Analyzujte svá data z TikToku →',
    viewExample: 'Zobrazit ukázkové TikTok Wrapped →',
    backToHome: '← Zpět na úvod',
  },

  disclaimer: {
    underH1:
      'Nezávislý a neoficiální nástroj — není spojen s TikTokem ani ByteDance Ltd., není jimi schválen ani s nimi nijak propojen.',
  },

  consent: {
    ariaLabel: 'Souhlas se soubory cookie',
    text:
      'Vážíme si vašeho soukromí. Soubory cookie používáme k analytice (Google Tag Manager) a k zobrazování reklam prostřednictvím Google AdSense, včetně personalizace reklam. S vaším souhlasem mohou Google a jeho partneři používat soubory cookie k personalizaci reklam na základě vašich návštěv tohoto a dalších webů. Svou volbu můžete kdykoli přijmout, odmítnout nebo změnit. Přečtěte si naše [[privacy:Zásady ochrany osobních údajů]].',
    accept: 'Přijmout vše',
    reject: 'Odmítnout nepodstatné',
  },

  footer: {
    description:
      'Nezávislý, neoficiální nástroj pro porozumění vašemu exportu dat z TikToku — návyky při sledování, zábavné hodnocení osobnosti a váš kompletní TikTok příběh.',
    productTitle: 'Produkt',
    legalTitle: 'Právní informace',
    resourcesTitle: 'Zdroje',
    links: {
      home: 'Domů',
      analyze: 'Analyzovat',
      example: 'Příklad',
      exampleWrapped: 'Ukázkové Wrapped',
      about: 'O nás',
      privacy: 'Zásady ochrany osobních údajů',
      terms: 'Podmínky služby',
      contact: 'Kontakt',
      blog: 'Blog',
    },
    copyright: '© {year} TikTok Wrapped. Všechna práva vyhrazena.',
    disclaimer:
      'TikTok Wrapped je nezávislý nástroj pro analýzu vašeho vlastního exportu dat z TikToku. Není spojen s TikTokem ani ByteDance Ltd., není jimi schválen ani s nimi nijak propojen. „TikTok“ je ochranná známka příslušného vlastníka.',
    privacy: 'Soukromí',
    terms: 'Podmínky',
    cookieSettings: 'Nastavení cookies',
  },

  home: {
    logoSubtitle: 'Analyzujte svůj export dat z TikToku',
    heroTagline: 'Váš rok na TikToku, odhalený 🎬',
    heroPlatformTagline:
      'Nezávislá platforma pro porozumění osobním datům o aktivitě na TikToku.',
    features: ['Získejte hodnocení své osobnosti', 'Prohlédněte si podrobné statistiky sledování'],
    heroDescription:
      'TikTok Wrapped je nezávislý online nástroj, který vám pomáhá porozumět vaší osobní aktivitě na TikToku pomocí vašeho oficiálního exportu dat z TikToku. Když si od TikToku vyžádáte svá data, jsou doručena jako soubor ZIP nebo JSON obsahující surové informace o aktivitě. TikTok Wrapped tento soubor analyzuje a převádí jej do přehledných souhrnů a vizuálních přehledů, jako jsou vzorce používání, časové osy aktivity a obecné statistiky interakcí. Služba pracuje pouze s daty, která se rozhodnete nahrát, a je určena pro informační účely a osobní analýzu.',
    learnMoreTitle: 'Zjistěte více o datech z TikToku',
    learnMoreText:
      'TikTok umožňuje uživatelům stáhnout si podrobný export svých osobních dat o aktivitě, ale tyto informace jsou často doručeny v technickém formátu, který může být obtížné interpretovat. TikTok Wrapped pomáhá uživatelům pochopit, jak jejich data fungují, co obsahují a jak je lze odpovědně analyzovat. Prostřednictvím vzdělávacích průvodců a vysvětlení se zaměřujeme na transparentnost, soukromí a přehlednost — pomáháme uživatelům porozumět vlastním datům bez domněnek a bez přístupu k platformě.',
    learnMoreLinks: [
      { slug: 'tiktok-wrapped-explained-what-it-is-how-it-works', label: 'TikTok Wrapped vysvětleno: Co to je a jak to funguje' },
      { slug: 'how-to-download-analyze-tiktok-data', label: 'Jak stáhnout a analyzovat data z TikToku' },
      { slug: 'what-your-tiktok-usage-says-about-your-digital-habits', label: 'Co vaše používání TikToku vypovídá o vašich digitálních návycích' },
      { slug: 'how-to-analyze-tiktok-data-safely-privacy-first-guide', label: 'Jak bezpečně analyzovat data z TikToku' },
    ],
    revealTitle: 'Co mohou data z TikToku odhalit',
    revealItems: [
      'Frekvence používání a trendy aktivity v čase',
      'Vzorce aktivity podle denní doby',
      'Obecné chování při interakcích (lajky, komentáře, sdílení)',
      'Dlouhodobé změny v návycích používání aplikace',
    ],
    revealDisclaimer:
      'Veškeré přehledy vycházejí z exportů dat vlastněných uživatelem a jsou určeny pouze pro informaci a osobní porozumění.',
    howItWorksTitle: 'Jak TikTok Wrapped funguje',
    howItWorksText:
      'TikTok Wrapped funguje tak, že analyzuje oficiální exporty dat z TikToku, které si uživatelé sami stáhnou. Platforma se zaměřuje na shrnutí a uspořádání těchto informací do čitelných přehledů, aniž by přistupovala k uživatelským účtům nebo shromažďovala další data. Podrobné pokyny a analytické nástroje jsou k dispozici na [[analyze:samostatné stránce]] pro uživatele, kteří chtějí svá data prozkoumat podrobněji.',
    analyzeButton: 'Analyzujte svá data z TikToku →',
    demoTitle: '🎬 Podívejte se na to v akci',
    demoDescription:
      'Chcete vidět, co TikTok Wrapped vytvoří, ještě než začnete? Prohlédněte si kompletní, realisticky vypadající příklad vytvořený z ukázkových dat — bez nutnosti cokoli nahrávat.',
    demoButton: 'Zobrazit ukázkové TikTok Wrapped →',
    moreStatsTitle: '✨ A čeká vás toho mnohem víc...',
    statTags: [
      '🔍 Nejčastější vyhledávání',
      '📅 Aktivita podle roku',
      '⏰ Špičkové hodiny',
      '❤️ Lajky a komentáře',
      '📤 Historie sdílení',
      '🔴 Živé přenosy',
    ],
    demoCta: 'Jste připraveni objevit své statistiky? [[analyze:Analyzujte svá data teď! →]]',
  },

  analyze: {
    subtitle: 'Analyzujte svá data z TikToku',
    howToTitle: '📱 Jak získat svá data z TikToku',
    importantLabel: 'Důležité:',
    importantText:
      'TikTok poskytuje vaše data pouze na vyžádání. Po odeslání žádosti může příprava vašich dat trvat od několika hodin až do 3 dnů. Při žádosti nezapomeňte zvolit formát „JSON“!',
    steps: [
      { title: 'Otevřete Nastavení', text: 'Přejděte do svého profilu → klepněte na nabídku ☰ → vyberte Nastavení', alt: 'Krok 1: Otevřete Nastavení' },
      { title: 'Přejděte na Účet', text: 'V části Nastavení a soukromí najděte a klepněte na Účet', alt: 'Krok 2: Přejděte na Účet' },
      { title: 'Stáhněte svá data', text: 'Sjeďte dolů a klepněte na „Stáhnout svá data“', alt: 'Krok 3: Stáhněte svá data' },
      { title: 'Vyžádejte si data (JSON)', text: 'Změňte formát na „JSON“, vyberte „Všechna data“ a poté klepněte na „Vyžádat data“', alt: 'Krok 4: Vyžádejte si data' },
    ],
    footerSteps: [
      'Až budou vaše data připravena, dostanete oznámení',
      'Stáhněte si soubor ZIP z karty „Stáhnout data“',
      'Nahrajte jej sem a užijte si své statistiky!',
    ],
    dropPrompt: 'Přetáhněte sem svůj soubor ZIP nebo JSON',
    dropHint: 'TikTok → Nastavení → Soukromí → Stáhnout data',
    analyzeBtn: '🔍 Analyzovat',
    analyzingBtn: '⏳ Analyzuji...',
    privacyNote:
      'Váš soubor je zpracován pouze za účelem vytvoření vašich výsledků. Nahraná data neprodáváme, nesdílíme ani nepoužíváme k reklamním účelům.',
    howToLink: 'Nemáte svá data? Zjistěte, jak si je stáhnout ↓',
    selectFileError: 'Vyberte prosím soubor',
    fileTypeError: 'Vyberte prosím soubor ZIP nebo JSON',
    genericError: 'Při zpracování souboru došlo k chybě',
    jsonNotFound: 'Soubor JSON nebyl v archivu nalezen',
    progress: {
      reading: 'Čtu soubor...',
      extracting: 'Rozbaluji archiv ZIP...',
      readingFile: 'Čtu {name}...',
      parsing: 'Zpracovávám JSON...',
      analyzing: 'Analyzuji data...',
      processing: 'Zpracovávám data...',
    },
    results: {
      yourStats: '🎰 Vaše statistiky',
      videosWatched: 'Zhlédnutá videa',
      hoursOnTikTok: 'Hodiny na TikToku',
      daysOfWatching: 'Dny sledování',
      yourRank: 'Vaše hodnocení na TikToku',
      followers: 'Sledující',
      following: 'Sledujete',
      interests: 'Zájmy',
      whenActive: '⏰ Kdy jste nejaktivnější',
      peakHour: 'Špičková hodina',
      mostActiveDay: 'Nejaktivnější den',
      firstWatch: 'První zhlédnutí',
      lastWatch: 'Poslední zhlédnutí',
      engagement: '❤️ Zapojení',
      videosLiked: 'Olajkovaná videa',
      favorites: 'Oblíbené',
      comments: 'Komentáře',
      shares: 'Sdílení',
      activityByYear: '📅 Aktivita podle roku',
      year: 'Rok',
      videos: 'videí',
      mostActiveMonth: 'Nejaktivnější měsíc',
      avgPerDayPrefix: 'Průměrně',
      avgPerDaySuffix: 'videí denně',
      collections: '📂 Vaše sbírky',
      favoritesTitle: '⭐ Oblíbené',
      favoriteSounds: 'Oblíbené zvuky',
      favoriteEffects: 'Oblíbené efekty',
      favoriteHashtags: 'Oblíbené hashtagy',
      topSearches: '🔍 Nejčastější vyhledávání',
      totalSearches: 'Celkem vyhledávání',
      shareDestinations: '📤 Cíle sdílení',
      yourComments: '💭 Vaše komentáře',
      totalComments: 'Celkem komentářů',
      avgChars: 'průměrně {n} znaků',
      messages: '💬 Zprávy',
      chats: 'Konverzace',
      messagesLabel: 'Zprávy',
      sent: 'Odeslané',
      received: 'Přijaté',
      topChats: 'Nejčastější konverzace:',
      recentFollowers: '👥 Noví sledující',
      devicesNetworks: '📱 Zařízení a sítě',
      totalLogins: 'Celkem přihlášení',
      devices: 'Zařízení',
      networks: 'Sítě',
      tiktokLive: '🔴 TikTok Live',
      livesWatched: 'Zhlédnuté živé přenosy',
      liveComments: 'Komentáře v živém přenosu',
      blocked: '🚫 Zablokováno',
      messagesCountSuffix: 'zpráv',
    },
  },

  example: {
    title: 'Ukázkové TikTok Wrapped',
    subtitle: 'Kompletní, realisticky vypadající příklad — bez nutnosti cokoli nahrávat',
    introText:
      'Tato stránka ukazuje přesně to, co od [[home:TikTok Wrapped]] získáte po analýze exportu dat z TikToku — aniž byste museli cokoli nahrávat. Každé číslo níže patří fiktivnímu ukázkovému účtu a slouží pouze pro ilustraci. Když [[analyze:analyzujete svůj vlastní export]], stejný rozbor se vytvoří soukromě ve vašem prohlížeči z vašeho skutečného souboru. TikTok Wrapped je nezávislý, neoficiální nástroj a není spojen s TikTokem ani ByteDance Ltd. a není jimi schválen.',
    rankExplanation:
      'Vaše hodnocení vychází z odhadovaného času sledování. Těchto 408 hodin u tohoto ukázkového účtu jej řadí do úrovně „Hlavní hrdina“ — celkem existuje 16 úrovní, od „Energie NPC“ až po „Speedrun bez života WR“.',
    ctaTitle: '🎬 Připraveni vidět to své?',
    ctaDescription:
      'Vaše skutečné TikTok Wrapped se vytvoří kompletně ve vašem prohlížeči z vašeho vlastního exportu dat — váš soubor nikdy neopustí vaše zařízení.',
    ctaButton: 'Analyzujte svá data z TikToku →',
    ctaLearn: 'Nemáte zkušenosti s exporty dat? [[blog:Zjistěte, jak si stáhnout svá data z TikToku ↗]]',
    sample: {
      displayName: 'Ukázkový uživatel',
      interests: ['Komedie', 'Vaření', 'Cestování', 'Fitness', 'Hudba'],
      activeDay: 'Neděle',
      activeMonth: 'Listopad 2024',
      firstWatch: '4. bře 2022',
      lastWatch: '14. pro 2025',
      searches: [
        'jednoduché recepty na večeři',
        'tréninkový plán na maraton',
        'cestovatelské triky',
        'standup komedie',
        'cvičení doma',
        'levné cestování po evropě',
        'výuka hry na kytaru',
        'nápady na meal prep',
        'tipy na produktivitu',
        'pouliční jídlo',
      ],
      shareMethods: ['Přímá zpráva', 'Kopírovat odkaz', 'WhatsApp', 'Instagram'],
      networks: ['Wi-Fi', 'Mobilní data'],
    },
  },

  about: {
    title: 'O nás',
    paragraphs: [
      'TikTok Wrapped je nezávislá online služba navržená tak, aby uživatelům pomohla lépe porozumět jejich osobním datům o aktivitě na TikToku.',
      'TikTok umožňuje uživatelům stáhnout si oficiální export dat obsahující informace o jejich aktivitě na platformě. Tato data sice patří uživateli, ale jsou často doručena v surovém a nestrukturovaném formátu, který je obtížné interpretovat. TikTok Wrapped poskytuje nástroje, které tato data uspořádají a prezentují přehledným, čitelným a uživatelsky přívětivým způsobem.',
      'Web umožňuje uživatelům nahrát vlastní export dat z TikToku a získat automatizované přehledy založené výhradně na tomto souboru. Služba se zaměřuje na shrnutí, vizualizaci a obecnou analýzu vzorců používání, aby uživatelům pomohla lépe porozumět jejich digitálnímu chování.',
      'TikTok Wrapped nevytváří účty, nevyžaduje registraci a neposkytuje funkce sociálních sítí ani hostování obsahu. Web existuje výhradně jako informační nástroj, který zpracovává soubory poskytnuté uživatelem na jeho žádost.',
      'Naším cílem je nabídnout jednoduchou, transparentní a na soukromí zaměřenou službu. Web je zdarma a je financován reklamou; informace o tom, jak fungují soubory cookie a reklamy, najdete v našich [[privacy:Zásadách ochrany osobních údajů]].',
      'TikTok Wrapped provozuje AffSquad a lze jej kontaktovat na adrese [[email:hello@ttwrapper.com]]. Jde o nezávislý, neoficiální nástroj, který není spojen s TikTokem ani ByteDance Ltd., není jimi schválen ani s nimi nijak propojen.',
    ],
    faqTitle: 'Časté dotazy',
    faq: [
      { q: 'Co je TikTok Wrapped?', a: 'TikTok Wrapped je online nástroj, který uživatelům pomáhá analyzovat a lépe porozumět jejich osobní aktivitě na TikToku pomocí jejich oficiálního exportu dat z TikToku.' },
      { q: 'Jak získám svůj export dat z TikToku?', a: 'Svůj export dat si můžete vyžádat a stáhnout v nastavení TikToku (Data / Soukromí). Jakmile od TikToku obdržíte soubor ZIP, můžete jej nahrát do TikTok Wrapped.' },
      { q: 'Ukládáte můj nahraný soubor ZIP?', a: 'Soubory jsou zpracovány pouze za účelem vytvoření vámi požadovaných přehledů. Nahraná data neukládáme, neprodáváme a nepoužíváme je k personalizaci reklam.' },
      { q: 'Je TikTok Wrapped spojeno s TikTokem?', a: 'Ne. TikTok Wrapped je nezávislá služba, která není spojena s TikTokem ani ByteDance a není jimi schválena.' },
      { q: 'Je TikTok Wrapped zdarma?', a: 'Základní funkce webu jsou dostupné bez placení. Web může zobrazovat reklamy na podporu průběžného vývoje a nákladů na hosting.' },
    ],
  },

  contact: {
    title: 'Kontaktujte nás',
    intro:
      'Pokud máte dotazy ohledně TikTok Wrapped, našeho webu nebo toho, jak služba funguje, můžete se na nás obrátit pomocí níže uvedených kontaktních údajů.',
    welcomeTitle: 'Uvítáme dotazy týkající se:',
    welcomeItems: [
      'obecných otázek o platformě,',
      'soukromí a nakládání s daty,',
      'technických problémů nebo zpětné vazby,',
      'právních záležitostí nebo otázek souvisejících se zásadami.',
    ],
    howToTitle: 'Jak nás kontaktovat',
    emailLabel: 'E-mail:',
    responseNote: 'Snažíme se odpovědět na všechny relevantní dotazy do 2–3 pracovních dnů.',
    aboutTitle: 'O komunikaci',
    aboutText1:
      'TikTok Wrapped je nezávislá online služba provozovaná společností AffSquad, zaměřená na analýzu exportů dat z TikToku poskytnutých uživateli. Není spojena s TikTokem ani ByteDance Ltd., není jimi schválena ani s nimi nijak propojena. Nenabízíme zákaznickou podporu prostřednictvím sociálních sítí a v současné době neposkytujeme telefonickou podporu.',
    aboutText2:
      'Neposílejte prosím e-mailem citlivé osobní údaje, pokud to není nezbytné k vyřízení vaší žádosti.',
  },

  privacy: {
    title: 'Zásady ochrany osobních údajů',
    lastUpdatedLabel: 'Naposledy aktualizováno:',
    lastUpdatedDate: '20. června 2026',
    intro:
      'Tyto Zásady ochrany osobních údajů vysvětlují, jak TikTok Wrapped („TikTok Wrapped“, „my“, „nás“) shromažďuje, používá a chrání informace, když navštívíte web ttwrapper.com. TikTok Wrapped je nezávislý, neoficiální nástroj a není spojen s TikTokem ani ByteDance Ltd., není jimi schválen ani s nimi nijak propojen.',
    cookieTable: {
      providerHeader: 'Poskytovatel',
      purposeHeader: 'Účel',
      typeHeader: 'Typ',
      rows: [
        { provider: 'TikTok Wrapped', purpose: 'Pamatuje si vaši volbu souhlasu se soubory cookie', type: 'Nezbytné' },
        { provider: 'Google Tag Manager / Analytics', purpose: 'Souhrnné, anonymní statistiky používání', type: 'Analytické (vyžaduje souhlas)' },
        { provider: 'Google AdSense / DoubleClick', purpose: 'Zobrazování a měření reklam, včetně personalizovaných reklam', type: 'Reklamní (vyžaduje souhlas)' },
      ],
    },
    sections: [
      { title: '1. Kdo jsme (správce údajů)', paragraphs: ['TikTok Wrapped provozuje AffSquad, správce údajů odpovědný za tento web. Pokud máte jakékoli dotazy ohledně těchto zásad nebo toho, jak nakládáme s vašimi daty, můžete nás kontaktovat na adrese [[email:hello@ttwrapper.com]] nebo prostřednictvím naší stránky [[contact:Kontakt]].'] },
      { title: '2. Vaše nahraná data z TikToku', paragraphs: ['Když používáte analyzátor, váš export dat z TikToku (ZIP nebo JSON) je čten a zpracováván výhradně ve vašem vlastním prohlížeči. Soubor není nahráván na naše servery ani na nich ukládán a nevytváříme z něj žádné profily ani databáze. Analýza existuje pouze na kartě vašeho prohlížeče a po zavření nebo obnovení stránky zmizí.', 'K používání analyzátoru nevyžadujeme vytvoření účtu, přihlášení ani osobní identifikaci.'] },
      { title: '3. Automaticky shromažďované informace', paragraphs: ['Jako většina webů mohou být při návštěvě ttwrapper.com prostřednictvím souborů cookie a podobných technologií shromažďovány určité technické informace, a to námi i poskytovateli třetích stran (například společností Google), včetně:'], list: ['typ zařízení a prohlížeče, velikost obrazovky a operační systém;', 'IP adresa (používaná k přibližnému určení obecné polohy a pro účely zabezpečení);', 'navštívené stránky, odkazující adresy URL a události interakcí;', 'identifikátory cookie používané pro analytiku a reklamu.'], afterList: ['Tyto informace jsou zpracovávány pouze tam, kde jste udělili souhlas, nebo tam, kde máme oprávněný zájem, jak je popsáno níže.'] },
      { title: '4. Soubory cookie a podobné technologie', paragraphs: ['Soubory cookie a podobné technologie používáme pro nezbytnou funkčnost, analytiku a reklamu. Nepodstatné soubory cookie (analytické a reklamní) se nastavují až poté, co udělíte souhlas prostřednictvím našeho cookie banneru. Hlavní kategorie jsou:'], hasCookieTable: true, afterList: ['Svůj souhlas můžete kdykoli změnit nebo odvolat pomocí odkazu „Nastavení cookies“ v patičce webu.'] },
      { title: '5. Reklama (Google AdSense)', paragraphs: ['K zobrazování reklamy používáme Google AdSense. Platí následující informace:'], list: ['Dodavatelé třetích stran, včetně společnosti Google, používají soubory cookie k zobrazování reklam na základě vašich předchozích návštěv tohoto a dalších webů.', 'Používání reklamních souborů cookie společností Google (včetně souboru cookie DoubleClick) jí a jejím partnerům umožňuje zobrazovat vám reklamy na základě vašich návštěv tohoto a/nebo jiných webů na internetu.', 'Z personalizované reklamy se můžete odhlásit na stránce [[adsSettings:Nastavení reklam Google]].', 'Z používání souborů cookie pro personalizovanou reklamu některými dodavateli třetích stran se můžete odhlásit na [[aboutAds:aboutads.info/choices]] nebo [[yourChoices:youronlinechoices.eu]].', 'Informace o tom, jak Google používá data z webů, které využívají jeho služby, najdete na [[partnerSites:policies.google.com/technologies/partner-sites]].'], afterList: ['Pokud nesouhlasíte s personalizovanou reklamou, Google vám stále může zobrazovat nepersonalizované reklamy založené na obecném kontextu, nikoli na historii vašeho prohlížení.'] },
      { title: '6. Analytika', paragraphs: ['Používáme Google Tag Manager a analytické služby Google, abychom souhrnně pochopili, jak návštěvníci web používají (například které stránky jsou oblíbené). Tyto služby mohou nastavovat soubory cookie a zpracovávat technické údaje, jako je vaše IP adresa. Načítají se až poté, co udělíte souhlas s analytickými soubory cookie.'] },
      { title: '7. Správa souhlasu', paragraphs: ['Používáme Google Consent Mode v2. Ve výchozím nastavení je ukládání pro reklamu a analytiku zakázáno a související značky se nenačtou, dokud neprovedete volbu v našem cookie banneru. Banner můžete kdykoli znovu otevřít a své rozhodnutí změnit pomocí odkazu „Nastavení cookies“ v patičce. Návštěvníci z Evropského hospodářského prostoru, Spojeného království a Švýcarska jsou před použitím jakýchkoli nepodstatných souborů cookie požádáni o souhlas.'] },
      { title: '8. Jak používáme informace', paragraphs: [], list: ['k provozu, údržbě a zabezpečení webu;', 'k vytváření přehledů z dat, která se rozhodnete analyzovat (ve vašem prohlížeči);', 'k pochopení souhrnného používání a zlepšování služby;', 'k zobrazování reklamy, která pomáhá financovat bezplatnou službu.'], afterList: ['Vaše osobní údaje neprodáváme a váš nahraný export z TikToku nepoužíváme k reklamě ani profilování.'] },
      { title: '9. Sdílení dat', paragraphs: ['Vaše nahraná data z TikToku s nikým nesdílíme. Technické a cookie údaje popsané výše mohou být zpracovávány našimi poskytovateli služeb, včetně společnosti Google (reklama a analytika) a našeho poskytovatele hostingu (Vercel), z nichž každý jedná podle vlastních zásad ochrany osobních údajů.'] },
      { title: '10. Uchovávání dat', paragraphs: ['Váš nahraný export z TikToku u nás nikdy neukládáme, takže na naší straně není co uchovávat ani mazat. Souhrnná analytická a reklamní data uchovávaná našimi poskytovateli jsou uchovávána podle jejich vlastních lhůt pro uchovávání (například podle standardního nastavení uchovávání společnosti Google).'] },
      { title: '11. Vaše práva na ochranu soukromí (GDPR/UK GDPR)', paragraphs: ['Pokud se nacházíte v EHP nebo ve Spojeném království, máte právo na přístup ke svým osobním údajům, jejich opravu, výmaz, omezení zpracování nebo vznesení námitky proti jejich zpracování, jakož i právo na přenositelnost údajů a právo kdykoli odvolat souhlas. Chcete-li tato práva uplatnit, kontaktujte nás na adrese [[email:hello@ttwrapper.com]]. Máte také právo podat stížnost u svého místního dozorového úřadu pro ochranu osobních údajů.'] },
      { title: '12. Práva na ochranu soukromí v Kalifornii (CCPA/CPRA)', paragraphs: ['Obyvatelé Kalifornie mají právo vědět, jaké osobní údaje jsou shromažďovány, požádat o jejich výmaz a odhlásit se z „prodeje“ nebo „sdílení“ osobních údajů. Osobní údaje neprodáváme. Chcete-li uplatnit svá práva, kontaktujte nás na adrese [[email:hello@ttwrapper.com]].'] },
      { title: '13. Mezinárodní předávání dat', paragraphs: ['Naši poskytovatelé mohou zpracovávat data na serverech umístěných mimo vaši zemi, včetně Spojených států. Tam, kde je to vyžadováno, jsou taková předání chráněna vhodnými zárukami, jako jsou standardní smluvní doložky poskytovatelů.'] },
      { title: '14. Soukromí dětí', paragraphs: ['TikTok Wrapped není určeno dětem mladším 13 let a vědomě od nich neshromažďujeme osobní údaje. Na získání exportu dat se vztahují vlastní požadavky TikToku na minimální věk.'] },
      { title: '15. Změny těchto zásad', paragraphs: ['Tyto Zásady ochrany osobních údajů můžeme čas od času aktualizovat. Podstatné změny budou zohledněny aktualizací data „Naposledy aktualizováno“ v horní části této stránky.'] },
      { title: '16. Kontakt', paragraphs: ['Máte dotazy k těmto Zásadám ochrany osobních údajů? Napište na [[email:hello@ttwrapper.com]] nebo použijte naši stránku [[contact:Kontakt]].'] },
    ],
  },

  terms: {
    title: 'Podmínky služby',
    lastUpdatedLabel: 'Naposledy aktualizováno:',
    lastUpdatedDate: '20. června 2026',
    intro:
      'Přístupem k TikTok Wrapped (ttwrapper.com) nebo jeho používáním vyjadřujete souhlas s těmito Podmínkami služby. Pokud nesouhlasíte, web prosím nepoužívejte.',
    sections: [
      { title: 'Popis služby', paragraphs: ['TikTok Wrapped poskytuje automatizovaný nástroj běžící v prohlížeči pro analýzu vlastního exportu dat uživatele z TikToku. Služba je nezávislá a není spojena s TikTokem ani ByteDance Ltd., není jimi schválena ani s nimi nijak propojena. Je poskytována „tak, jak je“ a pouze pro informační a osobní použití.'] },
      { title: 'Povinnosti uživatele', paragraphs: ['Uživatelé odpovídají za:'], list: ['nahrávání pouze dat, která vlastní nebo k jejichž použití mají právo,', 'zajištění toho, že nahrané soubory pocházejí z oficiální funkce TikToku pro export dat.'] },
      { title: 'Přijatelné používání', paragraphs: ['Zavazujete se, že nebudete:'], list: ['používat službu k jakémukoli nezákonnému účelu nebo v rozporu s jakýmkoli platným zákonem;', 'pokoušet se narušit, přetížit, zpětně analyzovat nebo získat neoprávněný přístup ke službě;', 'nahrávat soubory obsahující malware nebo data, k jejichž použití nemáte oprávnění.'] },
      { title: 'Žádné záruky', paragraphs: ['Přestože usilujeme o přesnost, TikTok Wrapped nezaručuje, že všechny přehledy jsou úplné, bezchybné nebo vhodné pro konkrétní rozhodnutí. Výsledky by neměly být považovány za odborné, právní ani finanční poradenství.'] },
      { title: 'Duševní vlastnictví', paragraphs: ['Design webu, původní branding, texty a softwarová logika TikTok Wrapped patří jeho provozovateli, pokud není uvedeno jinak. „TikTok“ a související označení jsou ochranné známky příslušných vlastníků a jsou zde používány pouze popisně; nečiníme si na ně žádný nárok. Uživatelé si ponechávají plné vlastnictví svých nahraných dat.'] },
      { title: 'Omezení odpovědnosti', paragraphs: ['TikTok Wrapped neodpovídá za:'], list: ['rozhodnutí učiněná na základě vytvořených přehledů,', 'ztrátu dat způsobenou chybou uživatele,', 'přerušení nebo dočasnou nedostupnost služby.'] },
      { title: 'Rozhodné právo', paragraphs: ['Tyto Podmínky se řídí a vykládají v souladu s platnými předpisy na ochranu spotřebitele a obecnými právními předpisy, bez ohledu na kolizní normy. Případné spory budou řešeny příslušnými soudy v místě sídla provozovatele.'] },
      { title: 'Změny těchto podmínek', paragraphs: ['Tyto Podmínky můžeme čas od času aktualizovat. Změny nabývají účinnosti zveřejněním a datum „Naposledy aktualizováno“ výše bude odrážet nejnovější verzi. Pokračující používání webu po provedení změn představuje přijetí aktualizovaných Podmínek.'] },
      { title: 'Kontakt', paragraphs: ['Máte dotazy k těmto Podmínkám? Napište na [[email:hello@ttwrapper.com]] nebo použijte naši stránku [[contact:Kontakt]].'] },
    ],
  },

  notFound: {
    title: '404 — Stránka nenalezena',
    text: 'Omlouváme se, tuto stránku se nám nepodařilo najít. Možná byla přesunuta nebo již neexistuje. Zde je několik míst, kde můžete navázat:',
    links: { home: 'Domů', analyze: 'Analyzujte svá data', example: 'Zobrazit příklad', blog: 'Blog' },
  },

  blog: {
    backToBlog: '← Zpět na blog',
    indexTitle: 'Blog',
    indexIntro:
      'Tento blog existuje proto, aby uživatelům pomohl lépe porozumět datům z TikToku, soukromí a osobním vzorcům používání prostřednictvím přehledného, nezávislého a vzdělávacího obsahu. TikTok umožňuje uživatelům stáhnout si data o jejich aktivitě, ale ta často přicházejí v surových, technických formátech, které může být obtížné interpretovat. Naše články vysvětlují, co tato data obsahují, jak jsou strukturována a jak je odpovědně analyzovat pomocí vlastních exportů dat. Zabýváme se tématy včetně stahování dat z TikToku, struktury datových souborů, otázek soukromí, analýzy chování při používání a rozdílů mezi analytikou platformy a nezávislými datovými nástroji.',
    faqHeading: 'Časté dotazy',
  },

  meta: {
    home: {
      title: 'TikTok Wrapped (neoficiální) — Analyzujte svá data a statistiky z TikToku',
      description:
        'TikTok Wrapped je nezávislý, neoficiální nástroj, který analyzuje váš oficiální export dat z TikToku a odhalí váš čas sledování, nejčastější vyhledávání, oblíbený obsah i zábavné hodnocení osobnosti. Soukromé, zdarma a bez spojení s TikTokem či ByteDance Ltd.',
    },
    analyze: {
      title: 'Analyzujte svůj export dat z TikToku — Nahrajte a získejte statistiky',
      description:
        'Nahrajte svůj oficiální export dat z TikToku (ZIP nebo JSON) a okamžitě uvidíte svůj čas sledování, nejčastější vyhledávání, oblíbené tvůrce, špičkové hodiny a hodnocení osobnosti. Zpracováno soukromě ve vašem prohlížeči — nic se nenahrává na server.',
    },
    example: {
      title: 'Ukázkové TikTok Wrapped — Prohlédněte si kompletní příklad (bez nahrávání)',
      description:
        'Podívejte se přesně, co TikTok Wrapped vytvoří z exportu dat z TikToku: kompletní příklad s časem sledování, hodnocením osobnosti, nejčastějším vyhledáváním, špičkovými hodinami, zapojením a statistikami zařízení. Ukázková data — bez nutnosti nahrávat.',
    },
    about: {
      title: 'O nás - TikTok Wrapped',
      description:
        'Zjistěte více o TikTok Wrapped — nezávislé službě, která vám pomáhá porozumět vašim datům o aktivitě na TikToku. Zaměřeno na soukromí, zdarma a bez spojení s TikTokem.',
    },
    contact: {
      title: 'Kontaktujte nás - TikTok Wrapped',
      description:
        'Kontaktujte TikTok Wrapped s dotazy ohledně služby, soukromí, technických problémů nebo právních záležitostí. E-mail: hello@ttwrapper.com',
    },
    privacy: {
      title: 'Zásady ochrany osobních údajů - TikTok Wrapped',
      description:
        'Jak TikTok Wrapped nakládá s vašimi daty: zpracování exportu z TikToku na straně klienta, soubory cookie, reklama Google AdSense a analytika, vaše práva podle GDPR/CCPA, uchovávání dat a možnosti odhlášení.',
    },
    terms: {
      title: 'Podmínky služby - TikTok Wrapped',
      description:
        'Podmínky služby TikTok Wrapped — popis služby, povinnosti uživatele, přijatelné používání, duševní vlastnictví, vyloučení odpovědnosti, rozhodné právo a změny těchto podmínek.',
    },
    blog: {
      title: 'Blog - TikTok Wrapped',
      description:
        'Přečtěte si průvodce a články o analýze dat z TikToku, soukromí a o tom, jak porozumět své aktivitě na sociálních sítích.',
    },
    notFound: {
      title: 'Stránka nenalezena (404) - TikTok Wrapped',
      description:
        'Stránku, kterou hledáte, se nepodařilo najít. Prozkoumejte TikTok Wrapped — analyzujte svůj export dat z TikToku, prohlédněte si příklad nebo si přečtěte naše průvodce.',
    },
  },
}
