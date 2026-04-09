"use client";
import React from "react";
import { motion } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import GlassButton from "../More/GlassButton";
import styles from "./HowToStart.module.scss";

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
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          {...(shouldAnimate && {
            initial: { opacity: 0, y: -20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
          })}
        >
          <span className={styles.subtitle}>STARTUJEMY</span>
          <h2 className={styles.title}>
            Zaczynaj zarabiać w <span>kilku krokach</span>
          </h2>
          <p className={styles.description}>
            Chcesz rozpocząć pracę jako kierowca? Nasz Zespół pomoże Ci w
            przejściu przez cały proces! Na początek kilka wymagań, które musisz
            spełnić:
          </p>

          <ul className={styles.requirements}>
            <li>Gwarantujemy szkolenie.</li>
            <li>Brak własnej działalności? To nie problem!</li>
            <li>Wsparcie 7 dni w tygodniu.</li>
          </ul>
        </motion.div>

        <div className={styles.timelineContainer}>
          <div className={styles.line} />
          <div className={styles.timeline}>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={styles.step}
                {...(shouldAnimate && {
                  initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { delay: index * 0.1, duration: 0.5 },
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
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.6 },
          })}
        >
          <GlassButton 
            variant="bolt"
            href="https://forms.gle/2jpFc7AEk1HAcufA6"
          >
            Zadaj pytanie / Zadzwoń
          </GlassButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToStart;
