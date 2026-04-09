"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import styles from "./EasterBanner.module.scss";

const EasterBanner = () => {
  const shouldAnimate = useShouldAnimate();

  return (
    <div className={styles.wrapper}>
      <motion.div 
        className={styles.banner}
        {...(shouldAnimate && {
          initial: { scale: 0.98, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.6 }
        })}
      >
        <Image
          src="/images/easter_bg_v2.png"
          alt="Święta Wielkanocne Mida Polska"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
        
        <div className={styles.content}>
          <div className={styles.badge}>RADOSNEGO ALLELUJA! 🐣</div>
          <h2 className={styles.title}>
            Wesołych Świąt <span>Wielkanocnych</span>
          </h2>
          <p className={styles.text}>
            Życzymy Wam radosnych chwil w gronie najbliższych, spokoju oraz samych zielonych świateł na każdej drodze życia. <br />
            <strong>Zespół Mida Polska</strong>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default EasterBanner;
