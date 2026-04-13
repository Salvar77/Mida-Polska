"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import GlassButton from "../More/GlassButton";
import styles from "./HowToStart.module.scss";

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

const steps = [
  {
    id: 1,
    title: "Posiadaj prawo jazdy",
    description: "Minimum 2 lata doświadczenia za kółkiem.",
  },
  {
    id: 2,
    title: "Wykonaj badania",
    description: "Badania lekarskie i psychotechniczne na kierowcę taxi.",
  },
  {
    id: 3,
    title: "Niekaralność",
    description: "Uzyskaj zaświadczenie z sądu o niekaralności.",
  },
  {
    id: 4,
    title: "Skontaktuj się",
    description: "Nasz zespół przeprowadzi Cię przez szkolenie z aplikacji.",
  },
  {
    id: 5,
    title: "Zacznij zarabiać",
    description: "Wsiadaj do wygodnego auta i ruszaj w miasto!",
  },
];

const HowToStart = () => {
  const shouldAnimate = useShouldAnimate();

  return (
    <section id="jak-zaczac" className={styles.wrapper}>
      <div key={shouldAnimate ? "desktop" : "mobile"} className={styles.container}>
        <div className={styles.header}>
          <motion.span
            className={styles.subtitle}
            {...(shouldAnimate && {
              variants: textVariant(0.1),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.2 },
            })}
          >
            STARTUJEMY
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
            Zaczynaj zarabiać w <span>kilku krokach</span>
          </motion.h2>
          <motion.p
            className={styles.description}
            {...(shouldAnimate && {
              variants: fadeIn("up", "tween", 0.3, 0.6),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true },
            })}
          >
            Chcesz rozpocząć pracę jako kierowca? Nasz Zespół pomoże Ci w
            przejściu przez cały proces! Na początek kilka wymagań, które musisz
            spełnić:
          </motion.p>

          <motion.ul
            className={styles.requirements}
            {...(shouldAnimate && {
              variants: fadeIn("up", "tween", 0.4, 0.6),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true },
            })}
          >
            <li>Gwarantujemy szkolenie.</li>
            <li>Brak własnej działalności? To nie problem!</li>
            <li>Wsparcie 7 dni w tygodniu.</li>
          </motion.ul>
        </div>

        <div className={styles.timelineContainer}>
          <motion.div 
            className={styles.line} 
            {...(shouldAnimate && {
              variants: fadeIn("down", "tween", 0.5, 1),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true },
            })}
          />
          <div className={styles.timeline}>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={styles.step}
                {...(shouldAnimate && {
                  variants: fadeIn(index % 2 === 0 ? "right" : "left", "tween", 0.6 + index * 0.15, 0.6),
                  initial: "hidden",
                  whileInView: "show",
                  viewport: { once: true, amount: 0.2 },
                })}
              >
                <div className={styles.dot}>
                  <div className={styles.innerDot} />
                </div>
                <div className={styles.stepContent}>
                  <div className={styles.stepText}>
                    <h3 className={step.id === 5 ? styles.highlight : ""}>
                      {step.title}
                    </h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className={styles.footer}
          {...(shouldAnimate && {
            variants: fadeIn("up", "tween", 1.4, 0.6),
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, amount: 0.2 },
          })}
        >
          <GlassButton variant="bolt" href="https://forms.gle/2jpFc7AEk1HAcufA6">
            Zadaj pytanie / Zadzwoń
          </GlassButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToStart;
