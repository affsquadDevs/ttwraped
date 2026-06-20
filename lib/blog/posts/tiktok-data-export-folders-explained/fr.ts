import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "À quoi correspond chaque dossier de l'export de données TikTok (Guide 2026)",
  description:
    "Un décryptage complet de chaque dossier et section JSON de l'export de données TikTok, ce qu'ils contiennent et ce que TikTok Wrapped lit.",
  intro:
    "L'export de données TikTok est organisé en un ensemble de dossiers et de sections JSON — Profil, Activité, Commentaires, Messages directs, Vidéo, Publicités et données, Paramètres de l'application et TikTok Live — et chacun stocke une tranche différente de l'historique de votre compte.",
  blocks: [
    {
      type: 'p',
      text: "Lorsque vous demandez vos données à TikTok et ouvrez le téléchargement, le contenu peut sembler écrasant. Que vous receviez un seul grand fichier JSON ou un dossier structuré de fichiers, les informations sont regroupées en sections prévisibles. Une fois que vous comprenez comment ces sections correspondent à votre activité réelle, l'export devient facile à parcourir.",
    },
    {
      type: 'p',
      text: "Ce guide parcourt chaque dossier de premier niveau et chaque section JSON de l'export, explique ce qu'il contient en langage clair, et montre quelles parties [[home:TikTok Wrapped]] lit réellement pour construire votre résumé. Si vous n'avez pas encore téléchargé vos données, consultez notre guide étape par étape sur [[/blog/how-to-download-analyze-tiktok-data:comment télécharger et analyser vos données TikTok]].",
    },
    { type: 'h2', text: 'Profil' },
    {
      type: 'p',
      text: "La section Profil contient les informations de base de votre compte : nom d'utilisateur, nom de profil, biographie, l'e-mail ou le téléphone associé au compte, et les détails de création du compte. Elle décrit qui vous êtes sur la plateforme plutôt que ce que vous y avez fait.",
    },
    {
      type: 'p',
      text: "Cette section est petite mais utile pour étiqueter un rapport. Elle ne contient pas votre mot de passe — TikTok n'inclut jamais les identifiants dans un export.",
    },
    { type: 'h2', text: 'Activité (Votre activité)' },
    {
      type: 'p',
      text: "La section Activité — parfois intitulée « Votre activité » — est le cœur de l'export et généralement la partie la plus volumineuse. Elle est divisée en plusieurs sous-sections qui enregistrent tout ce que vous avez fait lors de votre navigation :",
    },
    {
      type: 'ul',
      items: [
        "Historique de visionnage — une liste horodatée des vidéos que vous avez regardées.",
        "Liste des « J'aime » — les vidéos que vous avez aimées, avec les dates.",
        'Historique de recherche — les termes que vous avez recherchés.',
        'Historique de partage — le contenu que vous avez partagé et où.',
        "Liste abonnements / abonnés — les comptes que vous suivez et ceux qui vous suivent.",
        'Vidéos, sons et hashtags favoris — les éléments que vous avez mis en signet.',
      ],
    },
    {
      type: 'p',
      text: "Parce qu'elle est horodatée, cette section permet l'analyse des tendances à long terme. La plupart des insights d'un résumé TikTok Wrapped — vos périodes de visionnage les plus intenses, vos créateurs préférés et votre volume de visionnage — proviennent d'ici.",
    },
    { type: 'h2', text: 'Commentaires' },
    {
      type: 'p',
      text: "La section Commentaires liste les commentaires que vous avez publiés sur d'autres vidéos, accompagnés de leurs horodatages. Elle reflète la façon dont vous avez interagi publiquement avec le contenu au fil du temps.",
    },
    { type: 'h2', text: 'Messages directs' },
    {
      type: 'p',
      text: "La section Messages directs contient votre historique de conversations privées, regroupé par échange. C'est la partie la plus personnelle de l'export, ce qui explique qu'elle mérite une attention particulière lors du partage de fichiers. TikTok Wrapped n'a pas besoin de vos messages directs et ne les lit pas.",
    },
    { type: 'h2', text: 'Vidéo (Vos publications)' },
    {
      type: 'p',
      text: "La section Vidéo — souvent intitulée « Publications » — couvre le contenu que vous avez publié vous-même : vos vidéos mises en ligne, les légendes et les métadonnées associées. Pour les créateurs, cette section documente leur historique de publication, tandis que pour les spectateurs, elle peut être petite ou vide.",
    },
    { type: 'h2', text: 'Publicités et données' },
    {
      type: 'p',
      text: "La section Publicités et données enregistre les signaux liés à la publicité, notamment les données d'activité hors TikTok — les informations que d'autres applications et sites web ont partagées avec TikTok concernant votre activité en dehors de l'application. Elle inclut également les centres d'intérêt publicitaires et les enregistrements d'interactions avec les publicités utilisés pour le ciblage.",
    },
    {
      type: 'p',
      text: "Si vous souhaitez approfondir ce que révèlent ces signaux, notre article sur [[/blog/what-data-does-tiktok-collect:les données que TikTok collecte]] passe en revue les catégories en détail.",
    },
    { type: 'h2', text: "Paramètres de l'application" },
    {
      type: 'p',
      text: "La section Paramètres de l'application stocke vos préférences : paramètres de confidentialité, choix de notifications, langue et configuration similaire. Elle décrit comment votre compte est configuré plutôt que la façon dont vous l'avez utilisé, et elle affecte rarement l'analyse.",
    },
    { type: 'h2', text: 'TikTok Live' },
    {
      type: 'p',
      text: "La section TikTok Live capture l'activité liée aux diffusions en direct — les streams que vous avez animés ou rejoints, et les interactions associées. Pour la plupart des spectateurs, cette section est petite, mais pour les streamers actifs, elle peut constituer un enregistrement significatif.",
    },
    { type: 'h2', text: 'Référence dossier par dossier' },
    {
      type: 'p',
      text: "Le tableau ci-dessous associe chaque dossier ou section JSON à ce qu'il contient et à ce que TikTok Wrapped en lit. Vous pouvez également voir le type de résultat qu'il produit sur notre page [[example:exemple de wrapped]].",
    },
    {
      type: 'table',
      headers: ['Dossier / Section', "Ce qu'il contient", 'Ce que TikTok Wrapped lit'],
      rows: [
        ['Profile', "Nom d'utilisateur, biographie, détails du compte", 'Nom affiché dans le rapport'],
        ['Activity — Watch History', 'Vidéos visionnées avec horodatage', 'Volume de visionnage et tendances'],
        ["Activity — Like List", "Vidéos aimées, avec dates", "Habitudes de « J'aime » dans le temps"],
        ['Activity — Search History', 'Termes de recherche utilisés', "Recherches principales et centres d'intérêt"],
        ['Activity — Following / Follower', 'Comptes suivis et abonnés', 'Créateurs préférés'],
        ['Comments', 'Commentaires publiés', "Comptages d'engagement (optionnel)"],
        ['Direct Messages', 'Historique des conversations privées', 'Non lu'],
        ['Video / Posts', 'Vidéos publiées', 'Historique de publication (créateurs)'],
        ['Ads and Data', "Activité hors TikTok, centres d'intérêt publicitaires", 'Non lu'],
        ['App Settings', "Confidentialité et préférences de l'application", 'Non lu'],
        ['TikTok Live', 'Activité de diffusion en direct', 'Non lu'],
      ],
    },
    { type: 'h2', text: 'Une note sur la confidentialité' },
    {
      type: 'p',
      text: "Votre export contient des sections sensibles — en particulier Messages directs et Publicités et données — qui ne sont jamais nécessaires pour générer un résumé d'utilisation. TikTok Wrapped se concentre sur les données d'activité horodatées et ignore entièrement les messages privés et les enregistrements publicitaires. Vous gardez le contrôle du fichier et pouvez supprimer les dossiers sensibles avant de téléverser quoi que ce soit. Quand vous êtes prêt, vous pouvez [[analyze:analyser votre wrapped]] avec uniquement les fichiers d'activité.",
    },
    { type: 'h2', text: 'Réflexions finales' },
    {
      type: 'p',
      text: "L'export de données TikTok ne semble compliqué que tant que vous n'en connaissez pas la carte. Chaque dossier répond à une seule question — qui vous êtes, ce que vous avez regardé, ce que vous avez publié, avec qui vous avez communiqué, ou comment votre compte est configuré. Savoir quelles sections comptent vous permet d'analyser les parties qui vous intéressent tout en laissant les parties privées intactes.",
    },
  ],
  faq: [
    {
      q: "Comment l'export de données TikTok est-il organisé ?",
      a: "L'export est regroupé en sections telles que Profil, Activité, Commentaires, Messages directs, Vidéo, Publicités et données, Paramètres de l'application et TikTok Live, chacune stockant une partie différente de l'historique de votre compte.",
    },
    {
      q: 'Quel dossier contient mon historique de visionnage ?',
      a: "Votre historique de visionnage se trouve dans la section Activité, souvent intitulée Votre activité, aux côtés de votre liste de « J'aime », de l'historique de recherche et des listes d'abonnements.",
    },
    {
      q: "L'export de données TikTok inclut-il mon mot de passe ?",
      a: "Non. TikTok n'inclut jamais les mots de passe de compte ni les identifiants de connexion dans un export de données. La section Profil ne contient que des informations de base sur le compte.",
    },
    {
      q: 'TikTok Wrapped lit-il mes messages directs ?',
      a: "Non. TikTok Wrapped se concentre sur les données d'activité horodatées et ne lit pas vos Messages directs ni vos sections Publicités et données.",
    },
    {
      q: "Qu'est-ce que les données d'activité hors TikTok ?",
      a: "L'activité hors TikTok se trouve dans la section Publicités et données et enregistre les informations que d'autres applications et sites web ont partagées avec TikTok concernant votre activité en dehors de l'application.",
    },
  ],
}
