"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { useLang } from "@/components/LangContext";
import { siteConfig } from "@/config/site";
import styles from "./Diferentes.module.css";

export function Diferentes() {
  const { lang } = useLang();
  const cfg    = siteConfig.diferentes;
  const slides = cfg.slides;
  const total  = slides.length;

  const [active, setActive] = useState(0);
  const [dir,    setDir]    = useState<"next"|"prev">("next");
  const [anim,   setAnim]   = useState(false);

  const go = useCallback((direction: "next" | "prev") => {
    setDir(direction);
    setAnim(true);
    setTimeout(() => {
      setActive(a => direction === "next" ? (a + 1) % total : (a - 1 + total) % total);
      setAnim(false);
    }, 340);
  }, [total]);

  const s          = slides[active];
  const sectionTag = lang === "ES" ? cfg.tagES      : cfg.tagEN;
  const ctaLabel   = lang === "ES" ? cfg.ctaLabelES : cfg.ctaLabelEN;
  const eyebrow    = lang === "ES" ? s.eyebrowES    : s.eyebrowEN;
  const heading    = lang === "ES" ? s.headingES    : s.headingEN;
  const para       = lang === "ES" ? s.paraES       : s.paraEN;

  return (
    <section className={styles.section} aria-label={sectionTag}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── Columna izquierda: carrusel de texto ── */}
        <div className={styles.textCol}>

          {/* Cabecera */}
          <div className={styles.head}>
            <span className={styles.sectionTag}>{sectionTag}</span>
            <h2 className={styles.sectionTitle}>{cfg.name}</h2>
          </div>

          {/* Slide de texto — anima al cambiar */}
          <div className={`${styles.slideWrap} ${anim ? (dir === "next" ? styles.exitLeft : styles.exitRight) : ""}`}>
            <span className={styles.slideEyebrow}>{eyebrow}</span>
            <h3 className={styles.slideHeading}>
              {heading.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h3>
            <p className={styles.slidePara}>{para}</p>
            {s.cta && (
              <a href="#contacto" className={styles.ctaInline}
                onClick={e => { e.preventDefault(); document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }); }}>
                {ctaLabel}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            )}
          </div>

          {/* Controles */}
          <div className={styles.controls}>
            {/* Dots */}
            <div className={styles.dots}>
              {slides.map((_, i) => (
                <button key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                  onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>

            {/* Flechas + contador */}
            <div className={styles.arrowGroup}>
              <button className={styles.arrowBtn} onClick={() => go("prev")} aria-label="Anterior">
                <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
                  <circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
                  <line x1="28" y1="24" x2="18" y2="24" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <polyline points="23,19 18,24 23,29" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </button>
              <span className={styles.counter}>
                {String(active + 1).padStart(2,"0")}
                <em>/</em>
                {String(total).padStart(2,"0")}
              </span>
              <button className={styles.arrowBtn} onClick={() => go("next")} aria-label="Siguiente">
                <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
                  <circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
                  <line x1="20" y1="24" x2="30" y2="24" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <polyline points="25,19 30,24 25,29" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* ── Columna derecha: imagen fija ── */}
        <div className={styles.imgCol}>
          <div className={styles.imgFrame}>
            <Image src={cfg.image} alt={cfg.imageAlt} fill className={styles.img}
              sizes="(max-width:900px) 90vw, 44vw" priority />
            <div className={styles.imgGrad} aria-hidden="true" />
          </div>
        </div>

      </div>
    </section>
  );
}