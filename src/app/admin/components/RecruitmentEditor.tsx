"use client";
import React, { useState, useEffect } from "react";
import styles from "./RecruitmentEditor.module.scss";

interface Step {
  id: number;
  title: string;
  description: string;
}

interface RecruitmentData {
  steps: Step[];
  cities: string[];
}

const RecruitmentEditor = () => {
  const [data, setData] = useState<RecruitmentData>({
    steps: [],
    cities: [],
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [newCity, setNewCity] = useState("");

  useEffect(() => {
    fetch("/api/content?sectionId=recruitment")
      .then((res) => res.json())
      .then((json) => {
        if (json && json.data && Array.isArray(json.data.steps)) {
          setData(json.data);
        } else {
          // Fallback do twardych danych na start
          setData({
            steps: [
              { id: 1, title: "Skontaktuj się z nami", description: "Wypełnij krótki formularz na stronie lub zadzwoń bezpośrednio do nas." },
              { id: 2, title: "Przygotuj dokumenty", description: "Będziemy potrzebować Twojego prawa jazdy i zaświadczenia o niekaralności." },
              { id: 3, title: "Podpisz umowę", description: "Zapraszamy Cię do naszego biura w celu podpisania umowy." },
              { id: 4, title: "Odbierz wypis z licencji", description: "Przekażemy Ci wypis z licencji taxi na Twój samochód." },
              { id: 5, title: "Zacznij zarabiać!", description: "Możesz już zalogować się do aplikacji i zacząć zarabiać." },
            ],
            cities: ["Lublin", "Białystok", "Bydgoszcz", "Częstochowa", "Opole", "Wałbrzych"],
          });
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
        body: JSON.stringify({ sectionId: "recruitment", data }),
      });
      if (res.ok) {
        setMessage("✅ Zapisano pomyślnie!");
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (err) {
      setMessage("❌ Błąd połączenia.");
    } finally {
      setSaving(false);
    }
  };

  const updateStep = (id: number, field: keyof Step, value: string) => {
    setData({
      ...data,
      steps: data.steps.map((s) => (s.id === id ? { ...s, [field]: value } : s)),
    });
  };

  const addCity = () => {
    if (newCity && !data.cities.includes(newCity)) {
      setData({ ...data, cities: [...data.cities, newCity] });
      setNewCity("");
    }
  };

  const removeCity = (city: string) => {
    setData({ ...data, cities: data.cities.filter((c) => c !== city) });
  };

  if (loading) return <p>Ładowanie danych rekrutacji...</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Zarządzanie Rekrutacją i Miastami</h2>
      
      <div className={styles.mainGrid}>
        
        {/* LEWA KOLUMNA: KROKI */}
        <div className={styles.stepsColumn}>
          <h3 className={styles.sectionLabel}>Kroki Rekrutacji</h3>
          {data.steps.map((step) => (
            <div key={step.id} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>{step.id}</span>
                <input 
                  type="text" 
                  value={step.title} 
                  onChange={(e) => updateStep(step.id, "title", e.target.value)}
                  className={styles.stepTitleInput}
                />
              </div>
              <textarea 
                rows={2}
                value={step.description}
                onChange={(e) => updateStep(step.id, "description", e.target.value)}
                className={styles.stepDescription}
              />
            </div>
          ))}
        </div>

        {/* PRAWA KOLUMNA: MIASTA */}
        <div className={styles.citiesColumn}>
          <h3 className={styles.sectionLabel}>Obsługiwane Miasta</h3>
          <div className={styles.cityTags}>
            {data.cities.map((city) => (
              <span key={city} className={styles.cityTag}>
                {city}
                <button 
                  onClick={() => removeCity(city)}
                  className={styles.removeCityBtn}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className={styles.addCityForm}>
            <input 
              type="text" 
              placeholder="Dodaj miasto..." 
              value={newCity}
              onChange={(e) => setNewCity(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addCity()}
              className={styles.cityInput}
            />
            <button 
              onClick={addCity}
              className={styles.addBtn}
            >
              Dodaj
            </button>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <button 
          onClick={handleSave}
          disabled={saving}
          className={styles.saveBtn}
        >
          {saving ? "Zapisywanie..." : "Zapisz sekcję rekrutacji"}
        </button>
        {message && <span className={styles.statusMessage}>{message}</span>}
      </div>
    </div>
  );
};


export default RecruitmentEditor;
