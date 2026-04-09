"use client";
import React from "react";
import { motion } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import styles from "./BonusBanner.module.scss";

const BonusBanner = () => {
  const shouldAnimate = useShouldAnimate();

  return (
    <div className={styles.wrapper}>
      <motion.div 
        className={styles.banner}
        {...(shouldAnimate && {
          initial: { scale: 0.95, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
          viewport: { once: true }
        })}
      >
        <div className={styles.content}>
          <div className={styles.badge}>DLA NOWYCH KIEROWCÓW</div>
          <h2 className={styles.title}>
            Odbierz <span>250 PLN</span> bonusu na start!
          </h2>
          <p className={styles.text}>
            Każdy nowy kierowca, który dołączy do naszej floty w tym miesiącu, otrzyma jednorazowy bonus po wykonaniu pierwszych 50 przejazdów.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default BonusBanner;
