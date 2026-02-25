import Image from "next/image";
import { siteConfig } from "@/config/site";
import styles from "./Hero.module.css";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      className={styles.hero}
      aria-label="Hero principal"
    >
      {/* ── Imagen de fondo ── */}
      <Image
        src={hero.backgroundImage}
        alt="Fondo del hero — paisaje con cohete, turbinas y montañas"
        fill
        priority
        quality={85}
        className={styles.bgImage}
        sizes="100vw"
      />

      {/* ── Overlay gradiente para legibilidad ── */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* ── Contenido ── */}
      <div className={styles.content}>

        {/* Título principal */}
        <h1 className={styles.title}>
          {hero.title}
        </h1>

        {/* Tags flotantes */}
        <ul className={styles.tags} aria-label="Áreas de oportunidad" role="list">
          {hero.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Imagen de la persona (derecha) ── */}
      <div className={styles.personWrapper} aria-hidden="true">
        <Image
          src={hero.personImage}
          alt={hero.personAlt}
          fill
          priority
          quality={90}
          className={styles.personImage}
          sizes="(max-width: 768px) 60vw, 40vw"
        />
      </div>
    </section>
  );
}
