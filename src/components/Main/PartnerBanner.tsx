"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import AnimatedButton from "../More/AnimatedButton";
import styles from "./PartnerBanner.module.scss";

const PartnerBanner = () => {
  const shouldAnimate = useShouldAnimate();

  return (
    <div className={styles.wrapper}>
      <motion.div 
        className={styles.banner}
        {...(shouldAnimate && {
          initial: { y: 20, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.6 }
        })}
      >
        <Image
          src="/images/fleet_banner_pl_v2.png"
          alt="Nowoczesna flota Mida Polska - Uber, Bolt, FreeNow"
          fill
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
        
        <div className={styles.content}>
          <div className={styles.badge}>OFICJALNY PARTNER FLOTOWY 🛡️</div>
          <h2 className={styles.title}>
            Szukasz pracy jako <span>KIEROWCA?</span>
          </h2>
          
          <ul className={styles.benefits}>
            <li>✔️ <strong>Wypłaty co 2 tygodnie</strong> — stały zastrzyk gotówki.</li>
            <li>✔️ <strong>Nowoczesna flota</strong> — komfortowe i oszczędne hybrydy.</li>
            <li>✔️ <strong>Pełne wsparcie</strong> — karta paliwowa i opieka 24/7.</li>
          </ul>

          <div className={styles.ctaWrapper}>
            <AnimatedButton href="https://forms.gle/2jpFc7AEk1HAcufA6">
                Aplikuj do floty
            </AnimatedButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PartnerBanner;
