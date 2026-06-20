import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Come Leggere il File JSON della Cronologia di Visualizzazione TikTok",
  description:
    "Scopri cos'è il file JSON della cronologia di visualizzazione TikTok, dove si trova nell'esportazione dati e come leggerne la struttura per contare video e sessioni.",
  intro:
    "Il file della cronologia di visualizzazione TikTok è un record JSON in testo normale di ogni video che hai riprodotto, archiviato all'interno dell'esportazione dati che TikTok ti consente di scaricare. Una volta compresa la sua struttura, puoi leggerlo, contare i video e persino stimare le sessioni di visualizzazione autonomamente.",
  blocks: [
    {
      type: "p",
      text: "Quando richiedi i tuoi dati a TikTok e scegli il formato JSON, l'esportazione arriva come archivio ZIP contenente diversi file. Uno dei più interessanti è il file della cronologia di visualizzazione, che elenca i video che hai guardato nel tempo. Questa guida illustra dove si trova il file, come è organizzato il suo JSON e come interpretarne il contenuto.",
    },
    {
      type: "h2",
      text: "Cos'è il File della Cronologia di Visualizzazione",
    },
    {
      type: "p",
      text: "Il file della cronologia di visualizzazione è un registro dei video riprodotti nei tuoi feed Per Te e Seguiti. Ogni voce rappresenta un singolo video che TikTok ha registrato come guardato, insieme all'ora in cui è stato riprodotto e un link al video originale.",
    },
    {
      type: "p",
      text: "Non è una dashboard di analisi. Sono dati grezzi: un lungo elenco di timestamp e URL. Questo lo rende potente per l'analisi personale, ma più difficile da leggere a colpo d'occhio, soprattutto se la tua cronologia copre mesi o anni.",
    },
    {
      type: "h2",
      text: "Dove Si Trova nell'Esportazione",
    },
    {
      type: "p",
      text: "Dopo aver decompresso l'esportazione TikTok, i dati della cronologia di visualizzazione sono raggruppati in una cartella relativa all'attività. In un'esportazione JSON la troverai tipicamente annidata in questo modo:",
    },
    {
      type: "ul",
      items: [
        "Activity → Video Browsing History (a volte denominata Watch History),",
        "archiviata in un singolo file .json insieme ad altri file di attività come Like List e Search History.",
      ],
    },
    {
      type: "p",
      text: "I nomi esatti delle cartelle possono variare leggermente tra le versioni di esportazione. Se non sei sicuro di come è strutturato l'archivio, la nostra guida su [[/blog/tiktok-data-export-folders-explained:cartelle dell'esportazione dati TikTok spiegate]] descrive nel dettaglio ogni sezione. Per il processo completo di richiesta e download, consulta [[/blog/how-to-download-analyze-tiktok-data:come scaricare e analizzare i dati TikTok]].",
    },
    {
      type: "h2",
      text: "La Struttura JSON: Le Voci di VideoList",
    },
    {
      type: "p",
      text: "All'interno del file, i record di visualizzazione sono archiviati sotto una chiave solitamente denominata VideoList. È un array di oggetti, dove ogni oggetto descrive un video guardato. Una singola voce appare all'incirca così:",
    },
    {
      type: "ul",
      items: [
        'Date — quando il video è stato guardato, ad es. "2026-02-14 18:32:07",',
        'Link — l\'URL del video, ad es. "https://www.tiktokv.com/share/video/7300000000000000000/".',
      ],
    },
    {
      type: "p",
      text: 'La forma complessiva è quindi un oggetto di primo livello contenente l\'array, che si può pensare come { "Video Browsing History": { "VideoList": [ ... ] } }. Ogni elemento di VideoList è un evento di riproduzione con un campo Date e un campo Link. Non ci sono conteggi di visualizzazioni, dati di coinvolgimento o didascalie — solo quando e cosa.',
    },
    {
      type: "h2",
      text: "Come Contare i Video Manualmente",
    },
    {
      type: "p",
      text: "La metrica più semplice è il numero totale di video guardati, che corrisponde alla lunghezza dell'array VideoList. Puoi trovarlo in diversi modi:",
    },
    {
      type: "ul",
      items: [
        "aprire il file in un editor di codice e guardare la lunghezza dell'array, oppure",
        "caricarlo nella console del browser con data['Video Browsing History'].VideoList.length, oppure",
        "usare uno strumento da riga di comando per contare le occorrenze della chiave Date.",
      ],
    },
    {
      type: "p",
      text: "Contare i video unici è un po' più difficile, perché lo stesso Link può apparire più di una volta se hai rivisto un video. Per contare i valori unici, dovresti deduplicare in base al campo Link anziché contare semplicemente le righe.",
    },
    {
      type: "h2",
      text: "Stimare le Sessioni vs Usare uno Strumento",
    },
    {
      type: "p",
      text: "Una \"sessione\" è un periodo di visione continuativa. L'esportazione non etichetta le sessioni, quindi devi dedurle dai timestamp Date. Un approccio comune consiste nell'ordinare le voci per data e raggruppare i video vicini nel tempo:",
    },
    {
      type: "ul",
      items: [
        "ordinare tutte le voci per il loro valore Date,",
        "scorrere l'elenco e iniziare una nuova sessione ogni volta che il gap tra due video consecutivi supera una soglia (ad esempio, 30 minuti),",
        "contare quante sessioni ne risultano.",
      ],
    },
    {
      type: "p",
      text: "Farlo manualmente su migliaia di voci è tedioso e soggetto a errori. Uno strumento come [[home:TikTok Wrapped]] esegue questo raggruppamento automaticamente e lo trasforma in riepiloghi leggibili. Puoi [[example:visualizzare un esempio wrapped]] per vedere come appare il risultato, oppure [[analyze:analizzare la tua esportazione]] direttamente.",
    },
    {
      type: "h2",
      text: "Errori Comuni",
    },
    {
      type: "h3",
      text: "Formati di Data e Fusi Orari",
    },
    {
      type: "p",
      text: "Il campo Date è una stringa, non un vero datetime, ed è spesso registrato in UTC anziché nell'ora locale. Se lo analizzi senza tenere conto del fuso orario, i confini delle sessioni e i risultati dell'\"ora più attiva\" possono spostarsi di diverse ore.",
    },
    {
      type: "h3",
      text: "Cronologia Parziale",
    },
    {
      type: "p",
      text: "L'esportazione potrebbe non includere l'intera storia delle tue visualizzazioni. TikTok limita la profondità temporale di alcune attività, quindi un VideoList vuoto o breve non significa necessariamente che hai guardato poco — potrebbe significare che la finestra di esportazione era limitata.",
    },
    {
      type: "h3",
      text: "File di Grandi Dimensioni",
    },
    {
      type: "p",
      text: "Gli utenti più attivi possono trovarsi con file della cronologia di visualizzazione di decine di megabyte. Alcuni editor di testo faticano ad aprire file così grandi. Se un file non si apre o blocca il tuo editor, è un segnale che i dati sono voluminosi, non corrotti.",
    },
    {
      type: "h3",
      text: "Differenze nei Nomi delle Chiavi",
    },
    {
      type: "p",
      text: "Poiché TikTok rinomina occasionalmente le chiavi tra le versioni di esportazione, la chiave wrapper attorno a VideoList potrebbe differire. Se data['Video Browsing History'] è undefined, ispeziona prima le chiavi di primo livello per trovare l'etichetta corretta.",
    },
    {
      type: "h2",
      text: "Considerazioni Finali",
    },
    {
      type: "p",
      text: "Il file JSON della cronologia di visualizzazione è una delle parti più rivelatrici dell'esportazione TikTok. Una volta compreso che si tratta semplicemente di un array VideoList di coppie Date e Link, contare i video e stimare le sessioni diventa semplice — anche se le insidie legate al fuso orario, alla cronologia parziale e alle dimensioni del file sono facili da incontrare.",
    },
    {
      type: "p",
      text: "Se preferisci evitare il parsing manuale, uno strumento di analisi può leggere lo stesso file e presentarti i risultati in pochi secondi.",
    },
  ],
  faq: [
    {
      q: "Dove si trova il file della cronologia di visualizzazione nell'esportazione TikTok?",
      a: "Si trova solitamente in una cartella Activity, spesso denominata Video Browsing History o Watch History, archiviata come singolo file JSON.",
    },
    {
      q: "Quali campi contiene ogni voce della cronologia di visualizzazione?",
      a: "Ogni voce nell'array VideoList contiene un campo Date con l'ora in cui il video è stato guardato e un campo Link con l'URL del video.",
    },
    {
      q: "Come faccio a contare quanti video ho guardato?",
      a: "Il totale corrisponde al numero di voci nell'array VideoList. Puoi verificare la lunghezza dell'array in un editor di codice o nella console del browser.",
    },
    {
      q: "Perché i timestamp sembrano sfasati di qualche ora?",
      a: "Il campo Date è spesso registrato in UTC, quindi può differire dall'ora locale se non lo converti nel tuo fuso orario.",
    },
    {
      q: "Perché il mio file della cronologia di visualizzazione è così grande?",
      a: "Le visualizzazioni frequenti producono molte voci, quindi il file può crescere fino a decine di megabyte. Le grandi dimensioni sono normali e non significano che il file sia danneggiato.",
    },
  ],
}
