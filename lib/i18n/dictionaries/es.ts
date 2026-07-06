import type { Dictionary } from './en'

export const dictionary: Dictionary = {
  nav: {
    home: 'Inicio',
    analyze: 'Analizar',
    example: 'Ejemplo',
    about: 'Acerca de',
    blog: 'Blog',
    contact: 'Contacto',
  },

  langSwitcher: {
    label: 'Idioma',
  },

  cta: {
    analyzeData: 'Analiza tus datos de TikTok →',
    viewExample: 'Ver un ejemplo de TikTok Wrapped →',
    backToHome: '← Volver al inicio',
  },

  disclaimer: {
    underH1:
      'Herramienta independiente y no oficial: no está afiliada, respaldada ni conectada con TikTok ni ByteDance Ltd.',
  },

  consent: {
    ariaLabel: 'Consentimiento de cookies',
    text:
      'Valoramos tu privacidad. Utilizamos cookies para realizar análisis (Google Tag Manager) y para mostrar anuncios a través de Google AdSense, incluida la personalización de anuncios. Con tu consentimiento, Google y sus socios pueden usar cookies para personalizar anuncios en función de tus visitas a este y otros sitios. Puedes aceptar, rechazar o cambiar tu elección en cualquier momento. Consulta nuestra [[privacy:Política de Privacidad]].',
    accept: 'Aceptar todo',
    reject: 'Rechazar no esenciales',
  },

  footer: {
    description:
      'Una herramienta independiente y no oficial para entender la exportación de tus datos de TikTok: hábitos de visualización, un divertido rango de personalidad y tu historia completa en TikTok.',
    productTitle: 'Producto',
    legalTitle: 'Legal',
    resourcesTitle: 'Recursos',
    links: {
      home: 'Inicio',
      analyze: 'Analizar',
      example: 'Ejemplo',
      exampleWrapped: 'Ejemplo de Wrapped',
      about: 'Acerca de',
      privacy: 'Política de Privacidad',
      terms: 'Términos del Servicio',
      contact: 'Contacto',
      blog: 'Blog',
    },
    copyright: '© {year} TikTok Wrapped. Todos los derechos reservados.',
    disclaimer:
      'TikTok Wrapped es una herramienta independiente para analizar la exportación de tus propios datos de TikTok. No está afiliada, respaldada ni conectada con TikTok ni ByteDance Ltd. «TikTok» es una marca comercial de su respectivo propietario.',
    privacy: 'Privacidad',
    terms: 'Términos',
    cookieSettings: 'Configuración de cookies',
  },

  home: {
    trust: ["Gratis", "100% privado", "Sin registro"],
    logoSubtitle: 'Analiza la exportación de tus datos de TikTok',
    heroTagline: 'Tu año en TikTok, al descubierto 🎬',
    heroPlatformTagline:
      'Una plataforma independiente para entender los datos de tu actividad personal en TikTok.',
    features: ['Obtén tu rango de personalidad', 'Consulta estadísticas detalladas de visualización'],
    heroDescription:
      'TikTok Wrapped es una herramienta en línea independiente que te ayuda a entender tu actividad personal en TikTok usando la exportación oficial de tus datos de TikTok. Cuando solicitas tus datos a TikTok, se entregan como un archivo ZIP o JSON que contiene información de actividad en bruto. TikTok Wrapped analiza este archivo y lo convierte en resúmenes claros e información visual, como patrones de uso, líneas de tiempo de actividad y estadísticas generales de interacción. El servicio funciona únicamente con los datos que decides subir y está destinado a fines informativos y de análisis personal.',
    learnMoreTitle: 'Más información sobre los datos de TikTok',
    learnMoreText:
      'TikTok permite a los usuarios descargar una exportación detallada de sus datos de actividad personal, pero esta información suele entregarse en un formato técnico difícil de interpretar. TikTok Wrapped ayuda a los usuarios a comprender cómo funcionan sus datos, qué contienen y cómo pueden analizarse de forma responsable. A través de guías y explicaciones educativas, nos centramos en la transparencia, la privacidad y la claridad, ayudando a los usuarios a darle sentido a sus propios datos sin suposiciones ni acceso a la plataforma.',
    learnMoreLinks: [
      { slug: 'tiktok-wrapped-explained-what-it-is-how-it-works', label: 'TikTok Wrapped explicado: qué es y cómo funciona' },
      { slug: 'how-to-download-analyze-tiktok-data', label: 'Cómo descargar y analizar los datos de TikTok' },
      { slug: 'what-your-tiktok-usage-says-about-your-digital-habits', label: 'Lo que tu uso de TikTok dice sobre tus hábitos digitales' },
      { slug: 'how-to-analyze-tiktok-data-safely-privacy-first-guide', label: 'Cómo analizar los datos de TikTok de forma segura' },
    ],
    revealTitle: 'Lo que pueden revelar los datos de TikTok',
    revealItems: [
      'Frecuencia de uso y tendencias de actividad a lo largo del tiempo',
      'Patrones de interacción según la hora del día',
      'Comportamiento general de interacción (me gusta, comentarios, compartidos)',
      'Cambios a largo plazo en los hábitos de uso de la app',
    ],
    revealDisclaimer:
      'Toda la información se basa en exportaciones de datos propiedad del usuario y está destinada únicamente a fines informativos y de comprensión personal.',
    howItWorksTitle: 'Cómo funciona TikTok Wrapped',
    howItWorksText:
      'TikTok Wrapped funciona analizando las exportaciones oficiales de datos de TikTok que los usuarios deciden descargar por sí mismos. La plataforma se centra en resumir y organizar esta información en datos legibles sin acceder a las cuentas de los usuarios ni recopilar datos adicionales. Hay instrucciones detalladas y herramientas de análisis disponibles en una [[analyze:página independiente]] para los usuarios que deseen explorar más a fondo sus datos.',
    analyzeButton: 'Analiza tus datos de TikTok →',
    demoTitle: '🎬 Míralo en acción',
    demoDescription:
      '¿Quieres ver lo que produce TikTok Wrapped antes de empezar? Explora un ejemplo completo y de aspecto real creado a partir de datos de muestra, sin necesidad de subir nada.',
    demoButton: 'Ver un ejemplo de TikTok Wrapped →',
    moreStatsTitle: '✨ Y mucho más te espera...',
    statTags: [
      '🔍 Búsquedas principales',
      '📅 Actividad por año',
      '⏰ Horas pico',
      '❤️ Me gusta y comentarios',
      '📤 Historial de compartidos',
      '🔴 Transmisiones en vivo',
    ],
    demoCta: '¿Listo para descubrir tus estadísticas? [[analyze:¡Analiza tus datos ahora! →]]',
  },

  analyze: {
    subtitle: 'Analiza tus datos de TikTok',
    howToTitle: '📱 Cómo obtener tus datos de TikTok',
    importantLabel: 'Importante:',
    importantText:
      'TikTok proporciona tus datos únicamente bajo solicitud. Tras enviar una solicitud, puede tardar desde unas horas hasta 3 días en estar lista. ¡Asegúrate de seleccionar el formato «JSON» al solicitarla!',
    steps: [
      { title: 'Abre Configuración', text: 'Ve a tu Perfil → toca el menú ☰ → selecciona Configuración', alt: 'Paso 1: Abre Configuración' },
      { title: 'Ve a Cuenta', text: 'En Configuración y privacidad, busca y toca Cuenta', alt: 'Paso 2: Ve a Cuenta' },
      { title: 'Descarga tus datos', text: 'Desplázate hacia abajo y toca «Descargar tus datos»', alt: 'Paso 3: Descarga tus datos' },
      { title: 'Solicita los datos (JSON)', text: 'Cambia el formato a «JSON», selecciona «Todos los datos» y luego toca «Solicitar datos»', alt: 'Paso 4: Solicita los datos' },
    ],
    footerSteps: [
      'Recibirás una notificación cuando tus datos estén listos',
      'Descarga el archivo ZIP desde la pestaña «Descargar datos»',
      '¡Súbelo aquí y disfruta de tus estadísticas!',
    ],
    dropPrompt: 'Suelta aquí tu archivo ZIP o JSON',
    dropHint: 'TikTok → Configuración → Privacidad → Descargar datos',
    analyzeBtn: '🔍 Analizar',
    analyzingBtn: '⏳ Analizando...',
    privacyNote:
      'Tu archivo se procesa únicamente para generar tus resultados. No vendemos, compartimos ni utilizamos los datos subidos con fines publicitarios.',
    howToLink: '¿No tienes tus datos? Aprende cómo descargarlos ↓',
    selectFileError: 'Por favor, selecciona un archivo',
    fileTypeError: 'Por favor, selecciona un archivo ZIP o JSON',
    genericError: 'Se produjo un error al procesar el archivo',
    jsonNotFound: 'Archivo JSON no encontrado en el archivo comprimido',
    progress: {
      reading: 'Leyendo el archivo...',
      extracting: 'Extrayendo el archivo ZIP...',
      readingFile: 'Leyendo {name}...',
      parsing: 'Analizando el JSON...',
      analyzing: 'Analizando los datos...',
      processing: 'Procesando los datos...',
    },
    results: {
      yourStats: '🎰 Tus estadísticas',
      videosWatched: 'Videos vistos',
      hoursOnTikTok: 'Horas en TikTok',
      daysOfWatching: 'Días de visualización',
      yourRank: 'Tu rango en TikTok',
      followers: 'Seguidores',
      following: 'Siguiendo',
      interests: 'Intereses',
      whenActive: '⏰ Cuándo estás más activo',
      peakHour: 'Hora pico',
      mostActiveDay: 'Día más activo',
      firstWatch: 'Primera visualización',
      lastWatch: 'Última visualización',
      engagement: '❤️ Interacción',
      videosLiked: 'Videos que te gustaron',
      favorites: 'Favoritos',
      comments: 'Comentarios',
      shares: 'Compartidos',
      activityByYear: '📅 Actividad por año',
      year: 'Año',
      videos: 'videos',
      mostActiveMonth: 'Mes más activo',
      avgPerDayPrefix: 'Promedio',
      avgPerDaySuffix: 'videos por día',
      collections: '📂 Tus colecciones',
      favoritesTitle: '⭐ Favoritos',
      favoriteSounds: 'Sonidos favoritos',
      favoriteEffects: 'Efectos favoritos',
      favoriteHashtags: 'Hashtags favoritos',
      topSearches: '🔍 Búsquedas principales',
      totalSearches: 'Total de búsquedas',
      shareDestinations: '📤 Destinos de los compartidos',
      yourComments: '💭 Tus comentarios',
      totalComments: 'Total de comentarios',
      avgChars: 'promedio de {n} caracteres',
      messages: '💬 Mensajes',
      chats: 'Chats',
      messagesLabel: 'Mensajes',
      sent: 'Enviados',
      received: 'Recibidos',
      topChats: 'Chats principales:',
      recentFollowers: '👥 Seguidores recientes',
      devicesNetworks: '📱 Dispositivos y redes',
      totalLogins: 'Total de inicios de sesión',
      devices: 'Dispositivos',
      networks: 'Redes',
      tiktokLive: '🔴 TikTok Live',
      livesWatched: 'Transmisiones en vivo vistas',
      liveComments: 'Comentarios en vivo',
      blocked: '🚫 Bloqueados',
      messagesCountSuffix: 'mensajes',
    },
  },

  example: {
    title: 'Ejemplo de TikTok Wrapped',
    subtitle: 'Un ejemplo completo y de aspecto real, sin necesidad de subir nada',
    introText:
      'Esta página muestra exactamente lo que obtienes de [[home:TikTok Wrapped]] tras analizar una exportación de datos de TikTok, sin subir nada. Cada cifra que aparece a continuación pertenece a una cuenta de muestra ficticia y es solo a modo ilustrativo. Cuando [[analyze:analizas tu propia exportación]], el mismo desglose se genera de forma privada en tu navegador a partir de tu archivo real. TikTok Wrapped es una herramienta independiente y no oficial, y no está afiliada ni respaldada por TikTok ni ByteDance Ltd.',
    rankExplanation:
      'Tu rango se basa en el tiempo de visualización estimado. Las 408 horas de esta cuenta de muestra la sitúan en el nivel «Main Character»: hay 16 rangos en total, desde «NPC Energy» hasta el más alto, «No Life Speedrun WR».',
    ctaTitle: '🎬 ¿Listo para ver el tuyo?',
    ctaDescription:
      'Tu TikTok Wrapped real se genera por completo en tu navegador a partir de la exportación de tus propios datos: tu archivo nunca sale de tu dispositivo.',
    ctaButton: 'Analiza tus datos de TikTok →',
    ctaLearn: '¿Es la primera vez que exportas datos? [[blog:Aprende cómo descargar tus datos de TikTok ↗]]',
    sample: {
      displayName: 'Usuario de muestra',
      interests: ['Comedia', 'Cocina', 'Viajes', 'Fitness', 'Música'],
      activeDay: 'Domingo',
      activeMonth: 'Noviembre de 2024',
      firstWatch: '4 mar 2022',
      lastWatch: '14 dic 2025',
      searches: [
        'recetas fáciles para la cena',
        'entrenamiento de maratón',
        'trucos de viaje',
        'comedia en vivo',
        'rutina de ejercicio en casa',
        'viajar por europa con poco dinero',
        'tutorial de guitarra',
        'ideas para preparar comidas',
        'consejos de productividad',
        'comida callejera',
      ],
      shareMethods: ['Mensaje directo', 'Copiar enlace', 'WhatsApp', 'Instagram'],
      networks: ['Wi-Fi', 'Datos móviles'],
    },
  },

  about: {
    title: 'Acerca de nosotros',
    paragraphs: [
      'TikTok Wrapped es un servicio en línea independiente diseñado para ayudar a los usuarios a comprender mejor los datos de su actividad personal en TikTok.',
      'TikTok permite a los usuarios descargar una exportación oficial de datos que contiene información sobre su actividad en la plataforma. Aunque estos datos pertenecen al usuario, suelen entregarse en un formato en bruto y sin estructurar que resulta difícil de interpretar. TikTok Wrapped ofrece herramientas que organizan estos datos y los presentan de forma clara, legible y fácil de usar.',
      'El sitio web permite a los usuarios subir la exportación de sus propios datos de TikTok y recibir información automatizada basada únicamente en ese archivo. El servicio se centra en el resumen, la visualización y el análisis general de los patrones de uso para ayudar a los usuarios a comprender mejor su comportamiento digital.',
      'TikTok Wrapped no crea cuentas, no requiere registro y no ofrece funciones de redes sociales ni de alojamiento de contenido. El sitio web existe únicamente como una herramienta informativa que procesa los archivos proporcionados por el usuario a petición de este.',
      'Nuestro objetivo es ofrecer una experiencia sencilla, transparente y centrada en la privacidad. El sitio web es de uso gratuito y se financia con publicidad; consulta nuestra [[privacy:Política de Privacidad]] para saber cómo funcionan las cookies y los anuncios.',
      'TikTok Wrapped está operado por AffSquad y puedes contactarnos en [[email:hello@ttwrapper.com]]. Es una herramienta independiente y no oficial, y no está afiliada, respaldada ni conectada con TikTok ni ByteDance Ltd.',
    ],
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: '¿Qué es TikTok Wrapped?', a: 'TikTok Wrapped es una herramienta en línea que ayuda a los usuarios a analizar y comprender mejor su actividad personal en TikTok usando la exportación oficial de sus datos de TikTok.' },
      { q: '¿Cómo obtengo la exportación de mis datos de TikTok?', a: 'Puedes solicitar y descargar la exportación de tus datos desde la configuración de TikTok (Datos / Privacidad). Una vez que recibas el archivo ZIP de TikTok, podrás subirlo a TikTok Wrapped.' },
      { q: '¿Almacenan el archivo ZIP que subo?', a: 'Los archivos se procesan únicamente para generar la información que solicitas. No almacenamos ni vendemos los datos subidos y no los utilizamos para personalizar anuncios.' },
      { q: '¿TikTok Wrapped está afiliado a TikTok?', a: 'No. TikTok Wrapped es un servicio independiente y no está afiliado ni respaldado por TikTok ni ByteDance.' },
      { q: '¿TikTok Wrapped es de uso gratuito?', a: 'La funcionalidad principal del sitio web está disponible sin pago alguno. El sitio puede mostrar anuncios para cubrir los costes continuos de desarrollo y alojamiento.' },
    ],
  },

  contact: {
    title: 'Contáctanos',
    intro:
      'Si tienes preguntas sobre TikTok Wrapped, nuestro sitio web o cómo funciona el servicio, puedes contactarnos a través de la información de contacto que se indica a continuación.',
    welcomeTitle: 'Damos la bienvenida a consultas relacionadas con:',
    welcomeItems: [
      'preguntas generales sobre la plataforma,',
      'privacidad y tratamiento de datos,',
      'problemas técnicos o comentarios,',
      'asuntos legales o relacionados con las políticas.',
    ],
    howToTitle: 'Cómo contactarnos',
    emailLabel: 'Correo electrónico:',
    responseNote: 'Nuestro objetivo es responder a todas las consultas legítimas en un plazo de 2 a 3 días hábiles.',
    aboutTitle: 'Sobre la comunicación',
    aboutText1:
      'TikTok Wrapped es un servicio en línea independiente operado por AffSquad, centrado en analizar las exportaciones de datos de TikTok proporcionadas por los usuarios. No está afiliado, respaldado ni conectado con TikTok ni ByteDance Ltd. No ofrecemos atención al cliente a través de redes sociales y, por el momento, no proporcionamos asistencia telefónica.',
    aboutText2:
      'Por favor, no envíes información personal sensible por correo electrónico a menos que sea necesario para atender tu solicitud.',
  },

  privacy: {
    title: 'Política de Privacidad',
    lastUpdatedLabel: 'Última actualización:',
    lastUpdatedDate: '20 de junio de 2026',
    intro:
      'Esta Política de Privacidad explica cómo TikTok Wrapped («TikTok Wrapped», «nosotros», «nos») recopila, utiliza y protege la información cuando visitas ttwrapper.com. TikTok Wrapped es una herramienta independiente y no oficial, y no está afiliada, respaldada ni conectada con TikTok ni ByteDance Ltd.',
    cookieTable: {
      providerHeader: 'Proveedor',
      purposeHeader: 'Finalidad',
      typeHeader: 'Tipo',
      rows: [
        { provider: 'TikTok Wrapped', purpose: 'Recuerda tu elección sobre el consentimiento de cookies', type: 'Esencial' },
        { provider: 'Google Tag Manager / Analytics', purpose: 'Estadísticas de uso agregadas y anónimas', type: 'Analítica (requiere consentimiento)' },
        { provider: 'Google AdSense / DoubleClick', purpose: 'Publicar y medir anuncios, incluidos anuncios personalizados', type: 'Publicidad (requiere consentimiento)' },
      ],
    },
    sections: [
      { title: '1. Quiénes somos (responsable del tratamiento)', paragraphs: ['TikTok Wrapped está operado por AffSquad, el responsable del tratamiento de los datos de este sitio web. Si tienes alguna pregunta sobre esta política o sobre cómo se tratan tus datos, puedes contactarnos en [[email:hello@ttwrapper.com]] o a través de nuestra página de [[contact:Contacto]].'] },
      { title: '2. Los datos de TikTok que subes', paragraphs: ['Cuando utilizas el analizador, la exportación de tus datos de TikTok (ZIP o JSON) se lee y procesa íntegramente dentro de tu propio navegador. El archivo no se sube ni se almacena en nuestros servidores, y no creamos perfiles ni bases de datos a partir de él. El análisis existe únicamente en la pestaña de tu navegador y desaparece cuando cierras o actualizas la página.', 'No requerimos la creación de una cuenta, el inicio de sesión ni la identificación personal para usar el analizador.'] },
      { title: '3. Información recopilada automáticamente', paragraphs: ['Como en la mayoría de los sitios web, cuando visitas ttwrapper.com es posible que se recopile cierta información técnica mediante cookies y tecnologías similares, tanto por nuestra parte como por parte de proveedores externos (como Google), incluyendo:'], list: ['tipo de dispositivo y navegador, tamaño de pantalla y sistema operativo;', 'dirección IP (utilizada para estimar la ubicación general y por motivos de seguridad);', 'páginas visitadas, URL de referencia y eventos de interacción;', 'identificadores de cookies utilizados para análisis y publicidad.'], afterList: ['Esta información se procesa únicamente cuando has dado tu consentimiento o cuando tenemos un interés legítimo, tal como se describe a continuación.'] },
      { title: '4. Cookies y tecnologías similares', paragraphs: ['Utilizamos cookies y tecnologías similares para funcionalidades esenciales, análisis y publicidad. Las cookies no esenciales (de análisis y publicidad) solo se activan después de que des tu consentimiento a través de nuestro banner de cookies. Las categorías principales son:'], hasCookieTable: true, afterList: ['Puedes cambiar o retirar tu consentimiento en cualquier momento mediante el enlace «Configuración de cookies» en el pie de página del sitio web.'] },
      { title: '5. Publicidad (Google AdSense)', paragraphs: ['Utilizamos Google AdSense para mostrar publicidad. Se aplican las siguientes divulgaciones:'], list: ['Los proveedores externos, incluido Google, utilizan cookies para publicar anuncios basados en tus visitas anteriores a este y a otros sitios web.', 'El uso de cookies publicitarias por parte de Google (incluida la cookie de DoubleClick) le permite a él y a sus socios mostrarte anuncios basados en tus visitas a este o a otros sitios de Internet.', 'Puedes rechazar la publicidad personalizada visitando [[adsSettings:Configuración de anuncios de Google]].', 'Puedes rechazar el uso de cookies para publicidad personalizada por parte de algunos proveedores externos en [[aboutAds:aboutads.info/choices]] o [[yourChoices:youronlinechoices.eu]].', 'Descubre cómo utiliza Google la información de los sitios que usan sus servicios en [[partnerSites:policies.google.com/technologies/partner-sites]].'], afterList: ['Si no consientes la publicidad personalizada, Google aún puede mostrarte anuncios no personalizados basados en el contexto general en lugar de tu historial de navegación.'] },
      { title: '6. Análisis', paragraphs: ['Utilizamos Google Tag Manager y los servicios de análisis de Google para comprender, de forma agregada, cómo utilizan el sitio los visitantes (por ejemplo, qué páginas son populares). Estos servicios pueden establecer cookies y procesar datos técnicos como tu dirección IP. Solo se cargan después de que des tu consentimiento a las cookies de análisis.'] },
      { title: '7. Gestión del consentimiento', paragraphs: ['Utilizamos Google Consent Mode v2. De forma predeterminada, el almacenamiento para publicidad y análisis está denegado, y las etiquetas relacionadas no se cargan hasta que tomes una decisión en nuestro banner de cookies. Puedes volver a abrir el banner y cambiar tu decisión en cualquier momento mediante el enlace «Configuración de cookies» del pie de página. A los visitantes del Espacio Económico Europeo, el Reino Unido y Suiza se les solicita el consentimiento antes de utilizar cualquier cookie no esencial.'] },
      { title: '8. Cómo utilizamos la información', paragraphs: [], list: ['para operar, mantener y proteger el sitio web;', 'para generar información a partir de los datos que decides analizar (en tu navegador);', 'para comprender el uso agregado y mejorar el servicio;', 'para mostrar publicidad que ayuda a financiar el servicio gratuito.'], afterList: ['No vendemos tu información personal y no utilizamos la exportación de tus datos de TikTok para publicidad ni para la elaboración de perfiles.'] },
      { title: '9. Compartición de datos', paragraphs: ['No compartimos con nadie los datos de TikTok que subes. Los datos técnicos y de cookies descritos anteriormente pueden ser procesados por nuestros proveedores de servicios, incluidos Google (publicidad y análisis) y nuestro proveedor de alojamiento (Vercel), cada uno actuando conforme a sus propias políticas de privacidad.'] },
      { title: '10. Conservación de los datos', paragraphs: ['La exportación de tus datos de TikTok nunca es almacenada por nosotros, por lo que no hay nada que conservar o eliminar por nuestra parte. Los datos agregados de análisis y publicidad en poder de nuestros proveedores se conservan según sus propios periodos de conservación (por ejemplo, la configuración de conservación estándar de Google).'] },
      { title: '11. Tus derechos de privacidad (RGPD/RGPD del Reino Unido)', paragraphs: ['Si te encuentras en el EEE o en el Reino Unido, tienes derecho a acceder, rectificar, suprimir, restringir u oponerte al tratamiento de tus datos personales, así como derecho a la portabilidad de los datos y a retirar tu consentimiento en cualquier momento. Para ejercer estos derechos, contáctanos en [[email:hello@ttwrapper.com]]. También tienes derecho a presentar una reclamación ante tu autoridad local de protección de datos.'] },
      { title: '12. Derechos de privacidad de California (CCPA/CPRA)', paragraphs: ['Los residentes de California tienen derecho a saber qué información personal se recopila, a solicitar su eliminación y a optar por no participar en la «venta» o el «intercambio» de información personal. No vendemos información personal. Para ejercer tus derechos, contáctanos en [[email:hello@ttwrapper.com]].'] },
      { title: '13. Transferencias internacionales de datos', paragraphs: ['Nuestros proveedores pueden procesar datos en servidores ubicados fuera de tu país, incluido Estados Unidos. Cuando sea necesario, dichas transferencias están protegidas por garantías adecuadas, como las cláusulas contractuales tipo de los proveedores.'] },
      { title: '14. Privacidad de los menores', paragraphs: ['TikTok Wrapped no está dirigido a menores de 13 años, y no recopilamos a sabiendas información personal de ellos. Los requisitos de edad mínima de TikTok se aplican a la obtención de una exportación de datos.'] },
      { title: '15. Cambios en esta política', paragraphs: ['Podemos actualizar esta Política de Privacidad de vez en cuando. Los cambios sustanciales se reflejarán actualizando la fecha de «Última actualización» en la parte superior de esta página.'] },
      { title: '16. Contacto', paragraphs: ['¿Preguntas sobre esta Política de Privacidad? Escribe a [[email:hello@ttwrapper.com]] o utiliza nuestra página de [[contact:Contacto]].'] },
    ],
  },

  terms: {
    title: 'Términos del Servicio',
    lastUpdatedLabel: 'Última actualización:',
    lastUpdatedDate: '20 de junio de 2026',
    intro:
      'Al acceder o utilizar TikTok Wrapped (ttwrapper.com), aceptas estos Términos del Servicio. Si no estás de acuerdo, te rogamos que no utilices el sitio web.',
    sections: [
      { title: 'Descripción del servicio', paragraphs: ['TikTok Wrapped ofrece una herramienta automatizada, basada en el navegador, para analizar la exportación de los datos de TikTok del propio usuario. El servicio es independiente y no está afiliado, respaldado ni conectado con TikTok ni ByteDance Ltd. Se proporciona «tal cual» y únicamente para uso informativo y personal.'] },
      { title: 'Responsabilidades del usuario', paragraphs: ['Los usuarios son responsables de:'], list: ['subir únicamente datos de su propiedad o que tengan derecho a usar,', 'asegurarse de que los archivos subidos provengan de la función oficial de exportación de datos de TikTok.'] },
      { title: 'Uso aceptable', paragraphs: ['Aceptas no:'], list: ['utilizar el servicio con fines ilícitos o en infracción de cualquier ley aplicable;', 'intentar interrumpir, sobrecargar, aplicar ingeniería inversa u obtener acceso no autorizado al servicio;', 'subir archivos que contengan malware o datos que no estés autorizado a usar.'] },
      { title: 'Sin garantías', paragraphs: ['Aunque nos esforzamos por ofrecer precisión, TikTok Wrapped no garantiza que toda la información sea completa, esté libre de errores o sea adecuada para decisiones específicas. Los resultados no deben considerarse asesoramiento profesional, legal ni financiero.'] },
      { title: 'Propiedad intelectual', paragraphs: ['El diseño del sitio web, la marca original, los textos y la lógica de software de TikTok Wrapped pertenecen a su operador, salvo que se indique lo contrario. «TikTok» y las marcas relacionadas son marcas comerciales de sus respectivos propietarios y se utilizan aquí únicamente de forma descriptiva; no reclamamos ningún derecho sobre ellas. Los usuarios conservan la plena propiedad de los datos que suben.'] },
      { title: 'Limitación de responsabilidad', paragraphs: ['TikTok Wrapped no se hace responsable de:'], list: ['las decisiones tomadas con base en la información generada,', 'la pérdida de datos causada por errores del usuario,', 'las interrupciones o la indisponibilidad temporal del servicio.'] },
      { title: 'Ley aplicable', paragraphs: ['Estos Términos se rigen e interpretan de conformidad con las leyes generales y de protección al consumidor aplicables, sin tener en cuenta los principios de conflicto de leyes. Cualquier controversia será resuelta por los tribunales competentes del lugar de establecimiento del operador.'] },
      { title: 'Cambios en estos Términos', paragraphs: ['Podemos actualizar estos Términos de vez en cuando. Los cambios entran en vigor cuando se publican, y la fecha de «Última actualización» anterior reflejará la versión más reciente. El uso continuado del sitio web tras los cambios constituye la aceptación de los Términos actualizados.'] },
      { title: 'Contacto', paragraphs: ['¿Preguntas sobre estos Términos? Escribe a [[email:hello@ttwrapper.com]] o utiliza nuestra página de [[contact:Contacto]].'] },
    ],
  },

  notFound: {
    title: '404 — Página no encontrada',
    text: 'Lo sentimos, no pudimos encontrar esa página. Es posible que se haya movido o que ya no exista. Aquí tienes algunos lugares para retomar donde lo dejaste:',
    links: { home: 'Inicio', analyze: 'Analiza tus datos', example: 'Ver un ejemplo', blog: 'Blog' },
  },

  blog: {
    backToBlog: '← Volver al blog',
    indexTitle: 'Blog',
    indexIntro:
      'Este blog existe para ayudar a los usuarios a comprender mejor los datos de TikTok, la privacidad y los patrones de uso personal mediante contenido claro, independiente y educativo. TikTok permite a los usuarios descargar sus datos de actividad, pero a menudo llegan en formatos técnicos y en bruto que pueden ser difíciles de interpretar. Nuestros artículos explican qué contienen estos datos, cómo están estructurados y cómo analizarlos de forma responsable usando tus propias exportaciones de datos. Tratamos temas como la descarga de datos de TikTok, la estructura de los archivos de datos, las consideraciones de privacidad, el análisis del comportamiento de uso y las diferencias entre la analítica de la plataforma y las herramientas de datos independientes.',
    faqHeading: 'Preguntas frecuentes',
  },

  meta: {
    home: {
      title: 'TikTok Wrapped — Estadísticas y resumen gratis',
      description:
        'Descubre tu TikTok Wrapped: tiempo de visualización, búsquedas principales, creadores favoritos y un divertido rango de personalidad, generado desde la exportación de tus datos de TikTok. Gratis, privado y sin registro: tu archivo nunca sale de tu navegador. Herramienta no oficial.',
    },
    analyze: {
      title: 'Analiza la exportación de tus datos de TikTok — Sube y obtén tus estadísticas',
      description:
        'Sube la exportación oficial de tus datos de TikTok (ZIP o JSON) y consulta al instante tu tiempo de visualización, tus búsquedas principales, tus creadores favoritos, tus horas pico y un rango de personalidad. Se procesa de forma privada en tu navegador: no se sube nada a ningún servidor.',
    },
    example: {
      title: 'Ejemplo de TikTok Wrapped — Mira una muestra completa (sin subir nada)',
      description:
        'Mira exactamente lo que produce TikTok Wrapped a partir de una exportación de datos de TikTok: un ejemplo completo con tiempo de visualización, rango de personalidad, búsquedas principales, horas pico, interacción y estadísticas de dispositivos. Datos de muestra, sin necesidad de subir nada.',
    },
    about: {
      title: 'Acerca de nosotros - TikTok Wrapped',
      description:
        'Conoce TikTok Wrapped, un servicio independiente que te ayuda a entender los datos de tu actividad en TikTok. Centrado en la privacidad, gratuito y no afiliado a TikTok.',
    },
    contact: {
      title: 'Contáctanos - TikTok Wrapped',
      description:
        'Contacta con TikTok Wrapped para consultas sobre el servicio, la privacidad, problemas técnicos o asuntos legales. Correo electrónico: hello@ttwrapper.com',
    },
    privacy: {
      title: 'Política de Privacidad - TikTok Wrapped',
      description:
        'Cómo trata TikTok Wrapped tus datos: procesamiento en el navegador de tu exportación de TikTok, cookies, publicidad y análisis de Google AdSense, tus derechos según el RGPD/CCPA, conservación de datos y opciones de exclusión.',
    },
    terms: {
      title: 'Términos del Servicio - TikTok Wrapped',
      description:
        'Términos del Servicio de TikTok Wrapped: descripción del servicio, responsabilidades del usuario, uso aceptable, propiedad intelectual, exenciones de responsabilidad, ley aplicable y cambios en estos términos.',
    },
    blog: {
      title: 'Blog - TikTok Wrapped',
      description:
        'Lee guías y artículos sobre el análisis de datos de TikTok, la privacidad y cómo entender tu actividad en redes sociales.',
    },
    notFound: {
      title: 'Página no encontrada (404) - TikTok Wrapped',
      description:
        'No se pudo encontrar la página que buscas. Explora TikTok Wrapped: analiza la exportación de tus datos de TikTok, mira un ejemplo o lee nuestras guías.',
    },
  },
}
