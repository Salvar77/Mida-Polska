"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./AccountSettings.module.scss";

const AccountSettings = () => {
  const { data: session } = useSession();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    if (newPassword !== confirmPassword) {
      setMessage("Nowe hasło i potwierdzenie nie są identyczne.");
      setIsError(true);
      return;
    }

    if (newPassword.length < 8) {
      setMessage("Nowe hasło musi mieć co najmniej 8 znaków.");
      setIsError(true);
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Hasło zostało zmienione pomyślnie!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setTimeout(() => setMessage(""), 5000);
      } else {
        setMessage(`❌ ${data.error || "Wystąpił błąd."}`);
        setIsError(true);
      }
    } catch (err) {
      setMessage("❌ Błąd połączenia z serwerem.");
      setIsError(true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ustawienia Konta</h2>

      <div className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Zalogowany jako:</label>
          <input
            type="text"
            value={session?.user?.email || ""}
            disabled
            className={styles.input}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Obecne hasło:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Wpisz obecne hasło..."
            required
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Nowe hasło:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Min. 8 znaków..."
            required
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Potwierdź nowe hasło:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Powtórz nowe hasło..."
            required
            className={styles.input}
          />
        </div>

        <div className={styles.footer}>
          <button
            type="submit"
            disabled={saving}
            className={styles.saveBtn}
          >
            {saving ? "Zmieniam hasło..." : "Zmień hasło"}
          </button>
          {message && (
            <span className={isError ? styles.errorMessage : styles.successMessage}>
              {message}
            </span>
          )}
        </div>
      </form>

      <div className={styles.infoBox}>
        <strong>Bezpieczeństwo:</strong> Hasła są przechowywane w bazie danych
        w postaci zaszyfrowanej (bcrypt). Nikt — łącznie z programistą — nie ma
        dostępu do Twojego oryginalnego hasła.
      </div>
    </div>
  );
};

export default AccountSettings;
