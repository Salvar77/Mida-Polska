import React from "react";
import styles from "./WhatsAppButton.module.scss";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "48725437537";
  const message = encodeURIComponent("Dzień dobry, chciałbym zapytać o współpracę z Mida Polska.");
  const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={waLink}
      className={styles.waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Skontaktuj się z nami przez WhatsApp"
    >
      <div className={styles.waContainer}>
        <div className={styles.waTooltip}>Napisz do nas!</div>
        <div className={styles.waIconWrapper}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.waIcon}
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
          </svg>
          <div className={styles.waPulse}></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
