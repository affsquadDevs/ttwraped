import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'Quali dati raccoglie TikTok su di te? Spiegato in modo chiaro',
  description:
    "Scopri quali dati raccoglie TikTok sugli utenti, comprese le informazioni su attività, account e dispositivo, e cosa compare nell'esportazione dei tuoi dati TikTok.",
  intro:
    "Le piattaforme di social media si basano sui dati per funzionare, personalizzare l'esperienza e garantire la sicurezza degli account. Per gli utenti di TikTok, capire quali dati vengono raccolti e come sono categorizzati è un aspetto cruciale della trasparenza digitale, soprattutto quando si richiede un'esportazione dei propri dati personali.",
  blocks: [
    {
      type: 'p',
      text: "Questo articolo spiega i principali tipi di dati che TikTok raccoglie, come tali dati vengono generati durante il normale utilizzo dell'app, cosa compare di solito in un'esportazione dei dati di TikTok e cosa dovrebbero considerare gli utenti quando esaminano le proprie informazioni.",
    },
    { type: 'h2', text: 'Come TikTok raccoglie i dati degli utenti' },
    {
      type: 'p',
      text: "TikTok raccoglie i dati tramite l'interazione diretta dell'utente con l'app, la configurazione dell'account e i processi tecnici necessari per fornire i contenuti e mantenere la stabilità della piattaforma.",
    },
    { type: 'p', text: 'La raccolta dei dati avviene quando gli utenti:' },
    {
      type: 'ul',
      items: [
        'creano o gestiscono un account',
        'guardano, mettono "mi piace", commentano o condividono contenuti',
        'cercano video o creator',
        "interagiscono con le funzionalità all'interno dell'app",
      ],
    },
    {
      type: 'p',
      text: "Questi dati vengono registrati automaticamente come parte del normale funzionamento della piattaforma e sono descritti nella documentazione sulla privacy disponibile pubblicamente di TikTok.",
    },
    { type: 'h2', text: 'Categorie di dati raccolti da TikTok' },
    {
      type: 'p',
      text: "La raccolta dei dati di TikTok può essere suddivisa, a grandi linee, in diverse categorie.",
    },
    { type: 'h3', text: "Informazioni sull'account e sul profilo" },
    {
      type: 'p',
      text: "I dati a livello di account vengono utilizzati per identificare e gestire i profili degli utenti. Possono includere:",
    },
    {
      type: 'ul',
      items: [
        'nome utente e nome visualizzato',
        "data di creazione dell'account",
        'impostazioni e preferenze del profilo',
        'informazioni su regione, lingua o paese',
      ],
    },
    {
      type: 'p',
      text: "Queste informazioni consentono a TikTok di associare l'attività all'account corretto e di applicare impostazioni regionali o basate sulla lingua.",
    },
    { type: 'h3', text: 'Dati di attività e di utilizzo' },
    {
      type: 'p',
      text: "I dati di attività rappresentano il modo in cui gli utenti interagiscono con la piattaforma nel tempo. Possono includere:",
    },
    {
      type: 'ul',
      items: [
        "marche temporali dell'utilizzo dell'app",
        'video guardati o con cui si è interagito',
        '"mi piace", commenti e condivisioni',
        'azioni di segui e non seguire più',
      ],
    },
    {
      type: 'p',
      text: "Questa categoria costituisce spesso la parte più consistente dei dati relativi all'utente e riflette comportamenti osservabili, anziché intenzioni o significati personali.",
    },
    { type: 'h3', text: 'Informazioni su ricerca e scoperta' },
    {
      type: 'p',
      text: 'TikTok può raccogliere dati relativi alla scoperta dei contenuti, come:',
    },
    {
      type: 'ul',
      items: [
        "query di ricerca inserite nell'app",
        'interazioni con i contenuti consigliati',
        'coinvolgimento con argomenti o categorie di tendenza',
      ],
    },
    {
      type: 'p',
      text: "Queste informazioni aiutano la piattaforma a organizzare e mostrare i contenuti, anziché interpretare preferenze personali al di là delle azioni registrate.",
    },
    { type: 'h3', text: 'Dati del dispositivo e tecnici' },
    {
      type: 'p',
      text: "Per garantire il corretto funzionamento dell'app, TikTok può raccogliere informazioni tecniche, tra cui:",
    },
    {
      type: 'ul',
      items: [
        'tipo di dispositivo e sistema operativo',
        "versione dell'app e dati sulle prestazioni",
        'indicatori di connettività di rete',
      ],
    },
    {
      type: 'p',
      text: 'Questi dati supportano la sicurezza, la risoluzione dei problemi e la compatibilità tra i dispositivi.',
    },
    { type: 'h2', text: 'Cosa TikTok non raccoglie' },
    {
      type: 'p',
      text: 'Esistono idee sbagliate comuni sulla raccolta dei dati.',
    },
    { type: 'p', text: 'TikTok non:' },
    {
      type: 'ul',
      items: [
        "memorizza le password degli utenti in forma leggibile all'interno delle esportazioni",
        'registra pensieri, emozioni o intenzioni private',
        "raccoglie credenziali finanziarie tramite l'utilizzo standard",
        'fornisce accesso illimitato al contenuto dei messaggi privati in tutti i casi',
      ],
    },
    {
      type: 'p',
      text: 'I dati raccolti sono strutturati, registrati e limitati a sistemi definiti, anziché frutto di osservazione informale.',
    },
    { type: 'h2', text: "Cosa compare in un'esportazione dei dati di TikTok" },
    {
      type: 'p',
      text: "Quando gli utenti richiedono un'esportazione dei dati, TikTok fornisce un file scaricabile, di solito in formato ZIP, contenente i registri strutturati della loro attività.",
    },
    { type: 'p', text: "Un'esportazione dei dati può includere:" },
    {
      type: 'ul',
      items: [
        'cronologie delle interazioni',
        'registri di attività con marche temporali',
        'record relativi alle ricerche',
        "metadati dell'account",
      ],
    },
    {
      type: 'p',
      text: 'Non tutti i dati raccolti vengono sempre inclusi. Le esportazioni possono variare a seconda di:',
    },
    {
      type: 'ul',
      items: [
        'normative regionali',
        'limiti di conservazione dei dati',
        "anzianità dell'account e livello di attività",
      ],
    },
    {
      type: 'p',
      text: "L'esportazione riflette l'attività registrata sulla piattaforma, non tratti dedotti o analisi soggettive.",
    },
    { type: 'h2', text: 'Perché è importante capire la raccolta dei dati' },
    { type: 'p', text: 'Sapere quali dati vengono raccolti aiuta gli utenti a:' },
    {
      type: 'ul',
      items: [
        'comprendere meglio la propria attività digitale',
        'valutare la trasparenza della piattaforma',
        'prendere decisioni informate sugli strumenti di analisi dei dati',
        'mantenere il controllo sulle informazioni personali',
      ],
    },
    {
      type: 'p',
      text: 'La consapevolezza favorisce un utilizzo responsabile e un consenso informato quando si lavora con i dati personali.',
    },
    { type: 'h2', text: 'Raccolta dei dati vs interpretazione dei dati' },
    { type: 'p', text: 'È importante distinguere tra:' },
    {
      type: 'ul',
      items: [
        'raccolta dei dati - registrazione di azioni osservabili',
        'interpretazione dei dati - sintesi o analisi di tali registri',
      ],
    },
    {
      type: 'p',
      text: "La presenza di dati non implica automaticamente delle conclusioni. Il significato e l'interpretazione dipendono dal contesto e dai metodi utilizzati per analizzare le informazioni.",
    },
    { type: 'h2', text: 'Considerazioni finali' },
    {
      type: 'p',
      text: "TikTok raccoglie dati relativi alla gestione dell'account, all'attività, alla scoperta e alle prestazioni tecniche al fine di far funzionare la propria piattaforma. Questi dati vengono registrati in modo sistematico e resi disponibili agli utenti tramite strumenti di esportazione ufficiali per garantire la trasparenza.",
    },
    {
      type: 'p',
      text: "Comprendendo quali dati vengono raccolti - e quali no - gli utenti possono affrontare i propri dati TikTok con chiarezza, fiducia e consapevolezza informata.",
    },
  ],
  faq: [
    {
      q: 'Quali dati personali raccoglie TikTok?',
      a: "TikTok raccoglie informazioni sull'account, dati di attività, interazioni di ricerca e dati tecnici relativi al dispositivo necessari per far funzionare la piattaforma.",
    },
    {
      q: 'TikTok raccoglie i messaggi privati?',
      a: 'Alcuni metadati relativi ai messaggi possono essere raccolti, ma il contenuto completo dei messaggi privati non è sempre incluso nelle esportazioni dei dati e non include le password.',
    },
    {
      q: 'Posso vedere quali dati TikTok ha su di me?',
      a: "Sì. TikTok consente agli utenti di richiedere un'esportazione dei dati personali tramite le impostazioni di privacy e dati.",
    },
    {
      q: "Tutti i dati raccolti sono inclusi nell'esportazione?",
      a: "Non sempre. Le esportazioni dei dati possono essere limitate dai periodi di conservazione, dalle normative regionali e dall'attività dell'account.",
    },
    {
      q: 'Perché TikTok raccoglie i dati degli utenti?',
      a: 'La raccolta dei dati supporta la funzionalità della piattaforma, la personalizzazione, la sicurezza e le prestazioni complessive.',
    },
  ],
}
