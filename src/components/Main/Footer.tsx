"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "../Nav/Logo";
import GoogleMap from "./GoogleMap";
import styles from "./Footer.module.scss";

interface FooterProps {
  variant?: "default" | "simple";
}

const Footer: React.FC<FooterProps> = ({ variant = "default" }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Zacznij Zarabiać", href: "#start" },
    { label: "Godziny pracy", href: "#hours" },
    { label: "Zarobki", href: "#earnings" },
    { label: "Nasza Oferta", href: "#offer" },
    { label: "O nas", href: "#about" },
    { label: "Kontakt", href: "#contact" },
    { label: "Polityka Prywatności", href: "/polityka-prywatnosci" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <footer className={`${styles.footerWrapper} ${variant === "simple" ? styles.simple : ""}`}>
      <div className={styles.googleMapSection}>
        <GoogleMap />
      </div>

      <div className={styles.footerMain}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Column 1: Logo & Tagline */}
            <motion.div className={styles.logoSection} {...fadeInUp}>
              <Logo />
              <p className={styles.tagline}>
                Autoryzowany partner flotowy Bolt, Uber i FreeNow. Najwyższe
                zarobki i pełne wsparcie dla kierowców w Twoim mieście.
              </p>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              className={styles.linksSection}
              {...fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <h3 className={styles.footerTitle}>Nawigacja</h3>
              <ul className={styles.linksList}>
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Contact Info */}
            <motion.div
              className={styles.contactSection}
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h3 className={styles.footerTitle}>Kontakt</h3>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.info}>
                  <h4>Telefon</h4>
                  <a href="tel:+48787611115">787 611 115</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.info}>
                  <h4>Adres</h4>
                  <p>
                    ul. Nałęczowska 30/12
                    <br />
                    20-701 Lublin
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Column 4: Hours */}
            <motion.div
              className={styles.hoursSection}
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <h3 className={styles.footerTitle}>Godziny</h3>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className={styles.info}>
                  <h4>Biuro otwarte</h4>
                  <p>Pon. - Pt.: 10:00 - 18:00</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className={styles.info}>
                  <h4>E-mail</h4>
                  <a href="mailto:biuro@mida-polska.pl">
                    biuro@mida-polska.pl
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className={styles.bottomBar}>
            <div className={styles.copyright}>
              &copy; {currentYear} <strong>Mida Polska</strong>. Wszystkie prawa
              zastrzeżone.
            </div>
            <div className={styles.dev}>
              realizacja:{" "}
              <a
                href="https://searchit.pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                searchit.pl 2026
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
