import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Export dat z TikToku nefunguje? Časté problémy a jejich řešení",
  description:
    "Vyřešte časté problémy s exportem dat z TikToku, včetně žádostí zaseknutých na stavu „Pending“, prošlých odkazů, volby JSON vs HTML, ZIP souborů, které nejdou otevřít, a prázdných či neúplných dat.",
  intro:
    "Pokud váš export dat z TikToku uvízl na stavu „Pending“, vypršela platnost odkazu ke stažení nebo ZIP soubor nejde otevřít, řešení obvykle spočívá v tom, že si vyžádáte nový export, zvolíte správný formát souboru a stáhnete jej přes stabilní připojení.",
  blocks: [
    {
      type: 'p',
      text: "TikTok vám umožňuje vyžádat si kompletní kopii dat vašeho účtu, ale tento proces neproběhne vždy hladce. Žádosti mohou uvíznout, platnost odkazů může vypršet a soubory mohou dorazit ve formátu, který analytické nástroje nedokážou přečíst.",
    },
    {
      type: 'p',
      text: "Tento návod vás provede nejčastějšími problémy s exportem dat z TikToku a praktickými řešeními pro každý z nich, abyste získali čistý a použitelný soubor připravený k [[analyze:analýze]].",
    },
    {
      type: 'h2',
      text: "Export trvá příliš dlouho nebo uvízl na stavu „Pending“",
    },
    {
      type: 'p',
      text: "Nejčastější stížnost je, že žádost zůstává ve stavu „Pending“ a zdá se, že se nikdy nedokončí. TikTok připravuje exporty na vlastních serverech a doba zpracování závisí na velikosti účtu a aktuální zátěži.",
    },
    {
      type: 'ul',
      items: [
        "Než usoudíte, že je něco špatně, počkejte alespoň pár hodin – u velkých účtů to může trvat déle.",
        "Místo odesílání mnoha duplicitních žádostí raději později znovu zkontrolujte sekci Download your data.",
        "Pokud zůstane ve stavu „Pending“ několik dní, odešlete jednu novou žádost a proces tím restartujte.",
        "Ujistěte se, že kontrolujete stejný účet a zařízení, ze kterého jste export vyžádali.",
      ],
    },
    {
      type: 'p',
      text: "Většina zaseknutých žádostí se vyřeší sama; skutečným řešením je obvykle trpělivost.",
    },
    {
      type: 'h2',
      text: "Platnost odkazu ke stažení vypršela",
    },
    {
      type: 'p',
      text: "TikTok udržuje váš hotový export k dispozici jen po omezenou dobu, často několik dní. Poté platnost odkazu ke stažení vyprší a soubor je odstraněn.",
    },
    {
      type: 'ul',
      items: [
        "Vyžádejte si zcela nový export ze sekce Download your data.",
        "Stáhněte ZIP soubor, jakmile se zobrazí jako připravený, místo abyste čekali.",
        "Soubor si okamžitě uložte na trvalé místo, nikoli do dočasné složky.",
      ],
    },
    {
      type: 'p',
      text: "Prošlý odkaz už nelze obnovit, takže když budete s hotovým exportem zacházet jako s něčím časově omezeným, vyhnete se opakovanému čekání.",
    },
    {
      type: 'h2',
      text: "Volba mezi JSON a HTML",
    },
    {
      type: 'p',
      text: "Při žádosti o data se vás TikTok zeptá, zda je chcete ve formátu JSON nebo HTML. Tato volba je důležitější, než většina lidí čeká.",
    },
    {
      type: 'ul',
      items: [
        "JSON je strukturovaný a strojově čitelný, což je přesně to, co analytické nástroje potřebují, aby mohly zpracovat vaši aktivitu.",
        "HTML je určeno pouze ke čtení v prohlížeči a nástroje jej dokážou spolehlivě zpracovat jen obtížně.",
        "Pokud plánujete použít [[home:TikTok Wrapped]] nebo jakýkoli analytický nástroj, zvolte JSON.",
      ],
    },
    {
      type: 'p',
      text: "Pokud jste už obdrželi export v HTML a potřebujete JSON, vyžádejte si nový export a před odesláním zvolte JSON.",
    },
    {
      type: 'h2',
      text: "ZIP soubor nejde otevřít",
    },
    {
      type: 'p',
      text: "TikTok doručuje váš export jako komprimovaný ZIP archiv. Pokud jej nejde otevřít, problém je obvykle v samotném stahování.",
    },
    {
      type: 'ul',
      items: [
        "Stáhněte soubor znovu přes stabilní internetové připojení a nechte stahování zcela dokončit.",
        "Ověřte, že velikost souboru vypadá rozumně a není neobvykle malá.",
        "Použijte vestavěný rozbalovací nástroj vašeho operačního systému nebo důvěryhodný nástroj pro rozbalování ZIP.",
        "Nepřejmenovávejte příponu souboru ručně, protože to může rozbalovací nástroj zmást.",
      ],
    },
    {
      type: 'p',
      text: "Obvyklou příčinou je poškozené nebo neúplné stažení a čisté opětovné stažení vyřeší většinu případů.",
    },
    {
      type: 'h2',
      text: "Soubor je příliš velký na zpracování",
    },
    {
      type: 'p',
      text: "Dlouholetí uživatelé a tvůrci mohou skončit s velmi velkými exporty, jejichž stahování nebo otevírání může být pomalé.",
    },
    {
      type: 'ul',
      items: [
        "Stahujte přes Wi-Fi místo mobilních dat, abyste se vyhnuli přerušením.",
        "Ujistěte se, že vaše zařízení má dostatek volného místa pro uložení i rozbalení archivu.",
        "Před otevřením jakýchkoli jednotlivých souborů uvnitř ZIP jej nejprve celý rozbalte.",
        "Pokud potřebujete jen konkrétní přehledy, můžete přesto nahrát celý export – nástroje přečtou jen to, co potřebují.",
      ],
    },
    {
      type: 'h2',
      text: "„Request Failed“ nebo chyba při vyžádání",
    },
    {
      type: 'p',
      text: "Někdy selže samotná žádost ještě předtím, než se vytvoří jakýkoli soubor. Tyto chyby bývají obvykle dočasné nebo související s připojením.",
    },
    {
      type: 'ul',
      items: [
        "Aktualizujte aplikaci TikTok na nejnovější verzi nebo zkuste žádost odeslat z webu TikTok.",
        "Přepněte síť (například z mobilních dat na Wi-Fi) a zkuste to znovu.",
        "Před opakováním chvíli počkejte, protože opakované rychlé pokusy mohou být odmítnuty.",
        "Ověřte, že je váš účet v pořádku a že jste plně přihlášeni.",
      ],
    },
    {
      type: 'p',
      text: "Většina zpráv „request failed“ zmizí po opětovném pokusu přes stabilní připojení.",
    },
    {
      type: 'h2',
      text: "Prázdná nebo neúplná data",
    },
    {
      type: 'p',
      text: "Otevřít export a zjistit, že vypadá prázdný nebo neúplný, je frustrující, ale často jde o očekávané chování, nikoli o chybu.",
    },
    {
      type: 'ul',
      items: [
        "Při vyžádání vyberte všechny kategorie dat, aby nic nezůstalo opomenuto.",
        "Pamatujte, že novější účty mají prostě méně historie k exportu.",
        "Zkontrolujte správné soubory uvnitř exportu – aktivita je rozložena do několika složek.",
        "Pokud nějaké kategorie chybí, vyžádejte si nový export se vším vybraným.",
      ],
    },
    {
      type: 'p',
      text: "Chcete-li pochopit, jak je export uspořádán, přečtěte si náš návod [[/blog/tiktok-data-export-folders-explained:vysvětlení složek exportu dat z TikToku]].",
    },
    {
      type: 'h2',
      text: "Příprava čistého exportu k analýze",
    },
    {
      type: 'p',
      text: "Jakmile máte kompletní export ve formátu JSON, který se správně otevírá, jste připraveni proměnit nezpracované soubory v čitelné přehledy.",
    },
    {
      type: 'ul',
      items: [
        "Ponechte ZIP neporušený a neupravujte soubory uvnitř něj.",
        "Zvolte formát JSON kvůli kompatibilitě s analytickými nástroji.",
        "Nahrajte export do nástroje, který automaticky shrne vaši aktivitu.",
      ],
    },
    {
      type: 'p',
      text: "Pro kompletní postup si přečtěte [[/blog/how-to-download-analyze-tiktok-data:jak stáhnout a analyzovat svá data z TikToku]] nebo se podívejte na ukázkový výsledek na stránce [[example:ukázkové wrapped]].",
    },
    {
      type: 'h2',
      text: "Závěrečné myšlenky",
    },
    {
      type: 'p',
      text: "Většina problémů s exportem dat z TikToku se dá svést na pár opakujících se příčin: žádost, která potřebuje více času, prošlý odkaz, nesprávný formát souboru nebo neúplné stažení. Každá z nich má jednoduché řešení.",
    },
    {
      type: 'p',
      text: "Vyžádejte si všechny kategorie ve formátu JSON, stáhněte je rychle přes stabilní připojení a ponechte ZIP soubor neporušený. Od té chvíle je váš export připraven k [[analyze:analýze]].",
    },
  ],
  faq: [
    {
      q: "Proč můj export dat z TikToku uvízl na stavu „Pending“?",
      a: "TikTok zpracovává žádosti o export na vlastních serverech, což může trvat od několika minut až po několik dní v závislosti na velikosti účtu a zátěži. Pokud zůstane ve stavu „Pending“ déle než pár dní, obvykle se to vyřeší samo, ale můžete odeslat novou žádost a proces tím restartovat.",
    },
    {
      q: "Mám si při žádosti o data z TikToku zvolit JSON, nebo HTML?",
      a: "Zvolte JSON, pokud plánujete použít analytický nástroj. JSON je strojově čitelný a uchovává záznamy o vaší aktivitě ve strukturovaném formátu, který nástroje dokážou zpracovat, zatímco HTML je navrženo pouze ke čtení v prohlížeči.",
    },
    {
      q: "Platnost mého odkazu ke stažení z TikToku vypršela. Co mám dělat?",
      a: "Odkazy ke stažení z TikToku jsou dostupné jen po omezenou dobu, obvykle několik dní. Pokud platnost odkazu vypršela, vyžádejte si nový export ze sekce Download your data a ZIP soubor stáhněte ihned, jakmile bude připravený.",
    },
    {
      q: "Proč můj ZIP soubor z TikToku nejde otevřít?",
      a: "ZIP soubor, který nejde otevřít, bývá obvykle neúplně stažený nebo poškozený. Stáhněte soubor znovu přes stabilní připojení, ujistěte se, že se stahování dokončilo, a k rozbalení použijte vestavěný rozbalovací nástroj vašeho operačního systému nebo důvěryhodný nástroj.",
    },
    {
      q: "Můj export z TikToku vypadá prázdný nebo neúplný. Je to normální?",
      a: "Export obsahuje pouze kategorie, které jste vybrali, a aktivitu spojenou s vaším účtem. Pokud se zdá, že data chybí, vyžádejte si export se všemi vybranými kategoriemi dat a pamatujte, že novější účty mají přirozeně méně historie.",
    },
  ],
}
