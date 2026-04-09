"use client";
import React from "react";
import { motion } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import { citiesList } from "@/constants";
import SecondaryButton from "../More/SecondaryButton";
import styles from "./ContactMap.module.scss";

const ContactMap = () => {
  const shouldAnimate = useShouldAnimate();

  return (
    <section id="kontakt" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.mapWrapper}>
              <motion.img 
                src="/images/mapa.svg" 
                alt="Mapa zasięgu Mida Polska" 
                className={styles.mapSvg}
                {...(shouldAnimate && {
                  initial: { opacity: 0, scale: 0.95 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true },
                  transition: { duration: 1, ease: "easeOut" }
                })}
              />
              <div className={styles.mapOverlay}>
                <span>Mida Polska</span>
              </div>
            </div>
          </div>

          <motion.div 
            className={styles.right}
            {...(shouldAnimate && {
              initial: { opacity: 0, x: 50 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 }
            })}
          >
            <span className={styles.subtitle}>KONTAKT</span>
            <h2 className={styles.title}>Jesteśmy <span>blisko Ciebie</span></h2>
            
            <div className={styles.infoBlock}>
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
            </div>

            <div className={styles.cities}>
              <h3>Gdzie jeździmy?</h3>
              <div className={styles.cityGrid}>
                {citiesList.map((city, index) => (
                  <span key={index} className={styles.cityTag}>{city}</span>
                ))}
              </div>
            </div>

            <div className={styles.cta}>
              <SecondaryButton 
                variant="default"
                href="https://forms.gle/2jpFc7AEk1HAcufA6"
              >
                Wyślij wiadomość
              </SecondaryButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
