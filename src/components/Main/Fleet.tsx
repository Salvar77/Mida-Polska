"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/lib/animations";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import IndustrialButton from "../More/IndustrialButton";
import clsx from "clsx";
import styles from "./Fleet.module.scss";

const defaultFleet = [
  {
    id: 1,
    name: "Skoda Fabia",
    year: "2021+",
    image: "/images/wynajem-aut-pod-taxi-skoda-fabia-lpg.webp",
    specs: ["Klimatyzacja", "Hybryda / LPG", "Niskie spalanie"],
  },
  {
    id: 2,
    name: "Suzuki Swace",
    year: "2022+",
    image: "/images/wynajem-samochodow-taxi-suzuki-swace-kombi.webp",
    specs: ["Wersja Kombi", "Pełna Hybryda", "Wysoki komfort"],
  },
  {
    id: 3,
    name: "Toyota Corolla",
    year: "2022+",
    image: "/images/wynajem-samochodow-na-taxi-bolt-uber-toyota-corolla.webp",
    specs: ["Najwyższy standard", "Hybryda 5 Gen", "Bezpieczeństwo"],
  },
];

interface FleetProps {
  data?: any[];
}

const Fleet = ({ data }: FleetProps) => {
  const shouldAnimate = useShouldAnimate();
  const displayFleet = data && data.length > 0 ? data : defaultFleet;

  return (
    <section id="flota" className={styles.wrapper}>
      <div
        key={shouldAnimate ? "desktop" : "mobile"}
        className={styles.container}
      >
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
            NASZA FLOTA
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
            To Twoje <span>narzędzie pracy</span>
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
            Stawiamy na komfort naszych kierowców i pasażerów. Kierowcy mają do
            dyspozycji nowoczesne i komfortowe pojazdy. Każdy samochód
            wyposażony jest w klimatyzację, poduszki powietrzne, aktywne i
            bierne systemy bezpieczeństwa!
          </motion.p>
        </div>

        <div className={styles.showcase}>
          <div className={styles.orbDecor}>
            <div className={styles.glow}></div>
          </div>

          {displayFleet.map((car, index) => {
            const carKey =
              (car.name || "car").split(" ")[1]?.toLowerCase() || "car";

            return (
              <motion.div
                key={car.id}
                className={clsx(styles.carShard, styles[carKey])}
                {...(shouldAnimate && {
                  variants: fadeIn("up", "tween", 0.5 + index * 0.15, 0.7),
                  initial: "hidden",
                  whileInView: "show",
                  viewport: { once: true, amount: 0.2 },
                })}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={
                      car.image ||
                      "/images/wynajem-aut-pod-taxi-skoda-fabia-lpg.webp"
                    }
                    alt={car.name || "Auto"}
                    width={600}
                    height={400}
                    className={styles.carImg}
                  />
                </div>

                {/* Clean Label underneath image for spatial stability */}
                <div className={styles.label}>
                  <h3 className={styles.carName}>
                    {car.name || "Nowy pojazd"}
                  </h3>
                  <ul className={styles.specsList}>
                    <li>{car.year || "2022"}</li>
                    {(car.specs || [])
                      .slice(1)
                      .map((spec: string, i: number) => (
                        <li key={i}>{spec}</li>
                      ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className={styles.footer}>
          <motion.p
            {...(shouldAnimate && {
              variants: fadeIn("up", "tween", 1.0, 0.6),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true },
            })}
          >
            Oprócz tego nasze pojazdy są w pełni przystosowane do wykonywania
            usług taxi. Każdy posiada wypis z licencji taxi, numer boczny i
            niezbędne oznakowanie.
          </motion.p>
          <motion.div
            className={styles.cta}
            {...(shouldAnimate && {
              variants: fadeIn("up", "tween", 1.2, 0.6),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true },
            })}
          >
            <IndustrialButton variant="uber" href="tel:+48787611115">
              Więcej informacji pod telefonem
            </IndustrialButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
