import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'Vad varje mapp i TikTok-dataexporten betyder (guide 2026)',
  description:
    'En tydlig genomgång av varje mapp och JSON-sektion i TikTok-dataexporten, vad var och en innehåller och vilka delar TikTok Wrapped läser.',
  intro:
    'TikTok-dataexporten är organiserad i en uppsättning mappar och JSON-sektioner — Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings och TikTok Live — och var och en lagrar en annan del av din kontohistorik.',
  blocks: [
    {
      type: 'p',
      text: 'När du begär dina uppgifter från TikTok och öppnar nedladdningen kan innehållet se överväldigande ut. Oavsett om du får en enda stor JSON-fil eller en strukturerad mapp med filer är informationen grupperad i förutsägbara sektioner. När du förstår hur dessa sektioner motsvarar din faktiska aktivitet blir exporten lätt att navigera.',
    },
    {
      type: 'p',
      text: 'Den här guiden går igenom varje mapp och JSON-sektion på toppnivå i exporten, förklarar vad den innehåller på vardagligt språk och visar vilka delar [[home:TikTok Wrapped]] faktiskt läser för att skapa din sammanfattning. Om du ännu inte har laddat ned dina uppgifter kan du läsa vår steg-för-steg-genomgång om [[/blog/how-to-download-analyze-tiktok-data:hur du laddar ned och analyserar dina TikTok-data]].',
    },
    { type: 'h2', text: 'Profile' },
    {
      type: 'p',
      text: 'Sektionen Profile innehåller din grundläggande kontoinformation: användarnamn, profilnamn, biografi, den e-postadress eller det telefonnummer som är kopplat till kontot samt uppgifter om när kontot skapades. Den beskriver vem du är på plattformen snarare än vad du har gjort.',
    },
    {
      type: 'p',
      text: 'Den här sektionen är liten men användbar för att märka en rapport. Den innehåller inte ditt lösenord — TikTok inkluderar aldrig inloggningsuppgifter i en export.',
    },
    { type: 'h2', text: 'Activity (Your Activity)' },
    {
      type: 'p',
      text: 'Sektionen Activity — ibland märkt "Your Activity" — är kärnan i exporten och vanligtvis den största delen. Den är uppdelad i flera undersektioner som registrerar allt du har gjort medan du surfar:',
    },
    {
      type: 'ul',
      items: [
        'Watch History — en tidsstämplad lista över de videor du har tittat på.',
        'Like List — de videor du gillat, med datum.',
        'Search History — de söktermer du har använt.',
        'Share History — innehåll du delat och var.',
        'Following / Follower List — konton du följer och konton som följer dig.',
        'Favorite videos, sounds, and hashtags — objekt du har bokmärkt.',
      ],
    },
    {
      type: 'p',
      text: "Eftersom den är tidsstämplad är det här sektionen som möjliggör långsiktig mönsteranalys. De flesta insikterna i en TikTok Wrapped-sammanfattning — dina mest tittade perioder, favoritkreatörer och tittarvolym — kommer härifrån.",
    },
    { type: 'h2', text: 'Comments' },
    {
      type: 'p',
      text: 'Sektionen Comments listar de kommentarer du har publicerat på andra videor, tillsammans med deras tidsstämplar. Den återspeglar hur du har interagerat offentligt med innehåll över tid.',
    },
    { type: 'h2', text: 'Direct Messages' },
    {
      type: 'p',
      text: 'Sektionen Direct Messages innehåller din privata chatthistorik grupperad efter konversation. Det här är den mest personliga delen av exporten, varför den förtjänar extra omsorg när du delar filer. TikTok Wrapped behöver inte och läser inte dina direktmeddelanden.',
    },
    { type: 'h2', text: 'Video (Your Posts)' },
    {
      type: 'p',
      text: 'Sektionen Video — ofta märkt "Posts" — täcker det innehåll du själv har publicerat: dina uppladdade videor, bildtexter och tillhörande metadata. För kreatörer dokumenterar den här sektionen deras publiceringshistorik, medan den för tittare kan vara liten eller tom.',
    },
    { type: 'h2', text: 'Ads and Data' },
    {
      type: 'p',
      text: 'Sektionen Ads and Data registrerar reklamrelaterade signaler, inklusive Off TikTok Activity-data — information som andra appar och webbplatser har delat med TikTok om din aktivitet utanför appen. Den inkluderar även annonsintressen och annonseringsinteraktioner som används för riktad marknadsföring.',
    },
    {
      type: 'p',
      text: 'Om du vill ha en djupare inblick i vad dessa signaler avslöjar går vår artikel om [[/blog/what-data-does-tiktok-collect:vilka uppgifter TikTok samlar in]] igenom kategorierna i detalj.',
    },
    { type: 'h2', text: 'App Settings' },
    {
      type: 'p',
      text: 'Sektionen App Settings lagrar dina inställningar: sekretessinställningar, meddelandeval, språk och liknande konfiguration. Den beskriver hur ditt konto är inställt snarare än hur du har använt det, så den påverkar sällan analysen.',
    },
    { type: 'h2', text: 'TikTok Live' },
    {
      type: 'p',
      text: 'Sektionen TikTok Live fångar aktivitet kopplad till liveströmmar — strömmar du har hostat eller deltagit i, samt relaterade interaktioner. För de flesta tittare är den här sektionen liten, men för aktiva streamers kan den vara ett meningsfullt register.',
    },
    { type: 'h2', text: 'Mapp-för-mapp-referens' },
    {
      type: 'p',
      text: 'Tabellen nedan mappar varje mapp eller JSON-sektion till vad den innehåller och vad TikTok Wrapped läser från den. Du kan också se vilken typ av utdata den ger på vår [[example:exempel på wrapped]]-sida.',
    },
    {
      type: 'table',
      headers: ['Mapp / Sektion', 'Vad den innehåller', 'Vad TikTok Wrapped läser'],
      rows: [
        ['Profile', 'Användarnamn, biografi, kontouppgifter', 'Visningsnamn för rapporten'],
        ['Activity — Watch History', 'Tidsstämplade visade videor', 'Tittarvolym och trender'],
        ['Activity — Like List', 'Videor du gillat, med datum', 'Gillningsvanor över tid'],
        ['Activity — Search History', 'Söktermer du har använt', 'Toppsökningar och intressen'],
        ['Activity — Following / Follower', 'Konton du följer och följare', 'Favoritkreatörer'],
        ['Comments', 'Kommentarer du har publicerat', 'Engagemangsantal (valfritt)'],
        ['Direct Messages', 'Privat chatthistorik', 'Läses inte'],
        ['Video / Posts', 'Videor du har publicerat', 'Publiceringshistorik (kreatörer)'],
        ['Ads and Data', 'Off TikTok Activity, annonsintressen', 'Läses inte'],
        ['App Settings', 'Sekretess- och appinställningar', 'Läses inte'],
        ['TikTok Live', 'Liveströmsaktivitet', 'Läses inte'],
      ],
    },
    { type: 'h2', text: 'En notering om integritet' },
    {
      type: 'p',
      text: 'Din export innehåller känsliga sektioner — särskilt Direct Messages och Ads and Data — som aldrig behövs för att generera en användningssammanfattning. TikTok Wrapped fokuserar på de tidsstämplade Activity-data och ignorerar privata meddelanden och reklamregister helt och hållet. Du behåller kontrollen över filen och kan radera känsliga mappar innan du laddar upp något någonstans. När du är redo kan du [[analyze:analysera din wrapped]] med bara aktivitetsfilerna.',
    },
    { type: 'h2', text: 'Avslutande tankar' },
    {
      type: 'p',
      text: "TikTok-dataexporten ser bara komplicerad ut tills du känner till kartan. Varje mapp svarar på en enda fråga — vem du är, vad du tittade på, vad du publicerade, vem du pratade med eller hur ditt konto är konfigurerat. Att veta vilka sektioner som är viktiga låter dig analysera de delar du bryr dig om och lämna de privata orörda.",
    },
  ],
  faq: [
    {
      q: 'Hur är TikTok-dataexporten organiserad?',
      a: 'Exporten är grupperad i sektioner som Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings och TikTok Live, där var och en lagrar en annan del av din kontohistorik.',
    },
    {
      q: 'Vilken mapp innehåller min tittarhistorik?',
      a: 'Din tittarhistorik finns i sektionen Activity, ofta märkt Your Activity, tillsammans med din Like List, Search History och Following-listor.',
    },
    {
      q: 'Innehåller TikTok-dataexporten mitt lösenord?',
      a: 'Nej. TikTok inkluderar aldrig kontolösenord eller inloggningsuppgifter i en dataexport. Sektionen Profile innehåller bara grundläggande kontoinformation.',
    },
    {
      q: 'Läser TikTok Wrapped mina direktmeddelanden?',
      a: 'Nej. TikTok Wrapped fokuserar på de tidsstämplade Activity-data och läser inte dina Direct Messages eller Ads and Data-sektioner.',
    },
    {
      q: 'Vad är Off TikTok Activity-data?',
      a: 'Off TikTok Activity finns i sektionen Ads and Data och registrerar information som andra appar och webbplatser har delat med TikTok om din aktivitet utanför appen.',
    },
  ],
}
