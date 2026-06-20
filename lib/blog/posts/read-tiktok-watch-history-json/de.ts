import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "So liest du deine TikTok-Wiedergabeverlauf-JSON-Datei",
  description:
    "Erfahre, was die TikTok-Wiedergabeverlauf-JSON-Datei ist, wo sie in deinem Datenexport zu finden ist und wie du ihre Struktur liest, um Videos und Sitzungen zu zählen.",
  intro:
    "Deine TikTok-Wiedergabeverlaufsdatei ist ein einfacher JSON-Textdatensatz aller Videos, die du abgespielt hast – gespeichert im Datenexport, den TikTok dir zum Herunterladen bereitstellt. Sobald du die Struktur kennst, kannst du sie lesen, Videos zählen und sogar Wiedergabesitzungen selbst schätzen.",
  blocks: [
    {
      type: "p",
      text: "Wenn du deine Daten bei TikTok anforderst und das JSON-Format wählst, wird der Export als ZIP-Archiv mit mehreren Dateien geliefert. Eine der interessantesten ist die Wiedergabeverlaufsdatei, die die Videos auflistet, die du im Laufe der Zeit angesehen hast. Diese Anleitung erklärt, wo die Datei liegt, wie ihr JSON aufgebaut ist und wie du sie sinnvoll interpretierst.",
    },
    {
      type: "h2",
      text: "Was die Wiedergabeverlaufsdatei ist",
    },
    {
      type: "p",
      text: "Die Wiedergabeverlaufsdatei ist ein Protokoll der Videos, die in deinem \"Für dich\"- und \"Abonniert\"-Feed abgespielt wurden. Jeder Eintrag steht für ein einzelnes Video, das TikTok als angesehen erfasst hat, zusammen mit dem Zeitpunkt der Wiedergabe und einem Link zurück zum Originalvideo.",
    },
    {
      type: "p",
      text: "Es ist kein Analyse-Dashboard. Es sind Rohdaten: eine lange Liste von Zeitstempeln und URLs. Das macht sie für die persönliche Analyse sehr nützlich, aber auf den ersten Blick schwer lesbar – vor allem wenn dein Verlauf Monate oder Jahre umfasst.",
    },
    {
      type: "h2",
      text: "Wo sie im Export zu finden ist",
    },
    {
      type: "p",
      text: "Nachdem du den TikTok-Export entpackt hast, sind die Wiedergabeverlaufsdaten in einem aktivitätsbezogenen Ordner gruppiert. In einem JSON-Export findest du sie in der Regel so verschachtelt:",
    },
    {
      type: "ul",
      items: [
        "Activity → Video Browsing History (manchmal als Watch History bezeichnet),",
        "gespeichert in einer einzigen .json-Datei zusammen mit anderen Aktivitätsdateien wie Like List und Search History.",
      ],
    },
    {
      type: "p",
      text: "Die genauen Ordnernamen können je nach Exportversion leicht variieren. Wenn du dir nicht sicher bist, wie das Archiv aufgebaut ist, erklärt unser Leitfaden [[/blog/tiktok-data-export-folders-explained:TikTok-Datenexportordner erklärt]] jeden Bereich. Den vollständigen Prozess zum Anfordern und Herunterladen findest du unter [[/blog/how-to-download-analyze-tiktok-data:TikTok-Daten herunterladen und analysieren]].",
    },
    {
      type: "h2",
      text: "Die JSON-Struktur: VideoList-Einträge",
    },
    {
      type: "p",
      text: "Innerhalb der Datei sind die Wiedergabedatensätze unter einem Schlüssel namens VideoList gespeichert. Es handelt sich um ein Array von Objekten, wobei jedes Objekt ein angesehenes Video beschreibt. Ein einzelner Eintrag sieht ungefähr so aus:",
    },
    {
      type: "ul",
      items: [
        'Date — wann das Video angesehen wurde, z. B. "2026-02-14 18:32:07",',
        'Link — die URL des Videos, z. B. "https://www.tiktokv.com/share/video/7300000000000000000/".',
      ],
    },
    {
      type: "p",
      text: 'Die Gesamtstruktur ist also ein Objekt der obersten Ebene, das das Array enthält – man kann es sich vorstellen als { "Video Browsing History": { "VideoList": [ ... ] } }. Jedes Element von VideoList ist ein Abspiel-Ereignis mit einem Date- und einem Link-Feld. Es gibt keine Aufrufzahlen, keine Engagement-Zahlen und keine Beschriftungen – nur wann und was.',
    },
    {
      type: "h2",
      text: "Videos manuell zählen",
    },
    {
      type: "p",
      text: "Die einfachste Kennzahl ist die Gesamtanzahl der angesehenen Videos, die der Länge des VideoList-Arrays entspricht. Du kannst sie auf verschiedene Arten ermitteln:",
    },
    {
      type: "ul",
      items: [
        "Öffne die Datei in einem Code-Editor und schau dir die Array-Länge an, oder",
        "lade sie in einer Browser-Konsole mit data['Video Browsing History'].VideoList.length, oder",
        "verwende ein Befehlszeilenwerkzeug, um das Vorkommen des Date-Schlüssels zu zählen.",
      ],
    },
    {
      type: "p",
      text: "Eindeutige Videos zu zählen ist etwas schwieriger, weil derselbe Link mehr als einmal erscheinen kann, wenn du ein Video erneut angesehen hast. Um Eindeutige zu zählen, musst du nach dem Link-Feld deduplizieren, anstatt einfach nur Zeilen zu zählen.",
    },
    {
      type: "h2",
      text: "Sitzungen schätzen oder ein Tool verwenden",
    },
    {
      type: "p",
      text: "Eine \"Sitzung\" ist eine ununterbrochene Wiedergabesequenz. Der Export kennzeichnet keine Sitzungen, daher musst du sie aus den Date-Zeitstempeln ableiten. Ein verbreiteter Ansatz ist, Einträge nach Datum zu sortieren und Videos, die zeitlich nah beieinanderliegen, zu gruppieren:",
    },
    {
      type: "ul",
      items: [
        "Sortiere alle Einträge nach ihrem Date-Wert,",
        "gehe die Liste durch und beginne eine neue Sitzung, wenn der Abstand zwischen zwei aufeinanderfolgenden Videos einen Schwellenwert überschreitet (zum Beispiel 30 Minuten),",
        "zähle, wie viele Sitzungen sich ergeben.",
      ],
    },
    {
      type: "p",
      text: "Dies manuell über Tausende von Einträgen hinweg zu tun ist mühsam und fehleranfällig. Ein Tool wie [[home:TikTok Wrapped]] führt diese Gruppierung automatisch durch und verwandelt sie in lesbare Zusammenfassungen. Du kannst [[example:ein Beispiel-Wrapped ansehen]], um zu sehen, wie das Ergebnis aussieht, oder [[analyze:deinen eigenen Export analysieren]].",
    },
    {
      type: "h2",
      text: "Häufige Stolpersteine",
    },
    {
      type: "h3",
      text: "Datumsformate und Zeitzonen",
    },
    {
      type: "p",
      text: "Das Date-Feld ist eine Zeichenkette und kein echtes Datum, und es wird häufig in UTC statt in deiner lokalen Zeit erfasst. Wenn du es ohne Berücksichtigung der Zeitzone analysierst, können deine Sitzungsgrenzen und Ergebnisse zur \"aktivsten Stunde\" um mehrere Stunden verschoben sein.",
    },
    {
      type: "h3",
      text: "Unvollständiger Verlauf",
    },
    {
      type: "p",
      text: "Der Export enthält möglicherweise nicht deinen gesamten Wiedergabeverlauf. TikTok begrenzt, wie weit manche Aktivitäten zurückreichen. Eine leere oder kurze VideoList bedeutet daher nicht immer, dass du wenig geschaut hast – es kann auch bedeuten, dass das Exportfenster begrenzt war.",
    },
    {
      type: "h3",
      text: "Große Dateien",
    },
    {
      type: "p",
      text: "Vielnutzer können Wiedergabeverlaufsdateien haben, die Dutzende von Megabyte groß sind. Manche Texteditoren haben Schwierigkeiten, so große Dateien zu öffnen. Wenn sich eine Datei nicht öffnen lässt oder deinen Editor einfriert, deutet das darauf hin, dass die Daten umfangreich sind – nicht dass die Datei beschädigt ist.",
    },
    {
      type: "h3",
      text: "Unterschiede bei Schlüsselnamen",
    },
    {
      type: "p",
      text: "Da TikTok gelegentlich Schlüssel zwischen Exportversionen umbenennt, kann der Wrapper-Schlüssel um VideoList abweichen. Wenn data['Video Browsing History'] undefined ist, überprüfe zuerst die Schlüssel der obersten Ebene, um die korrekte Bezeichnung zu finden.",
    },
    {
      type: "h2",
      text: "Fazit",
    },
    {
      type: "p",
      text: "Die Wiedergabeverlaufs-JSON-Datei ist einer der aufschlussreichsten Teile deines TikTok-Exports. Sobald du verstehst, dass es sich nur um ein VideoList-Array aus Date- und Link-Paaren handelt, wird das Zählen von Videos und das Schätzen von Sitzungen geradlinig – auch wenn die Stolpersteine bei Zeitzonen, unvollständigem Verlauf und Dateigröße leicht zu übersehen sind.",
    },
    {
      type: "p",
      text: "Wenn du das manuelle Parsen lieber vermeiden möchtest, kann ein Analysetool dieselbe Datei lesen und dir die Ergebnisse in Sekunden präsentieren.",
    },
  ],
  faq: [
    {
      q: "Wo befindet sich die Wiedergabeverlaufsdatei im TikTok-Export?",
      a: "Sie befindet sich in der Regel in einem Activity-Ordner, häufig als Video Browsing History oder Watch History bezeichnet, und ist als einzelne JSON-Datei gespeichert.",
    },
    {
      q: "Welche Felder enthält jeder Wiedergabeverlaufseintrag?",
      a: "Jeder Eintrag im VideoList-Array enthält ein Date-Feld mit dem Zeitpunkt der Videoansicht und ein Link-Feld mit der Video-URL.",
    },
    {
      q: "Wie zähle ich, wie viele Videos ich angesehen habe?",
      a: "Die Gesamtzahl entspricht der Anzahl der Einträge im VideoList-Array. Du kannst die Array-Länge in einem Code-Editor oder einer Browser-Konsole überprüfen.",
    },
    {
      q: "Warum weichen die Zeitstempel um ein paar Stunden ab?",
      a: "Das Date-Feld wird häufig in UTC erfasst, sodass es von deiner lokalen Zeit abweichen kann, wenn du es nicht in deine eigene Zeitzone umrechnest.",
    },
    {
      q: "Warum ist meine Wiedergabeverlaufsdatei so groß?",
      a: "Häufiges Ansehen erzeugt viele Einträge, sodass die Datei auf Dutzende von Megabyte anwachsen kann. Eine große Dateigröße ist normal und bedeutet nicht, dass die Datei beschädigt ist.",
    },
  ],
}
