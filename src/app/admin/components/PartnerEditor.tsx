"use client";
import React, { useState, useEffect } from "react";
import styles from "./PartnerEditor.module.scss";

interface PartnerData {
  title: string;
  benefits: string[];
}

const PartnerEditor = () => {
  const [data, setData] = useState<PartnerData>({
    title: "Szukasz pracy jako KIEROWCA?",
    benefits: [
      "Wypłaty co 2 tygodnie — stały zastrzyk gotówki.",
      "Nowoczesna flota — komfortowe i oszczędne hybrydy.",
      "Pełne wsparcie — karta paliwowa i opieka 24/7."
    ],
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/content?sectionId=partner")
      .then((res) => res.json())
      .then((json) => {
        if (json && json.data && json.data.title) {
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
        body: JSON.stringify({ sectionId: "partner", data }),
      });
      if (res.ok) {
        setMessage("✅ Baner zapisany!");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (err) {
      setMessage("❌ Błąd połączenia.");
    } finally {
      setSaving(false);
    }
  };

  const updateBenefit = (index: number, value: string) => {
    const newBenefits = [...data.benefits];
    newBenefits[index] = value;
    setData({ ...data, benefits: newBenefits });
  };

  const addBenefit = () => {
    setData({ ...data, benefits: [...data.benefits, "Nowa korzyść..."] });
  };

  const removeBenefit = (index: number) => {
    setData({ ...data, benefits: data.benefits.filter((_, i) => i !== index) });
  };

  if (loading) return <p>Ładowanie danych banera...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Edycja Sekcji Partnera (Baner)</h2>
      
      <div className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Główny Tytuł Banera:</label>
          <input 
            type="text" 
            value={data.title} 
            onChange={(e) => setData({ ...data, title: e.target.value })}
            className={styles.input}
          />
        </div>

        <div>
          <div className={styles.benefitsHeader}>
            <label className={styles.benefitsLabel}>Lista Korzyści (Punktory):</label>
            <button onClick={addBenefit} className={styles.addPointBtn}>+ Dodaj punkt</button>
          </div>
          <div className={styles.benefitsList}>
            {data.benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <span className={styles.checkIcon}>✔️</span>
                <input 
                  type="text" 
                  value={benefit} 
                  onChange={(e) => updateBenefit(index, e.target.value)}
                  className={styles.benefitInput}
                />
                <button onClick={() => removeBenefit(index)} className={styles.removeBtn}>×</button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <button 
            onClick={handleSave}
            disabled={saving}
            className={styles.saveBtn}
          >
            {saving ? "Zapisywanie..." : "Zapisz baner"}
          </button>
          {message && <span className={styles.statusMessage}>{message}</span>}
        </div>
      </div>
    </div>
  );
};


export default PartnerEditor;
