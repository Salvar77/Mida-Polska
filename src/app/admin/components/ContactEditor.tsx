"use client";
import React, { useState, useEffect } from "react";
import styles from "./ContactEditor.module.scss";

interface ContactData {
  addressLine1: string;
  addressLine2: string;
  phone: string;
  hoursTitle: string;
  hoursRange: string;
  formLink: string;
}

const ContactEditor = () => {
  const [data, setData] = useState<ContactData>({
    addressLine1: "ul. Nałęczowska 30 lok. 12",
    addressLine2: "20-701 Lublin",
    phone: "+48 787 611 115",
    hoursTitle: "Poniedziałek - Piątek",
    hoursRange: "10:00 - 18:00",
    formLink: "https://forms.gle/2jpFc7AEk1HAcufA6",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/content?sectionId=contact")
      .then((res) => res.json())
      .then((json) => {
        if (json && json.data && json.data.phone) {
          setData(json.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionId: "contact", data }),
      });
      if (res.ok) {
        setMessage("✅ Dane kontaktowe zapisane!");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (err) {
      setMessage("❌ Błąd połączenia.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Ładowanie danych kontaktowych...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Edycja Sekcji Kontakt</h2>
      
      <div className={styles.form}>
        
        <div className={styles.grid}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Ulica i numer:</label>
            <input 
              type="text" 
              value={data.addressLine1} 
              onChange={(e) => setData({ ...data, addressLine1: e.target.value })}
              className={styles.input}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Kod i miasto:</label>
            <input 
              type="text" 
              value={data.addressLine2} 
              onChange={(e) => setData({ ...data, addressLine2: e.target.value })}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Telefon kontaktowy:</label>
          <input 
            type="text" 
            value={data.phone} 
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            className={styles.input}
          />
        </div>

        <div className={styles.grid}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Dni pracy:</label>
            <input 
              type="text" 
              value={data.hoursTitle} 
              onChange={(e) => setData({ ...data, hoursTitle: e.target.value })}
              className={styles.input}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Godziny pracy:</label>
            <input 
              type="text" 
              value={data.hoursRange} 
              onChange={(e) => setData({ ...data, hoursRange: e.target.value })}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Link do formularza / Google Maps:</label>
          <input 
            type="text" 
            value={data.formLink} 
            onChange={(e) => setData({ ...data, formLink: e.target.value })}
            className={styles.input}
          />
        </div>

        <div className={styles.footer}>
          <button 
            onClick={handleSave}
            disabled={saving}
            className={styles.saveBtn}
          >
            {saving ? "Zapisywanie..." : "Zapisz dane kontaktowe"}
          </button>
          {message && <span className={styles.statusMessage}>{message}</span>}
        </div>
      </div>
    </div>
  );
};


export default ContactEditor;
