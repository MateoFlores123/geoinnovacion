"use client";
import { useLang } from "@/components/LangContext";
import { serviciosTrans } from "@/config/serviciosTrans";
import { siteConfig } from "@/config/site";
import { ImageCarousel } from "@/components/ImageCarousel";
import styles from "./Transicion.module.css";

export function Transicion() {
  const { lang } = useLang();
  const tx  = serviciosTrans.transicion[lang];
  const cfg = siteConfig.servicios.find((s) => s.id === "transicion")!;

  const slides = cfg.carouselImages.map(img => ({
    src:     img.src,
    alt:     img.alt,
    caption: lang === "ES" ? img.captionES : img.captionEN,
  }));

  return (
    <section id="transicion" className={styles.section}
      style={{ "--grad-from": cfg.gradientFrom, "--grad-to": cfg.gradientTo } as React.CSSProperties}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.textCol}>
          <div className={styles.eyebrow}>
            <span className={styles.labelTag}>{tx.label}</span>
          </div>
          <h2 className={styles.title}>{tx.title}</h2>
          <div className={styles.divider} />
          <div className={styles.body}>
            {tx.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className={styles.ctaCard}>
            <p className={styles.ctaQuestion}>{tx.cta}</p>
            <div className={styles.ctaBtns}>
              <a href="#contacto" className={styles.btnPrimary}
                onClick={(e) => { e.preventDefault(); document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }); }}>
                {tx.ctaBtn} →
              </a>
            </div>
          </div>
        </div>

        <div className={styles.carouselCol}>
          <ImageCarousel slides={slides} />
        </div>
      </div>
    </section>
  );
}