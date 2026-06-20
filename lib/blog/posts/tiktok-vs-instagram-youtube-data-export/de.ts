import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'TikTok vs Instagram vs YouTube: Deine Datenexporte im Vergleich',
  description:
    'Vergleich: Wie ermöglichen TikTok, Instagram und YouTube den Download deiner Daten – Anfrageprozess, Lieferzeit, Formate und welche Plattform am einfachsten zu analysieren ist.',
  intro:
    'TikTok, Instagram und YouTube ermöglichen es dir alle, eine Kopie deiner persönlichen Daten herunterzuladen – doch Anfrageprozess, Lieferzeit, Dateiformate und Detailtiefe unterscheiden sich erheblich.',
  blocks: [
    {
      type: 'p',
      text: 'Wenn du jemals einen Blick auf deine eigene Aktivität werfen wolltest – was du angeschaut hast, wonach du gesucht hast und wie du eine App im Laufe der Jahre genutzt hast – bieten dir die meisten großen Plattformen inzwischen die Möglichkeit, diese Daten anzufordern. Das ist zum Teil auf Datenschutzgesetze wie die DSGVO und den CCPA zurückzuführen, die Nutzern das Recht einräumen, auf die Informationen zuzugreifen, die ein Dienst über sie speichert.',
    },
    {
      type: 'p',
      text: 'Dieser Leitfaden vergleicht die Datenexport-Erfahrung auf drei der größten Plattformen: TikTok, Instagram und YouTube. Wir schauen uns an, wie du den jeweiligen Export anforderst, wie lange die Lieferung dauert, welche Formate du erhältst und was das jeweilige Archiv tatsächlich über deine Aktivität verrät.',
    },
    { type: 'h2', text: 'So forderst du den Export auf jeder Plattform an' },
    {
      type: 'p',
      text: 'Jede Plattform versteckt die Download-Option in den Datenschutz- oder Kontoeinstellungen, aber der Weg dorthin ist jeweils etwas anders.',
    },
    {
      type: 'ul',
      items: [
        "TikTok: Öffne Einstellungen und Datenschutz → Konto → Deine Daten herunterladen, wähle ein Format und fordere die Datei an.",
        'Instagram: Gehe zu Einstellungen → Accounts Center → Deine Informationen und Berechtigungen → Deine Informationen herunterladen.',
        'YouTube: Nutze Google Takeout, wähle YouTube und YouTube Music aus und lege fest, was enthalten sein soll (Verlauf, Kommentare, Playlists).',
      ],
    },
    {
      type: 'p',
      text: "TikTok hält alles innerhalb der eigenen App, Instagram leitet dich über das gemeinsame Accounts Center von Meta, und YouTube übergibt die Aufgabe an Google Takeout, das alle Google-Produkte an einem Ort abdeckt.",
    },
    { type: 'h2', text: 'Lieferzeit' },
    {
      type: 'p',
      text: 'Keiner dieser Exporte ist sofort verfügbar, da die Plattformen potenziell jahrelange Aktivität in ein herunterladbares Archiv verpacken müssen.',
    },
    {
      type: 'p',
      text: 'TikTok liefert in der Regel am schnellsten – oft innerhalb weniger Stunden bis zu ein paar Tagen, und die Datei erscheint direkt in der App zum Herunterladen. Bei Instagram und YouTube kann es je nach Kontogröße und dem angeforderten Zeitraum von wenigen Stunden bis zu mehreren Tagen dauern. Größere Archive, insbesondere solche mit Mediendateien, brauchen länger zur Vorbereitung.',
    },
    { type: 'h2', text: 'Dateiformate' },
    {
      type: 'p',
      text: 'Das Format, das du erhältst, ist entscheidend, wenn du die Daten später analysieren möchtest.',
    },
    {
      type: 'ul',
      items: [
        'TikTok lässt dich zwischen JSON (maschinenlesbar, ideal für die Analyse) und TXT/HTML (einfacher von Hand zu lesen) wählen.',
        'Instagram bietet JSON oder HTML an, wobei HTML als Webseiten geöffnet wird und JSON besser für Tools geeignet ist.',
        'YouTube liefert den Verlauf als JSON oder HTML und andere Inhalte als CSV, alles in einem ZIP-Archiv gebündelt.',
      ],
    },
    {
      type: 'p',
      text: 'Wenn dein Ziel die Analyse deiner Aktivität ist und nicht nur ein kurzer Überblick, wähle immer JSON, wenn die Option verfügbar ist.',
    },
    { type: 'h2', text: 'Direkter Vergleich' },
    {
      type: 'table',
      headers: ['Merkmal', 'TikTok', 'Instagram', 'YouTube'],
      rows: [
        ['Anfragemethode', 'In-App-Einstellungen', 'Accounts Center', 'Google Takeout'],
        ['Lieferzeit', 'Stunden bis ~2 Tage', 'Stunden bis mehrere Tage', 'Stunden bis mehrere Tage'],
        ['Format', 'JSON oder TXT/HTML', 'JSON oder HTML', 'JSON, HTML, CSV'],
        [
          'Detailtiefe des Wiedergabeverlaufs',
          'Hoch (Zeitstempel pro Video)',
          'Eingeschränkt (kein Feed-Video-Protokoll)',
          'Hoch (Zeitstempel pro Video)',
        ],
        ['Suchverlauf', 'Enthalten', 'Enthalten', 'Enthalten'],
      ],
    },
    { type: 'h2', text: 'Was jeder Export verrät' },
    {
      type: 'h3',
      text: 'Detailtiefe des Wiedergabeverlaufs',
    },
    {
      type: 'p',
      text: "TikTok und YouTube zeichnen beide ein detailliertes, mit Zeitstempeln versehenes Protokoll der angesehenen Videos auf, was es ermöglicht, Sehgewohnheiten über die Zeit nachzuvollziehen. Instagrams Export ist hier schwächer – er erfasst Interaktionen und einige Aufrufdaten, bietet aber nicht denselben sauberen, videoweise aufgegliederten Feed-Verlauf wie TikTok.",
    },
    {
      type: 'h3',
      text: 'Suchverlauf',
    },
    {
      type: 'p',
      text: 'Alle drei Plattformen enthalten deine Suchanfragen, sodass du sehen kannst, nach welchen Themen, Creators und Sounds du gesucht hast. Das ist einer der konsistentesten Bereiche in allen Exporten.',
    },
    {
      type: 'h3',
      text: 'Nachrichten und Interaktionen',
    },
    {
      type: 'p',
      text: 'TikTok und Instagram enthalten beide Direktnachrichten und Engagement-Daten wie Likes, Kommentare und Follows. YouTube konzentriert sich stärker auf Kommentare, Abonnements und Playlists, da es keine primäre Messaging-Plattform ist.',
    },
    { type: 'h2', text: 'Welcher Export ist am einfachsten zu analysieren?' },
    {
      type: 'p',
      text: 'Für den reinen Analysewert führen TikTok und YouTube, da beide detaillierte, mit Zeitstempeln versehene Wiedergabeverläufe in JSON liefern. Dieses strukturierte Format macht es für ein Tool unkompliziert, Videos zu zählen, Spitzenzeiten zu finden und Muster aufzudecken.',
    },
    {
      type: 'p',
      text: "Instagrams Export ist zwar gut strukturiert, aber weniger auf kontinuierliches Videoschauen ausgerichtet – er erzählt daher eine andere Geschichte: mehr über Interaktionen als über passives Zuschauen.",
    },
    {
      type: 'p',
      text: 'In der Praxis sind rohe Exportdateien schwer alleine zu lesen. Hier hilft ein Auswertungs-Tool. [[home:TikTok Wrapped]] nimmt einen TikTok-Datenexport und verwandelt ihn in übersichtliche, visuelle Einblicke in deine Aktivität. Du kannst [[analyze:deinen eigenen Export analysieren]] oder zuerst ein [[example:Beispiel-Wrapped]] ansehen, um zu sehen, wie die Ergebnisse aussehen.',
    },
    { type: 'h2', text: 'Fazit' },
    {
      type: 'p',
      text: 'TikTok, Instagram und YouTube respektieren alle dein Recht, deine Daten herunterzuladen, unterscheiden sich aber darin, wie einfach dieser Prozess ist und wie nützlich das Ergebnis für die Analyse ist. TikTok und YouTube glänzen beim detaillierten Wiedergabeverlauf, während Instagram ein breites Bild der Interaktionen bietet.',
    },
    {
      type: 'p',
      text: 'Wenn du tiefer eintauchen möchtest, lies unsere Guides zu [[/blog/how-to-download-analyze-tiktok-data:So lädst du deine TikTok-Daten herunter und analysierst sie]] sowie zum Unterschied zwischen [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:TikTok Wrapped und TikTok Analytics]].',
    },
  ],
  faq: [
    {
      q: 'Wie fordere ich meine Daten bei TikTok, Instagram und YouTube an?',
      a: 'TikTok bietet die Option in Einstellungen und Datenschutz unter "Deine Daten herunterladen". Instagram nutzt das Accounts Center unter "Deine Informationen herunterladen". YouTube verwendet Google Takeout, wo du YouTube und YouTube Music auswählst.',
    },
    {
      q: 'Wie lange dauert es, bis der jeweilige Datenexport ankommt?',
      a: 'TikTok ist in der Regel am schnellsten, oft innerhalb weniger Stunden bis etwa zwei Tagen. Bei Instagram und YouTube kann es je nach Kontogröße und dem angeforderten Zeitraum von wenigen Stunden bis zu mehreren Tagen dauern.',
    },
    {
      q: 'Welches Format sollte ich für die Analyse wählen?',
      a: 'Wähle JSON, wann immer es angeboten wird. JSON ist maschinenlesbar und funktioniert am besten mit Analyse-Tools, während HTML und TXT zwar leichter von Hand zu lesen, aber schwieriger zu verarbeiten sind.',
    },
    {
      q: 'Welche Plattform liefert den detailliertesten Wiedergabeverlauf?',
      a: 'TikTok und YouTube bieten beide detaillierte, mit Zeitstempeln versehene Wiedergabeverläufe. Instagram erfasst Interaktionen, bietet aber nicht denselben videoweise aufgegliederten Feed-Verlauf.',
    },
    {
      q: 'Welcher Export ist am einfachsten zu analysieren?',
      a: 'TikTok und YouTube sind am einfachsten zu analysieren, da ihre strukturierten JSON-Wiedergabeverläufe es einfach machen, Videos zu zählen und Muster zu finden. Ein Tool wie TikTok Wrapped kann einen TikTok-Export in übersichtliche visuelle Einblicke verwandeln.',
    },
  ],
}
