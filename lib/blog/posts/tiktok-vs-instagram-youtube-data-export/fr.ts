import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "TikTok vs Instagram vs YouTube : comparaison de vos exports de données",
  description:
    "Comparez comment TikTok, Instagram et YouTube vous permettent de télécharger vos données : comment demander chaque export, délai de livraison, formats disponibles et lequel est le plus facile à analyser.",
  intro:
    "TikTok, Instagram et YouTube vous permettent tous de télécharger une copie de vos données personnelles, mais le processus de demande, le délai de livraison, les formats de fichiers et le niveau de détail varient considérablement d'une plateforme à l'autre.",
  blocks: [
    {
      type: 'p',
      text: "Si vous avez déjà voulu consulter votre propre activité — ce que vous avez regardé, ce que vous avez recherché et comment vous avez utilisé une application au fil des ans — la plupart des grandes plateformes vous offrent désormais un moyen de demander ces données. Cela est en partie dû aux réglementations sur la vie privée comme le RGPD et la CCPA, qui donnent aux utilisateurs le droit d'accéder aux informations qu'un service détient à leur sujet.",
    },
    {
      type: 'p',
      text: "Ce guide compare l'expérience d'export de données sur trois des plus grandes plateformes : TikTok, Instagram et YouTube. Nous verrons comment demander chaque export, le délai de livraison, les formats reçus et ce que chaque archive révèle réellement sur votre activité.",
    },
    { type: 'h2', text: 'Comment demander chaque export' },
    {
      type: 'p',
      text: "Chaque plateforme cache l'option de téléchargement dans ses paramètres de confidentialité ou de compte, mais le chemin est légèrement différent.",
    },
    {
      type: 'ul',
      items: [
        "TikTok : Ouvrez Paramètres et confidentialité → Compte → Télécharger vos données, choisissez un format et faites la demande.",
        "Instagram : Allez dans Paramètres → Espace Comptes → Vos informations et autorisations → Télécharger vos informations.",
        "YouTube : Utilisez Google Takeout, sélectionnez YouTube et YouTube Music, et choisissez ce à inclure (historique, commentaires, playlists).",
      ],
    },
    {
      type: 'p',
      text: "TikTok centralise tout dans sa propre application, Instagram vous redirige vers l'Espace Comptes partagé de Meta, et YouTube confie la tâche à Google Takeout, qui couvre tous les produits Google en un seul endroit.",
    },
    { type: 'h2', text: 'Délai de livraison' },
    {
      type: 'p',
      text: "Aucun de ces exports n'est instantané, car les plateformes doivent regrouper potentiellement plusieurs années d'activité dans une archive téléchargeable.",
    },
    {
      type: 'p',
      text: "TikTok est généralement le plus rapide — souvent en quelques heures à quelques jours, et le fichier apparaît directement dans l'application pour que vous puissiez le télécharger. Instagram et YouTube peuvent prendre de quelques heures à plusieurs jours selon la taille du compte et la plage de dates demandée. Les archives volumineuses, notamment celles incluant des médias, prennent plus de temps à préparer.",
    },
    { type: 'h2', text: 'Formats de fichiers' },
    {
      type: 'p',
      text: "Le format que vous recevez est très important si vous envisagez d'analyser les données ultérieurement.",
    },
    {
      type: 'ul',
      items: [
        "TikTok vous laisse choisir entre JSON (lisible par machine, idéal pour l'analyse) et TXT/HTML (plus facile à lire manuellement).",
        "Instagram propose JSON ou HTML, où HTML s'ouvre comme des pages web et JSON est mieux adapté aux outils.",
        "YouTube fournit l'historique en JSON ou HTML et les autres éléments en CSV, le tout regroupé dans une archive ZIP.",
      ],
    },
    {
      type: 'p',
      text: "Si votre objectif est d'analyser votre activité plutôt que de simplement la parcourir, choisissez toujours JSON lorsque l'option est disponible.",
    },
    { type: 'h2', text: 'Comparaison côte à côte' },
    {
      type: 'table',
      headers: ['Fonctionnalité', 'TikTok', 'Instagram', 'YouTube'],
      rows: [
        ["Méthode de demande", "Paramètres dans l'application", 'Espace Comptes', 'Google Takeout'],
        ['Délai de livraison', 'Quelques heures à ~2 jours', 'Quelques heures à plusieurs jours', 'Quelques heures à plusieurs jours'],
        ['Format', 'JSON ou TXT/HTML', 'JSON ou HTML', 'JSON, HTML, CSV'],
        [
          "Détail de l'historique de visionnage",
          'Élevé (horodatage par vidéo)',
          "Limité (pas de journal vidéo du fil d'actualité)",
          'Élevé (horodatage par vidéo)',
        ],
        ["Historique des recherches", 'Inclus', 'Inclus', 'Inclus'],
      ],
    },
    { type: 'h2', text: 'Ce que révèle chaque export' },
    {
      type: 'h3',
      text: "Granularité de l'historique de visionnage",
    },
    {
      type: 'p',
      text: "TikTok et YouTube enregistrent tous les deux un journal détaillé et horodaté des vidéos que vous avez regardées, ce qui permet de reconstituer vos habitudes de visionnage au fil du temps. L'export d'Instagram est plus limité à cet égard — il capture les interactions et certaines données de visionnage, mais ne fournit pas le même historique clair par vidéo que propose TikTok.",
    },
    {
      type: 'h3',
      text: 'Historique des recherches',
    },
    {
      type: 'p',
      text: "Les trois plateformes incluent vos requêtes de recherche, vous permettant ainsi de voir les sujets, créateurs et sons que vous avez recherchés. Il s'agit de l'une des sections les plus cohérentes entre les différents exports.",
    },
    {
      type: 'h3',
      text: 'Messages et interactions',
    },
    {
      type: 'p',
      text: "TikTok et Instagram incluent tous deux les messages directs et les enregistrements d'engagement tels que les likes, commentaires et abonnements. YouTube se concentre davantage sur les commentaires, les abonnements et les playlists, car ce n'est pas principalement une plateforme de messagerie.",
    },
    { type: 'h2', text: 'Lequel est le plus facile à analyser ?' },
    {
      type: 'p',
      text: "En termes de valeur analytique pure, TikTok et YouTube sont en tête, car tous deux fournissent des historiques de visionnage détaillés et horodatés en JSON. Ce format structuré facilite le travail d'un outil pour compter les vidéos, trouver les heures de pointe et mettre en évidence des tendances.",
    },
    {
      type: 'p',
      text: "L'export d'Instagram est bien organisé mais moins axé sur le visionnage continu de vidéos, il raconte donc une histoire différente — davantage axée sur les interactions que sur le visionnage passif.",
    },
    {
      type: 'p',
      text: "En pratique, les fichiers d'export bruts sont difficiles à lire seuls. C'est là qu'un outil de synthèse s'avère utile. [[home:TikTok Wrapped]] prend un export de données TikTok et le transforme en insights visuels clairs sur votre activité. Vous pouvez [[analyze:analyser votre propre export]] ou consulter un [[example:exemple de wrapped]] d'abord pour voir à quoi ressemblent les résultats.",
    },
    { type: 'h2', text: 'Réflexions finales' },
    {
      type: 'p',
      text: "TikTok, Instagram et YouTube respectent tous votre droit de télécharger vos données, mais ils diffèrent par la facilité du processus et l'utilité du résultat pour l'analyse. TikTok et YouTube excellent pour l'historique de visionnage détaillé, tandis qu'Instagram offre une vue d'ensemble des interactions.",
    },
    {
      type: 'p',
      text: "Pour aller plus loin, consultez nos guides sur [[/blog/how-to-download-analyze-tiktok-data:comment télécharger et analyser vos données TikTok]] et la différence entre [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:TikTok Wrapped et TikTok Analytics]].",
    },
  ],
  faq: [
    {
      q: "Comment demander mes données à TikTok, Instagram et YouTube ?",
      a: "TikTok propose l'option dans Paramètres et confidentialité sous Télécharger vos données. Instagram utilise l'Espace Comptes sous Télécharger vos informations. YouTube utilise Google Takeout, où vous sélectionnez YouTube et YouTube Music.",
    },
    {
      q: "Combien de temps faut-il pour recevoir chaque export de données ?",
      a: "TikTok est généralement le plus rapide, souvent en quelques heures à environ deux jours. Instagram et YouTube peuvent prendre de quelques heures à plusieurs jours selon la taille du compte et la plage de dates demandée.",
    },
    {
      q: "Quel format dois-je choisir pour l'analyse ?",
      a: "Choisissez JSON lorsque cette option est proposée. JSON est lisible par machine et fonctionne mieux avec les outils d'analyse, tandis que HTML et TXT sont plus faciles à lire manuellement mais plus difficiles à traiter.",
    },
    {
      q: "Quelle plateforme fournit l'historique de visionnage le plus détaillé ?",
      a: "TikTok et YouTube fournissent tous deux des historiques de visionnage détaillés et horodatés. Instagram capture les interactions mais n'offre pas le même historique par vidéo.",
    },
    {
      q: "Quel export est le plus facile à analyser ?",
      a: "TikTok et YouTube sont les plus faciles à analyser car leurs historiques de visionnage JSON structurés permettent de compter facilement les vidéos et d'identifier des tendances. Un outil comme TikTok Wrapped peut transformer un export TikTok en insights visuels clairs.",
    },
  ],
}
