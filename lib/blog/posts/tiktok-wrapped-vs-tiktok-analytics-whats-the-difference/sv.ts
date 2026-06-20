import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "TikTok Wrapped vs TikTok Analytics: Vad är skillnaden?",
  description:
    'Jämför TikTok Wrapped och TikTok Analytics för att förstå hur de fungerar, vilka data de använder och vilka insikter de ger.',
  intro:
    'TikTok Analytics visar kortsiktiga prestandamätvärden i appen för kreatörer, medan TikTok Wrapped analyserar långsiktiga användningsmönster med hjälp av dataxporter som användaren äger.',
  blocks: [
    {
      type: 'p',
      text: 'TikTok erbjuder inbyggd analys för kreatörer, medan verktyg som TikTok Wrapped fokuserar på att analysera dataxporter som användaren äger. Även om båda hanterar TikTok-data tjänar de helt olika syften.',
    },
    {
      type: 'p',
      text: 'Den här artikeln förklarar skillnaden mellan TikTok Wrapped och TikTok Analytics, hur de fungerar och när det ena kan vara mer användbart än det andra.',
    },
    { type: 'h2', text: 'Vad är TikTok Analytics?' },
    {
      type: 'p',
      text: 'TikTok tillhandahåller TikTok Analytics som en inbyggd funktion i appen, huvudsakligen utformad för kreatörer.',
    },
    { type: 'p', text: 'TikTok Analytics visar vanligtvis:' },
    {
      type: 'ul',
      items: [
        'videovisningar och räckvidd,',
        'följartillväxt,',
        'engagemangsmätvärden (gilla-markeringar, kommentarer, delningar),',
        'kortsiktiga prestandatrender.',
      ],
    },
    {
      type: 'p',
      text: 'Dessa data är aggregerade och begränsade till specifika tidsintervall, vanligtvis de senaste 7–60 dagarna.',
    },
    { type: 'h2', text: 'Vad är TikTok Wrapped?' },
    {
      type: 'p',
      text: "[[home:TikTok Wrapped]] är ett oberoende dataanalysverktyg som fungerar med en användares officiella TikTok-dataexport.",
    },
    {
      type: 'p',
      text: 'I stället för att fokusera på innehållsprestanda analyserar TikTok Wrapped:',
    },
    {
      type: 'ul',
      items: [
        'långsiktig användningshistorik,',
        'aktivitetstidslinjer,',
        'interaktionsbeteende över tid,',
        'mönster baserade på datafiler som användaren äger.',
      ],
    },
    {
      type: 'p',
      text: 'TikTok Wrapped samlar inte in data direkt från TikTok. Det bearbetar endast filer som användare frivilligt laddar ned och laddar upp.',
    },
    { type: 'h2', text: 'Viktiga skillnader i korthet' },
    {
      type: 'table',
      headers: ['Funktion', 'TikTok Analytics', 'TikTok Wrapped'],
      rows: [
        ['Datakälla', 'Mätvärden i appen', 'Användarens dataexport'],
        ['Primär målgrupp', 'Kreatörer', 'Alla TikTok-användare'],
        ['Tidsintervall', 'Kortsiktigt', 'Långsiktigt'],
        ['Fokus', 'Innehållsprestanda', 'Användningsbeteende'],
        ['Dataägarskap', 'Plattformskontrollerat', 'Användarägt'],
        ['Konto krävs', 'Ja', 'Nej'],
      ],
    },
    { type: 'h2', text: 'Datakälla: Plattformsmätvärden vs användarexporter' },
    {
      type: 'p',
      text: 'TikTok Analytics använder plattformskontrollerade mätvärden. Användare ser sammanfattningar som TikTok valt ut, med begränsat historiskt djup.',
    },
    {
      type: 'p',
      text: 'TikTok Wrapped använder dataxporter som användaren äger, vilka:',
    },
    {
      type: 'ul',
      items: [
        'laddas ned direkt från TikTok,',
        'innehåller råa aktivitetsposter,',
        'ger bredare historisk täckning.',
      ],
    },
    {
      type: 'p',
      text: 'Denna skillnad påverkar både datans omfattning och transparens.',
    },
    { type: 'h2', text: 'Skillnader i användningsområde' },
    {
      type: 'step',
      title: 'När TikTok Analytics är användbart',
      items: [
        'Spåra videoprestanda',
        'Övervaka följartillväxt',
        'Optimera publiceringsstrategier',
        'Kortsiktiga innehållsbeslut',
      ],
    },
    {
      type: 'step',
      title: 'När TikTok Wrapped är användbart',
      items: [
        'Förstå långsiktiga användningsvanor',
        'Utforska personliga aktivitetsmönster',
        'Granska historiskt engagemangsbeteende',
        'Personlig analys och reflektion',
      ],
    },
    {
      type: 'p',
      text: 'De två verktygen kompletterar varandra och konkurrerar inte.',
    },
    { type: 'h2', text: 'Integritet och kontroll' },
    { type: 'p', text: 'TikTok Analytics:' },
    {
      type: 'ul',
      items: [
        'fungerar helt inom TikTok,',
        'tillåter inte dataexport på samma detaljnivå,',
        'visar endast utvalda mätvärden.',
      ],
    },
    { type: 'p', text: 'TikTok Wrapped:' },
    {
      type: 'ul',
      items: [
        'fungerar endast med data som användaren väljer att ladda upp,',
        'kräver inte åtkomst till TikTok-kontot,',
        'låter användare behålla fullt dataägarskap.',
      ],
    },
    {
      type: 'p',
      text: 'Integriteten beror på hur ansvarsfullt varje verktyg används.',
    },
    { type: 'h2', text: 'Ersätter TikTok Wrapped TikTok Analytics?' },
    { type: 'p', text: 'Nej.' },
    {
      type: 'p',
      text: 'TikTok Wrapped ersätter inte TikTok Analytics. Det tjänar ett annat analytiskt syfte.',
    },
    {
      type: 'p',
      text: 'TikTok Analytics hjälper kreatörer att optimera innehåll. TikTok Wrapped hjälper användare att förstå beteende och användning över tid.',
    },
    { type: 'h2', text: 'Avslutande tankar' },
    {
      type: 'p',
      text: 'TikTok Analytics och TikTok Wrapped analyserar TikTok-data från olika perspektiv. Det ena fokuserar på innehållsprestanda inne i appen, medan det andra fokuserar på användarägda data utanför appen.',
    },
    {
      type: 'p',
      text: "Att förstå skillnaden hjälper användare att välja rätt verktyg för sina mål — oavsett om det handlar om innehållsoptimering eller personliga insikter.",
    },
  ],
  faq: [
    {
      q: 'Är TikTok Wrapped ett officiellt TikTok-verktyg?',
      a: 'Nej. TikTok Wrapped är en oberoende tjänst och är inte ansluten till TikTok eller ByteDance Ltd.',
    },
    {
      q: 'Använder TikTok Wrapped samma data som TikTok Analytics?',
      a: 'Nej. TikTok Analytics använder prestandamätvärden i appen, medan TikTok Wrapped analyserar TikTok-dataxporter som användaren äger.',
    },
    {
      q: 'Kan icke-kreatörer använda TikTok Analytics?',
      a: 'TikTok Analytics är primärt utformad för kreatörskonton. TikTok Wrapped kan användas av alla TikTok-användare.',
    },
    {
      q: 'Kräver TikTok Wrapped åtkomst till mitt TikTok-konto?',
      a: 'Nej. TikTok Wrapped kräver varken inloggning till TikTok eller beviljande av kontobehörigheter.',
    },
    {
      q: 'Vilket verktyg visar mer långsiktig TikTok-data?',
      a: 'TikTok Wrapped visar vanligtvis mer långsiktig historisk data baserat på vad som ingår i TikTok-dataexporten.',
    },
  ],
}
