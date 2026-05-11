"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LeadModal.module.scss";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  targetUrl: string;
}

import { citiesList } from "@/constants";

const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  source = "general",
  targetUrl,
}) => {
  const [role, setRole] = useState("Kierowca taxi, na aplikacjach Bolt Uber FreeNow");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState(citiesList[0] || "Lublin");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const cities = citiesList;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, city, role, source }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
        }, 3000);
      } else {
        alert("Wystąpił błąd. Spróbuj ponownie.");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("Błąd połączenia. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={onClose}>
              &times;
            </button>

            {!isSuccess ? (
              <>
                <div className={styles.header}>
                  <h2>Dołącz do <span>MIDA</span></h2>
                  <p>Wypełnij dane, aby rozpocząć rekrutację.</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <label>Chcę pracować jako:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                      <option>Kierowca taxi, na aplikacjach Bolt Uber FreeNow</option>
                      <option>Kierowca międzynarodowy busa do 3,5t</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Imię i Nazwisko</label>
                    <input
                      type="text"
                      placeholder="np. Jan Kowalski"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className={styles.grid}>
                    <div className={styles.inputGroup}>
                      <label>Telefon</label>
                      <input
                        type="tel"
                        placeholder="Numer telefonu"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Adres e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Miasto pracy</label>
                    <select value={city} onChange={(e) => setCity(e.target.value)}>
                      {cities.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>

                  <div className={styles.checkboxGroup}>
                    <input
                      type="checkbox"
                      id="consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      required
                    />
                    <label htmlFor="consent">
                      Wyrażam zgodę na kontakt telefoniczny przez Mida Sp. z o. o. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wysyłanie..." : "Wyślij Zgłoszenie"}
                  </button>
                </form>

                <div className={styles.footer}>
                  <p>
                    Twoje zgłoszenie zostanie przesłane bezpośrednio do działu rekrutacji. 
                    Skontaktujemy się z Tobą telefonicznie.
                  </p>
                </div>
              </>
            ) : (
              <div className={styles.successMessage}>
                <div className={styles.icon}>✓</div>
                <h3>Zgłoszenie wysłane!</h3>
                <p>Dziękujemy. Nasz rekruter skontaktuje się z Tobą wkrótce.</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;
