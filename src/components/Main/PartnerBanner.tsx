"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import AnimatedButton from "../More/AnimatedButton";
import styles from "./PartnerBanner.module.scss";

const PartnerBanner = ({ data }: { data?: any }) => {
  const shouldAnimate = useShouldAnimate();

  const title = data?.title || "Szukasz pracy jako KIEROWCA?";
  const benefits = data?.benefits && data.benefits.length > 0 ? data.benefits : [
    "Wypłaty co 2 tygodnie — stały zastrzyk gotówki.",
    "Nowoczesna flota — komfortowe i oszczędne hybrydy.",
    "Pełne wsparcie — karta paliwowa i opieka 24/7."
  ];

  return (
    <div className={styles.wrapper}>
      <motion.div 
        className={styles.banner}
        {...(shouldAnimate && {
          initial: { y: 20, opacity: 0 },
          whileInView: { y: 0, opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.6 }
        })}
      >
        <Image
          src="/images/fleet_banner_pl_v2.png"
          alt="Nowoczesna flota Mida Polska - Uber, Bolt, FreeNow"
          fill
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
        
        <div className={styles.content}>
          <div className={styles.badge}>OFICJALNY PARTNER FLOTOWY 🛡️</div>
          <h2 className={styles.title}>
            {title}
          </h2>
          
          <ul className={styles.benefits}>
            {benefits.map((benefit: string, index: number) => (
              <li key={index}>✔️ {benefit}</li>
            ))}
          </ul>

          <div className={styles.ctaWrapper}>
            <AnimatedButton href="https://forms.gle/2jpFc7AEk1HAcufA6">
                Aplikuj do floty
            </AnimatedButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PartnerBanner;
