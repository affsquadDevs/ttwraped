import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "Cómo eliminar tus datos y cuenta de TikTok (paso a paso)",
  description:
    "Aprende la diferencia entre borrar los datos de TikTok, desactivar tu cuenta y eliminarla permanentemente, qué datos se conservan y por qué conviene exportar tus datos primero.",
  intro:
    "Eliminar tu cuenta de TikTok es permanente y suprime la mayor parte de tus datos, pero es una acción diferente a borrar el caché o simplemente desactivar la cuenta. Esta guía explica cada opción paso a paso y describe qué ocurre con tus datos después.",
  blocks: [
    {
      type: "p",
      text: "Hay muchas razones por las que alguien puede querer pulsar el botón «eliminar»: una limpieza de privacidad, un descanso de las redes sociales o un nuevo comienzo. Antes de hacer algo irreversible, conviene entender exactamente qué acción estás tomando y qué efecto tiene sobre tus datos.",
    },
    {
      type: "p",
      text: "Este artículo explica la diferencia entre borrar datos, desactivar la cuenta y eliminarla permanentemente, incluye un recorrido numerado para solicitar la eliminación, detalla qué conserva TikTok después y explica por qué deberías descargar una exportación final de tus datos primero.",
    },
    { type: "h2", text: "Borrar caché vs. desactivar vs. eliminar" },
    {
      type: "p",
      text: "Estas tres acciones se confunden con frecuencia, pero tienen efectos muy diferentes:",
    },
    {
      type: "ul",
      items: [
        "Borrar el caché o los datos elimina los archivos temporales almacenados en tu dispositivo. Tu cuenta, vídeos e historial permanecen intactos; solo liberas almacenamiento local y restableces algunos comportamientos de la aplicación.",
        "Desactivar oculta tu perfil y pone la cuenta en pausa sin borrarla. Es la primera etapa reversible que utiliza TikTok antes de la eliminación permanente; volver a iniciar sesión la cancela.",
        "Eliminar permanentemente suprime tu perfil, tus vídeos y la mayor parte de los datos asociados de TikTok transcurrido un período de gracia. Esta acción no se puede deshacer una vez que dicho período ha concluido.",
      ],
    },
    {
      type: "p",
      text: "Si solo quieres una aplicación más limpia o más espacio de almacenamiento, normalmente con borrar el caché es suficiente. La eliminación es para cuando quieres que tu presencia y tus datos desaparezcan por completo.",
    },
    { type: "h2", text: "Cómo borrar el caché de TikTok" },
    {
      type: "p",
      text: "Borrar el caché es la opción más ligera y un buen primer paso si todavía no estás listo para irte:",
    },
    {
      type: "ul",
      items: [
        "Abre TikTok y ve a tu Perfil.",
        "Pulsa el icono de menú y luego abre Configuración y privacidad.",
        "Selecciona Liberar espacio (a veces aparece bajo Caché y datos móviles).",
        "Pulsa Borrar junto a Caché.",
      ],
    },
    {
      type: "p",
      text: "Esto elimina únicamente archivos temporales. Tu cuenta, los vídeos guardados y el historial de reproducción no cambian.",
    },
    { type: "h2", text: "Descarga una exportación final de tus datos antes de eliminar" },
    {
      type: "p",
      text: "Este es el paso más importante y el que más fácil resulta olvidar. Una vez que tu cuenta se elimina permanentemente, ya no puedes solicitar una exportación de datos. La ventana para archivar tu actividad se cierra junto con la cuenta.",
    },
    {
      type: "p",
      text: "Una exportación final te permite conservar una copia personal de tu historial de reproducción, historial de búsquedas, registros de inicio de sesión y otras actividades. También puedes analizarla más adelante por reflexión o curiosidad.",
    },
    {
      type: "p",
      text: "Si nunca has solicitado una exportación, nuestra guía sobre [[/blog/how-to-download-analyze-tiktok-data:cómo descargar y analizar tus datos de TikTok]] explica el proceso de solicitud. Cuando el archivo esté listo, puedes procesarlo con [[analyze:TikTok Wrapped]] para convertir los registros en bruto en un resumen legible, o ver previamente cómo queda en la página de [[example:ejemplo wrapped]].",
    },
    { type: "h2", text: "Paso a paso: cómo solicitar la eliminación de la cuenta" },
    {
      type: "h3",
      text: "Paso 1: Haz una copia de seguridad de tus datos",
    },
    {
      type: "p",
      text: "Solicita y descarga la exportación de tus datos de TikTok, y guarda los vídeos que quieras conservar. Tras la eliminación, este contenido ya no se puede recuperar desde TikTok.",
    },
    {
      type: "h3",
      text: "Paso 2: Abre Configuración y privacidad",
    },
    {
      type: "p",
      text: "Ve a tu Perfil, pulsa el icono de menú en la esquina superior y abre Configuración y privacidad.",
    },
    {
      type: "h3",
      text: "Paso 3: Abre la configuración de la cuenta",
    },
    {
      type: "p",
      text: "Pulsa Cuenta y desplázate hasta encontrar Desactivar o eliminar cuenta.",
    },
    {
      type: "h3",
      text: "Paso 4: Elige eliminar y verifica",
    },
    {
      type: "p",
      text: "Selecciona Eliminar cuenta permanentemente y sigue los pasos de verificación. TikTok puede pedirte que confirmes con un código enviado a tu teléfono o correo electrónico.",
    },
    {
      type: "h3",
      text: "Paso 5: Confirma la eliminación",
    },
    {
      type: "p",
      text: "Lee el aviso en pantalla sobre el período de desactivación y confirma. Tu cuenta entra en un período de gracia antes de ser eliminada permanentemente.",
    },
    {
      type: "p",
      text: "Las etiquetas de los menús pueden variar ligeramente entre versiones de la aplicación y regiones, pero la ruta a través de Configuración y privacidad hasta Cuenta es la misma.",
    },
    { type: "h2", text: "Qué datos se conservan y durante cuánto tiempo" },
    {
      type: "p",
      text: "La eliminación no es inmediata. TikTok primero desactiva la cuenta durante un período de gracia, habitualmente en torno a 30 días. Si vuelves a iniciar sesión durante ese plazo, la eliminación se cancela y la cuenta se restaura.",
    },
    {
      type: "p",
      text: "Tras el período de gracia, tu perfil y la mayor parte del contenido asociado se eliminan permanentemente. Sin embargo, cierta información puede conservarse durante más tiempo:",
    },
    {
      type: "ul",
      items: [
        "Registros limitados conservados para cumplir obligaciones legales o resolver disputas.",
        "Información necesaria para prevenir fraudes o garantizar la seguridad de la plataforma.",
        "Datos ya compartidos públicamente o con otros usuarios que existen fuera de tu perfil.",
        "Copias en copias de seguridad del sistema, que pueden tardar más tiempo en eliminarse.",
      ],
    },
    {
      type: "p",
      text: "Los períodos de retención exactos se describen en la política de privacidad de TikTok y pueden cambiar con el tiempo. La conclusión práctica es que «permanente» no siempre significa «inmediato», y una pequeña cantidad de datos puede persistir por razones de cumplimiento normativo.",
    },
    { type: "h2", text: "Consideraciones de privacidad" },
    {
      type: "p",
      text: "Eliminar tu cuenta es un paso importante para tu privacidad, pero conviene tener en cuenta algunos detalles:",
    },
    {
      type: "ul",
      items: [
        "El contenido que otros han descargado, capturado en pantalla o republicado está fuera del control de TikTok y no se elimina al borrar tu cuenta.",
        "Los mensajes directos pueden seguir apareciendo en el lado del otro participante de la conversación.",
        "Las aplicaciones de terceros que conectaste a TikTok pueden conservar sus propias copias de los datos que autorizaste.",
        "La exportación de datos que descargaste es ahora tu responsabilidad almacenarla de forma segura.",
      ],
    },
    {
      type: "p",
      text: "Para saber más sobre cómo gestionar una exportación de forma responsable, consulta nuestra guía sobre si es [[/blog/is-it-safe-to-upload-tiktok-data-online:seguro subir datos de TikTok en línea]].",
    },
    { type: "h2", text: "Conclusión" },
    {
      type: "p",
      text: "Borrar el caché, desactivar y eliminar permanentemente son tres acciones distintas con consecuencias muy diferentes. Saber cuál estás eligiendo evita pérdidas de datos accidentales y sorpresas posteriores.",
    },
    {
      type: "p",
      text: "Si tu objetivo es eliminar la cuenta, descarga primero una exportación final de tus datos. Es la única forma de conservar un registro de tu historial en TikTok, y puedes seguir explorándolo después con [[home:TikTok Wrapped]] aunque la cuenta en sí haya desaparecido.",
    },
  ],
  faq: [
    {
      q: "¿Cuál es la diferencia entre borrar los datos de TikTok y eliminar tu cuenta?",
      a: "Borrar el caché o los datos solo elimina archivos temporales almacenados en tu dispositivo y mantiene tu cuenta activa. Eliminar tu cuenta suprime permanentemente tu perfil, tus vídeos y la mayor parte de los datos asociados de TikTok tras un período de desactivación.",
    },
    {
      q: "¿Cuánto tiempo tarda en eliminarse permanentemente una cuenta de TikTok?",
      a: "TikTok primero desactiva la cuenta durante un período de gracia, habitualmente en torno a 30 días. Si no vuelves a iniciar sesión durante ese plazo, la cuenta y la mayor parte de los datos asociados se eliminan permanentemente.",
    },
    {
      q: "¿Debería descargar mis datos de TikTok antes de eliminar mi cuenta?",
      a: "Sí. Una vez que tu cuenta se elimina permanentemente, ya no puedes solicitar una exportación de datos, por lo que descargar una copia final con antelación es la única forma de conservar un archivo personal de tu historial de actividad.",
    },
    {
      q: "¿Qué datos de TikTok se conservan después de la eliminación?",
      a: "La mayor parte del contenido del perfil se elimina, pero TikTok puede conservar información limitada durante un tiempo para cumplir obligaciones legales, prevenir fraudes o resolver disputas, tal como se describe en su política de privacidad. Las copias de seguridad también pueden tardar más tiempo en eliminarse.",
    },
    {
      q: "¿Puedo usar TikTok Wrapped después de eliminar mi cuenta?",
      a: "Sí, siempre que hayas descargado la exportación de tus datos de TikTok antes de eliminar la cuenta. TikTok Wrapped analiza el archivo exportado que subes, por lo que no necesita acceso a una cuenta activa de TikTok.",
    },
  ],
}
