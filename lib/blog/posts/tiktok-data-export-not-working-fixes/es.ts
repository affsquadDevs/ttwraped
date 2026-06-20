import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "¿La exportación de datos de TikTok no funciona? Problemas comunes y soluciones",
  description:
    "Soluciona los problemas más comunes de la exportación de datos de TikTok, como solicitudes pendientes atascadas, enlaces caducados, JSON frente a HTML, archivos ZIP que no abren y datos vacíos o parciales.",
  intro:
    "Si tu exportación de datos de TikTok se queda atascada en pendiente, el enlace de descarga ha caducado o el archivo ZIP no abre, la solución suele consistir en solicitar una exportación nueva, elegir el formato de archivo correcto y descargar con una conexión estable.",
  blocks: [
    {
      type: 'p',
      text: "TikTok te permite solicitar una copia completa de los datos de tu cuenta, pero el proceso no siempre transcurre sin problemas. Las solicitudes pueden estancarse, los enlaces pueden caducar y los archivos pueden llegar en un formato que las herramientas de análisis no pueden leer.",
    },
    {
      type: 'p',
      text: "Esta guía repasa los problemas más comunes de la exportación de datos de TikTok y las soluciones prácticas para cada uno, para que puedas obtener un archivo limpio y utilizable listo para el [[analyze:análisis]].",
    },
    {
      type: 'h2',
      text: "La exportación tarda demasiado o se queda atascada en pendiente",
    },
    {
      type: 'p',
      text: "La queja más común es que una solicitud se queda en \"Pendiente\" y nunca parece terminar. TikTok prepara las exportaciones en sus propios servidores, y el tiempo depende del tamaño de la cuenta y la demanda actual.",
    },
    {
      type: 'ul',
      items: [
        "Espera al menos unas horas antes de suponer que algo va mal: las cuentas grandes pueden tardar más.",
        "Vuelve a consultar la sección Descargar tus datos más tarde en lugar de enviar muchas solicitudes duplicadas.",
        "Si sigue pendiente durante varios días, envía una sola solicitud nueva para reiniciar el proceso.",
        "Asegúrate de que estás comprobando la misma cuenta y el mismo dispositivo desde los que solicitaste la exportación.",
      ],
    },
    {
      type: 'p',
      text: "La mayoría de las solicitudes atascadas se resuelven solas; la paciencia suele ser la verdadera solución.",
    },
    {
      type: 'h2',
      text: "El enlace de descarga ha caducado",
    },
    {
      type: 'p',
      text: "TikTok mantiene tu exportación finalizada disponible solo durante un periodo limitado, a menudo unos días. Después de eso, el enlace de descarga caduca y el archivo se elimina.",
    },
    {
      type: 'ul',
      items: [
        "Solicita una exportación totalmente nueva desde la sección Descargar tus datos.",
        "Descarga el archivo ZIP en cuanto aparezca como listo, en lugar de esperar.",
        "Guarda el archivo en un lugar permanente de inmediato, no en una carpeta temporal.",
      ],
    },
    {
      type: 'p',
      text: "Un enlace caducado no se puede recuperar, así que tratar una exportación lista como algo urgente evita repetir la espera.",
    },
    {
      type: 'h2',
      text: "Elegir entre JSON y HTML",
    },
    {
      type: 'p',
      text: "Cuando solicitas tus datos, TikTok te pregunta si los quieres en formato JSON o HTML. Esta elección importa más de lo que la mayoría de la gente espera.",
    },
    {
      type: 'ul',
      items: [
        "JSON es estructurado y legible por máquinas, que es lo que necesitan las herramientas de análisis para procesar tu actividad.",
        "HTML está pensado solo para leerse en un navegador y resulta difícil de procesar de forma fiable para las herramientas.",
        "Si piensas usar [[home:TikTok Wrapped]] o cualquier herramienta de análisis, selecciona JSON.",
      ],
    },
    {
      type: 'p',
      text: "Si ya recibiste una exportación en HTML y necesitas JSON, solicita una nueva exportación y elige JSON antes de enviarla.",
    },
    {
      type: 'h2',
      text: "El archivo ZIP no abre",
    },
    {
      type: 'p',
      text: "TikTok entrega tu exportación como un archivo comprimido ZIP. Si no se abre, el problema suele estar en la propia descarga.",
    },
    {
      type: 'ul',
      items: [
        "Vuelve a descargar el archivo con una conexión a internet estable y deja que termine por completo.",
        "Confirma que el tamaño del archivo parece razonable y no es inusualmente pequeño.",
        "Usa el extractor integrado de tu sistema operativo o una herramienta de descompresión de confianza.",
        "Evita cambiar la extensión del archivo manualmente, ya que puede confundir al extractor.",
      ],
    },
    {
      type: 'p',
      text: "Una descarga corrupta o parcial es la causa habitual, y volver a descargarla limpiamente soluciona la mayoría de los casos.",
    },
    {
      type: 'h2',
      text: "El archivo es demasiado grande para manejarlo",
    },
    {
      type: 'p',
      text: "Los usuarios y creadores de larga trayectoria pueden acabar con exportaciones muy grandes, que pueden tardar en descargarse o abrirse.",
    },
    {
      type: 'ul',
      items: [
        "Descarga por Wi-Fi en lugar de usar datos móviles para evitar interrupciones.",
        "Asegúrate de que tu dispositivo tiene suficiente almacenamiento libre tanto para guardar como para extraer el archivo.",
        "Extrae el ZIP por completo antes de abrir cualquier archivo individual de su interior.",
        "Si solo necesitas datos concretos, igualmente puedes subir la exportación completa: las herramientas leen solo lo que necesitan.",
      ],
    },
    {
      type: 'h2',
      text: "\"Solicitud fallida\" o error al solicitar",
    },
    {
      type: 'p',
      text: "A veces la propia solicitud falla antes de que se cree ningún archivo. Estos errores suelen ser temporales o estar relacionados con la conexión.",
    },
    {
      type: 'ul',
      items: [
        "Actualiza la aplicación de TikTok a la última versión o intenta solicitarlo desde el sitio web de TikTok.",
        "Cambia de red (por ejemplo, de datos móviles a Wi-Fi) e inténtalo de nuevo.",
        "Espera un poco antes de reintentar, ya que los intentos rápidos y repetidos pueden ser rechazados.",
        "Confirma que tu cuenta está en regla y con la sesión completamente iniciada.",
      ],
    },
    {
      type: 'p',
      text: "La mayoría de los mensajes de \"solicitud fallida\" se resuelven tras reintentar con una conexión estable.",
    },
    {
      type: 'h2',
      text: "Datos vacíos o parciales",
    },
    {
      type: 'p',
      text: "Abrir una exportación y encontrarla vacía o incompleta es frustrante, pero a menudo es un comportamiento esperado y no un error.",
    },
    {
      type: 'ul',
      items: [
        "Al solicitarla, selecciona todas las categorías de datos para que no se omita nada.",
        "Recuerda que las cuentas más nuevas simplemente tienen menos historial que exportar.",
        "Revisa los archivos correctos dentro de la exportación: la actividad está repartida en varias carpetas.",
        "Si faltan categorías, solicita una nueva exportación con todo seleccionado.",
      ],
    },
    {
      type: 'p',
      text: "Para entender cómo está organizada la exportación, consulta nuestra guía sobre [[/blog/tiktok-data-export-folders-explained:las carpetas de la exportación de datos de TikTok explicadas]].",
    },
    {
      type: 'h2',
      text: "Preparar una exportación limpia para el análisis",
    },
    {
      type: 'p',
      text: "Una vez que tengas una exportación JSON completa que abra correctamente, estarás listo para convertir los archivos en bruto en datos legibles.",
    },
    {
      type: 'ul',
      items: [
        "Mantén el ZIP intacto y evita editar los archivos de su interior.",
        "Elige el formato JSON para que sea compatible con las herramientas de análisis.",
        "Sube la exportación a una herramienta para resumir tu actividad automáticamente.",
      ],
    },
    {
      type: 'p',
      text: "Para un recorrido completo, lee [[/blog/how-to-download-analyze-tiktok-data:cómo descargar y analizar tus datos de TikTok]], o consulta un resultado de ejemplo en la página de [[example:wrapped de ejemplo]].",
    },
    {
      type: 'h2',
      text: "Reflexiones finales",
    },
    {
      type: 'p',
      text: "La mayoría de los problemas de la exportación de datos de TikTok se reducen a unas pocas causas recurrentes: una solicitud que necesita más tiempo, un enlace caducado, el formato de archivo equivocado o una descarga incompleta. Cada una tiene una solución sencilla.",
    },
    {
      type: 'p',
      text: "Solicita todas las categorías en JSON, descarga rápidamente con una conexión estable y mantén el archivo ZIP intacto. A partir de ahí, tu exportación estará lista para [[analyze:analizar]].",
    },
  ],
  faq: [
    {
      q: "¿Por qué mi exportación de datos de TikTok se queda atascada en pendiente?",
      a: "TikTok procesa las solicitudes de exportación en sus propios servidores, lo que puede tardar desde unos minutos hasta varios días según el tamaño de la cuenta y la demanda. Si sigue pendiente durante más de unos días, normalmente se resuelve solo, pero puedes enviar una solicitud nueva para reiniciar el proceso.",
    },
    {
      q: "¿Debo elegir JSON o HTML al solicitar mis datos de TikTok?",
      a: "Elige JSON si piensas usar una herramienta de análisis. JSON es legible por máquinas y mantiene tus registros de actividad en un formato estructurado que las herramientas pueden procesar, mientras que HTML está diseñado solo para leerse en un navegador.",
    },
    {
      q: "El enlace de descarga de TikTok ha caducado. ¿Qué debo hacer?",
      a: "Los enlaces de descarga de TikTok están disponibles durante un tiempo limitado, normalmente unos días. Si el enlace ha caducado, solicita una nueva exportación desde la sección Descargar tus datos y descarga el archivo ZIP rápidamente en cuanto esté listo.",
    },
    {
      q: "¿Por qué no abre mi archivo ZIP de TikTok?",
      a: "Un archivo ZIP que no abre suele estar descargado de forma incompleta o corrupto. Vuelve a descargar el archivo con una conexión estable, asegúrate de que la descarga ha terminado y usa el extractor integrado de tu sistema operativo o una herramienta de confianza para descomprimirlo.",
    },
    {
      q: "Mi exportación de TikTok parece vacía o incompleta. ¿Es normal?",
      a: "Las exportaciones solo contienen las categorías que seleccionaste y la actividad vinculada a tu cuenta. Si parecen faltar datos, solicita una exportación con todas las categorías de datos seleccionadas, y recuerda que las cuentas más nuevas tienen de forma natural menos historial.",
    },
  ],
}
