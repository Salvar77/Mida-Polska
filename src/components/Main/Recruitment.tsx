"use client";
import React from "react";
import { motion } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import { recruitmentSteps, citiesList } from "@/constants";
import SecondaryButton from "../More/SecondaryButton";
import styles from "./Recruitment.module.scss";

const Recruitment = () => {
  const shouldAnimate = useShouldAnimate();
  const formLink = "https://forms.gle/2jpFc7AEk1HAcufA6";

  return (
    <section id="rekrutacja" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
            <span className={styles.subtitle}>DOŁĄCZ DO NASZEJ FLOTY</span>
            <h2 className={styles.title}>Działamy w <span>Twoim mieście</span></h2>
            <div className={styles.divider} />
        </div>

        {/* CITIES LIST */}
        <div className={styles.citiesWrapper}>
            {citiesList.map((city, index) => (
                <motion.span 
                    key={city}
                    className={styles.cityTag}
                    {...(shouldAnimate && {
                        initial: { opacity: 0, scale: 0.8 },
                        whileInView: { opacity: 1, scale: 1 },
                        viewport: { once: true },
                        transition: { delay: index * 0.05 }
                    })}
                >
                    {city}
                </motion.span>
            ))}
        </div>

        <div className={styles.steps}>
          {recruitmentSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className={styles.stepCard}
              {...(shouldAnimate && {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.2 },
                transition: { delay: index * 0.1, duration: 0.5 }
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

        <div className={styles.ctaBottom}>
            <SecondaryButton 
              variant="default"
              href={formLink}
            >
              Złóż wniosek online
            </SecondaryButton>
            <p className={styles.ctaSubtext}>Skontaktujemy się z Tobą w ciągu kilku godzin!</p>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
