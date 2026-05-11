"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import {
  FiClock,
  FiMapPin,
  FiEye,
  FiTarget,
  FiBriefcase,
  FiArrowRight,
} from "react-icons/fi";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import styles from "./AdOnCar.module.scss";

const carImageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 0.2 } },
};

const badgeVariants = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.8,
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

const cars = [
  {
    src: "/images/skuteczna-mobilna-reklama-na-samochodach-taxi.webp",
    alt: "Toyota Corolla Touring Sports – wizualizacja reklamy na tylnej szybie",
    label: "Toyota Corolla",
  },
  {
    src: "/images/reklama-na-autach-bolt-uber-kampanie-mobilne.webp",
    alt: "Suzuki Swace – wizualizacja reklamy na tylnej szybie",
    label: "Suzuki Swace",
  },
  {
    src: "/images/oklejanie-samochodow-taxi-reklama-zewnetrzna.webp",
    alt: "Skoda Fabia – wizualizacja reklamy na tylnej szybie",
    label: "Škoda Fabia",
  },
];

const usp = [
  { icon: <FiClock />, text: "Samochody jeżdżą 24/7 po mieście" },
  { icon: <FiMapPin />, text: "Obecność w wielu miastach Polski" },
  { icon: <FiEye />, text: "Tysiące wyświetleń dziennie" },
  { icon: <FiTarget />, text: "Targetowanie lokalne – Twój rynek" },
  { icon: <FiBriefcase />, text: "Indywidualna wycena dla firmy" },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function AdOnCar() {
  const shouldAnimate = useShouldAnimate();

  const [activeCarIdx, setActiveCarIdx] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    city: "",
    phone: "",
  });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/ad-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({
          firstName: "",
          lastName: "",
          company: "",
          city: "",
          phone: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="reklama" className={styles.wrapper}>
      <div
        key={shouldAnimate ? "desktop" : "mobile"}
        className={styles.container}
      >
        {/* HEADER */}
        <motion.div
          className={styles.header}
          variants={fadeIn("up", "tween", 0, 0.7)}
          initial={shouldAnimate ? "hidden" : "show"}
          whileInView={shouldAnimate ? "show" : "show"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className={styles.label}>REKLAMA MOBILNA</span>
          <h2 className={styles.title}>
            Twoja firma jedzie <span>24/7</span>
          </h2>
          <p className={styles.subtitle}>
            Umieść wizytówkę swojej firmy na tylnej szybie naszych pojazdów.
            Corolly i Fabie pokonują dziesiątki kilometrów dziennie – Twoja
            reklama jest tam, gdzie są Twoi klienci.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* LEFT – car showcase */}
          <motion.div
            className={styles.carShowcase}
            variants={fadeIn("up", "tween", 0.2, 0.7)}
            initial={shouldAnimate ? "hidden" : "show"}
            whileInView={shouldAnimate ? "show" : "show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.carImageWrapper}>
              <div className={styles.highlight} />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCarIdx}
                  className={styles.motionImageWrapper}
                  variants={carImageVariants}
                  initial={shouldAnimate ? "initial" : "animate"}
                  animate={shouldAnimate ? "animate" : "animate"}
                  exit={shouldAnimate ? "exit" : "animate"}
                >
                  <Image
                    src={cars[activeCarIdx].src}
                    alt={cars[activeCarIdx].alt}
                    width={600}
                    height={400}
                    className={styles.carImage}
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <motion.div
                className={styles.windowBadge}
                variants={badgeVariants}
                initial={shouldAnimate ? "hidden" : "show"}
                whileInView={shouldAnimate ? "show" : "show"}
                viewport={{ once: true }}
              >
                <span>Tu Twoja reklama</span>
              </motion.div>
            </div>

            <div className={styles.carTabs}>
              {cars.map((car, i) => (
                <button
                  key={car.label}
                  className={`${styles.carTab} ${i === activeCarIdx ? styles.active : ""}`}
                  onClick={() => setActiveCarIdx(i)}
                  type="button"
                >
                  {car.label}
                </button>
              ))}
            </div>

            <ul className={styles.uspList}>
              {usp.map((item, i) => (
                <motion.li
                  key={i}
                  className={styles.uspItem}
                  variants={fadeIn("up", "tween", 0.3 + i * 0.08, 0.7)}
                  initial={shouldAnimate ? "hidden" : "show"}
                  whileInView={shouldAnimate ? "show" : "show"}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <span className={styles.uspIcon}>{item.icon}</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT – form card */}
          <motion.div
            className={styles.cardWrapper}
            variants={fadeIn("up", "tween", 0.35, 0.7)}
            initial={shouldAnimate ? "hidden" : "show"}
            whileInView={shouldAnimate ? "show" : "show"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardDots}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
                <p className={styles.cardHeaderTitle}>
                  Poproś o indywidualną ofertę
                </p>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardLogo}>
                  <Image
                    src="/images/logo-mida-polska.webp"
                    alt="Mida Polska logo"
                    width={80}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className={styles.cardTagline}>
                  Zostaw swoje dane – oddzwonimy z ofertą skrojoną pod Twoją
                  firmę.
                </p>

                {status === "success" ? (
                  <div className={styles.successMsg}>
                    <span>✅</span>
                    <p>Wysłano! Skontaktujemy się wkrótce.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className={styles.form}
                    noValidate
                  >
                    <motion.div
                      className={styles.row}
                      variants={fadeIn("up", "tween", 0.4, 0.7)}
                      initial={shouldAnimate ? "hidden" : "show"}
                      whileInView={shouldAnimate ? "show" : "show"}
                      viewport={{ once: true }}
                    >
                      <div className={styles.field}>
                        <label htmlFor="ad-firstName">Imię</label>
                        <input
                          id="ad-firstName"
                          name="firstName"
                          type="text"
                          placeholder="Jan"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="ad-lastName">Nazwisko</label>
                        <input
                          id="ad-lastName"
                          name="lastName"
                          type="text"
                          placeholder="Kowalski"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className={styles.field}
                      variants={fadeIn("up", "tween", 0.5, 0.7)}
                      initial={shouldAnimate ? "hidden" : "show"}
                      whileInView={shouldAnimate ? "show" : "show"}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="ad-company">Nazwa firmy</label>
                      <input
                        id="ad-company"
                        name="company"
                        type="text"
                        placeholder="Firma ABC sp. z o.o."
                        value={form.company}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>

                    <motion.div
                      className={styles.row}
                      variants={fadeIn("up", "tween", 0.6, 0.7)}
                      initial={shouldAnimate ? "hidden" : "show"}
                      whileInView={shouldAnimate ? "show" : "show"}
                      viewport={{ once: true }}
                    >
                      <div className={styles.field}>
                        <label htmlFor="ad-city">Miasto</label>
                        <input
                          id="ad-city"
                          name="city"
                          type="text"
                          placeholder="Lublin"
                          value={form.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="ad-phone">Telefon</label>
                        <input
                          id="ad-phone"
                          name="phone"
                          type="tel"
                          placeholder="500 000 000"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </motion.div>

                    {status === "error" && (
                      <p className={styles.errorMsg}>
                        Coś poszło nie tak. Spróbuj ponownie lub zadzwoń: 787
                        611 115
                      </p>
                    )}

                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={status === "loading"}
                    >
                      <span>
                        {status === "loading"
                          ? "Wysyłanie..."
                          : "Wyślij zapytanie"}
                      </span>
                      {status !== "loading" && (
                        <FiArrowRight className={styles.btnIcon} />
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
