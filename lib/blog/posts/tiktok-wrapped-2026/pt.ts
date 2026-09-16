import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "TikTok Wrapped 2026: Como Ter a Tua Retrospetiva do Ano",
  description:
    "À procura do TikTok Wrapped 2026? O TikTok não faz um de forma fiável. Eis como criar a tua própria retrospetiva a partir da exportação dos teus dados: tempo de visualização, principais pesquisas e o teu ranking.",
  intro:
    "Todos os dezembros a mesma pergunta toma conta do For You de toda a gente: onde está o meu TikTok Wrapped? E todos os anos a resposta desilude um bocadinho. O TikTok nunca tratou a sua retrospetiva do ano como o Spotify faz. Em alguns anos aparece, noutros simplesmente não. Por isso, se já andas à caça do teu TikTok Wrapped 2026, aqui fica a situação sem rodeios, mais o truque que te dá mesmo os números.",
  blocks: [
    { type: 'h2', text: "Existe um TikTok Wrapped oficial para 2026?" },
    {
      type: 'p',
      text: "Resposta curta: até agora, não foi anunciado nada. E, sinceramente, faz todo o sentido. O TikTok lançou uma retrospetiva a sério de 2020 a 2022, saltou-a por completo em 2023 e desde aí é sempre uma incógnita. Mesmo nos anos em que aparece, costuma chegar por volta de meados de dezembro e vai chegando às pessoas por vagas, e não de uma vez só. Se andas a atualizar a app à espera que caia uma grande retrospetiva animada, podes ficar à espera durante um bom bocado.",
    },
    {
      type: 'p',
      text: "O que torna isto um bocadinho irritante é que o TikTok tem, claramente, os dados. O teu histórico de visualização, todas as pesquisas, os sons que guardaste às 2am, está tudo alojado nos servidores deles. A app é que nem sempre se dá ao trabalho de te devolver isso num formato que apeteça olhar.",
    },
    { type: 'h2', text: "O truque: cria o teu próprio a partir da exportação dos teus dados" },
    {
      type: 'p',
      text: "Aqui está a parte que a maioria das pessoas ignora. Na verdade, não precisas que o TikTok te faça um Wrapped. Podes ir buscar os dados em bruto tu mesmo e transformá-los no mesmo tipo de retrospetiva, no dia que te apetecer. É exatamente para isso que existe o [[home:TikTok Wrapped]].",
    },
    {
      type: 'p',
      text: "Funciona a partir da exportação oficial de dados que o TikTok deixa qualquer utilizador descarregar. Pedes o ficheiro, ele volta como um JSON (ou um ZIP com um JSON lá dentro), e a ferramenta lê-o e faz as contas: total de vídeos vistos, horas perdidas, a tua hora mais movimentada do dia, as pesquisas que talvez preferisses esquecer e um ranking de personalidade baseado em quão fundo estás nisto. Sem conta, sem palavra-passe, nada enviado para um servidor. O ficheiro é lido ali mesmo, no teu navegador.",
    },
    {
      type: 'p',
      text: "Obter o ficheiro é rápido, mas traz uma espera. Aqui fica o processo todo:",
    },
    {
      type: 'ol',
      items: [
        "No TikTok, abre o teu Perfil, toca no menu (☰) e vai a 'Settings and privacy'.",
        "Em 'Account', toca em 'Download your data'.",
        "Escolhe JSON como formato. Esta parte é importante, porque TXT e HTML não funcionam com a maioria das ferramentas de análise. Depois seleciona 'All data' e toca em 'Request data'.",
        "Espera. O TikTok costuma demorar entre umas horas e uns dois dias a montar o ficheiro e, assim que fica pronto, continua disponível para descarregar durante uns dias.",
      ],
    },
    {
      type: 'p',
      text: "Quando o ficheiro chegar, leva-o ao [[analyze:analisador]] e larga-o lá. Se preferires ver o que vais obter antes de passares por tudo isto, há uma [[example:retrospetiva de exemplo completa]] feita a partir de dados inventados, com que podes brincar primeiro.",
    },
    { type: 'h2', text: "O que a tua retrospetiva de 2026 mostra de facto" },
    {
      type: 'p',
      text: "É muito mais do que um contador de tempo de visualização. Ficas com as tuas principais pesquisas ordenadas pela frequência com que as procuraste, as horas em que estás mais ativo (o intervalo da madrugada costuma ser uma surpresa desagradável), os teus anos mais movimentados lado a lado, os teus gostos, comentários e partilhas, sons e criadores favoritos, e um ranking que, discretamente, te arruma algures entre espetador ocasional e, bem, isto é um problema. É aquilo que um Wrapped a sério te mostraria. Só que estás a gerá-lo nos teus próprios termos, em vez de andares à espera da app.",
    },
    { type: 'h2', text: "Porque é que o Spotify consegue e o TikTok não" },
    {
      type: 'p',
      text: "O Spotify transformou o Wrapped num acontecimento. É automático, é polido, sai à hora marcada e, durante uma semana, o teu feed inteiro são os artistas favoritos dos outros. O TikTok nunca assumiu esse compromisso. Parte disto é que um ano de música é genuinamente mais fácil de embrulhar do que um feed interminável e sem forma. Outra parte, desconfias, é que o TikTok prefere que continues a fazer scroll do que parares para contar quanto scroll já fizeste. Seja como for, é precisamente essa lacuna que faz existir as ferramentas de terceiros. Se queres a diferença prática entre uma retrospetiva como esta e os números de criador integrados do TikTok, [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:esta comparação]] explica tudo.",
    },
    { type: 'h2', text: "Uma coisa que vale a pena abrandar para pensar: privacidade" },
    {
      type: 'p',
      text: "A exportação dos teus dados é pessoal. Consoante o que incluíres, pode conter mensagens, histórico de sessões, tudo e mais alguma coisa. Por isso, importa mesmo onde a carregas. Com o TikTok Wrapped o ficheiro nunca sai do teu dispositivo; tudo acontece localmente no navegador e nada é guardado. Se também estás a ponderar outras ferramentas, [[/blog/is-it-safe-to-upload-tiktok-data-online:esta leitura rápida sobre como carregar dados do TikTok em segurança]] merece dois minutos antes de entregares o teu ficheiro seja a quem for.",
    },
    {
      type: 'p',
      text: "Portanto, não, provavelmente não vem aí nenhum TikTok Wrapped 2026 oficial e reluzente para salvar o dia. Mas os dados são teus e espremer deles a tua retrospetiva do ano dá cerca de cinco minutos de esforço a sério. [[analyze:Vai buscar a tua exportação e vê os teus números]] quando estiveres pronto para eles.",
    },
  ],
  faq: [
    {
      q: "Existe um TikTok Wrapped oficial para 2026?",
      a: "Nenhum foi anunciado. O TikTok fez um de 2020 a 2022, saltou 2023 e desde aí tem sido inconstante. Quando aparece, costuma ser por volta de meados de dezembro e chega de forma gradual.",
    },
    {
      q: "Quando é que sai o TikTok Wrapped?",
      a: "Historicamente, entre meados e finais de dezembro, quando chega a sair. Como não é garantido, muita gente usa uma ferramenta de exportação de dados para ter a sua retrospetiva no seu próprio ritmo, em vez de esperar.",
    },
    {
      q: "Posso ter já o meu TikTok Wrapped 2026?",
      a: "Sim. Não tens de esperar pelo TikTok. Pede a exportação dos teus dados (escolhe o formato JSON), depois carrega-a numa ferramenta como o TikTok Wrapped e ficas com as tuas estatísticas e o teu ranking em poucos segundos.",
    },
    {
      q: "Preciso de uma conta especial ou de pagar por isto?",
      a: "Não. Qualquer conta TikTok pode pedir uma exportação de dados, e analisá-la no TikTok Wrapped é gratuito e sem sessão iniciada.",
    },
    {
      q: "É seguro carregar os meus dados do TikTok?",
      a: "No TikTok Wrapped, o teu ficheiro é processado inteiramente no teu navegador e nunca é carregado nem guardado. Para ferramentas de terceiros em geral, vale a pena confirmar que processam os dados localmente e que nunca pedem a tua palavra-passe do TikTok.",
    },
  ],
}
