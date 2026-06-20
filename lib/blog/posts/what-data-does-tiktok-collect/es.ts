import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: '¿Qué datos recopila TikTok sobre ti? Explicado con claridad',
  description:
    'Descubre qué datos recopila TikTok sobre los usuarios, incluida la información de actividad, cuenta y dispositivo, y qué aparece en tu exportación de datos de TikTok.',
  intro:
    'Las plataformas de redes sociales dependen de los datos para funcionar, personalizar las experiencias y mantener la seguridad de las cuentas. Para los usuarios de TikTok, comprender qué datos se recopilan y cómo se clasifican es un aspecto fundamental de la transparencia digital, especialmente al solicitar una exportación de datos personales.',
  blocks: [
    {
      type: 'p',
      text: 'Este artículo explica los principales tipos de datos que TikTok recopila, cómo se generan esos datos mediante el uso normal de la aplicación, qué suele aparecer en una exportación de datos de TikTok y qué deben tener en cuenta los usuarios al revisar su información.',
    },
    { type: 'h2', text: 'Cómo recopila TikTok los datos de los usuarios' },
    {
      type: 'p',
      text: 'TikTok recopila datos a través de la interacción directa del usuario con la aplicación, la configuración de la cuenta y los procesos técnicos necesarios para entregar contenido y mantener la estabilidad de la plataforma.',
    },
    { type: 'p', text: 'La recopilación de datos se produce cuando los usuarios:' },
    {
      type: 'ul',
      items: [
        'crean o gestionan una cuenta',
        'ven, dan me gusta, comentan o comparten contenido',
        'buscan vídeos o creadores',
        'interactúan con funciones dentro de la aplicación',
      ],
    },
    {
      type: 'p',
      text: 'Estos datos se registran automáticamente como parte del funcionamiento normal de la plataforma y se describen en la documentación de privacidad de TikTok disponible públicamente.',
    },
    { type: 'h2', text: 'Categorías de datos que recopila TikTok' },
    {
      type: 'p',
      text: 'La recopilación de datos de TikTok puede agruparse, en términos generales, en varias categorías.',
    },
    { type: 'h3', text: 'Información de la cuenta y el perfil' },
    {
      type: 'p',
      text: 'Los datos a nivel de cuenta se utilizan para identificar y gestionar los perfiles de los usuarios. Esto puede incluir:',
    },
    {
      type: 'ul',
      items: [
        'nombre de usuario y nombre visible',
        'fecha de creación de la cuenta',
        'ajustes y preferencias del perfil',
        'información de región, idioma o país',
      ],
    },
    {
      type: 'p',
      text: 'Esta información permite a TikTok asociar la actividad con la cuenta correcta y aplicar ajustes regionales o basados en el idioma.',
    },
    { type: 'h3', text: 'Datos de actividad y uso' },
    {
      type: 'p',
      text: 'Los datos de actividad representan cómo interactúan los usuarios con la plataforma a lo largo del tiempo. Esto puede incluir:',
    },
    {
      type: 'ul',
      items: [
        'marcas de tiempo del uso de la aplicación',
        'vídeos vistos o con los que se ha interactuado',
        'me gusta, comentarios y compartidos',
        'acciones de seguir y dejar de seguir',
      ],
    },
    {
      type: 'p',
      text: 'Esta categoría suele constituir la mayor parte de los datos relacionados con el usuario y refleja un comportamiento observable, en lugar de una intención o un significado personal.',
    },
    { type: 'h3', text: 'Información de búsqueda y descubrimiento' },
    {
      type: 'p',
      text: 'TikTok puede recopilar datos relacionados con el descubrimiento de contenido, tales como:',
    },
    {
      type: 'ul',
      items: [
        'consultas de búsqueda introducidas en la aplicación',
        'interacciones con el contenido recomendado',
        'interacción con temas o categorías en tendencia',
      ],
    },
    {
      type: 'p',
      text: 'Esta información ayuda a la plataforma a organizar y mostrar contenido, en lugar de interpretar preferencias personales más allá de las acciones registradas.',
    },
    { type: 'h3', text: 'Datos del dispositivo y técnicos' },
    {
      type: 'p',
      text: 'Para garantizar el funcionamiento correcto de la aplicación, TikTok puede recopilar información técnica, que incluye:',
    },
    {
      type: 'ul',
      items: [
        'tipo de dispositivo y sistema operativo',
        'versión de la aplicación y datos de rendimiento',
        'indicadores de conectividad de red',
      ],
    },
    {
      type: 'p',
      text: 'Estos datos respaldan la seguridad, la resolución de problemas y la compatibilidad entre dispositivos.',
    },
    { type: 'h2', text: 'Qué no recopila TikTok' },
    {
      type: 'p',
      text: 'Existen ideas erróneas comunes sobre la recopilación de datos.',
    },
    { type: 'p', text: 'TikTok no:' },
    {
      type: 'ul',
      items: [
        'almacena las contraseñas de los usuarios en un formato legible dentro de las exportaciones',
        'registra pensamientos, emociones o intenciones privadas',
        'recopila credenciales financieras mediante el uso estándar',
        'proporciona acceso sin restricciones al contenido de los mensajes privados en todos los casos',
      ],
    },
    {
      type: 'p',
      text: 'Los datos recopilados están estructurados, registrados y limitados a sistemas definidos, en lugar de basarse en una observación informal.',
    },
    { type: 'h2', text: 'Qué aparece en una exportación de datos de TikTok' },
    {
      type: 'p',
      text: 'Cuando los usuarios solicitan una exportación de datos, TikTok proporciona un archivo descargable, normalmente en formato ZIP, que contiene registros estructurados de su actividad.',
    },
    { type: 'p', text: 'Una exportación de datos puede incluir:' },
    {
      type: 'ul',
      items: [
        'historiales de interacción',
        'registros de actividad con marcas de tiempo',
        'registros relacionados con búsquedas',
        'metadatos de la cuenta',
      ],
    },
    {
      type: 'p',
      text: 'No todos los datos recopilados se incluyen siempre. Las exportaciones pueden variar en función de:',
    },
    {
      type: 'ul',
      items: [
        'las regulaciones regionales',
        'los límites de conservación de datos',
        'la antigüedad de la cuenta y el nivel de actividad',
      ],
    },
    {
      type: 'p',
      text: 'La exportación refleja la actividad registrada en la plataforma, no rasgos inferidos ni análisis subjetivos.',
    },
    { type: 'h2', text: 'Por qué es importante entender la recopilación de datos' },
    { type: 'p', text: 'Saber qué datos se recopilan ayuda a los usuarios a:' },
    {
      type: 'ul',
      items: [
        'comprender mejor su propia actividad digital',
        'evaluar la transparencia de la plataforma',
        'tomar decisiones informadas sobre las herramientas de análisis de datos',
        'mantener el control sobre la información personal',
      ],
    },
    {
      type: 'p',
      text: 'La concienciación favorece un uso responsable y un consentimiento informado al trabajar con datos personales.',
    },
    { type: 'h2', text: 'Recopilación de datos frente a interpretación de datos' },
    { type: 'p', text: 'Es importante distinguir entre:' },
    {
      type: 'ul',
      items: [
        'recopilación de datos: registrar acciones observables',
        'interpretación de datos: resumir o analizar esos registros',
      ],
    },
    {
      type: 'p',
      text: 'La presencia de datos no implica automáticamente conclusiones. El significado y la interpretación dependen del contexto y de los métodos utilizados para analizar la información.',
    },
    { type: 'h2', text: 'Reflexiones finales' },
    {
      type: 'p',
      text: 'TikTok recopila datos relacionados con la gestión de la cuenta, la actividad, el descubrimiento y el rendimiento técnico para operar su plataforma. Estos datos se registran de forma sistemática y se ponen a disposición de los usuarios a través de herramientas de exportación oficiales en aras de la transparencia.',
    },
    {
      type: 'p',
      text: 'Al comprender qué datos se recopilan, y cuáles no, los usuarios pueden abordar sus datos de TikTok con claridad, confianza y una conciencia informada.',
    },
  ],
  faq: [
    {
      q: '¿Qué datos personales recopila TikTok?',
      a: 'TikTok recopila información de la cuenta, datos de actividad, interacciones de búsqueda y datos técnicos relacionados con el dispositivo, necesarios para operar la plataforma.',
    },
    {
      q: '¿Recopila TikTok los mensajes privados?',
      a: 'Es posible que se recopilen algunos metadatos relacionados con los mensajes, pero el contenido completo de los mensajes privados no siempre se incluye en las exportaciones de datos y no incluye contraseñas.',
    },
    {
      q: '¿Puedo ver qué datos tiene TikTok sobre mí?',
      a: 'Sí. TikTok permite a los usuarios solicitar una exportación de datos personales a través de sus ajustes de privacidad y datos.',
    },
    {
      q: '¿Se incluyen en la exportación todos los datos recopilados?',
      a: 'No siempre. Las exportaciones de datos pueden estar limitadas por los periodos de conservación, las regulaciones regionales y la actividad de la cuenta.',
    },
    {
      q: '¿Por qué recopila TikTok los datos de los usuarios?',
      a: 'La recopilación de datos respalda la funcionalidad de la plataforma, la personalización, la seguridad y el rendimiento general.',
    },
  ],
}
