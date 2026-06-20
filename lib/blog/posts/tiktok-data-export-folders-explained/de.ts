import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'Was jeder Ordner im TikTok-Datenexport bedeutet (Leitfaden 2026)',
  description:
    'Eine klare Übersicht über jeden Ordner und jeden JSON-Bereich im TikTok-Datenexport, was jeweils enthalten ist und welche Teile TikTok Wrapped ausliest.',
  intro:
    'Der TikTok-Datenexport ist in eine Reihe von Ordnern und JSON-Bereichen gegliedert – Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings und TikTok Live – und jeder davon speichert einen anderen Ausschnitt deiner Kontohistorie.',
  blocks: [
    {
      type: 'p',
      text: 'Wenn du deine Daten bei TikTok anforderst und den Download öffnest, kann der Inhalt zunächst überwältigend wirken. Egal ob du eine einzige große JSON-Datei oder eine strukturierte Ordnersammlung erhältst – die Informationen sind in vorhersehbare Bereiche gegliedert. Sobald du verstehst, wie diese Bereiche auf deine tatsächliche Aktivität abgebildet werden, lässt sich der Export problemlos navigieren.',
    },
    {
      type: 'p',
      text: 'Dieser Leitfaden geht durch jeden übergeordneten Ordner und JSON-Bereich im Export, erklärt in einfachen Worten, was darin enthalten ist, und zeigt, welche Teile [[home:TikTok Wrapped]] tatsächlich ausliest, um deine Zusammenfassung zu erstellen. Wenn du deine Daten noch nicht heruntergeladen hast, lies unsere Schritt-für-Schritt-Anleitung zu [[/blog/how-to-download-analyze-tiktok-data:Herunterladen und Analysieren deiner TikTok-Daten]].',
    },
    { type: 'h2', text: 'Profile' },
    {
      type: 'p',
      text: 'Der Bereich Profile enthält deine grundlegenden Kontoinformationen: Benutzername, Profilname, Bio, die mit dem Konto verknüpfte E-Mail-Adresse oder Telefonnummer sowie Angaben zur Kontoerstellung. Er beschreibt, wer du auf der Plattform bist – nicht, was du dort getan hast.',
    },
    {
      type: 'p',
      text: "Dieser Bereich ist klein, aber nützlich, um einen Bericht zu beschriften. Er enthält nicht dein Passwort – TikTok gibt niemals Zugangsdaten in einem Export weiter.",
    },
    { type: 'h2', text: 'Activity (Your Activity)' },
    {
      type: 'p',
      text: 'Der Bereich Activity – manchmal als "Your Activity" bezeichnet – ist das Herzstück des Exports und in der Regel der umfangreichste Teil. Er ist in mehrere Unterbereiche aufgeteilt, die alles erfassen, was du beim Browsen getan hast:',
    },
    {
      type: 'ul',
      items: [
        'Watch History – eine zeitgestempelte Liste der von dir angesehenen Videos.',
        'Like List – die von dir gelikten Videos mit Datum.',
        'Search History – die Begriffe, nach denen du gesucht hast.',
        'Share History – Inhalte, die du geteilt hast, und wohin.',
        'Following / Follower List – Konten, denen du folgst, und Konten, die dir folgen.',
        'Favorite videos, sounds, and hashtags – Elemente, die du als Lesezeichen gespeichert hast.',
      ],
    },
    {
      type: 'p',
      text: 'Da die Daten mit Zeitstempeln versehen sind, ermöglicht dieser Bereich die Analyse langfristiger Muster. Die meisten Einblicke in einer TikTok Wrapped-Zusammenfassung – deine meistgesehenen Zeiträume, Lieblingsersteller und dein Wiedergabevolumen – stammen von hier.',
    },
    { type: 'h2', text: 'Comments' },
    {
      type: 'p',
      text: 'Der Bereich Comments listet die Kommentare auf, die du unter anderen Videos gepostet hast, zusammen mit deren Zeitstempeln. Er spiegelt wider, wie du im Laufe der Zeit öffentlich mit Inhalten interagiert hast.',
    },
    { type: 'h2', text: 'Direct Messages' },
    {
      type: 'p',
      text: 'Der Bereich Direct Messages enthält deine privaten Chat-Verläufe, nach Konversation gruppiert. Dies ist der persönlichste Teil des Exports – weshalb beim Teilen von Dateien besondere Sorgfalt geboten ist. TikTok Wrapped benötigt deine Direktnachrichten nicht und liest sie auch nicht aus.',
    },
    { type: 'h2', text: 'Video (Your Posts)' },
    {
      type: 'p',
      text: 'Der Bereich Video – oft als "Posts" bezeichnet – umfasst die Inhalte, die du selbst veröffentlicht hast: deine hochgeladenen Videos, Bildunterschriften und zugehörige Metadaten. Für Creator dokumentiert dieser Bereich ihren Posting-Verlauf, während er bei reinen Zuschauern klein oder leer sein kann.',
    },
    { type: 'h2', text: 'Ads and Data' },
    {
      type: 'p',
      text: 'Der Bereich Ads and Data erfasst werbebezogene Signale, darunter die Off TikTok Activity-Daten – Informationen, die andere Apps und Websites mit TikTok über deine Aktivitäten außerhalb der App geteilt haben. Enthalten sind außerdem Werbeinteressen und Werbeinteraktions-Datensätze, die für das Targeting verwendet werden.',
    },
    {
      type: 'p',
      text: 'Wenn du tiefer ergründen möchtest, was diese Signale verraten, erklärt unser Artikel zu [[/blog/what-data-does-tiktok-collect:Welche Daten TikTok sammelt]] die Kategorien im Detail.',
    },
    { type: 'h2', text: 'App Settings' },
    {
      type: 'p',
      text: 'Der Bereich App Settings speichert deine Einstellungen: Datenschutzoptionen, Benachrichtigungseinstellungen, Sprache und ähnliche Konfigurationen. Er beschreibt, wie dein Konto eingerichtet ist – nicht, wie du es genutzt hast – und hat daher selten Einfluss auf Analysen.',
    },
    { type: 'h2', text: 'TikTok Live' },
    {
      type: 'p',
      text: 'Der Bereich TikTok Live erfasst Aktivitäten rund um Live-Streams – Streams, die du gehostet oder denen du beigetreten bist, sowie damit verbundene Interaktionen. Für die meisten Zuschauer ist dieser Bereich klein, für aktive Streamer kann er jedoch eine bedeutsame Aufzeichnung darstellen.',
    },
    { type: 'h2', text: 'Ordner-für-Ordner-Referenz' },
    {
      type: 'p',
      text: 'Die folgende Tabelle ordnet jedem Ordner bzw. JSON-Bereich zu, was er enthält und was TikTok Wrapped daraus ausliest. Die Art der erzeugten Ausgaben kannst du auch auf unserer [[example:Beispiel-Wrapped]]-Seite sehen.',
    },
    {
      type: 'table',
      headers: ['Ordner / Bereich', 'Inhalt', 'Was TikTok Wrapped ausliest'],
      rows: [
        ['Profile', 'Benutzername, Bio, Kontodetails', 'Anzeigename für den Bericht'],
        ['Activity — Watch History', 'Zeitgestempelte angesehene Videos', 'Wiedergabevolumen und Trends'],
        ['Activity — Like List', 'Gelikte Videos mit Datum', 'Like-Gewohnheiten über die Zeit'],
        ['Activity — Search History', 'Verwendete Suchbegriffe', 'Top-Suchen und Interessen'],
        ['Activity — Following / Follower', 'Gefolgten Konten und Follower', 'Lieblingsersteller'],
        ['Comments', 'Gepostete Kommentare', 'Engagement-Zahlen (optional)'],
        ['Direct Messages', 'Privater Chat-Verlauf', 'Wird nicht ausgelesen'],
        ['Video / Posts', 'Veröffentlichte Videos', 'Posting-Verlauf (Creator)'],
        ['Ads and Data', 'Off TikTok Activity, Werbeinteressen', 'Wird nicht ausgelesen'],
        ['App Settings', 'Datenschutz- und App-Einstellungen', 'Wird nicht ausgelesen'],
        ['TikTok Live', 'Live-Stream-Aktivität', 'Wird nicht ausgelesen'],
      ],
    },
    { type: 'h2', text: 'Ein Hinweis zum Datenschutz' },
    {
      type: 'p',
      text: 'Dein Export enthält sensible Bereiche – insbesondere Direct Messages und Ads and Data – die für die Erstellung einer Nutzungszusammenfassung niemals erforderlich sind. TikTok Wrapped konzentriert sich auf die zeitgestempelten Activity-Daten und ignoriert private Nachrichten sowie Werbedatensätze vollständig. Du behältst die Kontrolle über die Datei und kannst sensible Ordner löschen, bevor du irgendetwas irgendwo hochlädst. Wenn du bereit bist, kannst du [[analyze:dein Wrapped analysieren]] – ganz mit nur den Aktivitätsdateien.',
    },
    { type: 'h2', text: 'Abschließende Gedanken' },
    {
      type: 'p',
      text: 'Der TikTok-Datenexport wirkt nur so lange kompliziert, bis du die Struktur kennst. Jeder Ordner beantwortet eine einzige Frage – wer du bist, was du angesehen hast, was du gepostet hast, mit wem du gesprochen hast oder wie dein Konto konfiguriert ist. Wenn du weißt, welche Bereiche relevant sind, kannst du die für dich wichtigen Teile analysieren und die privaten unangetastet lassen.',
    },
  ],
  faq: [
    {
      q: 'Wie ist der TikTok-Datenexport aufgebaut?',
      a: 'Der Export ist in Bereiche wie Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings und TikTok Live unterteilt, wobei jeder einen anderen Teil deiner Kontohistorie speichert.',
    },
    {
      q: 'In welchem Ordner befindet sich meine Watch History?',
      a: 'Deine Watch History befindet sich im Bereich Activity, der oft als "Your Activity" bezeichnet wird – zusammen mit deiner Like List, Search History und den Following-Listen.',
    },
    {
      q: 'Enthält der TikTok-Datenexport mein Passwort?',
      a: 'Nein. TikTok fügt niemals Kontopasswörter oder Anmeldedaten in einen Datenexport ein. Der Bereich Profile enthält nur grundlegende Kontoinformationen.',
    },
    {
      q: 'Liest TikTok Wrapped meine Direktnachrichten?',
      a: 'Nein. TikTok Wrapped konzentriert sich auf die zeitgestempelten Activity-Daten und liest weder deine Direct Messages noch den Bereich Ads and Data aus.',
    },
    {
      q: 'Was sind die Off TikTok Activity-Daten?',
      a: 'Die Off TikTok Activity befindet sich im Bereich Ads and Data und erfasst Informationen, die andere Apps und Websites mit TikTok über deine Aktivitäten außerhalb der App geteilt haben.',
    },
  ],
}
