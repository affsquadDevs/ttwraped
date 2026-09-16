import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "TikTok Wrapped 2026: Jak získat svůj přehled roku",
  description:
    "Hledáte TikTok Wrapped 2026? TikTok ho spolehlivě nedělá. Tady je návod, jak si svůj přehled poskládat z exportu vlastních dat: čas u obrazovky, nejčastější vyhledávání a vaše zařazení.",
  intro:
    "Každý prosinec ovládne stejná otázka všem For You stránku: kde mám svůj TikTok Wrapped? A odpověď každý rok trochu zklame. TikTok se ke svému přehledu roku nikdy nepostavil tak jako Spotify. Některé roky se objeví, jiné prostě ne. Takže jestli už teď lovíte svůj TikTok Wrapped 2026, tady je upřímný stav věcí, plus finta, díky které ta čísla fakt dostanete.",
  blocks: [
    { type: 'h2', text: "Existuje oficiální TikTok Wrapped pro rok 2026?" },
    {
      type: 'p',
      text: "Krátká odpověď: k dnešnímu dni se nic neohlásilo. A upřímně, to sedí. TikTok vydal pořádný přehled v letech 2020 až 2022, v roce 2023 ho úplně vynechal a od té doby je to střídavě oblačno. I v letech, kdy se objeví, obvykle dorazí kolem poloviny prosince a k lidem se dostává po vlnách, ne najednou. Jestli obnovujete aplikaci a čekáte, až spadne nějaký velký animovaný přehled, můžete čekat pěkně dlouho.",
    },
    {
      type: 'p',
      text: "Trochu k vzteku je, že TikTok ta data evidentně má. Vaše historie sledování, každé vyhledávání, zvuky, které jste si uložili ve 2am, to všechno sedí na jejich serverech. Aplikace se vám to jen ne vždy obtěžuje vrátit v podobě, na kterou byste se chtěli dívat.",
    },
    { type: 'h2', text: "Finta: udělejte si vlastní z exportu dat" },
    {
      type: 'p',
      text: "Tady je ta část, kterou většina lidí přehlédne. Vy vlastně nepotřebujete, aby vám TikTok Wrapped udělal. Surová data si můžete stáhnout sami a udělat z nich úplně stejný přehled, kterýkoli den se vám zachce. To je celý důvod, proč [[home:TikTok Wrapped]] existuje.",
    },
    {
      type: 'p',
      text: "Běží na oficiálním exportu dat, který si TikTok nechá stáhnout každý uživatel. Požádáte o soubor, vrátí se jako JSON (nebo ZIP s JSONem schovaným uvnitř), nástroj ho přečte a všechno spočítá: celkový počet zhlédnutých videí, ztracené hodiny, vaši nejrušnější denní dobu, vyhledávání, na která byste radši zapomněli, a osobnostní zařazení podle toho, jak hluboko v tom jste. Žádný účet, žádné heslo, nic se neposílá na server. Soubor se čte přímo tam u vás v prohlížeči.",
    },
    {
      type: 'p',
      text: "Získat soubor je rychlé, ale je s tím spojené čekání. Tady je celý postup:",
    },
    {
      type: 'ol',
      items: [
        "V TikToku otevřete svůj Profil, ťukněte na menu (☰) a jděte do 'Settings and privacy'.",
        "Pod 'Account' ťukněte na 'Download your data'.",
        "Jako formát zvolte JSON. Na tomhle záleží, protože TXT a HTML s většinou analytických nástrojů nefungují. Pak vyberte 'All data' a ťukněte na 'Request data'.",
        "Čekejte. TikToku obvykle trvá od pár hodin po pár dní, než soubor sestaví, a jakmile je hotový, zůstane ke stažení dostupný několik dní.",
      ],
    },
    {
      type: 'p',
      text: "Až soubor dorazí, vezměte ho do [[analyze:analyzátoru]] a hoďte ho tam. Jestli si radši chcete napřed prohlédnout, co dostanete, než tím vším projdete, je tu [[example:kompletní ukázkový přehled]] postavený z vymyšlených dat, ve kterém si můžete nejdřív pošťourat.",
    },
    { type: 'h2', text: "Co váš přehled za rok 2026 vlastně ukáže" },
    {
      type: 'p',
      text: "Je to mnohem víc než jen počítadlo času u obrazovky. Dostanete svá nejčastější vyhledávání seřazená podle toho, jak často jste je hledali, hodiny, kdy jste nejaktivnější (ten noční úsek bývá pěkně nemilé překvapení), nejrušnější roky poskládané vedle sebe, vaše lajky, komentáře a sdílení, oblíbené zvuky a tvůrce a zařazení, které vás potichu založí někam mezi příležitostného diváka a, no, tohle je problém. Je to přesně to, co by vám ukázal opravdový Wrapped. Jen si ho generujete za svých podmínek, místo abyste čekali na aplikaci.",
    },
    { type: 'h2', text: "Proč to Spotify zvládá a TikTok ne" },
    {
      type: 'p',
      text: "Spotify udělal z Wrapped událost. Je automatický, je vypiplaný, spadne podle plánu a týden je celý váš feed plný oblíbených interpretů ostatních. TikTok se k ničemu takovému nikdy nezavázal. Zčásti je to tím, že rok hudby se dá zabalit vážně snáz než nekonečný, beztvarý feed. Zčásti, aspoň to člověka napadá, je to tím, že TikTok by radši, abyste dál scrollovali, než abyste se zastavili a spočítali, kolik jste toho nascrollovali. Ať tak či tak, přesně tahle mezera je důvod, proč nástroje třetích stran existují. Jestli chcete praktický rozdíl mezi takovýmhle přehledem a vestavěnými čísly pro tvůrce od TikToku, [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:tohle srovnání]] to rozebírá.",
    },
    { type: 'h2', text: "Jedna věc, u které stojí za to zpomalit: soukromí" },
    {
      type: 'p',
      text: "Váš export dat je osobní. Podle toho, co do něj zahrnete, může obsahovat zprávy, historii přihlášení, prostě všechno. Takže vážně záleží na tom, kam ho nahrajete. U TikTok Wrapped soubor nikdy neopustí vaše zařízení; všechno se odehrává lokálně v prohlížeči a nic se neukládá. Jestli zvažujete i jiné nástroje, [[/blog/is-it-safe-to-upload-tiktok-data-online:tohle krátké čtení o bezpečném nahrávání TikTok dat]] stojí za dvě minuty, než svůj soubor někomu svěříte.",
    },
    {
      type: 'p',
      text: "Takže ne, žádný nablýskaný oficiální TikTok Wrapped 2026 nejspíš nespěchá zachránit den. Ale ta data jsou vaše a vymáčknout z nich svůj přehled roku zabere zhruba pět minut opravdové práce. [[analyze:Stáhněte si export a podívejte se na svá čísla]], kdykoli na ně budete připravení.",
    },
  ],
  faq: [
    {
      q: "Existuje oficiální TikTok Wrapped pro rok 2026?",
      a: "Žádný se neohlásil. TikTok ho dělal v letech 2020 až 2022, rok 2023 vynechal a od té doby je nekonzistentní. Když se objeví, bývá to kolem poloviny prosince a rozjíždí se postupně.",
    },
    {
      q: "Kdy TikTok Wrapped vychází?",
      a: "Historicky v polovině až koncem prosince, pokud vůbec vyjde. Protože není zaručený, spousta lidí sáhne po nástroji na export dat, aby svůj přehled dostala podle vlastního rozvrhu, místo aby čekala.",
    },
    {
      q: "Můžu svůj TikTok Wrapped 2026 dostat hned teď?",
      a: "Ano. Nemusíte čekat na TikTok. Požádejte o export dat (zvolte formát JSON), pak ho nahrajte do nástroje jako TikTok Wrapped a za pár vteřin dostanete svá čísla a zařazení.",
    },
    {
      q: "Potřebuju zvláštní účet nebo za to platit?",
      a: "Ne. O export dat může požádat jakýkoli TikTok účet a jeho analýza na TikTok Wrapped je zdarma, bez přihlašování.",
    },
    {
      q: "Je bezpečné nahrávat svá TikTok data?",
      a: "Na TikTok Wrapped se váš soubor zpracovává celý ve vašem prohlížeči a nikdy se nenahrává ani neukládá. U nástrojů třetích stran obecně se vyplatí ověřit, že data zpracovávají lokálně a nikdy nechtějí vaše TikTok heslo.",
    },
  ],
}
