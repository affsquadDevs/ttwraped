import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'O Que Significa Cada Pasta na Exportação de Dados do TikTok (Guia 2026)',
  description:
    'Uma explicação clara de cada pasta e secção JSON na exportação de dados do TikTok, o que cada uma contém e quais as partes que o TikTok Wrapped lê.',
  intro:
    'A exportação de dados do TikTok está organizada num conjunto de pastas e secções JSON — Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings e TikTok Live — e cada uma armazena uma fatia diferente do histórico da tua conta.',
  blocks: [
    {
      type: 'p',
      text: 'Quando solicitas os teus dados ao TikTok e abres o ficheiro descarregado, o conteúdo pode parecer avassalador. Quer recebas um único ficheiro JSON grande ou uma pasta estruturada com vários ficheiros, a informação está agrupada em secções previsíveis. Assim que perceberes como essas secções se relacionam com a tua actividade real, a exportação torna-se fácil de navegar.',
    },
    {
      type: 'p',
      text: 'Este guia percorre cada pasta de nível superior e secção JSON da exportação, explica o que contém em linguagem simples e mostra quais as partes que o [[home:TikTok Wrapped]] lê para construir o teu resumo. Se ainda não descarregaste os teus dados, consulta o nosso passo a passo em [[/blog/how-to-download-analyze-tiktok-data:como descarregar e analisar os teus dados do TikTok]].',
    },
    { type: 'h2', text: 'Profile' },
    {
      type: 'p',
      text: 'A secção Profile contém as informações básicas da tua conta: nome de utilizador, nome do perfil, bio, o e-mail ou telefone associado à conta e os detalhes de criação da conta. Descreve quem és na plataforma, e não o que fizeste.',
    },
    {
      type: 'p',
      text: "Esta secção é pequena mas útil para identificar um relatório. Não contém a tua palavra-passe — o TikTok nunca inclui credenciais numa exportação.",
    },
    { type: 'h2', text: 'Activity (A Tua Actividade)' },
    {
      type: 'p',
      text: 'A secção Activity — por vezes denominada "Your Activity" — é o coração da exportação e normalmente a parte maior. Está dividida em várias subsecções que registam tudo o que fizeste enquanto navegavas:',
    },
    {
      type: 'ul',
      items: [
        'Watch History — uma lista com marcação temporal dos vídeos que viste.',
        'Like List — os vídeos de que gostaste, com datas.',
        'Search History — os termos que pesquisaste.',
        'Share History — conteúdo que partilhaste e para onde.',
        'Following / Follower List — contas que segues e contas que te seguem.',
        'Vídeos, sons e hashtags favoritos — itens que guardaste nos favoritos.',
      ],
    },
    {
      type: 'p',
      text: 'Por ter marcação temporal, esta secção é o que torna possível a análise de padrões a longo prazo. A maior parte das informações num resumo do TikTok Wrapped — os teus períodos de maior visualização, criadores favoritos e volume de visualizações — vêm daqui.',
    },
    { type: 'h2', text: 'Comments' },
    {
      type: 'p',
      text: 'A secção Comments lista os comentários que publicaste noutros vídeos, juntamente com as respectivas marcações temporais. Reflecte a forma como interagiste publicamente com conteúdo ao longo do tempo.',
    },
    { type: 'h2', text: 'Direct Messages' },
    {
      type: 'p',
      text: 'A secção Direct Messages contém o histórico das tuas conversas privadas, agrupado por conversa. Esta é a parte mais pessoal da exportação, razão pela qual merece cuidado extra ao partilhar ficheiros. O TikTok Wrapped não necessita nem lê as tuas mensagens directas.',
    },
    { type: 'h2', text: 'Video (As Tuas Publicações)' },
    {
      type: 'p',
      text: 'A secção Video — frequentemente denominada "Posts" — abrange o conteúdo que publicaste: os teus vídeos carregados, legendas e metadados relacionados. Para criadores, esta secção documenta o histórico de publicações; para espectadores, pode ser pequena ou estar vazia.',
    },
    { type: 'h2', text: 'Ads and Data' },
    {
      type: 'p',
      text: 'A secção Ads and Data regista sinais relacionados com publicidade, incluindo os dados de Off TikTok Activity — informações que outras aplicações e sites partilharam com o TikTok sobre a tua actividade fora da aplicação. Inclui também interesses publicitários e registos de interacção com anúncios utilizados para segmentação.',
    },
    {
      type: 'p',
      text: 'Se quiseres aprofundar o que estes sinais revelam, o nosso artigo sobre [[/blog/what-data-does-tiktok-collect:que dados o TikTok recolhe]] percorre as categorias em detalhe.',
    },
    { type: 'h2', text: 'App Settings' },
    {
      type: 'p',
      text: 'A secção App Settings armazena as tuas preferências: definições de privacidade, escolhas de notificações, idioma e configuração semelhante. Descreve como a tua conta está configurada e não como a utilizaste, pelo que raramente afecta a análise.',
    },
    { type: 'h2', text: 'TikTok Live' },
    {
      type: 'p',
      text: 'A secção TikTok Live captura a actividade relacionada com transmissões em directo — transmissões que organizaste ou em que participaste, e interacções relacionadas. Para a maioria dos espectadores esta secção é pequena, mas para streamers activos pode ser um registo relevante.',
    },
    { type: 'h2', text: 'Referência Pasta a Pasta' },
    {
      type: 'p',
      text: 'A tabela abaixo mapeia cada pasta ou secção JSON com o que contém e com o que o TikTok Wrapped lê. Podes também ver o tipo de resultado que produz na nossa página [[example:exemplo do wrapped]].',
    },
    {
      type: 'table',
      headers: ['Pasta / Secção', 'O que contém', 'O que o TikTok Wrapped lê'],
      rows: [
        ['Profile', 'Nome de utilizador, bio, detalhes da conta', 'Nome de apresentação para o relatório'],
        ['Activity — Watch History', 'Vídeos vistos com marcação temporal', 'Volume de visualizações e tendências'],
        ['Activity — Like List', 'Vídeos de que gostaste, com datas', 'Hábitos de gostos ao longo do tempo'],
        ['Activity — Search History', 'Termos que pesquisaste', 'Pesquisas principais e interesses'],
        ['Activity — Following / Follower', 'Contas seguidas e seguidores', 'Criadores favoritos'],
        ['Comments', 'Comentários que publicaste', 'Contagens de interacção (opcional)'],
        ['Direct Messages', 'Histórico de conversas privadas', 'Não é lido'],
        ['Video / Posts', 'Vídeos que publicaste', 'Histórico de publicações (criadores)'],
        ['Ads and Data', 'Off TikTok Activity, interesses publicitários', 'Não é lido'],
        ['App Settings', 'Privacidade e preferências da aplicação', 'Não é lido'],
        ['TikTok Live', 'Actividade de transmissões em directo', 'Não é lido'],
      ],
    },
    { type: 'h2', text: 'Uma Nota sobre Privacidade' },
    {
      type: 'p',
      text: 'A tua exportação contém secções sensíveis — especialmente Direct Messages e Ads and Data — que nunca são necessárias para gerar um resumo de utilização. O TikTok Wrapped foca-se nos dados de Activity com marcação temporal e ignora completamente as mensagens privadas e os registos publicitários. Mantens o controlo do ficheiro e podes eliminar as pastas sensíveis antes de carregar qualquer coisa. Quando estiveres pronto, podes [[analyze:analisar o teu wrapped]] apenas com os ficheiros de actividade.',
    },
    { type: 'h2', text: 'Considerações Finais' },
    {
      type: 'p',
      text: "A exportação de dados do TikTok só parece complicada até conheceres o mapa. Cada pasta responde a uma única pergunta — quem és, o que viste, o que publicaste, com quem faláste ou como a tua conta está configurada. Saber quais as secções que importam permite-te analisar as partes que te interessam enquanto deixas as privadas intactas.",
    },
  ],
  faq: [
    {
      q: 'Como está organizada a exportação de dados do TikTok?',
      a: "A exportação está agrupada em secções como Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings e TikTok Live, cada uma armazenando uma parte diferente do histórico da tua conta.",
    },
    {
      q: 'Qual a pasta que contém o meu histórico de visualizações?',
      a: "O teu histórico de visualizações está dentro da secção Activity, frequentemente denominada Your Activity, juntamente com a tua Like List, Search History e listas de Following.",
    },
    {
      q: 'A exportação de dados do TikTok inclui a minha palavra-passe?',
      a: 'Não. O TikTok nunca inclui palavras-passe de conta ou credenciais de acesso numa exportação de dados. A secção Profile contém apenas informações básicas da conta.',
    },
    {
      q: 'O TikTok Wrapped lê as minhas mensagens directas?',
      a: 'Não. O TikTok Wrapped foca-se nos dados de Activity com marcação temporal e não lê as tuas secções de Direct Messages nem de Ads and Data.',
    },
    {
      q: 'O que são os dados de Off TikTok Activity?',
      a: 'O Off TikTok Activity está na secção Ads and Data e regista informações que outras aplicações e sites partilharam com o TikTok sobre a tua actividade fora da aplicação.',
    },
  ],
}
