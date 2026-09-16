import type { PostContent } from '@/lib/blog/types'

export const content: PostContent = {
  title: "TikTok Wrapped 2026: cómo conseguir tu resumen del año",
  description:
    "¿Buscas tu TikTok Wrapped 2026? TikTok no siempre lo saca. Aquí tienes cómo armar el tuyo a partir de tu exportación de datos: tiempo de visualización, búsquedas top y tu ranking.",
  intro:
    "Cada diciembre la misma pregunta se apodera del For You de todo el mundo: ¿dónde está mi TikTok Wrapped? Y cada año la respuesta decepciona un poco. TikTok nunca se ha tomado su resumen del año tan en serio como Spotify. Algunos años aparece, otros simplemente no. Así que si ya andas a la caza de tu TikTok Wrapped 2026, aquí va la situación real, más el truco que de verdad te consigue los números.",
  blocks: [
    { type: 'h2', text: "¿Existe un TikTok Wrapped oficial para 2026?" },
    {
      type: 'p',
      text: "Respuesta corta: por ahora, no han anunciado nada. Y la verdad, cuadra. TikTok sacó un resumen en condiciones de 2020 a 2022, se lo saltó por completo en 2023, y desde entonces va y viene. Incluso los años en que aparece, suele llegar a mediados de diciembre y le va cayendo a la gente por oleadas, no de golpe. Si llevas días refrescando la app esperando que caiga un resumen animado por todo lo alto, puede que estés esperando un buen rato.",
    },
    {
      type: 'p',
      text: "Lo que saca un poco de quicio es que TikTok obviamente tiene los datos. Tu historial de visualización, cada búsqueda, los sonidos que guardaste a las 2am, todo está ahí en sus servidores. Lo que pasa es que la app no siempre se molesta en devolvértelo de una forma que te apetezca mirar.",
    },
    { type: 'h2', text: "El truco: arma el tuyo a partir de tu exportación de datos" },
    {
      type: 'p',
      text: "Aquí está la parte que a casi todo el mundo se le escapa. En realidad no necesitas que TikTok te haga un Wrapped. Puedes sacar los datos en bruto tú mismo y convertirlos en el mismo tipo de resumen, el día que te dé la gana. Esa es precisamente la razón de que exista [[home:TikTok Wrapped]].",
    },
    {
      type: 'p',
      text: "Funciona con la exportación de datos oficial que TikTok deja descargar a cualquier usuario. Solicitas el archivo, te llega como un JSON (o un ZIP con un JSON metido dentro), y la herramienta lo lee y hace las cuentas: total de vídeos vistos, horas perdidas, tu franja del día más ajetreada, las búsquedas que quizá preferirías olvidar, y un ranking de personalidad según lo metido que estás. Sin cuenta, sin contraseña, sin enviar nada a ningún servidor. El archivo se lee ahí mismo, en tu navegador.",
    },
    {
      type: 'p',
      text: "Conseguir el archivo es rápido, pero conlleva su espera. Este es el proceso entero:",
    },
    {
      type: 'ol',
      items: [
        "En TikTok, abre tu Perfil, toca el menú (☰) y ve a 'Settings and privacy'.",
        "En 'Account', toca 'Download your data'.",
        "Elige JSON como formato. Esto importa, porque TXT y HTML no funcionan con la mayoría de las herramientas de análisis. Luego selecciona 'All data' y toca 'Request data'.",
        "Espera. TikTok suele tardar desde unas horas hasta un par de días en montar el archivo, y una vez listo queda disponible para descargar durante unos días.",
      ],
    },
    {
      type: 'p',
      text: "Cuando llegue el archivo, llévalo [[analyze:al analizador]] y suéltalo ahí. Y si prefieres ver qué te vas a encontrar antes de meterte en todo el lío, hay un [[example:resumen de ejemplo completo]] hecho con datos inventados con el que puedes trastear primero.",
    },
    { type: 'h2', text: "Lo que tu resumen de 2026 te muestra de verdad" },
    {
      type: 'p',
      text: "Es mucho más que un contador de tiempo de visualización. Te salen tus búsquedas top ordenadas por las veces que las buscaste, las horas en que estás más activo (el tramo de la madrugada suele ser una sorpresa desagradable), tus años más ajetreados alineados uno al lado del otro, tus likes, comentarios y compartidos, tus sonidos y creadores favoritos, y un ranking que sin hacer ruido te coloca en algún punto entre espectador ocasional y, bueno, esto es un problema. Es justo lo que te enseñaría un Wrapped de verdad. Solo que lo estás generando tú a tu manera en lugar de esperar a que lo haga la app.",
    },
    { type: 'h2', text: "Por qué Spotify se sale con esto y TikTok no" },
    {
      type: 'p',
      text: "Spotify convirtió el Wrapped en todo un acontecimiento. Es automático, está pulido, cae puntual, y durante una semana todo tu feed son los artistas top de los demás. TikTok nunca asumió ese compromiso. Parte de la razón es que un año de música es genuinamente más fácil de empaquetar que un feed infinito y sin forma. Y otra parte, uno sospecha, es que TikTok prefiere que sigas deslizando antes que pararte a contar cuánto has deslizado. Sea como sea, ese hueco es exactamente el motivo de que existan las herramientas de terceros. Si quieres la diferencia práctica entre un resumen como este y los números de creador que trae TikTok, [[/blog/tiktok-wrapped-vs-tiktok-analytics-whats-the-difference:esta comparación]] lo desglosa.",
    },
    { type: 'h2', text: "Una cosa que merece la pena tomarse con calma: la privacidad" },
    {
      type: 'p',
      text: "Tu exportación de datos es personal. Según lo que incluyas, puede contener mensajes, historial de inicios de sesión, de todo. Así que importa de verdad dónde la subes. Con TikTok Wrapped el archivo no sale nunca de tu dispositivo; todo ocurre localmente en el navegador y no se guarda nada. Y si estás sopesando otras herramientas también, [[/blog/is-it-safe-to-upload-tiktok-data-online:esta lectura rápida sobre subir datos de TikTok de forma segura]] bien vale dos minutos antes de entregarle tu archivo a nadie.",
    },
    {
      type: 'p',
      text: "Así que no, probablemente no venga en camino ningún reluciente TikTok Wrapped 2026 oficial a salvar el día. Pero los datos son tuyos, y exprimir tu resumen del año a partir de ellos son unos cinco minutos de trabajo real. [[analyze:Consigue tu exportación y mira tus números]] cuando estés listo para verlos.",
    },
  ],
  faq: [
    {
      q: "¿Existe un TikTok Wrapped oficial para 2026?",
      a: "No han anunciado ninguno. TikTok hizo uno de 2020 a 2022, se saltó 2023, y desde entonces ha sido irregular. Cuando aparece, suele ser sobre mediados de diciembre y va saliendo poco a poco.",
    },
    {
      q: "¿Cuándo sale el TikTok Wrapped?",
      a: "Históricamente entre mediados y finales de diciembre, cuando llega a salir. Como no está garantizado, mucha gente usa una herramienta de exportación de datos para conseguir su resumen a su propio ritmo en lugar de esperar.",
    },
    {
      q: "¿Puedo conseguir mi TikTok Wrapped 2026 ahora mismo?",
      a: "Sí. No tienes que esperar a TikTok. Solicita tu exportación de datos (elige el formato JSON), luego súbela a una herramienta como TikTok Wrapped y tendrás tus estadísticas y tu ranking en unos segundos.",
    },
    {
      q: "¿Necesito una cuenta especial o pagar por ello?",
      a: "No. Cualquier cuenta de TikTok puede solicitar una exportación de datos, y analizarla en TikTok Wrapped es gratis y sin iniciar sesión.",
    },
    {
      q: "¿Es seguro subir mis datos de TikTok?",
      a: "En TikTok Wrapped, tu archivo se procesa por completo en tu navegador y nunca se sube ni se almacena. Para las herramientas de terceros en general, conviene comprobar que procesen los datos localmente y que nunca te pidan tu contraseña de TikTok.",
    },
  ],
}
