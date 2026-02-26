"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import styles from "./Hero.module.css";

export function Hero() {
  const { hero } = siteConfig;
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero} id="inicio" aria-label="Hero principal">

      {/* ── Imagen de fondo con parallax ── */}
      <div ref={bgRef} className={styles.bgWrapper}>
        <Image
          src={hero.backgroundImage}
          alt="Paisaje tecnológico con cohete, turbinas eólicas y montañas"
          fill priority quality={85}
          className={styles.bgImage}
          sizes="100vw"
        />
      </div>

      {/* ── Overlays ── */}
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.overlayNoise} aria-hidden="true" />

      {/* ── Contenido principal ── */}
      <div className={styles.content}>

        {/* Título en 3 líneas */}
        <h1 className={styles.title}>
          <span className={styles.titleLine1}>Solo veo</span>
          <span className={styles.titleLine2}>OPORTUNIDADES.</span>
          <span className={styles.titleLine3}>¿Y tú?</span>
        </h1>

        {/* Tags */}
        <ul className={styles.tags} aria-label="Áreas de oportunidad" role="list">
          {hero.tags.map((tag) => (
            <li key={tag} className={styles.tag}>{tag}</li>
          ))}
        </ul>
      </div>

      {/* ── Persona (imagen + nombre + ubicación) ── */}
      <div className={styles.personWrapper} aria-label={hero.personAlt}>
        <div className={styles.personGlow} aria-hidden="true" />
        <Image
          src={hero.personImage}
          alt={hero.personAlt}
          fill priority quality={90}
          className={styles.personImage}
          sizes="(max-width: 768px) 60vw, 40vw"
        />
        {/* Nombre y ubicación en esquina inferior derecha */}
        <div className={styles.personInfo}>
          <span className={styles.personName}>{hero.personName}</span>
          <span className={styles.personLocation}>{hero.personLocation}</span>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span />
      </div>

    </section>
  );
}