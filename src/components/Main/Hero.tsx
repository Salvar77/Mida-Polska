"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import styles from "./Hero.module.scss";
import AnimatedButton from "../More/AnimatedButton";

interface HeroProps {
  data?: {
    title?: string;
    titleSpan?: string;
    description?: string;
    buttonText?: string;
  };
}

const Hero = ({ data }: HeroProps) => {
  const shouldAnimate = useShouldAnimate();

  const content = {
    title: data?.title || "Oficjalny Partner Flotowy",
    titleSpan: data?.titleSpan || "Uber, Bolt i FREENOW",
    description:
      data?.description ||
      "Zacznij zarabiać jako kierowca – szkolenie gratis, wsparcie 7 dni w tygodniu, najlepsza flota w Twoim mieście. Lublin i cała Polska.",
    buttonText: data?.buttonText || "Aplikuj teraz",
  };

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <div className={styles.desktopImage}>
          <Image
            src="/images/najlepszy-partner-flotowy-bolt-uber-freenow-polska.png"
            alt="Mida Polska - Praca jako kierowca Bolt, Uber, FREENOW"
            fill
            priority
            quality={100}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className={styles.mobileImage}>
          <Image
            src="/images/najlepszy-partner-flotowy-bolt-uber-freenow-polska-mobile.png"
            alt="Mida Polska - Praca jako kierowca Bolt, Uber, FREENOW"
            fill
            priority
            quality={100}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          {...(shouldAnimate && {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" },
          })}
        >
          <h1 className={styles.title}>
            {content.title} <br />
            <span>{content.titleSpan}</span>
          </h1>

          <p className={styles.description}>{content.description}</p>

          <div className={styles.ctaWrapper}>
            <AnimatedButton
              href="https://forms.gle/2jpFc7AEk1HAcufA6"
              className={styles.mainCta}
            >
              {content.buttonText}
            </AnimatedButton>
          </div>

          <motion.div
            className={styles.partners}
            {...(shouldAnimate && {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.5, duration: 1 },
            })}
          >
            <div className={styles.partnerItem}>
              <Image
                src="/images/bolt-logo.webp"
                alt="Bolt Logo"
                width={80}
                height={40}
              />
            </div>
            <div className={styles.partnerItem}>
              <Image
                src="/images/freenow-logo.webp"
                alt="FREENOW Logo"
                width={100}
                height={40}
              />
            </div>
            <div className={styles.partnerItem}>
              <Image
                src="/images/uber-logo.webp"
                alt="Uber Logo"
                width={80}
                height={40}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
