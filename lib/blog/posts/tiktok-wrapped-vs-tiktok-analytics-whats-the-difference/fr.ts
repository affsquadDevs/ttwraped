import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "TikTok Wrapped vs TikTok Analytics : quelle est la différence ?",
  description:
    "Comparez TikTok Wrapped et TikTok Analytics pour comprendre le fonctionnement de chacun, les données qu'ils utilisent et les analyses qu'ils fournissent.",
  intro:
    "TikTok Analytics affiche des métriques de performance à court terme dans l'application pour les créateurs, tandis que TikTok Wrapped analyse les habitudes d'utilisation à long terme à partir des exports de données TikTok appartenant aux utilisateurs.",
  blocks: [
    {
      type: 'p',
      text: "TikTok propose des analyses intégrées pour les créateurs, tandis que des outils comme TikTok Wrapped se concentrent sur l'analyse des exports de données appartenant aux utilisateurs. Bien que les deux traitent des données TikTok, ils servent des objectifs très différents.",
    },
    {
      type: 'p',
      text: "Cet article explique la différence entre TikTok Wrapped et TikTok Analytics, le fonctionnement de chacun, et dans quelle situation l'un peut être plus utile que l'autre.",
    },
    { type: 'h2', text: "Qu'est-ce que TikTok Analytics ?" },
    {
      type: 'p',
      text: "TikTok propose TikTok Analytics comme fonctionnalité native dans l'application, principalement conçue pour les créateurs.",
    },
    { type: 'p', text: 'TikTok Analytics affiche généralement :' },
    {
      type: 'ul',
      items: [
        'les vues et la portée des vidéos,',
        'la croissance des abonnés,',
        "les métriques d'engagement (likes, commentaires, partages),",
        'les tendances de performance à court terme.',
      ],
    },
    {
      type: 'p',
      text: "Ces données sont agrégées et limitées à des plages de temps spécifiques, généralement les 7 à 60 derniers jours.",
    },
    { type: 'h2', text: "Qu'est-ce que TikTok Wrapped ?" },
    {
      type: 'p',
      text: "[[home:TikTok Wrapped]] est un outil d'analyse de données indépendant qui fonctionne avec l'export officiel des données TikTok d'un utilisateur.",
    },
    {
      type: 'p',
      text: "Au lieu de se concentrer sur les performances du contenu, TikTok Wrapped analyse :",
    },
    {
      type: 'ul',
      items: [
        "l'historique d'utilisation à long terme,",
        "les chronologies d'activité,",
        "le comportement d'interaction au fil du temps,",
        "les tendances basées sur les fichiers de données appartenant à l'utilisateur.",
      ],
    },
    {
      type: 'p',
      text: "TikTok Wrapped ne collecte pas de données directement depuis TikTok. Il traite uniquement les fichiers que les utilisateurs téléchargent et importent volontairement.",
    },
    { type: 'h2', text: "Principales différences en un coup d'œil" },
    {
      type: 'table',
      headers: ['Fonctionnalité', 'TikTok Analytics', 'TikTok Wrapped'],
      rows: [
        ['Source des données', "Métriques dans l'application", "Export des données utilisateur"],
        ['Public principal', 'Créateurs', 'Tout utilisateur TikTok'],
        ['Période', 'Court terme', 'Long terme'],
        ['Focus', 'Performance du contenu', "Comportement d'utilisation"],
        ['Propriété des données', 'Contrôlée par la plateforme', "Appartenant à l'utilisateur"],
        ['Compte requis', 'Oui', 'Non'],
      ],
    },
    { type: 'h2', text: "Source des données : métriques de la plateforme vs exports utilisateur" },
    {
      type: 'p',
      text: "TikTok Analytics utilise des métriques contrôlées par la plateforme. Les utilisateurs voient des résumés choisis par TikTok, avec une profondeur historique limitée.",
    },
    {
      type: 'p',
      text: "TikTok Wrapped utilise des exports de données appartenant aux utilisateurs, qui :",
    },
    {
      type: 'ul',
      items: [
        'sont téléchargés directement depuis TikTok,',
        "contiennent des enregistrements d'activité bruts,",
        'offrent une couverture historique plus large.',
      ],
    },
    {
      type: 'p',
      text: "Cette différence affecte à la fois la portée des données et la transparence.",
    },
    { type: 'h2', text: "Différences selon les cas d'utilisation" },
    {
      type: 'step',
      title: "Quand TikTok Analytics est utile",
      items: [
        'Suivre les performances des vidéos',
        'Surveiller la croissance des abonnés',
        'Optimiser les stratégies de publication',
        'Décisions de contenu à court terme',
      ],
    },
    {
      type: 'step',
      title: "Quand TikTok Wrapped est utile",
      items: [
        "Comprendre les habitudes d'utilisation à long terme",
        "Explorer les tendances d'activité personnelle",
        "Examiner le comportement d'engagement historique",
        'Analyse personnelle et réflexion',
      ],
    },
    {
      type: 'p',
      text: 'Les deux outils sont complémentaires, non concurrents.',
    },
    { type: 'h2', text: 'Considérations relatives à la confidentialité et au contrôle' },
    { type: 'p', text: 'TikTok Analytics :' },
    {
      type: 'ul',
      items: [
        "fonctionne entièrement dans TikTok,",
        "ne permet pas l'export des données au même niveau de détail,",
        'affiche uniquement des métriques sélectionnées.',
      ],
    },
    { type: 'p', text: 'TikTok Wrapped :' },
    {
      type: 'ul',
      items: [
        "fonctionne uniquement avec les données que l'utilisateur choisit d'importer,",
        "ne nécessite pas l'accès au compte TikTok,",
        "permet aux utilisateurs de conserver la pleine propriété de leurs données.",
      ],
    },
    {
      type: 'p',
      text: "La confidentialité dépend de la façon dont chaque outil est utilisé de manière responsable.",
    },
    { type: 'h2', text: "TikTok Wrapped remplace-t-il TikTok Analytics ?" },
    { type: 'p', text: 'Non.' },
    {
      type: 'p',
      text: "TikTok Wrapped ne remplace pas TikTok Analytics. Il remplit un objectif analytique différent.",
    },
    {
      type: 'p',
      text: "TikTok Analytics aide les créateurs à optimiser leur contenu. TikTok Wrapped aide les utilisateurs à comprendre leur comportement et leur utilisation au fil du temps.",
    },
    { type: 'h2', text: 'Réflexions finales' },
    {
      type: 'p',
      text: "TikTok Analytics et TikTok Wrapped analysent les données TikTok sous des angles différents. L'un se concentre sur les performances du contenu dans l'application, tandis que l'autre se concentre sur les données appartenant aux utilisateurs en dehors de l'application.",
    },
    {
      type: 'p',
      text: "Comprendre cette distinction aide les utilisateurs à choisir le bon outil selon leurs objectifs — qu'il s'agisse d'optimiser du contenu ou d'obtenir des informations personnelles.",
    },
  ],
  faq: [
    {
      q: "TikTok Wrapped est-il un outil officiel de TikTok ?",
      a: "Non. TikTok Wrapped est un service indépendant et n'est pas affilié à TikTok ni à ByteDance Ltd.",
    },
    {
      q: "TikTok Wrapped utilise-t-il les mêmes données que TikTok Analytics ?",
      a: "Non. TikTok Analytics utilise des métriques de performance dans l'application, tandis que TikTok Wrapped analyse les exports de données TikTok appartenant aux utilisateurs.",
    },
    {
      q: "Les non-créateurs peuvent-ils utiliser TikTok Analytics ?",
      a: "TikTok Analytics est principalement conçu pour les comptes créateurs. TikTok Wrapped peut être utilisé par n'importe quel utilisateur TikTok.",
    },
    {
      q: "TikTok Wrapped nécessite-t-il l'accès à mon compte TikTok ?",
      a: "Non. TikTok Wrapped ne nécessite pas de connexion à TikTok ni d'autorisation de compte.",
    },
    {
      q: "Quel outil affiche les données TikTok sur une plus longue période ?",
      a: "TikTok Wrapped affiche généralement des données historiques sur une plus longue période, en fonction de ce qui est inclus dans l'export de données TikTok.",
    },
  ],
}
