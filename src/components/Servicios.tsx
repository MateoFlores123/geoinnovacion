import Image from "next/image";
import { siteConfig } from "@/config/site";
import styles from "./Servicios.module.css";

export function Servicios() {
  const { servicios } = siteConfig;

  return (
    <div className={styles.wrapper}>
      {servicios.map((servicio, index) => (
        <section
          key={servicio.id}
          id={servicio.id}          /* ← ancla de navegación */
          className={`${styles.bloque} ${index % 2 !== 0 ? styles.bloqueInverso : ""}`}
          style={{ "--grad-from": servicio.gradientFrom, "--grad-to": servicio.gradientTo } as React.CSSProperties}
          aria-label={servicio.title}
        >
          <div className={styles.panelTexto}>
            <span className={styles.label}>{servicio.label}</span>
            <h2 className={styles.titulo}>{servicio.title}</h2>
            <p className={styles.descripcion}>{servicio.description}</p>
          </div>

          <div className={styles.panelImagen}>
            <div className={styles.marcoImagen}>
              <Image
                src={servicio.image}
                alt={servicio.imageAlt}
                fill
                className={styles.imagen}
                sizes="(max-width: 768px) 90vw, 45vw"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}