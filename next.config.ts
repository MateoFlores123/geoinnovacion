/** @type {import('next').NextConfig} */
const nextConfig = {
  /* ── Optimización de imágenes ── */
  images: {
    formats: ["image/avif", "image/webp"],
    /** Agrega aquí dominios externos si cargas imágenes de otra URL */
    remotePatterns: [],
  },

  /* ── Headers de seguridad y SEO ── */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "X-Frame-Options",            value: "DENY" },
          { key: "X-XSS-Protection",           value: "1; mode=block" },
          { key: "Referrer-Policy",            value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",         value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },

  /* ── Compresión ── */
  compress: true,

  /* ── Strict mode de React ── */
  reactStrictMode: true,
};

module.exports = nextConfig;