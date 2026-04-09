"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import GlassButton from "../More/GlassButton";
import styles from "./Flexibility.module.scss";

const Flexibility = () => {
  const shouldAnimate = useShouldAnimate();

  return (
    <section id="elastycznosc" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.images}>
            <motion.div
              className={styles.imageMain}
              {...(shouldAnimate && {
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { duration: 0.8 },
              })}
            >
              <div className={styles.frame} />
              <Image
                src="/images/praca-kierowca-bolt-uber-mida-polska-lublin.png"
                alt="Praca jako kierowca Bolt i Uber w Mida Polska - Lublin, Toyota LHD"
                width={500}
                height={600}
                className={styles.img}
              />
            </motion.div>

            <motion.div
              className={styles.imageSecondary}
              {...(shouldAnimate && {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.8, delay: 0.2 },
              })}
            >
              <div className={styles.frameAlt} />
              <Image
                src="/images/zarobki-kierowca-aplikacja-taxi-mida-polska.png"
                alt="Aplikacja kierowcy Mida Polska w Skodzie - monitorowanie zarobków Orlen Opole"
                width={400}
                height={500}
                className={styles.img}
              />
            </motion.div>
          </div>

          <motion.div
            className={styles.text}
            {...(shouldAnimate && {
              initial: { opacity: 0, x: 50 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.8 },
            })}
          >
            <span className={styles.subtitle}>TWÓJ CZAS, TWOJE ZASADY</span>
            <h2 className={styles.title}>
              Elastyczne godziny pracy? <span>Tak, to możliwe!</span>
            </h2>
            <p className={styles.description}>
              Dzisiejszy świat jest bardzo aktywny. Wychodzimy naprzeciw
              oczekiwaniom. U nas to Ty wybierasz czy pracujesz w dzień, czy w
              nocy. Pracę możesz dostosować do siebie i do swoich potrzeb.
            </p>
            <p className={styles.description}>
              Potrzebujesz stałego i stabilnego źródła dochodu? A może chcesz
              sobie dorobić? Świetnie! U nas możesz pracować na własnych
              zasadach, korzystając z najnowocześniejszej floty w Twoim mieście.
            </p>

            <div className={styles.cta}>
              <GlassButton 
                variant="freenow"
                href="https://forms.gle/2jpFc7AEk1HAcufA6"
              >
                Dowiedz się więcej
              </GlassButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Flexibility;
