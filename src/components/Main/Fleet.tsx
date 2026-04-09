"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import IndustrialButton from "../More/IndustrialButton";
import clsx from "clsx";
import styles from "./Fleet.module.scss";

const fleet = [
  {
    id: 1,
    name: "Skoda Fabia",
    year: "2021+",
    image: "/images/fleet_skoda.png",
    specs: ["Klimatyzacja", "Hybryda / LPG", "Niskie spalanie"],
  },
  {
    id: 2,
    name: "Suzuki Swace",
    year: "2024",
    image: "/images/fleet_suzuki.png",
    specs: ["Wersja Kombi", "Pełna Hybryda", "Wysoki komfort"],
  },
  {
    id: 3,
    name: "Toyota Corolla",
    year: "2024",
    image: "/images/fleet_toyota.png",
    specs: ["Najwyższy standard", "Hybryda 5 Gen", "Bezpieczeństwo"],
  },
];

const Fleet = () => {
  const shouldAnimate = useShouldAnimate();

  return (
    <section id="flota" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>NASZA FLOTA</span>
          <h2 className={styles.title}>
            To Twoje <span>narzędzie pracy</span>
          </h2>
          <p className={styles.description}>
            Stawiamy na komfort naszych kierowców i pasażerów. Kierowcy mają do
            dyspozycji nowoczesne i komfortowe pojazdy. Każdy samochód
            wyposażony jest w klimatyzację, poduszki powietrzne, aktywne i
            bierne systemy bezpieczeństwa!
          </p>
        </div>

        <div className={styles.showcase}>
          {/* Central Decorative Orb (Geometric Base) */}
          <div className={styles.orbDecor}>
            <div className={styles.glow}></div>
          </div>

          {fleet.map((car, index) => {
            const carKey = car.name.split(" ")[1].toLowerCase(); // fabia, swace, corolla

            return (
              <motion.div
                key={car.id}
                className={clsx(styles.carShard, styles[carKey])}
                {...(shouldAnimate && {
                  initial: { opacity: 0, scale: 0.95 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true },
                  transition: { duration: 0.6, delay: index * 0.1 },
                })}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={600}
                    height={400}
                    className={styles.carImg}
                  />
                </div>

                {/* Clean Label underneath image for spatial stability */}
                <div className={styles.label}>
                  <h3 className={styles.carName}>{car.name}</h3>
                  <ul className={styles.specsList}>
                    <li>{car.year}</li>
                    {car.specs.slice(1).map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className={styles.footer}>
          <p>
            Oprócz tego nasze pojazdy są w pełni przystosowane do wykonywania
            usług taxi. Każdy posiada wypis z licencji taxi, numer boczny i
            niezbędne oznakowanie.
          </p>
          <div className={styles.cta}>
            <IndustrialButton 
              variant="uber"
              href="tel:+48787611115"
            >
              Więcej informacji pod telefonem
            </IndustrialButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
