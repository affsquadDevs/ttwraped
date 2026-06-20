import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Cosa contiene ogni cartella nell'esportazione dati TikTok (Guida 2026)",
  description:
    "Una panoramica completa di ogni cartella e sezione JSON nell'esportazione dati TikTok, cosa contiene ciascuna e quali parti legge TikTok Wrapped.",
  intro:
    "L'esportazione dati TikTok è organizzata in un insieme di cartelle e sezioni JSON — Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings e TikTok Live — e ciascuna conserva una diversa parte della cronologia del tuo account.",
  blocks: [
    {
      type: 'p',
      text: "Quando richiedi i tuoi dati a TikTok e apri il download, il contenuto può sembrare travolgente. Che tu riceva un unico file JSON di grandi dimensioni o una cartella strutturata di file, le informazioni sono raggruppate in sezioni prevedibili. Una volta capito come quelle sezioni corrispondono alla tua attività reale, l'esportazione diventa facile da navigare.",
    },
    {
      type: 'p',
      text: "Questa guida illustra ogni cartella di primo livello e sezione JSON nell'esportazione, ne spiega il contenuto in modo chiaro e mostra quali parti legge effettivamente [[home:TikTok Wrapped]] per costruire il tuo riepilogo. Se non hai ancora scaricato i tuoi dati, consulta la nostra procedura dettagliata su [[/blog/how-to-download-analyze-tiktok-data:come scaricare e analizzare i tuoi dati TikTok]].",
    },
    { type: 'h2', text: 'Profile' },
    {
      type: 'p',
      text: "La sezione Profile contiene le informazioni di base del tuo account: nome utente, nome del profilo, biografia, l'email o il numero di telefono associati all'account e i dettagli di creazione dell'account. Descrive chi sei sulla piattaforma, non cosa hai fatto.",
    },
    {
      type: 'p',
      text: "Questa sezione è piccola ma utile per etichettare un report. Non contiene la tua password — TikTok non include mai le credenziali in un'esportazione.",
    },
    { type: 'h2', text: 'Activity (Your Activity)' },
    {
      type: 'p',
      text: "La sezione Activity — a volte denominata \"Your Activity\" — è il cuore dell'esportazione e solitamente la parte più grande. È suddivisa in diverse sottosezioni che registrano tutto ciò che hai fatto durante la navigazione:",
    },
    {
      type: 'ul',
      items: [
        'Watch History — un elenco con timestamp dei video che hai guardato.',
        'Like List — i video a cui hai messo Mi piace, con le date.',
        'Search History — i termini che hai cercato.',
        'Share History — i contenuti che hai condiviso e dove.',
        'Following / Follower List — gli account che segui e gli account che ti seguono.',
        'Favorite videos, sounds, e hashtag — gli elementi che hai salvato tra i preferiti.',
      ],
    },
    {
      type: 'p',
      text: "Poiché è dotata di timestamp, questa sezione è ciò che rende possibile l'analisi dei pattern a lungo termine. La maggior parte delle informazioni in un riepilogo TikTok Wrapped — i tuoi periodi più attivi, i creator preferiti e il volume di visione — proviene da qui.",
    },
    { type: 'h2', text: 'Comments' },
    {
      type: 'p',
      text: "La sezione Comments elenca i commenti che hai pubblicato su altri video, insieme ai relativi timestamp. Riflette come hai interagito pubblicamente con i contenuti nel tempo.",
    },
    { type: 'h2', text: 'Direct Messages' },
    {
      type: 'p',
      text: "La sezione Direct Messages contiene la cronologia delle tue chat private raggruppate per conversazione. Questa è la parte più personale dell'esportazione, motivo per cui merita particolare attenzione quando si condividono i file. TikTok Wrapped non ha bisogno di leggere i tuoi messaggi diretti e non lo fa.",
    },
    { type: 'h2', text: 'Video (Your Posts)' },
    {
      type: 'p',
      text: "La sezione Video — spesso denominata \"Posts\" — riguarda i contenuti che hai pubblicato tu stesso: i video caricati, le didascalie e i metadati correlati. Per i creator questa sezione documenta la cronologia delle pubblicazioni, mentre per i semplici spettatori potrebbe essere piccola o vuota.",
    },
    { type: 'h2', text: 'Ads and Data' },
    {
      type: 'p',
      text: "La sezione Ads and Data registra i segnali relativi alla pubblicità, inclusi i dati Off TikTok Activity — informazioni che altre app e siti web hanno condiviso con TikTok sulla tua attività al di fuori dell'app. Include anche gli interessi pubblicitari e i record delle interazioni con gli annunci utilizzati per il targeting.",
    },
    {
      type: 'p',
      text: "Se vuoi approfondire cosa rivelano questi segnali, il nostro articolo su [[/blog/what-data-does-tiktok-collect:quali dati raccoglie TikTok]] analizza le categorie in dettaglio.",
    },
    { type: 'h2', text: 'App Settings' },
    {
      type: 'p',
      text: "La sezione App Settings conserva le tue preferenze: impostazioni sulla privacy, scelte per le notifiche, lingua e configurazioni simili. Descrive come è configurato il tuo account piuttosto che come lo hai utilizzato, quindi raramente influisce sull'analisi.",
    },
    { type: 'h2', text: 'TikTok Live' },
    {
      type: 'p',
      text: "La sezione TikTok Live acquisisce l'attività relativa alle dirette streaming — le dirette che hai ospitato o a cui hai partecipato, e le interazioni correlate. Per la maggior parte degli spettatori questa sezione è piccola, ma per gli streamer attivi può essere un registro significativo.",
    },
    { type: 'h2', text: 'Riferimento cartella per cartella' },
    {
      type: 'p',
      text: "La tabella qui sotto mappa ogni cartella o sezione JSON con il suo contenuto e con ciò che TikTok Wrapped legge da essa. Puoi anche vedere il tipo di output che produce sulla nostra pagina [[example:esempio wrapped]].",
    },
    {
      type: 'table',
      headers: ['Cartella / Sezione', 'Cosa contiene', 'Cosa legge TikTok Wrapped'],
      rows: [
        ['Profile', 'Nome utente, bio, dettagli account', 'Nome visualizzato nel report'],
        ['Activity — Watch History', 'Video visualizzati con timestamp', 'Volume di visione e tendenze'],
        ['Activity — Like List', 'Video a cui hai messo Mi piace, con date', 'Abitudini di like nel tempo'],
        ['Activity — Search History', 'Termini di ricerca utilizzati', 'Ricerche principali e interessi'],
        ['Activity — Following / Follower', 'Account seguiti e follower', 'Creator preferiti'],
        ['Comments', 'Commenti che hai pubblicato', 'Conteggi di engagement (opzionale)'],
        ['Direct Messages', 'Cronologia chat private', 'Non letto'],
        ['Video / Posts', 'Video che hai pubblicato', 'Cronologia pubblicazioni (creator)'],
        ['Ads and Data', 'Off TikTok Activity, interessi pubblicitari', 'Non letto'],
        ['App Settings', 'Privacy e preferenze app', 'Non letto'],
        ['TikTok Live', "Attività delle dirette streaming", 'Non letto'],
      ],
    },
    { type: 'h2', text: 'Una nota sulla privacy' },
    {
      type: 'p',
      text: "La tua esportazione contiene sezioni sensibili — in particolare Direct Messages e Ads and Data — che non sono mai necessarie per generare un riepilogo dell'utilizzo. TikTok Wrapped si concentra sui dati Activity con timestamp e ignora completamente i messaggi privati e i record pubblicitari. Sei tu a controllare il file e puoi eliminare le cartelle sensibili prima di caricare qualsiasi cosa ovunque. Quando sei pronto, puoi [[analyze:analizzare il tuo wrapped]] con solo i file di attività.",
    },
    { type: 'h2', text: 'Considerazioni finali' },
    {
      type: 'p',
      text: "L'esportazione dati TikTok sembra complicata solo finché non conosci la mappa. Ogni cartella risponde a una singola domanda — chi sei, cosa hai guardato, cosa hai pubblicato, con chi hai parlato, o come è configurato il tuo account. Sapere quali sezioni contano ti permette di analizzare le parti che ti interessano lasciando intatte quelle private.",
    },
  ],
  faq: [
    {
      q: "Come è organizzata l'esportazione dati TikTok?",
      a: "L'esportazione è raggruppata in sezioni come Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings e TikTok Live, ciascuna conserva una parte diversa della cronologia del tuo account.",
    },
    {
      q: 'Quale cartella contiene la mia cronologia di visione?',
      a: "La cronologia di visione si trova nella sezione Activity, spesso denominata Your Activity, insieme alla tua Like List, Search History e liste Following.",
    },
    {
      q: "L'esportazione dati TikTok include la mia password?",
      a: "No. TikTok non include mai le password dell'account o le credenziali di accesso in un'esportazione dati. La sezione Profile contiene solo informazioni di base sull'account.",
    },
    {
      q: 'TikTok Wrapped legge i miei messaggi diretti?',
      a: "No. TikTok Wrapped si concentra sui dati Activity con timestamp e non legge i tuoi Direct Messages né le sezioni Ads and Data.",
    },
    {
      q: "Cosa sono i dati Off TikTok Activity?",
      a: "Off TikTok Activity si trova nella sezione Ads and Data e registra le informazioni che altre app e siti web hanno condiviso con TikTok sulla tua attività al di fuori dell'app.",
    },
  ],
}
