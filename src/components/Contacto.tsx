"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import styles from "./Contacto.module.css";

/* ── Iconos SVG inline ── */
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <rect x="2" y="4" width="20" height="16" rx="3"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.15 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const IconMap = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const IconSend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  mail:  <IconMail />,
  phone: <IconPhone />,
  map:   <IconMap />,
};

export function Contacto() {
  const { contacto } = siteConfig;
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulación de envío — conecta aquí tu API/endpoint real
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  }

  return (
    <section className={styles.section} id="contacto" aria-label="Sección de contacto">

      {/* ── Fondo decorativo de ondas ── */}
      <div className={styles.bgWaves} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── Columna izquierda: información ── */}
        <div className={styles.colInfo}>
          <span className={styles.label}>{contacto.label}</span>
          <h2 className={styles.title}>{contacto.title}</h2>
          <p className={styles.subtitle}>{contacto.subtitle}</p>

          {/* Datos de contacto */}
          <ul className={styles.infoList} role="list">
            {contacto.info.map((item) => (
              <li key={item.icon}>
                <a
                  href={item.href}
                  className={styles.infoItem}
                  target={item.icon === "map" ? "_blank" : undefined}
                  rel={item.icon === "map" ? "noopener noreferrer" : undefined}
                >
                  <span className={styles.infoIcon}>{iconMap[item.icon]}</span>
                  <span className={styles.infoText}>
                    <span className={styles.infoLabel}>{item.label}</span>
                    <span className={styles.infoValue}>{item.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Botón WhatsApp */}
          <a
            href={contacto.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waBtn}
            aria-label={contacto.whatsapp.label}
          >
            <IconWhatsApp />
            {contacto.whatsapp.label}
          </a>
        </div>

        {/* ── Columna derecha: formulario ── */}
        <div className={styles.colForm}>
          <div className={styles.formCard}>
            {sent ? (
              <div className={styles.successMsg} role="status">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="9 12 12 15 16 9"/>
                </svg>
                <h3>¡Mensaje enviado!</h3>
                <p>Te responderemos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="nombre" className={styles.srOnly}>Nombre</label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      placeholder={contacto.form.namePlaceholder}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.srOnly}>Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={contacto.form.emailPlaceholder}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="asunto" className={styles.srOnly}>Asunto</label>
                  <input
                    id="asunto"
                    name="asunto"
                    type="text"
                    placeholder={contacto.form.subjectPlaceholder}
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="mensaje" className={styles.srOnly}>Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    placeholder={contacto.form.messagePlaceholder}
                    className={`${styles.input} ${styles.textarea}`}
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                  aria-label={contacto.form.submitLabel}
                >
                  {loading ? (
                    <span className={styles.spinner} aria-hidden="true" />
                  ) : (
                    <>
                      <IconSend />
                      {contacto.form.submitLabel}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}