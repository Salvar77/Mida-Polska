"use client";
import React from "react";
import { motion } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import IndustrialButton from "../More/IndustrialButton";
import styles from "./EarningsChart.module.scss";

const EarningsChart = () => {
  const shouldAnimate = useShouldAnimate();

  return (
    <section id="zarobki" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.left}
            {...(shouldAnimate && {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 },
            })}
          >
            <span className={styles.subtitle}>MAKSYMALIZUJ ZYSKI</span>
            <h2 className={styles.title}>
              Pracując z nami <span>zarabiasz więcej</span>
            </h2>
            <p className={styles.description}>
              Nasi kierowcy to prawdziwi profesjonaliści! Cechują się wysoką
              kulturą osobistą i świetnymi umiejętnościami prowadzenia pojazdów.
            </p>
            <p className={styles.description}>
              <strong>To proste:</strong> Im więcej jeździsz i im wyższą masz
              ocenę w aplikacji Bolt/Uber, tym lepsze i częstsze zlecenia
              otrzymujesz. Stała aktywność to Twoja droga do maksymalnych
              zarobków każdego dnia!
            </p>

            <div className={styles.cta}>
              <IndustrialButton 
                variant="bolt"
                href="tel:+48787611115"
              >
                Masz pytanie? Zadzwoń
              </IndustrialButton>
            </div>
          </motion.div>

          <div className={styles.right}>
            <div className={styles.chartWrapper}>
              <div className={styles.chartHeader}>
                <div className={styles.indicator}>
                  <span className={styles.dot} />
                  Zarabiaj <span>więcej</span> każdego dnia
                </div>
              </div>

              <svg className={styles.svg} viewBox="0 0 500 300">
                {/* Grid Lines */}
                <line
                  x1="0"
                  y1="280"
                  x2="500"
                  y2="280"
                  className={styles.gridLine}
                />
                <line
                  x1="0"
                  y1="200"
                  x2="500"
                  y2="200"
                  className={styles.gridLine}
                />
                <line
                  x1="0"
                  y1="120"
                  x2="500"
                  y2="120"
                  className={styles.gridLine}
                />
                <line
                  x1="0"
                  y1="40"
                  x2="500"
                  y2="40"
                  className={styles.gridLine}
                />

                {/* Labels */}
                <text x="10" y="270" className={styles.label}>
                  Start
                </text>
                <text x="440" y="270" className={styles.label}>
                  Pro
                </text>

                {/* Standard Line */}
                <motion.path
                  d="M 0 280 L 150 240 L 300 220 L 500 200"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="3"
                  {...(shouldAnimate && {
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 },
                    viewport: { once: true },
                    transition: { duration: 2, ease: "easeInOut" },
                  })}
                />

                {/* Mida Premium Line (Orange Glow) */}
                <motion.path
                  d="M 0 280 L 100 200 L 250 120 L 400 40"
                  fill="none"
                  stroke="#FF5600"
                  strokeWidth="5"
                  className={styles.glowLine}
                  {...(shouldAnimate && {
                    initial: { pathLength: 0 },
                    whileInView: { pathLength: 1 },
                    viewport: { once: true },
                    transition: { duration: 2.5, ease: "easeInOut" },
                  })}
                />

                {/* Points */}
                <motion.circle
                  cx="400"
                  cy="40"
                  r="8"
                  fill="#FF5600"
                  {...(shouldAnimate && {
                    initial: { scale: 0 },
                    whileInView: { scale: 1 },
                    viewport: { once: true },
                    transition: { delay: 2.5, type: "spring" },
                  })}
                />
              </svg>

              <div className={styles.chartFooter}>
                <span>Aktywność i Ocena Kierowcy</span>
                <span className={styles.arrow}>→</span>
                <span>Twoje Wynagrodzenie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsChart;
