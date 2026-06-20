import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'Welche Daten sammelt TikTok über dich? Klar erklärt',
  description:
    'Erfahre, welche Daten TikTok über Nutzer sammelt - darunter Aktivitäts-, Konto- und Geräteinformationen - und was in deinem TikTok-Datenexport erscheint.',
  intro:
    'Soziale Netzwerke sind auf Daten angewiesen, um zu funktionieren, Erlebnisse zu personalisieren und die Kontosicherheit zu gewährleisten. Für TikTok-Nutzer ist es ein entscheidender Aspekt digitaler Transparenz zu verstehen, welche Daten gesammelt und wie sie kategorisiert werden - besonders, wenn man einen persönlichen Datenexport anfordert.',
  blocks: [
    {
      type: 'p',
      text: 'Dieser Artikel erklärt die wichtigsten Datenarten, die TikTok sammelt, wie diese Daten durch die normale Nutzung der App entstehen, was üblicherweise in einem TikTok-Datenexport erscheint und worauf Nutzer beim Prüfen ihrer Informationen achten sollten.',
    },
    { type: 'h2', text: 'Wie TikTok Nutzerdaten sammelt' },
    {
      type: 'p',
      text: 'TikTok sammelt Daten durch die direkte Interaktion der Nutzer mit der App, die Kontokonfiguration und technische Prozesse, die erforderlich sind, um Inhalte bereitzustellen und die Stabilität der Plattform aufrechtzuerhalten.',
    },
    { type: 'p', text: 'Die Datenerfassung erfolgt, wenn Nutzer:' },
    {
      type: 'ul',
      items: [
        'ein Konto erstellen oder verwalten',
        'Inhalte ansehen, liken, kommentieren oder teilen',
        'nach Videos oder Creatorn suchen',
        'mit Funktionen innerhalb der App interagieren',
      ],
    },
    {
      type: 'p',
      text: 'Diese Daten werden im Rahmen des normalen Plattformbetriebs automatisch protokolliert und sind in der öffentlich verfügbaren Datenschutzdokumentation von TikTok beschrieben.',
    },
    { type: 'h2', text: 'Kategorien der von TikTok gesammelten Daten' },
    {
      type: 'p',
      text: 'Die Datenerfassung von TikTok lässt sich grob in mehrere Kategorien einteilen.',
    },
    { type: 'h3', text: 'Konto- und Profilinformationen' },
    {
      type: 'p',
      text: 'Daten auf Kontoebene dienen dazu, Nutzerprofile zu identifizieren und zu verwalten. Dazu können gehören:',
    },
    {
      type: 'ul',
      items: [
        'Benutzername und Anzeigename',
        'Erstellungsdatum des Kontos',
        'Profileinstellungen und Präferenzen',
        'Informationen zu Region, Sprache oder Land',
      ],
    },
    {
      type: 'p',
      text: 'Diese Informationen ermöglichen es TikTok, Aktivitäten dem richtigen Konto zuzuordnen und regions- oder sprachbasierte Einstellungen anzuwenden.',
    },
    { type: 'h3', text: 'Aktivitäts- und Nutzungsdaten' },
    {
      type: 'p',
      text: 'Aktivitätsdaten geben wieder, wie Nutzer im Laufe der Zeit mit der Plattform interagieren. Dazu können gehören:',
    },
    {
      type: 'ul',
      items: [
        'Zeitstempel der App-Nutzung',
        'angesehene Videos oder Interaktionen damit',
        'Likes, Kommentare und geteilte Inhalte',
        'Folge- und Entfolgen-Aktionen',
      ],
    },
    {
      type: 'p',
      text: 'Diese Kategorie macht häufig den größten Teil der nutzerbezogenen Daten aus und spiegelt beobachtbares Verhalten wider, nicht Absichten oder persönliche Bedeutung.',
    },
    { type: 'h3', text: 'Such- und Entdeckungsinformationen' },
    {
      type: 'p',
      text: 'TikTok kann Daten im Zusammenhang mit der Entdeckung von Inhalten sammeln, etwa:',
    },
    {
      type: 'ul',
      items: [
        'in der App eingegebene Suchanfragen',
        'Interaktionen mit empfohlenen Inhalten',
        'Beschäftigung mit Trendthemen oder Kategorien',
      ],
    },
    {
      type: 'p',
      text: 'Diese Informationen helfen der Plattform, Inhalte zu organisieren und anzuzeigen, anstatt persönliche Vorlieben über die erfassten Aktionen hinaus zu interpretieren.',
    },
    { type: 'h3', text: 'Geräte- und technische Daten' },
    {
      type: 'p',
      text: 'Um eine einwandfreie Funktion der App sicherzustellen, kann TikTok technische Informationen sammeln, darunter:',
    },
    {
      type: 'ul',
      items: [
        'Gerätetyp und Betriebssystem',
        'App-Version und Leistungsdaten',
        'Indikatoren zur Netzwerkverbindung',
      ],
    },
    {
      type: 'p',
      text: 'Diese Daten unterstützen Sicherheit, Fehlerbehebung und Kompatibilität über verschiedene Geräte hinweg.',
    },
    { type: 'h2', text: 'Was TikTok nicht sammelt' },
    {
      type: 'p',
      text: 'Es gibt verbreitete Missverständnisse über die Datenerfassung.',
    },
    { type: 'p', text: 'TikTok tut Folgendes nicht:' },
    {
      type: 'ul',
      items: [
        'Nutzerpasswörter in lesbarer Form innerhalb von Exporten speichern',
        'private Gedanken, Gefühle oder Absichten aufzeichnen',
        'Finanzdaten durch die normale Nutzung erfassen',
        'in allen Fällen uneingeschränkten Zugriff auf den Inhalt privater Nachrichten gewähren',
      ],
    },
    {
      type: 'p',
      text: 'Die gesammelten Daten sind strukturiert, protokolliert und auf definierte Systeme beschränkt, statt auf informeller Beobachtung zu beruhen.',
    },
    { type: 'h2', text: 'Was in einem TikTok-Datenexport erscheint' },
    {
      type: 'p',
      text: 'Wenn Nutzer einen Datenexport anfordern, stellt TikTok eine herunterladbare Datei bereit - üblicherweise als ZIP -, die strukturierte Aufzeichnungen ihrer Aktivität enthält.',
    },
    { type: 'p', text: 'Ein Datenexport kann Folgendes enthalten:' },
    {
      type: 'ul',
      items: [
        'Interaktionsverläufe',
        'Aktivitätsprotokolle mit Zeitstempeln',
        'suchbezogene Aufzeichnungen',
        'Konto-Metadaten',
      ],
    },
    {
      type: 'p',
      text: 'Nicht alle gesammelten Daten sind immer enthalten. Exporte können variieren, abhängig von:',
    },
    {
      type: 'ul',
      items: [
        'regionalen Vorschriften',
        'Grenzen der Datenspeicherung',
        'Kontoalter und Aktivitätsniveau',
      ],
    },
    {
      type: 'p',
      text: 'Der Export spiegelt die aufgezeichnete Plattformaktivität wider, nicht abgeleitete Eigenschaften oder subjektive Analysen.',
    },
    { type: 'h2', text: 'Warum es wichtig ist, die Datenerfassung zu verstehen' },
    { type: 'p', text: 'Zu wissen, welche Daten gesammelt werden, hilft Nutzern,' },
    {
      type: 'ul',
      items: [
        'ihre eigene digitale Aktivität besser zu verstehen',
        'die Transparenz der Plattform zu prüfen',
        'fundierte Entscheidungen über Datenanalyse-Tools zu treffen',
        'die Kontrolle über persönliche Informationen zu behalten',
      ],
    },
    {
      type: 'p',
      text: 'Bewusstsein fördert eine verantwortungsvolle Nutzung und eine informierte Einwilligung im Umgang mit persönlichen Daten.',
    },
    { type: 'h2', text: 'Datenerfassung vs. Dateninterpretation' },
    { type: 'p', text: 'Es ist wichtig, zwischen Folgendem zu unterscheiden:' },
    {
      type: 'ul',
      items: [
        'Datenerfassung - das Aufzeichnen beobachtbarer Aktionen',
        'Dateninterpretation - das Zusammenfassen oder Analysieren dieser Aufzeichnungen',
      ],
    },
    {
      type: 'p',
      text: 'Das Vorhandensein von Daten lässt nicht automatisch auf Schlussfolgerungen schließen. Bedeutung und Interpretation hängen vom Kontext und den zur Analyse der Informationen verwendeten Methoden ab.',
    },
    { type: 'h2', text: 'Abschließende Gedanken' },
    {
      type: 'p',
      text: 'TikTok sammelt Daten zu Kontoverwaltung, Aktivität, Entdeckung und technischer Leistung, um seine Plattform zu betreiben. Diese Daten werden systematisch aufgezeichnet und Nutzern aus Gründen der Transparenz über offizielle Export-Tools zur Verfügung gestellt.',
    },
    {
      type: 'p',
      text: 'Indem Nutzer verstehen, welche Daten gesammelt werden - und welche nicht -, können sie ihren TikTok-Daten mit Klarheit, Selbstvertrauen und fundiertem Bewusstsein begegnen.',
    },
  ],
  faq: [
    {
      q: 'Welche personenbezogenen Daten sammelt TikTok?',
      a: 'TikTok sammelt Kontoinformationen, Aktivitätsdaten, Suchinteraktionen und gerätebezogene technische Daten, die zum Betrieb der Plattform erforderlich sind.',
    },
    {
      q: 'Sammelt TikTok private Nachrichten?',
      a: 'Einige nachrichtenbezogene Metadaten können erfasst werden, aber der vollständige Inhalt privater Nachrichten ist nicht immer in Datenexporten enthalten und umfasst keine Passwörter.',
    },
    {
      q: 'Kann ich sehen, welche Daten TikTok über mich hat?',
      a: 'Ja. TikTok ermöglicht es Nutzern, über die Datenschutz- und Dateneinstellungen einen persönlichen Datenexport anzufordern.',
    },
    {
      q: 'Sind alle gesammelten Daten im Export enthalten?',
      a: 'Nicht immer. Datenexporte können durch Aufbewahrungsfristen, regionale Vorschriften und die Kontoaktivität eingeschränkt sein.',
    },
    {
      q: 'Warum sammelt TikTok Nutzerdaten?',
      a: 'Die Datenerfassung unterstützt die Funktionalität der Plattform, die Personalisierung, die Sicherheit und die allgemeine Leistung.',
    },
  ],
}
