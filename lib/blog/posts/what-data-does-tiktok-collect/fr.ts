import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Quelles données TikTok collecte-t-il sur vous ? Explication claire",
  description:
    "Découvrez quelles données TikTok collecte sur les utilisateurs, notamment les informations d'activité, de compte et d'appareil, et ce qui apparaît dans votre export de données TikTok.",
  intro:
    "Les plateformes de réseaux sociaux s'appuient sur les données pour fonctionner, personnaliser les expériences et garantir la sécurité des comptes. Pour les utilisateurs de TikTok, comprendre quelles données sont collectées et comment elles sont classées est un aspect essentiel de la transparence numérique, en particulier lorsqu'on demande un export de ses données personnelles.",
  blocks: [
    {
      type: 'p',
      text: "Cet article explique les principaux types de données que TikTok collecte, comment ces données sont générées par une utilisation normale de l'application, ce qui apparaît généralement dans un export de données TikTok, et ce que les utilisateurs devraient prendre en compte lorsqu'ils examinent leurs informations.",
    },
    { type: 'h2', text: "Comment TikTok collecte les données des utilisateurs" },
    {
      type: 'p',
      text: "TikTok collecte des données via l'interaction directe de l'utilisateur avec l'application, la configuration du compte et les processus techniques nécessaires à la diffusion du contenu et au maintien de la stabilité de la plateforme.",
    },
    { type: 'p', text: "La collecte de données a lieu lorsque les utilisateurs :" },
    {
      type: 'ul',
      items: [
        "créent ou gèrent un compte",
        "regardent, aiment, commentent ou partagent du contenu",
        "recherchent des vidéos ou des créateurs",
        "interagissent avec des fonctionnalités au sein de l'application",
      ],
    },
    {
      type: 'p',
      text: "Ces données sont enregistrées automatiquement dans le cadre du fonctionnement normal de la plateforme et sont décrites dans la documentation de confidentialité accessible au public de TikTok.",
    },
    { type: 'h2', text: "Catégories de données que TikTok collecte" },
    {
      type: 'p',
      text: "La collecte de données de TikTok peut être globalement regroupée en plusieurs catégories.",
    },
    { type: 'h3', text: "Informations de compte et de profil" },
    {
      type: 'p',
      text: "Les données au niveau du compte servent à identifier et à gérer les profils des utilisateurs. Cela peut inclure :",
    },
    {
      type: 'ul',
      items: [
        "le nom d'utilisateur et le nom affiché",
        "la date de création du compte",
        "les paramètres et préférences du profil",
        "les informations de région, de langue ou de pays",
      ],
    },
    {
      type: 'p',
      text: "Ces informations permettent à TikTok d'associer l'activité au bon compte et d'appliquer des paramètres régionaux ou linguistiques.",
    },
    { type: 'h3', text: "Données d'activité et d'utilisation" },
    {
      type: 'p',
      text: "Les données d'activité représentent la manière dont les utilisateurs interagissent avec la plateforme au fil du temps. Cela peut inclure :",
    },
    {
      type: 'ul',
      items: [
        "les horodatages d'utilisation de l'application",
        "les vidéos regardées ou avec lesquelles vous avez interagi",
        "les mentions j'aime, les commentaires et les partages",
        "les actions d'abonnement et de désabonnement",
      ],
    },
    {
      type: 'p',
      text: "Cette catégorie constitue souvent la plus grande partie des données liées à l'utilisateur et reflète un comportement observable, plutôt qu'une intention ou une signification personnelle.",
    },
    { type: 'h3', text: "Informations de recherche et de découverte" },
    {
      type: 'p',
      text: "TikTok peut collecter des données liées à la découverte de contenu, telles que :",
    },
    {
      type: 'ul',
      items: [
        "les requêtes de recherche saisies dans l'application",
        "les interactions avec le contenu recommandé",
        "l'engagement avec les sujets ou catégories tendance",
      ],
    },
    {
      type: 'p',
      text: "Ces informations aident la plateforme à organiser et à mettre en avant le contenu, plutôt qu'à interpréter des préférences personnelles au-delà des actions enregistrées.",
    },
    { type: 'h3', text: "Données d'appareil et techniques" },
    {
      type: 'p',
      text: "Pour garantir le bon fonctionnement de l'application, TikTok peut collecter des informations techniques, notamment :",
    },
    {
      type: 'ul',
      items: [
        "le type d'appareil et le système d'exploitation",
        "la version de l'application et les données de performance",
        "les indicateurs de connectivité réseau",
      ],
    },
    {
      type: 'p',
      text: "Ces données soutiennent la sécurité, le dépannage et la compatibilité entre les appareils.",
    },
    { type: 'h2', text: "Ce que TikTok ne collecte pas" },
    {
      type: 'p',
      text: "Il existe des idées reçues courantes sur la collecte de données.",
    },
    { type: 'p', text: "TikTok ne fait pas ce qui suit :" },
    {
      type: 'ul',
      items: [
        "stocker les mots de passe des utilisateurs sous une forme lisible dans les exports",
        "enregistrer les pensées, émotions ou intentions privées",
        "collecter des identifiants financiers par le biais d'une utilisation standard",
        "fournir un accès illimité au contenu des messages privés dans tous les cas",
      ],
    },
    {
      type: 'p',
      text: "Les données collectées sont structurées, enregistrées et limitées à des systèmes définis, plutôt qu'à une observation informelle.",
    },
    { type: 'h2', text: "Ce qui apparaît dans un export de données TikTok" },
    {
      type: 'p',
      text: "Lorsque les utilisateurs demandent un export de données, TikTok fournit un fichier téléchargeable, généralement sous forme de ZIP, contenant des enregistrements structurés de leur activité.",
    },
    { type: 'p', text: "Un export de données peut inclure :" },
    {
      type: 'ul',
      items: [
        "les historiques d'interactions",
        "les journaux d'activité avec horodatages",
        "les enregistrements liés à la recherche",
        "les métadonnées du compte",
      ],
    },
    {
      type: 'p',
      text: "Toutes les données collectées ne sont pas toujours incluses. Les exports peuvent varier en fonction de :",
    },
    {
      type: 'ul',
      items: [
        "la réglementation régionale",
        "les limites de conservation des données",
        "l'ancienneté du compte et le niveau d'activité",
      ],
    },
    {
      type: 'p',
      text: "L'export reflète l'activité enregistrée sur la plateforme, et non des traits déduits ou une analyse subjective.",
    },
    { type: 'h2', text: "Pourquoi comprendre la collecte de données est important" },
    { type: 'p', text: "Savoir quelles données sont collectées aide les utilisateurs à :" },
    {
      type: 'ul',
      items: [
        "mieux comprendre leur propre activité numérique",
        "évaluer la transparence de la plateforme",
        "prendre des décisions éclairées concernant les outils d'analyse de données",
        "garder le contrôle sur leurs informations personnelles",
      ],
    },
    {
      type: 'p',
      text: "La sensibilisation favorise une utilisation responsable et un consentement éclairé lorsqu'on travaille avec des données personnelles.",
    },
    { type: 'h2', text: "Collecte de données vs interprétation des données" },
    { type: 'p', text: "Il est important de distinguer entre :" },
    {
      type: 'ul',
      items: [
        "la collecte de données : l'enregistrement d'actions observables",
        "l'interprétation des données : la synthèse ou l'analyse de ces enregistrements",
      ],
    },
    {
      type: 'p',
      text: "La présence de données n'implique pas automatiquement des conclusions. La signification et l'interprétation dépendent du contexte et des méthodes utilisées pour analyser les informations.",
    },
    { type: 'h2', text: "Conclusion" },
    {
      type: 'p',
      text: "TikTok collecte des données liées à la gestion du compte, à l'activité, à la découverte et aux performances techniques afin de faire fonctionner sa plateforme. Ces données sont enregistrées de manière systématique et mises à la disposition des utilisateurs via des outils d'export officiels, dans un souci de transparence.",
    },
    {
      type: 'p',
      text: "En comprenant quelles données sont collectées, et lesquelles ne le sont pas, les utilisateurs peuvent aborder leurs données TikTok avec clarté, confiance et une conscience éclairée.",
    },
  ],
  faq: [
    {
      q: "Quelles données personnelles TikTok collecte-t-il ?",
      a: "TikTok collecte des informations de compte, des données d'activité, des interactions de recherche et des données techniques liées à l'appareil nécessaires au fonctionnement de la plateforme.",
    },
    {
      q: "TikTok collecte-t-il les messages privés ?",
      a: "Certaines métadonnées liées aux messages peuvent être collectées, mais le contenu complet des messages privés n'est pas toujours inclus dans les exports de données et n'inclut pas les mots de passe.",
    },
    {
      q: "Puis-je voir quelles données TikTok possède sur moi ?",
      a: "Oui. TikTok permet aux utilisateurs de demander un export de leurs données personnelles via ses paramètres de confidentialité et de données.",
    },
    {
      q: "Toutes les données collectées sont-elles incluses dans l'export ?",
      a: "Pas toujours. Les exports de données peuvent être limités par les périodes de conservation, la réglementation régionale et l'activité du compte.",
    },
    {
      q: "Pourquoi TikTok collecte-t-il les données des utilisateurs ?",
      a: "La collecte de données soutient le fonctionnement de la plateforme, la personnalisation, la sécurité et les performances globales.",
    },
  ],
}
