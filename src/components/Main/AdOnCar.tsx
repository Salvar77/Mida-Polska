"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiClock, FiMapPin, FiEye, FiTarget, FiBriefcase, FiArrowRight } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";
import { useShouldAnimate } from "@/hooks/useShouldAnimate";
import styles from "./AdOnCar.module.scss";

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween" as const, ease: "easeOut" as const, duration: 0.7, delay },
  },
});

const cars = [
  {
    src: "/images/corolla_white_v4_ad.png",
    alt: "Toyota Corolla Touring Sports – wizualizacja reklamy na tylnej szybie",
    label: "Toyota Corolla",
  },
  {
    src: "/images/swace_pl_ad.png",
    alt: "Suzuki Swace – wizualizacja reklamy na tylnej szybie",
    label: "Suzuki Swace",
  },
  {
    src: "/images/fabia_ad.png",
    alt: "Skoda Fabia – wizualizacja reklamy na tylnej szybie",
    label: "Škoda Fabia",
  },
];

const usp = [
  { icon: <FiClock />, text: "Auta jeżdżą 24/7 po mieście" },
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
        setForm({ firstName: "", lastName: "", company: "", city: "", phone: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="reklama" className={styles.wrapper}>
      <div className={styles.container}>

        {/* ─── HEADER ─── */}
        <motion.div
          className={styles.header}
          {...(shouldAnimate && {
            variants: fadeIn(0),
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, amount: 0.2 },
          })}
        >
          <span className={styles.label}>REKLAMA MOBILNA</span>
          <h2 className={styles.title}>
            Twoja firma jedzie <span>24/7</span>
          </h2>
          <p className={styles.subtitle}>
            Umieść wizytówkę swojej firmy na tylnej szybie naszych pojazdów.
            Corolly i Fabie pokonują dziesiątki kilometrów dziennie –
            Twoja reklama jest tam, gdzie są Twoi klienci.
          </p>
        </motion.div>

        {/* ─── MAIN GRID ─── */}
        <div className={styles.grid}>

          {/* LEFT – car showcase */}
          <motion.div
            className={styles.carShowcase}
            {...(shouldAnimate && {
              variants: fadeIn(0.2),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.2 },
            })}
          >
            <div className={styles.carImageWrapper}>
              <div className={styles.highlight} />
              <Image
                src={cars[activeCarIdx].src}
                alt={cars[activeCarIdx].alt}
                width={600}
                height={400}
                className={styles.carImage}
                priority
              />
              <div className={styles.windowBadge}>
                <span>Tu Twoja reklama</span>
              </div>
            </div>

            {/* car switcher */}
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

            {/* USP list */}
            <ul className={styles.uspList}>
              {usp.map((item, i) => (
                <motion.li
                  key={i}
                  className={styles.uspItem}
                  {...(shouldAnimate && {
                    variants: fadeIn(0.3 + i * 0.08),
                    initial: "hidden",
                    whileInView: "show",
                    viewport: { once: true, amount: 0.1 },
                  })}
                >
                  <span className={styles.uspIcon}>{item.icon}</span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT – business card form */}
          <motion.div
            className={styles.cardWrapper}
            {...(shouldAnimate && {
              variants: fadeIn(0.35),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.2 },
            })}
          >
            <div className={styles.card}>
              {/* card header */}
              <div className={styles.cardHeader}>
                <div className={styles.cardDots}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
                <p className={styles.cardHeaderTitle}>Poproś o indywidualną ofertę</p>
              </div>

              {/* card body */}
              <div className={styles.cardBody}>
                <div className={styles.cardLogo}>
                  <Image
                    src="/images/logo.png"
                    alt="Mida Polska logo"
                    width={80}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className={styles.cardTagline}>
                  Zostaw swoje dane – oddzwonimy z ofertą skrojoną pod Twoją firmę.
                </p>

                {status === "success" ? (
                  <div className={styles.successMsg}>
                    <span>✅</span>
                    <p>Wysłano! Skontaktujemy się wkrótce.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form} noValidate>
                    <div className={styles.row}>
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
                          autoComplete="given-name"
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
                          autoComplete="family-name"
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="ad-company">Nazwa firmy</label>
                      <input
                        id="ad-company"
                        name="company"
                        type="text"
                        placeholder="Firma ABC sp. z o.o."
                        value={form.company}
                        onChange={handleChange}
                        required
                        autoComplete="organization"
                      />
                    </div>

                    <div className={styles.row}>
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
                          autoComplete="address-level2"
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
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    {status === "error" && (
                      <p className={styles.errorMsg}>
                        Coś poszło nie tak. Spróbuj ponownie lub zadzwoń: 787 611 115
                      </p>
                    )}

                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={status === "loading"}
                      id="ad-inquiry-submit"
                    >
                      <span>{status === "loading" ? "Wysyłanie..." : "Wyślij zapytanie"}</span>
                      {status !== "loading" && <FiArrowRight className={styles.btnIcon} />}
                    </button>

                    <p className={styles.disclaimer}>
                      Dane przetwarzamy zgodnie z{" "}
                      <a href="/polityka-prywatnosci">Polityką Prywatności</a>.
                    </p>
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
