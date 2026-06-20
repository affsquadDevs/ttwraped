import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Comment supprimer vos données TikTok et votre compte (étape par étape)",
  description:
    "Découvrez la différence entre effacer les données TikTok, désactiver et supprimer définitivement votre compte, quelles données sont conservées, et pourquoi exporter vos données en premier.",
  intro:
    "La suppression de votre compte TikTok est permanente et efface la plupart de vos données, mais cette action est différente du simple effacement du cache ou de la désactivation. Ce guide vous explique chaque option étape par étape et précise ce qu'il advient de vos données par la suite.",
  blocks: [
    {
      type: "p",
      text: "Les gens cherchent le bouton « supprimer » pour de nombreuses raisons : un nettoyage de la vie privée, une pause des réseaux sociaux, ou un nouveau départ. Avant de faire quoi que ce soit d'irréversible, il est utile de comprendre exactement quelle action vous effectuez et ce qu'elle fait à vos données.",
    },
    {
      type: "p",
      text: "Cet article couvre la différence entre effacer les données, désactiver et supprimer définitivement, ainsi qu'un guide numéroté pour demander la suppression, ce que TikTok conserve ensuite, et pourquoi vous devriez d'abord télécharger un export final de vos données.",
    },
    { type: "h2", text: "Vider le cache vs désactiver vs supprimer" },
    {
      type: "p",
      text: "Ces trois actions sont souvent confondues, mais leurs effets sont très différents :",
    },
    {
      type: "ul",
      items: [
        "Vider le cache ou les données supprime les fichiers temporaires stockés sur votre appareil. Votre compte, vos vidéos et votre historique restent intacts ; vous libérez uniquement du stockage local et réinitialisez certains comportements de l'application.",
        "La désactivation masque votre profil et met le compte en pause sans l'effacer. Il s'agit de la première étape réversible qu'utilise TikTok avant la suppression permanente ; se reconnecter l'annule.",
        "La suppression définitive retire votre profil, vos vidéos et la plupart des données associées de TikTok après une période de grâce. Cette action ne peut pas être annulée une fois la période écoulée.",
      ],
    },
    {
      type: "p",
      text: "Si vous souhaitez simplement une application plus légère ou plus d'espace de stockage, vider le cache est généralement suffisant. La suppression est destinée à ceux qui veulent que leur présence et leurs données soient entièrement effacées.",
    },
    { type: "h2", text: "Comment vider le cache TikTok" },
    {
      type: "p",
      text: "Vider le cache est l'option la plus légère et une bonne première étape si vous n'êtes pas encore prêt à partir :",
    },
    {
      type: "ul",
      items: [
        "Ouvrez TikTok et accédez à votre Profil.",
        "Appuyez sur l'icône de menu, puis ouvrez Paramètres et confidentialité.",
        "Sélectionnez Libérer de l'espace (parfois affiché sous Cache et données cellulaires).",
        "Appuyez sur Effacer à côté de Cache.",
      ],
    },
    {
      type: "p",
      text: "Cela supprime uniquement les fichiers temporaires. Votre compte, vos vidéos sauvegardées et votre historique de visionnage restent inchangés.",
    },
    { type: "h2", text: "Téléchargez un export final de vos données avant de supprimer" },
    {
      type: "p",
      text: "Il s'agit de l'étape la plus importante, et il est facile de l'oublier. Une fois votre compte définitivement supprimé, vous ne pouvez plus demander d'export de données. La fenêtre pour archiver votre activité se ferme avec le compte.",
    },
    {
      type: "p",
      text: "Un export final vous permet de conserver une copie personnelle de votre historique de visionnage, de votre historique de recherche, de vos journaux de connexion et d'autres activités. Vous pouvez également l'analyser ultérieurement par curiosité ou pour y réfléchir.",
    },
    {
      type: "p",
      text: "Si vous n'avez jamais demandé d'export, notre guide sur [[/blog/how-to-download-analyze-tiktok-data:comment télécharger et analyser vos données TikTok]] explique la procédure de demande. Une fois le fichier prêt, vous pouvez le traiter avec [[analyze:TikTok Wrapped]] pour transformer les données brutes en un résumé lisible, ou prévisualiser à quoi cela ressemble sur la page [[example:exemple wrapped]].",
    },
    { type: "h2", text: "Étape par étape : demander la suppression du compte" },
    {
      type: "h3",
      text: "Étape 1 : Sauvegardez vos données",
    },
    {
      type: "p",
      text: "Demandez et téléchargez votre export de données TikTok, et sauvegardez toutes les vidéos que vous souhaitez conserver. Après la suppression, ce contenu ne peut plus être récupéré depuis TikTok.",
    },
    {
      type: "h3",
      text: "Étape 2 : Ouvrez Paramètres et confidentialité",
    },
    {
      type: "p",
      text: "Accédez à votre Profil, appuyez sur l'icône de menu dans le coin supérieur, et ouvrez Paramètres et confidentialité.",
    },
    {
      type: "h3",
      text: "Étape 3 : Ouvrez les paramètres du compte",
    },
    {
      type: "p",
      text: "Appuyez sur Compte, puis faites défiler pour trouver Désactiver ou supprimer le compte.",
    },
    {
      type: "h3",
      text: "Étape 4 : Choisissez la suppression et vérifiez",
    },
    {
      type: "p",
      text: "Sélectionnez Supprimer définitivement le compte, puis suivez les invites de vérification. TikTok peut vous demander de confirmer avec un code envoyé à votre téléphone ou à votre adresse e-mail.",
    },
    {
      type: "h3",
      text: "Étape 5 : Confirmez la suppression",
    },
    {
      type: "p",
      text: "Lisez l'avis à l'écran concernant la période de désactivation, puis confirmez. Votre compte entre dans une période de grâce avant d'être définitivement supprimé.",
    },
    {
      type: "p",
      text: "Les libellés des menus peuvent varier légèrement selon les versions de l'application et les régions, mais le chemin via Paramètres et confidentialité jusqu'à Compte reste le même.",
    },
    { type: "h2", text: "Quelles données sont conservées et pendant combien de temps" },
    {
      type: "p",
      text: "La suppression n'est pas immédiate. TikTok désactive d'abord le compte pour une période de grâce, généralement d'environ 30 jours. Si vous vous reconnectez pendant cette fenêtre, la suppression est annulée et le compte est restauré.",
    },
    {
      type: "p",
      text: "Après la période de grâce, votre profil et la plupart des contenus associés sont définitivement supprimés. Cependant, certaines informations peuvent être conservées plus longtemps :",
    },
    {
      type: "ul",
      items: [
        "Des enregistrements limités conservés pour respecter des obligations légales ou résoudre des litiges.",
        "Les informations nécessaires pour prévenir la fraude ou faire respecter la sécurité de la plateforme.",
        "Les données déjà partagées publiquement ou avec d'autres utilisateurs qui existent en dehors de votre profil.",
        "Les copies dans les sauvegardes système, qui peuvent nécessiter un délai supplémentaire pour être effacées.",
      ],
    },
    {
      type: "p",
      text: "Les durées de conservation exactes sont décrites dans la politique de confidentialité de TikTok et peuvent évoluer dans le temps. À retenir concrètement : « permanent » ne signifie pas toujours « immédiat », et une petite quantité de données peut persister pour des raisons de conformité.",
    },
    { type: "h2", text: "Considérations relatives à la vie privée" },
    {
      type: "p",
      text: "Supprimer votre compte est une mesure importante pour la vie privée, mais quelques détails méritent d'être gardés à l'esprit :",
    },
    {
      type: "ul",
      items: [
        "Les contenus que d'autres ont téléchargés, capturés en capture d'écran ou repartagés échappent au contrôle de TikTok et ne sont pas supprimés lors de la suppression du compte.",
        "Les messages directs peuvent encore apparaître du côté de l'autre participant à la conversation.",
        "Les applications tierces que vous avez connectées à TikTok peuvent conserver leurs propres copies des données que vous avez autorisées.",
        "Votre export de données téléchargé est désormais sous votre responsabilité en matière de stockage sécurisé.",
      ],
    },
    {
      type: "p",
      text: "Pour en savoir plus sur la gestion responsable d'un export, consultez notre guide sur la question de savoir s'il est [[/blog/is-it-safe-to-upload-tiktok-data-online:sécurisé de téléverser des données TikTok en ligne]].",
    },
    { type: "h2", text: "Réflexions finales" },
    {
      type: "p",
      text: "Vider le cache, désactiver et supprimer définitivement sont trois actions distinctes aux conséquences très différentes. Savoir laquelle vous choisissez évite les pertes de données accidentelles et les mauvaises surprises par la suite.",
    },
    {
      type: "p",
      text: "Si votre objectif est la suppression, téléchargez d'abord un export final de vos données. C'est le seul moyen de conserver un enregistrement de votre historique TikTok, et vous pouvez toujours l'explorer ensuite avec [[home:TikTok Wrapped]], même si le compte lui-même n'existe plus.",
    },
  ],
  faq: [
    {
      q: "Quelle est la différence entre effacer les données TikTok et supprimer votre compte ?",
      a: "Vider le cache ou les données supprime uniquement les fichiers temporaires stockés sur votre appareil et laisse votre compte actif. Supprimer votre compte retire définitivement votre profil, vos vidéos et la plupart des données associées de TikTok après une période de désactivation.",
    },
    {
      q: "Combien de temps faut-il pour supprimer définitivement un compte TikTok ?",
      a: "TikTok désactive d'abord le compte pour une période de grâce, généralement d'environ 30 jours. Si vous ne vous reconnectez pas pendant cette fenêtre, le compte et la plupart des données associées sont ensuite définitivement supprimés.",
    },
    {
      q: "Dois-je télécharger mes données TikTok avant de supprimer mon compte ?",
      a: "Oui. Une fois votre compte définitivement supprimé, vous ne pouvez plus demander d'export de données ; télécharger une copie finale au préalable est donc le seul moyen de conserver une archive personnelle de votre historique d'activité.",
    },
    {
      q: "Quelles données TikTok sont conservées après la suppression ?",
      a: "La plupart des contenus du profil sont supprimés, mais TikTok peut conserver des informations limitées pendant un certain temps pour respecter des obligations légales, prévenir la fraude ou résoudre des litiges, comme décrit dans sa politique de confidentialité. Les sauvegardes peuvent également nécessiter un délai supplémentaire pour être effacées.",
    },
    {
      q: "Puis-je utiliser TikTok Wrapped après avoir supprimé mon compte ?",
      a: "Oui, à condition d'avoir téléchargé votre export de données TikTok avant la suppression. TikTok Wrapped analyse le fichier exporté que vous téléversez, il n'a donc pas besoin d'accéder à un compte TikTok actif.",
    },
  ],
}
