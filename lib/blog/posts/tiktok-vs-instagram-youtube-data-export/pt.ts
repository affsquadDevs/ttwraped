import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'TikTok vs Instagram vs YouTube: Comparar as Exportações de Dados',
  description:
    'Compara como o TikTok, Instagram e YouTube permitem descarregar os teus dados: como solicitar cada exportação, tempo de entrega, formatos e qual é mais fácil de analisar.',
  intro:
    'O TikTok, Instagram e YouTube permitem todos descarregar uma cópia dos teus dados pessoais, mas o processo de pedido, o tempo de entrega, os formatos de ficheiro e o nível de detalhe diferem bastante entre eles.',
  blocks: [
    {
      type: 'p',
      text: 'Se alguma vez quiseste rever a tua própria atividade — o que viste, o que pesquisaste e como usaste uma aplicação ao longo dos anos — a maioria das grandes plataformas oferece agora uma forma de solicitar esses dados. Isso deve-se em parte a regulamentos de privacidade como o RGPD e o CCPA, que conferem aos utilizadores o direito de aceder às informações que um serviço detém sobre eles.',
    },
    {
      type: 'p',
      text: 'Este guia compara a experiência de exportação de dados em três das maiores plataformas: TikTok, Instagram e YouTube. Vamos analisar como solicitar cada exportação, quanto tempo demora a entrega, que formatos recebes e o que cada arquivo revela sobre a tua atividade.',
    },
    { type: 'h2', text: 'Como Solicitar Cada Exportação' },
    {
      type: 'p',
      text: 'Cada plataforma esconde a opção de descarregamento nas definições de privacidade ou de conta, mas o caminho é ligeiramente diferente.',
    },
    {
      type: 'ul',
      items: [
        "TikTok: Abre Definições e privacidade → Conta → Descarregar os teus dados, escolhe um formato e solicita o ficheiro.",
        'Instagram: Vai a Definições → Centro de Contas → As tuas informações e permissões → Descarregar as tuas informações.',
        'YouTube: Usa o Google Takeout, seleciona YouTube e YouTube Music, e escolhe o que incluir (histórico, comentários, listas de reprodução).',
      ],
    },
    {
      type: 'p',
      text: "O TikTok mantém tudo dentro da sua própria aplicação, o Instagram encaminha-te pelo Centro de Contas partilhado da Meta, e o YouTube delega a tarefa ao Google Takeout, que abrange todos os produtos Google num único sítio.",
    },
    { type: 'h2', text: 'Tempo de Entrega' },
    {
      type: 'p',
      text: 'Nenhuma destas exportações é imediata, porque as plataformas têm de empacotar potencialmente anos de atividade num arquivo descarregável.',
    },
    {
      type: 'p',
      text: 'O TikTok costuma ser o mais rápido — muitas vezes em poucas horas a alguns dias, e o ficheiro aparece dentro da aplicação para descarregares. O Instagram e o YouTube podem demorar desde algumas horas a vários dias, dependendo do tamanho da conta e do intervalo de datas que solicitas. Arquivos maiores, especialmente os que incluem multimédia, demoram mais tempo a preparar.',
    },
    { type: 'h2', text: 'Formatos de Ficheiro' },
    {
      type: 'p',
      text: 'O formato que recebes é muito importante se planeias analisar os dados posteriormente.',
    },
    {
      type: 'ul',
      items: [
        'O TikTok permite escolher entre JSON (legível por máquina, ideal para análise) e TXT/HTML (mais fácil de ler manualmente).',
        'O Instagram oferece JSON ou HTML, onde o HTML abre como páginas web e o JSON é melhor para ferramentas.',
        'O YouTube entrega o histórico em JSON ou HTML e outros itens em CSV, todos agrupados num arquivo ZIP.',
      ],
    },
    {
      type: 'p',
      text: 'Se o teu objetivo é analisar a tua atividade em vez de apenas dar uma vista de olhos, escolhe sempre JSON quando essa opção existir.',
    },
    { type: 'h2', text: 'Comparação Lado a Lado' },
    {
      type: 'table',
      headers: ['Funcionalidade', 'TikTok', 'Instagram', 'YouTube'],
      rows: [
        ['Método de pedido', 'Definições na aplicação', 'Centro de Contas', 'Google Takeout'],
        ['Tempo de entrega', 'Horas a ~2 dias', 'Horas a vários dias', 'Horas a vários dias'],
        ['Formato', 'JSON ou TXT/HTML', 'JSON ou HTML', 'JSON, HTML, CSV'],
        [
          'Detalhe do histórico de visualizações',
          'Alto (timestamps por vídeo)',
          'Limitado (sem registo de vídeos do feed)',
          'Alto (timestamps por vídeo)',
        ],
        ['Histórico de pesquisas', 'Incluído', 'Incluído', 'Incluído'],
      ],
    },
    { type: 'h2', text: 'O Que Cada Exportação Revela' },
    {
      type: 'h3',
      text: 'Granularidade do Histórico de Visualizações',
    },
    {
      type: 'p',
      text: "O TikTok e o YouTube registam ambos um registo detalhado e com timestamps dos vídeos que viste, o que permite reconstruir hábitos de visualização ao longo do tempo. A exportação do Instagram é mais fraca neste aspeto — captura interações e alguns dados de visualização, mas não oferece o mesmo histórico limpo e por vídeo do feed que o TikTok disponibiliza.",
    },
    {
      type: 'h3',
      text: 'Histórico de Pesquisas',
    },
    {
      type: 'p',
      text: 'As três plataformas incluem as tuas pesquisas, pelo que podes ver que tópicos, criadores e sons procuraste. Esta é uma das secções mais consistentes entre as exportações.',
    },
    {
      type: 'h3',
      text: 'Mensagens e Interações',
    },
    {
      type: 'p',
      text: 'O TikTok e o Instagram incluem ambos mensagens diretas e registos de interação como gostos, comentários e seguimentos. O YouTube foca-se mais em comentários, subscrições e listas de reprodução, uma vez que não é principalmente uma plataforma de mensagens.',
    },
    { type: 'h2', text: 'Qual É Mais Fácil de Analisar?' },
    {
      type: 'p',
      text: 'Em termos de valor analítico, o TikTok e o YouTube lideram, pois ambos fornecem históricos de visualizações detalhados e com timestamps em JSON. Esse formato estruturado torna simples para uma ferramenta contar vídeos, encontrar os horários de pico e identificar padrões.',
    },
    {
      type: 'p',
      text: "A exportação do Instagram está bem organizada, mas é menos focada na visualização contínua de vídeos, pelo que conta uma história diferente — mais sobre interações do que sobre consumo passivo.",
    },
    {
      type: 'p',
      text: 'Na prática, os ficheiros de exportação brutos são difíceis de ler por si só. É aí que uma ferramenta de resumo ajuda. [[home:TikTok Wrapped]] pega numa exportação de dados do TikTok e transforma-a em insights visuais claros sobre a tua atividade. Podes [[analyze:analisar a tua própria exportação]] ou ver primeiro um [[example:exemplo de wrapped]] para perceber como ficam os resultados.',
    },
    { type: 'h2', text: 'Considerações Finais' },
    {
      type: 'p',
      text: 'O TikTok, Instagram e YouTube respeitam todos o teu direito de descarregar os teus dados, mas diferem na facilidade do processo e na utilidade do resultado para análise. O TikTok e o YouTube destacam-se pelo histórico de visualizações detalhado, enquanto o Instagram oferece uma visão mais abrangente das interações.',
    },
    {
      type: 'p',
      text: 'Se quiseres aprofundar, consulta os nossos guias sobre [[/blog/how-to-download-analyze-tiktok-data:como descarregar e analisar os teus dados do TikTok]] e a diferença entre [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:TikTok Wrapped e o TikTok Analytics]].',
    },
  ],
  faq: [
    {
      q: 'Como solicito os meus dados ao TikTok, Instagram e YouTube?',
      a: 'O TikTok oferece a opção dentro de Definições e privacidade em Descarregar os teus dados. O Instagram usa o Centro de Contas em Descarregar as tuas informações. O YouTube usa o Google Takeout, onde seleciona YouTube e YouTube Music.',
    },
    {
      q: 'Quanto tempo demora cada exportação de dados a chegar?',
      a: 'O TikTok é geralmente o mais rápido, muitas vezes em poucas horas a cerca de dois dias. O Instagram e o YouTube podem demorar desde algumas horas a vários dias, dependendo do tamanho da conta e do intervalo de datas solicitado.',
    },
    {
      q: 'Que formato devo escolher para análise?',
      a: 'Escolhe JSON sempre que estiver disponível. O JSON é legível por máquina e funciona melhor com ferramentas de análise, enquanto o HTML e o TXT são mais fáceis de ler manualmente, mas mais difíceis de processar.',
    },
    {
      q: 'Qual plataforma oferece o histórico de visualizações mais detalhado?',
      a: 'O TikTok e o YouTube fornecem ambos históricos de visualizações detalhados e com timestamps. O Instagram regista interações, mas não oferece o mesmo histórico por vídeo do feed.',
    },
    {
      q: 'Qual exportação é mais fácil de analisar?',
      a: 'O TikTok e o YouTube são os mais fáceis de analisar porque os seus históricos de visualizações em JSON estruturado tornam simples contar vídeos e encontrar padrões. Uma ferramenta como o TikTok Wrapped pode transformar uma exportação do TikTok em insights visuais claros.',
    },
  ],
}
