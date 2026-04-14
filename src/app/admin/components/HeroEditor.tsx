"use client";
import React, { useState, useEffect } from "react";
import styles from "./HeroEditor.module.scss";

interface HeroData {
  title: string;
  titleSpan: string;
  description: string;
  buttonText: string;
}

const HeroEditor = () => {
  const [data, setData] = useState<HeroData>({
    title: "Dołącz do grona",
    titleSpan: "zadowolonych kierowców",
    description: "Nie czekaj, zacznij zarabiać już dziś. Współpracuj z oficjalnym partnerem flotowym.",
    buttonText: "Aplikuj teraz",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // Pobieramy aktualne dane z bazy
  useEffect(() => {
    fetch("/api/content?sectionId=hero")
      .then((res) => res.json())
      .then((json) => {
        if (json && json.data && Object.keys(json.data).length > 0) {
          setData(json.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionId: "hero", data }),
      });

      if (res.ok) {
        setMessage("✅ Zapisano pomyślnie!");
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("❌ Błąd zapisu.");
      }
    } catch (err) {
      setMessage("❌ Błąd połączenia.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Ładowanie danych...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Edycja Sekcji Hero</h2>
      
      <form onSubmit={handleSave} className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Nagłówek (Główna część):</label>
          <input 
            type="text" 
            value={data.title} 
            onChange={(e) => setData({ ...data, title: e.target.value })}
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Nagłówek (Zaznaczony kolor):</label>
          <input 
            type="text" 
            value={data.titleSpan} 
            onChange={(e) => setData({ ...data, titleSpan: e.target.value })}
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Opis:</label>
          <textarea 
            rows={3}
            value={data.description} 
            onChange={(e) => setData({ ...data, description: e.target.value })}
            className={styles.textarea}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Tekst przycisku (CTA):</label>
          <input 
            type="text" 
            value={data.buttonText} 
            onChange={(e) => setData({ ...data, buttonText: e.target.value })}
            className={styles.input}
          />
        </div>

        <div className={styles.footer}>
          <button 
            type="submit" 
            disabled={saving}
            className={styles.submitBtn}
          >
            {saving ? "Zapisywanie..." : "Zapisz zmiany"}
          </button>
          {message && (
            <span className={message.includes("✅") ? styles.successMessage : styles.errorMessage}>
              {message}
            </span>
          )}
        </div>
      </form>
    </div>
  );
};


export default HeroEditor;
