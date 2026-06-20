import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'TikTok vs Instagram vs YouTube: confronto tra i tuoi export di dati',
  description:
    "Confronta come TikTok, Instagram e YouTube ti permettono di scaricare i tuoi dati: come richiedere ogni export, tempi di consegna, formati disponibili e quale sia il più semplice da analizzare.",
  intro:
    "TikTok, Instagram e YouTube ti permettono tutti di scaricare una copia dei tuoi dati personali, ma il processo di richiesta, i tempi di consegna, i formati dei file e il livello di dettaglio variano molto tra le piattaforme.",
  blocks: [
    {
      type: 'p',
      text: "Se hai mai voluto riesaminare la tua attività — cosa hai guardato, cosa hai cercato e come hai utilizzato un'app nel corso degli anni — la maggior parte delle grandi piattaforme ti offre ormai un modo per richiedere questi dati. Questo è in parte dovuto alle normative sulla privacy come il GDPR e il CCPA, che riconoscono agli utenti il diritto di accedere alle informazioni che un servizio detiene su di loro.",
    },
    {
      type: 'p',
      text: "Questa guida confronta l'esperienza di export dei dati su tre delle piattaforme più grandi: TikTok, Instagram e YouTube. Vedremo come richiedere ogni export, quanto tempo richiede la consegna, quali formati si ricevono e cosa rivela realmente ciascun archivio sulla tua attività.",
    },
    { type: 'h2', text: 'Come richiedere ogni export' },
    {
      type: 'p',
      text: "Ogni piattaforma nasconde l'opzione di download nelle impostazioni sulla privacy o nell'account, ma il percorso è leggermente diverso.",
    },
    {
      type: 'ul',
      items: [
        "TikTok: Apri Impostazioni e privacy → Account → Scarica i tuoi dati, scegli un formato e richiedi il file.",
        "Instagram: Vai su Impostazioni → Centro account → Le tue informazioni e autorizzazioni → Scarica le tue informazioni.",
        "YouTube: Usa Google Takeout, seleziona YouTube e YouTube Music, e scegli cosa includere (cronologia, commenti, playlist).",
      ],
    },
    {
      type: 'p',
      text: "TikTok gestisce tutto all'interno della propria app, Instagram ti indirizza al Centro account condiviso di Meta, mentre YouTube affida il compito a Google Takeout, che copre tutti i prodotti Google in un unico posto.",
    },
    { type: 'h2', text: 'Tempi di consegna' },
    {
      type: 'p',
      text: "Nessuno di questi export è immediato, poiché le piattaforme devono raccogliere potenzialmente anni di attività in un archivio scaricabile.",
    },
    {
      type: 'p',
      text: "TikTok di solito è il più veloce — spesso nell'arco di qualche ora o al massimo un paio di giorni, e il file appare direttamente nell'app per il download. Instagram e YouTube possono richiedere da poche ore a diversi giorni, a seconda delle dimensioni dell'account e dell'intervallo di date richiesto. Gli archivi più grandi, soprattutto quelli che includono file multimediali, richiedono più tempo.",
    },
    { type: 'h2', text: 'Formati dei file' },
    {
      type: 'p',
      text: "Il formato che ricevi è molto importante se intendi analizzare i dati in seguito.",
    },
    {
      type: 'ul',
      items: [
        "TikTok ti permette di scegliere tra JSON (leggibile da macchina, ideale per l'analisi) e TXT/HTML (più facile da leggere manualmente).",
        "Instagram offre JSON o HTML, dove l'HTML si apre come pagine web e il JSON è più adatto agli strumenti di analisi.",
        "YouTube fornisce la cronologia in formato JSON o HTML e gli altri elementi in CSV, il tutto racchiuso in un archivio ZIP.",
      ],
    },
    {
      type: 'p',
      text: "Se il tuo obiettivo è analizzare la tua attività piuttosto che sfogliarla velocemente, scegli sempre JSON quando l'opzione è disponibile.",
    },
    { type: 'h2', text: 'Confronto affiancato' },
    {
      type: 'table',
      headers: ['Caratteristica', 'TikTok', 'Instagram', 'YouTube'],
      rows: [
        ["Metodo di richiesta", "Impostazioni nell'app", 'Centro account', 'Google Takeout'],
        ['Tempi di consegna', 'Ore fino a ~2 giorni', 'Ore fino a diversi giorni', 'Ore fino a diversi giorni'],
        ['Formato', 'JSON o TXT/HTML', 'JSON o HTML', 'JSON, HTML, CSV'],
        [
          'Dettaglio cronologia visualizzazioni',
          'Alto (timestamp per video)',
          'Limitato (nessun registro video del feed)',
          'Alto (timestamp per video)',
        ],
        ['Cronologia ricerche', 'Inclusa', 'Inclusa', 'Inclusa'],
      ],
    },
    { type: 'h2', text: 'Cosa rivela ogni export' },
    {
      type: 'h3',
      text: 'Granularità della cronologia visualizzazioni',
    },
    {
      type: 'p',
      text: "TikTok e YouTube registrano entrambi un registro dettagliato con timestamp dei video che hai guardato, il che rende possibile ricostruire le abitudini di visualizzazione nel tempo. L'export di Instagram è più limitato in questo senso — cattura le interazioni e alcuni dati di visualizzazione, ma non fornisce la stessa cronologia pulita per video del feed che offre TikTok.",
    },
    {
      type: 'h3',
      text: 'Cronologia ricerche',
    },
    {
      type: 'p',
      text: "Tutte e tre le piattaforme includono le tue query di ricerca, così puoi vedere quali argomenti, creator e suoni hai cercato. Questa è una delle sezioni più coerenti tra i vari export.",
    },
    {
      type: 'h3',
      text: 'Messaggi e interazioni',
    },
    {
      type: 'p',
      text: "TikTok e Instagram includono entrambi i messaggi diretti e i dati sulle interazioni come like, commenti e follow. YouTube si concentra maggiormente su commenti, iscrizioni e playlist, poiché non è principalmente una piattaforma di messaggistica.",
    },
    { type: 'h2', text: 'Quale è il più semplice da analizzare?' },
    {
      type: 'p',
      text: "Per puro valore analitico, TikTok e YouTube sono in testa, poiché entrambi forniscono cronologie di visualizzazione dettagliate con timestamp in formato JSON. Questo formato strutturato rende semplice per uno strumento contare i video, trovare le ore di punta e individuare schemi ricorrenti.",
    },
    {
      type: 'p',
      text: "L'export di Instagram è ben organizzato ma meno focalizzato sulla visione continua di video, quindi racconta una storia diversa — più sulle interazioni che sulla visione passiva.",
    },
    {
      type: 'p',
      text: "In pratica, i file di export grezzi sono difficili da leggere da soli. Ed è qui che uno strumento di sintesi torna utile. [[home:TikTok Wrapped]] prende un export di dati TikTok e lo trasforma in informazioni chiare e visive sulla tua attività. Puoi [[analyze:analizzare il tuo export]] o visualizzare prima un [[example:esempio di wrapped]] per vedere come appaiono i risultati.",
    },
    { type: 'h2', text: 'Considerazioni finali' },
    {
      type: 'p',
      text: "TikTok, Instagram e YouTube rispettano tutti il tuo diritto di scaricare i tuoi dati, ma differiscono nella facilità del processo e nell'utilità del risultato per l'analisi. TikTok e YouTube eccellono per la cronologia dettagliata delle visualizzazioni, mentre Instagram offre un quadro più ampio delle interazioni.",
    },
    {
      type: 'p',
      text: "Se vuoi approfondire, consulta le nostre guide su [[/blog/how-to-download-analyze-tiktok-data:come scaricare e analizzare i tuoi dati TikTok]] e sulla differenza tra [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:TikTok Wrapped e TikTok Analytics]].",
    },
  ],
  faq: [
    {
      q: 'Come faccio a richiedere i miei dati da TikTok, Instagram e YouTube?',
      a: "TikTok offre l'opzione all'interno di Impostazioni e privacy sotto Scarica i tuoi dati. Instagram utilizza il Centro account sotto Scarica le tue informazioni. YouTube utilizza Google Takeout, dove selezioni YouTube e YouTube Music.",
    },
    {
      q: 'Quanto tempo impiega ad arrivare ogni export di dati?',
      a: "TikTok è di solito il più veloce, spesso nell'arco di qualche ora fino a circa due giorni. Instagram e YouTube possono richiedere da poche ore a diversi giorni a seconda delle dimensioni dell'account e dell'intervallo di date richiesto.",
    },
    {
      q: "Quale formato devo scegliere per l'analisi?",
      a: "Scegli JSON ogni volta che è disponibile. JSON è leggibile da macchina e funziona meglio con gli strumenti di analisi, mentre HTML e TXT sono più facili da leggere manualmente ma più difficili da elaborare.",
    },
    {
      q: 'Quale piattaforma fornisce la cronologia di visualizzazione più dettagliata?',
      a: "TikTok e YouTube forniscono entrambi cronologie di visualizzazione dettagliate con timestamp. Instagram cattura le interazioni ma non offre la stessa cronologia per video del feed.",
    },
    {
      q: "Quale export è il più semplice da analizzare?",
      a: "TikTok e YouTube sono i più semplici da analizzare perché le loro cronologie di visualizzazione JSON strutturate rendono semplice contare i video e trovare schemi ricorrenti. Uno strumento come TikTok Wrapped può trasformare un export TikTok in informazioni visive chiare.",
    },
  ],
}
