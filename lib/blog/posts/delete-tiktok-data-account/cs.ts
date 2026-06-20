import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Jak smazat data a účet TikTok (krok za krokem)",
  description:
    "Zjistěte rozdíl mezi vymazáním dat TikTok, deaktivací a trvalým smazáním účtu, jaká data zůstávají uložena a proč si nejdřív stáhnout export dat.",
  intro:
    "Smazání účtu TikTok je nevratné a odstraní většinu vašich dat, ale liší se od vymazání mezipaměti nebo pouhé deaktivace. Tento průvodce vás provede každou možností krok za krokem a vysvětlí, co se s vašimi daty stane poté.",
  blocks: [
    {
      type: "p",
      text: "Lidé sahají po tlačítku „smazat“ z mnoha důvodů: ochrana soukromí, přestávka od sociálních sítí nebo čistý začátek. Než uděláte cokoli nevratného, je dobré přesně pochopit, jakou akci provádíte a co udělá s vašimi daty.",
    },
    {
      type: "p",
      text: "Tento článek vysvětluje rozdíl mezi vymazáním dat, deaktivací a trvalým smazáním, nabízí číslovaný postup pro žádost o smazání, popisuje, co TikTok po smazání uchovává, a také proč si nejdřív stáhnout závěrečný export dat.",
    },
    { type: "h2", text: "Vymazání mezipaměti vs. deaktivace vs. smazání" },
    {
      type: "p",
      text: "Tyto tři akce se často pletou, ale mají velmi odlišné důsledky:",
    },
    {
      type: "ul",
      items: [
        "Vymazání mezipaměti nebo dat odstraní dočasné soubory uložené ve vašem zařízení. Váš účet, videa a historie zůstávají nedotčeny – uvolníte jen místní úložiště a obnovíte některé chování aplikace.",
        "Deaktivace skryje váš profil a pozastaví účet, aniž by ho smazala. Jde o první fázi, kterou TikTok používá před trvalým smazáním, a přihlášením zpět ji lze zrušit.",
        "Trvalé smazání odstraní váš profil, videa a většinu souvisejících dat z TikToku po uplynutí ochranné lhůty. Tuto akci nelze po jejím skončení vrátit zpět.",
      ],
    },
    {
      type: "p",
      text: "Pokud chcete jen čistší aplikaci nebo více úložného prostoru, vymazání mezipaměti obvykle stačí. Smazání je vhodné tehdy, když chcete svou přítomnost a data odstranit úplně.",
    },
    { type: "h2", text: "Jak vymazat mezipaměť TikToku" },
    {
      type: "p",
      text: "Vymazání mezipaměti je nejlehčí možnost a dobrý první krok, pokud ještě nejste připraveni odejít:",
    },
    {
      type: "ul",
      items: [
        "Otevřete TikTok a přejděte na svůj Profil.",
        "Klepněte na ikonu nabídky a otevřete Nastavení a soukromí.",
        "Zvolte Uvolnit místo (někdy zobrazeno pod Mezipaměť a mobilní data).",
        "Klepněte na Vymazat vedle položky Mezipaměť.",
      ],
    },
    {
      type: "p",
      text: "Tím se odstraní pouze dočasné soubory. Váš účet, uložená videa a historie sledování zůstanou beze změny.",
    },
    { type: "h2", text: "Stáhněte si závěrečný export dat před smazáním" },
    {
      type: "p",
      text: "Toto je nejdůležitější krok a snadno se na něj zapomíná. Jakmile je váš účet trvale smazán, nelze již o export dat požádat. Možnost archivovat vaši aktivitu se uzavírá spolu s účtem.",
    },
    {
      type: "p",
      text: "Závěrečný export vám umožní uchovat osobní kopii vaší historie sledování, historii vyhledávání, záznamy o přihlášeních a další aktivitu. Později ji také můžete analyzovat pro vlastní reflexi nebo ze zvědavosti.",
    },
    {
      type: "p",
      text: "Pokud jste o export ještě nikdy nežádali, náš průvodce [[/blog/how-to-download-analyze-tiktok-data:jak stáhnout a analyzovat data TikToku]] vás provede celým procesem žádosti. Až bude soubor připraven, můžete ho nahrát do [[analyze:TikTok Wrapped]] a přeměnit surová data v přehledné shrnutí – nebo si nejdřív prohlédněte, jak to vypadá, na stránce [[example:ukázkového wrapu]].",
    },
    { type: "h2", text: "Krok za krokem: Jak požádat o smazání účtu" },
    {
      type: "h3",
      text: "Krok 1: Zazálohujte svá data",
    },
    {
      type: "p",
      text: "Vyžádejte si a stáhněte export dat TikToku a uložte si videa, která chcete uchovat. Po smazání již tento obsah z TikToku obnovit nelze.",
    },
    {
      type: "h3",
      text: "Krok 2: Otevřete Nastavení a soukromí",
    },
    {
      type: "p",
      text: "Přejděte na svůj Profil, klepněte na ikonu nabídky v horním rohu a otevřete Nastavení a soukromí.",
    },
    {
      type: "h3",
      text: "Krok 3: Otevřete nastavení účtu",
    },
    {
      type: "p",
      text: "Klepněte na Účet a přejetím dolů najděte možnost Deaktivovat nebo smazat účet.",
    },
    {
      type: "h3",
      text: "Krok 4: Zvolte smazání a ověřte totožnost",
    },
    {
      type: "p",
      text: "Vyberte Trvale smazat účet a postupujte podle pokynů k ověření. TikTok vás může požádat o potvrzení kódem zaslaným na váš telefon nebo e-mail.",
    },
    {
      type: "h3",
      text: "Krok 5: Potvrďte smazání",
    },
    {
      type: "p",
      text: "Přečtěte si oznámení na obrazovce o době deaktivace a pak potvrďte. Váš účet vstoupí do ochranné lhůty, než bude trvale odstraněn.",
    },
    {
      type: "p",
      text: "Názvy položek nabídky se mohou mírně lišit podle verze aplikace a regionu, ale cesta přes Nastavení a soukromí k Účtu zůstává stejná.",
    },
    { type: "h2", text: "Jaká data jsou uchovávána a jak dlouho" },
    {
      type: "p",
      text: "Smazání není okamžité. TikTok nejprve deaktivuje účet na ochrannou lhůtu, obvykle přibližně 30 dní. Pokud se v tomto období znovu přihlásíte, smazání se zruší a účet se obnoví.",
    },
    {
      type: "p",
      text: "Po uplynutí ochranné lhůty jsou váš profil a většina souvisejícího obsahu trvale odstraněny. Některé informace však mohou být uchovávány déle:",
    },
    {
      type: "ul",
      items: [
        "Omezené záznamy uchované za účelem plnění zákonných povinností nebo řešení sporů.",
        "Informace potřebné k předcházení podvodům nebo k zajištění bezpečnosti platformy.",
        "Data již veřejně sdílená nebo sdílená s jinými uživateli, která existují mimo váš profil.",
        "Kopie v systémových zálohách, jejichž vymazání může trvat delší dobu.",
      ],
    },
    {
      type: "p",
      text: "Přesné doby uchovávání jsou popsány v zásadách ochrany soukromí TikToku a mohou se v průběhu času měnit. Praktickým závěrem je, že „trvalé“ neznamená vždy „okamžité“ a malé množství dat může z důvodu shody s předpisy přetrvávat.",
    },
    { type: "h2", text: "Hlediska ochrany soukromí" },
    {
      type: "p",
      text: "Smazání účtu je silným krokem k ochraně soukromí, ale je dobré mít na paměti několik detailů:",
    },
    {
      type: "ul",
      items: [
        "Obsah, který si ostatní stáhli, vytvořili screenshot nebo znovu sdíleli, je mimo kontrolu TikToku a smazáním účtu se neodstraní.",
        "Přímé zprávy se mohou stále zobrazovat na straně druhého účastníka konverzace.",
        "Aplikace třetích stran, které jste připojili k TikToku, mohou mít vlastní kopie dat, k nimž jste jim udělili přístup.",
        "Váš stažený export dat je nyní vaší odpovědností a musíte ho bezpečně uložit.",
      ],
    },
    {
      type: "p",
      text: "Více o zodpovědném zacházení s exportem najdete v našem průvodci, zda je [[/blog/is-it-safe-to-upload-tiktok-data-online:bezpečné nahrávat data TikToku online]].",
    },
    { type: "h2", text: "Závěrečné myšlenky" },
    {
      type: "p",
      text: "Vymazání mezipaměti, deaktivace a trvalé smazání jsou tři samostatné akce s velmi odlišnými důsledky. Vědět, kterou z nich volíte, zabrání nechtěné ztrátě dat a nepříjemným překvapením.",
    },
    {
      type: "p",
      text: "Pokud je vaším cílem smazání, nejdříve si stáhněte závěrečný export dat. Je to jediný způsob, jak si uchovat záznam o vaší historii na TikToku, a i po zrušení účtu ho můžete dále prozkoumat pomocí [[home:TikTok Wrapped]].",
    },
  ],
  faq: [
    {
      q: "Jaký je rozdíl mezi vymazáním dat TikToku a smazáním účtu?",
      a: "Vymazání mezipaměti nebo dat odstraní pouze dočasné soubory uložené ve vašem zařízení a ponechá váš účet aktivní. Smazání účtu trvale odstraní váš profil, videa a většinu souvisejících dat z TikToku po uplynutí doby deaktivace.",
    },
    {
      q: "Jak dlouho trvá trvalé smazání účtu TikTok?",
      a: "TikTok nejprve deaktivuje účet na ochrannou lhůtu, obvykle přibližně 30 dní. Pokud se v tomto období znovu nepřihlásíte, účet a většina souvisejících dat jsou poté trvale smazány.",
    },
    {
      q: "Mám si před smazáním účtu stáhnout data z TikToku?",
      a: "Ano. Jakmile je váš účet trvale smazán, nelze již o export dat požádat. Stažení závěrečné kopie předem je jediný způsob, jak si uchovat osobní archiv vaší historie aktivit.",
    },
    {
      q: "Jaká data TikTok uchovává po smazání?",
      a: "Většina obsahu profilu je odstraněna, ale TikTok může po určitou dobu uchovávat omezené informace z důvodu plnění zákonných povinností, prevence podvodů nebo řešení sporů, jak je popsáno v jeho zásadách ochrany soukromí. Zálohy mohou rovněž potřebovat delší dobu k vymazání.",
    },
    {
      q: "Mohu používat TikTok Wrapped po smazání účtu?",
      a: "Ano, pokud jste si před smazáním stáhli export dat z TikToku. TikTok Wrapped analyzuje exportovaný soubor, který nahrajete, takže nepotřebuje přístup k aktivnímu účtu TikTok.",
    },
  ],
}
