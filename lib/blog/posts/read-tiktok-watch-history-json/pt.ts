import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Como Ler o Ficheiro JSON do Histórico de Visualizações do TikTok",
  description:
    "Saiba o que é o ficheiro JSON do Histórico de Visualizações do TikTok, onde se encontra na exportação de dados e como ler a sua estrutura para contar vídeos e sessões.",
  intro:
    "O ficheiro do Histórico de Visualizações do TikTok é um registo JSON em texto simples de todos os vídeos que reproduziu, armazenado dentro da exportação de dados que o TikTok permite descarregar. Assim que compreender a sua estrutura, pode lê-lo, contar vídeos e até estimar sessões de visualização por conta própria.",
  blocks: [
    {
      type: "p",
      text: "Quando solicita os seus dados ao TikTok e escolhe o formato JSON, a exportação chega como um arquivo ZIP contendo vários ficheiros. Um dos mais interessantes é o ficheiro do Histórico de Visualizações, que lista os vídeos que assistiu ao longo do tempo. Este guia explica onde se encontra o ficheiro, como o JSON está organizado e como interpretá-lo.",
    },
    {
      type: "h2",
      text: "O que é o Ficheiro do Histórico de Visualizações",
    },
    {
      type: "p",
      text: "O ficheiro do Histórico de Visualizações é um registo dos vídeos que foram reproduzidos nos seus feeds Para Si e A Seguir. Cada entrada representa um único vídeo que o TikTok registou como assistido, juntamente com a hora em que foi reproduzido e uma ligação para o vídeo original.",
    },
    {
      type: "p",
      text: "Não é um painel de análise. São dados em bruto: uma longa lista de marcas temporais e URLs. Isso torna-o poderoso para análise pessoal, mas mais difícil de ler rapidamente, especialmente se o seu histórico abrange meses ou anos.",
    },
    {
      type: "h2",
      text: "Onde Se Encontra na Exportação",
    },
    {
      type: "p",
      text: "Depois de descompactar a exportação do TikTok, os dados do Histórico de Visualizações estão agrupados numa pasta relacionada com atividade. Numa exportação JSON, normalmente encontrá-los-á aninhados desta forma:",
    },
    {
      type: "ul",
      items: [
        "Activity → Video Browsing History (por vezes denominado Watch History),",
        "armazenado num único ficheiro .json juntamente com outros ficheiros de atividade, como Lista de Gostos e Histórico de Pesquisas.",
      ],
    },
    {
      type: "p",
      text: "Os nomes exatos das pastas podem variar ligeiramente entre versões de exportação. Se não tiver a certeza de como o arquivo está organizado, o nosso guia sobre [[/blog/tiktok-data-export-folders-explained:pastas da exportação de dados do TikTok explicadas]] descreve cada secção. Para o processo completo de pedido e transferência, consulte [[/blog/how-to-download-analyze-tiktok-data:como descarregar e analisar dados do TikTok]].",
    },
    {
      type: "h2",
      text: "A Estrutura JSON: Entradas do VideoList",
    },
    {
      type: "p",
      text: "Dentro do ficheiro, os registos de visualização estão armazenados sob uma chave normalmente designada VideoList. É um array de objetos, em que cada objeto descreve um vídeo assistido. Uma entrada individual tem aproximadamente este aspeto:",
    },
    {
      type: "ul",
      items: [
        'Date — quando o vídeo foi assistido, por ex. "2026-02-14 18:32:07",',
        'Link — o URL do vídeo, por ex. "https://www.tiktokv.com/share/video/7300000000000000000/".',
      ],
    },
    {
      type: "p",
      text: 'Assim, a forma geral é um objeto de nível superior que contém o array, que pode ser encarado como { "Video Browsing History": { "VideoList": [ ... ] } }. Cada elemento do VideoList é um evento de reprodução com os campos Date e Link. Não existem contagens de visualizações, números de interação nem legendas — apenas quando e o quê.',
    },
    {
      type: "h2",
      text: "Como Contar Vídeos Manualmente",
    },
    {
      type: "p",
      text: "A métrica mais simples é o número total de vídeos assistidos, que é igual ao comprimento do array VideoList. Pode descobri-lo de várias formas:",
    },
    {
      type: "ul",
      items: [
        "abrir o ficheiro num editor de código e verificar o comprimento do array, ou",
        "carregá-lo numa consola de browser com data['Video Browsing History'].VideoList.length, ou",
        "utilizar uma ferramenta de linha de comandos para contar as ocorrências da chave Date.",
      ],
    },
    {
      type: "p",
      text: "Contar vídeos únicos é um pouco mais difícil, porque o mesmo Link pode aparecer mais do que uma vez se tiver revisto um vídeo. Para contar os únicos, terá de desduplicar pelo campo Link em vez de apenas contar as linhas.",
    },
    {
      type: "h2",
      text: "Estimar Sessões vs Utilizar uma Ferramenta",
    },
    {
      type: "p",
      text: "Uma \"sessão\" é um período de visualização contínua. A exportação não identifica sessões, pelo que tem de as inferir a partir das marcas temporais Date. Uma abordagem comum é ordenar as entradas por data e agrupar os vídeos que estão próximos no tempo:",
    },
    {
      type: "ul",
      items: [
        "ordenar todas as entradas pelo valor de Date,",
        "percorrer a lista e iniciar uma nova sessão sempre que o intervalo entre dois vídeos consecutivos exceda um limiar (por exemplo, 30 minutos),",
        "contar o número de sessões resultantes.",
      ],
    },
    {
      type: "p",
      text: "Fazer isto manualmente em milhares de entradas é tedioso e sujeito a erros. Uma ferramenta como o [[home:TikTok Wrapped]] realiza este agrupamento automaticamente e transforma-o em resumos legíveis. Pode [[example:ver um exemplo de wrapped]] para perceber o aspeto do resultado, ou [[analyze:analisar a sua própria exportação]] diretamente.",
    },
    {
      type: "h2",
      text: "Armadilhas Comuns",
    },
    {
      type: "h3",
      text: "Formatos de Data e Fusos Horários",
    },
    {
      type: "p",
      text: "O campo Date é uma cadeia de texto, não um verdadeiro datetime, e é frequentemente registado em UTC em vez da sua hora local. Se o analisar sem ter em conta o fuso horário, os limites das suas sessões e os resultados de \"hora mais ativa\" podem desviar-se várias horas.",
    },
    {
      type: "h3",
      text: "Histórico Parcial",
    },
    {
      type: "p",
      text: "A exportação pode não incluir todo o seu historial de visualizações. O TikTok limita o período de algumas atividades, pelo que um VideoList vazio ou curto não significa necessariamente que assistiu pouco — pode significar que a janela da exportação foi limitada.",
    },
    {
      type: "h3",
      text: "Ficheiros de Grande Dimensão",
    },
    {
      type: "p",
      text: "Utilizadores frequentes podem acabar com ficheiros do Histórico de Visualizações com dezenas de megabytes. Alguns editores de texto têm dificuldade em abrir ficheiros dessa dimensão. Se um ficheiro não abrir ou bloquear o editor, isso é sinal de que os dados são grandes, não de que o ficheiro está corrompido.",
    },
    {
      type: "h3",
      text: "Diferenças nos Nomes das Chaves",
    },
    {
      type: "p",
      text: "Como o TikTok ocasionalmente renomeia chaves entre versões de exportação, a chave envolvente do VideoList pode ser diferente. Se data['Video Browsing History'] for undefined, inspecione primeiro as chaves de nível superior para encontrar a etiqueta correta.",
    },
    {
      type: "h2",
      text: "Considerações Finais",
    },
    {
      type: "p",
      text: "O ficheiro JSON do Histórico de Visualizações é uma das partes mais reveladoras da sua exportação do TikTok. Assim que compreender que é simplesmente um array VideoList de pares Date e Link, contar vídeos e estimar sessões torna-se simples — embora as armadilhas de fuso horário, histórico parcial e tamanho do ficheiro sejam fáceis de ignorar.",
    },
    {
      type: "p",
      text: "Se preferir dispensar a análise manual, uma ferramenta de análise pode ler o mesmo ficheiro e apresentar os resultados em segundos.",
    },
  ],
  faq: [
    {
      q: "Onde está o ficheiro do Histórico de Visualizações na exportação do TikTok?",
      a: "Encontra-se geralmente numa pasta Activity, frequentemente denominada Video Browsing History ou Watch History, armazenado como um único ficheiro JSON.",
    },
    {
      q: "Que campos contém cada entrada do histórico de visualizações?",
      a: "Cada entrada no array VideoList contém um campo Date com a hora em que o vídeo foi assistido e um campo Link com o URL do vídeo.",
    },
    {
      q: "Como posso contar quantos vídeos assisti?",
      a: "O total é igual ao número de entradas no array VideoList. Pode verificar o comprimento do array num editor de código ou na consola do browser.",
    },
    {
      q: "Por que razão as marcas temporais parecem estar desfasadas algumas horas?",
      a: "O campo Date é frequentemente registado em UTC, pelo que pode diferir da sua hora local, a menos que o converta para o seu próprio fuso horário.",
    },
    {
      q: "Por que razão o meu ficheiro do Histórico de Visualizações é tão grande?",
      a: "Visualizações frequentes produzem muitas entradas, pelo que o ficheiro pode crescer até dezenas de megabytes. Uma dimensão grande é normal e não significa que o ficheiro esteja danificado.",
    },
  ],
}
