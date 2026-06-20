import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'Jaká data TikTok o vás sbírá? Srozumitelné vysvětlení',
  description:
    'Zjistěte, jaká data TikTok o uživatelích sbírá, včetně aktivity, účtu a informací o zařízení, a co se zobrazí v exportu vašich dat z TikToku.',
  intro:
    'Platformy sociálních médií se spoléhají na data k fungování, personalizaci zážitků a zabezpečení účtů. Pro uživatele TikToku je pochopení toho, jaká data jsou shromažďována a jak jsou kategorizována, klíčovým aspektem digitální transparentnosti – zejména při žádosti o export osobních dat.',
  blocks: [
    {
      type: 'p',
      text: 'Tento článek vysvětluje hlavní typy dat, která TikTok shromažďuje, jak tato data vznikají při běžném používání aplikace, co se obvykle objeví v exportu dat z TikToku a co by uživatelé měli zvážit při kontrole svých informací.',
    },
    { type: 'h2', text: 'Jak TikTok shromažďuje uživatelská data' },
    {
      type: 'p',
      text: 'TikTok shromažďuje data prostřednictvím přímé interakce uživatele s aplikací, konfigurace účtu a technických procesů nezbytných pro doručování obsahu a udržení stability platformy.',
    },
    { type: 'p', text: 'Sběr dat probíhá, když uživatelé:' },
    {
      type: 'ul',
      items: [
        'vytvoří nebo spravují účet',
        'sledují, lajkují, komentují nebo sdílejí obsah',
        'hledají videa nebo tvůrce',
        'interagují s funkcemi v aplikaci',
      ],
    },
    {
      type: 'p',
      text: 'Tato data jsou automaticky zaznamenávána jako součást běžného provozu platformy a jsou popsána ve veřejně dostupné dokumentaci o ochraně soukromí TikToku.',
    },
    { type: 'h2', text: 'Kategorie dat, která TikTok shromažďuje' },
    {
      type: 'p',
      text: "Sběr dat TikToku lze obecně rozdělit do několika kategorií.",
    },
    { type: 'h3', text: 'Informace o účtu a profilu' },
    {
      type: 'p',
      text: 'Data na úrovni účtu slouží k identifikaci a správě uživatelských profilů. Mohou zahrnovat:',
    },
    {
      type: 'ul',
      items: [
        'uživatelské jméno a zobrazované jméno',
        'datum vytvoření účtu',
        'nastavení a předvolby profilu',
        'informace o regionu, jazyce nebo zemi',
      ],
    },
    {
      type: 'p',
      text: 'Tyto informace umožňují TikToku přiřadit aktivitu ke správnému účtu a použít regionální nebo jazykové nastavení.',
    },
    { type: 'h3', text: 'Data o aktivitě a používání' },
    {
      type: 'p',
      text: 'Data o aktivitě představují způsob, jakým uživatelé interagují s platformou v průběhu času. Mohou zahrnovat:',
    },
    {
      type: 'ul',
      items: [
        'časová razítka používání aplikace',
        'sledovaná nebo s nimi interagovaná videa',
        'lajky, komentáře a sdílení',
        'akce sledování a odsledování',
      ],
    },
    {
      type: 'p',
      text: 'Tato kategorie často tvoří největší část dat souvisejících s uživatelem a odráží pozorovatelné chování, nikoli záměry nebo osobní smysl.',
    },
    { type: 'h3', text: 'Informace o vyhledávání a objevování' },
    {
      type: 'p',
      text: 'TikTok může shromažďovat data týkající se objevování obsahu, například:',
    },
    {
      type: 'ul',
      items: [
        'vyhledávací dotazy zadané v aplikaci',
        'interakce s doporučeným obsahem',
        'zapojení do trendových témat nebo kategorií',
      ],
    },
    {
      type: 'p',
      text: 'Tyto informace pomáhají platformě organizovat a zobrazovat obsah, nikoli interpretovat osobní preference nad rámec zaznamenaných akcí.',
    },
    { type: 'h3', text: 'Technická data o zařízení' },
    {
      type: 'p',
      text: 'Pro zajištění správného fungování aplikace může TikTok shromažďovat technické informace, včetně:',
    },
    {
      type: 'ul',
      items: [
        'typ zařízení a operační systém',
        'verze aplikace a data o výkonu',
        'ukazatele síťového připojení',
      ],
    },
    {
      type: 'p',
      text: 'Tato data podporují bezpečnost, odstraňování problémů a kompatibilitu napříč zařízeními.',
    },
    { type: 'h2', text: 'Co TikTok neshromažďuje' },
    {
      type: 'p',
      text: 'Existují běžné mylné představy o sběru dat.',
    },
    { type: 'p', text: 'TikTok nezaznamenává:' },
    {
      type: 'ul',
      items: [
        'uživatelská hesla v čitelné podobě v exportech',
        'soukromé myšlenky, emoce nebo záměry',
        'finanční přihlašovací údaje při standardním používání',
        'neomezený přístup k obsahu soukromých zpráv ve všech případech',
      ],
    },
    {
      type: 'p',
      text: 'Shromážděná data jsou strukturovaná, zaznamenávaná a omezená na definované systémy, nikoli na neformální pozorování.',
    },
    { type: 'h2', text: 'Co se zobrazí v exportu dat z TikToku' },
    {
      type: 'p',
      text: 'Když uživatelé požádají o export dat, TikTok poskytne soubor ke stažení – obvykle jako ZIP – obsahující strukturované záznamy jejich aktivity.',
    },
    { type: 'p', text: 'Export dat může zahrnovat:' },
    {
      type: 'ul',
      items: [
        'historii interakcí',
        'protokoly aktivit s časovými razítky',
        'záznamy týkající se vyhledávání',
        'metadata účtu',
      ],
    },
    {
      type: 'p',
      text: 'Ne všechna shromážděná data jsou vždy zahrnuta. Exporty se mohou lišit v závislosti na:',
    },
    {
      type: 'ul',
      items: [
        'regionálních předpisech',
        'limitech uchovávání dat',
        'stáří účtu a úrovni aktivity',
      ],
    },
    {
      type: 'p',
      text: 'Export odráží zaznamenanou aktivitu na platformě, nikoli odvozené vlastnosti nebo subjektivní analýzu.',
    },
    { type: 'h2', text: 'Proč je důležité rozumět sběru dat' },
    { type: 'p', text: 'Znalost toho, jaká data jsou shromažďována, pomáhá uživatelům:' },
    {
      type: 'ul',
      items: [
        'lépe porozumět vlastní digitální aktivitě',
        'kontrolovat transparentnost platformy',
        'přijímat informovaná rozhodnutí o nástrojích pro analýzu dat',
        'udržet kontrolu nad osobními informacemi',
      ],
    },
    {
      type: 'p',
      text: 'Povědomí podporuje zodpovědné používání a informovaný souhlas při práci s osobními daty.',
    },
    { type: 'h2', text: 'Sběr dat vs. interpretace dat' },
    { type: 'p', text: 'Je důležité rozlišovat mezi:' },
    {
      type: 'ul',
      items: [
        'sběrem dat – zaznamenáváním pozorovatelných akcí',
        'interpretací dat – sumarizací nebo analýzou těchto záznamů',
      ],
    },
    {
      type: 'p',
      text: 'Přítomnost dat automaticky neznamená závěry. Smysl a interpretace závisí na kontextu a metodách použitých k analýze informací.',
    },
    { type: 'h2', text: 'Závěrečné myšlenky' },
    {
      type: 'p',
      text: 'TikTok shromažďuje data týkající se správy účtu, aktivity, objevování a technického výkonu za účelem provozování své platformy. Tato data jsou systematicky zaznamenávána a zpřístupněna uživatelům prostřednictvím oficiálních exportních nástrojů v zájmu transparentnosti.',
    },
    {
      type: 'p',
      text: "Pochopením toho, jaká data jsou shromažďována – a jaká nejsou – mohou uživatelé přistupovat ke svým datům z TikToku s jasností, jistotou a informovaným povědomím.",
    },
  ],
  faq: [
    {
      q: 'Jaké osobní údaje TikTok shromažďuje?',
      a: 'TikTok shromažďuje informace o účtu, data o aktivitě, vyhledávací interakce a technická data o zařízení nezbytná pro provoz platformy.',
    },
    {
      q: 'Shromažďuje TikTok soukromé zprávy?',
      a: "Některá metadata týkající se zpráv mohou být shromažďována, ale úplný obsah soukromých zpráv není vždy součástí exportů dat a hesla nejsou zahrnuta.",
    },
    {
      q: 'Mohu vidět, jaká data o mně TikTok má?',
      a: 'Ano. TikTok umožňuje uživatelům požádat o export osobních dat prostřednictvím nastavení ochrany soukromí a dat.',
    },
    {
      q: 'Jsou v exportu zahrnuta všechna shromážděná data?',
      a: 'Ne vždy. Exporty dat mohou být omezeny dobou uchovávání, regionálními předpisy a aktivitou účtu.',
    },
    {
      q: 'Proč TikTok shromažďuje uživatelská data?',
      a: 'Sběr dat podporuje funkčnost platformy, personalizaci, bezpečnost a celkový výkon.',
    },
  ],
}
