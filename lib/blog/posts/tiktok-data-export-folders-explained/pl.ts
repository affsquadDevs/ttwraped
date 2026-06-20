import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'Co oznacza każdy folder w eksporcie danych TikTok (przewodnik 2026)',
  description:
    'Przejrzyste omówienie każdego folderu i sekcji JSON w eksporcie danych TikTok — co zawiera każda z nich i które części odczytuje TikTok Wrapped.',
  intro:
    'Eksport danych TikTok jest podzielony na zestaw folderów i sekcji JSON — Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings i TikTok Live — a każda z nich przechowuje inny wycinek historii Twojego konta.',
  blocks: [
    {
      type: 'p',
      text: "Gdy zażądasz swoich danych od TikTok i otworzysz pobrany plik, jego zawartość może wydawać się przytłaczająca. Niezależnie od tego, czy otrzymasz jeden duży plik JSON, czy ustrukturyzowany folder z plikami, informacje są pogrupowane w przewidywalne sekcje. Gdy już zrozumiesz, jak te sekcje odpowiadają Twojej rzeczywistej aktywności, poruszanie się po eksporcie staje się proste.",
    },
    {
      type: 'p',
      text: 'Ten przewodnik omawia każdy folder najwyższego poziomu i sekcję JSON w eksporcie, wyjaśnia prostym językiem, co zawiera, i pokazuje, które części [[home:TikTok Wrapped]] faktycznie odczytuje, aby zbudować Twoje podsumowanie. Jeśli jeszcze nie pobrałeś swoich danych, zapoznaj się z naszym przewodnikiem krok po kroku: [[/blog/how-to-download-analyze-tiktok-data:jak pobrać i przeanalizować dane TikTok]].',
    },
    { type: 'h2', text: 'Profile' },
    {
      type: 'p',
      text: 'Sekcja Profile zawiera podstawowe informacje o Twoim koncie: nazwę użytkownika, nazwę profilu, bio, adres e-mail lub numer telefonu powiązany z kontem oraz szczegóły dotyczące jego założenia. Opisuje, kim jesteś na platformie, a nie to, co robiłeś.',
    },
    {
      type: 'p',
      text: 'Ta sekcja jest niewielka, ale przydatna do oznaczania raportów. Nie zawiera Twojego hasła — TikTok nigdy nie umieszcza danych logowania w eksporcie.',
    },
    { type: 'h2', text: 'Activity (Your Activity)' },
    {
      type: 'p',
      text: 'Sekcja Activity — czasem oznaczona jako „Your Activity" — to serce eksportu i zazwyczaj jego największa część. Podzielona jest na kilka podsekcji, które rejestrują wszystko, co robiłeś podczas przeglądania:',
    },
    {
      type: 'ul',
      items: [
        'Watch History — lista obejrzanych filmów z sygnaturami czasowymi.',
        'Like List — filmy, które polubiłeś, wraz z datami.',
        'Search History — frazy, których szukałeś.',
        'Share History — treści, które udostępniłeś, i miejsce udostępnienia.',
        'Following / Follower List — obserwowane konta i konta, które Cię obserwują.',
        'Ulubione filmy, dźwięki i hashtagi — elementy dodane do zakładek.',
      ],
    },
    {
      type: 'p',
      text: 'Dzięki sygnaturom czasowym ta sekcja umożliwia analizę wzorców długoterminowych. Większość spostrzeżeń w podsumowaniu TikTok Wrapped — Twoje najaktywniejsze okresy oglądania, ulubieni twórcy i łączna liczba obejrzanych filmów — pochodzi właśnie stąd.',
    },
    { type: 'h2', text: 'Comments' },
    {
      type: 'p',
      text: 'Sekcja Comments zawiera listę komentarzy, które opublikowałeś pod innymi filmami, wraz z ich sygnaturami czasowymi. Odzwierciedla, w jaki sposób publicznie wchodziłeś w interakcję z treściami na przestrzeni czasu.',
    },
    { type: 'h2', text: 'Direct Messages' },
    {
      type: 'p',
      text: 'Sekcja Direct Messages zawiera historię Twoich prywatnych rozmów pogrupowanych według konwersacji. Jest to najbardziej osobista część eksportu, dlatego wymaga szczególnej ostrożności przy udostępnianiu plików. TikTok Wrapped nie potrzebuje ani nie odczytuje Twoich wiadomości bezpośrednich.',
    },
    { type: 'h2', text: 'Video (Your Posts)' },
    {
      type: 'p',
      text: 'Sekcja Video — często oznaczona jako „Posts" — obejmuje treści, które sam opublikowałeś: przesłane filmy, podpisy i powiązane metadane. Dla twórców ta sekcja dokumentuje historię publikacji, podczas gdy dla widzów może być niewielka lub pusta.',
    },
    { type: 'h2', text: 'Ads and Data' },
    {
      type: 'p',
      text: 'Sekcja Ads and Data rejestruje sygnały związane z reklamami, w tym dane Off TikTok Activity — informacje, które inne aplikacje i strony internetowe przekazały TikTok na temat Twojej aktywności poza aplikacją. Zawiera również zainteresowania reklamowe oraz historię interakcji z reklamami wykorzystywaną do targetowania.',
    },
    {
      type: 'p',
      text: 'Jeśli chcesz dokładniej przyjrzeć się temu, co ujawniają te sygnały, nasz artykuł na temat [[/blog/what-data-does-tiktok-collect:jakie dane zbiera TikTok]] omawia poszczególne kategorie szczegółowo.',
    },
    { type: 'h2', text: 'App Settings' },
    {
      type: 'p',
      text: 'Sekcja App Settings przechowuje Twoje preferencje: ustawienia prywatności, wybory dotyczące powiadomień, język i podobne konfiguracje. Opisuje sposób skonfigurowania konta, a nie sposób korzystania z niego, dlatego rzadko wpływa na analizę.',
    },
    { type: 'h2', text: 'TikTok Live' },
    {
      type: 'p',
      text: 'Sekcja TikTok Live rejestruje aktywność związaną z transmisami na żywo — transmisje, które prowadziłeś lub oglądałeś, oraz powiązane interakcje. Dla większości widzów ta sekcja jest niewielka, ale dla aktywnych streamerów może stanowić istotny zapis.',
    },
    { type: 'h2', text: 'Przewodnik po folderach' },
    {
      type: 'p',
      text: 'Poniższa tabela przyporządkowuje każdy folder lub sekcję JSON do tego, co zawiera, oraz do tego, co TikTok Wrapped z niej odczytuje. Możesz też zobaczyć rodzaj wyników na naszej stronie [[example:przykładowego wrapped]].',
    },
    {
      type: 'table',
      headers: ['Folder / Sekcja', 'Co zawiera', 'Co odczytuje TikTok Wrapped'],
      rows: [
        ['Profile', 'Nazwa użytkownika, bio, dane konta', 'Nazwa wyświetlana w raporcie'],
        ['Activity — Watch History', 'Obejrzane filmy z sygnaturami czasowymi', 'Liczba obejrzeń i trendy'],
        ['Activity — Like List', 'Polubione filmy z datami', 'Nawyki dotyczące polubień w czasie'],
        ['Activity — Search History', 'Używane frazy wyszukiwania', 'Najczęstsze wyszukiwania i zainteresowania'],
        ['Activity — Following / Follower', 'Obserwowane konta i obserwujący', 'Ulubieni twórcy'],
        ['Comments', 'Opublikowane komentarze', 'Liczba interakcji (opcjonalnie)'],
        ['Direct Messages', 'Historia prywatnych rozmów', 'Nie jest odczytywana'],
        ['Video / Posts', 'Opublikowane przez Ciebie filmy', 'Historia publikacji (twórcy)'],
        ['Ads and Data', 'Off TikTok Activity, zainteresowania reklamowe', 'Nie jest odczytywana'],
        ['App Settings', 'Prywatność i preferencje aplikacji', 'Nie jest odczytywana'],
        ['TikTok Live', 'Aktywność podczas transmisji na żywo', 'Nie jest odczytywana'],
      ],
    },
    { type: 'h2', text: 'Uwaga dotycząca prywatności' },
    {
      type: 'p',
      text: 'Twój eksport zawiera wrażliwe sekcje — zwłaszcza Direct Messages i Ads and Data — które nigdy nie są wymagane do wygenerowania podsumowania użytkowania. TikTok Wrapped skupia się na danych Activity z sygnaturami czasowymi i całkowicie ignoruje prywatne wiadomości oraz dane reklamowe. Masz pełną kontrolę nad plikiem i możesz usunąć wrażliwe foldery przed przesłaniem czegokolwiek gdziekolwiek. Gdy będziesz gotowy, możesz [[analyze:przeanalizować swój wrapped]] korzystając wyłącznie z plików aktywności.',
    },
    { type: 'h2', text: 'Podsumowanie' },
    {
      type: 'p',
      text: 'Eksport danych TikTok wydaje się skomplikowany tylko dopóty, dopóki nie poznasz jego struktury. Każdy folder odpowiada na jedno pytanie — kim jesteś, co oglądałeś, co publikowałeś, z kim rozmawiałeś lub jak skonfigurowane jest Twoje konto. Wiedząc, które sekcje mają znaczenie, możesz analizować interesujące Cię części, pozostawiając prywatne bez zmian.',
    },
  ],
  faq: [
    {
      q: 'Jak zorganizowany jest eksport danych TikTok?',
      a: 'Eksport jest pogrupowany w sekcje takie jak Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings i TikTok Live, z których każda przechowuje inną część historii Twojego konta.',
    },
    {
      q: 'W którym folderze znajduje się moja historia oglądania?',
      a: 'Historia oglądania znajduje się w sekcji Activity, często oznaczonej jako Your Activity, obok Like List, Search History i list obserwowanych.',
    },
    {
      q: 'Czy eksport danych TikTok zawiera moje hasło?',
      a: 'Nie. TikTok nigdy nie umieszcza haseł do konta ani danych logowania w eksporcie danych. Sekcja Profile zawiera wyłącznie podstawowe informacje o koncie.',
    },
    {
      q: 'Czy TikTok Wrapped odczytuje moje wiadomości bezpośrednie?',
      a: 'Nie. TikTok Wrapped skupia się na danych Activity z sygnaturami czasowymi i nie odczytuje sekcji Direct Messages ani Ads and Data.',
    },
    {
      q: 'Co to są dane Off TikTok Activity?',
      a: 'Off TikTok Activity znajduje się w sekcji Ads and Data i rejestruje informacje, które inne aplikacje i strony internetowe przekazały TikTok na temat Twojej aktywności poza aplikacją.',
    },
  ],
}
