"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import { citiesList } from "@/constants";
import SecondaryButton from "../More/SecondaryButton";
import styles from "./ContactMap.module.scss";

// --- Animacje wzorowane na 2K Detailing ---
const textVariant = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.8, delay },
  },
});

const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  type: string,
  delay: number,
  duration: number,
): Variants => ({
  hidden: {
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: type as any, duration, delay, ease: "easeOut" },
  },
});

const ContactMap = () => {
  const shouldAnimate = useShouldAnimate();

  return (
    <section id="kontakt" className={styles.wrapper}>
      <div key={shouldAnimate ? "desktop" : "mobile"} className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            className={styles.left}
            {...(shouldAnimate && {
              variants: fadeIn("right", "tween", 0.1, 0.8),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.2 },
            })}
          >
            <div className={styles.mapWrapper}>
              <img 
                src="/images/mapa.svg" 
                alt="Mapa zasięgu Mida Polska" 
                className={styles.mapSvg}
              />
              <div className={styles.mapOverlay}>
                <span>Mida Polska</span>
              </div>
            </div>
          </motion.div>

          <div className={styles.right}>
            <motion.span 
              className={styles.subtitle}
              {...(shouldAnimate && {
                variants: textVariant(0.1),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.2 },
              })}
            >
              KONTAKT
            </motion.span>
            <motion.h2 
              className={styles.title}
              {...(shouldAnimate && {
                variants: textVariant(0.2),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.2 },
              })}
            >
              Jesteśmy <span>blisko Ciebie</span>
            </motion.h2>
            
            <motion.div 
              className={styles.infoBlock}
              {...(shouldAnimate && {
                variants: fadeIn("left", "tween", 0.3, 0.6),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true },
              })}
            >
              <div className={styles.infoItem}>
                <h3>Biuro Centralne:</h3>
                <p>ul. Nałęczowska 30 lok. 12</p>
                <p>20-701 Lublin</p>
              </div>

              <div className={styles.infoItem}>
                <h3>Telefon:</h3>
                <a href="tel:+48787611115" className={styles.link}>+48 787 611 115</a>
              </div>

              <div className={styles.infoItem}>
                <h3>Godziny otwarcia:</h3>
                <p>Poniedziałek - Piątek</p>
                <p>10:00 - 18:00</p>
              </div>
            </motion.div>

            <motion.div 
              className={styles.cities}
              {...(shouldAnimate && {
                variants: fadeIn("up", "tween", 0.5, 0.6),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true },
              })}
            >
              <h3>Gdzie jeździmy?</h3>
              <div className={styles.cityGrid}>
                {citiesList.map((city, index) => (
                  <span key={index} className={styles.cityTag}>{city}</span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className={styles.cta}
              {...(shouldAnimate && {
                variants: fadeIn("up", "tween", 0.7, 0.6),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true },
              })}
            >
              <SecondaryButton 
                variant="default"
                href="https://forms.gle/2jpFc7AEk1HAcufA6"
              >
                Wyślij wiadomość
              </SecondaryButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
