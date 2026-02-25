import Link from "next/link";
import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>

        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="GeoInnovación — Inicio">
          GEO<span className={styles.globe}>🌍</span>INNOVACION
        </Link>

        {/* Copyright */}
        <p className={styles.copy}>
          © {new Date().getFullYear()} {footer.brand}. {footer.rights}
        </p>

        {/* Links legales */}
        <ul className={styles.links} role="list">
          {footer.legal.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </footer>
  );
}