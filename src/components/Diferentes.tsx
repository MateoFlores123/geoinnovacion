"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { siteConfig } from "@/config/site";
import styles from "./Diferentes.module.css";

export function Diferentes() {
  const { diferentes } = siteConfig;
  const slides = diferentes.slides;
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length), [slides.length]);

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % slides.length), [slides.length]);

  const slide = slides[current];

  return (
    <section className={styles.section} aria-label="Lo que nos hace diferentes">

      {/* ── Cabecera gris ── */}
      <div className={styles.header}>
        <h2 className={styles.title}>{diferentes.title}</h2>
        <p className={styles.subtitle}>{diferentes.subtitle}</p>
      </div>

      {/* ── Wrapper con padding para que las flechas sobresalgan ── */}
      <div className={styles.carouselWrapper}>

        {/* Flecha izquierda — fuera del carrusel, a la izquierda */}
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prev}
          aria-label="Slide anterior"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        {/* Carrusel */}
        <div className={styles.carousel} aria-live="polite" aria-atomic="true">

          {/* Panel izquierdo (texto) */}
          <div
            className={styles.panelLeft}
            style={{ backgroundColor: slide.bgColor }}
            key={slide.id + "-left"}
          >
            <span className={styles.brand}>{slide.brand}</span>

            <div className={styles.textBlock}>
              <p className={styles.preTitle}>{slide.preTitle}</p>
              <h3 className={styles.slideTitle}>{slide.title}</h3>
              <p className={styles.description}>{slide.description}</p>
            </div>

            {/* Dots */}
            <div className={styles.dots} role="tablist" aria-label="Slides">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Slide ${i + 1}: ${s.title}`}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </div>

          {/* Panel derecho (imagen) */}
          <div className={styles.panelRight} key={slide.id + "-right"}>
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              className={styles.slideImage}
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>

        </div>

        {/* Flecha derecha */}
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={next}
          aria-label="Siguiente slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

      </div>
    </section>
  );
}