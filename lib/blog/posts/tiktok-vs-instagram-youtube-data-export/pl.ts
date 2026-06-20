import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'TikTok vs Instagram vs YouTube: porównanie eksportów danych',
  description:
    'Porównaj, jak TikTok, Instagram i YouTube pozwalają pobrać Twoje dane: jak złożyć wniosek o eksport, czas dostarczenia, formaty plików i który z nich jest najłatwiejszy do analizy.',
  intro:
    'TikTok, Instagram i YouTube umożliwiają pobranie kopii Twoich danych osobowych, jednak proces składania wniosku, czas dostarczenia, formaty plików i poziom szczegółowości znacznie się od siebie różnią.',
  blocks: [
    {
      type: 'p',
      text: "Jeśli kiedykolwiek chciałeś spojrzeć wstecz na swoją aktywność — co oglądałeś, czego szukałeś i jak korzystałeś z aplikacji przez lata — większość głównych platform daje Ci teraz możliwość zażądania tych danych. Wynika to częściowo z przepisów dotyczących prywatności, takich jak RODO i CCPA, które przyznają użytkownikom prawo dostępu do informacji przechowywanych przez dany serwis.",
    },
    {
      type: 'p',
      text: 'Ten przewodnik porównuje doświadczenie eksportu danych na trzech największych platformach: TikTok, Instagram i YouTube. Przyjrzymy się, jak złożyć wniosek o każdy eksport, jak długo trwa dostarczenie, jakie formaty otrzymujesz i co każde archiwum faktycznie ujawnia na temat Twojej aktywności.',
    },
    { type: 'h2', text: 'Jak złożyć wniosek o eksport' },
    {
      type: 'p',
      text: 'Każda platforma ukrywa opcję pobierania w ustawieniach prywatności lub konta, ale ścieżka jest nieco inna.',
    },
    {
      type: 'ul',
      items: [
        "TikTok: Otwórz Ustawienia i prywatność → Konto → Pobierz swoje dane, wybierz format i złóż wniosek.",
        'Instagram: Przejdź do Ustawienia → Centrum kont → Twoje informacje i uprawnienia → Pobierz swoje informacje.',
        'YouTube: Skorzystaj z Google Takeout, wybierz YouTube i YouTube Music, a następnie zdecyduj, co chcesz uwzględnić (historia, komentarze, playlisty).',
      ],
    },
    {
      type: 'p',
      text: "TikTok obsługuje wszystko w swojej aplikacji, Instagram kieruje Cię przez wspólne Centrum kont Meta, a YouTube przekazuje to zadanie do Google Takeout, który obejmuje wszystkie produkty Google w jednym miejscu.",
    },
    { type: 'h2', text: 'Czas dostarczenia' },
    {
      type: 'p',
      text: 'Żaden z tych eksportów nie jest natychmiastowy, ponieważ platformy muszą spakować potencjalnie wieloletnie dane aktywności do archiwum do pobrania.',
    },
    {
      type: 'p',
      text: 'TikTok zazwyczaj dostarcza dane najszybciej — często w ciągu kilku godzin do kilku dni, a plik pojawia się w aplikacji do pobrania. Instagram i YouTube mogą potrzebować od kilku godzin do kilku dni, w zależności od rozmiaru konta i wybranego zakresu dat. Większe archiwa, zwłaszcza te zawierające multimedia, wymagają więcej czasu na przygotowanie.',
    },
    { type: 'h2', text: 'Formaty plików' },
    {
      type: 'p',
      text: 'Format, który otrzymujesz, ma duże znaczenie, jeśli planujesz później analizować dane.',
    },
    {
      type: 'ul',
      items: [
        'TikTok pozwala wybrać między JSON (czytelny maszynowo, idealny do analizy) a TXT/HTML (łatwiejszy do ręcznego przeglądania).',
        'Instagram oferuje JSON lub HTML, gdzie HTML otwiera się jako strony internetowe, a JSON lepiej sprawdza się w narzędziach.',
        'YouTube dostarcza historię jako JSON lub HTML, a inne elementy jako CSV — wszystko spakowane w archiwum ZIP.',
      ],
    },
    {
      type: 'p',
      text: 'Jeśli Twoim celem jest analiza aktywności, a nie tylko jej pobieżne przejrzenie, zawsze wybieraj JSON tam, gdzie taka opcja istnieje.',
    },
    { type: 'h2', text: 'Porównanie obok siebie' },
    {
      type: 'table',
      headers: ['Funkcja', 'TikTok', 'Instagram', 'YouTube'],
      rows: [
        ['Metoda złożenia wniosku', 'Ustawienia w aplikacji', 'Centrum kont', 'Google Takeout'],
        ['Czas dostarczenia', 'Godziny do ~2 dni', 'Godziny do kilku dni', 'Godziny do kilku dni'],
        ['Format', 'JSON lub TXT/HTML', 'JSON lub HTML', 'JSON, HTML, CSV'],
        [
          'Szczegółowość historii oglądania',
          'Wysoka (znaczniki czasu dla każdego wideo)',
          'Ograniczona (brak dziennika wideo z kanału)',
          'Wysoka (znaczniki czasu dla każdego wideo)',
        ],
        ['Historia wyszukiwania', 'Zawarta', 'Zawarta', 'Zawarta'],
      ],
    },
    { type: 'h2', text: 'Co ujawnia każdy eksport' },
    {
      type: 'h3',
      text: 'Szczegółowość historii oglądania',
    },
    {
      type: 'p',
      text: "TikTok i YouTube rejestrują szczegółowy, ostemplowany znacznikami czasu dziennik oglądanych filmów, co pozwala odtworzyć nawyki oglądania w czasie. Eksport Instagrama jest tu słabszy — rejestruje interakcje i pewne dane o oglądaniu, ale nie zapewnia tak przejrzystej historii kanału dla każdego wideo, jaką oferuje TikTok.",
    },
    {
      type: 'h3',
      text: 'Historia wyszukiwania',
    },
    {
      type: 'p',
      text: 'Wszystkie trzy platformy zawierają Twoje zapytania wyszukiwania, dzięki czemu możesz zobaczyć, jakich tematów, twórców i dźwięków szukałeś. To jedna z najbardziej spójnych sekcji we wszystkich eksportach.',
    },
    {
      type: 'h3',
      text: 'Wiadomości i interakcje',
    },
    {
      type: 'p',
      text: 'TikTok i Instagram zawierają zarówno wiadomości bezpośrednie, jak i zapisy aktywności, takie jak polubienia, komentarze i obserwacje. YouTube skupia się bardziej na komentarzach, subskrypcjach i playlistach, ponieważ nie jest to przede wszystkim platforma do przesyłania wiadomości.',
    },
    { type: 'h2', text: 'Który eksport jest najłatwiejszy do analizy?' },
    {
      type: 'p',
      text: 'Pod względem wartości analitycznej TikTok i YouTube prowadzą, ponieważ oba dostarczają szczegółowe, ostemplowane znacznikami czasu historie oglądania w formacie JSON. Ten ustrukturyzowany format ułatwia narzędziom zliczanie filmów, znajdowanie godzin szczytowych i wydobywanie wzorców.',
    },
    {
      type: 'p',
      text: "Eksport Instagrama jest dobrze zorganizowany, ale mniej skupiony na ciągłym oglądaniu wideo — opowiada więc inną historię, bardziej o interakcjach niż o pasywnym oglądaniu.",
    },
    {
      type: 'p',
      text: 'W praktyce surowe pliki eksportu są trudne do samodzielnego odczytania. Tu z pomocą przychodzi narzędzie do podsumowywania. [[home:TikTok Wrapped]] pobiera eksport danych TikTok i przekształca go w przejrzyste, wizualne informacje o Twojej aktywności. Możesz [[analyze:przeanalizować własny eksport]] lub najpierw obejrzeć [[example:przykładowe podsumowanie]], aby zobaczyć, jak wyglądają wyniki.',
    },
    { type: 'h2', text: 'Podsumowanie' },
    {
      type: 'p',
      text: 'TikTok, Instagram i YouTube szanują Twoje prawo do pobrania danych, ale różnią się pod względem łatwości tego procesu i przydatności wyników do analizy. TikTok i YouTube wyróżniają się szczegółową historią oglądania, podczas gdy Instagram oferuje szeroki obraz interakcji.',
    },
    {
      type: 'p',
      text: 'Jeśli chcesz zagłębić się w temat, zapoznaj się z naszymi przewodnikami na temat [[/blog/how-to-download-analyze-tiktok-data:jak pobrać i przeanalizować dane z TikToka]] oraz różnicy między [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:TikTok Wrapped a TikTok Analytics]].',
    },
  ],
  faq: [
    {
      q: 'Jak mogę poprosić o swoje dane z TikToka, Instagrama i YouTube?',
      a: "TikTok oferuje tę opcję w Ustawieniach i prywatności w sekcji Pobierz swoje dane. Instagram korzysta z Centrum kont w sekcji Pobierz swoje informacje. YouTube używa Google Takeout, gdzie wybierasz YouTube i YouTube Music.",
    },
    {
      q: 'Jak długo trwa dostarczenie każdego eksportu danych?',
      a: 'TikTok jest zazwyczaj najszybszy — często w ciągu kilku godzin do około dwóch dni. Instagram i YouTube mogą potrzebować od kilku godzin do kilku dni, w zależności od rozmiaru konta i wybranego zakresu dat.',
    },
    {
      q: 'Jaki format wybrać do analizy?',
      a: 'Wybieraj JSON zawsze, gdy jest dostępny. JSON jest czytelny maszynowo i najlepiej sprawdza się w narzędziach analitycznych, podczas gdy HTML i TXT są łatwiejsze do ręcznego czytania, ale trudniejsze w przetwarzaniu.',
    },
    {
      q: 'Która platforma zapewnia najbardziej szczegółową historię oglądania?',
      a: 'TikTok i YouTube dostarczają szczegółowe, ostemplowane znacznikami czasu historie oglądania. Instagram rejestruje interakcje, ale nie oferuje takiej samej historii kanału dla każdego wideo.',
    },
    {
      q: 'Który eksport jest najłatwiejszy do analizy?',
      a: 'TikTok i YouTube są najłatwiejsze do analizy, ponieważ ich ustrukturyzowane historie oglądania w formacie JSON ułatwiają zliczanie filmów i znajdowanie wzorców. Narzędzie takie jak TikTok Wrapped może przekształcić eksport z TikToka w przejrzyste wizualne informacje.',
    },
  ],
}
