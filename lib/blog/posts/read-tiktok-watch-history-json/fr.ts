import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Comment lire le fichier JSON de votre historique de visionnage TikTok",
  description:
    "Découvrez ce qu'est le fichier JSON Watch History de TikTok, où il se trouve dans votre export de données, et comment lire sa structure pour compter les vidéos et les sessions.",
  intro:
    "Votre fichier Watch History TikTok est un enregistrement JSON en texte brut de chaque vidéo que vous avez regardée, stocké dans l'export de données que TikTok vous permet de télécharger. Une fois que vous en connaissez la structure, vous pouvez le lire, compter les vidéos, et même estimer les sessions de visionnage vous-même.",
  blocks: [
    {
      type: "p",
      text: "Lorsque vous demandez vos données à TikTok et choisissez le format JSON, l'export arrive sous la forme d'une archive ZIP contenant plusieurs fichiers. L'un des plus intéressants est le fichier Watch History, qui répertorie les vidéos que vous avez regardées au fil du temps. Ce guide explique où se trouve le fichier, comment son JSON est organisé, et comment l'interpréter.",
    },
    {
      type: "h2",
      text: "Qu'est-ce que le fichier Watch History",
    },
    {
      type: "p",
      text: "Le fichier Watch History est un journal des vidéos qui ont été lues dans vos fils Pour vous et Abonnements. Chaque entrée représente une vidéo unique que TikTok a enregistrée comme visionnée, accompagnée de l'heure à laquelle elle a été lue et d'un lien vers la vidéo d'origine.",
    },
    {
      type: "p",
      text: "Ce n'est pas un tableau de bord analytique. Ce sont des données brutes : une longue liste d'horodatages et d'URL. Cela le rend puissant pour une analyse personnelle, mais plus difficile à lire en un coup d'œil, surtout si votre historique couvre des mois ou des années.",
    },
    {
      type: "h2",
      text: "Où il se trouve dans l'export",
    },
    {
      type: "p",
      text: "Après avoir décompressé l'export TikTok, les données Watch History sont regroupées dans un dossier lié à l'activité. Dans un export JSON, vous le trouverez généralement imbriqué ainsi :",
    },
    {
      type: "ul",
      items: [
        "Activity → Video Browsing History (parfois intitulé Watch History),",
        "stocké dans un seul fichier .json aux côtés d'autres fichiers d'activité tels que Like List et Search History.",
      ],
    },
    {
      type: "p",
      text: "Les noms de dossiers exacts peuvent varier légèrement selon les versions d'export. Si vous n'êtes pas sûr de la structure de l'archive, notre guide sur [[/blog/tiktok-data-export-folders-explained:les dossiers de l'export de données TikTok expliqués]] décrit chaque section. Pour le processus complet de demande et de téléchargement, consultez [[/blog/how-to-download-analyze-tiktok-data:comment télécharger et analyser vos données TikTok]].",
    },
    {
      type: "h2",
      text: "La structure JSON : les entrées VideoList",
    },
    {
      type: "p",
      text: "Dans le fichier, les enregistrements de visionnage sont stockés sous une clé généralement nommée VideoList. Il s'agit d'un tableau d'objets, où chaque objet décrit une vidéo visionnée. Une entrée unique ressemble à peu près à ceci :",
    },
    {
      type: "ul",
      items: [
        'Date — quand la vidéo a été regardée, par ex. "2026-02-14 18:32:07",',
        'Link — l\'URL de la vidéo, par ex. "https://www.tiktokv.com/share/video/7300000000000000000/".',
      ],
    },
    {
      type: "p",
      text: 'La forme globale est donc un objet de niveau supérieur contenant le tableau, que vous pouvez concevoir comme { "Video Browsing History": { "VideoList": [ ... ] } }. Chaque élément de VideoList est un événement de lecture avec un champ Date et un champ Link. Il n\'y a pas de compteurs de vues, pas de chiffres d\'engagement, pas de légendes — uniquement quand et quoi.',
    },
    {
      type: "h2",
      text: "Comment compter les vidéos manuellement",
    },
    {
      type: "p",
      text: "La métrique la plus simple est le nombre total de vidéos visionnées, qui correspond à la longueur du tableau VideoList. Vous pouvez le trouver de plusieurs façons :",
    },
    {
      type: "ul",
      items: [
        "ouvrir le fichier dans un éditeur de code et regarder la longueur du tableau, ou",
        "le charger dans la console d'un navigateur avec data['Video Browsing History'].VideoList.length, ou",
        "utiliser un outil en ligne de commande pour compter les occurrences de la clé Date.",
      ],
    },
    {
      type: "p",
      text: "Compter les vidéos uniques est un peu plus difficile, car le même Link peut apparaître plusieurs fois si vous avez revu une vidéo. Pour compter les doublons, vous devrez dédupliquer par le champ Link plutôt que de simplement compter les lignes.",
    },
    {
      type: "h2",
      text: "Estimer les sessions ou utiliser un outil",
    },
    {
      type: "p",
      text: "Une « session » est une période de visionnage continu. L'export ne labélise pas les sessions, vous devez donc les déduire des horodatages Date. Une approche courante consiste à trier les entrées par date et à regrouper les vidéos proches dans le temps :",
    },
    {
      type: "ul",
      items: [
        "trier toutes les entrées par leur valeur Date,",
        "parcourir la liste et démarrer une nouvelle session dès que l'écart entre deux vidéos consécutives dépasse un seuil (par exemple, 30 minutes),",
        "compter le nombre de sessions obtenues.",
      ],
    },
    {
      type: "p",
      text: "Faire cela à la main sur des milliers d'entrées est fastidieux et sujet aux erreurs. Un outil comme [[home:TikTok Wrapped]] effectue ce regroupement automatiquement et le transforme en résumés lisibles. Vous pouvez [[example:voir un exemple de wrapped]] pour voir à quoi ressemble le résultat, ou [[analyze:analyser votre propre export]] directement.",
    },
    {
      type: "h2",
      text: "Pièges courants",
    },
    {
      type: "h3",
      text: "Formats de date et fuseaux horaires",
    },
    {
      type: "p",
      text: "Le champ Date est une chaîne de caractères, pas un vrai datetime, et il est souvent enregistré en UTC plutôt qu'en heure locale. Si vous le parsez sans tenir compte du fuseau horaire, vos limites de session et vos résultats d'« heure la plus active » peuvent décaler de plusieurs heures.",
    },
    {
      type: "h3",
      text: "Historique partiel",
    },
    {
      type: "p",
      text: "L'export peut ne pas inclure toute votre durée de visionnage. TikTok limite la profondeur de certaines activités, donc un VideoList vide ou court ne signifie pas toujours que vous avez peu regardé — cela peut signifier que la fenêtre d'export était limitée.",
    },
    {
      type: "h3",
      text: "Fichiers volumineux",
    },
    {
      type: "p",
      text: "Les utilisateurs intensifs peuvent se retrouver avec des fichiers Watch History de plusieurs dizaines de mégaoctets. Certains éditeurs de texte peinent à ouvrir des fichiers aussi volumineux. Si un fichier refuse de s'ouvrir ou bloque votre éditeur, c'est signe que les données sont importantes et non que le fichier est corrompu.",
    },
    {
      type: "h3",
      text: "Différences de nommage des clés",
    },
    {
      type: "p",
      text: "Comme TikTok renomme parfois les clés entre les versions d'export, la clé wrapper autour de VideoList peut différer. Si data['Video Browsing History'] est undefined, inspectez d'abord les clés de niveau supérieur pour trouver le bon libellé.",
    },
    {
      type: "h2",
      text: "Réflexions finales",
    },
    {
      type: "p",
      text: "Le fichier JSON Watch History est l'une des parties les plus révélatrices de votre export TikTok. Une fois que vous comprenez qu'il s'agit simplement d'un tableau VideoList de paires Date et Link, compter les vidéos et estimer les sessions devient simple — même si les pièges liés aux fuseaux horaires, à l'historique partiel et à la taille des fichiers sont faciles à ne pas voir.",
    },
    {
      type: "p",
      text: "Si vous préférez éviter le parsing manuel, un outil d'analyse peut lire le même fichier et vous présenter les résultats en quelques secondes.",
    },
  ],
  faq: [
    {
      q: "Où se trouve le fichier Watch History dans l'export TikTok ?",
      a: "Il se trouve généralement dans un dossier Activity, souvent nommé Video Browsing History ou Watch History, stocké sous forme d'un seul fichier JSON.",
    },
    {
      q: "Quels champs contient chaque entrée de l'historique de visionnage ?",
      a: "Chaque entrée du tableau VideoList contient un champ Date avec l'heure à laquelle la vidéo a été regardée et un champ Link avec l'URL de la vidéo.",
    },
    {
      q: "Comment compter le nombre de vidéos que j'ai regardées ?",
      a: "Le total est égal au nombre d'entrées dans le tableau VideoList. Vous pouvez vérifier la longueur du tableau dans un éditeur de code ou la console d'un navigateur.",
    },
    {
      q: "Pourquoi les horodatages semblent-ils décalés de quelques heures ?",
      a: "Le champ Date est souvent enregistré en UTC, il peut donc différer de votre heure locale si vous ne le convertissez pas dans votre propre fuseau horaire.",
    },
    {
      q: "Pourquoi mon fichier Watch History est-il si volumineux ?",
      a: "Un visionnage fréquent génère de nombreuses entrées, de sorte que le fichier peut atteindre plusieurs dizaines de mégaoctets. Une grande taille est normale et ne signifie pas que le fichier est endommagé.",
    },
  ],
}
