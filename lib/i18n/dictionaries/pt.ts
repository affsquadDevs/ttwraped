import type { Dictionary } from './en'

export const dictionary: Dictionary = {
  nav: {
    home: 'Início',
    analyze: 'Analisar',
    example: 'Exemplo',
    about: 'Sobre',
    blog: 'Blogue',
    contact: 'Contacto',
  },

  langSwitcher: {
    label: 'Idioma',
  },

  cta: {
    analyzeData: 'Analise os seus dados do TikTok →',
    viewExample: 'Ver um exemplo de TikTok Wrapped →',
    backToHome: '← Voltar ao Início',
  },

  disclaimer: {
    underH1:
      'Ferramenta independente e não oficial — sem qualquer afiliação, aprovação ou ligação ao TikTok ou à ByteDance Ltd.',
  },

  consent: {
    ariaLabel: 'Consentimento de cookies',
    text:
      'Valorizamos a sua privacidade. Utilizamos cookies para realizar análises (Google Tag Manager) e para apresentar anúncios através do Google AdSense, incluindo para a personalização de anúncios. Com o seu consentimento, a Google e os seus parceiros podem utilizar cookies para personalizar anúncios com base nas suas visitas a este e a outros sites. Pode aceitar, recusar ou alterar a sua escolha a qualquer momento. Consulte a nossa [[privacy:Política de Privacidade]].',
    accept: 'Aceitar tudo',
    reject: 'Recusar não essenciais',
  },

  footer: {
    description:
      'Uma ferramenta independente e não oficial para compreender a exportação dos seus dados do TikTok — hábitos de visualização, uma divertida classificação de personalidade e a sua história completa no TikTok.',
    productTitle: 'Produto',
    legalTitle: 'Aspetos legais',
    resourcesTitle: 'Recursos',
    links: {
      home: 'Início',
      analyze: 'Analisar',
      example: 'Exemplo',
      exampleWrapped: 'Exemplo de Wrapped',
      about: 'Sobre',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      contact: 'Contacto',
      blog: 'Blogue',
    },
    copyright: '© {year} TikTok Wrapped. Todos os direitos reservados.',
    disclaimer:
      'O TikTok Wrapped é uma ferramenta independente para analisar a exportação dos seus próprios dados do TikTok. Não tem qualquer afiliação, aprovação ou ligação ao TikTok ou à ByteDance Ltd. “TikTok” é uma marca comercial do respetivo proprietário.',
    privacy: 'Privacidade',
    terms: 'Termos',
    cookieSettings: 'Definições de cookies',
  },

  home: {
    logoSubtitle: 'Analise a Exportação dos Seus Dados do TikTok',
    heroTagline: 'O Seu Ano no TikTok, Revelado 🎬',
    heroPlatformTagline:
      'Uma plataforma independente para compreender os dados de atividade pessoal no TikTok.',
    features: ['Obtenha a sua classificação de personalidade', 'Veja estatísticas detalhadas de visualização'],
    heroDescription:
      'O TikTok Wrapped é uma ferramenta online independente que o ajuda a compreender a sua atividade pessoal no TikTok utilizando a exportação oficial dos seus dados do TikTok. Quando solicita os seus dados ao TikTok, estes são entregues como um ficheiro ZIP ou JSON que contém informações de atividade em bruto. O TikTok Wrapped analisa este ficheiro e converte-o em resumos claros e perceções visuais, tais como padrões de utilização, cronologias de atividade e estatísticas gerais de envolvimento. O serviço funciona apenas com os dados que escolhe carregar e destina-se a fins informativos e de análise pessoal.',
    learnMoreTitle: 'Saiba Mais Sobre os Dados do TikTok',
    learnMoreText:
      'O TikTok permite que os utilizadores transfiram uma exportação detalhada dos seus dados de atividade pessoal, mas estas informações são frequentemente entregues num formato técnico que pode ser difícil de interpretar. O TikTok Wrapped ajuda os utilizadores a compreender como funcionam os seus dados, o que contêm e como podem ser analisados de forma responsável. Através de guias educativos e explicações, focamo-nos na transparência, na privacidade e na clareza — ajudando os utilizadores a compreender os seus próprios dados sem pressupostos nem acesso à plataforma.',
    learnMoreLinks: [
      { slug: 'tiktok-wrapped-explained-what-it-is-how-it-works', label: 'TikTok Wrapped Explicado: O Que É e Como Funciona' },
      { slug: 'how-to-download-analyze-tiktok-data', label: 'Como Transferir e Analisar os Dados do TikTok' },
      { slug: 'what-your-tiktok-usage-says-about-your-digital-habits', label: 'O Que a Sua Utilização do TikTok Revela Sobre os Seus Hábitos Digitais' },
      { slug: 'how-to-analyze-tiktok-data-safely-privacy-first-guide', label: 'Como Analisar os Dados do TikTok com Segurança' },
    ],
    revealTitle: 'O Que os Dados do TikTok Podem Revelar',
    revealItems: [
      'Frequência de utilização e tendências de atividade ao longo do tempo',
      'Padrões de envolvimento por hora do dia',
      'Comportamento geral de interação (gostos, comentários, partilhas)',
      'Alterações a longo prazo nos hábitos de utilização da aplicação',
    ],
    revealDisclaimer:
      'Todas as perceções baseiam-se em exportações de dados pertencentes ao utilizador e destinam-se apenas a fins informativos e de compreensão pessoal.',
    howItWorksTitle: 'Como Funciona o TikTok Wrapped',
    howItWorksText:
      'O TikTok Wrapped funciona analisando exportações oficiais de dados do TikTok que os utilizadores escolhem transferir por si próprios. A plataforma foca-se em resumir e organizar estas informações em perceções legíveis, sem aceder a contas de utilizador nem recolher dados adicionais. Estão disponíveis instruções detalhadas e ferramentas de análise numa [[analyze:página separada]] para os utilizadores que desejem explorar mais os seus dados.',
    analyzeButton: 'Analise os Seus Dados do TikTok →',
    demoTitle: '🎬 Veja em Ação',
    demoDescription:
      'Quer ver o que o TikTok Wrapped produz antes de começar? Explore um exemplo completo e realista criado a partir de dados de amostra — sem necessidade de carregamento.',
    demoButton: 'Ver um exemplo de TikTok Wrapped →',
    moreStatsTitle: '✨ E muito mais o espera...',
    statTags: [
      '🔍 Principais Pesquisas',
      '📅 Atividade por Ano',
      '⏰ Horas de Pico',
      '❤️ Gostos e Comentários',
      '📤 Histórico de Partilhas',
      '🔴 Transmissões em Direto',
    ],
    demoCta: 'Pronto para descobrir as suas estatísticas? [[analyze:Analise os seus dados agora! →]]',
  },

  analyze: {
    subtitle: 'Analise os Seus Dados do TikTok',
    howToTitle: '📱 Como Obter os Seus Dados do TikTok',
    importantLabel: 'Importante:',
    importantText:
      'O TikTok fornece os seus dados apenas mediante pedido. Após submeter um pedido, poderá demorar algumas horas até 3 dias para os seus dados estarem prontos. Certifique-se de que seleciona o formato “JSON” ao fazer o pedido!',
    steps: [
      { title: 'Abrir Definições', text: 'Vá ao seu Perfil → toque no menu ☰ → selecione Definições', alt: 'Passo 1: Abrir Definições' },
      { title: 'Ir para a Conta', text: 'Em Definições e Privacidade, encontre e toque em Conta', alt: 'Passo 2: Ir para a Conta' },
      { title: 'Transferir os Seus Dados', text: 'Desça e toque em “Transferir os seus dados”', alt: 'Passo 3: Transferir os seus dados' },
      { title: 'Pedir Dados (JSON)', text: 'Altere o formato para “JSON”, selecione “Todos os dados” e, em seguida, toque em “Pedir dados”', alt: 'Passo 4: Pedir dados' },
    ],
    footerSteps: [
      'Receberá uma notificação quando os seus dados estiverem prontos',
      'Transfira o ficheiro ZIP a partir do separador “Transferir dados”',
      'Carregue-o aqui e desfrute das suas estatísticas!',
    ],
    dropPrompt: 'Largue aqui o seu ficheiro ZIP ou JSON',
    dropHint: 'TikTok → Definições → Privacidade → Transferir Dados',
    analyzeBtn: '🔍 Analisar',
    analyzingBtn: '⏳ A analisar...',
    privacyNote:
      'O seu ficheiro é processado apenas para gerar os seus resultados. Não vendemos, partilhamos nem utilizamos os dados carregados para publicidade.',
    howToLink: 'Não tem os seus dados? Saiba como transferi-los ↓',
    selectFileError: 'Selecione um ficheiro',
    fileTypeError: 'Selecione um ficheiro ZIP ou JSON',
    genericError: 'Ocorreu um erro ao processar o ficheiro',
    jsonNotFound: 'Ficheiro JSON não encontrado no arquivo',
    progress: {
      reading: 'A ler o ficheiro...',
      extracting: 'A extrair o arquivo ZIP...',
      readingFile: 'A ler {name}...',
      parsing: 'A analisar o JSON...',
      analyzing: 'A analisar os dados...',
      processing: 'A processar os dados...',
    },
    results: {
      yourStats: '🎰 As Suas Estatísticas',
      videosWatched: 'Vídeos Vistos',
      hoursOnTikTok: 'Horas no TikTok',
      daysOfWatching: 'Dias a Ver',
      yourRank: 'A Sua Classificação no TikTok',
      followers: 'Seguidores',
      following: 'A Seguir',
      interests: 'Interesses',
      whenActive: '⏰ Quando Está Mais Ativo',
      peakHour: 'Hora de Pico',
      mostActiveDay: 'Dia Mais Ativo',
      firstWatch: 'Primeira Visualização',
      lastWatch: 'Última Visualização',
      engagement: '❤️ Envolvimento',
      videosLiked: 'Vídeos com Gosto',
      favorites: 'Favoritos',
      comments: 'Comentários',
      shares: 'Partilhas',
      activityByYear: '📅 Atividade por Ano',
      year: 'Ano',
      videos: 'vídeos',
      mostActiveMonth: 'Mês Mais Ativo',
      avgPerDayPrefix: 'Média de',
      avgPerDaySuffix: 'vídeos por dia',
      collections: '📂 As Suas Coleções',
      favoritesTitle: '⭐ Favoritos',
      favoriteSounds: 'Sons Favoritos',
      favoriteEffects: 'Efeitos Favoritos',
      favoriteHashtags: 'Hashtags Favoritas',
      topSearches: '🔍 Principais Pesquisas',
      totalSearches: 'Total de pesquisas',
      shareDestinations: '📤 Destinos de Partilha',
      yourComments: '💭 Os Seus Comentários',
      totalComments: 'Total de comentários',
      avgChars: 'média de {n} caracteres',
      messages: '💬 Mensagens',
      chats: 'Conversas',
      messagesLabel: 'Mensagens',
      sent: 'Enviadas',
      received: 'Recebidas',
      topChats: 'Principais Conversas:',
      recentFollowers: '👥 Seguidores Recentes',
      devicesNetworks: '📱 Dispositivos e Redes',
      totalLogins: 'Total de inícios de sessão',
      devices: 'Dispositivos',
      networks: 'Redes',
      tiktokLive: '🔴 TikTok Live',
      livesWatched: 'Diretos Vistos',
      liveComments: 'Comentários em Direto',
      blocked: '🚫 Bloqueados',
      messagesCountSuffix: 'mensagens',
    },
  },

  example: {
    title: 'Exemplo de TikTok Wrapped',
    subtitle: 'Um exemplo completo e realista — sem necessidade de carregamento',
    introText:
      'Esta página mostra exatamente o que obtém do [[home:TikTok Wrapped]] após analisar uma exportação de dados do TikTok — sem carregar nada. Cada número abaixo pertence a uma conta de amostra fictícia e serve apenas para ilustração. Quando [[analyze:analisa a sua própria exportação]], a mesma análise é gerada de forma privada no seu navegador a partir do seu ficheiro real. O TikTok Wrapped é uma ferramenta independente e não oficial, sem qualquer afiliação ou aprovação por parte do TikTok ou da ByteDance Ltd.',
    rankExplanation:
      'A sua classificação baseia-se no tempo de visualização estimado. As 408 horas desta conta de amostra colocam-na no nível “Main Character” — existem 16 classificações no total, desde “NPC Energy” até ao topo, “No Life Speedrun WR.”',
    ctaTitle: '🎬 Pronto para ver a sua?',
    ctaDescription:
      'O seu verdadeiro TikTok Wrapped é gerado inteiramente no seu navegador a partir da exportação dos seus próprios dados — o seu ficheiro nunca sai do seu dispositivo.',
    ctaButton: 'Analise os seus dados do TikTok →',
    ctaLearn: 'Não conhece as exportações de dados? [[blog:Saiba como transferir os seus dados do TikTok ↗]]',
    sample: {
      displayName: 'Utilizador de Amostra',
      interests: ['Comédia', 'Culinária', 'Viagens', 'Fitness', 'Música'],
      activeDay: 'Domingo',
      activeMonth: 'Novembro de 2024',
      firstWatch: '4 de mar. de 2022',
      lastWatch: '14 de dez. de 2025',
      searches: [
        'receitas de jantar fáceis',
        'treino de maratona',
        'truques de viagem',
        'comédia de stand-up',
        'treino em casa',
        'viagens económicas pela europa',
        'tutorial de guitarra',
        'ideias de preparação de refeições',
        'dicas de produtividade',
        'comida de rua',
      ],
      shareMethods: ['Mensagem Direta', 'Copiar Ligação', 'WhatsApp', 'Instagram'],
      networks: ['Wi-Fi', 'Dados Móveis'],
    },
  },

  about: {
    title: 'Sobre Nós',
    paragraphs: [
      'O TikTok Wrapped é um serviço online independente concebido para ajudar os utilizadores a compreenderem melhor os seus dados de atividade pessoal no TikTok.',
      'O TikTok permite que os utilizadores transfiram uma exportação oficial de dados que contém informações sobre a sua atividade na plataforma. Embora estes dados pertençam ao utilizador, são frequentemente entregues num formato em bruto e não estruturado, difícil de interpretar. O TikTok Wrapped fornece ferramentas que organizam estes dados e os apresentam de uma forma clara, legível e intuitiva.',
      'O website permite que os utilizadores carreguem a exportação dos seus próprios dados do TikTok e recebam perceções automáticas baseadas exclusivamente nesse ficheiro. O serviço foca-se na sumarização, visualização e análise geral dos padrões de utilização para ajudar os utilizadores a obterem uma melhor compreensão do seu comportamento digital.',
      'O TikTok Wrapped não cria contas, não exige registo e não fornece funcionalidades de rede social ou de alojamento de conteúdos. O website existe exclusivamente como uma ferramenta informativa que processa ficheiros fornecidos pelo utilizador a pedido deste.',
      'O nosso objetivo é proporcionar uma experiência simples, transparente e centrada na privacidade. O website é de utilização gratuita e financiado por publicidade; consulte a nossa [[privacy:Política de Privacidade]] para saber como funcionam os cookies e os anúncios.',
      'O TikTok Wrapped é operado pela AffSquad e pode ser contactado através de [[email:hello@ttwrapper.com]]. É uma ferramenta independente e não oficial, sem qualquer afiliação, aprovação ou ligação ao TikTok ou à ByteDance Ltd.',
    ],
    faqTitle: 'Perguntas Frequentes',
    faq: [
      { q: 'O que é o TikTok Wrapped?', a: 'O TikTok Wrapped é uma ferramenta online que ajuda os utilizadores a analisar e compreender melhor a sua atividade pessoal no TikTok utilizando a exportação oficial dos seus dados do TikTok.' },
      { q: 'Como obtenho a exportação dos meus dados do TikTok?', a: 'Pode pedir e transferir a exportação dos seus dados nas definições do TikTok (Dados / Privacidade). Assim que receber o ficheiro ZIP do TikTok, pode carregá-lo no TikTok Wrapped.' },
      { q: 'Guardam o meu ficheiro ZIP carregado?', a: 'Os ficheiros são processados apenas para gerar as perceções que solicitou. Não guardamos nem vendemos os dados carregados e não os utilizamos para a personalização de anúncios.' },
      { q: 'O TikTok Wrapped está afiliado ao TikTok?', a: 'Não. O TikTok Wrapped é um serviço independente, sem qualquer afiliação ou aprovação por parte do TikTok ou da ByteDance.' },
      { q: 'O TikTok Wrapped é de utilização gratuita?', a: 'A funcionalidade principal do website está disponível sem qualquer pagamento. O site pode apresentar publicidade para suportar os custos contínuos de desenvolvimento e alojamento.' },
    ],
  },

  contact: {
    title: 'Contacte-nos',
    intro:
      'Se tiver questões sobre o TikTok Wrapped, o nosso website ou o funcionamento do serviço, pode contactar-nos através das informações de contacto indicadas abaixo.',
    welcomeTitle: 'Aceitamos questões relacionadas com:',
    welcomeItems: [
      'questões gerais sobre a plataforma,',
      'privacidade e tratamento de dados,',
      'problemas técnicos ou comentários,',
      'assuntos legais ou relacionados com políticas.',
    ],
    howToTitle: 'Como Contactar-nos',
    emailLabel: 'E-mail:',
    responseNote: 'Procuramos responder a todas as questões legítimas no prazo de 2 a 3 dias úteis.',
    aboutTitle: 'Sobre a Comunicação',
    aboutText1:
      'O TikTok Wrapped é um serviço online independente operado pela AffSquad, focado na análise de exportações de dados do TikTok fornecidas pelos utilizadores. Não tem qualquer afiliação, aprovação ou ligação ao TikTok ou à ByteDance Ltd. Não oferecemos apoio ao cliente através de redes sociais e, de momento, não disponibilizamos apoio telefónico.',
    aboutText2:
      'Não envie informações pessoais sensíveis por e-mail, exceto se forem necessárias para dar resposta ao seu pedido.',
  },

  privacy: {
    title: 'Política de Privacidade',
    lastUpdatedLabel: 'Última atualização:',
    lastUpdatedDate: '20 de junho de 2026',
    intro:
      'Esta Política de Privacidade explica como o TikTok Wrapped (“TikTok Wrapped”, “nós”, “nos”) recolhe, utiliza e protege as informações quando visita ttwrapper.com. O TikTok Wrapped é uma ferramenta independente e não oficial, sem qualquer afiliação, aprovação ou ligação ao TikTok ou à ByteDance Ltd.',
    cookieTable: {
      providerHeader: 'Fornecedor',
      purposeHeader: 'Finalidade',
      typeHeader: 'Tipo',
      rows: [
        { provider: 'TikTok Wrapped', purpose: 'Memoriza a sua escolha de consentimento de cookies', type: 'Essencial' },
        { provider: 'Google Tag Manager / Analytics', purpose: 'Estatísticas de utilização agregadas e anónimas', type: 'Análise (consentimento necessário)' },
        { provider: 'Google AdSense / DoubleClick', purpose: 'Apresentação e medição de anúncios, incluindo anúncios personalizados', type: 'Publicidade (consentimento necessário)' },
      ],
    },
    sections: [
      { title: '1. Quem Somos (Responsável pelo Tratamento dos Dados)', paragraphs: ['O TikTok Wrapped é operado pela AffSquad, o responsável pelo tratamento dos dados deste website. Se tiver alguma questão sobre esta política ou sobre a forma como os seus dados são tratados, pode contactar-nos através de [[email:hello@ttwrapper.com]] ou da nossa página de [[contact:Contacto]].'] },
      { title: '2. Os Seus Dados do TikTok Carregados', paragraphs: ['Quando utiliza o analisador, a exportação dos seus dados do TikTok (ZIP ou JSON) é lida e processada inteiramente no seu próprio navegador. O ficheiro não é carregado nem armazenado nos nossos servidores e não criamos perfis nem bases de dados a partir dele. A análise existe apenas no separador do seu navegador e desaparece quando fecha ou atualiza a página.', 'Não exigimos a criação de conta, o início de sessão nem a identificação pessoal para utilizar o analisador.'] },
      { title: '3. Informações Recolhidas Automaticamente', paragraphs: ['Tal como a maioria dos websites, quando visita ttwrapper.com, podem ser recolhidas determinadas informações técnicas através de cookies e tecnologias semelhantes, por nós e por fornecedores terceiros (como a Google), incluindo:'], list: ['o tipo de dispositivo e de navegador, o tamanho do ecrã e o sistema operativo;', 'o endereço IP (utilizado para estimar a localização geral e para segurança);', 'as páginas visitadas, os URLs de referência e os eventos de interação;', 'os identificadores de cookies utilizados para análise e publicidade.'], afterList: ['Estas informações só são processadas quando deu o seu consentimento ou quando temos um interesse legítimo, conforme descrito abaixo.'] },
      { title: '4. Cookies e Tecnologias Semelhantes', paragraphs: ['Utilizamos cookies e tecnologias semelhantes para funcionalidades essenciais, análise e publicidade. Os cookies não essenciais (análise e publicidade) só são definidos depois de dar o seu consentimento através do nosso banner de cookies. As principais categorias são:'], hasCookieTable: true, afterList: ['Pode alterar ou retirar o seu consentimento a qualquer momento através da ligação “Definições de cookies” no rodapé do website.'] },
      { title: '5. Publicidade (Google AdSense)', paragraphs: ['Utilizamos o Google AdSense para apresentar publicidade. Aplicam-se as seguintes divulgações:'], list: ['Os fornecedores terceiros, incluindo a Google, utilizam cookies para apresentar anúncios com base nas suas visitas anteriores a este website e a outros websites.', 'A utilização de cookies de publicidade pela Google (incluindo o cookie DoubleClick) permite-lhe a ela e aos seus parceiros apresentarem-lhe anúncios com base nas suas visitas a este e/ou a outros sites na Internet.', 'Pode optar por não receber publicidade personalizada visitando as [[adsSettings:Definições de Anúncios da Google]].', 'Pode optar por não permitir a utilização de cookies para publicidade personalizada por parte de alguns fornecedores terceiros em [[aboutAds:aboutads.info/choices]] ou [[yourChoices:youronlinechoices.eu]].', 'Saiba como a Google utiliza as informações dos sites que utilizam os seus serviços em [[partnerSites:policies.google.com/technologies/partner-sites]].'], afterList: ['Se não consentir a publicidade personalizada, a Google poderá, ainda assim, apresentar anúncios não personalizados com base no contexto geral, em vez do seu histórico de navegação.'] },
      { title: '6. Análise', paragraphs: ['Utilizamos o Google Tag Manager e os serviços de análise da Google para compreender, de forma agregada, como os visitantes utilizam o site (por exemplo, quais as páginas mais populares). Estes serviços podem definir cookies e processar dados técnicos, como o seu endereço IP. Só são carregados depois de consentir os cookies de análise.'] },
      { title: '7. Gestão do Consentimento', paragraphs: ['Utilizamos o Google Consent Mode v2. Por predefinição, o armazenamento para publicidade e análise está definido como recusado, e as etiquetas relacionadas não são carregadas até que faça uma escolha no nosso banner de cookies. Pode reabrir o banner e alterar a sua decisão a qualquer momento através da ligação “Definições de cookies” no rodapé. Aos visitantes do Espaço Económico Europeu, do Reino Unido e da Suíça é pedido o consentimento antes de serem utilizados quaisquer cookies não essenciais.'] },
      { title: '8. Como Utilizamos as Informações', paragraphs: [], list: ['operar, manter e proteger o website;', 'gerar perceções a partir dos dados que escolhe analisar (no seu navegador);', 'compreender a utilização agregada e melhorar o serviço;', 'apresentar publicidade que ajuda a financiar o serviço gratuito.'], afterList: ['Não vendemos as suas informações pessoais e não utilizamos a exportação dos seus dados do TikTok para publicidade ou definição de perfis.'] },
      { title: '9. Partilha de Dados', paragraphs: ['Não partilhamos os seus dados do TikTok carregados com ninguém. Os dados técnicos e de cookies acima descritos podem ser processados pelos nossos prestadores de serviços, incluindo a Google (publicidade e análise) e o nosso fornecedor de alojamento (Vercel), atuando cada um ao abrigo das suas próprias políticas de privacidade.'] },
      { title: '10. Conservação dos Dados', paragraphs: ['A exportação dos seus dados do TikTok nunca é armazenada por nós, pelo que não há nada para conservar ou eliminar do nosso lado. Os dados agregados de análise e de publicidade detidos pelos nossos fornecedores são conservados de acordo com os respetivos períodos de conservação (por exemplo, as definições de conservação padrão da Google).'] },
      { title: '11. Os Seus Direitos de Privacidade (RGPD/RGPD do Reino Unido)', paragraphs: ['Se estiver no EEE ou no Reino Unido, tem o direito de aceder, retificar, apagar, restringir ou opor-se ao tratamento dos seus dados pessoais, bem como o direito à portabilidade dos dados e de retirar o consentimento a qualquer momento. Para exercer estes direitos, contacte-nos através de [[email:hello@ttwrapper.com]]. Tem também o direito de apresentar uma reclamação junto da sua autoridade local de proteção de dados.'] },
      { title: '12. Direitos de Privacidade da Califórnia (CCPA/CPRA)', paragraphs: ['Os residentes na Califórnia têm o direito de saber que informações pessoais são recolhidas, de solicitar a eliminação e de optar por não permitir a “venda” ou “partilha” de informações pessoais. Não vendemos informações pessoais. Para exercer os seus direitos, contacte-nos através de [[email:hello@ttwrapper.com]].'] },
      { title: '13. Transferências Internacionais de Dados', paragraphs: ['Os nossos fornecedores podem processar dados em servidores localizados fora do seu país, incluindo nos Estados Unidos. Quando exigido, tais transferências são protegidas por salvaguardas adequadas, como as cláusulas contratuais-tipo dos fornecedores.'] },
      { title: '14. Privacidade das Crianças', paragraphs: ['O TikTok Wrapped não se destina a crianças com menos de 13 anos e não recolhemos conscientemente informações pessoais das mesmas. Os requisitos de idade mínima do próprio TikTok aplicam-se à obtenção de uma exportação de dados.'] },
      { title: '15. Alterações a Esta Política', paragraphs: ['Podemos atualizar esta Política de Privacidade periodicamente. As alterações materiais serão refletidas através da atualização da data de “Última atualização” no topo desta página.'] },
      { title: '16. Contacto', paragraphs: ['Tem questões sobre esta Política de Privacidade? Envie um e-mail para [[email:hello@ttwrapper.com]] ou utilize a nossa página de [[contact:Contacto]].'] },
    ],
  },

  terms: {
    title: 'Termos de Serviço',
    lastUpdatedLabel: 'Última atualização:',
    lastUpdatedDate: '20 de junho de 2026',
    intro:
      'Ao aceder ou utilizar o TikTok Wrapped (ttwrapper.com), concorda com estes Termos de Serviço. Se não concordar, não utilize o website.',
    sections: [
      { title: 'Descrição do Serviço', paragraphs: ['O TikTok Wrapped fornece uma ferramenta automatizada, baseada no navegador, para analisar a exportação dos próprios dados do TikTok de um utilizador. O serviço é independente e não tem qualquer afiliação, aprovação ou ligação ao TikTok ou à ByteDance Ltd. É fornecido “tal como está” e destina-se apenas a fins informativos e de utilização pessoal.'] },
      { title: 'Responsabilidades do Utilizador', paragraphs: ['Os utilizadores são responsáveis por:'], list: ['carregar apenas dados que lhes pertençam ou que tenham o direito de utilizar,', 'garantir que os ficheiros carregados provêm da funcionalidade oficial de exportação de dados do TikTok.'] },
      { title: 'Utilização Aceitável', paragraphs: ['Concorda em não:'], list: ['utilizar o serviço para qualquer fim ilícito ou em violação de qualquer legislação aplicável;', 'tentar perturbar, sobrecarregar, fazer engenharia inversa ou obter acesso não autorizado ao serviço;', 'carregar ficheiros que contenham malware ou dados que não esteja autorizado a utilizar.'] },
      { title: 'Sem Garantias', paragraphs: ['Embora nos esforcemos pela exatidão, o TikTok Wrapped não garante que todas as perceções sejam completas, isentas de erros ou adequadas para decisões específicas. Os resultados não devem ser considerados aconselhamento profissional, jurídico ou financeiro.'] },
      { title: 'Propriedade Intelectual', paragraphs: ['O design do website, a marca original, o texto e a lógica de software do TikTok Wrapped pertencem ao seu operador, salvo indicação em contrário. “TikTok” e as marcas relacionadas são marcas comerciais dos respetivos proprietários e são aqui utilizadas apenas a título descritivo; não reivindicamos quaisquer direitos sobre as mesmas. Os utilizadores mantêm a propriedade total dos dados que carregam.'] },
      { title: 'Limitação de Responsabilidade', paragraphs: ['O TikTok Wrapped não é responsável por:'], list: ['decisões tomadas com base nas perceções geradas,', 'perda de dados causada por erro do utilizador,', 'interrupções ou indisponibilidade temporária do serviço.'] },
      { title: 'Lei Aplicável', paragraphs: ['Estes Termos regem-se e são interpretados de acordo com a legislação geral e de proteção do consumidor aplicável, sem ter em conta os princípios de conflito de leis. Quaisquer litígios serão tratados pelos tribunais competentes do local de estabelecimento do operador.'] },
      { title: 'Alterações a Estes Termos', paragraphs: ['Podemos atualizar estes Termos periodicamente. As alterações entram em vigor quando publicadas, e a data de “Última atualização” acima refletirá a versão mais recente. A utilização continuada do website após as alterações constitui aceitação dos Termos atualizados.'] },
      { title: 'Contacto', paragraphs: ['Tem questões sobre estes Termos? Envie um e-mail para [[email:hello@ttwrapper.com]] ou utilize a nossa página de [[contact:Contacto]].'] },
    ],
  },

  notFound: {
    title: '404 — Página Não Encontrada',
    text: 'Lamentamos, não conseguimos encontrar essa página. Pode ter sido movida ou já não existe. Aqui ficam alguns locais para continuar de onde parou:',
    links: { home: 'Início', analyze: 'Analisar os seus dados', example: 'Ver um exemplo', blog: 'Blogue' },
  },

  blog: {
    backToBlog: '← Voltar ao Blogue',
    indexTitle: 'Blogue',
    indexIntro:
      'Este blogue existe para ajudar os utilizadores a compreenderem melhor os dados do TikTok, a privacidade e os padrões de utilização pessoal através de conteúdos claros, independentes e educativos. O TikTok permite que os utilizadores transfiram os seus dados de atividade, mas estes surgem frequentemente em formatos técnicos e em bruto que podem ser difíceis de interpretar. Os nossos artigos explicam o que estes dados contêm, como estão estruturados e como analisá-los de forma responsável utilizando as exportações dos seus próprios dados. Abordamos temas que incluem as transferências de dados do TikTok, as estruturas de ficheiros de dados, as considerações de privacidade, a análise do comportamento de utilização e as diferenças entre as análises da plataforma e as ferramentas de dados independentes.',
    faqHeading: 'Perguntas Frequentes',
  },

  meta: {
    home: {
      title: 'TikTok Wrapped (Não Oficial) — Analise os Seus Dados e Estatísticas do TikTok',
      description:
        'O TikTok Wrapped é uma ferramenta independente e não oficial que analisa a exportação oficial dos seus dados do TikTok para revelar o seu tempo de visualização, principais pesquisas, conteúdos favoritos e uma divertida classificação de personalidade. Privado, gratuito e sem qualquer afiliação ao TikTok ou à ByteDance Ltd.',
    },
    analyze: {
      title: 'Analise a Exportação dos Seus Dados do TikTok — Carregue e Obtenha as Suas Estatísticas',
      description:
        'Carregue a exportação oficial dos seus dados do TikTok (ZIP ou JSON) e veja de imediato o seu tempo de visualização, principais pesquisas, criadores favoritos, horas de pico e uma classificação de personalidade. Processado de forma privada no seu navegador — nada é carregado para um servidor.',
    },
    example: {
      title: 'Exemplo de TikTok Wrapped — Veja uma Amostra Completa (Sem Carregamento)',
      description:
        'Veja exatamente o que o TikTok Wrapped produz a partir de uma exportação de dados do TikTok: um exemplo completo com tempo de visualização, classificação de personalidade, principais pesquisas, horas de pico, envolvimento e estatísticas de dispositivos. Dados de amostra — sem necessidade de carregamento.',
    },
    about: {
      title: 'Sobre Nós - TikTok Wrapped',
      description:
        'Saiba mais sobre o TikTok Wrapped — um serviço independente que o ajuda a compreender os seus dados de atividade no TikTok. Centrado na privacidade, gratuito e sem afiliação ao TikTok.',
    },
    contact: {
      title: 'Contacte-nos - TikTok Wrapped',
      description:
        'Contacte o TikTok Wrapped para questões sobre o serviço, privacidade, problemas técnicos ou assuntos legais. E-mail: hello@ttwrapper.com',
    },
    privacy: {
      title: 'Política de Privacidade - TikTok Wrapped',
      description:
        'Como o TikTok Wrapped trata os seus dados: processamento do lado do cliente da sua exportação do TikTok, cookies, publicidade e análise do Google AdSense, os seus direitos ao abrigo do RGPD/CCPA, conservação de dados e opções de exclusão.',
    },
    terms: {
      title: 'Termos de Serviço - TikTok Wrapped',
      description:
        'Termos de Serviço do TikTok Wrapped — descrição do serviço, responsabilidades do utilizador, utilização aceitável, propriedade intelectual, exclusões de responsabilidade, lei aplicável e alterações a estes termos.',
    },
    blog: {
      title: 'Blogue - TikTok Wrapped',
      description:
        'Leia guias e artigos sobre a análise de dados do TikTok, privacidade e como compreender a sua atividade nas redes sociais.',
    },
    notFound: {
      title: 'Página Não Encontrada (404) - TikTok Wrapped',
      description:
        'A página que procura não foi encontrada. Explore o TikTok Wrapped — analise a exportação dos seus dados do TikTok, veja um exemplo ou leia os nossos guias.',
    },
  },
}
