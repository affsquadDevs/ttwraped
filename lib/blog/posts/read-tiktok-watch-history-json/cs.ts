import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Jak číst soubor JSON s historií sledování TikToku",
  description:
    "Zjistěte, co je soubor JSON s historií sledování TikToku, kde se nachází v exportu dat a jak číst jeho strukturu pro počítání videí a relací.",
  intro:
    "Soubor s historií sledování TikToku je prostý textový JSON záznam každého přehraného videa, uložený v exportu dat, který si z TikToku můžete stáhnout. Jakmile pochopíte jeho strukturu, můžete ho číst, počítat videa a dokonce sami odhadovat délku jednotlivých relací sledování.",
  blocks: [
    {
      type: "p",
      text: "Když si od TikToku vyžádáte svá data a zvolíte formát JSON, export dorazí jako archiv ZIP obsahující několik souborů. Jedním z nejzajímavějších je soubor s historií sledování, který vypisuje videa, která jste v průběhu času zhlédli. Tento průvodce vám ukáže, kde soubor najdete, jak je jeho JSON uspořádán a jak ho správně interpretovat.",
    },
    {
      type: "h2",
      text: "Co je soubor s historií sledování",
    },
    {
      type: "p",
      text: "Soubor s historií sledování je protokol videí, která se přehrála ve vašich kanálech Pro vás a Sledované. Každý záznam představuje jedno video, které TikTok evidoval jako zhlédnuté, spolu s časem přehrání a odkazem na původní video.",
    },
    {
      type: "p",
      text: "Nejde o analytický přehled. Jsou to surová data: dlouhý seznam časových razítek a URL adres. To je sice silná stránka pro osobní analýzu, ale na první pohled jsou hůře čitelná, zvláště pokud vaše historie sahá měsíce nebo roky zpět.",
    },
    {
      type: "h2",
      text: "Kde se soubor v exportu nachází",
    },
    {
      type: "p",
      text: "Po rozbalení exportu TikToku jsou data historie sledování seskupena ve složce relacionované s aktivitou. V JSON exportu je obvykle najdete vnořené takto:",
    },
    {
      type: "ul",
      items: [
        "Activity → Video Browsing History (někdy označeno jako Watch History),",
        "uloženo v jediném souboru .json vedle dalších souborů s aktivitami, jako jsou Like List a Search History.",
      ],
    },
    {
      type: "p",
      text: "Přesné názvy složek se mohou mezi verzemi exportu mírně lišit. Pokud si nejste jisti rozložením archivu, náš průvodce [[/blog/tiktok-data-export-folders-explained:vysvětlením složek exportu dat TikToku]] podrobně popisuje každou sekci. Pro celý postup vyžádání a stažení viz [[/blog/how-to-download-analyze-tiktok-data:jak stáhnout a analyzovat data z TikToku]].",
    },
    {
      type: "h2",
      text: "Struktura JSON: záznamy VideoList",
    },
    {
      type: "p",
      text: "Uvnitř souboru jsou záznamy sledování uloženy pod klíčem obvykle pojmenovaným VideoList. Jde o pole objektů, kde každý objekt popisuje jedno zhlédnuté video. Jeden záznam vypadá přibližně takto:",
    },
    {
      type: "ul",
      items: [
        'Date — kdy bylo video zhlédnuto, např. "2026-02-14 18:32:07",',
        'Link — URL adresa videa, např. "https://www.tiktokv.com/share/video/7300000000000000000/".',
      ],
    },
    {
      type: "p",
      text: 'Celková podoba je tedy objekt nejvyšší úrovně obsahující pole, které si lze představit jako { "Video Browsing History": { "VideoList": [ ... ] } }. Každý prvek VideoList je jedna událost přehrání s polem Date a Link. Nejsou zde žádné počty zhlédnutí, čísla o zapojení ani titulky — pouze kdy a co.',
    },
    {
      type: "h2",
      text: "Jak ručně počítat videa",
    },
    {
      type: "p",
      text: "Nejjednodušší metrika je celkový počet zhlédnutých videí, který se rovná délce pole VideoList. Zjistit ho můžete několika způsoby:",
    },
    {
      type: "ul",
      items: [
        "otevřete soubor v editoru kódu a podívejte se na délku pole, nebo",
        "načtěte ho v konzoli prohlížeče pomocí data['Video Browsing History'].VideoList.length, nebo",
        "použijte nástroj příkazového řádku pro počítání výskytů klíče Date.",
      ],
    },
    {
      type: "p",
      text: "Počítání unikátních videí je o něco složitější, protože stejný Link se může objevit víckrát, pokud jste video sledovali opakovaně. Chcete-li počítat unikátní videa, musíte deduplikovat podle pole Link, nikoli jen počítat řádky.",
    },
    {
      type: "h2",
      text: "Odhadování relací vs. použití nástroje",
    },
    {
      type: "p",
      text: '"Relace" je úsek nepřerušovaného sledování. Export relace neoznačuje, takže je musíte odvodit z časových razítek Date. Běžný přístup je seřadit záznamy podle data a seskupit videa, která jsou časově blízko sebe:',
    },
    {
      type: "ul",
      items: [
        "seřaďte všechny záznamy podle hodnoty Date,",
        "procházejte seznam a začněte novou relaci vždy, když mezera mezi dvěma po sobě jdoucími videi překročí stanovenou mez (například 30 minut),",
        "spočítejte, kolik relací vzniklo.",
      ],
    },
    {
      type: "p",
      text: "Dělat to ručně u tisíců záznamů je zdlouhavé a náchylné k chybám. Nástroj jako [[home:TikTok Wrapped]] toto seskupování provádí automaticky a přeměňuje výsledky v přehledné souhrny. Můžete si [[example:prohlédnout ukázkový wrapped]] a zjistit, jak výstup vypadá, nebo [[analyze:analyzovat vlastní export]] přímo.",
    },
    {
      type: "h2",
      text: "Časté nástrahy",
    },
    {
      type: "h3",
      text: "Formáty data a časová pásma",
    },
    {
      type: "p",
      text: 'Pole Date je řetězec, nikoli skutečný datetime, a bývá zaznamenáno v UTC, nikoli ve vašem místním čase. Pokud ho analyzujete bez zohlednění časového pásma, mohou se hranice relací a výsledky "nejaktivnější hodiny" posunout o několik hodin.',
    },
    {
      type: "h3",
      text: "Neúplná historie",
    },
    {
      type: "p",
      text: "Export nemusí obsahovat celou vaši historii sledování. TikTok omezuje, jak daleko zpět některé aktivity sahají, takže prázdný nebo krátký VideoList neznamená vždy, že jste toho málo sledovali — může to znamenat, že bylo okno exportu omezené.",
    },
    {
      type: "h3",
      text: "Velké soubory",
    },
    {
      type: "p",
      text: "Intenzivní uživatelé mohou mít soubory s historií sledování o velikosti desítek megabajtů. Některé textové editory mají s otevíráním tak velkých souborů potíže. Pokud se soubor neotevře nebo editor zamrzne, jde o příznak velkého množství dat, nikoli o poškozený soubor.",
    },
    {
      type: "h3",
      text: "Rozdíly v pojmenování klíčů",
    },
    {
      type: "p",
      text: "Protože TikTok příležitostně přejmenovává klíče mezi verzemi exportu, obalový klíč kolem VideoList se může lišit. Pokud je data['Video Browsing History'] undefined, nejprve zkontrolujte klíče nejvyšší úrovně a najděte správný název.",
    },
    {
      type: "h2",
      text: "Závěrečné myšlenky",
    },
    {
      type: "p",
      text: "Soubor JSON s historií sledování je jednou z nejodhalovacích částí vašeho exportu z TikToku. Jakmile pochopíte, že jde jen o pole VideoList párů Date a Link, počítání videí a odhadování relací se stane přímočarým — i když nástrahy s časovými pásmy, neúplnou historií a velikostí souborů mohou snadno překvapit.",
    },
    {
      type: "p",
      text: "Pokud nechcete ručně analyzovat soubor, analytický nástroj přečte stejný soubor a výsledky vám během vteřin přehledně zobrazí.",
    },
  ],
  faq: [
    {
      q: "Kde najdu soubor s historií sledování v exportu TikToku?",
      a: "Obvykle se nachází ve složce Activity, často pojmenované Video Browsing History nebo Watch History, uložené jako jediný soubor JSON.",
    },
    {
      q: "Jaká pole obsahuje každý záznam v historii sledování?",
      a: "Každý záznam v poli VideoList obsahuje pole Date s časem zhlédnutí videa a pole Link s URL adresou videa.",
    },
    {
      q: "Jak zjistím, kolik videí jsem sledoval?",
      a: "Celkový počet se rovná počtu záznamů v poli VideoList. Délku pole můžete zkontrolovat v editoru kódu nebo v konzoli prohlížeče.",
    },
    {
      q: "Proč jsou časová razítka posunutá o několik hodin?",
      a: "Pole Date bývá zaznamenáno v UTC, takže se může lišit od vašeho místního času, pokud ho nepřevedete do vlastního časového pásma.",
    },
    {
      q: "Proč je můj soubor s historií sledování tak velký?",
      a: "Časté sledování vytváří mnoho záznamů, takže soubor může dorůst do desítek megabajtů. Velká velikost je normální a neznamená, že je soubor poškozený.",
    },
  ],
}
