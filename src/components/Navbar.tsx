"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import styles from "./Navbar.module.css";

const Icons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="20" height="20">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="22" height="22">
      <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.3 5 12 5 12 5s-4.3 0-6.9.1c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.8C6.8 19 12 19 12 19s4.3 0 6.9-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9l5.6 2.8-5.6 2.7z"/>
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="20" height="20">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  ),
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="18" height="18">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { nav, social } = siteConfig;

  return (
    <>
      {/* ── NAV SUPERIOR — dentro del header ── */}
      <header className={styles.header} role="banner">
        <nav
          className={`${styles.topNav} ${scrolled ? styles.topNavScrolled : ""}`}
          aria-label="Navegación principal"
        >
          <div className={styles.topNavInner}>
            <Link href="/" className={styles.logo} aria-label={`${nav.logo} — Ir al inicio`}>
              {nav.logo}
            </Link>

            <ul className={styles.navLinks} role="list">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <a
              href={nav.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
              aria-label={`Contactar por ${nav.whatsapp.label}`}
            >
              <WhatsAppIcon />
              <span>Únete en</span>
              <strong>WhatsApp</strong>
            </a>

            <button
              className={styles.menuToggle}
              aria-label="Abrir menú"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu?.classList.toggle(styles.mobileMenuOpen);
              }}
            >
              <span /><span /><span />
            </button>
          </div>

          <div id="mobile-menu" className={styles.mobileMenu} aria-hidden="true">
            <ul role="list">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.mobileNavLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <a href={nav.whatsapp.href} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtnMobile}>
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </nav>
      </header>

      {/* ── NAV INFERIOR — fuera del header, fixed al fondo ── */}
      <nav className={styles.bottomNav} aria-label="Redes sociales">
        <div className={styles.bottomNavInner}>
          <span className={styles.siguenos}>{social.label}</span>
          <span className={styles.divider} aria-hidden="true">|</span>
          <ul className={styles.socialLinks} role="list">
            {social.links.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Síguenos en ${s.name}`}
                  className={styles.socialLink}
                >
                  {Icons[s.icon as keyof typeof Icons]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}