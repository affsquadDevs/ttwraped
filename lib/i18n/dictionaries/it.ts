import type { Dictionary } from './en'

export const dictionary: Dictionary = {
  nav: {
    home: 'Home',
    analyze: 'Analizza',
    example: 'Esempio',
    about: 'Chi siamo',
    blog: 'Blog',
    contact: 'Contatti',
  },

  langSwitcher: {
    label: 'Lingua',
  },

  cta: {
    analyzeData: 'Analizza i tuoi dati TikTok →',
    viewExample: 'Guarda un esempio di TikTok Wrapped →',
    backToHome: '← Torna alla Home',
  },

  disclaimer: {
    underH1:
      'Strumento indipendente e non ufficiale — non affiliato, sostenuto o collegato a TikTok o ByteDance Ltd.',
  },

  consent: {
    ariaLabel: 'Consenso ai cookie',
    text:
      'Teniamo alla tua privacy. Utilizziamo i cookie per le statistiche (Google Tag Manager) e per mostrare annunci tramite Google AdSense, anche per la personalizzazione degli annunci. Con il tuo consenso, Google e i suoi partner possono utilizzare i cookie per personalizzare gli annunci in base alle tue visite a questo e ad altri siti. Puoi accettare, rifiutare o modificare la tua scelta in qualsiasi momento. Consulta la nostra [[privacy:Informativa sulla privacy]].',
    accept: 'Accetta tutto',
    reject: 'Rifiuta i non essenziali',
  },

  footer: {
    description:
      'Uno strumento indipendente e non ufficiale per comprendere l\'esportazione dei tuoi dati TikTok — abitudini di visione, una divertente classifica della personalità e la tua storia completa su TikTok.',
    productTitle: 'Prodotto',
    legalTitle: 'Note legali',
    resourcesTitle: 'Risorse',
    links: {
      home: 'Home',
      analyze: 'Analizza',
      example: 'Esempio',
      exampleWrapped: 'Esempio di Wrapped',
      about: 'Chi siamo',
      privacy: 'Informativa sulla privacy',
      terms: 'Termini di servizio',
      contact: 'Contatti',
      blog: 'Blog',
    },
    copyright: '© {year} TikTok Wrapped. Tutti i diritti riservati.',
    disclaimer:
      'TikTok Wrapped è uno strumento indipendente per analizzare l\'esportazione dei tuoi dati TikTok. Non è affiliato, sostenuto o collegato a TikTok o ByteDance Ltd. "TikTok" è un marchio del rispettivo proprietario.',
    privacy: 'Privacy',
    terms: 'Termini',
    cookieSettings: 'Impostazioni dei cookie',
  },

  home: {
    logoSubtitle: 'Analizza l\'esportazione dei tuoi dati TikTok',
    heroTagline: 'Il tuo anno su TikTok, svelato 🎬',
    heroPlatformTagline:
      'Una piattaforma indipendente per comprendere i dati personali della tua attività su TikTok.',
    features: ['Scopri la tua classifica della personalità', 'Visualizza statistiche di visione dettagliate'],
    heroDescription:
      'TikTok Wrapped è uno strumento online indipendente che ti aiuta a comprendere la tua attività personale su TikTok utilizzando l\'esportazione ufficiale dei tuoi dati TikTok. Quando richiedi i tuoi dati a TikTok, vengono forniti come file ZIP o JSON contenente informazioni grezze sull\'attività. TikTok Wrapped analizza questo file e lo converte in riepiloghi chiari e approfondimenti visivi, come schemi di utilizzo, cronologie delle attività e statistiche generali di coinvolgimento. Il servizio funziona solo con i dati che scegli di caricare ed è destinato a scopi informativi e di analisi personale.',
    learnMoreTitle: 'Scopri di più sui dati di TikTok',
    learnMoreText:
      'TikTok consente agli utenti di scaricare un\'esportazione dettagliata dei dati della propria attività personale, ma queste informazioni vengono spesso fornite in un formato tecnico difficile da interpretare. TikTok Wrapped aiuta gli utenti a capire come funzionano i loro dati, cosa contengono e come possono essere analizzati in modo responsabile. Attraverso guide didattiche e spiegazioni, ci concentriamo su trasparenza, privacy e chiarezza, aiutando gli utenti a dare un senso ai propri dati senza supposizioni o accesso alla piattaforma.',
    learnMoreLinks: [
      { slug: 'tiktok-wrapped-explained-what-it-is-how-it-works', label: 'TikTok Wrapped spiegato: cos\'è e come funziona' },
      { slug: 'how-to-download-analyze-tiktok-data', label: 'Come scaricare e analizzare i dati di TikTok' },
      { slug: 'what-your-tiktok-usage-says-about-your-digital-habits', label: 'Cosa rivela il tuo utilizzo di TikTok sulle tue abitudini digitali' },
      { slug: 'how-to-analyze-tiktok-data-safely-privacy-first-guide', label: 'Come analizzare i dati di TikTok in modo sicuro' },
    ],
    revealTitle: 'Cosa possono rivelare i dati di TikTok',
    revealItems: [
      'Frequenza di utilizzo e tendenze dell\'attività nel tempo',
      'Schemi di coinvolgimento in base all\'ora del giorno',
      'Comportamento generale di interazione (mi piace, commenti, condivisioni)',
      'Cambiamenti a lungo termine nelle abitudini di utilizzo dell\'app',
    ],
    revealDisclaimer:
      'Tutti gli approfondimenti si basano sulle esportazioni dei dati di proprietà dell\'utente e sono destinati esclusivamente a scopi informativi e di comprensione personale.',
    howItWorksTitle: 'Come funziona TikTok Wrapped',
    howItWorksText:
      'TikTok Wrapped funziona analizzando le esportazioni ufficiali dei dati TikTok che gli utenti scelgono di scaricare autonomamente. La piattaforma si concentra sul riepilogo e sull\'organizzazione di queste informazioni in approfondimenti leggibili, senza accedere agli account degli utenti o raccogliere dati aggiuntivi. Istruzioni dettagliate e strumenti di analisi sono disponibili in una [[analyze:pagina dedicata]] per gli utenti che desiderano esplorare ulteriormente i propri dati.',
    analyzeButton: 'Analizza i tuoi dati TikTok →',
    demoTitle: '🎬 Guardalo in azione',
    demoDescription:
      'Vuoi vedere cosa produce TikTok Wrapped prima di iniziare? Sfoglia un esempio completo e realistico creato a partire da dati di esempio — nessun caricamento richiesto.',
    demoButton: 'Guarda un esempio di TikTok Wrapped →',
    moreStatsTitle: '✨ E molto altro ti aspetta...',
    statTags: [
      '🔍 Ricerche principali',
      '📅 Attività per anno',
      '⏰ Ore di punta',
      '❤️ Mi piace e commenti',
      '📤 Cronologia delle condivisioni',
      '🔴 Dirette',
    ],
    demoCta: 'Pronto a scoprire le tue statistiche? [[analyze:Analizza subito i tuoi dati! →]]',
  },

  analyze: {
    subtitle: 'Analizza i tuoi dati TikTok',
    howToTitle: '📱 Come ottenere i tuoi dati TikTok',
    importantLabel: 'Importante:',
    importantText:
      'TikTok fornisce i tuoi dati solo su richiesta. Dopo aver inviato una richiesta, potrebbero volerci da poche ore fino a 3 giorni perché i tuoi dati siano pronti. Assicurati di selezionare il formato "JSON" al momento della richiesta!',
    steps: [
      { title: 'Apri Impostazioni', text: 'Vai al tuo Profilo → tocca il menu ☰ → seleziona Impostazioni', alt: 'Passo 1: Apri Impostazioni' },
      { title: 'Vai su Account', text: 'In Impostazioni e privacy, trova e tocca Account', alt: 'Passo 2: Vai su Account' },
      { title: 'Scarica i tuoi dati', text: 'Scorri verso il basso e tocca "Scarica i tuoi dati"', alt: 'Passo 3: Scarica i tuoi dati' },
      { title: 'Richiedi i dati (JSON)', text: 'Cambia il formato in "JSON", seleziona "Tutti i dati", quindi tocca "Richiedi dati"', alt: 'Passo 4: Richiedi i dati' },
    ],
    footerSteps: [
      'Riceverai una notifica quando i tuoi dati saranno pronti',
      'Scarica il file ZIP dalla scheda "Scarica dati"',
      'Caricalo qui e goditi le tue statistiche!',
    ],
    dropPrompt: 'Trascina qui il tuo file ZIP o JSON',
    dropHint: 'TikTok → Impostazioni → Privacy → Scarica dati',
    analyzeBtn: '🔍 Analizza',
    analyzingBtn: '⏳ Analisi in corso...',
    privacyNote:
      'Il tuo file viene elaborato solo per generare i tuoi risultati. Non vendiamo, condividiamo né utilizziamo i dati caricati a fini pubblicitari.',
    howToLink: 'Non hai i tuoi dati? Scopri come scaricarli ↓',
    selectFileError: 'Seleziona un file',
    fileTypeError: 'Seleziona un file ZIP o JSON',
    genericError: 'Si è verificato un errore durante l\'elaborazione del file',
    jsonNotFound: 'File JSON non trovato nell\'archivio',
    progress: {
      reading: 'Lettura del file...',
      extracting: 'Estrazione dell\'archivio ZIP...',
      readingFile: 'Lettura di {name}...',
      parsing: 'Analisi del JSON...',
      analyzing: 'Analisi dei dati...',
      processing: 'Elaborazione dei dati...',
    },
    results: {
      yourStats: '🎰 Le tue statistiche',
      videosWatched: 'Video guardati',
      hoursOnTikTok: 'Ore su TikTok',
      daysOfWatching: 'Giorni di visione',
      yourRank: 'La tua classifica su TikTok',
      followers: 'Follower',
      following: 'Seguiti',
      interests: 'Interessi',
      whenActive: '⏰ Quando sei più attivo',
      peakHour: 'Ora di punta',
      mostActiveDay: 'Giorno più attivo',
      firstWatch: 'Prima visione',
      lastWatch: 'Ultima visione',
      engagement: '❤️ Coinvolgimento',
      videosLiked: 'Video con mi piace',
      favorites: 'Preferiti',
      comments: 'Commenti',
      shares: 'Condivisioni',
      activityByYear: '📅 Attività per anno',
      year: 'Anno',
      videos: 'video',
      mostActiveMonth: 'Mese più attivo',
      avgPerDayPrefix: 'Media di',
      avgPerDaySuffix: 'video al giorno',
      collections: '📂 Le tue raccolte',
      favoritesTitle: '⭐ Preferiti',
      favoriteSounds: 'Suoni preferiti',
      favoriteEffects: 'Effetti preferiti',
      favoriteHashtags: 'Hashtag preferiti',
      topSearches: '🔍 Ricerche principali',
      totalSearches: 'Ricerche totali',
      shareDestinations: '📤 Destinazioni delle condivisioni',
      yourComments: '💭 I tuoi commenti',
      totalComments: 'Commenti totali',
      avgChars: 'in media {n} caratteri',
      messages: '💬 Messaggi',
      chats: 'Chat',
      messagesLabel: 'Messaggi',
      sent: 'Inviati',
      received: 'Ricevuti',
      topChats: 'Chat principali:',
      recentFollowers: '👥 Follower recenti',
      devicesNetworks: '📱 Dispositivi e reti',
      totalLogins: 'Accessi totali',
      devices: 'Dispositivi',
      networks: 'Reti',
      tiktokLive: '🔴 TikTok Live',
      livesWatched: 'Dirette guardate',
      liveComments: 'Commenti in diretta',
      blocked: '🚫 Bloccati',
      messagesCountSuffix: 'messaggi',
    },
  },

  example: {
    title: 'Esempio di TikTok Wrapped',
    subtitle: 'Un esempio completo e realistico — nessun caricamento richiesto',
    introText:
      'Questa pagina mostra esattamente ciò che ottieni da [[home:TikTok Wrapped]] dopo aver analizzato un\'esportazione di dati TikTok — senza caricare nulla. Ogni numero qui sotto appartiene a un account di esempio fittizio ed è solo a scopo illustrativo. Quando [[analyze:analizzi la tua esportazione]], la stessa analisi viene generata in modo privato nel tuo browser a partire dal tuo file reale. TikTok Wrapped è uno strumento indipendente e non ufficiale, non affiliato né sostenuto da TikTok o ByteDance Ltd.',
    rankExplanation:
      'La tua classifica si basa sul tempo di visione stimato. Le 408 ore di questo account di esempio lo collocano nel livello "Personaggio principale" — esistono 16 livelli in totale, da "Energia da NPC" fino a "Speedrun WR senza vita".',
    ctaTitle: '🎬 Pronto a vedere il tuo?',
    ctaDescription:
      'Il tuo vero TikTok Wrapped viene generato interamente nel tuo browser a partire dalla tua esportazione di dati — il tuo file non lascia mai il tuo dispositivo.',
    ctaButton: 'Analizza i tuoi dati TikTok →',
    ctaLearn: 'Nuovo alle esportazioni di dati? [[blog:Scopri come scaricare i tuoi dati TikTok ↗]]',
    sample: {
      displayName: 'Utente di esempio',
      interests: ['Comicità', 'Cucina', 'Viaggi', 'Fitness', 'Musica'],
      activeDay: 'Domenica',
      activeMonth: 'Novembre 2024',
      firstWatch: '4 mar 2022',
      lastWatch: '14 dic 2025',
      searches: [
        'ricette per cena facili',
        'allenamento per la maratona',
        'trucchi per viaggiare',
        'cabaret',
        'allenamento a casa',
        'viaggi economici in europa',
        'tutorial di chitarra',
        'idee per il meal prep',
        'consigli di produttività',
        'cibo di strada',
      ],
      shareMethods: ['Messaggio diretto', 'Copia link', 'WhatsApp', 'Instagram'],
      networks: ['Wi-Fi', 'Rete mobile'],
    },
  },

  about: {
    title: 'Chi siamo',
    paragraphs: [
      'TikTok Wrapped è un servizio online indipendente progettato per aiutare gli utenti a comprendere meglio i dati personali della propria attività su TikTok.',
      'TikTok consente agli utenti di scaricare un\'esportazione ufficiale dei dati contenente informazioni sulla loro attività sulla piattaforma. Sebbene questi dati appartengano all\'utente, vengono spesso forniti in un formato grezzo e non strutturato, difficile da interpretare. TikTok Wrapped fornisce strumenti che organizzano questi dati e li presentano in modo chiaro, leggibile e intuitivo.',
      'Il sito web consente agli utenti di caricare la propria esportazione di dati TikTok e ricevere approfondimenti automatizzati basati esclusivamente su quel file. Il servizio si concentra sul riepilogo, sulla visualizzazione e sull\'analisi generale degli schemi di utilizzo per aiutare gli utenti a comprendere meglio il proprio comportamento digitale.',
      'TikTok Wrapped non crea account, non richiede la registrazione e non offre funzionalità di social network o di hosting di contenuti. Il sito web esiste esclusivamente come strumento informativo che elabora i file forniti dall\'utente su sua richiesta.',
      'Il nostro obiettivo è offrire un\'esperienza semplice, trasparente e attenta alla privacy. Il sito web è gratuito ed è supportato dalla pubblicità; consulta la nostra [[privacy:Informativa sulla privacy]] per sapere come funzionano i cookie e gli annunci.',
      'TikTok Wrapped è gestito da AffSquad ed è raggiungibile all\'indirizzo [[email:hello@ttwrapper.com]]. È uno strumento indipendente e non ufficiale, non affiliato, sostenuto o collegato a TikTok o ByteDance Ltd.',
    ],
    faqTitle: 'Domande frequenti',
    faq: [
      { q: 'Cos\'è TikTok Wrapped?', a: 'TikTok Wrapped è uno strumento online che aiuta gli utenti ad analizzare e comprendere meglio la propria attività personale su TikTok utilizzando l\'esportazione ufficiale dei loro dati TikTok.' },
      { q: 'Come ottengo l\'esportazione dei miei dati TikTok?', a: 'Puoi richiedere e scaricare l\'esportazione dei tuoi dati dalle impostazioni di TikTok (Dati / Privacy). Una volta ricevuto il file ZIP da TikTok, puoi caricarlo su TikTok Wrapped.' },
      { q: 'Conservate il file ZIP che carico?', a: 'I file vengono elaborati solo per generare gli approfondimenti che hai richiesto. Non conserviamo né vendiamo i dati caricati e non li utilizziamo per la personalizzazione degli annunci.' },
      { q: 'TikTok Wrapped è affiliato a TikTok?', a: 'No. TikTok Wrapped è un servizio indipendente e non è affiliato né sostenuto da TikTok o ByteDance.' },
      { q: 'TikTok Wrapped è gratuito?', a: 'Le funzionalità principali del sito web sono disponibili senza pagamento. Il sito può mostrare annunci pubblicitari per sostenere i costi continui di sviluppo e hosting.' },
    ],
  },

  contact: {
    title: 'Contattaci',
    intro:
      'Se hai domande su TikTok Wrapped, sul nostro sito web o sul funzionamento del servizio, puoi contattarci utilizzando le informazioni di contatto qui sotto.',
    welcomeTitle: 'Siamo lieti di ricevere richieste relative a:',
    welcomeItems: [
      'domande generali sulla piattaforma,',
      'privacy e gestione dei dati,',
      'problemi tecnici o feedback,',
      'questioni legali o relative alle policy.',
    ],
    howToTitle: 'Come contattarci',
    emailLabel: 'Email:',
    responseNote: 'Cerchiamo di rispondere a tutte le richieste legittime entro 2-3 giorni lavorativi.',
    aboutTitle: 'Informazioni sulla comunicazione',
    aboutText1:
      'TikTok Wrapped è un servizio online indipendente gestito da AffSquad, dedicato all\'analisi delle esportazioni di dati TikTok fornite dagli utenti. Non è affiliato, sostenuto o collegato a TikTok o ByteDance Ltd. Non offriamo assistenza clienti tramite i social media e al momento non forniamo supporto telefonico.',
    aboutText2:
      'Ti preghiamo di non inviare informazioni personali sensibili via email, a meno che non sia necessario per gestire la tua richiesta.',
  },

  privacy: {
    title: 'Informativa sulla privacy',
    lastUpdatedLabel: 'Ultimo aggiornamento:',
    lastUpdatedDate: '20 giugno 2026',
    intro:
      'La presente Informativa sulla privacy spiega come TikTok Wrapped ("TikTok Wrapped", "noi", "ci") raccoglie, utilizza e protegge le informazioni quando visiti ttwrapper.com. TikTok Wrapped è uno strumento indipendente e non ufficiale, non affiliato, sostenuto o collegato a TikTok o ByteDance Ltd.',
    cookieTable: {
      providerHeader: 'Fornitore',
      purposeHeader: 'Finalità',
      typeHeader: 'Tipo',
      rows: [
        { provider: 'TikTok Wrapped', purpose: 'Memorizza la tua scelta sul consenso ai cookie', type: 'Essenziale' },
        { provider: 'Google Tag Manager / Analytics', purpose: 'Statistiche di utilizzo aggregate e anonime', type: 'Statistiche (consenso richiesto)' },
        { provider: 'Google AdSense / DoubleClick', purpose: 'Pubblicazione e misurazione degli annunci, inclusi gli annunci personalizzati', type: 'Pubblicità (consenso richiesto)' },
      ],
    },
    sections: [
      { title: '1. Chi siamo (Titolare del trattamento)', paragraphs: ['TikTok Wrapped è gestito da AffSquad, il titolare del trattamento responsabile di questo sito web. Se hai domande sulla presente informativa o su come vengono trattati i tuoi dati, puoi contattarci all\'indirizzo [[email:hello@ttwrapper.com]] o tramite la nostra pagina [[contact:Contatti]].'] },
      { title: '2. I tuoi dati TikTok caricati', paragraphs: ['Quando utilizzi lo strumento di analisi, l\'esportazione dei tuoi dati TikTok (ZIP o JSON) viene letta ed elaborata interamente all\'interno del tuo browser. Il file non viene caricato né archiviato sui nostri server e non creiamo profili o database a partire da esso. L\'analisi esiste solo nella scheda del tuo browser e scompare quando chiudi o aggiorni la pagina.', 'Non richiediamo la creazione di un account, l\'accesso o l\'identificazione personale per utilizzare lo strumento di analisi.'] },
      { title: '3. Informazioni raccolte automaticamente', paragraphs: ['Come la maggior parte dei siti web, quando visiti ttwrapper.com alcune informazioni tecniche possono essere raccolte tramite cookie e tecnologie simili da parte nostra e di fornitori terzi (come Google), tra cui:'], list: ['tipo di dispositivo e browser, dimensioni dello schermo e sistema operativo;', 'indirizzo IP (utilizzato per stimare la posizione generale e per motivi di sicurezza);', 'pagine visitate, URL di provenienza ed eventi di interazione;', 'identificatori dei cookie utilizzati per le statistiche e la pubblicità.'], afterList: ['Queste informazioni vengono trattate solo quando hai fornito il consenso o quando abbiamo un legittimo interesse, come descritto di seguito.'] },
      { title: '4. Cookie e tecnologie simili', paragraphs: ['Utilizziamo cookie e tecnologie simili per le funzionalità essenziali, le statistiche e la pubblicità. I cookie non essenziali (statistiche e pubblicità) vengono impostati solo dopo che hai fornito il consenso tramite il nostro banner dei cookie. Le categorie principali sono:'], hasCookieTable: true, afterList: ['Puoi modificare o revocare il tuo consenso in qualsiasi momento utilizzando il link "Impostazioni dei cookie" nel piè di pagina del sito web.'] },
      { title: '5. Pubblicità (Google AdSense)', paragraphs: ['Utilizziamo Google AdSense per mostrare la pubblicità. Si applicano le seguenti informazioni:'], list: ['I fornitori terzi, tra cui Google, utilizzano i cookie per pubblicare annunci in base alle tue visite precedenti a questo sito web e ad altri siti web.', 'L\'uso da parte di Google dei cookie pubblicitari (incluso il cookie DoubleClick) consente a Google e ai suoi partner di pubblicare annunci in base alle tue visite a questo e/o ad altri siti su Internet.', 'Puoi disattivare la pubblicità personalizzata visitando [[adsSettings:le Impostazioni degli annunci di Google]].', 'Puoi disattivare l\'uso dei cookie per la pubblicità personalizzata da parte di alcuni fornitori terzi su [[aboutAds:aboutads.info/choices]] o [[yourChoices:youronlinechoices.eu]].', 'Scopri come Google utilizza le informazioni dei siti che usano i suoi servizi su [[partnerSites:policies.google.com/technologies/partner-sites]].'], afterList: ['Se non acconsenti alla pubblicità personalizzata, Google potrebbe comunque pubblicare annunci non personalizzati basati sul contesto generale anziché sulla tua cronologia di navigazione.'] },
      { title: '6. Statistiche', paragraphs: ['Utilizziamo Google Tag Manager e i servizi di analisi di Google per comprendere, in forma aggregata, come i visitatori utilizzano il sito (ad esempio, quali pagine sono popolari). Questi servizi possono impostare cookie ed elaborare dati tecnici come il tuo indirizzo IP. Vengono caricati solo dopo che hai acconsentito ai cookie statistici.'] },
      { title: '7. Gestione del consenso', paragraphs: ['Utilizziamo Google Consent Mode v2. Per impostazione predefinita, l\'archiviazione per la pubblicità e le statistiche è impostata su "negato" e i relativi tag non vengono caricati finché non effettui una scelta nel nostro banner dei cookie. Puoi riaprire il banner e modificare la tua decisione in qualsiasi momento tramite il link "Impostazioni dei cookie" nel piè di pagina. Ai visitatori dello Spazio economico europeo, del Regno Unito e della Svizzera viene richiesto il consenso prima dell\'utilizzo di qualsiasi cookie non essenziale.'] },
      { title: '8. Come utilizziamo le informazioni', paragraphs: [], list: ['per gestire, mantenere e proteggere il sito web;', 'per generare approfondimenti dai dati che scegli di analizzare (nel tuo browser);', 'per comprendere l\'utilizzo aggregato e migliorare il servizio;', 'per mostrare pubblicità che contribuisce a finanziare il servizio gratuito.'], afterList: ['Non vendiamo le tue informazioni personali e non utilizziamo l\'esportazione dei tuoi dati TikTok per la pubblicità o la profilazione.'] },
      { title: '9. Condivisione dei dati', paragraphs: ['Non condividiamo con nessuno i tuoi dati TikTok caricati. I dati tecnici e relativi ai cookie descritti sopra possono essere trattati dai nostri fornitori di servizi, tra cui Google (pubblicità e statistiche) e il nostro fornitore di hosting (Vercel), ciascuno dei quali agisce in base alla propria informativa sulla privacy.'] },
      { title: '10. Conservazione dei dati', paragraphs: ['L\'esportazione dei tuoi dati TikTok non viene mai archiviata da noi, quindi non c\'è nulla da conservare o eliminare dalla nostra parte. I dati aggregati relativi a statistiche e pubblicità detenuti dai nostri fornitori vengono conservati in base ai loro periodi di conservazione (ad esempio, le impostazioni di conservazione standard di Google).'] },
      { title: '11. I tuoi diritti sulla privacy (GDPR/UK GDPR)', paragraphs: ['Se ti trovi nello Spazio economico europeo o nel Regno Unito, hai il diritto di accedere, rettificare, cancellare, limitare o opporti al trattamento dei tuoi dati personali, nonché il diritto alla portabilità dei dati e di revocare il consenso in qualsiasi momento. Per esercitare questi diritti, contattaci all\'indirizzo [[email:hello@ttwrapper.com]]. Hai inoltre il diritto di presentare un reclamo alla tua autorità locale per la protezione dei dati.'] },
      { title: '12. Diritti sulla privacy della California (CCPA/CPRA)', paragraphs: ['I residenti in California hanno il diritto di sapere quali informazioni personali vengono raccolte, di richiederne la cancellazione e di rinunciare alla "vendita" o alla "condivisione" delle informazioni personali. Non vendiamo informazioni personali. Per esercitare i tuoi diritti, contattaci all\'indirizzo [[email:hello@ttwrapper.com]].'] },
      { title: '13. Trasferimenti internazionali dei dati', paragraphs: ['I nostri fornitori possono trattare i dati su server situati al di fuori del tuo Paese, inclusi gli Stati Uniti. Ove richiesto, tali trasferimenti sono protetti da garanzie adeguate, come le clausole contrattuali standard dei fornitori.'] },
      { title: '14. Privacy dei minori', paragraphs: ['TikTok Wrapped non è destinato ai minori di 13 anni e non raccogliamo consapevolmente informazioni personali da loro. I requisiti di età minima di TikTok si applicano all\'ottenimento di un\'esportazione dei dati.'] },
      { title: '15. Modifiche alla presente informativa', paragraphs: ['Potremmo aggiornare di tanto in tanto la presente Informativa sulla privacy. Le modifiche sostanziali saranno indicate aggiornando la data di "Ultimo aggiornamento" in cima a questa pagina.'] },
      { title: '16. Contatti', paragraphs: ['Domande sulla presente Informativa sulla privacy? Scrivi a [[email:hello@ttwrapper.com]] o utilizza la nostra pagina [[contact:Contatti]].'] },
    ],
  },

  terms: {
    title: 'Termini di servizio',
    lastUpdatedLabel: 'Ultimo aggiornamento:',
    lastUpdatedDate: '20 giugno 2026',
    intro:
      'Accedendo o utilizzando TikTok Wrapped (ttwrapper.com), accetti i presenti Termini di servizio. Se non li accetti, ti preghiamo di non utilizzare il sito web.',
    sections: [
      { title: 'Descrizione del servizio', paragraphs: ['TikTok Wrapped fornisce uno strumento automatizzato, basato su browser, per analizzare l\'esportazione dei dati TikTok dell\'utente. Il servizio è indipendente e non è affiliato, sostenuto o collegato a TikTok o ByteDance Ltd. Viene fornito "così com\'è" e solo per uso informativo e personale.'] },
      { title: 'Responsabilità dell\'utente', paragraphs: ['Gli utenti sono responsabili di:'], list: ['caricare solo dati di cui sono proprietari o che hanno il diritto di utilizzare,', 'assicurarsi che i file caricati provengano dalla funzione ufficiale di esportazione dei dati di TikTok.'] },
      { title: 'Uso accettabile', paragraphs: ['Accetti di non:'], list: ['utilizzare il servizio per scopi illeciti o in violazione di qualsiasi legge applicabile;', 'tentare di interrompere, sovraccaricare, decodificare o ottenere un accesso non autorizzato al servizio;', 'caricare file contenenti malware o dati che non sei autorizzato a utilizzare.'] },
      { title: 'Nessuna garanzia', paragraphs: ['Pur impegnandoci per l\'accuratezza, TikTok Wrapped non garantisce che tutti gli approfondimenti siano completi, privi di errori o adatti a decisioni specifiche. I risultati non devono essere considerati consulenza professionale, legale o finanziaria.'] },
      { title: 'Proprietà intellettuale', paragraphs: ['Il design del sito web, il branding originale, i testi e la logica software di TikTok Wrapped appartengono al suo gestore, salvo diversa indicazione. "TikTok" e i marchi correlati sono marchi dei rispettivi proprietari e qui sono utilizzati solo a scopo descrittivo; non rivendichiamo alcun diritto su di essi. Gli utenti mantengono la piena proprietà dei dati caricati.'] },
      { title: 'Limitazione di responsabilità', paragraphs: ['TikTok Wrapped non è responsabile per:'], list: ['decisioni prese sulla base degli approfondimenti generati,', 'perdita di dati causata da errore dell\'utente,', 'interruzioni o indisponibilità temporanea del servizio.'] },
      { title: 'Legge applicabile', paragraphs: ['I presenti Termini sono regolati e interpretati in conformità alle leggi generali e a tutela dei consumatori applicabili, senza riguardo ai principi sui conflitti di legge. Eventuali controversie saranno gestite dai tribunali competenti della sede legale del gestore.'] },
      { title: 'Modifiche ai presenti Termini', paragraphs: ['Potremmo aggiornare di tanto in tanto i presenti Termini. Le modifiche entrano in vigore al momento della pubblicazione e la data di "Ultimo aggiornamento" qui sopra rifletterà la versione più recente. L\'uso continuato del sito web dopo le modifiche costituisce accettazione dei Termini aggiornati.'] },
      { title: 'Contatti', paragraphs: ['Domande sui presenti Termini? Scrivi a [[email:hello@ttwrapper.com]] o utilizza la nostra pagina [[contact:Contatti]].'] },
    ],
  },

  notFound: {
    title: '404 — Pagina non trovata',
    text: 'Spiacenti, non siamo riusciti a trovare questa pagina. Potrebbe essere stata spostata o non esistere più. Ecco alcuni punti da cui riprendere:',
    links: { home: 'Home', analyze: 'Analizza i tuoi dati', example: 'Guarda un esempio', blog: 'Blog' },
  },

  blog: {
    backToBlog: '← Torna al Blog',
    indexTitle: 'Blog',
    indexIntro:
      'Questo blog esiste per aiutare gli utenti a comprendere meglio i dati di TikTok, la privacy e gli schemi di utilizzo personale attraverso contenuti chiari, indipendenti ed educativi. TikTok consente agli utenti di scaricare i dati della propria attività, ma spesso vengono forniti in formati grezzi e tecnici, difficili da interpretare. I nostri articoli spiegano cosa contengono questi dati, come sono strutturati e come analizzarli in modo responsabile utilizzando le tue esportazioni di dati. Trattiamo argomenti come il download dei dati di TikTok, le strutture dei file di dati, le considerazioni sulla privacy, l\'analisi del comportamento di utilizzo e le differenze tra le statistiche della piattaforma e gli strumenti indipendenti di analisi dei dati.',
    faqHeading: 'Domande frequenti',
  },

  meta: {
    home: {
      title: 'TikTok Wrapped (non ufficiale) — Analizza i tuoi dati e le tue statistiche TikTok',
      description:
        'TikTok Wrapped è uno strumento indipendente e non ufficiale che analizza l\'esportazione ufficiale dei tuoi dati TikTok per rivelare il tuo tempo di visione, le ricerche principali, i contenuti preferiti e una divertente classifica della personalità. Privato, gratuito e non affiliato a TikTok o ByteDance Ltd.',
    },
    analyze: {
      title: 'Analizza l\'esportazione dei tuoi dati TikTok — Carica e ottieni le tue statistiche',
      description:
        'Carica l\'esportazione ufficiale dei tuoi dati TikTok (ZIP o JSON) e visualizza immediatamente il tuo tempo di visione, le ricerche principali, i creator preferiti, le ore di punta e una classifica della personalità. Elaborato in modo privato nel tuo browser — nulla viene caricato su un server.',
    },
    example: {
      title: 'Esempio di TikTok Wrapped — Guarda un esempio completo (nessun caricamento richiesto)',
      description:
        'Guarda esattamente cosa produce TikTok Wrapped da un\'esportazione di dati TikTok: un esempio completo con tempo di visione, classifica della personalità, ricerche principali, ore di punta, coinvolgimento e statistiche sui dispositivi. Dati di esempio — nessun caricamento richiesto.',
    },
    about: {
      title: 'Chi siamo - TikTok Wrapped',
      description:
        'Scopri TikTok Wrapped — un servizio indipendente che ti aiuta a comprendere i dati della tua attività su TikTok. Attento alla privacy, gratuito e non affiliato a TikTok.',
    },
    contact: {
      title: 'Contattaci - TikTok Wrapped',
      description:
        'Contatta TikTok Wrapped per domande sul servizio, sulla privacy, su problemi tecnici o questioni legali. Email: hello@ttwrapper.com',
    },
    privacy: {
      title: 'Informativa sulla privacy - TikTok Wrapped',
      description:
        'Come TikTok Wrapped gestisce i tuoi dati: elaborazione lato client della tua esportazione TikTok, cookie, pubblicità e statistiche con Google AdSense, i tuoi diritti GDPR/CCPA, conservazione dei dati e opzioni di rinuncia.',
    },
    terms: {
      title: 'Termini di servizio - TikTok Wrapped',
      description:
        'Termini di servizio di TikTok Wrapped — descrizione del servizio, responsabilità dell\'utente, uso accettabile, proprietà intellettuale, esclusioni di responsabilità, legge applicabile e modifiche ai presenti termini.',
    },
    blog: {
      title: 'Blog - TikTok Wrapped',
      description:
        'Leggi guide e articoli sull\'analisi dei dati TikTok, sulla privacy e su come comprendere la tua attività sui social media.',
    },
    notFound: {
      title: 'Pagina non trovata (404) - TikTok Wrapped',
      description:
        'Impossibile trovare la pagina che stai cercando. Esplora TikTok Wrapped — analizza l\'esportazione dei tuoi dati TikTok, guarda un esempio o leggi le nostre guide.',
    },
  },
}
