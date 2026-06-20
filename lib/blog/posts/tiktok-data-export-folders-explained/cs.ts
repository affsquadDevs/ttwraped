import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'Co znamená každá složka v exportu dat TikToku (průvodce 2026)',
  description:
    'Přehledný rozbor každé složky a sekce JSON v exportu dat TikToku, co každá obsahuje a které části čte TikTok Wrapped.',
  intro:
    'Export dat TikToku je uspořádán do sady složek a sekcí JSON — Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings a TikTok Live — a každá z nich uchovává jinou část historie vašeho účtu.',
  blocks: [
    {
      type: 'p',
      text: 'Když si od TikToku vyžádáte data a otevřete stažený soubor, obsah může působit ohromujícím dojmem. Ať už obdržíte jeden velký soubor JSON, nebo strukturovanou složku souborů, informace jsou rozděleny do předvídatelných sekcí. Jakmile pochopíte, jak se tyto sekce mapují na vaši skutečnou aktivitu, export se stane snadno přehledným.',
    },
    {
      type: 'p',
      text: "Tento průvodce prochází každou složkou a sekcí JSON na nejvyšší úrovni exportu, vysvětluje srozumitelným jazykem, co obsahuje, a ukazuje, které části [[home:TikTok Wrapped]] skutečně čte při sestavování vašeho přehledu. Pokud jste si data ještě nestáhli, podívejte se na náš podrobný návod [[/blog/how-to-download-analyze-tiktok-data:jak stáhnout a analyzovat data z TikToku]].",
    },
    { type: 'h2', text: 'Profile' },
    {
      type: 'p',
      text: 'Sekce Profile obsahuje základní informace o vašem účtu: uživatelské jméno, název profilu, bio, e-mail nebo telefonní číslo přiřazené k účtu a podrobnosti o jeho vytvoření. Popisuje, kým jste na platformě, nikoli co jste dělali.',
    },
    {
      type: 'p',
      text: 'Tato sekce je malá, ale užitečná pro označení sestavy. Neobsahuje vaše heslo — TikTok nikdy přihlašovací údaje do exportu nezahrnuje.',
    },
    { type: 'h2', text: 'Activity (Your Activity)' },
    {
      type: 'p',
      text: 'Sekce Activity — někdy označená jako „Your Activity" — je jádrem exportu a obvykle jeho největší částí. Je rozdělena do několika podsekcí, které zaznamenávají vše, co jste dělali při procházení:',
    },
    {
      type: 'ul',
      items: [
        'Watch History — seznam videí, která jste zhlédli, s časovými razítky.',
        'Like List — videa, která se vám líbila, s daty.',
        'Search History — výrazy, které jste vyhledávali.',
        'Share History — obsah, který jste sdíleli, a kam.',
        'Following / Follower List — účty, které sledujete, a účty, které sledují vás.',
        'Oblíbená videa, zvuky a hashtagy — položky, které jste si uložili do záložek.',
      ],
    },
    {
      type: 'p',
      text: 'Díky časovým razítkům umožňuje tato sekce analýzu dlouhodobých vzorců. Většina přehledů v souhrnu TikTok Wrapped — vaše nejaktivnější období, oblíbení tvůrci a objem sledování — pochází právě odsud.',
    },
    { type: 'h2', text: 'Comments' },
    {
      type: 'p',
      text: 'Sekce Comments obsahuje seznam komentářů, které jste zveřejnili pod cizími videi, spolu s jejich časovými razítky. Odráží, jak jste v průběhu času veřejně interagovali s obsahem.',
    },
    { type: 'h2', text: 'Direct Messages' },
    {
      type: 'p',
      text: 'Sekce Direct Messages obsahuje historii vašich soukromých chatů seřazenou podle konverzací. Jde o nejcitlivější část exportu, a proto je třeba být opatrní při sdílení souborů. TikTok Wrapped vaše přímé zprávy nepotřebuje ani nečte.',
    },
    { type: 'h2', text: 'Video (Your Posts)' },
    {
      type: 'p',
      text: 'Sekce Video — často označená jako „Posts" — pokrývá obsah, který jste sami zveřejnili: nahrané videa, popisky a související metadata. Pro tvůrce tato sekce dokumentuje historii jejich příspěvků, zatímco pro diváky může být malá nebo prázdná.',
    },
    { type: 'h2', text: 'Ads and Data' },
    {
      type: 'p',
      text: 'Sekce Ads and Data zaznamenává signály související s reklamou, včetně dat Off TikTok Activity — informací, které jiné aplikace a webové stránky sdílely s TikTokem o vaší aktivitě mimo aplikaci. Obsahuje také reklamní zájmy a záznamy o interakcích s reklamou používané pro cílení.',
    },
    {
      type: 'p',
      text: "Chcete-li se podrobněji podívat na to, co tyto signály odhalují, náš článek o [[/blog/what-data-does-tiktok-collect:jaká data TikTok shromažďuje]] prochází jednotlivé kategorie podrobně.",
    },
    { type: 'h2', text: 'App Settings' },
    {
      type: 'p',
      text: 'Sekce App Settings uchovává vaše předvolby: nastavení soukromí, volby oznámení, jazyk a podobné konfigurace. Popisuje, jak je váš účet nastaven, nikoli jak jste ho používali, takže analýzu zřídkakdy ovlivňuje.',
    },
    { type: 'h2', text: 'TikTok Live' },
    {
      type: 'p',
      text: 'Sekce TikTok Live zachycuje aktivitu spojenou s živými přenosy — přenosy, které jste pořádali nebo sledovali, a související interakce. Pro většinu diváků je tato sekce malá, ale pro aktivní streamery může představovat cenný záznam.',
    },
    { type: 'h2', text: 'Přehled složek' },
    {
      type: 'p',
      text: 'Níže uvedená tabulka mapuje každou složku nebo sekci JSON na to, co obsahuje, a na to, co z ní TikTok Wrapped čte. Podobu výsledného výstupu si můžete prohlédnout na naší stránce [[example:ukázkového wrapped]].',
    },
    {
      type: 'table',
      headers: ['Složka / sekce', 'Co obsahuje', 'Co čte TikTok Wrapped'],
      rows: [
        ['Profile', 'Uživatelské jméno, bio, podrobnosti účtu', 'Zobrazované jméno v sestavě'],
        ['Activity — Watch History', 'Zhlédnutá videa s časovými razítky', 'Objem a trendy sledování'],
        ['Activity — Like List', 'Videa, která se vám líbila, s daty', 'Zvyky při lajkování v čase'],
        ['Activity — Search History', 'Výrazy, které jste vyhledávali', 'Nejčastější vyhledávání a zájmy'],
        ['Activity — Following / Follower', 'Sledované účty a sledující', 'Oblíbení tvůrci'],
        ['Comments', 'Komentáře, které jste zveřejnili', 'Počty interakcí (volitelné)'],
        ['Direct Messages', 'Historie soukromých chatů', 'Nečte se'],
        ['Video / Posts', 'Videa, která jste zveřejnili', 'Historie příspěvků (tvůrci)'],
        ['Ads and Data', 'Off TikTok Activity, reklamní zájmy', 'Nečte se'],
        ['App Settings', 'Soukromí a předvolby aplikace', 'Nečte se'],
        ['TikTok Live', 'Aktivita živých přenosů', 'Nečte se'],
      ],
    },
    { type: 'h2', text: 'Poznámka k soukromí' },
    {
      type: 'p',
      text: "Váš export obsahuje citlivé sekce — zejména Direct Messages a Ads and Data — které nejsou k vygenerování přehledu využití nikdy potřeba. TikTok Wrapped se zaměřuje na data Activity s časovými razítky a soukromé zprávy i reklamní záznamy zcela ignoruje. Soubor máte plně pod kontrolou a citlivé složky můžete před nahráním kamkoli smazat. Až budete připraveni, můžete [[analyze:analyzovat svůj wrapped]] jen se soubory aktivit.",
    },
    { type: 'h2', text: 'Závěr' },
    {
      type: 'p',
      text: 'Export dat TikToku vypadá složitě jen do chvíle, než poznáte jeho mapu. Každá složka odpovídá na jednu otázku — kdo jste, co jste sledovali, co jste zveřejnili, s kým jste mluvili nebo jak je váš účet nakonfigurován. Jakmile víte, které sekce jsou pro vás důležité, můžete analyzovat ty, na nichž vám záleží, a soukromé nechat nedotčené.',
    },
  ],
  faq: [
    {
      q: 'Jak je export dat TikToku uspořádán?',
      a: 'Export je rozdělen do sekcí jako Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings a TikTok Live, přičemž každá uchovává jinou část historie vašeho účtu.',
    },
    {
      q: 'Která složka obsahuje historii mého sledování?',
      a: 'Historie sledování se nachází v sekci Activity, často označené jako Your Activity, společně s vašimi seznamy Like List, Search History a Following.',
    },
    {
      q: 'Obsahuje export dat TikToku moje heslo?',
      a: 'Ne. TikTok nikdy do exportu dat nezahrnuje hesla k účtu ani přihlašovací údaje. Sekce Profile obsahuje pouze základní informace o účtu.',
    },
    {
      q: 'Čte TikTok Wrapped moje přímé zprávy?',
      a: 'Ne. TikTok Wrapped se zaměřuje na data Activity s časovými razítky a vaše sekce Direct Messages ani Ads and Data nečte.',
    },
    {
      q: 'Co jsou data Off TikTok Activity?',
      a: 'Off TikTok Activity se nachází v sekci Ads and Data a zaznamenává informace, které jiné aplikace a webové stránky sdílely s TikTokem o vaší aktivitě mimo aplikaci.',
    },
  ],
}
