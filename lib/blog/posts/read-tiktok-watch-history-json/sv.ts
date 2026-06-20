import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Hur du läser din TikTok-titta-historik JSON-fil",
  description:
    "Lär dig vad TikTok-titta-historikens JSON-fil är, var den finns i din dataexport och hur du läser dess struktur för att räkna videor och sessioner.",
  intro:
    "Din TikToks titta-historikfil är en JSON-post i klartext över varje video du spelat upp, lagrad i den dataexport som TikTok låter dig ladda ner. När du förstår dess struktur kan du läsa den, räkna videor och till och med uppskatta tittarsessioner på egen hand.",
  blocks: [
    {
      type: "p",
      text: "När du begär dina data från TikTok och väljer JSON-format levereras exporten som ett ZIP-arkiv med flera filer. En av de mest intressanta är titta-historikfilen, som listar de videor du sett över tid. Den här guiden går igenom var filen finns, hur dess JSON är organiserad och hur du tolkar innehållet.",
    },
    {
      type: "h2",
      text: "Vad titta-historikfilen är",
    },
    {
      type: "p",
      text: "Titta-historikfilen är en logg över de videor som spelats upp i ditt \"För dig\"- och \"Följer\"-flöde. Varje post representerar en enskild video som TikTok registrerat som sedd, tillsammans med tidpunkten den spelades och en länk tillbaka till originalvideon.",
    },
    {
      type: "p",
      text: "Det är ingen analysdashboard. Det är rådata: en lång lista med tidsstämplar och URL:er. Det gör den kraftfull för personlig analys men svårare att läsa på en gång, särskilt om din historik sträcker sig över månader eller år.",
    },
    {
      type: "h2",
      text: "Var den finns i exporten",
    },
    {
      type: "p",
      text: "När du packat upp TikTok-exporten grupperas titta-historikdatan under en aktivitetsrelaterad mapp. I en JSON-export hittar du den vanligtvis nästlad så här:",
    },
    {
      type: "ul",
      items: [
        "Activity → Video Browsing History (ibland märkt Watch History),",
        "lagrad i en enda .json-fil tillsammans med andra aktivitetsfiler som Like List och Search History.",
      ],
    },
    {
      type: "p",
      text: "De exakta mappnamnen kan variera något mellan exportversioner. Om du är osäker på hur arkivet är upplagt förklarar vår guide om [[/blog/tiktok-data-export-folders-explained:TikTok-dataexportmappar förklarade]] varje avsnitt. För hela processen att begära och ladda ner, se [[/blog/how-to-download-analyze-tiktok-data:hur du laddar ner och analyserar TikTok-data]].",
    },
    {
      type: "h2",
      text: "JSON-strukturen: VideoList-poster",
    },
    {
      type: "p",
      text: "Inuti filen lagras titta-posterna under en nyckel som vanligtvis heter VideoList. Det är en array av objekt där varje objekt beskriver en sedd video. En enskild post ser ungefär ut så här:",
    },
    {
      type: "ul",
      items: [
        "Date — när videon sågs, t.ex. \"2026-02-14 18:32:07\",",
        "Link — videons URL, t.ex. \"https://www.tiktokv.com/share/video/7300000000000000000/\".",
      ],
    },
    {
      type: "p",
      text: "Den övergripande formen är alltså ett toppnivåobjekt som innehåller arrayen, vilket du kan tänka dig som { \"Video Browsing History\": { \"VideoList\": [ ... ] } }. Varje element i VideoList är en uppspelningshändelse med ett Date- och ett Link-fält. Det finns inga visningsräknare, inga engagemangssiffror och inga bildtexter — bara när och vad.",
    },
    {
      type: "h2",
      text: "Hur du räknar videor manuellt",
    },
    {
      type: "p",
      text: "Det enklaste måttet är det totala antalet sedda videor, vilket är lika med längden på VideoList-arrayen. Du kan ta reda på detta på några sätt:",
    },
    {
      type: "ul",
      items: [
        "öppna filen i en kodredigerare och titta på arrayens längd, eller",
        "ladda den i en webbläsarkonsol med data['Video Browsing History'].VideoList.length, eller",
        "använd ett kommandoradsverktyg för att räkna förekomster av Date-nyckeln.",
      ],
    },
    {
      type: "p",
      text: "Att räkna unika videor är lite svårare, eftersom samma Link kan förekomma mer än en gång om du tittade om en video. För att räkna unika måste du deduplicera på Link-fältet istället för att bara räkna rader.",
    },
    {
      type: "h2",
      text: "Uppskatta sessioner kontra att använda ett verktyg",
    },
    {
      type: "p",
      text: "En \"session\" är en sammanhängande period av tittande. Exporten märker inte sessioner, så du måste härleda dem från Date-tidsstämplarna. Ett vanligt tillvägagångssätt är att sortera poster efter datum och gruppera videor som ligger nära varandra i tid:",
    },
    {
      type: "ul",
      items: [
        "sortera alla poster efter sitt Date-värde,",
        "gå igenom listan och starta en ny session när gapet mellan två på varandra följande videor överstiger ett tröskelvärde (till exempel 30 minuter),",
        "räkna hur många sessioner som uppstår.",
      ],
    },
    {
      type: "p",
      text: "Att göra detta manuellt för tusentals poster är mödosamt och felbenäget. Ett verktyg som [[home:TikTok Wrapped]] utför denna gruppering automatiskt och omvandlar det till läsbara sammanfattningar. Du kan [[example:visa ett exempel på wrapped]] för att se hur resultatet ser ut, eller [[analyze:analysera din egen export]] direkt.",
    },
    {
      type: "h2",
      text: "Vanliga fallgropar",
    },
    {
      type: "h3",
      text: "Datumformat och tidszoner",
    },
    {
      type: "p",
      text: "Date-fältet är en sträng, inte ett riktigt datetime-värde, och det registreras ofta i UTC snarare än din lokala tid. Om du tolkar det utan att ta hänsyn till tidszon kan dina sessionsgränser och resultat för \"mest aktiv timme\" förskjutas med flera timmar.",
    },
    {
      type: "h3",
      text: "Ofullständig historik",
    },
    {
      type: "p",
      text: "Exporten kanske inte inkluderar hela din livstids tittande. TikTok begränsar hur långt tillbaka viss aktivitet sträcker sig, så en tom eller kort VideoList betyder inte alltid att du tittade lite — det kan betyda att exportfönstret var begränsat.",
    },
    {
      type: "h3",
      text: "Stora filer",
    },
    {
      type: "p",
      text: "Flitiga användare kan hamna med titta-historikfiler som är tiotals megabyte stora. Vissa textredigerare har svårt att öppna så stora filer. Om en fil inte öppnas eller fryser din redigerare är det ett tecken på att datan är stor snarare än skadad.",
    },
    {
      type: "h3",
      text: "Skillnader i nyckelnamn",
    },
    {
      type: "p",
      text: "Eftersom TikTok ibland byter namn på nycklar mellan exportversioner kan wrapper-nyckeln runt VideoList skilja sig. Om data['Video Browsing History'] är undefined, inspektera toppnivånycklarna först för att hitta rätt etikett.",
    },
    {
      type: "h2",
      text: "Avslutande tankar",
    },
    {
      type: "p",
      text: "Titta-historikens JSON-fil är en av de mest avslöjande delarna av din TikTok-export. När du förstår att det bara är en VideoList-array av Date- och Link-par blir det enkelt att räkna videor och uppskatta sessioner — även om fallgroparna med tidszon, ofullständig historik och filstorlek är lätta att snubbla på.",
    },
    {
      type: "p",
      text: "Om du hellre vill slippa manuell tolkning kan ett analysverktyg läsa samma fil och presentera resultaten på sekunder.",
    },
  ],
  faq: [
    {
      q: "Var finns titta-historikfilen i TikTok-exporten?",
      a: "Den hittas vanligtvis under en Activity-mapp, ofta kallad Video Browsing History eller Watch History, lagrad som en enda JSON-fil.",
    },
    {
      q: "Vilka fält innehåller varje titta-historikpost?",
      a: "Varje post i VideoList-arrayen innehåller ett Date-fält med tidpunkten videon sågs och ett Link-fält med videons URL.",
    },
    {
      q: "Hur räknar jag hur många videor jag sett?",
      a: "Totalen är lika med antalet poster i VideoList-arrayen. Du kan kontrollera arrayens längd i en kodredigerare eller webbläsarkonsol.",
    },
    {
      q: "Varför verkar tidsstämplarna vara fel med några timmar?",
      a: "Date-fältet registreras ofta i UTC, så det kan skilja sig från din lokala tid om du inte konverterar det till din egen tidszon.",
    },
    {
      q: "Varför är min titta-historikfil så stor?",
      a: "Frekvent tittande ger många poster, så filen kan växa till tiotals megabyte. Stor storlek är normalt och betyder inte att filen är trasig.",
    },
  ],
}
