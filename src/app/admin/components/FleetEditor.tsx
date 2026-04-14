"use client";
import React, { useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";
import styles from "./FleetEditor.module.scss";

interface Car {
  id: string; // Wykorzystamy go do klucza Reacta
  name: string;
  year: string;
  image: string;
  specs: string[];
}

const FleetEditor = () => {
  const [fleet, setFleet] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/content?sectionId=fleet")
      .then((res) => res.json())
      .then((json) => {
        if (json && json.data && Array.isArray(json.data.cars)) {
          setFleet(json.data.cars);
        } else {
          setFleet([]);
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
        body: JSON.stringify({ sectionId: "fleet", data: { cars: fleet } }),
      });
      if (res.ok) {
        setMessage("✅ Flota zapisana!");
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

  const addCar = () => {
    const newCar: Car = {
      id: Date.now().toString(),
      name: "Nowe Auto",
      year: "2024",
      image: "",
      specs: ["Klimatyzacja"],
    };
    setFleet([...fleet, newCar]);
  };

  const removeCar = (id: string) => {
    setFleet(fleet.filter((c) => c.id !== id));
  };

  const updateCar = (id: string, field: keyof Car, value: any) => {
    setFleet(fleet.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  if (loading) return <p>Ładowanie floty...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Zarządzanie Flotą</h2>
        <button 
          onClick={addCar}
          className={styles.addBtn}
        >
          + Dodaj nowe auto
        </button>
      </div>

      <div className={styles.fleetList}>
        {fleet.map((car) => (
          <div key={car.id} className={styles.carCard}>
            
            {/* ZDJĘCIE */}
            <div className={styles.imageSection}>
              <div className={styles.imageBox}>
                {car.image ? (
                  <img src={car.image} alt="Auto" />
                ) : (
                  <div className={styles.noImage}>Brak zdjęcia</div>
                )}
              </div>
              <CldUploadWidget 
                uploadPreset="ml_default"
                onSuccess={(result: any) => {
                  updateCar(car.id, "image", result.info.secure_url);
                }}
              >
                {({ open }) => (
                  <button 
                    onClick={() => open()}
                    className={styles.uploadBtn}
                  >
                    Zmień zdjęcie
                  </button>
                )}
              </CldUploadWidget>
            </div>

            {/* DANE */}
            <div className={styles.dataSection}>
              <div className={styles.row}>
                <input 
                  type="text" 
                  placeholder="Nazwa modelu" 
                  value={car.name} 
                  onChange={(e) => updateCar(car.id, "name", e.target.value)}
                  className={styles.input}
                />
                <input 
                  type="text" 
                  placeholder="Rok" 
                  value={car.year} 
                  onChange={(e) => updateCar(car.id, "year", e.target.value)}
                  className={styles.input}
                />
              </div>
              <div>
                <label className={styles.specLabel}>Specyfikacja (oddzielaj przecinkiem):</label>
                <input 
                  type="text" 
                  value={car.specs.join(", ")} 
                  onChange={(e) => updateCar(car.id, "specs", e.target.value.split(",").map(s => s.trim()))}
                  className={styles.fullWidthInput}
                />
              </div>
            </div>

            {/* AKCJE */}
            <div>
              <button 
                onClick={() => removeCar(car.id)}
                className={styles.removeBtn}
              >
                Usuń
              </button>
            </div>
          </div>
        ))}

        {fleet.length === 0 && <p className={styles.emptyState}>Lista floty jest pusta. Dodaj pierwsze auto!</p>}
      </div>

      <div className={styles.saveFooter}>
        <button 
          onClick={handleSave}
          disabled={saving}
          className={styles.saveBtn}
        >
          {saving ? "Zapisywanie floty..." : "Zapisz całą flotę"}
        </button>
        {message && (
          <span 
            className={styles.statusMessage}
            style={{ color: message.includes("✅") ? "#00ff00" : "#ff0000" }}
          >
            {message}
          </span>
        )}
      </div>
    </div>
  );
};


export default FleetEditor;
