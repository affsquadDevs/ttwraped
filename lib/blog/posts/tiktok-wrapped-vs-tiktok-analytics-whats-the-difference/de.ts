import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'TikTok Wrapped vs. TikTok Analytics: Was ist der Unterschied?',
  description:
    'Vergleich von TikTok Wrapped und TikTok Analytics: wie jedes Tool funktioniert, welche Daten es nutzt und welche Erkenntnisse es liefert.',
  intro:
    'TikTok Analytics zeigt kurzfristige In-App-Leistungskennzahlen für Creator, während TikTok Wrapped langfristige Nutzungsmuster anhand von nutzereignenen TikTok-Datenexporten analysiert.',
  blocks: [
    {
      type: 'p',
      text: 'TikTok bietet integrierte Analysen für Creator, während Tools wie TikTok Wrapped sich auf die Analyse von nutzereignenen Datenexporten konzentrieren. Obwohl beide mit TikTok-Daten arbeiten, verfolgen sie völlig unterschiedliche Zwecke.',
    },
    {
      type: 'p',
      text: 'Dieser Artikel erklärt den Unterschied zwischen TikTok Wrapped und TikTok Analytics, wie jedes Tool funktioniert und wann welches nützlicher sein kann.',
    },
    { type: 'h2', text: 'Was ist TikTok Analytics?' },
    {
      type: 'p',
      text: 'TikTok stellt TikTok Analytics als native Funktion innerhalb der App bereit, die hauptsächlich für Creator konzipiert ist.',
    },
    { type: 'p', text: 'TikTok Analytics zeigt typischerweise:' },
    {
      type: 'ul',
      items: [
        'Videoaufrufe und Reichweite,',
        'Followerwachstum,',
        'Engagement-Kennzahlen (Likes, Kommentare, Shares),',
        'kurzfristige Performance-Trends.',
      ],
    },
    {
      type: 'p',
      text: 'Diese Daten werden aggregiert und auf bestimmte Zeiträume begrenzt, in der Regel die letzten 7–60 Tage.',
    },
    { type: 'h2', text: 'Was ist TikTok Wrapped?' },
    {
      type: 'p',
      text: "[[home:TikTok Wrapped]] ist ein unabhängiges Datenanalyse-Tool, das mit dem offiziellen TikTok-Datenexport eines Nutzers arbeitet.",
    },
    {
      type: 'p',
      text: 'Anstatt sich auf die Content-Performance zu konzentrieren, analysiert TikTok Wrapped:',
    },
    {
      type: 'ul',
      items: [
        'langfristige Nutzungshistorie,',
        'Aktivitätszeitlinien,',
        'Interaktionsverhalten über die Zeit,',
        'Muster auf Basis nutzereignener Datendateien.',
      ],
    },
    {
      type: 'p',
      text: 'TikTok Wrapped erfasst keine Daten direkt von TikTok. Es verarbeitet ausschließlich Dateien, die Nutzer freiwillig herunterladen und hochladen.',
    },
    { type: 'h2', text: 'Die wichtigsten Unterschiede auf einen Blick' },
    {
      type: 'table',
      headers: ['Merkmal', 'TikTok Analytics', 'TikTok Wrapped'],
      rows: [
        ['Datenquelle', 'In-App-Kennzahlen', 'Nutzerdatenexport'],
        ['Primäre Zielgruppe', 'Creator', 'Alle TikTok-Nutzer'],
        ['Zeitraum', 'Kurzfristig', 'Langfristig'],
        ['Fokus', 'Content-Performance', 'Nutzungsverhalten'],
        ['Dateneigentümerschaft', 'Plattformkontrolliert', 'Nutzergesteuert'],
        ['Konto erforderlich', 'Ja', 'Nein'],
      ],
    },
    { type: 'h2', text: 'Datenquelle: Plattformkennzahlen vs. Nutzerexporte' },
    {
      type: 'p',
      text: 'TikTok Analytics verwendet plattformkontrollierte Kennzahlen. Nutzer sehen von TikTok ausgewählte Zusammenfassungen mit begrenzter historischer Tiefe.',
    },
    {
      type: 'p',
      text: 'TikTok Wrapped verwendet nutzereignene Datenexporte, die:',
    },
    {
      type: 'ul',
      items: [
        'direkt von TikTok heruntergeladen werden,',
        'Rohdaten zur Aktivität enthalten,',
        'eine breitere historische Abdeckung bieten.',
      ],
    },
    {
      type: 'p',
      text: 'Dieser Unterschied wirkt sich sowohl auf den Umfang der Daten als auch auf die Transparenz aus.',
    },
    { type: 'h2', text: 'Unterschiede beim Anwendungsfall' },
    {
      type: 'step',
      title: 'Wann TikTok Analytics nützlich ist',
      items: [
        'Video-Performance verfolgen',
        'Followerwachstum überwachen',
        'Posting-Strategien optimieren',
        'Kurzfristige Content-Entscheidungen treffen',
      ],
    },
    {
      type: 'step',
      title: 'Wann TikTok Wrapped nützlich ist',
      items: [
        'Langfristige Nutzungsgewohnheiten verstehen',
        'Persönliche Aktivitätsmuster erkunden',
        'Historisches Engagement-Verhalten auswerten',
        'Persönliche Analyse und Reflexion',
      ],
    },
    {
      type: 'p',
      text: 'Die beiden Tools ergänzen sich, sie stehen nicht in Konkurrenz zueinander.',
    },
    { type: 'h2', text: 'Datenschutz und Kontrolle' },
    { type: 'p', text: 'TikTok Analytics:' },
    {
      type: 'ul',
      items: [
        'läuft vollständig innerhalb von TikTok,',
        'ermöglicht keinen Datenexport auf demselben Detailniveau,',
        'zeigt nur ausgewählte Kennzahlen.',
      ],
    },
    { type: 'p', text: 'TikTok Wrapped:' },
    {
      type: 'ul',
      items: [
        'arbeitet ausschließlich mit Daten, die der Nutzer selbst hochlädt,',
        'erfordert keinen Zugriff auf das TikTok-Konto,',
        'ermöglicht es Nutzern, die volle Datenkontrolle zu behalten.',
      ],
    },
    {
      type: 'p',
      text: 'Der Datenschutz hängt davon ab, wie verantwortungsbewusst jedes Tool genutzt wird.',
    },
    { type: 'h2', text: 'Ist TikTok Wrapped ein Ersatz für TikTok Analytics?' },
    { type: 'p', text: 'Nein.' },
    {
      type: 'p',
      text: 'TikTok Wrapped ersetzt TikTok Analytics nicht. Es dient einem anderen analytischen Zweck.',
    },
    {
      type: 'p',
      text: 'TikTok Analytics hilft Creatorn, ihren Content zu optimieren. TikTok Wrapped hilft Nutzern, ihr Verhalten und ihre Nutzung im Laufe der Zeit zu verstehen.',
    },
    { type: 'h2', text: 'Fazit' },
    {
      type: 'p',
      text: 'TikTok Analytics und TikTok Wrapped analysieren TikTok-Daten aus unterschiedlichen Perspektiven. Das eine konzentriert sich auf die Content-Performance innerhalb der App, das andere auf nutzereignene Daten außerhalb der App.',
    },
    {
      type: 'p',
      text: "Den Unterschied zu verstehen hilft Nutzern, das richtige Tool für ihre Ziele zu wählen – sei es Content-Optimierung oder persönliche Erkenntnisse.",
    },
  ],
  faq: [
    {
      q: 'Ist TikTok Wrapped ein offizielles TikTok-Tool?',
      a: 'Nein. TikTok Wrapped ist ein unabhängiger Dienst und steht in keiner Verbindung zu TikTok oder ByteDance Ltd.',
    },
    {
      q: 'Verwendet TikTok Wrapped dieselben Daten wie TikTok Analytics?',
      a: 'Nein. TikTok Analytics verwendet In-App-Leistungskennzahlen, während TikTok Wrapped nutzereignene TikTok-Datenexporte analysiert.',
    },
    {
      q: 'Können Nicht-Creator TikTok Analytics nutzen?',
      a: 'TikTok Analytics ist in erster Linie für Creator-Konten konzipiert. TikTok Wrapped kann von allen TikTok-Nutzern verwendet werden.',
    },
    {
      q: 'Benötigt TikTok Wrapped Zugriff auf mein TikTok-Konto?',
      a: 'Nein. TikTok Wrapped erfordert weder eine Anmeldung bei TikTok noch die Erteilung von Kontoberechtigungen.',
    },
    {
      q: 'Welches Tool zeigt längerfristige TikTok-Daten?',
      a: 'TikTok Wrapped zeigt in der Regel längerfristige historische Daten, basierend auf dem Inhalt des TikTok-Datenexports.',
    },
  ],
}
