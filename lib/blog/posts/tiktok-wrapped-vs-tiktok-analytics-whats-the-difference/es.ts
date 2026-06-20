import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "TikTok Wrapped vs TikTok Analytics: ¿Cuál es la diferencia?",
  description:
    'Compara TikTok Wrapped y TikTok Analytics para entender cómo funciona cada uno, qué datos utilizan y qué información ofrecen.',
  intro:
    'TikTok Analytics muestra métricas de rendimiento a corto plazo dentro de la app para creadores, mientras que TikTok Wrapped analiza patrones de uso a largo plazo mediante exportaciones de datos de TikTok propiedad del usuario.',
  blocks: [
    {
      type: 'p',
      text: "TikTok ofrece análisis integrados para creadores, mientras que herramientas como TikTok Wrapped se centran en analizar las exportaciones de datos propiedad del usuario. Aunque ambas trabajan con datos de TikTok, tienen propósitos muy distintos.",
    },
    {
      type: 'p',
      text: 'Este artículo explica la diferencia entre TikTok Wrapped y TikTok Analytics, cómo funciona cada uno y cuándo puede ser más útil uno u otro.',
    },
    { type: 'h2', text: '¿Qué es TikTok Analytics?' },
    {
      type: 'p',
      text: 'TikTok proporciona TikTok Analytics como función nativa dentro de la app, diseñada principalmente para creadores.',
    },
    { type: 'p', text: 'TikTok Analytics muestra habitualmente:' },
    {
      type: 'ul',
      items: [
        'visualizaciones y alcance de los vídeos,',
        'crecimiento de seguidores,',
        'métricas de interacción (me gusta, comentarios, compartidos),',
        'tendencias de rendimiento a corto plazo.',
      ],
    },
    {
      type: 'p',
      text: 'Estos datos están agregados y limitados a rangos de tiempo específicos, normalmente los últimos 7–60 días.',
    },
    { type: 'h2', text: '¿Qué es TikTok Wrapped?' },
    {
      type: 'p',
      text: "[[home:TikTok Wrapped]] es una herramienta de análisis de datos independiente que trabaja con la exportación oficial de datos de TikTok del usuario.",
    },
    {
      type: 'p',
      text: 'En lugar de centrarse en el rendimiento del contenido, TikTok Wrapped analiza:',
    },
    {
      type: 'ul',
      items: [
        'el historial de uso a largo plazo,',
        'las líneas de tiempo de actividad,',
        'el comportamiento de interacción a lo largo del tiempo,',
        'los patrones basados en los archivos de datos del usuario.',
      ],
    },
    {
      type: 'p',
      text: 'TikTok Wrapped no recopila datos directamente de TikTok. Solo procesa los archivos que los usuarios descargan y suben de forma voluntaria.',
    },
    { type: 'h2', text: 'Diferencias clave de un vistazo' },
    {
      type: 'table',
      headers: ['Característica', 'TikTok Analytics', 'TikTok Wrapped'],
      rows: [
        ['Fuente de datos', 'Métricas dentro de la app', 'Exportación de datos del usuario'],
        ['Público principal', 'Creadores', 'Cualquier usuario de TikTok'],
        ['Rango de tiempo', 'Corto plazo', 'Largo plazo'],
        ['Enfoque', 'Rendimiento del contenido', 'Comportamiento de uso'],
        ['Propiedad de los datos', 'Controlada por la plataforma', 'Propiedad del usuario'],
        ['Cuenta requerida', 'Sí', 'No'],
      ],
    },
    { type: 'h2', text: 'Fuente de datos: Métricas de la plataforma vs exportaciones del usuario' },
    {
      type: 'p',
      text: 'TikTok Analytics utiliza métricas controladas por la plataforma. Los usuarios ven resúmenes seleccionados por TikTok, con un historial limitado.',
    },
    {
      type: 'p',
      text: 'TikTok Wrapped utiliza exportaciones de datos propiedad del usuario, que:',
    },
    {
      type: 'ul',
      items: [
        'se descargan directamente desde TikTok,',
        'contienen registros de actividad sin procesar,',
        'ofrecen una cobertura histórica más amplia.',
      ],
    },
    {
      type: 'p',
      text: 'Esta diferencia afecta tanto al alcance de los datos como a la transparencia.',
    },
    { type: 'h2', text: 'Diferencias según el caso de uso' },
    {
      type: 'step',
      title: 'Cuándo es útil TikTok Analytics',
      items: [
        'Hacer seguimiento del rendimiento de los vídeos',
        'Monitorizar el crecimiento de seguidores',
        'Optimizar estrategias de publicación',
        'Tomar decisiones de contenido a corto plazo',
      ],
    },
    {
      type: 'step',
      title: 'Cuándo es útil TikTok Wrapped',
      items: [
        'Comprender los hábitos de uso a largo plazo',
        'Explorar los patrones de actividad personal',
        'Revisar el comportamiento histórico de interacción',
        'Análisis personal y reflexión',
      ],
    },
    {
      type: 'p',
      text: 'Las dos herramientas son complementarias, no competidoras.',
    },
    { type: 'h2', text: 'Consideraciones sobre privacidad y control' },
    { type: 'p', text: 'TikTok Analytics:' },
    {
      type: 'ul',
      items: [
        'opera íntegramente dentro de TikTok,',
        'no permite exportar datos con el mismo nivel de detalle,',
        'muestra solo las métricas seleccionadas.',
      ],
    },
    { type: 'p', text: 'TikTok Wrapped:' },
    {
      type: 'ul',
      items: [
        'solo trabaja con los datos que el usuario elige subir,',
        'no requiere acceso a la cuenta de TikTok,',
        'permite a los usuarios conservar la plena propiedad de sus datos.',
      ],
    },
    {
      type: 'p',
      text: 'La privacidad depende de con qué responsabilidad se use cada herramienta.',
    },
    { type: 'h2', text: '¿Es TikTok Wrapped un sustituto de TikTok Analytics?' },
    { type: 'p', text: 'No.' },
    {
      type: 'p',
      text: 'TikTok Wrapped no reemplaza a TikTok Analytics. Tiene una finalidad analítica diferente.',
    },
    {
      type: 'p',
      text: 'TikTok Analytics ayuda a los creadores a optimizar su contenido. TikTok Wrapped ayuda a los usuarios a comprender su comportamiento y uso a lo largo del tiempo.',
    },
    { type: 'h2', text: 'Reflexiones finales' },
    {
      type: 'p',
      text: 'TikTok Analytics y TikTok Wrapped analizan los datos de TikTok desde perspectivas distintas. Una se centra en el rendimiento del contenido dentro de la app, mientras que la otra se centra en los datos del usuario fuera de la app.',
    },
    {
      type: 'p',
      text: "Entender la diferencia ayuda a los usuarios a elegir la herramienta adecuada para sus objetivos, ya sea la optimización de contenido o el análisis personal.",
    },
  ],
  faq: [
    {
      q: '¿Es TikTok Wrapped una herramienta oficial de TikTok?',
      a: 'No. TikTok Wrapped es un servicio independiente y no está afiliado con TikTok ni con ByteDance Ltd.',
    },
    {
      q: '¿Utiliza TikTok Wrapped los mismos datos que TikTok Analytics?',
      a: 'No. TikTok Analytics usa métricas de rendimiento dentro de la app, mientras que TikTok Wrapped analiza las exportaciones de datos de TikTok propiedad del usuario.',
    },
    {
      q: '¿Pueden los no creadores usar TikTok Analytics?',
      a: 'TikTok Analytics está diseñado principalmente para cuentas de creadores. TikTok Wrapped puede ser utilizado por cualquier usuario de TikTok.',
    },
    {
      q: '¿Requiere TikTok Wrapped acceso a mi cuenta de TikTok?',
      a: 'No. TikTok Wrapped no requiere iniciar sesión en TikTok ni otorgar permisos de cuenta.',
    },
    {
      q: '¿Qué herramienta muestra datos de TikTok a más largo plazo?',
      a: 'TikTok Wrapped muestra generalmente datos históricos a más largo plazo basados en lo que se incluye en la exportación de datos de TikTok.',
    },
  ],
}
