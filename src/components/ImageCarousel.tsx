"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./ImageCarousel.module.css";

interface Slide { src: string; alt: string; caption?: string; }

export function ImageCarousel({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + slides.length) % slides.length);
  const next = () => setActive((a) => (a + 1) % slides.length);

  return (
    <div className={styles.carousel}>

      {/* ── Imagen principal ── */}
      <div className={styles.mainFrame}>
        {slides.map((s, i) => (
          <div key={i} className={`${styles.slide} ${i === active ? styles.slideActive : ""}`}>
            <Image src={s.src} alt={s.alt} fill className={styles.img}
              sizes="(max-width: 860px) 90vw, 48vw" priority={i === 0} />
          </div>
        ))}

        {/* Caption */}
        {slides[active].caption && (
          <div className={styles.caption}>{slides[active].caption}</div>
        )}

        {/* Flechas sobre la imagen */}
        {slides.length > 1 && (
          <>
            <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Anterior">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Siguiente">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </>
        )}
      </div>

      {/* ── Thumbnails ── */}
      {slides.length > 1 && (
        <div className={styles.thumbs}>
          {slides.map((s, i) => (
            <button key={i} className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
              onClick={() => setActive(i)} aria-label={s.alt}>
              <Image src={s.src} alt={s.alt} fill className={styles.thumbImg}
                sizes="80px" />
            </button>
          ))}
        </div>
      )}

      {/* ── Dots ── */}
      {slides.length > 1 && (
        <div className={styles.dots} aria-hidden="true">
          {slides.map((_, i) => (
            <button key={i} className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => setActive(i)} />
          ))}
        </div>
      )}

    </div>
  );
}