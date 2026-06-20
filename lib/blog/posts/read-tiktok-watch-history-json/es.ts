import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Cómo leer el archivo JSON del historial de vistas de TikTok",
  description:
    "Aprende qué es el archivo JSON del historial de vistas de TikTok, dónde se encuentra en tu exportación de datos y cómo leer su estructura para contar videos y sesiones.",
  intro:
    "El archivo de historial de vistas de TikTok es un registro JSON en texto plano de cada video que reprodujiste, almacenado dentro de la exportación de datos que TikTok te permite descargar. Una vez que conoces su estructura, puedes leerlo, contar videos e incluso estimar sesiones de visualización por tu cuenta.",
  blocks: [
    {
      type: "p",
      text: "Cuando solicitas tus datos a TikTok y eliges el formato JSON, la exportación llega como un archivo ZIP que contiene varios ficheros. Uno de los más interesantes es el archivo de historial de vistas, que enumera los videos que has visto a lo largo del tiempo. Esta guía explica dónde se encuentra el archivo, cómo está organizado su JSON y cómo interpretarlo.",
    },
    {
      type: "h2",
      text: "Qué es el archivo de historial de vistas",
    },
    {
      type: "p",
      text: "El archivo de historial de vistas es un registro de los videos que se reprodujeron en tus feeds Para ti y Siguiendo. Cada entrada representa un video individual que TikTok registró como visto, junto con la hora en que se reprodujo y un enlace al video original.",
    },
    {
      type: "p",
      text: "No es un panel de análisis. Son datos en bruto: una larga lista de marcas de tiempo y URLs. Eso lo hace potente para el análisis personal, pero más difícil de leer de un vistazo, especialmente si tu historial abarca meses o años.",
    },
    {
      type: "h2",
      text: "Dónde se encuentra en la exportación",
    },
    {
      type: "p",
      text: "Después de descomprimir la exportación de TikTok, los datos del historial de vistas se agrupan dentro de una carpeta relacionada con la actividad. En una exportación JSON normalmente lo encontrarás anidado así:",
    },
    {
      type: "ul",
      items: [
        "Activity → Video Browsing History (a veces etiquetado como Watch History),",
        "almacenado dentro de un único archivo .json junto a otros archivos de actividad como Like List y Search History.",
      ],
    },
    {
      type: "p",
      text: "Los nombres exactos de las carpetas pueden variar ligeramente entre versiones de exportación. Si no estás seguro de cómo está organizado el archivo, nuestra guía sobre [[/blog/tiktok-data-export-folders-explained:las carpetas de exportación de datos de TikTok explicadas]] detalla cada sección. Para el proceso completo de solicitud y descarga, consulta [[/blog/how-to-download-analyze-tiktok-data:cómo descargar y analizar datos de TikTok]].",
    },
    {
      type: "h2",
      text: "La estructura JSON: entradas de VideoList",
    },
    {
      type: "p",
      text: "Dentro del archivo, los registros de vistas se almacenan bajo una clave llamada normalmente VideoList. Es un array de objetos, donde cada objeto describe un video visto. Una entrada individual tiene aproximadamente este aspecto:",
    },
    {
      type: "ul",
      items: [
        'Date — cuándo se vio el video, p. ej. "2026-02-14 18:32:07",',
        'Link — la URL del video, p. ej. "https://www.tiktokv.com/share/video/7300000000000000000/".',
      ],
    },
    {
      type: "p",
      text: 'Así que la forma general es un objeto de nivel superior que contiene el array, lo que puedes imaginar como { "Video Browsing History": { "VideoList": [ ... ] } }. Cada elemento de VideoList es un evento de reproducción con un campo Date y un campo Link. No hay conteos de vistas, números de interacción ni subtítulos: solo cuándo y qué.',
    },
    {
      type: "h2",
      text: "Cómo contar videos manualmente",
    },
    {
      type: "p",
      text: "La métrica más sencilla es el número total de videos vistos, que equivale a la longitud del array VideoList. Puedes encontrarlo de varias formas:",
    },
    {
      type: "ul",
      items: [
        "abre el archivo en un editor de código y mira la longitud del array, o",
        "cárgalo en la consola del navegador con data['Video Browsing History'].VideoList.length, o",
        "usa una herramienta de línea de comandos para contar las apariciones de la clave Date.",
      ],
    },
    {
      type: "p",
      text: "Contar videos únicos es un poco más complicado, porque el mismo Link puede aparecer más de una vez si volviste a ver un video. Para contar únicos, tendrías que deduplicar por el campo Link en lugar de simplemente contar filas.",
    },
    {
      type: "h2",
      text: "Estimar sesiones vs. usar una herramienta",
    },
    {
      type: "p",
      text: "Una \"sesión\" es un tramo de visualización continua. La exportación no etiqueta las sesiones, por lo que tienes que inferirlas a partir de las marcas de tiempo Date. Un enfoque habitual es ordenar las entradas por fecha y agrupar los videos que están próximos en el tiempo:",
    },
    {
      type: "ul",
      items: [
        "ordena todas las entradas por su valor Date,",
        "recorre la lista e inicia una nueva sesión cada vez que el intervalo entre dos videos consecutivos supere un umbral (por ejemplo, 30 minutos),",
        "cuenta cuántas sesiones resultan.",
      ],
    },
    {
      type: "p",
      text: "Hacer esto a mano con miles de entradas es tedioso y propenso a errores. Una herramienta como [[home:TikTok Wrapped]] realiza esta agrupación automáticamente y la convierte en resúmenes legibles. Puedes [[example:ver un ejemplo de wrapped]] para ver cómo luce el resultado, o [[analyze:analizar tu propia exportación]] directamente.",
    },
    {
      type: "h2",
      text: "Problemas habituales",
    },
    {
      type: "h3",
      text: "Formatos de fecha y zonas horarias",
    },
    {
      type: "p",
      text: "El campo Date es una cadena de texto, no un datetime real, y a menudo se registra en UTC en lugar de tu hora local. Si lo analizas sin tener en cuenta la zona horaria, los límites de tus sesiones y los resultados de \"hora más activa\" pueden desplazarse varias horas.",
    },
    {
      type: "h3",
      text: "Historial parcial",
    },
    {
      type: "p",
      text: "Es posible que la exportación no incluya toda tu historia de vistas. TikTok limita hasta dónde llega cierta actividad, por lo que un VideoList vacío o corto no siempre significa que hayas visto poco: puede significar que el período de la exportación era limitado.",
    },
    {
      type: "h3",
      text: "Archivos grandes",
    },
    {
      type: "p",
      text: "Los usuarios frecuentes pueden acabar con archivos de historial de vistas de decenas de megabytes. Algunos editores de texto tienen dificultades para abrir archivos tan grandes. Si un archivo no se abre o congela tu editor, es señal de que los datos son grandes, no de que estén corruptos.",
    },
    {
      type: "h3",
      text: "Diferencias en el nombre de las claves",
    },
    {
      type: "p",
      text: "Dado que TikTok ocasionalmente cambia el nombre de las claves entre versiones de exportación, la clave contenedora alrededor de VideoList puede ser diferente. Si data['Video Browsing History'] es undefined, inspecciona primero las claves de nivel superior para encontrar la etiqueta correcta.",
    },
    {
      type: "h2",
      text: "Reflexiones finales",
    },
    {
      type: "p",
      text: "El archivo JSON del historial de vistas es una de las partes más reveladoras de tu exportación de TikTok. Una vez que comprendes que es simplemente un array VideoList de pares Date y Link, contar videos y estimar sesiones resulta sencillo, aunque los problemas con zonas horarias, historial parcial y tamaño del archivo son fáciles de pasar por alto.",
    },
    {
      type: "p",
      text: "Si prefieres omitir el análisis manual, una herramienta de análisis puede leer el mismo archivo y presentarte los resultados en segundos.",
    },
  ],
  faq: [
    {
      q: "¿Dónde está el archivo de historial de vistas en la exportación de TikTok?",
      a: "Normalmente se encuentra dentro de una carpeta Activity, a menudo llamada Video Browsing History o Watch History, almacenada como un único archivo JSON.",
    },
    {
      q: "¿Qué campos contiene cada entrada del historial de vistas?",
      a: "Cada entrada del array VideoList contiene un campo Date con la hora en que se vio el video y un campo Link con la URL del video.",
    },
    {
      q: "¿Cómo cuento cuántos videos he visto?",
      a: "El total equivale al número de entradas del array VideoList. Puedes comprobar la longitud del array en un editor de código o en la consola del navegador.",
    },
    {
      q: "¿Por qué las marcas de tiempo parecen estar desfasadas unas horas?",
      a: "El campo Date a menudo se registra en UTC, por lo que puede diferir de tu hora local a menos que lo conviertas a tu propia zona horaria.",
    },
    {
      q: "¿Por qué mi archivo de historial de vistas es tan grande?",
      a: "Ver videos frecuentemente genera muchas entradas, por lo que el archivo puede crecer hasta decenas de megabytes. Un tamaño grande es normal y no significa que el archivo esté dañado.",
    },
  ],
}
