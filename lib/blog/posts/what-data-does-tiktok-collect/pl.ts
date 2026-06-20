import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'Jakie dane zbiera o Tobie TikTok? Wyjaśnienie w prosty sposób',
  description:
    'Dowiedz się, jakie dane TikTok zbiera o użytkownikach, w tym informacje o aktywności, koncie i urządzeniu, oraz co pojawia się w eksporcie danych z TikToka.',
  intro:
    'Platformy społecznościowe opierają swoje działanie na danych, aby personalizować doświadczenia i utrzymywać bezpieczeństwo kont. Dla użytkowników TikToka zrozumienie, jakie dane są zbierane i w jaki sposób są kategoryzowane, jest kluczowym elementem cyfrowej przejrzystości - zwłaszcza przy żądaniu eksportu danych osobowych.',
  blocks: [
    {
      type: 'p',
      text: 'W tym artykule wyjaśniamy główne rodzaje danych zbieranych przez TikToka, w jaki sposób te dane powstają podczas normalnego korzystania z aplikacji, co zazwyczaj pojawia się w eksporcie danych z TikToka oraz na co użytkownicy powinni zwrócić uwagę podczas przeglądania swoich informacji.',
    },
    { type: 'h2', text: 'Jak TikTok zbiera dane użytkowników' },
    {
      type: 'p',
      text: 'TikTok zbiera dane poprzez bezpośrednią interakcję użytkownika z aplikacją, konfigurację konta oraz procesy techniczne niezbędne do dostarczania treści i utrzymania stabilności platformy.',
    },
    { type: 'p', text: 'Zbieranie danych następuje, gdy użytkownicy:' },
    {
      type: 'ul',
      items: [
        'tworzą konto lub nim zarządzają',
        'oglądają, polubiają, komentują lub udostępniają treści',
        'wyszukują filmy lub twórców',
        'korzystają z funkcji wewnątrz aplikacji',
      ],
    },
    {
      type: 'p',
      text: 'Te dane są rejestrowane automatycznie w ramach normalnego działania platformy i opisane w publicznie dostępnej dokumentacji dotyczącej prywatności TikToka.',
    },
    { type: 'h2', text: 'Kategorie danych zbieranych przez TikToka' },
    {
      type: 'p',
      text: 'Zbieranie danych przez TikToka można ogólnie podzielić na kilka kategorii.',
    },
    { type: 'h3', text: 'Informacje o koncie i profilu' },
    {
      type: 'p',
      text: 'Dane na poziomie konta służą do identyfikacji profili użytkowników i zarządzania nimi. Mogą one obejmować:',
    },
    {
      type: 'ul',
      items: [
        'nazwę użytkownika i nazwę wyświetlaną',
        'datę utworzenia konta',
        'ustawienia i preferencje profilu',
        'informacje o regionie, języku lub kraju',
      ],
    },
    {
      type: 'p',
      text: 'Informacje te pozwalają TikTokowi powiązać aktywność z właściwym kontem oraz zastosować ustawienia regionalne lub językowe.',
    },
    { type: 'h3', text: 'Dane o aktywności i korzystaniu' },
    {
      type: 'p',
      text: 'Dane o aktywności odzwierciedlają sposób, w jaki użytkownicy korzystają z platformy w czasie. Mogą one obejmować:',
    },
    {
      type: 'ul',
      items: [
        'znaczniki czasu korzystania z aplikacji',
        'obejrzane filmy lub filmy, z którymi nastąpiła interakcja',
        'polubienia, komentarze i udostępnienia',
        'działania obserwowania i przestania obserwowania',
      ],
    },
    {
      type: 'p',
      text: 'Ta kategoria często stanowi największą część danych związanych z użytkownikiem i odzwierciedla obserwowalne zachowania, a nie intencje czy osobiste znaczenie.',
    },
    { type: 'h3', text: 'Informacje o wyszukiwaniu i odkrywaniu treści' },
    {
      type: 'p',
      text: 'TikTok może zbierać dane związane z odkrywaniem treści, takie jak:',
    },
    {
      type: 'ul',
      items: [
        'zapytania wyszukiwania wpisane w aplikacji',
        'interakcje z rekomendowanymi treściami',
        'zaangażowanie w popularne tematy lub kategorie',
      ],
    },
    {
      type: 'p',
      text: 'Informacje te pomagają platformie organizować i wyświetlać treści, a nie interpretować osobiste preferencje wykraczające poza zarejestrowane działania.',
    },
    { type: 'h3', text: 'Dane o urządzeniu i dane techniczne' },
    {
      type: 'p',
      text: 'Aby zapewnić prawidłowe działanie aplikacji, TikTok może zbierać informacje techniczne, w tym:',
    },
    {
      type: 'ul',
      items: [
        'typ urządzenia i system operacyjny',
        'wersję aplikacji i dane o wydajności',
        'wskaźniki łączności sieciowej',
      ],
    },
    {
      type: 'p',
      text: 'Te dane wspierają bezpieczeństwo, rozwiązywanie problemów oraz zgodność między różnymi urządzeniami.',
    },
    { type: 'h2', text: 'Czego TikTok nie zbiera' },
    {
      type: 'p',
      text: 'Istnieją powszechne błędne przekonania na temat zbierania danych.',
    },
    { type: 'p', text: 'TikTok nie:' },
    {
      type: 'ul',
      items: [
        'przechowuje haseł użytkowników w czytelnej formie w ramach eksportów',
        'rejestruje prywatnych myśli, emocji ani intencji',
        'zbiera danych uwierzytelniających do usług finansowych podczas standardowego korzystania',
        'zapewnia nieograniczonego dostępu do treści prywatnych wiadomości we wszystkich przypadkach',
      ],
    },
    {
      type: 'p',
      text: 'Zebrane dane są ustrukturyzowane, rejestrowane i ograniczone do określonych systemów, a nie do nieformalnej obserwacji.',
    },
    { type: 'h2', text: 'Co pojawia się w eksporcie danych z TikToka' },
    {
      type: 'p',
      text: 'Gdy użytkownicy żądają eksportu danych, TikTok udostępnia plik do pobrania - zazwyczaj w formacie ZIP - zawierający ustrukturyzowane zapisy ich aktywności.',
    },
    { type: 'p', text: 'Eksport danych może obejmować:' },
    {
      type: 'ul',
      items: [
        'historię interakcji',
        'dzienniki aktywności ze znacznikami czasu',
        'zapisy związane z wyszukiwaniem',
        'metadane konta',
      ],
    },
    {
      type: 'p',
      text: 'Nie wszystkie zebrane dane są zawsze uwzględniane. Eksporty mogą się różnić w zależności od:',
    },
    {
      type: 'ul',
      items: [
        'przepisów regionalnych',
        'limitów przechowywania danych',
        'wieku konta i poziomu aktywności',
      ],
    },
    {
      type: 'p',
      text: 'Eksport odzwierciedla zarejestrowaną aktywność na platformie, a nie wywnioskowane cechy czy subiektywną analizę.',
    },
    { type: 'h2', text: 'Dlaczego warto rozumieć zbieranie danych' },
    { type: 'p', text: 'Wiedza o tym, jakie dane są zbierane, pomaga użytkownikom:' },
    {
      type: 'ul',
      items: [
        'lepiej rozumieć własną aktywność cyfrową',
        'oceniać przejrzystość platformy',
        'podejmować świadome decyzje dotyczące narzędzi do analizy danych',
        'zachować kontrolę nad informacjami osobistymi',
      ],
    },
    {
      type: 'p',
      text: 'Świadomość wspiera odpowiedzialne korzystanie i świadomą zgodę podczas pracy z danymi osobowymi.',
    },
    { type: 'h2', text: 'Zbieranie danych a interpretacja danych' },
    { type: 'p', text: 'Ważne jest rozróżnienie między:' },
    {
      type: 'ul',
      items: [
        'zbieraniem danych - rejestrowaniem obserwowalnych działań',
        'interpretacją danych - podsumowywaniem lub analizą tych zapisów',
      ],
    },
    {
      type: 'p',
      text: 'Obecność danych nie oznacza automatycznie wniosków. Znaczenie i interpretacja zależą od kontekstu oraz metod użytych do analizy informacji.',
    },
    { type: 'h2', text: 'Podsumowanie' },
    {
      type: 'p',
      text: 'TikTok zbiera dane związane z zarządzaniem kontem, aktywnością, odkrywaniem treści i wydajnością techniczną, aby obsługiwać swoją platformę. Te dane są rejestrowane systematycznie i udostępniane użytkownikom za pośrednictwem oficjalnych narzędzi eksportu w celu zapewnienia przejrzystości.',
    },
    {
      type: 'p',
      text: 'Rozumiejąc, jakie dane są zbierane - a jakie nie - użytkownicy mogą podchodzić do swoich danych z TikToka z jasnością, pewnością i świadomą wiedzą.',
    },
  ],
  faq: [
    {
      q: 'Jakie dane osobowe zbiera TikTok?',
      a: 'TikTok zbiera informacje o koncie, dane o aktywności, interakcje wyszukiwania oraz dane techniczne związane z urządzeniem, niezbędne do obsługi platformy.',
    },
    {
      q: 'Czy TikTok zbiera prywatne wiadomości?',
      a: 'Niektóre metadane związane z wiadomościami mogą być zbierane, ale pełna treść prywatnych wiadomości nie zawsze jest uwzględniana w eksportach danych i nie obejmuje haseł.',
    },
    {
      q: 'Czy mogę zobaczyć, jakie dane TikTok ma na mój temat?',
      a: 'Tak. TikTok umożliwia użytkownikom żądanie eksportu danych osobowych za pośrednictwem ustawień prywatności i danych.',
    },
    {
      q: 'Czy wszystkie zebrane dane są uwzględnione w eksporcie?',
      a: 'Nie zawsze. Eksporty danych mogą być ograniczone przez okresy przechowywania, przepisy regionalne oraz aktywność konta.',
    },
    {
      q: 'Dlaczego TikTok zbiera dane użytkowników?',
      a: 'Zbieranie danych wspiera funkcjonalność platformy, personalizację, bezpieczeństwo oraz ogólną wydajność.',
    },
  ],
}
