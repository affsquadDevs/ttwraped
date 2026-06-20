import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: 'TikTok vs Instagram vs YouTube: Comparando tus exportaciones de datos',
  description:
    'Compara cómo TikTok, Instagram y YouTube te permiten descargar tus datos: cómo solicitar cada exportación, el tiempo de entrega, los formatos y cuál es el más fácil de analizar.',
  intro:
    'TikTok, Instagram y YouTube te permiten descargar una copia de tus datos personales, pero el proceso de solicitud, el tiempo de entrega, los formatos de archivo y el nivel de detalle varían considerablemente entre ellos.',
  blocks: [
    {
      type: 'p',
      text: 'Si alguna vez has querido revisar tu propia actividad — qué viste, qué buscaste y cómo usaste una aplicación a lo largo de los años — la mayoría de las plataformas principales ahora te ofrecen una forma de solicitar esos datos. Esto se debe en parte a regulaciones de privacidad como el RGPD y la CCPA, que otorgan a los usuarios el derecho de acceder a la información que un servicio tiene sobre ellos.',
    },
    {
      type: 'p',
      text: 'Esta guía compara la experiencia de exportación de datos en tres de las plataformas más grandes: TikTok, Instagram y YouTube. Veremos cómo solicitar cada exportación, cuánto tarda la entrega, qué formatos recibes y qué revela realmente cada archivo sobre tu actividad.',
    },
    { type: 'h2', text: 'Cómo solicitar cada exportación' },
    {
      type: 'p',
      text: 'Cada plataforma oculta la opción de descarga en su configuración de privacidad o de cuenta, pero el camino es ligeramente diferente.',
    },
    {
      type: 'ul',
      items: [
        "TikTok: Abre Configuración y privacidad → Cuenta → Descarga tus datos, elige un formato y solicita el archivo.",
        'Instagram: Ve a Configuración → Centro de cuentas → Tu información y permisos → Descarga tu información.',
        'YouTube: Usa Google Takeout, selecciona YouTube y YouTube Music, y elige qué incluir (historial, comentarios, listas de reproducción).',
      ],
    },
    {
      type: 'p',
      text: "TikTok mantiene todo dentro de su propia aplicación, Instagram te dirige al Centro de cuentas compartido de Meta, y YouTube delega la tarea a Google Takeout, que abarca todos los productos de Google en un solo lugar.",
    },
    { type: 'h2', text: 'Tiempo de entrega' },
    {
      type: 'p',
      text: 'Ninguna de estas exportaciones es instantánea, ya que las plataformas deben empaquetar potencialmente años de actividad en un archivo descargable.',
    },
    {
      type: 'p',
      text: 'TikTok suele ser el más rápido — a menudo entre unas pocas horas y un par de días, y el archivo aparece dentro de la aplicación para que lo descargues. Instagram y YouTube pueden tardar desde unas pocas horas hasta varios días según el tamaño de la cuenta y el rango de fechas que solicites. Los archivos más grandes, especialmente los que incluyen contenido multimedia, tardan más en prepararse.',
    },
    { type: 'h2', text: 'Formatos de archivo' },
    {
      type: 'p',
      text: 'El formato que recibes importa mucho si planeas analizar los datos más adelante.',
    },
    {
      type: 'ul',
      items: [
        'TikTok te permite elegir entre JSON (legible por máquina, ideal para análisis) y TXT/HTML (más fácil de leer manualmente).',
        'Instagram ofrece JSON o HTML, donde el HTML se abre como páginas web y el JSON es mejor para herramientas.',
        'YouTube entrega el historial en JSON o HTML y otros elementos en CSV, todo comprimido en un archivo ZIP.',
      ],
    },
    {
      type: 'p',
      text: 'Si tu objetivo es analizar tu actividad en lugar de solo revisarla, elige siempre JSON cuando esté disponible.',
    },
    { type: 'h2', text: 'Comparación lado a lado' },
    {
      type: 'table',
      headers: ['Característica', 'TikTok', 'Instagram', 'YouTube'],
      rows: [
        ['Método de solicitud', 'Configuración en la app', 'Centro de cuentas', 'Google Takeout'],
        ['Tiempo de entrega', 'Horas hasta ~2 días', 'Horas hasta varios días', 'Horas hasta varios días'],
        ['Formato', 'JSON o TXT/HTML', 'JSON o HTML', 'JSON, HTML, CSV'],
        [
          'Detalle del historial de visualización',
          'Alto (marcas de tiempo por video)',
          'Limitado (sin registro de videos del feed)',
          'Alto (marcas de tiempo por video)',
        ],
        ['Historial de búsqueda', 'Incluido', 'Incluido', 'Incluido'],
      ],
    },
    { type: 'h2', text: 'Qué revela cada exportación' },
    {
      type: 'h3',
      text: 'Granularidad del historial de visualización',
    },
    {
      type: 'p',
      text: "TikTok y YouTube registran ambos un registro detallado con marcas de tiempo de los videos que viste, lo que permite reconstruir los hábitos de visualización a lo largo del tiempo. La exportación de Instagram es más limitada en este aspecto — captura interacciones y algunos datos de visualización, pero no proporciona el mismo historial limpio por video que ofrece TikTok.",
    },
    {
      type: 'h3',
      text: 'Historial de búsqueda',
    },
    {
      type: 'p',
      text: 'Las tres plataformas incluyen tus consultas de búsqueda, por lo que puedes ver qué temas, creadores y sonidos buscaste. Esta es una de las secciones más consistentes entre las exportaciones.',
    },
    {
      type: 'h3',
      text: 'Mensajes e interacciones',
    },
    {
      type: 'p',
      text: 'TikTok e Instagram incluyen mensajes directos y registros de interacciones como likes, comentarios y seguimientos. YouTube se centra más en comentarios, suscripciones y listas de reproducción, ya que no es principalmente una plataforma de mensajería.',
    },
    { type: 'h2', text: '¿Cuál es el más fácil de analizar?' },
    {
      type: 'p',
      text: 'Para el valor analítico puro, TikTok y YouTube lideran, porque ambos proporcionan historiales de visualización detallados y con marcas de tiempo en JSON. Ese formato estructurado facilita que una herramienta cuente videos, encuentre horas pico y descubra patrones.',
    },
    {
      type: 'p',
      text: "La exportación de Instagram está bien organizada, pero se enfoca menos en la visualización continua de videos, por lo que cuenta una historia diferente — más sobre interacciones que sobre el consumo pasivo.",
    },
    {
      type: 'p',
      text: 'En la práctica, los archivos de exportación en bruto son difíciles de leer por sí solos. Ahí es donde ayuda una herramienta de resumen. [[home:TikTok Wrapped]] toma una exportación de datos de TikTok y la convierte en información visual clara sobre tu actividad. Puedes [[analyze:analizar tu propia exportación]] o ver primero un [[example:ejemplo de wrapped]] para ver cómo se ven los resultados.',
    },
    { type: 'h2', text: 'Reflexiones finales' },
    {
      type: 'p',
      text: 'TikTok, Instagram y YouTube respetan tu derecho a descargar tus datos, pero difieren en lo fácil que es ese proceso y en lo útil que es el resultado para el análisis. TikTok y YouTube destacan por el historial de visualización detallado, mientras que Instagram ofrece una imagen amplia de las interacciones.',
    },
    {
      type: 'p',
      text: 'Si quieres profundizar más, consulta nuestras guías sobre [[/blog/how-to-download-analyze-tiktok-data:cómo descargar y analizar tus datos de TikTok]] y la diferencia entre [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:TikTok Wrapped y TikTok Analytics]].',
    },
  ],
  faq: [
    {
      q: '¿Cómo solicito mis datos de TikTok, Instagram y YouTube?',
      a: 'TikTok ofrece la opción dentro de Configuración y privacidad en Descarga tus datos. Instagram usa el Centro de cuentas en Descarga tu información. YouTube usa Google Takeout, donde seleccionas YouTube y YouTube Music.',
    },
    {
      q: '¿Cuánto tarda en llegar cada exportación de datos?',
      a: 'TikTok suele ser el más rápido, a menudo entre unas pocas horas y aproximadamente dos días. Instagram y YouTube pueden tardar desde unas pocas horas hasta varios días dependiendo del tamaño de la cuenta y el rango de fechas solicitado.',
    },
    {
      q: '¿Qué formato debo elegir para el análisis?',
      a: 'Elige JSON siempre que esté disponible. JSON es legible por máquina y funciona mejor con herramientas de análisis, mientras que HTML y TXT son más fáciles de leer manualmente pero más difíciles de procesar.',
    },
    {
      q: '¿Qué plataforma ofrece el historial de visualización más detallado?',
      a: 'TikTok y YouTube proporcionan ambos historiales de visualización detallados con marcas de tiempo. Instagram captura interacciones, pero no ofrece el mismo historial por video del feed.',
    },
    {
      q: '¿Cuál es la exportación más fácil de analizar?',
      a: 'TikTok y YouTube son los más fáciles de analizar porque sus historiales de visualización en JSON estructurado hacen que sea sencillo contar videos y encontrar patrones. Una herramienta como TikTok Wrapped puede convertir una exportación de TikTok en información visual clara.',
    },
  ],
}
