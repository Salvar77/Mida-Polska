"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/animations";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import GlassButton from "../More/GlassButton";
import styles from "./Flexibility.module.scss";
import { useLeadModal } from "../More/LeadContext";

const Flexibility = () => {
  const shouldAnimate = useShouldAnimate();
  const { openLeadModal } = useLeadModal();

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openLeadModal("https://forms.gle/2jpFc7AEk1HAcufA6", "flexibility");
  };

  return (
    <section id="elastycznosc" className={styles.wrapper}>
      <div
        key={shouldAnimate ? "desktop" : "mobile"}
        className={styles.container}
      >
        <div className={styles.grid}>
          <div className={styles.images}>
            <motion.div
              className={styles.imageMain}
              {...(shouldAnimate && {
                variants: fadeIn("right", "tween", 0.1, 0.8),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.2 },
              })}
            >
              <div className={styles.frame} />
              <Image
                src="/images/praca-kierowca-bolt-uber-mida-polska-lublin.webp"
                alt="Praca jako kierowca Bolt i Uber w Mida Polska - Lublin, Toyota LHD"
                width={500}
                height={600}
                className={styles.img}
              />
            </motion.div>

            <motion.div
              className={styles.imageSecondary}
              {...(shouldAnimate && {
                variants: fadeIn("up", "tween", 0.4, 0.8),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.2 },
              })}
            >
              <div className={styles.frameAlt} />
              <Image
                src="/images/zarobki-kierowca-aplikacja-taxi-mida-polska.webp"
                alt="Aplikacja kierowcy Mida Polska w Skodzie - monitorowanie zarobków Orlen Opole"
                width={400}
                height={500}
                className={styles.img}
              />
            </motion.div>
          </div>

          <div className={styles.text}>
            <motion.span
              className={styles.subtitle}
              {...(shouldAnimate && {
                variants: textVariant(0.2),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.2 },
              })}
            >
              TWÓJ CZAS, TWOJE ZASADY
            </motion.span>
            <motion.h2
              className={styles.title}
              {...(shouldAnimate && {
                variants: textVariant(0.3),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true, amount: 0.2 },
              })}
            >
              Elastyczne godziny pracy? <span>Tak, to możliwe!</span>
            </motion.h2>
            <motion.p
              className={styles.description}
              {...(shouldAnimate && {
                variants: fadeIn("left", "tween", 0.5, 0.8),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true },
              })}
            >
              Dzisiejszy świat jest bardzo aktywny. Wychodzimy naprzeciw
              oczekiwaniom. U nas to Ty wybierasz czy pracujesz w dzień, czy w
              nocy. Pracę możesz dostosować do siebie i do swoich potrzeb.
            </motion.p>
            <motion.p
              className={styles.description}
              {...(shouldAnimate && {
                variants: fadeIn("left", "tween", 0.7, 0.8),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true },
              })}
            >
              Potrzebujesz stałego i stabilnego źródła dochodu? A może chcesz
              sobie dorobić? Świetnie! U nas możesz pracować na własnych
              zasadach, korzystając z najnowocześniejszej floty w Twoim mieście.
            </motion.p>

            <motion.div
              className={styles.cta}
              {...(shouldAnimate && {
                variants: fadeIn("up", "tween", 1.0, 0.6),
                initial: "hidden",
                whileInView: "show",
                viewport: { once: true },
              })}
            >
              <GlassButton
                variant="freenow"
                onClick={handleCtaClick}
              >
                Dowiedz się więcej
              </GlassButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flexibility;
