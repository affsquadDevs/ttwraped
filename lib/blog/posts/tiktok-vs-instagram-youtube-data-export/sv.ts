import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'TikTok vs Instagram vs YouTube: Jämförelse av dina dataexporter',
  description:
    'Jämför hur TikTok, Instagram och YouTube låter dig ladda ner din data: hur du begär varje export, leveranstid, format och vilket som är enklast att analysera.',
  intro:
    'TikTok, Instagram och YouTube låter dig alla ladda ner en kopia av dina personliga uppgifter, men processen för att begära det, leveranstiden, filformaten och detaljnivån skiljer sig mycket åt mellan dem.',
  blocks: [
    {
      type: 'p',
      text: 'Om du någonsin velat blicka tillbaka på din egen aktivitet — vad du tittade på, vad du sökte efter och hur du använde en app under åren — ger de flesta stora plattformar dig nu ett sätt att begära den datan. Det drivs delvis av integritetsregler som GDPR och CCPA, som ger användare rätten att ta del av den information en tjänst lagrar om dem.',
    },
    {
      type: 'p',
      text: 'Den här guiden jämför dataexportupplevelsen på tre av de största plattformarna: TikTok, Instagram och YouTube. Vi tittar på hur du begär varje export, hur lång tid leveransen tar, vilka format du får och vad varje arkiv faktiskt avslöjar om din aktivitet.',
    },
    { type: 'h2', text: 'Hur du begär varje export' },
    {
      type: 'p',
      text: 'Varje plattform gömmer nedladdningsalternativet i sina sekretess- eller kontoinställningar, men vägen dit skiljer sig något.',
    },
    {
      type: 'ul',
      items: [
        "TikTok: Öppna Inställningar och sekretess → Konto → Ladda ner dina data, välj ett format och begär filen.",
        'Instagram: Gå till Inställningar → Kontocenter → Din information och behörigheter → Ladda ner din information.',
        'YouTube: Använd Google Takeout, välj YouTube och YouTube Music och välj vad som ska ingå (historik, kommentarer, spellistor).',
      ],
    },
    {
      type: 'p',
      text: "TikTok håller allt inom sin egen app, Instagram dirigerar dig genom Metas gemensamma Kontocenter och YouTube överlåter jobbet till Google Takeout, som täcker alla Google-produkter på ett och samma ställe.",
    },
    { type: 'h2', text: 'Leveranstid' },
    {
      type: 'p',
      text: 'Ingen av dessa exporter är omedelbara, eftersom plattformarna måste paketera potentiellt flera års aktivitet i ett nedladdningsbart arkiv.',
    },
    {
      type: 'p',
      text: 'TikTok levererar vanligtvis snabbast — ofta inom några timmar till ett par dagar, och filen visas i appen för dig att ladda ner. Instagram och YouTube kan ta allt från några timmar till flera dagar beroende på kontostorlek och det datumintervall du begär. Större arkiv, särskilt de som inkluderar media, tar längre tid att förbereda.',
    },
    { type: 'h2', text: 'Filformat' },
    {
      type: 'p',
      text: 'Vilket format du får spelar stor roll om du planerar att analysera datan senare.',
    },
    {
      type: 'ul',
      items: [
        'TikTok låter dig välja mellan JSON (maskinläsbart, idealiskt för analys) och TXT/HTML (enklare att läsa för hand).',
        'Instagram erbjuder JSON eller HTML, där HTML öppnas som webbsidor och JSON passar bättre för verktyg.',
        'YouTube levererar historik som JSON eller HTML och andra objekt som CSV, allt paketerat i ett ZIP-arkiv.',
      ],
    },
    {
      type: 'p',
      text: 'Om ditt mål är att analysera din aktivitet snarare än att bara bläddra igenom den bör du alltid välja JSON där alternativet finns.',
    },
    { type: 'h2', text: 'Jämförelse sida vid sida' },
    {
      type: 'table',
      headers: ['Funktion', 'TikTok', 'Instagram', 'YouTube'],
      rows: [
        ['Begäransmetod', 'Inställningar i appen', 'Kontocenter', 'Google Takeout'],
        ['Leveranstid', 'Timmar till ~2 dagar', 'Timmar till flera dagar', 'Timmar till flera dagar'],
        ['Format', 'JSON eller TXT/HTML', 'JSON eller HTML', 'JSON, HTML, CSV'],
        [
          'Detaljnivå för tittarhistorik',
          'Hög (tidsstämplar per video)',
          'Begränsad (ingen logg för flödesvideor)',
          'Hög (tidsstämplar per video)',
        ],
        ['Sökhistorik', 'Ingår', 'Ingår', 'Ingår'],
      ],
    },
    { type: 'h2', text: 'Vad varje export avslöjar' },
    {
      type: 'h3',
      text: 'Detaljnivå för tittarhistorik',
    },
    {
      type: 'p',
      text: "TikTok och YouTube registrerar båda en detaljerad, tidsstämplad logg över de videor du tittade på, vilket gör det möjligt att rekonstruera tittarvanor över tid. Instagrams export är svagare här — den fångar interaktioner och viss tittardata, men ger inte samma tydliga historik per video i flödet som TikTok erbjuder.",
    },
    {
      type: 'h3',
      text: 'Sökhistorik',
    },
    {
      type: 'p',
      text: 'Alla tre plattformar inkluderar dina sökfrågor, så du kan se vilka ämnen, skapare och ljud du sökte efter. Det här är ett av de mest konsekventa avsnitten i exporterna.',
    },
    {
      type: 'h3',
      text: 'Meddelanden och interaktioner',
    },
    {
      type: 'p',
      text: 'TikTok och Instagram inkluderar båda direktmeddelanden och engagemangsposter som gillamarkeringar, kommentarer och följningar. YouTube fokuserar mer på kommentarer, prenumerationer och spellistor, eftersom det i första hand inte är en meddelandeplattform.',
    },
    { type: 'h2', text: 'Vilket är enklast att analysera?' },
    {
      type: 'p',
      text: 'Vad gäller rent analytiskt värde leder TikTok och YouTube, eftersom båda tillhandahåller detaljerade, tidsstämplade tittarhistoriker i JSON. Det strukturerade formatet gör det enkelt för ett verktyg att räkna videor, hitta topptimmar och synliggöra mönster.',
    },
    {
      type: 'p',
      text: "Instagrams export är välorganiserad men mindre inriktad på kontinuerlig videotittning, så den berättar en annan historia — mer om interaktioner än passivt tittande.",
    },
    {
      type: 'p',
      text: 'I praktiken är råa exportfiler svåra att läsa på egen hand. Det är där ett sammanfattningsverktyg hjälper till. [[home:TikTok Wrapped]] tar en TikTok-dataexport och förvandlar den till tydliga, visuella insikter om din aktivitet. Du kan [[analyze:analysera din egen export]] eller visa ett [[example:exempelresultat]] först för att se hur det ser ut.',
    },
    { type: 'h2', text: 'Avslutande tankar' },
    {
      type: 'p',
      text: 'TikTok, Instagram och YouTube respekterar alla din rätt att ladda ner dina uppgifter, men de skiljer sig i hur enkel processen är och hur användbart resultatet är för analys. TikTok och YouTube utmärker sig för detaljerad tittarhistorik, medan Instagram ger en bred bild av interaktioner.',
    },
    {
      type: 'p',
      text: 'Om du vill fördjupa dig, se våra guider om [[/blog/how-to-download-analyze-tiktok-data:hur du laddar ner och analyserar dina TikTok-data]] och skillnaden mellan [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:TikTok Wrapped och TikTok Analytics]].',
    },
  ],
  faq: [
    {
      q: 'Hur begär jag mina data från TikTok, Instagram och YouTube?',
      a: 'TikTok erbjuder alternativet inuti Inställningar och sekretess under Ladda ner dina data. Instagram använder Kontocentret under Ladda ner din information. YouTube använder Google Takeout, där du väljer YouTube och YouTube Music.',
    },
    {
      q: 'Hur lång tid tar det för varje dataexport att komma fram?',
      a: 'TikTok är vanligtvis snabbast, ofta inom några timmar till ungefär två dagar. Instagram och YouTube kan ta allt från några timmar till flera dagar beroende på kontostorlek och det begärda datumintervallet.',
    },
    {
      q: 'Vilket format bör jag välja för analys?',
      a: 'Välj JSON när det erbjuds. JSON är maskinläsbart och fungerar bäst med analysverktyg, medan HTML och TXT är enklare att läsa för hand men svårare att bearbeta.',
    },
    {
      q: 'Vilken plattform ger den mest detaljerade tittarhistoriken?',
      a: 'TikTok och YouTube tillhandahåller båda detaljerade, tidsstämplade tittarhistoriker. Instagram fångar interaktioner men erbjuder inte samma historik per video i flödet.',
    },
    {
      q: 'Vilken export är enklast att analysera?',
      a: 'TikTok och YouTube är enklast att analysera eftersom deras strukturerade JSON-tittarhistoriker gör det enkelt att räkna videor och hitta mönster. Ett verktyg som TikTok Wrapped kan förvandla en TikTok-export till tydliga visuella insikter.',
    },
  ],
}
