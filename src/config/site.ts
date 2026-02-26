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
      { name: "Instagram", href: "https://instagram.com/geoinnovacion", icon: "instagram" },
      { name: "YouTube",   href: "https://youtube.com/@geoinnovacion",  icon: "youtube"   },
      { name: "Facebook",  href: "https://facebook.com/geoinnovacion",  icon: "facebook"  },
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

  // ─── SECCIÓN "LO QUE NOS HACE DIFERENTES" ────────────────
  diferentes: {
    /** Título de la sección (cabecera gris claro) */
    title: "LO QUE NOS HACE DIFERENTES",
    /** Subtítulo / cita debajo del título */
    subtitle:
      '"Impulsamos a las industrias con soluciones tecnológicas simples, accesibles y de alto impacto para capacitación, mantenimiento y transformación digital."',

    /** ── Slides del carrusel ──
     *  Puedes añadir o quitar objetos de este array.
     *  Cada slide tiene: brand, preTitle, title, description, bgColor, image, imageAlt
     */
    slides: [
      {
        id: "vr",
        /** Texto pequeño tipo logo arriba del panel */
        brand: "GEO🌍INNOVACION",
        /** Texto fino encima del título grande */
        preTitle: "Capacitación con",
        /** Título grande — se renderiza en fuente display grande */
        title: "Realidad Virtual",
        /** Descripción corta */
        description:
          "Aprende con experiencias virtuales creadas en minutos, sin necesidad de software complejo.",
        /** Color de fondo del panel izquierdo — prueba distintos colores */
        bgColor: "#5BC8C8",
        /** Imagen derecha — coloca el archivo en /public/images/ */
        image: "/images/slide-vr.jpg",
        imageAlt: "Persona usando casco de realidad virtual",
      },
      {
        id: "hydrogen",
        brand: "GEO🌍INNOVACION",
        preTitle: "Energía limpia con",
        title: "Hidrógeno Verde",
        description:
          "Soluciones de producción y almacenamiento de hidrógeno verde para industrias del futuro.",
        bgColor: "#4AADAD",
        image: "/images/slide-hydrogen.jpg",
        imageAlt: "Estación de hidrógeno verde",
      },
      {
        id: "bigdata",
        brand: "GEO🌍INNOVACION",
        preTitle: "Decisiones con",
        title: "Big Data",
        description:
          "Transforma tus datos en ventajas competitivas reales con herramientas accesibles para cualquier empresa.",
        bgColor: "#3D9E9E",
        image: "/images/slide-bigdata.jpg",
        imageAlt: "Visualización de datos en pantalla",
      },
      {
        id: "tourism",
        brand: "GEO🌍INNOVACION",
        preTitle: "Turismo del",
        title: "Futuro",
        description:
          "Experiencias inmersivas y sostenibles que conectan viajeros con destinos únicos alrededor del mundo.",
        bgColor: "#5BC8C8",
        image: "/images/slide-tourism.jpg",
        imageAlt: "Destino turístico innovador",
      },
    ],
  },


  // ─── SECCIÓN DE SERVICIOS (4 bloques) ────────────────────
  servicios: [
    {
      id: "economia",
      /** Etiqueta pequeña encima del título */
      label: "SECTION",
      /** Título grande */
      title: "ECONOMÍA CIRCULAR",
      /** Descripción */
      description:
        "Transformamos neumáticos fuera de uso en recursos de alto valor. Soluciones sostenibles para la industria del reciclaje con tecnología accesible y de impacto real.",
      /** Imagen derecha — coloca el archivo en /public/images/ */
      image: "/images/servicio-reciclaje.jpg",
      imageAlt: "Ilustración de reciclaje industrial y energía",
      /** Colores del degradado de fondo: de izquierda a derecha */
      gradientFrom: "#5BC8C8",
      gradientTo:   "#A8E6E6",
    },
    {
      id: "transicion",
      label: "SECTION",
      title: "TRANSICIÓN ENERGÉTICA",
      description:
        "Acompañamos a empresas e industrias en el camino hacia la descarbonización. Estrategias claras, tecnología probada y soluciones adaptadas a cada sector.",
      image: "/images/servicio-transicion.jpg",
      imageAlt: "Turbinas eólicas y paneles solares",
      gradientFrom: "#4AADAD",
      gradientTo:   "#90D8D8",
    },
    {
      id: "turismo",
      label: "SECTION",
      title: "TURISMO SOSTENIBLE",
      description:
        "Experiencias inmersivas y sostenibles que conectan viajeros con destinos únicos alrededor del mundo. La energía más limpia del planeta, ahora al alcance de tu empresa.",
      image: "/images/servicio-hidrogeno.jpg",
      imageAlt: "Moléculas de hidrógeno y estación de energía",
      gradientFrom: "#3D9E9E",
      gradientTo:   "#7ECECE",
    },
    {
      id: "innovacion",
      label: "SECTION",
      title: "INNOVACIÓN Y EMPRENDIMIENTO",
      description:
        "Impulsamos startups y proyectos con visión de futuro. Desde la idea hasta el mercado, con herramientas digitales, mentoría y una red global de contactos.",
      image: "/images/servicio-innovacion.jpg",
      imageAlt: "Ecosistema de innovación y tecnología",
      gradientFrom: "#5BC8C8",
      gradientTo:   "#A8E6E6",
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