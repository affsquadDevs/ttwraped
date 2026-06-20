import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Jak usunąć dane i konto TikTok (krok po kroku)",
  description:
    "Poznaj różnicę między czyszczeniem danych TikTok, dezaktywacją a trwałym usunięciem konta, dowiedz się, jakie dane są przechowywane, i dlaczego warto najpierw wyeksportować swoje dane.",
  intro:
    "Usunięcie konta TikTok jest trwałe i powoduje usunięcie większości Twoich danych, jednak różni się od wyczyszczenia pamięci podręcznej lub zwykłej dezaktywacji. Ten przewodnik przeprowadza Cię krok po kroku przez każdą z opcji i wyjaśnia, co dzieje się z Twoimi danymi po ich wykonaniu.",
  blocks: [
    {
      type: "p",
      text: "Ludzie sięgają po przycisk \"usuń\" z wielu powodów: chęci ochrony prywatności, przerwy od mediów społecznościowych lub świeżego startu. Zanim zrobisz coś nieodwracalnego, warto dokładnie zrozumieć, jaką akcję wykonujesz i co ona robi z Twoimi danymi.",
    },
    {
      type: "p",
      text: "Ten artykuł omawia różnicę między czyszczeniem danych, dezaktywacją a trwałym usunięciem konta, przedstawia numerowany przewodnik po żądaniu usunięcia, wyjaśnia, jakie dane TikTok przechowuje po usunięciu, i dlaczego warto najpierw pobrać końcowy eksport danych.",
    },
    { type: "h2", text: "Czyszczenie pamięci podręcznej, dezaktywacja i usunięcie — różnice" },
    {
      type: "p",
      text: "Te trzy działania są często mylone, ale mają bardzo różne skutki:",
    },
    {
      type: "ul",
      items: [
        "Czyszczenie pamięci podręcznej lub danych usuwa pliki tymczasowe zapisane na Twoim urządzeniu. Twoje konto, filmy i historia pozostają nienaruszone — zwalniasz tylko lokalną przestrzeń i resetujesz niektóre zachowania aplikacji.",
        "Dezaktywacja ukrywa Twój profil i wstrzymuje konto bez jego usuwania. To odwracalny pierwszy etap, którego TikTok używa przed trwałym usunięciem — zalogowanie się ponownie anuluje ten proces.",
        "Trwałe usunięcie usuwa Twój profil, filmy i większość powiązanych danych z TikTok po upływie okresu karencji. Tej czynności nie można cofnąć po upływie tego okresu.",
      ],
    },
    {
      type: "p",
      text: "Jeśli zależy Ci tylko na czystszej aplikacji lub większej ilości miejsca, wyczyszczenie pamięci podręcznej zwykle wystarczy. Usunięcie konta jest dla tych, którzy chcą całkowicie zlikwidować swoją obecność i dane.",
    },
    { type: "h2", text: "Jak wyczyścić pamięć podręczną TikTok" },
    {
      type: "p",
      text: "Czyszczenie pamięci podręcznej to najlżejsza opcja i dobry pierwszy krok, jeśli nie jesteś jeszcze gotowy na odejście:",
    },
    {
      type: "ul",
      items: [
        "Otwórz TikTok i przejdź do swojego Profilu.",
        "Dotknij ikony menu, a następnie otwórz Ustawienia i prywatność.",
        "Wybierz Zwolnij miejsce (czasem widoczne jako Pamięć podręczna i dane komórkowe).",
        "Dotknij Wyczyść obok opcji Pamięć podręczna.",
      ],
    },
    {
      type: "p",
      text: "To usuwa tylko pliki tymczasowe. Twoje konto, zapisane filmy i historia oglądania pozostają bez zmian.",
    },
    { type: "h2", text: "Pobierz końcowy eksport danych przed usunięciem" },
    {
      type: "p",
      text: "To najważniejszy krok, który łatwo przeoczyć. Po trwałym usunięciu konta nie możesz już zażądać eksportu danych. Okno na zarchiwizowanie swojej aktywności zamyka się wraz z kontem.",
    },
    {
      type: "p",
      text: "Końcowy eksport pozwala zachować osobistą kopię historii oglądania, historii wyszukiwania, rekordów logowania i innej aktywności. Możesz też przeanalizować go później dla refleksji lub z ciekawości.",
    },
    {
      type: "p",
      text: "Jeśli nigdy nie żądałeś eksportu, nasz przewodnik o tym, [[/blog/how-to-download-analyze-tiktok-data:jak pobrać i przeanalizować dane TikTok]], przeprowadzi Cię przez ten proces. Gdy plik będzie gotowy, możesz uruchomić go przez [[analyze:TikTok Wrapped]], aby zamienić surowe rekordy w czytelne podsumowanie, lub najpierw podejrzeć, jak to wygląda, na stronie [[example:przykładowego wrapped]].",
    },
    { type: "h2", text: "Krok po kroku: żądanie usunięcia konta" },
    {
      type: "h3",
      text: "Krok 1: Zrób kopię zapasową swoich danych",
    },
    {
      type: "p",
      text: "Zażądaj i pobierz eksport danych TikTok oraz zapisz wszelkie filmy, które chcesz zachować. Po usunięciu tych treści nie można już odzyskać z TikTok.",
    },
    {
      type: "h3",
      text: "Krok 2: Otwórz Ustawienia i prywatność",
    },
    {
      type: "p",
      text: "Przejdź do swojego Profilu, dotknij ikony menu w górnym rogu i otwórz Ustawienia i prywatność.",
    },
    {
      type: "h3",
      text: "Krok 3: Otwórz ustawienia konta",
    },
    {
      type: "p",
      text: "Dotknij Konto, a następnie przewiń, aby znaleźć opcję Dezaktywuj lub usuń konto.",
    },
    {
      type: "h3",
      text: "Krok 4: Wybierz usunięcie i zweryfikuj tożsamość",
    },
    {
      type: "p",
      text: "Wybierz Usuń konto trwale, a następnie postępuj zgodnie z monitami weryfikacyjnymi. TikTok może poprosić o potwierdzenie kodem wysłanym na Twój telefon lub e-mail.",
    },
    {
      type: "h3",
      text: "Krok 5: Potwierdź usunięcie",
    },
    {
      type: "p",
      text: "Przeczytaj komunikat na ekranie dotyczący okresu dezaktywacji, a następnie potwierdź. Twoje konto wchodzi w okres karencji, po którym zostanie trwale usunięte.",
    },
    {
      type: "p",
      text: "Nazwy pozycji menu mogą się nieznacznie różnić między wersjami aplikacji i regionami, jednak ścieżka przez Ustawienia i prywatność do Konta pozostaje taka sama.",
    },
    { type: "h2", text: "Jakie dane są przechowywane i jak długo" },
    {
      type: "p",
      text: "Usunięcie nie następuje natychmiast. TikTok najpierw dezaktywuje konto na okres karencji, zwykle około 30 dni. Jeśli zalogujesz się ponownie w tym czasie, usunięcie zostaje anulowane i konto jest przywracane.",
    },
    {
      type: "p",
      text: "Po upływie okresu karencji Twój profil i większość powiązanych treści zostaje trwale usunięta. Jednak niektóre informacje mogą być przechowywane dłużej:",
    },
    {
      type: "ul",
      items: [
        "Ograniczone rekordy przechowywane w celu spełnienia obowiązków prawnych lub rozstrzygnięcia sporów.",
        "Informacje potrzebne do zapobiegania oszustwom lub egzekwowania bezpieczeństwa platformy.",
        "Dane już udostępnione publicznie lub innym użytkownikom, które istnieją poza Twoim profilem.",
        "Kopie w kopiach zapasowych systemu, których usunięcie może zająć dodatkowy czas.",
      ],
    },
    {
      type: "p",
      text: "Dokładne okresy przechowywania opisane są w polityce prywatności TikTok i mogą się zmieniać z czasem. Praktyczny wniosek jest taki, że \"trwałe\" nie zawsze oznacza \"natychmiastowe\", a niewielka ilość danych może być przechowywana z powodów zgodności z przepisami.",
    },
    { type: "h2", text: "Kwestie prywatności" },
    {
      type: "p",
      text: "Usunięcie konta to poważny krok na rzecz prywatności, jednak kilka szczegółów warto mieć na uwadze:",
    },
    {
      type: "ul",
      items: [
        "Treści pobrane, zrzuty ekranu lub udostępnienia przez innych użytkowników są poza kontrolą TikTok i nie zostają usunięte w wyniku kasowania konta.",
        "Wiadomości bezpośrednie mogą nadal być widoczne po stronie drugiego uczestnika rozmowy.",
        "Aplikacje innych firm podłączone do TikTok mogą przechowywać własne kopie danych, do których udzieliłeś dostępu.",
        "Pobrany eksport danych jest teraz Twoją odpowiedzialnością i musisz zadbać o jego bezpieczne przechowywanie.",
      ],
    },
    {
      type: "p",
      text: "Więcej na temat odpowiedzialnego zarządzania eksportem znajdziesz w naszym przewodniku o tym, czy [[/blog/is-it-safe-to-upload-tiktok-data-online:bezpieczne jest wgrywanie danych TikTok online]].",
    },
    { type: "h2", text: "Podsumowanie" },
    {
      type: "p",
      text: "Czyszczenie pamięci podręcznej, dezaktywacja i trwałe usunięcie to trzy oddzielne działania o bardzo różnych konsekwencjach. Wiedza o tym, które z nich wybierasz, zapobiega przypadkowej utracie danych i późniejszym zaskoczeniom.",
    },
    {
      type: "p",
      text: "Jeśli Twoim celem jest usunięcie konta, najpierw pobierz końcowy eksport danych. To jedyny sposób na zachowanie zapisu swojej historii TikTok, a i tak możesz go później przeglądać za pomocą [[home:TikTok Wrapped]], nawet jeśli samo konto już nie istnieje.",
    },
  ],
  faq: [
    {
      q: "Jaka jest różnica między czyszczeniem danych TikTok a usunięciem konta?",
      a: "Czyszczenie pamięci podręcznej lub danych usuwa tylko pliki tymczasowe zapisane na Twoim urządzeniu i pozostawia konto aktywne. Usunięcie konta trwale usuwa Twój profil, filmy i większość powiązanych danych z TikTok po upływie okresu dezaktywacji.",
    },
    {
      q: "Jak długo trwa trwałe usunięcie konta TikTok?",
      a: "TikTok najpierw dezaktywuje konto na okres karencji, zwykle około 30 dni. Jeśli nie zalogujesz się ponownie w tym czasie, konto i większość powiązanych danych zostają trwale usunięte.",
    },
    {
      q: "Czy powinienem pobrać swoje dane TikTok przed usunięciem konta?",
      a: "Tak. Po trwałym usunięciu konta nie możesz już żądać eksportu danych, dlatego pobranie końcowej kopii przed usunięciem to jedyny sposób na zachowanie osobistego archiwum historii aktywności.",
    },
    {
      q: "Jakie dane TikTok są przechowywane po usunięciu?",
      a: "Większość treści profilu zostaje usunięta, jednak TikTok może przez pewien czas przechowywać ograniczone informacje w celu spełnienia obowiązków prawnych, zapobiegania oszustwom lub rozstrzygania sporów, zgodnie z opisem w polityce prywatności. Kopie zapasowe mogą też wymagać dodatkowego czasu na wyczyszczenie.",
    },
    {
      q: "Czy mogę używać TikTok Wrapped po usunięciu konta?",
      a: "Tak, o ile pobrałeś eksport danych TikTok przed usunięciem. TikTok Wrapped analizuje przesłany plik eksportu, więc nie wymaga dostępu do aktywnego konta TikTok.",
    },
  ],
}
