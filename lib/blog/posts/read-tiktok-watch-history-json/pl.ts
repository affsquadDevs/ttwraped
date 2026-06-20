import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Jak odczytać plik JSON z historią oglądania TikToka",
  description:
    "Dowiedz się, czym jest plik JSON z historią oglądania TikToka, gdzie go znaleźć w eksporcie danych oraz jak odczytać jego strukturę, aby zliczyć filmy i sesje.",
  intro:
    "Plik z historią oglądania TikToka to zwykły tekstowy rekord JSON każdego odtworzonego przez Ciebie filmu, przechowywany w eksporcie danych, który TikTok umożliwia pobranie. Gdy poznasz jego strukturę, możesz go odczytać, zliczyć filmy, a nawet samodzielnie oszacować sesje oglądania.",
  blocks: [
    {
      type: "p",
      text: "Gdy zażądasz swoich danych od TikToka i wybierzesz format JSON, eksport dotrze do Ciebie jako archiwum ZIP zawierające kilka plików. Jednym z najbardziej interesujących jest plik z historią oglądania, który zawiera listę filmów obejrzanych przez Ciebie w czasie. Ten przewodnik omawia, gdzie znajduje się plik, jak jest zorganizowany jego JSON oraz jak go zrozumieć.",
    },
    {
      type: "h2",
      text: "Czym jest plik z historią oglądania",
    },
    {
      type: "p",
      text: "Plik z historią oglądania to dziennik filmów odtworzonych w Twoich feedach Dla Ciebie i Obserwowani. Każdy wpis reprezentuje jeden film zarejestrowany przez TikToka jako obejrzany, wraz z godziną odtworzenia i linkiem do oryginalnego wideo.",
    },
    {
      type: "p",
      text: "To nie jest panel analityczny. To surowe dane: długa lista znaczników czasu i adresów URL. Sprawia to, że jest przydatny do analizy osobistej, ale trudny do odczytania na pierwszy rzut oka — szczególnie jeśli historia obejmuje miesiące lub lata.",
    },
    {
      type: "h2",
      text: "Gdzie go znaleźć w eksporcie",
    },
    {
      type: "p",
      text: "Po rozpakowaniu eksportu TikToka dane historii oglądania są pogrupowane w folderze związanym z aktywnością. W eksporcie JSON zazwyczaj znajdziesz je zagnieżdżone w następujący sposób:",
    },
    {
      type: "ul",
      items: [
        "Activity → Video Browsing History (czasem oznaczony jako Watch History),",
        "przechowywany w jednym pliku .json obok innych plików aktywności, takich jak Like List i Search History.",
      ],
    },
    {
      type: "p",
      text: "Dokładne nazwy folderów mogą się nieznacznie różnić między wersjami eksportu. Jeśli nie jesteś pewien, jak jest zorganizowane archiwum, nasz przewodnik [[/blog/tiktok-data-export-folders-explained:Foldery eksportu danych TikToka — omówienie]] wyjaśnia każdą sekcję. Aby poznać pełny proces żądania i pobierania, zapoznaj się z artykułem [[/blog/how-to-download-analyze-tiktok-data:jak pobrać i przeanalizować dane TikToka]].",
    },
    {
      type: "h2",
      text: "Struktura JSON: wpisy VideoList",
    },
    {
      type: "p",
      text: "Wewnątrz pliku rekordy oglądania są przechowywane pod kluczem zazwyczaj nazwanym VideoList. Jest to tablica obiektów, gdzie każdy obiekt opisuje jeden obejrzany film. Pojedynczy wpis wygląda mniej więcej tak:",
    },
    {
      type: "ul",
      items: [
        'Date — kiedy film był oglądany, np. "2026-02-14 18:32:07",',
        'Link — adres URL filmu, np. "https://www.tiktokv.com/share/video/7300000000000000000/".',
      ],
    },
    {
      type: "p",
      text: "Ogólna struktura to obiekt najwyższego poziomu zawierający tablicę, którą możesz sobie wyobrazić jako { \"Video Browsing History\": { \"VideoList\": [ ... ] } }. Każdy element VideoList to jedno zdarzenie odtworzenia z polem Date i polem Link. Nie ma liczb wyświetleń, wskaźników zaangażowania ani napisów — tylko kiedy i co.",
    },
    {
      type: "h2",
      text: "Jak ręcznie zliczać filmy",
    },
    {
      type: "p",
      text: "Najprostszym wskaźnikiem jest łączna liczba obejrzanych filmów, która odpowiada długości tablicy VideoList. Można to sprawdzić na kilka sposobów:",
    },
    {
      type: "ul",
      items: [
        "otwórz plik w edytorze kodu i sprawdź długość tablicy,",
        "wczytaj go w konsoli przeglądarki za pomocą data['Video Browsing History'].VideoList.length,",
        "użyj narzędzia wiersza poleceń, aby zliczyć wystąpienia klucza Date.",
      ],
    },
    {
      type: "p",
      text: "Zliczanie unikalnych filmów jest nieco trudniejsze, ponieważ ten sam Link może pojawić się więcej niż raz, jeśli oglądałeś film ponownie. Aby zliczyć unikalne, musisz deduplikować według pola Link, a nie po prostu zliczać wiersze.",
    },
    {
      type: "h2",
      text: "Szacowanie sesji a korzystanie z narzędzia",
    },
    {
      type: "p",
      text: "\"Sesja\" to ciągły okres oglądania. Eksport nie oznacza sesji, więc musisz je wywnioskować ze znaczników czasu Date. Popularnym podejściem jest sortowanie wpisów według daty i grupowanie filmów bliskich sobie w czasie:",
    },
    {
      type: "ul",
      items: [
        "posortuj wszystkie wpisy według wartości Date,",
        "przejdź przez listę i rozpocznij nową sesję za każdym razem, gdy przerwa między dwoma kolejnymi filmami przekracza próg (np. 30 minut),",
        "zlicz, ile sesji powstało w rezultacie.",
      ],
    },
    {
      type: "p",
      text: "Robienie tego ręcznie na tysiącach wpisów jest żmudne i podatne na błędy. Narzędzie takie jak [[home:TikTok Wrapped]] wykonuje to grupowanie automatycznie i przekształca je w czytelne podsumowania. Możesz [[example:zobaczyć przykładowe podsumowanie]], by sprawdzić, jak wygląda wynik, lub [[analyze:przeanalizować swój własny eksport]] bezpośrednio.",
    },
    {
      type: "h2",
      text: "Typowe pułapki",
    },
    {
      type: "h3",
      text: "Formaty dat i strefy czasowe",
    },
    {
      type: "p",
      text: "Pole Date jest ciągiem znaków, a nie prawdziwym typem datetime, i często jest zapisywane w UTC, a nie w Twoim lokalnym czasie. Jeśli je parsujemy bez uwzględnienia strefy czasowej, granice sesji i wyniki dotyczące \"najbardziej aktywnej godziny\" mogą przesunąć się o kilka godzin.",
    },
    {
      type: "h3",
      text: "Niepełna historia",
    },
    {
      type: "p",
      text: "Eksport może nie obejmować całej historii oglądania. TikTok ogranicza, jak daleko wstecz sięga część aktywności, więc pusta lub krótka lista VideoList nie zawsze oznacza, że oglądałeś mało — może to oznaczać, że okno eksportu było ograniczone.",
    },
    {
      type: "h3",
      text: "Duże pliki",
    },
    {
      type: "p",
      text: "Intensywni użytkownicy mogą mieć pliki z historią oglądania o rozmiarze kilkudziesięciu megabajtów. Niektóre edytory tekstu mają problem z otwieraniem tak dużych plików. Jeśli plik nie chce się otworzyć lub zawiesza edytor, to znak, że dane są duże, a nie że plik jest uszkodzony.",
    },
    {
      type: "h3",
      text: "Różnice w nazwach kluczy",
    },
    {
      type: "p",
      text: "Ponieważ TikTok okazjonalnie zmienia nazwy kluczy między wersjami eksportu, klucz otaczający VideoList może się różnić. Jeśli data['Video Browsing History'] jest niezdefiniowane, najpierw sprawdź klucze najwyższego poziomu, aby znaleźć właściwą etykietę.",
    },
    {
      type: "h2",
      text: "Podsumowanie",
    },
    {
      type: "p",
      text: "Plik JSON z historią oglądania jest jedną z najbardziej odkrywczych części eksportu TikToka. Gdy zrozumiesz, że to po prostu tablica VideoList złożona z par Date i Link, zliczanie filmów i szacowanie sesji staje się proste — choć pułapki związane ze strefą czasową, niepełną historią i rozmiarem pliku łatwo przeoczyć.",
    },
    {
      type: "p",
      text: "Jeśli wolisz pominąć ręczne parsowanie, narzędzie do analizy może odczytać ten sam plik i przedstawić Ci wyniki w kilka sekund.",
    },
  ],
  faq: [
    {
      q: "Gdzie znajduje się plik z historią oglądania w eksporcie TikToka?",
      a: "Zazwyczaj można go znaleźć w folderze Activity, często nazwanym Video Browsing History lub Watch History, zapisanym jako pojedynczy plik JSON.",
    },
    {
      q: "Jakie pola zawiera każdy wpis historii oglądania?",
      a: "Każdy wpis w tablicy VideoList zawiera pole Date z czasem oglądania filmu oraz pole Link z adresem URL wideo.",
    },
    {
      q: "Jak sprawdzić, ile filmów obejrzałem?",
      a: "Łączna liczba odpowiada liczbie wpisów w tablicy VideoList. Możesz sprawdzić długość tablicy w edytorze kodu lub konsoli przeglądarki.",
    },
    {
      q: "Dlaczego znaczniki czasu różnią się od mojego lokalnego czasu o kilka godzin?",
      a: "Pole Date jest często zapisywane w UTC, więc może różnić się od Twojego lokalnego czasu, chyba że przekonwertujesz je na swoją strefę czasową.",
    },
    {
      q: "Dlaczego mój plik z historią oglądania jest tak duży?",
      a: "Częste oglądanie generuje wiele wpisów, więc plik może urosnąć do kilkudziesięciu megabajtów. Duży rozmiar jest normalny i nie oznacza, że plik jest uszkodzony.",
    },
  ],
}
