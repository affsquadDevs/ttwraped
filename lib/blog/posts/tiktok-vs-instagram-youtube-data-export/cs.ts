import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'TikTok vs Instagram vs YouTube: Porovnání exportů dat',
  description:
    'Porovnejte, jak TikTok, Instagram a YouTube umožňují stáhnout vaše data: jak požádat o export, doba doručení, formáty a který export se nejlépe analyzuje.',
  intro:
    'TikTok, Instagram i YouTube vám umožňují stáhnout kopii vašich osobních dat, ale proces žádosti, doba doručení, formáty souborů a úroveň podrobností se mezi platformami výrazně liší.',
  blocks: [
    {
      type: 'p',
      text: 'Pokud jste někdy chtěli ohlédnout za svou vlastní aktivitou — co jste sledovali, co jste hledali a jak jste aplikaci používali v průběhu let — většina velkých platforem vám nyní umožňuje tato data vyžádat. Je to částečně způsobeno předpisy na ochranu soukromí, jako jsou GDPR a CCPA, které uživatelům dávají právo přistupovat k informacím, které o nich daná služba uchovává.',
    },
    {
      type: 'p',
      text: 'Tento průvodce porovnává zkušenost s exportem dat na třech největších platformách: TikTok, Instagram a YouTube. Podíváme se na to, jak o každý export požádat, jak dlouho trvá doručení, jaké formáty obdržíte a co každý archiv o vaší aktivitě skutečně prozrazuje.',
    },
    { type: 'h2', text: 'Jak požádat o jednotlivé exporty' },
    {
      type: 'p',
      text: 'Každá platforma ukrývá možnost stažení v nastavení soukromí nebo účtu, ale cesta se mírně liší.',
    },
    {
      type: 'ul',
      items: [
        "TikTok: Otevřete Nastavení a soukromí → Účet → Stáhnout vaše data, zvolte formát a požádejte o soubor.",
        'Instagram: Přejděte do Nastavení → Centrum účtů → Vaše informace a oprávnění → Stáhnout vaše informace.',
        'YouTube: Použijte Google Takeout, vyberte YouTube a YouTube Music a zvolte, co chcete zahrnout (historii, komentáře, playlisty).',
      ],
    },
    {
      type: 'p',
      text: "TikTok vše uchovává přímo ve vlastní aplikaci, Instagram vás přesměruje přes sdílené Centrum účtů Meta a YouTube přenechává tuto úlohu Google Takeout, který na jednom místě pokrývá všechny produkty Google.",
    },
    { type: 'h2', text: 'Doba doručení' },
    {
      type: 'p',
      text: 'Žádný z těchto exportů není okamžitý, protože platformy musí zabalit potenciálně roky aktivity do stahovatelného archivu.',
    },
    {
      type: 'p',
      text: 'TikTok obvykle doručuje nejrychleji — často během několika hodin až pár dní, přičemž soubor se objeví přímo v aplikaci ke stažení. Instagram a YouTube mohou trvat od několika hodin až po několik dní v závislosti na velikosti účtu a požadovaném časovém rozsahu. Větší archivy, zejména ty, které obsahují média, trvá připravit déle.',
    },
    { type: 'h2', text: 'Formáty souborů' },
    {
      type: 'p',
      text: 'Formát, který obdržíte, je velmi důležitý, pokud plánujete data později analyzovat.',
    },
    {
      type: 'ul',
      items: [
        'TikTok vám umožňuje vybrat si mezi JSON (strojově čitelný, ideální pro analýzu) a TXT/HTML (snadnější čtení ručně).',
        'Instagram nabízí JSON nebo HTML, přičemž HTML se otevírá jako webové stránky a JSON je vhodnější pro nástroje.',
        'YouTube doručuje historii jako JSON nebo HTML a ostatní položky jako CSV, vše zabalené v archivu ZIP.',
      ],
    },
    {
      type: 'p',
      text: 'Pokud je vaším cílem aktivitu analyzovat, nikoli jen prohlédnout, vždy zvolte JSON, pokud tato možnost existuje.',
    },
    { type: 'h2', text: 'Srovnání vedle sebe' },
    {
      type: 'table',
      headers: ['Funkce', 'TikTok', 'Instagram', 'YouTube'],
      rows: [
        ['Způsob žádosti', 'Nastavení v aplikaci', 'Centrum účtů', 'Google Takeout'],
        ['Doba doručení', 'Hodiny až ~2 dny', 'Hodiny až několik dní', 'Hodiny až několik dní'],
        ['Formát', 'JSON nebo TXT/HTML', 'JSON nebo HTML', 'JSON, HTML, CSV'],
        [
          'Detail historie sledování',
          'Vysoký (časové razítko u každého videa)',
          'Omezený (žádný log videí ve feedu)',
          'Vysoký (časové razítko u každého videa)',
        ],
        ['Historie vyhledávání', 'Zahrnuta', 'Zahrnuta', 'Zahrnuta'],
      ],
    },
    { type: 'h2', text: 'Co každý export odhaluje' },
    {
      type: 'h3',
      text: 'Podrobnost historie sledování',
    },
    {
      type: 'p',
      text: "TikTok i YouTube zaznamenávají podrobný protokol sledovaných videí s časovými razítky, díky čemuž je možné zpětně rekonstruovat návyky při sledování. Export Instagramu je v tomto ohledu slabší — zachycuje interakce a některá data o sledování, ale neposkytuje stejně přehlednou historii feedu pro každé video jako TikTok.",
    },
    {
      type: 'h3',
      text: 'Historie vyhledávání',
    },
    {
      type: 'p',
      text: 'Všechny tři platformy zahrnují vaše vyhledávací dotazy, takže můžete vidět, jaká témata, tvůrce a zvuky jste hledali. Toto je jedna z nejkonzistentnějších sekcí napříč exporty.',
    },
    {
      type: 'h3',
      text: 'Zprávy a interakce',
    },
    {
      type: 'p',
      text: 'TikTok i Instagram zahrnují přímé zprávy a záznamy o angažovanosti, jako jsou lajky, komentáře a sledování. YouTube se zaměřuje více na komentáře, odběry a playlisty, protože primárně není platformou pro zasílání zpráv.',
    },
    { type: 'h2', text: 'Který export se nejlépe analyzuje?' },
    {
      type: 'p',
      text: 'Z hlediska analytické hodnoty vedou TikTok a YouTube, protože oba poskytují podrobné historie sledování s časovými razítky ve formátu JSON. Tento strukturovaný formát umožňuje nástroji snadno počítat videa, nacházet špičkové hodiny a odhalovat vzorce.',
    },
    {
      type: 'p',
      text: "Export Instagramu je přehledně uspořádaný, ale méně zaměřený na průběžné sledování videí, takže vypráví jiný příběh — více o interakcích než o pasivním sledování.",
    },
    {
      type: 'p',
      text: 'V praxi jsou raw exportní soubory samy o sobě těžko čitelné. Právě zde pomáhá nástroj pro sumarizaci. [[home:TikTok Wrapped]] vezme export dat z TikToku a převede ho na přehledné vizuální poznatky o vaší aktivitě. Můžete [[analyze:analyzovat vlastní export]] nebo si nejprve prohlédnout [[example:ukázku wrapped]] a zjistit, jak výsledky vypadají.',
    },
    { type: 'h2', text: 'Závěrečné myšlenky' },
    {
      type: 'p',
      text: 'TikTok, Instagram i YouTube respektují vaše právo stáhnout si svá data, ale liší se v tom, jak snadný tento proces je a jak užitečný výsledek je pro analýzu. TikTok a YouTube vynikají podrobnou historií sledování, zatímco Instagram nabízí širší pohled na interakce.',
    },
    {
      type: 'p',
      text: 'Pokud chcete jít více do hloubky, přečtěte si naše průvodce o [[/blog/how-to-download-analyze-tiktok-data:tom, jak stáhnout a analyzovat data z TikToku]] a o rozdílu mezi [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:TikTok Wrapped a TikTok Analytics]].',
    },
  ],
  faq: [
    {
      q: 'Jak požádám o svá data z TikToku, Instagramu a YouTube?',
      a: 'TikTok nabízí tuto možnost přímo v Nastavení a soukromí pod položkou Stáhnout vaše data. Instagram používá Centrum účtů pod položkou Stáhnout vaše informace. YouTube používá Google Takeout, kde vyberete YouTube a YouTube Music.',
    },
    {
      q: 'Jak dlouho trvá doručení každého datového exportu?',
      a: 'TikTok je obvykle nejrychlejší, často během několika hodin až přibližně dvou dní. Instagram a YouTube mohou trvat od několika hodin až po několik dní v závislosti na velikosti účtu a požadovaném časovém rozsahu.',
    },
    {
      q: 'Jaký formát bych měl/a zvolit pro analýzu?',
      a: 'Kdykoli je to možné, zvolte JSON. JSON je strojově čitelný a nejlépe funguje s analytickými nástroji, zatímco HTML a TXT jsou snadněji čitelné ručně, ale hůře zpracovatelné.',
    },
    {
      q: 'Která platforma poskytuje nejpodrobnější historii sledování?',
      a: 'TikTok i YouTube poskytují podrobné historie sledování s časovými razítky. Instagram zachycuje interakce, ale nenabízí stejnou historii feedu pro každé video.',
    },
    {
      q: 'Který export se nejlépe analyzuje?',
      a: 'TikTok a YouTube se analyzují nejsnáze, protože jejich strukturované JSON historie sledování umožňují jednoduše počítat videa a nacházet vzorce. Nástroj jako TikTok Wrapped dokáže převést export z TikToku na přehledné vizuální poznatky.',
    },
  ],
}
