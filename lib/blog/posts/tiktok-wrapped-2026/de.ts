import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "TikTok Wrapped 2026: So bekommst du deinen Jahresrückblick",
  description:
    "Du suchst nach TikTok Wrapped 2026? TikTok macht keins, auf das man sich verlassen kann. So baust du dir deinen eigenen Rückblick aus deinem Datenexport: Watchtime, Top-Suchen und dein Rang.",
  intro:
    "Jeden Dezember kapert dieselbe Frage die For You-Seite von allen: Wo bleibt mein TikTok Wrapped? Und jedes Jahr enttäuscht die Antwort ein kleines bisschen. TikTok hat seinen Jahresrückblick nie so behandelt wie Spotify. Manche Jahre taucht er auf, manche Jahre eben einfach nicht. Wenn du also schon jetzt nach deinem TikTok Wrapped 2026 fahndest, hier die ehrliche Lage, plus der Umweg, der dir die Zahlen wirklich beschafft.",
  blocks: [
    { type: 'h2', text: "Gibt es ein offizielles TikTok Wrapped für 2026?" },
    {
      type: 'p',
      text: "Kurze Antwort: Bis jetzt wurde nichts angekündigt. Und ehrlich gesagt passt das ins Bild. TikTok hat von 2020 bis 2022 einen richtigen Rückblick rausgebracht, ihn 2023 komplett ausfallen lassen und ist seitdem mal so, mal so. Selbst in den Jahren, in denen er erscheint, kommt er meist so um Mitte Dezember und erreicht die Leute in Wellen statt alle auf einmal. Wenn du also die App immer wieder neu lädst und auf irgendeinen groß animierten Rückblick wartest, könntest du eine ganze Weile warten.",
    },
    {
      type: 'p',
      text: "Ein bisschen zum Verzweifeln ist dabei, dass TikTok die Daten ganz offensichtlich hat. Dein Wiedergabeverlauf, jede Suche, die Sounds, die du um 2 Uhr nachts gespeichert hast, das liegt alles auf ihren Servern. Die App macht sich nur nicht immer die Mühe, es dir in einer Form zurückzugeben, die man sich auch anschauen möchte.",
    },
    { type: 'h2', text: "Der Umweg: Bau dir deinen eigenen aus dem Datenexport" },
    {
      type: 'p',
      text: "Und jetzt der Teil, den die meisten übersehen. Du brauchst TikTok gar nicht dafür, dass es dir ein Wrapped bastelt. Du kannst dir die Rohdaten selbst ziehen und daraus dieselbe Art Rückblick machen, an welchem Tag auch immer dir danach ist. Genau dafür gibt es [[home:TikTok Wrapped]] überhaupt.",
    },
    {
      type: 'p',
      text: "Es läuft über den offiziellen Datenexport, den TikTok jedem Nutzer zum Download anbietet. Du forderst die Datei an, sie kommt als JSON zurück (oder als ZIP mit einer JSON drin), und das Tool liest sie und rechnet durch: insgesamt angeschaute Videos, verlorene Stunden, deine aktivste Tageszeit, die Suchen, die du vielleicht lieber vergessen würdest, und einen Persönlichkeitsrang danach, wie tief du drinsteckst. Kein Account, kein Passwort, nichts wird an einen Server geschickt. Die Datei wird direkt in deinem Browser gelesen.",
    },
    {
      type: 'p',
      text: "Die Datei zu bekommen geht schnell, kommt aber mit einer Wartezeit. Hier der ganze Ablauf:",
    },
    {
      type: 'ol',
      items: [
        "Öffne in TikTok dein Profil, tippe auf das Menü (☰) und geh dann zu 'Settings and privacy'.",
        "Tippe unter 'Account' auf 'Download your data'.",
        "Wähle JSON als Format. Das ist wichtig, denn TXT und HTML funktionieren mit den meisten Analyse-Tools nicht. Dann wähle 'All data' und tippe auf 'Request data'.",
        "Warten. TikTok braucht meistens irgendwas zwischen ein paar Stunden und ein paar Tagen, um die Datei zu bauen, und sobald sie fertig ist, bleibt sie ein paar Tage lang zum Download verfügbar.",
      ],
    },
    {
      type: 'p',
      text: "Wenn die Datei da ist, bring sie zum [[analyze:Analyzer]] und lad sie rein. Falls du lieber erst sehen möchtest, was dich erwartet, bevor du das alles durchziehst: Es gibt einen [[example:kompletten Beispiel-Rückblick]] aus erfundenen Daten, in dem du vorher stöbern kannst.",
    },
    { type: 'h2', text: "Was dein 2026er-Rückblick wirklich zeigt" },
    {
      type: 'p',
      text: "Das ist deutlich mehr als ein reiner Watchtime-Zähler. Du bekommst deine Top-Suchen, gerankt danach, wie oft du sie nachgeschlagen hast, deine aktivsten Stunden (die Spätschicht mitten in der Nacht ist meistens eine ziemlich unangenehme Überraschung), deine geschäftigsten Jahre nebeneinander aufgereiht, deine Likes, Kommentare und Shares, Lieblingssounds und -creator, und einen Rang, der dich ganz leise irgendwo zwischen Gelegenheitsgucker und, na ja, das wird langsam zum Problem einordnet. Es ist genau das Zeug, das dir ein echtes Wrapped zeigen würde. Nur erstellst du es zu deinen eigenen Bedingungen, statt auf die App zu warten.",
    },
    { type: 'h2', text: "Warum Spotify das hinkriegt und TikTok nicht" },
    {
      type: 'p',
      text: "Spotify hat aus Wrapped ein Event gemacht. Es kommt automatisch, es ist poliert, es erscheint pünktlich, und eine Woche lang ist dein ganzer Feed voll mit den Top-Künstlern anderer Leute. Auf so eine Verpflichtung hat TikTok sich nie eingelassen. Zum Teil liegt das daran, dass ein Musikjahr sich wirklich leichter verpacken lässt als ein endloser, formloser Feed. Zum Teil, so der Verdacht, hätte TikTok wohl lieber, dass du weiterscrollst, als dass du innehältst und zählst, wie viel du schon gescrollt hast. So oder so ist genau diese Lücke der Grund, warum es Tools von Drittanbietern gibt. Wenn du den praktischen Unterschied zwischen so einem Rückblick und TikToks eingebauten Creator-Zahlen wissen willst: [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:dieser Vergleich]] schlüsselt es auf.",
    },
    { type: 'h2', text: "Eine Sache, für die es sich lohnt, kurz durchzuatmen: Datenschutz" },
    {
      type: 'p',
      text: "Dein Datenexport ist privat. Je nachdem, was du mit reinnimmst, kann er Nachrichten, Login-Verlauf, das ganze Programm enthalten. Deshalb ist es wirklich nicht egal, wo du ihn hochlädst. Bei TikTok Wrapped verlässt die Datei nie dein Gerät; alles passiert lokal im Browser und nichts wird gespeichert. Falls du auch andere Tools in Betracht ziehst, ist [[/blog/is-it-safe-to-upload-tiktok-data-online:dieser kurze Text zum sicheren Hochladen von TikTok-Daten]] zwei Minuten wert, bevor du deine Datei irgendwem in die Hand drückst.",
    },
    {
      type: 'p',
      text: "Also nein, wahrscheinlich ist kein glänzendes offizielles TikTok Wrapped 2026 unterwegs, das den Tag rettet. Aber die Daten gehören dir, und deinen Jahresrückblick daraus rauszuquetschen kostet ungefähr fünf Minuten echten Aufwand. [[analyze:Schnapp dir deinen Export und sieh dir deine Zahlen an]], wann immer du bereit für sie bist.",
    },
  ],
  faq: [
    {
      q: "Gibt es ein offizielles TikTok Wrapped für 2026?",
      a: "Es wurde keins angekündigt. TikTok hat von 2020 bis 2022 eins gemacht, 2023 ausgelassen und ist seitdem unbeständig. Wenn es denn erscheint, dann meist so um Mitte Dezember und wird nach und nach ausgerollt.",
    },
    {
      q: "Wann kommt TikTok Wrapped raus?",
      a: "Historisch gesehen Mitte bis Ende Dezember, wenn es überhaupt kommt. Weil es nicht garantiert ist, nutzen viele Leute ein Datenexport-Tool, um ihren Rückblick nach ihrem eigenen Zeitplan zu bekommen, statt zu warten.",
    },
    {
      q: "Kann ich mein TikTok Wrapped 2026 schon jetzt bekommen?",
      a: "Ja. Du musst nicht auf TikTok warten. Fordere deinen Datenexport an (wähle das JSON-Format), lad ihn dann in ein Tool wie TikTok Wrapped hoch, und du bekommst deine Statistiken und deinen Rang in ein paar Sekunden.",
    },
    {
      q: "Brauche ich einen speziellen Account oder muss ich dafür bezahlen?",
      a: "Nein. Jeder TikTok-Account kann einen Datenexport anfordern, und die Auswertung auf TikTok Wrapped ist kostenlos und ganz ohne Login.",
    },
    {
      q: "Ist es sicher, meine TikTok-Daten hochzuladen?",
      a: "Bei TikTok Wrapped wird deine Datei komplett in deinem Browser verarbeitet und nie hochgeladen oder gespeichert. Bei Tools von Drittanbietern allgemein lohnt es sich zu prüfen, dass sie Daten lokal verarbeiten und nie nach deinem TikTok-Passwort fragen.",
    },
  ],
}
