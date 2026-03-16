"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import styles from "./Navbar.module.css";
import { useLang } from "@/components/LangContext";

const navTrans = {
  ES: {
    links: [
      { label: "Inicio",                href: "#inicio"     },
      { label: "Economía Circular",     href: "#economia"   },
      { label: "Transición Energética", href: "#transicion" },
      { label: "Innovación",            href: "#innovacion" },
      { label: "Turismo",               href: "#turismo"    },
      { label: "Contacto",              href: "#contacto"   },
    ],
    whatsappBtn: "WhatsApp",
  },
  EN: {
    links: [
      { label: "Home",               href: "#inicio"     },
      { label: "Circular Economy",   href: "#economia"   },
      { label: "Energy Transition",  href: "#transicion" },
      { label: "Innovation",         href: "#innovacion" },
      { label: "Tourism",            href: "#turismo"    },
      { label: "Contact",            href: "#contacto"   },
    ],
    whatsappTop: "Join us on",
    whatsappBtn: "WhatsApp",
  },
};

/* ── Iconos de navegación ── */
const NavIcons: Record<string, React.ReactElement> = {
  "#inicio": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  ),
  "#economia": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
      <polyline points="1 4 1 10 7 10"/>
      <polyline points="23 20 23 14 17 14"/>
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
    </svg>
  ),
  "#transicion": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  "#innovacion": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
      <line x1="9" y1="18" x2="15" y2="18"/>
      <line x1="10" y1="22" x2="14" y2="22"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
    </svg>
  ),
  "#turismo": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  "#contacto": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
};

/* ── Iconos sociales ── */
const SocialIcons: Record<string, React.ReactElement> = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

/* ── Scroll suave — CORREGIDO ── */
function scrollToSection(href: string) {
  if (href === "#inicio") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const offset = 72; // altura del nav superior
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

/* ── Componente principal ── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tx = navTrans[lang];
  const { nav, social } = siteConfig;

  return (
    <>
      <header className={styles.header} role="banner">
        <nav className={`${styles.topNav} ${scrolled ? styles.topNavScrolled : ""}`}
          aria-label="Navegación principal">
          <div className={styles.topNavInner}>

            {/* Logo */}
            <a href="#inicio" className={styles.logoLink}
              onClick={(e) => { e.preventDefault(); scrollToSection("#inicio"); }}
              aria-label="GeoInnovación — Inicio">
              <Image src={nav.logoImage} alt="GeoInnovación" width={180} height={44}
                className={styles.logoImg} priority />
            </a>

            {/* Links escritorio */}
            <ul className={styles.navLinks} role="list">
              {tx.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    aria-label={link.label}>
                    {NavIcons[link.href]}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Links móvil — solo iconos */}
            <ul className={styles.navLinksMobile} role="list" aria-label="Navegación">
              {tx.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navIconOnly}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    aria-label={link.label}>
                    {NavIcons[link.href]}
                  </a>
                </li>
              ))}
            </ul>

            {/* Selector idioma */}
            <div className={styles.langSwitch} role="group" aria-label="Seleccionar idioma">
              <button className={`${styles.langBtn} ${lang === "ES" ? styles.langActive : ""}`}
                onClick={() => setLang("ES")} aria-pressed={lang === "ES"}>ES</button>
              <span className={styles.langDivider} aria-hidden="true">|</span>
              <button className={`${styles.langBtn} ${lang === "EN" ? styles.langActive : ""}`}
                onClick={() => setLang("EN")} aria-pressed={lang === "EN"}>EN</button>
            </div>

            {/* WhatsApp — solo escritorio */}
            <a href={nav.whatsapp.href} target="_blank" rel="noopener noreferrer"
              className={styles.whatsappBtn} aria-label="Contactar por WhatsApp">
              <WhatsAppIcon />
              <div className={styles.whatsappBtnText}>
                <span>{'whatsappTop' in tx ? tx.whatsappTop : ''}</span>
                <strong>{tx.whatsappBtn}</strong>
              </div>
            </a>

          </div>
        </nav>
      </header>

      {/* Nav inferior — redes sociales */}
      <nav className={styles.bottomNav} aria-label="Redes sociales">
        <div className={styles.bottomNavInner}>
          <span className={styles.siguenos}>{social.label}</span>
          <span className={styles.divider} aria-hidden="true">|</span>
          <ul className={styles.socialLinks} role="list">
            {social.links.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={`Síguenos en ${s.name}`} className={styles.socialLink}>
                  {SocialIcons[s.icon as keyof typeof SocialIcons]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}