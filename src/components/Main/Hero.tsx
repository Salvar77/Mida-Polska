"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import styles from "./Hero.module.scss";
import AnimatedButton from "../More/AnimatedButton";

const Hero = () => {
  const shouldAnimate = useShouldAnimate();

  return (
    <section className={styles.hero}>
      {/* Background Image - Local */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/herobg.png"
          alt="Mida Polska - Praca jako kierowca Bolt, Uber, FreeNow"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          {...(shouldAnimate && {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" }
          })}
        >
          <h1 className={styles.title}>
            Dołącz do grona <br />
            <span>zadowolonych kierowców</span>
          </h1>
          
          <p className={styles.description}>
            Nie czekaj, zacznij zarabiać już dziś. <br />
            Współpracuj z oficjalnym partnerem flotowym.
          </p>

          <div className={styles.ctaWrapper}>
            <AnimatedButton 
              href="https://forms.gle/2jpFc7AEk1HAcufA6"
              className={styles.mainCta}
            >
              Aplikuj teraz
            </AnimatedButton>
          </div>

          {/* Partner Logos - Local */}
          <motion.div 
            className={styles.partners}
            {...(shouldAnimate && {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.5, duration: 1 }
            })}
          >
            <div className={styles.partnerItem}>
                <Image src="/images/bolt.png" alt="Bolt Logo" width={80} height={40} />
            </div>
            <div className={styles.partnerItem}>
                <Image src="/images/freenow.png" alt="FreeNow Logo" width={100} height={40} />
            </div>
            <div className={styles.partnerItem}>
                <Image src="/images/uber.png" alt="Uber Logo" width={80} height={40} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
