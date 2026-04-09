import React from "react";
import styles from "./GoogleMap.module.scss";

const GoogleMap = () => {
  return (
    <div className={styles.mapWrapper}>
      <iframe
        title="Mapa lokalizacji Mida Polska - Autoryzowany partner Bolt, Uber, FreeNow - Lublin"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94824.92240291454!2d22.530995726542965!3d51.23506613083382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225990641c6f6d%3A0x8dbf9a99bd184e1b!2sMIDA%20AUTORYZOWANY%20PARTNER%20FLOTOWY%20Bolt%2C%20FreeNow%2C%20Uber!5e1!3m2!1spl!2spl!4v1775564069088!5m2!1spl!2spl"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
