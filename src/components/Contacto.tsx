"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import styles from "./Contacto.module.css";

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const MIN_CHARS = 20;

export function Contacto() {
  const { contacto } = siteConfig;
  const [sent, setSent]         = useState(false);
  const [loading, setLoading]   = useState(false);
  const [charCount, setCharCount] = useState(0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (charCount < MIN_CHARS) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  }

  return (
    <section className={styles.section} id="contacto" aria-label="Sección de contacto">
      <div className={styles.bgWaves} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── Cabecera ── */}
        <div className={styles.heading}>
          <span className={styles.label}>{contacto.label}</span>
          <h2 className={styles.title}>{contacto.title}</h2>
          <p className={styles.subtitle}>{contacto.subtitle}</p>
        </div>

        {/* ── Formulario card ── */}
        <div className={styles.formCard}>
          {sent ? (
            <div className={styles.successMsg} role="status">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="52" height="52">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="9 12 12 15 16 9"/>
              </svg>
              <h3>¡Mensaje enviado!</h3>
              <p>Te responderemos en menos de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>

              {/* Fila 1: Nombre + Apellido */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="nombre" className={styles.fieldLabel}>
                    NOMBRE <span className={styles.required} aria-hidden="true">*</span>
                  </label>
                  <input id="nombre" name="nombre" type="text" required
                    placeholder="Tu nombre" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="apellido" className={styles.fieldLabel}>
                    APELLIDO <span className={styles.required} aria-hidden="true">*</span>
                  </label>
                  <input id="apellido" name="apellido" type="text" required
                    placeholder="Tu apellido" className={styles.input} />
                </div>
              </div>

              {/* Fila 2: Email + Teléfono */}
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.fieldLabel}>
                    E-MAIL <span className={styles.required} aria-hidden="true">*</span>
                  </label>
                  <input id="email" name="email" type="email" required
                    placeholder="correo@ejemplo.com" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="telefono" className={styles.fieldLabel}>
                    TELÉFONO
                    <span className={styles.optional}>Opcional — con código de país</span>
                  </label>
                  <input id="telefono" name="telefono" type="tel"
                    placeholder="+1 555 000 0000" className={styles.input} />
                </div>
              </div>

              {/* Mensaje */}
              <div className={styles.field}>
                <label htmlFor="mensaje" className={styles.fieldLabel}>
                  MENSAJE <span className={styles.required} aria-hidden="true">*</span>
                </label>
                <textarea
                  id="mensaje" name="mensaje" required rows={6}
                  placeholder={contacto.form.messagePlaceholder}
                  className={`${styles.input} ${styles.textarea}`}
                  onChange={(e) => setCharCount(e.target.value.length)}
                />
                <div className={styles.charRow}>
                  <span className={`${styles.charHint} ${charCount < MIN_CHARS && charCount > 0 ? styles.charWarn : ""}`}>
                    Mínimo {MIN_CHARS} caracteres
                  </span>
                  <span className={styles.charCount}>{charCount}</span>
                </div>
              </div>

              {/* Campos obligatorios */}
              <p className={styles.requiredNote}>
                <span className={styles.required}>*</span> Campos obligatorios
              </p>

              {/* Botón enviar — ancho completo con flecha */}
              <button type="submit" className={styles.submitBtn}
                disabled={loading || charCount < MIN_CHARS}
                aria-label={contacto.form.submitLabel}>
                {loading ? (
                  <span className={styles.spinner} aria-hidden="true" />
                ) : (
                  <>
                    <span>{contacto.form.submitLabel}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

        {/* ── Info de contacto directo ── */}
        <div className={styles.infoStrip}>
          <a href={`mailto:${contacto.info[0].value}`} className={styles.infoChip}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><rect x="2" y="4" width="20" height="16" rx="3"/><polyline points="2,4 12,13 22,4"/></svg>
            {contacto.info[0].value}
          </a>
          <span className={styles.infoDivider} aria-hidden="true">·</span>
          <a href={`tel:${contacto.info[1].value.replace(/\s/g,"")}`} className={styles.infoChip}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.15 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            {contacto.info[1].value}
          </a>
          <span className={styles.infoDivider} aria-hidden="true">·</span>
          <a href={contacto.whatsapp.href} target="_blank" rel="noopener noreferrer" className={`${styles.infoChip} ${styles.infoChipWa}`}>
            <IconWhatsApp />
            WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}