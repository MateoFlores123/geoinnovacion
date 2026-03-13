/**
 * ============================================================
 *  ARCHIVO DE CONFIGURACIÓN DEL SITIO — GEOINNOVACIÓN
 * ============================================================
 *  Este archivo contiene TODO el contenido editable del sitio:
 *  textos, imágenes, colores, links, redes sociales, SEO, etc.
 *
 *  NO necesitas saber programación para editar este archivo.
 *  Solo cambia los valores entre comillas " " y guarda.
 * ============================================================
 */

export const siteConfig = {

  // ─── SEO & METADATOS ─────────────────────────────────────
  seo: {
    siteName: "GeoInnovación",
    title: "GeoInnovación — Energía, Hidrógeno e Innovación",
    description:
      "Exploramos oportunidades en transición energética, hidrógeno verde, realidad virtual, turismo, innovación y Big Data. ¿Tú las ves?",
    keywords: [
      "geoinnovacion",
      "hidrógeno verde",
      "transición energética",
      "innovación",
      "big data",
      "realidad virtual",
      "turismo sostenible",
      "reciclaje",
    ],
    siteUrl: "https://www.geoinnovacion.com",
    ogImage: "/images/og-image.jpg",
    locale: "es_ES",
    twitterHandle: "geoinnovacion",
  },

  // ─── COLORES PRINCIPALES ─────────────────────────────────
  colors: {
    navScrollBg: "rgba(10, 30, 20, 0.75)",
    bottomNavBg: "rgba(0, 0, 0, 0.60)",
    whatsappBtn: "#25D366",
    accent: "#7EC8A4",
    heroTitleColor: "#FFFFFF",
    heroTagColor: "#D4E8D0",
  },

  // ─── NAVEGACIÓN PRINCIPAL (NAV SUPERIOR) ─────────────────
  nav: {
    logo: "GEOINNOVACION",
    /** Imagen del logo — coloca el archivo en /public/images/ */
    logoImage: "/images/logo-geo.png",
    links: [
      { label: "Inicio",               href: "#inicio" },
      { label: "Transición Energética", href: "#transicion" },
      { label: "Economía Circular",     href: "#economia" },
      { label: "Turismo",               href: "#turismo" },
      { label: "Innovación",            href: "#innovacion" },
      { label: "Contacto",              href: "#contacto" },
    ],
    whatsapp: {
      label: "WhatsApp",
      href: "https://wa.me/34600000000",
    },
  },

  // ─── REDES SOCIALES (NAV INFERIOR) ───────────────────────
  social: {
    label: "Síguenos",
    links: [
      { name: "Facebook", href: "https://facebook.com/geoinnovacion",               icon: "facebook"  },
      { name: "LinkedIn", href: "https://linkedin.com/company/geoinnovacion",        icon: "linkedin"  },
      { name: "WhatsApp", href: "https://wa.me/51999000000",                         icon: "whatsapp"  },
    ],
  },

  // ─── SECCIÓN HERO ─────────────────────────────────────────
  hero: {
    backgroundImage: "/images/heroFondo.png",
    title: "I see only opportunities ! And you?",
    tags: [
      "Energy Transition",
      "Hydrogen",
      "Virtual Reality",
      "Innovation",
      "Tourism",
      "Big Data",
    ],
    personImage: "/images/person-hero.png",
    personAlt:   "Jean-Louis Gelot — Fundador de GeoInnovación",
    /** Nombre y ubicación que aparecen en la esquina inferior derecha del hero */
    personName:     "Jean-Louis Gelot",
    personLocation: "Arequipa — Perú",
  },

  // ─── SECCIÓN "OUR ADN" — Jean-Louis Gelot ───────────────
  diferentes: {
    /** Etiqueta de sección — aparece como tag pill encima del título */
    tagES: "NUESTRO ADN",
    tagEN: "OUR ADN",

    /** Nombre del protagonista — aparece como título grande */
    name: "Jean-Louis Gelot",

    /** Imagen fija que aparece a la derecha de la sección ADN */
    image:    "/images/jl-portrait.jpg",
    imageAlt: "Jean-Louis Gelot — GEOINNOVACION",

    /** Texto del botón CTA en el último slide */
    ctaLabelES: "Contactar",
    ctaLabelEN: "Contact",

    /**
     * ── Slides del carrusel ──
     * Cada slide = 1 párrafo / momento de la historia.
     * eyebrowES/EN  → etiqueta pequeña encima del heading (p.ej. "El Fundador · 2018")
     * headingES/EN  → título del slide (usa \n para salto de línea)
     * paraES/EN     → párrafo de texto
     * img           → imagen en /public/images/
     * imgAlt        → texto alternativo de la imagen
     * cta           → true en el último slide para mostrar el botón de contacto
     */
    slides: [
      {
        eyebrowES: "El Fundador · 2018",
        eyebrowEN: "The Founder · 2018",
        headingES: "Nacido en Francia,\narraigado en Arequipa",
        headingEN: "Born in France,\nrooted in Arequipa",
        paraES:
          "GEOINNOVACION fue creada en 2018 en Arequipa, PERÚ, por Jean-Louis Gelot, ingeniero mecánico y geofísico francés con más de 45 años de experiencia en geociencias, minería, hidrocarburos y exploración de aguas subterráneas.",
        paraEN:
          "GEOINNOVACION was created in 2018 in Arequipa, PERU by Jean-Louis Gelot, a French mechanical and geophysical engineer with 45+ years of experience in geosciences, mining, hydrocarbons and underground water exploration, with a focus on related software solutions.",
        img:    "/images/jl-01.jpg",
        imgAlt: "Jean-Louis Gelot — fundador de GEOINNOVACION",
      },
      {
        eyebrowES: "Experiencia · 45+ años",
        eyebrowEN: "Experience · 45+ years",
        headingES: "Geociencias &\nSoluciones de Software",
        headingEN: "Geosciences &\nSoftware Solutions",
        paraES:
          "A lo largo de su carrera internacional, Jean-Louis trabajó en más de 20 países y se especializó en soluciones de software para la exploración geológica, minera y de hidrocarburos. Su red global le permite traer tecnología de punta a la región de Arequipa.",
        paraEN:
          "Throughout his international career, Jean-Louis worked in more than 20 countries and specialised in software solutions for geological, mining and hydrocarbon exploration. His global network allows him to bring cutting-edge technology to the Arequipa region.",
        img:    "/images/jl-02.jpg",
        imgAlt: "Jean-Louis trabajando en campo geológico",
      },
      {
        eyebrowES: "Innovación · Arequipa",
        eyebrowEN: "Innovation · Arequipa",
        headingES: "Actor clave en el\necosistema regional",
        headingEN: "A key actor in the\nregional ecosystem",
        paraES:
          "Gracias a su experiencia e influencia internacional, Jean-Louis es un actor clave en la región de Arequipa, estimulando la innovación y el emprendimiento, y representando a inversores internacionales que buscan llevar soluciones a los desafíos regionales.",
        paraEN:
          "Thanks to his experience and international network, Jean-Louis is a key actor in the Arequipa region, stimulating innovation and entrepreneurship and representing international investors bringing solutions to regional challenges.",
        img:    "/images/jl-03.jpg",
        imgAlt: "Jean-Louis en evento de innovación en Arequipa",
      },
      {
        eyebrowES: "Turismo · Inversión",
        eyebrowEN: "Tourism · Investment",
        headingES: "Hotel Boutique &\nMotorcycle Tours",
        headingEN: "Boutique Hotel &\nMotorcycle Tours",
        paraES:
          "Jean-Louis también es inversor en turismo: es cofundador del Hotel Boutique Villa Elisa (villaelisahb.com) y creador de Vintage Rides Andes (vrandes.travel), una agencia de tours en moto por Sudamérica.",
        paraEN:
          "Jean-Louis is also an investor in tourism: co-founder of Hotel Boutique Villa Elisa (villaelisahb.com) and creator of Vintage Rides Andes (vrandes.travel), a motorcycle tour agency offering tours and raids across South America.",
        img:    "/images/jl-04.jpg",
        imgAlt: "Villa Elisa y Vintage Rides Andes",
      },
      {
        eyebrowES: "Conectar",
        eyebrowEN: "Connect",
        headingES: "¿Quieres conectar\ncon Jean-Louis?",
        headingEN: "Want to connect\nwith Jean-Louis?",
        paraES:
          "Si tienes un proyecto de innovación, una oportunidad de inversión o simplemente quieres conocer más sobre el ecosistema de Arequipa, Jean-Louis está disponible para conversar.",
        paraEN:
          "Whether you have an innovation project, an investment opportunity, or simply want to learn more about the Arequipa ecosystem — Jean-Louis is happy to connect.",
        img:    "/images/jl-05.jpg",
        imgAlt: "Jean-Louis Gelot — contacto",
        cta:    true,
      },
    ],
  },


  // ─── SECCIÓN DE SERVICIOS (4 bloques) ────────────────────
  // Cada servicio tiene un array `carouselImages` con las fotos
  // que aparecen en el carrusel de esa sección.
  // Para cambiar imágenes solo edita aquí — no toques los componentes.
  servicios: [
    {
      id: "economia",
      gradientFrom: "#5BC8C8",
      gradientTo:   "#A8E6E6",
      /** Imágenes del carrusel — añade o quita objetos libremente */
      carouselImages: [
        { src: "/images/servicio-reciclaje.jpg",  alt: "Tecnología RUBBERJET",          captionES: "RUBBERJET Technology",       captionEN: "RUBBERJET Technology" },
        { src: "/images/economia-02.jpg",          alt: "Proceso de reciclaje OTR",       captionES: "Reciclaje 100% con agua",    captionEN: "100% water recycling" },
        { src: "/images/economia-03.jpg",          alt: "Polvo de caucho reciclado",      captionES: "Polvo reutilizable",         captionEN: "Reusable powder" },
      ],
    },
    {
      id: "transicion",
      gradientFrom: "#4AADAD",
      gradientTo:   "#90D8D8",
      carouselImages: [
        {
          src: "/images/transicion-01.jpg",
          alt: "Junta de actores para la transición energética en Arequipa",
          captionES: "Junta regional — Transición Energética",
          captionEN: "Regional meeting — Energy Transition",
        },
        {
          src: "/images/transicion-02.jpg",
          alt: "Jean-Louis Gelot en la Presidencia del Consejo de Ministros del Perú",
          captionES: "Presidencia del Consejo de Ministros — Lima",
          captionEN: "Presidency of the Council of Ministers — Lima",
        },
        {
          src: "/images/transicion-03.jpg",
          alt: "Reunión de trabajo en el desierto de Arequipa para proyecto de hidrógeno verde",
          captionES: "Reunión en el desierto — Arequipa",
          captionEN: "Desert meeting — Arequipa",
        },
        {
          src: "/images/transicion-04.jpg",
          alt: "Maquinaria de excavación en zona minera — infraestructura energética Arequipa",
          captionES: "Infraestructura minera — Arequipa",
          captionEN: "Mining infrastructure — Arequipa",
        },
        {
          src: "/images/transicion-05.jpg",
          alt: "Reunión de stakeholders para la transición energética regional",
          captionES: "Reunión de stakeholders — Energía",
          captionEN: "Stakeholders meeting — Energy",
        },
        {
          src: "/images/transicion-06.jpg",
          alt: "¿Cuál es la transición energética que el Perú y Arequipa requieren? — Conferencia GEOINNOVACION",
          captionES: "¿Cuál es la transición energética que el Perú y Arequipa requieren?",
          captionEN: "What energy transition do Peru and Arequipa need?",
        },
      ],
    },
    {
      id: "turismo",
      gradientFrom: "#3D9E9E",
      gradientTo:   "#7ECECE",
      /** Villa Elisa: 2 imágenes | Vintage Rides Andes: 2 imágenes */
      villaImages: [
        { src: "/images/villa-elisa-01.jpg", alt: "Hotel Boutique Villa Elisa — fachada exterior, Arequipa Perú", captionES: "Hotel Boutique Villa Elisa", captionEN: "Hotel Boutique Villa Elisa" },
        { src: "/images/villa-elisa-02.jpg", alt: "Hotel Boutique Villa Elisa — habitación interior, Arequipa",   captionES: "Villa Elisa — Habitaciones", captionEN: "Villa Elisa — Rooms" },
      ],
      vraImages: [
        { src: "/images/vra-01.jpg", alt: "Vintage Rides Andes — tour en moto por los Andes peruanos",         captionES: "Vintage Rides Andes",              captionEN: "Vintage Rides Andes" },
        { src: "/images/vra-02.jpg", alt: "Vintage Rides Andes — paisaje andino en moto, Arequipa Perú",       captionES: "Vintage Rides Andes — Los Andes", captionEN: "Vintage Rides Andes — The Andes" },
      ],
    },
    {
      id: "innovacion",
      gradientFrom: "#5BC8C8",
      gradientTo:   "#A8E6E6",
      carouselImages: [
        { src: "/images/servicio-innovacion.jpg", alt: "GEOINNOVACION — Arequipa",               captionES: "GEOINNOVACION — Arequipa",           captionEN: "GEOINNOVACION — Arequipa" },
        { src: "/images/innovacion-02.jpg",        alt: "MIRA — Mesa de Innovación Regional",     captionES: "MIRA 2019",                          captionEN: "MIRA 2019" },
        { src: "/images/innovacion-03.jpg",        alt: "Conferencia internacional",              captionES: "Conferencias internacionales",        captionEN: "International conferences" },
      ],
    },
  ],


  // ─── SECCIÓN CONTACTO ────────────────────────────────────
  contacto: {
    /** Etiqueta pequeña encima del título */
    label: "CONTÁCTANOS",
    /** Título principal */
    title: "Hablemos de tu próxima oportunidad",
    /** Subtítulo */
    subtitle:
      "Estamos aquí para ayudarte a transformar ideas en soluciones reales. Escríbenos y te respondemos en menos de 24 horas.",

    /** Datos de contacto directo */
    info: [
      {
        icon: "mail",
        label: "Email",
        value: "info@geoinnovacion.com",
        href:  "mailto:info@geoinnovacion.com",
      },
      {
        icon: "phone",
        label: "Teléfono",
        value: "+34 600 000 000",
        href:  "tel:+34600000000",
      },
      {
        icon: "map",
        label: "Ubicación",
        value: "Madrid, España",
        href:  "https://maps.google.com",
      },
    ],

    /** Botón de WhatsApp directo */
    whatsapp: {
      label: "Escríbenos por WhatsApp",
      href:  "https://wa.me/34600000000",
    },

    /** Textos del formulario */
    form: {
      namePlaceholder:    "Tu nombre completo",
      emailPlaceholder:   "Tu correo electrónico",
      subjectPlaceholder: "Asunto",
      messagePlaceholder: "Cuéntanos sobre la aventura que tienes en mente: qué solución te interesa, cuándo planeas iniciar, cuántas personas...",
      submitLabel:        "Enviar mensaje",
    },
  },


  // ─── FOOTER ───────────────────────────────────────────────
  footer: {
    brand:  "GEOINNOVACION",
    rights: "Todos los derechos reservados.",
    legal: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos",   href: "/terminos"   },
    ],
  },

};