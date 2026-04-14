"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import { recruitmentSteps as defaultSteps, citiesList as defaultCities } from "@/constants";
import SecondaryButton from "../More/SecondaryButton";
import styles from "./Recruitment.module.scss";

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

const Recruitment = ({ data }: { data?: any }) => {
  const shouldAnimate = useShouldAnimate();
  const formLink = "https://forms.gle/2jpFc7AEk1HAcufA6";

  const displaySteps = data?.steps && data.steps.length > 0 ? data.steps : defaultSteps;
  const displayCities = data?.cities && data.cities.length > 0 ? data.cities : defaultCities;

  return (
    <section id="rekrutacja" className={styles.wrapper}>
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
            DOŁĄCZ DO NASZEJ FLOTY
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
            Działamy w <span>Twoim mieście</span>
          </motion.h2>
          <motion.div
            className={styles.divider}
            {...(shouldAnimate && {
              variants: fadeIn("right", "tween", 0.4, 0.6),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true },
            })}
          />
        </div>

        {/* CITIES LIST */}
        <div className={styles.citiesWrapper}>
          {displayCities.map((city: string, index: number) => (
            <motion.span
              key={city}
              className={styles.cityTag}
              {...(shouldAnimate && {
                variants: fadeIn("up", "tween", 0.3 + index * 0.05, 0.5),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.1 },
              })}
            >
              {city}
            </motion.span>
          ))}
        </div>

        <div className={styles.steps}>
          {displaySteps.map((step: any, index: number) => (
            <motion.div
              key={step.id}
              className={styles.stepCard}
              {...(shouldAnimate && {
                variants: fadeIn("up", "tween", 0.6 + index * 0.15, 0.7),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.2 },
              })}
            >
              <div className={styles.stepHeader}>
                <div className={styles.number}>{step.id}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.ctaBottom}
          {...(shouldAnimate && {
            variants: fadeIn("up", "tween", 1.2, 0.6),
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, amount: 0.2 },
          })}
        >
          <SecondaryButton variant="default" href={formLink}>
            Złóż wniosek online
          </SecondaryButton>
          <p className={styles.ctaSubtext}>
            Skontaktujemy się z Tobą w ciągu kilku godzin!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Recruitment;
