import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'Qué significa cada carpeta en la exportación de datos de TikTok (Guía 2026)',
  description:
    'Un desglose claro de cada carpeta y sección JSON en la exportación de datos de TikTok, qué contiene cada una y qué partes lee TikTok Wrapped.',
  intro:
    'La exportación de datos de TikTok está organizada en un conjunto de carpetas y secciones JSON — Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings y TikTok Live — y cada una almacena una parte diferente del historial de tu cuenta.',
  blocks: [
    {
      type: 'p',
      text: 'Cuando solicitas tus datos a TikTok y abres la descarga, el contenido puede parecer abrumador. Ya sea que recibas un único archivo JSON de gran tamaño o una carpeta estructurada de archivos, la información está agrupada en secciones predecibles. Una vez que comprendes cómo esas secciones se corresponden con tu actividad real, la exportación se vuelve fácil de navegar.',
    },
    {
      type: 'p',
      text: "Esta guía recorre cada carpeta de nivel superior y sección JSON de la exportación, explica en un lenguaje sencillo qué contiene, y muestra qué partes lee realmente [[home:TikTok Wrapped]] para construir tu resumen. Si aún no has descargado tus datos, consulta nuestro tutorial paso a paso sobre [[/blog/how-to-download-analyze-tiktok-data:cómo descargar y analizar tus datos de TikTok]].",
    },
    { type: 'h2', text: 'Profile' },
    {
      type: 'p',
      text: "La sección Profile contiene la información básica de tu cuenta: nombre de usuario, nombre de perfil, biografía, el correo electrónico o teléfono asociado a la cuenta y los detalles de creación de la misma. Describe quién eres en la plataforma, no lo que has hecho.",
    },
    {
      type: 'p',
      text: "Esta sección es pequeña pero útil para etiquetar un informe. No contiene tu contraseña — TikTok nunca incluye credenciales en una exportación.",
    },
    { type: 'h2', text: 'Activity (Tu actividad)' },
    {
      type: 'p',
      text: 'La sección Activity — a veces etiquetada como "Your Activity" — es el núcleo de la exportación y generalmente la parte más extensa. Está dividida en varias subsecciones que registran todo lo que has hecho mientras navegabas:',
    },
    {
      type: 'ul',
      items: [
        'Watch History — una lista con marcas de tiempo de los videos que viste.',
        'Like List — los videos que te gustaron, con fechas.',
        'Search History — los términos que buscaste.',
        'Share History — el contenido que compartiste y dónde.',
        'Following / Follower List — las cuentas que sigues y las cuentas que te siguen.',
        'Videos, sonidos y hashtags favoritos — elementos que guardaste como favoritos.',
      ],
    },
    {
      type: 'p',
      text: 'Gracias a las marcas de tiempo, esta sección es la que hace posible el análisis de patrones a largo plazo. La mayoría de los datos en un resumen de TikTok Wrapped — tus períodos de mayor visualización, tus creadores favoritos y el volumen de vistas — provienen de aquí.',
    },
    { type: 'h2', text: 'Comments' },
    {
      type: 'p',
      text: 'La sección Comments lista los comentarios que has publicado en otros videos, junto con sus marcas de tiempo. Refleja cómo has interactuado públicamente con el contenido a lo largo del tiempo.',
    },
    { type: 'h2', text: 'Direct Messages' },
    {
      type: 'p',
      text: 'La sección Direct Messages contiene el historial de tus chats privados agrupados por conversación. Esta es la parte más personal de la exportación, por lo que merece especial cuidado al compartir archivos. TikTok Wrapped no necesita ni lee tus mensajes directos.',
    },
    { type: 'h2', text: 'Video (Tus publicaciones)' },
    {
      type: 'p',
      text: 'La sección Video — a menudo etiquetada como "Posts" — cubre el contenido que publicaste tú mismo: tus videos subidos, descripciones y metadatos relacionados. Para los creadores, esta sección documenta su historial de publicaciones; para los espectadores puede ser pequeña o estar vacía.',
    },
    { type: 'h2', text: 'Ads and Data' },
    {
      type: 'p',
      text: 'La sección Ads and Data registra señales relacionadas con la publicidad, incluidos los datos de Off TikTok Activity — información que otras aplicaciones y sitios web han compartido con TikTok sobre tu actividad fuera de la app. También incluye intereses publicitarios y registros de interacciones con anuncios utilizados para la segmentación.',
    },
    {
      type: 'p',
      text: "Si deseas analizar en profundidad qué revelan estas señales, nuestro artículo sobre [[/blog/what-data-does-tiktok-collect:qué datos recopila TikTok]] repasa las categorías en detalle.",
    },
    { type: 'h2', text: 'App Settings' },
    {
      type: 'p',
      text: 'La sección App Settings almacena tus preferencias: configuración de privacidad, opciones de notificaciones, idioma y configuración similar. Describe cómo está configurada tu cuenta, no cómo la usaste, por lo que rara vez afecta el análisis.',
    },
    { type: 'h2', text: 'TikTok Live' },
    {
      type: 'p',
      text: 'La sección TikTok Live captura la actividad relacionada con las transmisiones en directo — transmisiones que organizaste o a las que te uniste, y las interacciones relacionadas. Para la mayoría de los espectadores esta sección es pequeña, pero para los streamers activos puede ser un registro significativo.',
    },
    { type: 'h2', text: 'Referencia carpeta por carpeta' },
    {
      type: 'p',
      text: 'La tabla siguiente asigna cada carpeta o sección JSON a lo que contiene y a lo que TikTok Wrapped lee de ella. También puedes ver el tipo de resultado que produce en nuestra página de [[example:ejemplo de wrapped]].',
    },
    {
      type: 'table',
      headers: ['Carpeta / Sección', 'Qué contiene', 'Qué lee TikTok Wrapped'],
      rows: [
        ['Profile', 'Nombre de usuario, biografía, detalles de la cuenta', 'Nombre para mostrar en el informe'],
        ['Activity — Watch History', 'Videos vistos con marcas de tiempo', 'Volumen de visualización y tendencias'],
        ['Activity — Like List', 'Videos que te gustaron, con fechas', 'Hábitos de likes a lo largo del tiempo'],
        ['Activity — Search History', 'Términos de búsqueda que usaste', 'Búsquedas principales e intereses'],
        ['Activity — Following / Follower', 'Cuentas seguidas y seguidores', 'Creadores favoritos'],
        ['Comments', 'Comentarios que publicaste', 'Recuentos de interacción (opcional)'],
        ['Direct Messages', 'Historial de chats privados', 'No se lee'],
        ['Video / Posts', 'Videos que publicaste', 'Historial de publicaciones (creadores)'],
        ['Ads and Data', 'Off TikTok Activity, intereses publicitarios', 'No se lee'],
        ['App Settings', 'Privacidad y preferencias de la app', 'No se lee'],
        ['TikTok Live', 'Actividad en transmisiones en directo', 'No se lee'],
      ],
    },
    { type: 'h2', text: 'Una nota sobre la privacidad' },
    {
      type: 'p',
      text: 'Tu exportación contiene secciones sensibles — especialmente Direct Messages y Ads and Data — que nunca son necesarias para generar un resumen de uso. TikTok Wrapped se centra en los datos de Activity con marcas de tiempo e ignora por completo los mensajes privados y los registros publicitarios. Tú controlas el archivo en todo momento y puedes eliminar las carpetas sensibles antes de subir nada a ningún lugar. Cuando estés listo, puedes [[analyze:analizar tu wrapped]] con solo los archivos de actividad.',
    },
    { type: 'h2', text: 'Reflexión final' },
    {
      type: 'p',
      text: 'La exportación de datos de TikTok solo parece complicada hasta que conoces el mapa. Cada carpeta responde a una única pregunta — quién eres, qué viste, qué publicaste, con quién hablaste o cómo está configurada tu cuenta. Saber qué secciones importan te permite analizar las partes que te interesan y dejar las privadas sin tocar.',
    },
  ],
  faq: [
    {
      q: '¿Cómo está organizada la exportación de datos de TikTok?',
      a: 'La exportación está agrupada en secciones como Profile, Activity, Comments, Direct Messages, Video, Ads and Data, App Settings y TikTok Live, y cada una almacena una parte diferente del historial de tu cuenta.',
    },
    {
      q: '¿En qué carpeta está mi historial de visualización?',
      a: 'Tu historial de visualización se encuentra dentro de la sección Activity, a menudo etiquetada como Your Activity, junto con tu Like List, Search History y listas de Following.',
    },
    {
      q: '¿La exportación de datos de TikTok incluye mi contraseña?',
      a: 'No. TikTok nunca incluye contraseñas de cuenta ni credenciales de inicio de sesión en una exportación de datos. La sección Profile solo contiene información básica de la cuenta.',
    },
    {
      q: '¿TikTok Wrapped lee mis mensajes directos?',
      a: 'No. TikTok Wrapped se centra en los datos de Activity con marcas de tiempo y no lee tus secciones de Direct Messages ni Ads and Data.',
    },
    {
      q: '¿Qué son los datos de Off TikTok Activity?',
      a: 'Off TikTok Activity se encuentra en la sección Ads and Data y registra la información que otras aplicaciones y sitios web compartieron con TikTok sobre tu actividad fuera de la app.',
    },
  ],
}
