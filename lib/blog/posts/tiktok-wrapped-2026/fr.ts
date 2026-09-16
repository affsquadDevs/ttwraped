import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "TikTok Wrapped 2026 : comment obtenir votre rétrospective de l'année",
  description:
    "Vous cherchez votre TikTok Wrapped 2026 ? TikTok n'en fait pas un à tous les coups. Voici comment fabriquer votre propre rétro à partir de votre export de données : temps de visionnage, recherches préférées et votre rang.",
  intro:
    "Chaque mois de décembre, la même question envahit le For You de tout le monde : mais où est mon TikTok Wrapped ? Et chaque année, la réponse déçoit un peu. TikTok n'a jamais traité sa rétrospective annuelle comme le fait Spotify. Certaines années il débarque, d'autres années rien du tout. Alors si vous êtes déjà à la chasse à votre TikTok Wrapped 2026, voici la situation en toute honnêteté, plus l'astuce qui vous donne vraiment les chiffres.",
  blocks: [
    { type: 'h2', text: "Existe-t-il un TikTok Wrapped officiel pour 2026 ?" },
    {
      type: 'p',
      text: "Réponse courte : à l'heure où on parle, rien n'a été annoncé. Et honnêtement, ça n'a rien d'étonnant. TikTok a sorti une vraie rétro de 2020 à 2022, l'a complètement zappée en 2023, et depuis c'est à pile ou face. Même les années où elle apparaît, elle arrive en général vers la mi-décembre et touche les gens par vagues plutôt que d'un seul coup. Si vous rafraîchissez l'appli en attendant qu'une grosse rétro animée tombe, vous risquez de patienter un bon moment.",
    },
    {
      type: 'p',
      text: "Ce qui est un peu rageant, c'est que TikTok a manifestement les données. Votre historique de visionnage, chaque recherche, les sons que vous avez enregistrés à 2am, tout est bien au chaud sur leurs serveurs. L'appli ne prend simplement pas toujours la peine de vous les rendre sous une forme que vous auriez envie de regarder.",
    },
    { type: 'h2', text: "L'astuce : fabriquez le vôtre à partir de votre export de données" },
    {
      type: 'p',
      text: "Voici ce que la plupart des gens ratent. Vous n'avez pas vraiment besoin de TikTok pour vous faire un Wrapped. Vous pouvez récupérer les données brutes vous-même et en tirer le même genre de rétro, le jour qui vous chante. C'est toute la raison d'être de [[home:TikTok Wrapped]].",
    },
    {
      type: 'p',
      text: "Il fonctionne à partir de l'export de données officiel que TikTok laisse télécharger à n'importe quel utilisateur. Vous demandez le fichier, il revient sous forme de JSON (ou d'un ZIP avec un JSON glissé à l'intérieur), et l'outil le lit et fait les comptes : nombre total de vidéos regardées, heures englouties, votre moment le plus chargé de la journée, les recherches que vous préféreriez oublier, et un rang de personnalité selon votre degré d'addiction. Pas de compte, pas de mot de passe, rien d'envoyé sur un serveur. Le fichier est lu directement dans votre navigateur.",
    },
    {
      type: 'p',
      text: "Récupérer le fichier est rapide, mais il faut patienter un peu. Voici tout le processus :",
    },
    {
      type: 'ol',
      items: [
        "Dans TikTok, ouvrez votre Profil, appuyez sur le menu (☰), puis allez dans 'Settings and privacy'.",
        "Sous 'Account', appuyez sur 'Download your data'.",
        "Choisissez JSON comme format. Ce point compte, parce que le TXT et le HTML ne marchent pas avec la plupart des outils d'analyse. Sélectionnez ensuite 'All data' et appuyez sur 'Request data'.",
        "Patientez. TikTok met généralement de quelques heures à deux ou trois jours pour préparer le fichier, et une fois prêt, il reste téléchargeable pendant quelques jours.",
      ],
    },
    {
      type: 'p',
      text: "Quand le fichier arrive, apportez-le à [[analyze:l'analyseur]] et déposez-le dedans. Si vous préférez voir à quoi ça ressemble avant de vous lancer dans tout ça, il y a une [[example:rétro d'exemple complète]] construite à partir de fausses données, que vous pouvez explorer d'abord.",
    },
    { type: 'h2', text: "Ce que votre rétro 2026 montre vraiment" },
    {
      type: 'p',
      text: "C'est bien plus qu'un compteur de temps de visionnage. Vous obtenez vos recherches préférées classées selon la fréquence à laquelle vous les avez tapées, les heures où vous êtes le plus actif (la plage de fin de soirée réserve souvent une mauvaise surprise), vos années les plus chargées alignées côte à côte, vos likes, commentaires et partages, vos sons et créateurs favoris, et un rang qui vous range discrètement quelque part entre spectateur occasionnel et, bon, là on a un problème. C'est exactement ce qu'un vrai Wrapped vous montrerait. Sauf que vous le générez à vos conditions au lieu d'attendre après l'appli.",
    },
    { type: 'h2', text: "Pourquoi Spotify y arrive et pas TikTok" },
    {
      type: 'p',
      text: "Spotify a fait de Wrapped un événement. C'est automatique, c'est soigné, ça tombe à date fixe, et pendant une semaine votre feed entier n'est que les artistes préférés des autres. TikTok n'a jamais pris cet engagement. En partie parce qu'une année de musique est franchement plus facile à emballer qu'un feed sans fin et sans forme. En partie, on s'en doute, parce que TikTok préfère que vous continuiez à scroller plutôt que de vous arrêter pour compter tout ce que vous avez scrollé. Quoi qu'il en soit, c'est précisément ce vide qui explique l'existence des outils tiers. Si vous voulez la différence concrète entre une rétro comme celle-ci et les chiffres créateur intégrés de TikTok, [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:cette comparaison]] détaille tout ça.",
    },
    { type: 'h2', text: "Une chose sur laquelle prendre le temps : la confidentialité" },
    {
      type: 'p',
      text: "Votre export de données est personnel. Selon ce que vous incluez, il peut contenir des messages, votre historique de connexion, tout le tralala. Alors l'endroit où vous l'envoyez compte vraiment. Avec TikTok Wrapped, le fichier ne quitte jamais votre appareil ; tout se passe localement dans le navigateur et rien n'est stocké. Si vous soupesez aussi d'autres outils, [[/blog/is-it-safe-to-upload-tiktok-data-online:cette lecture rapide sur l'envoi de données TikTok en toute sécurité]] vaut bien deux minutes avant de confier votre fichier à qui que ce soit.",
    },
    {
      type: 'p',
      text: "Donc non, il n'y a probablement pas de rutilant TikTok Wrapped 2026 officiel en route pour vous sauver la mise. Mais les données sont les vôtres, et en extraire votre rétrospective de l'année demande environ cinq minutes de vrai effort. [[analyze:Récupérez votre export et voyez vos chiffres]] dès que vous êtes prêt.",
    },
  ],
  faq: [
    {
      q: "Existe-t-il un TikTok Wrapped officiel pour 2026 ?",
      a: "Rien n'a été annoncé. TikTok en a fait un de 2020 à 2022, a sauté 2023, et reste irrégulier depuis. Quand il apparaît, c'est en général vers la mi-décembre et il se déploie progressivement.",
    },
    {
      q: "Quand sort le TikTok Wrapped ?",
      a: "Historiquement à la mi ou fin décembre, quand il sort tout court. Comme rien n'est garanti, beaucoup de gens utilisent un outil d'export de données pour avoir leur rétro selon leur propre calendrier au lieu d'attendre.",
    },
    {
      q: "Puis-je obtenir mon TikTok Wrapped 2026 tout de suite ?",
      a: "Oui. Pas besoin d'attendre TikTok. Demandez votre export de données (choisissez le format JSON), puis envoyez-le à un outil comme TikTok Wrapped et vous aurez vos statistiques et votre rang en quelques secondes.",
    },
    {
      q: "Ai-je besoin d'un compte spécial ou de payer ?",
      a: "Non. N'importe quel compte TikTok peut demander un export de données, et l'analyser sur TikTok Wrapped est gratuit et sans connexion.",
    },
    {
      q: "Est-ce sûr d'envoyer mes données TikTok ?",
      a: "Sur TikTok Wrapped, votre fichier est traité entièrement dans votre navigateur et n'est jamais envoyé ni stocké. Pour les outils tiers en général, ça vaut le coup de vérifier qu'ils traitent les données localement et ne demandent jamais votre mot de passe TikTok.",
    },
  ],
}
