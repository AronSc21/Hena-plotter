/* ============================================================
   DATOS DEL NEGOCIO — edita SOLO este archivo para cambiar
   nombre, teléfono, precios, textos y colores.
   Todo lo marcado "POR CONFIRMAR" debe validarse con el dueño.
   ============================================================ */
const HENA = {
  nombre: "Hena Plotter 2",
  whatsapp: "522281267261",            // POR CONFIRMAR (formato: 52 + 10 dígitos)
  telefono: "228 126 7261",            // POR CONFIRMAR
  correo: "henaplotter2@gmail.com",    // POR CONFIRMAR cuál publicar (otro: hena-plotter2@hotmail.com)
  direccion: "Av. Venustiano Carranza, col. Felipe Carrillo Puerto, C.P. 91080, Xalapa, Veracruz",
  referencia: "Entre las calles Comercio y Mártires del 7 de Enero",
  horario: [["Lunes a viernes", "8:00 a 20:00"], ["Sábado y domingo", "Cerrado (POR CONFIRMAR)"]],
  mapsUrl: "https://maps.app.goo.gl/2LwH5k2zWQ1V13UT7",
  mapsEmbed: "https://www.google.com/maps?q=Av.+Venustiano+Carranza+Felipe+Carrillo+Puerto+Xalapa+Veracruz&output=embed",
  facebook: "https://www.facebook.com/hena.dos.plotter",
  rating: { nota: "4.5", resenas: 127 },

  // Colores (tomados del logo, aproximados). Cambiarlos aquí cambia todo el sitio.
  colores: { rojo:"#E81820", naranja:"#F08020", oliva:"#A0A038", cafe:"#382810", cafeMedio:"#5B432A", plomo:"#606060", fondo:"#F2F2F3" },

  // Servicios (banner 2016, Facebook y reseñas). `wa` = mensaje prellenado.
  servicios: [
    { ico:"plano",  t:"Planos 90 × 60 y 120 × 90 cm", d:"Impresión en plotter de planos arquitectónicos y de ingeniería.", wa:"planos en gran formato" },
    { ico:"cartel", t:"Carteles", d:"En papel opalina o papel fotográfico de presentación.", wa:"un cartel" },
    { ico:"hoja",   t:"Carta, oficio y doble carta", d:"Documentos en general, láminas y trabajos escolares.", wa:"impresión en carta/oficio/doble carta" },
    { ico:"scan",   t:"Escaneo", d:"Documentos hasta doble carta. Planos: POR CONFIRMAR.", wa:"escaneo de documentos" },
    { ico:"rollo",  t:"Papeles especiales", d:"Bond, albanene (calca), opalina y fotográfico (POR CONFIRMAR cuáles siguen).", wa:"papel especial" },
    { ico:"sticker",t:"Adheribles", d:"Impresión en material adherible (según Facebook).", wa:"adheribles" },
    { ico:"cd",     t:"Portadas de carpetas y CDs", d:"Mencionado en reseñas. POR CONFIRMAR si sigue disponible.", wa:"portadas de carpeta o CD" }
  ],

  // Precios EDITABLES. Todos son DE EJEMPLO (POR CONFIRMAR). Pon null para "cotizar".
  papeles: ["Bond", "Albanene", "Opalina", "Fotográfico"],
  formatos: [
    { n:"Carta",        medida:"21.5 × 28 cm",  p:[3, null, 8, 12] },
    { n:"Oficio",       medida:"21.5 × 34 cm",  p:[4, null, 10, 14] },
    { n:"Doble carta",  medida:"28 × 43 cm",    p:[8, 25, 18, 28] },
    { n:"90 × 60 cm",   medida:"90 × 60 cm",    p:[25, 70, 60, 90] },
    { n:"120 × 90 cm",  medida:"120 × 90 cm",   p:[45, 110, 110, 160] }
  ],
  preciosSonEjemplo: true,

  pasos: [
    ["Envía tu archivo", "Por WhatsApp. Formatos: PDF, DWG y otros (POR CONFIRMAR)."],
    ["Recibe tu cotización", "Te confirmamos medida, papel y total."],
    ["Paga", "Formas de pago: POR CONFIRMAR."],
    ["Recoge en el local", "Tu impresión lista en Av. Venustiano Carranza."]
  ],
  clientes: [
    { t:"Estudiantes", d:"Planos y láminas desde una pieza. Pregunta por la tarifa de estudiante.", wa:"soy estudiante" },
    { t:"Arquitectos e ingenieros", d:"Impresión precisa y rápida para tus entregas.", wa:"soy arquitecto/ingeniero" },
    { t:"Constructoras", d:"Juegos de planos y volumen con varias impresoras.", wa:"tengo un proyecto de obra" },
    { t:"Negocios y dependencias", d:"Carteles y planos en tamaño grande.", wa:"soy negocio/dependencia" }
  ],
  porque: [
    ["Calidad de impresión", "Trazo limpio y colores fieles."],
    ["Precios accesibles", "Tarifa especial para estudiantes."],
    ["Rapidez", "Varias impresoras para no hacerte esperar."],
    ["Atención por WhatsApp", "Envías, pagas y recoges."]
  ],
  // Resumen de reseñas públicas de Google (pedir permiso al dueño antes de publicar)
  opiniones: [
    ["Buen precio y muy buena calidad de impresión.", "Cliente en Google"],
    ["Rápidos: tienen varias impresoras y no tardas.", "Cliente en Google"],
    ["Imprimen en bond, albanene y fotográfico. Mandas el archivo por WhatsApp y recoges.", "Cliente en Google"]
  ],
  nosotros: "Texto por escribir con el dueño: historia del negocio, años de servicio y su relación con HENA-Arquitectura (POR CONFIRMAR).",
  faq: [
    ["¿Qué formatos de archivo aceptan?", "PDF, DWG y otros. POR CONFIRMAR."],
    ["¿Cuál es el tamaño máximo?", "Hasta 120 × 90 cm según el banner. POR CONFIRMAR."],
    ["¿Imprimen desde una pieza?", "Sí, desde 1 pieza. POR CONFIRMAR."],
    ["¿Cuánto tardan?", "POR CONFIRMAR."],
    ["¿Hay tarifa de estudiante?", "Sí, pregunta por WhatsApp. POR CONFIRMAR."],
    ["¿Hacen envíos o doblan los planos?", "POR CONFIRMAR."]
  ],
  galeria: [ // Agrega aquí tus fotos (JPG/WebP) dentro de img/
    { src:"img/fachada.jpg", alt:"Fachada del local" },
    { src:"img/lona.jpg", alt:"Lona impresa afuera del local" }
  ]
};
