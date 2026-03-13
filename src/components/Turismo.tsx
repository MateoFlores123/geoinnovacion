"use client";
import Image from "next/image";
import { useState, useCallback } from "react";
import { useLang } from "@/components/LangContext";
import { serviciosTrans } from "@/config/serviciosTrans";
import { siteConfig } from "@/config/site";
import styles from "./Turismo.module.css";

type Project = "villa" | "vra";

export function Turismo() {
  const { lang } = useLang();
  const tx  = serviciosTrans.turismo[lang];
  const cfg = siteConfig.servicios.find((s) => s.id === "turismo")!;

  const [project, setProject] = useState<Project>("villa");
  const [imgIdx,  setImgIdx]  = useState(0);
  const [dir,     setDir]     = useState<"next"|"prev">("next");
  const [anim,    setAnim]    = useState(false);

  const imgs  = project === "villa" ? cfg.villaImages : cfg.vraImages;
  const total = imgs.length; // siempre 2

  const go = useCallback((direction: "next" | "prev") => {
    setDir(direction);
    setAnim(true);
    setTimeout(() => {
      setImgIdx(i => direction === "next" ? (i + 1) % total : (i - 1 + total) % total);
      setAnim(false);
    }, 340);
  }, [total]);

  const switchProject = (p: Project) => {
    setProject(p);
    setImgIdx(0);
  };

  const imgData = imgs[imgIdx];

  /* Texto según proyecto + slide */
  const textSlides: Record<Project, string[]> = {
    villa: tx.villaBody,
    vra:   tx.vraBody,
  };
  const eyebrowSlides: Record<Project, { ES: string; EN: string }[]> = {
    villa: [
      { ES: "Historia",  EN: "Background" },
      { ES: "Hoy",       EN: "Today" },
    ],
    vra: [
      { ES: "La Pasión", EN: "The Passion" },
      { ES: "La Agencia · 2020", EN: "The Agency · 2020" },
    ],
  };
  const links: Record<Project, { label: string; href: string } | undefined> = {
    villa: imgIdx === 1 ? { label: "villaelisahb.com", href: "https://www.villaelisahb.com" } : undefined,
    vra:   imgIdx === 1 ? { label: "vrandes.travel",   href: "https://www.vrandes.travel"   } : undefined,
  };

  const eyebrow = eyebrowSlides[project][imgIdx]?.[lang] ?? "";
  const para    = textSlides[project][imgIdx] ?? "";
  const link    = links[project];
  const badge   = project === "villa" ? tx.villaLabel : tx.vraLabel;

  return (
    <section id="turismo" className={styles.section}
      style={{ "--grad-from": cfg.gradientFrom, "--grad-to": cfg.gradientTo } as React.CSSProperties}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── Cabecera ── */}
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <div className={styles.headText}>
              <span className={styles.sectionTag}>{tx.label}</span>
              <h2 className={styles.sectionTitle}>{tx.title}</h2>
            </div>
          </div>
          <div className={styles.counter}>
            <span className={styles.counterActive}>{String(imgIdx + 1).padStart(2,"0")}</span>
            <span className={styles.counterSep}>/</span>
            <span className={styles.counterTotal}>{String(total).padStart(2,"0")}</span>
          </div>
        </div>

        {/* ── Tabs de proyecto ── */}
        <div className={styles.projectTabs}>
          {(["villa","vra"] as Project[]).map((p) => (
            <button key={p}
              className={`${styles.projectTab} ${project === p ? styles.projectTabActive : ""}`}
              onClick={() => switchProject(p)}>
              {p === "villa" ? tx.villaLabel : tx.vraLabel}
            </button>
          ))}
        </div>

        {/* ── Carrusel: texto | imagen ── */}
        <div className={`${styles.carousel} ${anim ? (dir==="next" ? styles.exitLeft : styles.exitRight) : ""}`}>

          <div className={styles.imgWrap}>
            <Image src={imgData.src} alt={imgData.alt} fill className={styles.img}
              sizes="(max-width:860px) 90vw, 46vw" />
            <div className={styles.imgGrad} aria-hidden="true" />
            <div className={styles.slideMarker}>
              <div className={styles.markerLine} style={{ width: `${((imgIdx+1)/total)*100}%` }} />
            </div>
            <span className={styles.imgProjectBadge}>{badge}</span>
          </div>

          <div className={styles.textWrap}>
            <span className={styles.slideEyebrow}>{eyebrow}</span>
            <p className={styles.slidePara}>{para}</p>
            {link && (
              <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.extLink}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" width="11" height="11">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {link.label}
              </a>
            )}
          </div>
        </div>

        {/* ── Barra: dots + flechas ── */}
        <div className={styles.bar}>
          <div className={styles.dots}>
            {imgs.map((_, i) => (
              <button key={i}
                className={`${styles.dot} ${i === imgIdx ? styles.dotActive : ""}`}
                onClick={() => setImgIdx(i)} aria-label={`Imagen ${i+1}`} />
            ))}
          </div>
          <div className={styles.arrows}>
            <button className={styles.arrow} onClick={() => go("prev")} aria-label="Anterior">
              <span className={styles.arrowInner}>
                <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
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
                <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
                  <circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5"/>
                  <line x1="20" y1="24" x2="30" y2="24" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  <polyline points="25,19 30,24 25,29" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.ctaStrip}>
          <p className={styles.ctaQ}>{tx.cta}</p>
          <div className={styles.ctaBtns}>
            <a href="https://www.villaelisahb.com" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>{tx.ctaVilla}</a>
            <a href="https://www.vrandes.travel"   target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>{tx.ctaVRA}</a>
          </div>
        </div>

      </div>
    </section>
  );
}