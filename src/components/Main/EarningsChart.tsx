"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import IndustrialButton from "../More/IndustrialButton";
import styles from "./EarningsChart.module.scss";

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

const EarningsChart = () => {
  const shouldAnimate = useShouldAnimate();

  return (
    <section id="zarobki" className={styles.wrapper}>
      <div key={shouldAnimate ? "desktop" : "mobile"} className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <motion.span 
              className={styles.subtitle}
              {...(shouldAnimate && {
                variants: textVariant(0.1),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.2 },
              })}
            >
              MAKSYMALIZUJ ZYSKI
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
              Pracując z nami <span>zarabiasz więcej</span>
            </motion.h2>
            <motion.p 
              className={styles.description}
              {...(shouldAnimate && {
                variants: fadeIn("right", "tween", 0.3, 0.6),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true },
              })}
            >
              Nasi kierowcy to prawdziwi profesjonaliści! Cechują się wysoką
              kulturą osobistą i świetnymi umiejętnościami prowadzenia pojazdów.
            </motion.p>
            <motion.p 
              className={styles.description}
              {...(shouldAnimate && {
                variants: fadeIn("right", "tween", 0.4, 0.6),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true },
              })}
            >
              <strong>To proste:</strong> Im więcej jeździsz i im wyższą masz
              ocenę w aplikacji Bolt/Uber, tym lepsze i częstsze zlecenia
              otrzymujesz. Stała aktywność to Twoja droga do maksymalnych
              zarobków każdego dnia!
            </motion.p>

            <motion.div 
              className={styles.cta}
              {...(shouldAnimate && {
                variants: fadeIn("up", "tween", 0.8, 0.6),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true },
              })}
            >
              <IndustrialButton 
                variant="bolt"
                href="tel:+48787611115"
              >
                Masz pytanie? Zadzwoń
              </IndustrialButton>
            </motion.div>
          </div>

          <motion.div 
            className={styles.right}
            {...(shouldAnimate && {
              variants: fadeIn("left", "tween", 0.5, 0.8),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true },
            })}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EarningsChart;
