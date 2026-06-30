import type { Dictionary } from './en'

export const dictionary: Dictionary = {
  nav: {
    home: 'Strona główna',
    analyze: 'Analizuj',
    example: 'Przykład',
    about: 'O nas',
    blog: 'Blog',
    contact: 'Kontakt',
  },

  langSwitcher: {
    label: 'Język',
  },

  cta: {
    analyzeData: 'Przeanalizuj swoje dane z TikTok →',
    viewExample: 'Zobacz przykładowe TikTok Wrapped →',
    backToHome: '← Powrót do strony głównej',
  },

  disclaimer: {
    underH1:
      'Niezależne i nieoficjalne narzędzie — niepowiązane z TikTok ani ByteDance Ltd., nieuznawane ani niewspierane przez te firmy.',
  },

  consent: {
    ariaLabel: 'Zgoda na pliki cookie',
    text:
      'Cenimy Twoją prywatność. Używamy plików cookie do prowadzenia analityki (Google Tag Manager) oraz do wyświetlania reklam za pośrednictwem Google AdSense, w tym do personalizacji reklam. Za Twoją zgodą Google i jego partnerzy mogą wykorzystywać pliki cookie do personalizowania reklam na podstawie Twoich wizyt na tej i innych stronach. W każdej chwili możesz zaakceptować, odrzucić lub zmienić swój wybór. Zobacz naszą [[privacy:Politykę prywatności]].',
    accept: 'Zaakceptuj wszystkie',
    reject: 'Odrzuć zbędne',
  },

  footer: {
    description:
      'Niezależne, nieoficjalne narzędzie do zrozumienia eksportu Twoich danych z TikTok — nawyki oglądania, zabawny ranking osobowości oraz cała Twoja historia na TikTok.',
    productTitle: 'Produkt',
    legalTitle: 'Informacje prawne',
    resourcesTitle: 'Zasoby',
    links: {
      home: 'Strona główna',
      analyze: 'Analizuj',
      example: 'Przykład',
      exampleWrapped: 'Przykładowe Wrapped',
      about: 'O nas',
      privacy: 'Polityka prywatności',
      terms: 'Regulamin',
      contact: 'Kontakt',
      blog: 'Blog',
    },
    copyright: '© {year} TikTok Wrapped. Wszelkie prawa zastrzeżone.',
    disclaimer:
      'TikTok Wrapped to niezależne narzędzie do analizy eksportu Twoich własnych danych z TikTok. Nie jest powiązane z TikTok ani ByteDance Ltd., nie jest też przez te firmy uznawane ani wspierane. „TikTok” jest znakiem towarowym swojego właściciela.',
    privacy: 'Prywatność',
    terms: 'Regulamin',
    cookieSettings: 'Ustawienia cookie',
  },

  home: {
    trust: ["Za darmo", "100% prywatne", "Bez logowania"],
    logoSubtitle: 'Przeanalizuj eksport swoich danych z TikTok',
    heroTagline: 'Twój rok na TikTok jak na dłoni 🎬',
    heroPlatformTagline:
      'Niezależna platforma do zrozumienia danych o Twojej aktywności na TikTok.',
    features: ['Poznaj swój ranking osobowości', 'Zobacz szczegółowe statystyki oglądania'],
    heroDescription:
      'TikTok Wrapped to niezależne narzędzie internetowe, które pomaga zrozumieć Twoją osobistą aktywność na TikTok na podstawie oficjalnego eksportu Twoich danych z TikTok. Gdy zażądasz swoich danych od TikTok, otrzymasz je w postaci pliku ZIP lub JSON zawierającego surowe informacje o aktywności. TikTok Wrapped analizuje ten plik i przekształca go w przejrzyste podsumowania oraz wizualne wnioski, takie jak wzorce korzystania, oś czasu aktywności i ogólne statystyki zaangażowania. Usługa działa wyłącznie na danych, które samodzielnie zdecydujesz się przesłać, i jest przeznaczona do celów informacyjnych oraz analizy osobistej.',
    learnMoreTitle: 'Dowiedz się więcej o danych z TikTok',
    learnMoreText:
      'TikTok pozwala użytkownikom pobrać szczegółowy eksport danych o ich osobistej aktywności, ale informacje te często są dostarczane w technicznym formacie, który bywa trudny do zinterpretowania. TikTok Wrapped pomaga zrozumieć, jak działają Twoje dane, co zawierają i jak można je odpowiedzialnie analizować. Dzięki poradnikom i wyjaśnieniom edukacyjnym skupiamy się na przejrzystości, prywatności i klarowności — pomagając użytkownikom zrozumieć własne dane bez domysłów i bez dostępu do platformy.',
    learnMoreLinks: [
      { slug: 'tiktok-wrapped-explained-what-it-is-how-it-works', label: 'TikTok Wrapped wyjaśnione: czym jest i jak działa' },
      { slug: 'how-to-download-analyze-tiktok-data', label: 'Jak pobrać i przeanalizować dane z TikTok' },
      { slug: 'what-your-tiktok-usage-says-about-your-digital-habits', label: 'Co Twoje korzystanie z TikTok mówi o Twoich cyfrowych nawykach' },
      { slug: 'how-to-analyze-tiktok-data-safely-privacy-first-guide', label: 'Jak bezpiecznie analizować dane z TikTok' },
    ],
    revealTitle: 'Co mogą ujawnić dane z TikTok',
    revealItems: [
      'Częstotliwość korzystania i trendy aktywności w czasie',
      'Wzorce zaangażowania w zależności od pory dnia',
      'Ogólne zachowania interakcji (polubienia, komentarze, udostępnienia)',
      'Długoterminowe zmiany w nawykach korzystania z aplikacji',
    ],
    revealDisclaimer:
      'Wszystkie wnioski opierają się na eksportach danych będących własnością użytkownika i służą wyłącznie celom informacyjnym oraz osobistemu zrozumieniu.',
    howItWorksTitle: 'Jak działa TikTok Wrapped',
    howItWorksText:
      'TikTok Wrapped działa, analizując oficjalne eksporty danych z TikTok, które użytkownicy sami zdecydują się pobrać. Platforma skupia się na podsumowywaniu i porządkowaniu tych informacji w czytelne wnioski, bez dostępu do kont użytkowników i bez zbierania dodatkowych danych. Szczegółowe instrukcje i narzędzia analityczne są dostępne na [[analyze:osobnej stronie]] dla użytkowników, którzy chcą głębiej zgłębić swoje dane.',
    analyzeButton: 'Przeanalizuj swoje dane z TikTok →',
    demoTitle: '🎬 Zobacz to w akcji',
    demoDescription:
      'Chcesz zobaczyć, co tworzy TikTok Wrapped, zanim zaczniesz? Przejrzyj kompletny, realistycznie wyglądający przykład zbudowany na podstawie przykładowych danych — bez konieczności przesyłania czegokolwiek.',
    demoButton: 'Zobacz przykładowe TikTok Wrapped →',
    moreStatsTitle: '✨ A czeka na Ciebie znacznie więcej...',
    statTags: [
      '🔍 Najczęstsze wyszukiwania',
      '📅 Aktywność według roku',
      '⏰ Godziny szczytu',
      '❤️ Polubienia i komentarze',
      '📤 Historia udostępnień',
      '🔴 Transmisje na żywo',
    ],
    demoCta: 'Gotowy, by odkryć swoje statystyki? [[analyze:Przeanalizuj swoje dane już teraz! →]]',
  },

  analyze: {
    subtitle: 'Przeanalizuj swoje dane z TikTok',
    howToTitle: '📱 Jak pobrać swoje dane z TikTok',
    importantLabel: 'Ważne:',
    importantText:
      'TikTok udostępnia Twoje dane wyłącznie na żądanie. Po wysłaniu prośby przygotowanie danych może potrwać od kilku godzin do 3 dni. Pamiętaj, aby przy składaniu prośby wybrać format „JSON”!',
    steps: [
      { title: 'Otwórz Ustawienia', text: 'Przejdź do swojego Profilu → dotknij menu ☰ → wybierz Ustawienia', alt: 'Krok 1: Otwórz Ustawienia' },
      { title: 'Przejdź do Konta', text: 'W Ustawieniach i prywatności znajdź i dotknij Konto', alt: 'Krok 2: Przejdź do Konta' },
      { title: 'Pobierz swoje dane', text: 'Przewiń w dół i dotknij „Pobierz swoje dane”', alt: 'Krok 3: Pobierz swoje dane' },
      { title: 'Zażądaj danych (JSON)', text: 'Zmień format na „JSON”, wybierz „Wszystkie dane”, a następnie dotknij „Zażądaj danych”', alt: 'Krok 4: Zażądaj danych' },
    ],
    footerSteps: [
      'Otrzymasz powiadomienie, gdy Twoje dane będą gotowe',
      'Pobierz plik ZIP z karty „Pobierz dane”',
      'Prześlij go tutaj i ciesz się swoimi statystykami!',
    ],
    dropPrompt: 'Upuść tutaj swój plik ZIP lub JSON',
    dropHint: 'TikTok → Ustawienia → Prywatność → Pobierz dane',
    analyzeBtn: '🔍 Analizuj',
    analyzingBtn: '⏳ Analizowanie...',
    privacyNote:
      'Twój plik jest przetwarzany wyłącznie po to, by wygenerować Twoje wyniki. Nie sprzedajemy, nie udostępniamy ani nie wykorzystujemy przesłanych danych do celów reklamowych.',
    howToLink: 'Nie masz swoich danych? Dowiedz się, jak je pobrać ↓',
    selectFileError: 'Wybierz plik',
    fileTypeError: 'Wybierz plik ZIP lub JSON',
    genericError: 'Podczas przetwarzania pliku wystąpił błąd',
    jsonNotFound: 'Nie znaleziono pliku JSON w archiwum',
    progress: {
      reading: 'Wczytywanie pliku...',
      extracting: 'Rozpakowywanie archiwum ZIP...',
      readingFile: 'Wczytywanie {name}...',
      parsing: 'Przetwarzanie JSON...',
      analyzing: 'Analizowanie danych...',
      processing: 'Przetwarzanie danych...',
    },
    results: {
      yourStats: '🎰 Twoje statystyki',
      videosWatched: 'Obejrzane filmy',
      hoursOnTikTok: 'Godziny na TikTok',
      daysOfWatching: 'Dni oglądania',
      yourRank: 'Twój ranking TikTok',
      followers: 'Obserwujący',
      following: 'Obserwowani',
      interests: 'Zainteresowania',
      whenActive: '⏰ Kiedy jesteś najbardziej aktywny',
      peakHour: 'Godzina szczytu',
      mostActiveDay: 'Najbardziej aktywny dzień',
      firstWatch: 'Pierwsze obejrzenie',
      lastWatch: 'Ostatnie obejrzenie',
      engagement: '❤️ Zaangażowanie',
      videosLiked: 'Polubione filmy',
      favorites: 'Ulubione',
      comments: 'Komentarze',
      shares: 'Udostępnienia',
      activityByYear: '📅 Aktywność według roku',
      year: 'Rok',
      videos: 'filmów',
      mostActiveMonth: 'Najbardziej aktywny miesiąc',
      avgPerDayPrefix: 'Średnio',
      avgPerDaySuffix: 'filmów dziennie',
      collections: '📂 Twoje kolekcje',
      favoritesTitle: '⭐ Ulubione',
      favoriteSounds: 'Ulubione dźwięki',
      favoriteEffects: 'Ulubione efekty',
      favoriteHashtags: 'Ulubione hashtagi',
      topSearches: '🔍 Najczęstsze wyszukiwania',
      totalSearches: 'Łącznie wyszukiwań',
      shareDestinations: '📤 Cele udostępnień',
      yourComments: '💭 Twoje komentarze',
      totalComments: 'Łącznie komentarzy',
      avgChars: 'średnio {n} znaków',
      messages: '💬 Wiadomości',
      chats: 'Czaty',
      messagesLabel: 'Wiadomości',
      sent: 'Wysłane',
      received: 'Odebrane',
      topChats: 'Najczęstsze czaty:',
      recentFollowers: '👥 Ostatni obserwujący',
      devicesNetworks: '📱 Urządzenia i sieci',
      totalLogins: 'Łącznie logowań',
      devices: 'Urządzenia',
      networks: 'Sieci',
      tiktokLive: '🔴 TikTok Live',
      livesWatched: 'Obejrzane transmisje na żywo',
      liveComments: 'Komentarze na żywo',
      blocked: '🚫 Zablokowani',
      messagesCountSuffix: 'wiadomości',
    },
  },

  example: {
    title: 'Przykładowe TikTok Wrapped',
    subtitle: 'Kompletny, realistycznie wyglądający przykład — bez konieczności przesyłania danych',
    introText:
      'Ta strona pokazuje dokładnie to, co otrzymujesz od [[home:TikTok Wrapped]] po przeanalizowaniu eksportu danych z TikTok — bez przesyłania czegokolwiek. Każda liczba poniżej należy do fikcyjnego, przykładowego konta i służy wyłącznie do celów ilustracyjnych. Gdy [[analyze:przeanalizujesz własny eksport]], to samo zestawienie zostanie wygenerowane prywatnie w Twojej przeglądarce na podstawie Twojego prawdziwego pliku. TikTok Wrapped to niezależne, nieoficjalne narzędzie, niepowiązane z TikTok ani ByteDance Ltd. oraz nieuznawane przez te firmy.',
    rankExplanation:
      'Twój ranking opiera się na szacowanym czasie oglądania. 408 godzin tego przykładowego konta plasuje je w kategorii „Główny Bohater” — w sumie jest 16 rang, od „Energia NPC” aż po „Speedrun Bez Życia WR”.',
    ctaTitle: '🎬 Gotowy zobaczyć swoje własne?',
    ctaDescription:
      'Twoje prawdziwe TikTok Wrapped jest generowane w całości w Twojej przeglądarce na podstawie eksportu Twoich własnych danych — Twój plik nigdy nie opuszcza Twojego urządzenia.',
    ctaButton: 'Przeanalizuj swoje dane z TikTok →',
    ctaLearn: 'Pierwszy raz z eksportem danych? [[blog:Dowiedz się, jak pobrać swoje dane z TikTok ↗]]',
    sample: {
      displayName: 'Przykładowy użytkownik',
      interests: ['Komedia', 'Gotowanie', 'Podróże', 'Fitness', 'Muzyka'],
      activeDay: 'Niedziela',
      activeMonth: 'Listopad 2024',
      firstWatch: '4 mar 2022',
      lastWatch: '14 gru 2025',
      searches: [
        'łatwe przepisy na obiad',
        'trening do maratonu',
        'triki podróżnicze',
        'standup komediowy',
        'trening w domu',
        'tania podróż po europie',
        'kurs gry na gitarze',
        'pomysły na meal prep',
        'porady na produktywność',
        'street food',
      ],
      shareMethods: ['Wiadomość prywatna', 'Skopiuj link', 'WhatsApp', 'Instagram'],
      networks: ['Wi-Fi', 'Sieć komórkowa'],
    },
  },

  about: {
    title: 'O nas',
    paragraphs: [
      'TikTok Wrapped to niezależna usługa internetowa stworzona, aby pomóc użytkownikom lepiej zrozumieć dane o ich osobistej aktywności na TikTok.',
      'TikTok pozwala użytkownikom pobrać oficjalny eksport danych zawierający informacje o ich aktywności na platformie. Choć dane te należą do użytkownika, często są dostarczane w surowym i nieuporządkowanym formacie, który jest trudny do zinterpretowania. TikTok Wrapped udostępnia narzędzia, które porządkują te dane i prezentują je w przejrzysty, czytelny i przyjazny dla użytkownika sposób.',
      'Witryna pozwala użytkownikom przesłać własny eksport danych z TikTok i otrzymać automatyczne wnioski oparte wyłącznie na tym pliku. Usługa skupia się na podsumowywaniu, wizualizacji i ogólnej analizie wzorców korzystania, aby pomóc użytkownikom lepiej zrozumieć ich cyfrowe zachowania.',
      'TikTok Wrapped nie tworzy kont, nie wymaga rejestracji i nie oferuje funkcji sieci społecznościowej ani hostingu treści. Witryna istnieje wyłącznie jako narzędzie informacyjne, które przetwarza pliki dostarczone przez użytkownika na jego żądanie.',
      'Naszym celem jest zapewnienie prostego, przejrzystego i nastawionego na prywatność doświadczenia. Korzystanie z witryny jest bezpłatne i wspierane reklamami; zobacz naszą [[privacy:Politykę prywatności]], aby dowiedzieć się, jak działają pliki cookie i reklamy.',
      'TikTok Wrapped jest prowadzone przez AffSquad i można się z nami skontaktować pod adresem [[email:hello@ttwrapper.com]]. Jest to niezależne, nieoficjalne narzędzie, niepowiązane z TikTok ani ByteDance Ltd. oraz nieuznawane i niewspierane przez te firmy.',
    ],
    faqTitle: 'Najczęściej zadawane pytania',
    faq: [
      { q: 'Czym jest TikTok Wrapped?', a: 'TikTok Wrapped to narzędzie internetowe, które pomaga użytkownikom analizować i lepiej rozumieć ich osobistą aktywność na TikTok na podstawie oficjalnego eksportu danych z TikTok.' },
      { q: 'Jak uzyskać eksport moich danych z TikTok?', a: 'Możesz zażądać i pobrać eksport swoich danych z ustawień TikTok (Dane / Prywatność). Gdy otrzymasz plik ZIP od TikTok, możesz przesłać go do TikTok Wrapped.' },
      { q: 'Czy przechowujecie mój przesłany plik ZIP?', a: 'Pliki są przetwarzane wyłącznie w celu wygenerowania żądanych przez Ciebie wniosków. Nie przechowujemy ani nie sprzedajemy przesłanych danych i nie wykorzystujemy ich do personalizacji reklam.' },
      { q: 'Czy TikTok Wrapped jest powiązane z TikTok?', a: 'Nie. TikTok Wrapped to niezależna usługa, niepowiązana z TikTok ani ByteDance oraz nieuznawana i niewspierana przez te firmy.' },
      { q: 'Czy korzystanie z TikTok Wrapped jest bezpłatne?', a: 'Podstawowe funkcje witryny są dostępne bez opłat. Witryna może wyświetlać reklamy, aby pokryć bieżące koszty rozwoju i hostingu.' },
    ],
  },

  contact: {
    title: 'Kontakt',
    intro:
      'Jeśli masz pytania dotyczące TikTok Wrapped, naszej witryny lub tego, jak działa usługa, możesz skontaktować się z nami, korzystając z podanych poniżej danych kontaktowych.',
    welcomeTitle: 'Chętnie odpowiemy na zapytania dotyczące:',
    welcomeItems: [
      'ogólnych pytań o platformę,',
      'prywatności i przetwarzania danych,',
      'problemów technicznych lub opinii,',
      'kwestii prawnych lub związanych z regulaminem.',
    ],
    howToTitle: 'Jak się z nami skontaktować',
    emailLabel: 'E-mail:',
    responseNote: 'Staramy się odpowiadać na wszystkie uzasadnione zapytania w ciągu 2–3 dni roboczych.',
    aboutTitle: 'O komunikacji',
    aboutText1:
      'TikTok Wrapped to niezależna usługa internetowa prowadzona przez AffSquad, skupiona na analizie eksportów danych z TikTok dostarczanych przez użytkowników. Nie jest powiązana z TikTok ani ByteDance Ltd., nie jest też przez te firmy uznawana ani wspierana. Nie oferujemy obsługi klienta za pośrednictwem mediów społecznościowych ani wsparcia telefonicznego.',
    aboutText2:
      'Prosimy nie przesyłać wrażliwych danych osobowych za pośrednictwem e-maila, chyba że jest to niezbędne do rozpatrzenia Twojego zapytania.',
  },

  privacy: {
    title: 'Polityka prywatności',
    lastUpdatedLabel: 'Ostatnia aktualizacja:',
    lastUpdatedDate: '20 czerwca 2026',
    intro:
      'Niniejsza Polityka prywatności wyjaśnia, w jaki sposób TikTok Wrapped („TikTok Wrapped”, „my”, „nas”) zbiera, wykorzystuje i chroni informacje, gdy odwiedzasz ttwrapper.com. TikTok Wrapped to niezależne, nieoficjalne narzędzie, niepowiązane z TikTok ani ByteDance Ltd. oraz nieuznawane i niewspierane przez te firmy.',
    cookieTable: {
      providerHeader: 'Dostawca',
      purposeHeader: 'Cel',
      typeHeader: 'Rodzaj',
      rows: [
        { provider: 'TikTok Wrapped', purpose: 'Zapamiętuje Twój wybór dotyczący zgody na pliki cookie', type: 'Niezbędne' },
        { provider: 'Google Tag Manager / Analytics', purpose: 'Zagregowane, anonimowe statystyki korzystania', type: 'Analityczne (wymagana zgoda)' },
        { provider: 'Google AdSense / DoubleClick', purpose: 'Wyświetlanie i pomiar reklam, w tym reklam spersonalizowanych', type: 'Reklamowe (wymagana zgoda)' },
      ],
    },
    sections: [
      { title: '1. Kim jesteśmy (Administrator danych)', paragraphs: ['TikTok Wrapped jest prowadzone przez AffSquad, administratora danych odpowiedzialnego za tę witrynę. Jeśli masz pytania dotyczące niniejszej polityki lub sposobu przetwarzania Twoich danych, możesz skontaktować się z nami pod adresem [[email:hello@ttwrapper.com]] lub za pośrednictwem naszej strony [[contact:Kontakt]].'] },
      { title: '2. Przesłane przez Ciebie dane z TikTok', paragraphs: ['Gdy korzystasz z analizatora, eksport Twoich danych z TikTok (ZIP lub JSON) jest odczytywany i przetwarzany w całości w Twojej własnej przeglądarce. Plik nie jest przesyłany do naszych serwerów ani na nich przechowywany, a my nie tworzymy na jego podstawie profili ani baz danych. Analiza istnieje wyłącznie w karcie Twojej przeglądarki i znika, gdy zamkniesz lub odświeżysz stronę.', 'Aby korzystać z analizatora, nie wymagamy zakładania konta, logowania ani identyfikacji osobowej.'] },
      { title: '3. Informacje zbierane automatycznie', paragraphs: ['Podobnie jak na większości witryn, gdy odwiedzasz ttwrapper.com, pewne informacje techniczne mogą być zbierane za pomocą plików cookie i podobnych technologii przez nas oraz przez zewnętrznych dostawców (takich jak Google), w tym:'], list: ['typ urządzenia i przeglądarki, rozmiar ekranu oraz system operacyjny;', 'adres IP (wykorzystywany do przybliżonego określenia ogólnej lokalizacji oraz w celach bezpieczeństwa);', 'odwiedzane strony, adresy URL odsyłające oraz zdarzenia interakcji;', 'identyfikatory plików cookie wykorzystywane do analityki i reklam.'], afterList: ['Informacje te są przetwarzane wyłącznie wtedy, gdy wyraziłeś zgodę lub gdy mamy w tym uzasadniony interes, jak opisano poniżej.'] },
      { title: '4. Pliki cookie i podobne technologie', paragraphs: ['Używamy plików cookie i podobnych technologii do realizacji funkcji niezbędnych, analityki i reklam. Zbędne pliki cookie (analityczne i reklamowe) są ustawiane dopiero po wyrażeniu przez Ciebie zgody za pośrednictwem naszego banera cookie. Główne kategorie to:'], hasCookieTable: true, afterList: ['W każdej chwili możesz zmienić lub wycofać swoją zgodę, korzystając z linku „Ustawienia cookie” w stopce witryny.'] },
      { title: '5. Reklamy (Google AdSense)', paragraphs: ['Do wyświetlania reklam wykorzystujemy Google AdSense. Obowiązują następujące informacje:'], list: ['Zewnętrzni dostawcy, w tym Google, wykorzystują pliki cookie do wyświetlania reklam na podstawie Twoich wcześniejszych wizyt na tej i innych witrynach.', 'Wykorzystywanie przez Google reklamowych plików cookie (w tym pliku cookie DoubleClick) umożliwia Google i jego partnerom wyświetlanie Ci reklam na podstawie Twoich wizyt na tej i/lub innych witrynach w internecie.', 'Możesz zrezygnować ze spersonalizowanych reklam, odwiedzając [[adsSettings:Ustawienia reklam Google]].', 'Możesz zrezygnować z wykorzystywania plików cookie przez niektórych zewnętrznych dostawców do celów spersonalizowanych reklam na stronie [[aboutAds:aboutads.info/choices]] lub [[yourChoices:youronlinechoices.eu]].', 'Dowiedz się, jak Google wykorzystuje informacje z witryn korzystających z jego usług, na stronie [[partnerSites:policies.google.com/technologies/partner-sites]].'], afterList: ['Jeśli nie wyrazisz zgody na spersonalizowane reklamy, Google nadal może wyświetlać niespersonalizowane reklamy oparte na ogólnym kontekście, a nie na Twojej historii przeglądania.'] },
      { title: '6. Analityka', paragraphs: ['Wykorzystujemy Google Tag Manager oraz usługi analityczne Google, aby zbiorczo zrozumieć, w jaki sposób odwiedzający korzystają z witryny (na przykład które strony są popularne). Usługi te mogą ustawiać pliki cookie i przetwarzać dane techniczne, takie jak Twój adres IP. Ładują się one dopiero po wyrażeniu przez Ciebie zgody na analityczne pliki cookie.'] },
      { title: '7. Zarządzanie zgodą', paragraphs: ['Korzystamy z Google Consent Mode v2. Domyślnie przechowywanie danych reklamowych i analitycznych jest ustawione na „odmowa”, a powiązane tagi nie ładują się, dopóki nie dokonasz wyboru w naszym banerze cookie. W każdej chwili możesz ponownie otworzyć baner i zmienić swoją decyzję za pomocą linku „Ustawienia cookie” w stopce. Odwiedzający z Europejskiego Obszaru Gospodarczego, Wielkiej Brytanii i Szwajcarii są proszeni o zgodę przed użyciem jakichkolwiek zbędnych plików cookie.'] },
      { title: '8. Jak wykorzystujemy informacje', paragraphs: [], list: ['do obsługi, utrzymania i zabezpieczenia witryny;', 'do generowania wniosków z danych, które zdecydujesz się przeanalizować (w Twojej przeglądarce);', 'do zrozumienia zbiorczego korzystania i ulepszania usługi;', 'do wyświetlania reklam, które pomagają finansować bezpłatną usługę.'], afterList: ['Nie sprzedajemy Twoich danych osobowych i nie wykorzystujemy przesłanego przez Ciebie eksportu z TikTok do celów reklamowych ani profilowania.'] },
      { title: '9. Udostępnianie danych', paragraphs: ['Nie udostępniamy nikomu przesłanych przez Ciebie danych z TikTok. Opisane powyżej dane techniczne i dane z plików cookie mogą być przetwarzane przez naszych usługodawców, w tym Google (reklamy i analityka) oraz naszego dostawcę hostingu (Vercel), z których każdy działa zgodnie z własną polityką prywatności.'] },
      { title: '10. Przechowywanie danych', paragraphs: ['Przesłany przez Ciebie eksport z TikTok nigdy nie jest przez nas przechowywany, więc po naszej stronie nie ma niczego do zachowania ani usunięcia. Zbiorcze dane analityczne i reklamowe przechowywane przez naszych dostawców są przechowywane zgodnie z ich własnymi okresami retencji (na przykład standardowymi ustawieniami retencji Google).'] },
      { title: '11. Twoje prawa do prywatności (RODO/UK GDPR)', paragraphs: ['Jeśli przebywasz na terenie EOG lub Wielkiej Brytanii, masz prawo do dostępu, sprostowania, usunięcia, ograniczenia lub sprzeciwu wobec przetwarzania Twoich danych osobowych, a także prawo do przenoszenia danych i wycofania zgody w dowolnym momencie. Aby skorzystać z tych praw, skontaktuj się z nami pod adresem [[email:hello@ttwrapper.com]]. Masz również prawo wnieść skargę do lokalnego organu ochrony danych.'] },
      { title: '12. Prawa do prywatności w Kalifornii (CCPA/CPRA)', paragraphs: ['Mieszkańcy Kalifornii mają prawo wiedzieć, jakie dane osobowe są zbierane, żądać ich usunięcia oraz zrezygnować ze „sprzedaży” lub „udostępniania” danych osobowych. Nie sprzedajemy danych osobowych. Aby skorzystać ze swoich praw, skontaktuj się z nami pod adresem [[email:hello@ttwrapper.com]].'] },
      { title: '13. Międzynarodowe przekazywanie danych', paragraphs: ['Nasi dostawcy mogą przetwarzać dane na serwerach zlokalizowanych poza Twoim krajem, w tym w Stanach Zjednoczonych. W wymaganych przypadkach takie przekazywanie jest chronione odpowiednimi zabezpieczeniami, takimi jak standardowe klauzule umowne dostawców.'] },
      { title: '14. Prywatność dzieci', paragraphs: ['TikTok Wrapped nie jest skierowane do dzieci poniżej 13. roku życia i nie zbieramy świadomie ich danych osobowych. Do uzyskania eksportu danych mają zastosowanie własne wymogi TikTok dotyczące minimalnego wieku.'] },
      { title: '15. Zmiany w niniejszej polityce', paragraphs: ['Możemy od czasu do czasu aktualizować niniejszą Politykę prywatności. Istotne zmiany zostaną odzwierciedlone poprzez aktualizację daty „Ostatnia aktualizacja” na górze tej strony.'] },
      { title: '16. Kontakt', paragraphs: ['Masz pytania dotyczące niniejszej Polityki prywatności? Napisz na [[email:hello@ttwrapper.com]] lub skorzystaj z naszej strony [[contact:Kontakt]].'] },
    ],
  },

  terms: {
    title: 'Regulamin',
    lastUpdatedLabel: 'Ostatnia aktualizacja:',
    lastUpdatedDate: '20 czerwca 2026',
    intro:
      'Uzyskując dostęp do TikTok Wrapped (ttwrapper.com) lub korzystając z niego, akceptujesz niniejszy Regulamin. Jeśli się z nim nie zgadzasz, prosimy nie korzystać z witryny.',
    sections: [
      { title: 'Opis usługi', paragraphs: ['TikTok Wrapped udostępnia automatyczne narzędzie działające w przeglądarce, służące do analizy eksportu własnych danych użytkownika z TikTok. Usługa jest niezależna i nie jest powiązana z TikTok ani ByteDance Ltd., nie jest też przez te firmy uznawana ani wspierana. Jest udostępniana „w stanie, w jakim jest” i wyłącznie do celów informacyjnych oraz użytku osobistego.'] },
      { title: 'Obowiązki użytkownika', paragraphs: ['Użytkownicy są odpowiedzialni za:'], list: ['przesyłanie wyłącznie danych, których są właścicielami lub do których wykorzystania mają prawo,', 'zapewnienie, że przesyłane pliki pochodzą z oficjalnej funkcji eksportu danych TikTok.'] },
      { title: 'Dopuszczalne korzystanie', paragraphs: ['Zobowiązujesz się, że nie będziesz:'], list: ['wykorzystywać usługi do jakichkolwiek niezgodnych z prawem celów ani z naruszeniem obowiązujących przepisów;', 'podejmować prób zakłócania, przeciążania, odtwarzania kodu źródłowego ani uzyskiwania nieautoryzowanego dostępu do usługi;', 'przesyłać plików zawierających złośliwe oprogramowanie ani danych, do których wykorzystywania nie masz uprawnień.'] },
      { title: 'Brak gwarancji', paragraphs: ['Choć dokładamy starań o dokładność, TikTok Wrapped nie gwarantuje, że wszystkie wnioski są kompletne, wolne od błędów lub odpowiednie do podejmowania konkretnych decyzji. Wyniki nie powinny być traktowane jako profesjonalna, prawna ani finansowa porada.'] },
      { title: 'Własność intelektualna', paragraphs: ['Projekt witryny, oryginalna identyfikacja wizualna, tekst oraz logika oprogramowania TikTok Wrapped należą do operatora, o ile nie wskazano inaczej. „TikTok” i powiązane znaki są znakami towarowymi ich odpowiednich właścicieli i są tu używane wyłącznie opisowo; nie rościmy sobie do nich żadnych praw. Użytkownicy zachowują pełną własność przesłanych przez siebie danych.'] },
      { title: 'Ograniczenie odpowiedzialności', paragraphs: ['TikTok Wrapped nie ponosi odpowiedzialności za:'], list: ['decyzje podjęte na podstawie wygenerowanych wniosków,', 'utratę danych spowodowaną błędem użytkownika,', 'przerwy lub tymczasową niedostępność usługi.'] },
      { title: 'Prawo właściwe', paragraphs: ['Niniejszy Regulamin podlega obowiązującym przepisom z zakresu ochrony konsumentów oraz przepisom ogólnym i jest zgodnie z nimi interpretowany, z pominięciem norm kolizyjnych. Wszelkie spory będą rozpatrywane przez właściwe sądy w miejscu prowadzenia działalności operatora.'] },
      { title: 'Zmiany w niniejszym Regulaminie', paragraphs: ['Możemy od czasu do czasu aktualizować niniejszy Regulamin. Zmiany wchodzą w życie z chwilą ich opublikowania, a data „Ostatnia aktualizacja” powyżej będzie odzwierciedlać najnowszą wersję. Dalsze korzystanie z witryny po wprowadzeniu zmian oznacza akceptację zaktualizowanego Regulaminu.'] },
      { title: 'Kontakt', paragraphs: ['Masz pytania dotyczące niniejszego Regulaminu? Napisz na [[email:hello@ttwrapper.com]] lub skorzystaj z naszej strony [[contact:Kontakt]].'] },
    ],
  },

  notFound: {
    title: '404 — Nie znaleziono strony',
    text: 'Przepraszamy, nie udało się znaleźć tej strony. Mogła zostać przeniesiona lub już nie istnieje. Oto kilka miejsc, w których możesz kontynuować:',
    links: { home: 'Strona główna', analyze: 'Przeanalizuj swoje dane', example: 'Zobacz przykład', blog: 'Blog' },
  },

  blog: {
    backToBlog: '← Powrót do bloga',
    indexTitle: 'Blog',
    indexIntro:
      'Ten blog powstał, aby pomóc użytkownikom lepiej zrozumieć dane z TikTok, prywatność i osobiste wzorce korzystania, dzięki przejrzystym, niezależnym i edukacyjnym treściom. TikTok pozwala użytkownikom pobrać dane o ich aktywności, ale często są one dostarczane w surowych, technicznych formatach, które bywają trudne do zinterpretowania. Nasze artykuły wyjaśniają, co zawierają te dane, jak są ustrukturyzowane i jak odpowiedzialnie je analizować na podstawie eksportów własnych danych. Poruszamy tematy takie jak pobieranie danych z TikTok, struktury plików z danymi, kwestie prywatności, analiza zachowań użytkowników oraz różnice między analityką platformy a niezależnymi narzędziami do analizy danych.',
    faqHeading: 'Najczęściej zadawane pytania',
  },

  meta: {
    home: {
      title: 'TikTok Wrapped (nieoficjalne) — Przeanalizuj swoje dane i statystyki z TikTok',
      description:
        'TikTok Wrapped to niezależne, nieoficjalne narzędzie, które analizuje oficjalny eksport Twoich danych z TikTok, aby ujawnić Twój czas oglądania, najczęstsze wyszukiwania, ulubione treści i zabawny ranking osobowości. Prywatne, bezpłatne i niepowiązane z TikTok ani ByteDance Ltd.',
    },
    analyze: {
      title: 'Przeanalizuj eksport swoich danych z TikTok — Prześlij i poznaj statystyki',
      description:
        'Prześlij oficjalny eksport swoich danych z TikTok (ZIP lub JSON) i natychmiast zobacz swój czas oglądania, najczęstsze wyszukiwania, ulubionych twórców, godziny szczytu oraz ranking osobowości. Przetwarzane prywatnie w Twojej przeglądarce — nic nie jest wysyłane na serwer.',
    },
    example: {
      title: 'Przykładowe TikTok Wrapped — Zobacz pełną próbkę (bez przesyłania)',
      description:
        'Zobacz dokładnie, co TikTok Wrapped tworzy z eksportu danych z TikTok: pełny przykład z czasem oglądania, rankingiem osobowości, najczęstszymi wyszukiwaniami, godzinami szczytu, zaangażowaniem i statystykami urządzeń. Dane przykładowe — bez konieczności przesyłania.',
    },
    about: {
      title: 'O nas - TikTok Wrapped',
      description:
        'Poznaj TikTok Wrapped — niezależną usługę, która pomaga zrozumieć dane o Twojej aktywności na TikTok. Nastawiona na prywatność, bezpłatna i niepowiązana z TikTok.',
    },
    contact: {
      title: 'Kontakt - TikTok Wrapped',
      description:
        'Skontaktuj się z TikTok Wrapped w sprawie pytań o usługę, prywatność, problemy techniczne lub kwestie prawne. E-mail: hello@ttwrapper.com',
    },
    privacy: {
      title: 'Polityka prywatności - TikTok Wrapped',
      description:
        'Jak TikTok Wrapped przetwarza Twoje dane: przetwarzanie eksportu z TikTok po stronie przeglądarki, pliki cookie, reklamy Google AdSense i analityka, Twoje prawa wynikające z RODO/CCPA, przechowywanie danych i możliwości rezygnacji.',
    },
    terms: {
      title: 'Regulamin - TikTok Wrapped',
      description:
        'Regulamin TikTok Wrapped — opis usługi, obowiązki użytkownika, dopuszczalne korzystanie, własność intelektualna, zastrzeżenia, prawo właściwe oraz zmiany w regulaminie.',
    },
    blog: {
      title: 'Blog - TikTok Wrapped',
      description:
        'Przeczytaj poradniki i artykuły o analizie danych z TikTok, prywatności oraz o tym, jak zrozumieć swoją aktywność w mediach społecznościowych.',
    },
    notFound: {
      title: 'Nie znaleziono strony (404) - TikTok Wrapped',
      description:
        'Nie udało się znaleźć strony, której szukasz. Odkryj TikTok Wrapped — przeanalizuj eksport swoich danych z TikTok, zobacz przykład lub przeczytaj nasze poradniki.',
    },
  },
}
