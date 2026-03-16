"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import { useLang } from "@/components/LangContext";
import { serviciosTrans } from "@/config/serviciosTrans";
import { siteConfig } from "@/config/site";
import styles from "./Innovacion.module.css";

export function Innovacion() {
  const { lang } = useLang();
  const tx  = serviciosTrans.innovacion[lang];
  const cfg = siteConfig.servicios.find((s) => s.id === "innovacion")!;
  const [active, setActive] = useState(0);
  const [dir,    setDir]    = useState<"next"|"prev">("next");
  const [anim,   setAnim]   = useState(false);

  /* 1 slide por párrafo — imagen viene de siteConfig.carouselImages */
  const imgs = cfg.carouselImages;
  const slides = [
    { eyebrowES: "Desde 2018",           eyebrowEN: "Since 2018",              text: tx.body[0], imgIdx: 0 },
    { eyebrowES: "Cámara de Comercio",   eyebrowEN: "Chamber of Commerce",     text: tx.body[1], imgIdx: 0,
      link: { label: "camara-arequipa.org.pe", href: "https://www.camara-arequipa.org.pe/" } },
    { eyebrowES: "MIRA · 2019",          eyebrowEN: "MIRA · 2019",             text: tx.body[2], imgIdx: 1 },
    { eyebrowES: "Conferencias & Jurado",eyebrowEN: "Conferences & Jury",      text: tx.body[3], imgIdx: 2 },
    { eyebrowES: "Filosofía",            eyebrowEN: "Philosophy",              text: tx.body[4], imgIdx: 2 },
  ];

  const total = slides.length;

  const go = useCallback((direction: "next" | "prev") => {
    setDir(direction);
    setAnim(true);
    setTimeout(() => {
      setActive(a => direction === "next" ? (a + 1) % total : (a - 1 + total) % total);
      setAnim(false);
    }, 380);
  }, [total]);

  const s = slides[active];
  const imgData = (imgs ?? [])[s.imgIdx] ?? (imgs ?? [])[0];
  const eyebrow = lang === "ES" ? s.eyebrowES : s.eyebrowEN;

  return (
    <section id="innovacion" className={styles.section}
      style={{ "--grad-from": cfg.gradientFrom, "--grad-to": cfg.gradientTo } as React.CSSProperties}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <div className={styles.headText}>
              <span className={styles.sectionTag}>{tx.label}</span>
              <h2 className={styles.sectionTitle}>{tx.title}</h2>
            </div>
          </div>
          <div className={styles.counter}>
            <span className={styles.counterActive}>{String(active + 1).padStart(2,"0")}</span>
            <span className={styles.counterSep}>/</span>
            <span className={styles.counterTotal}>{String(total).padStart(2,"0")}</span>
          </div>
        </div>

        <div className={`${styles.carousel} ${anim ? (dir==="next" ? styles.exitLeft : styles.exitRight) : ""}`}>
          <div className={styles.imgWrap}>
            <Image src={imgData.src} alt={imgData.alt} fill className={styles.img}
              sizes="(max-width:900px) 90vw, 46vw" priority={active === 0} />
            <div className={styles.imgGrad} aria-hidden="true" />
            <div className={styles.slideMarker}>
              <div className={styles.markerLine} style={{ width: `${((active+1)/total)*100}%` }} />
            </div>
          </div>

          <div className={styles.textWrap}>
            <span className={styles.slideEyebrow}>{eyebrow}</span>
            <p className={styles.slidePara}>{s.text}</p>
            {s.link && (
              <a href={s.link.href} target="_blank" rel="noopener noreferrer" className={styles.extLink}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {s.link.label}
              </a>
            )}
          </div>
        </div>

        <div className={styles.bar}>
          <div className={styles.dots}>
            {slides.map((_, i) => (
              <button key={i} className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => setActive(i)} aria-label={`Slide ${i+1}`} />
            ))}
          </div>
          <div className={styles.arrows}>
            <button className={styles.arrow} onClick={() => go("prev")} aria-label="Anterior">
              <span className={styles.arrowInner}>
                <svg viewBox="0 0 48 48" fill="none" width="52" height="52">
                  <circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
                  <line x1="28" y1="24" x2="18" y2="24" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <polyline points="23,19 18,24 23,29" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </span>
              <span className={styles.arrowLabel}>{lang === "ES" ? "Anterior" : "Prev"}</span>
            </button>
            <button className={styles.arrow} onClick={() => go("next")} aria-label="Siguiente">
              <span className={styles.arrowLabel}>{lang === "ES" ? "Siguiente" : "Next"}</span>
              <span className={styles.arrowInner}>
                <svg viewBox="0 0 48 48" fill="none" width="52" height="52">
                  <circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
                  <line x1="20" y1="24" x2="30" y2="24" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <polyline points="25,19 30,24 25,29" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className={styles.ctaStrip}>
          <p className={styles.ctaQ}>{tx.cta}</p>
          <a href="#contacto" className={styles.ctaBtn}
            onClick={e => { e.preventDefault(); document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }); }}>
            {tx.ctaBtn}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}