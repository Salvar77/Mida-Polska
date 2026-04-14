"use client";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import HeroEditor from "./components/HeroEditor";
import FleetEditor from "./components/FleetEditor";
import RecruitmentEditor from "./components/RecruitmentEditor";
import PartnerEditor from "./components/PartnerEditor";
import ContactEditor from "./components/ContactEditor";
import AccountSettings from "./components/AccountSettings";
import styles from "./page.module.scss";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab ] = useState("hero");

  if (status === "loading") return <div className={styles.wrapper}>Ładowanie sesji...</div>;
  if (status === "unauthenticated") {
    redirect("/admin/login");
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Panel Administratora - Mida Polska</h1>
        <div className={styles.userSection}>
          <span>Zalogowano jako: <strong>{session?.user?.email}</strong></span>
          <button 
            onClick={() => signOut()} 
            className={styles.logoutBtn}
          >
            Wyloguj
          </button>
        </div>
      </header>

      <main className={styles.mainGrid}>
        <aside className={styles.sidebar}>
          <ul className={styles.navList}>
            <li 
              className={`${styles.navItem} ${activeTab === "hero" ? styles.active : ""}`}
              onClick={() => setActiveTab("hero")}
            >
              Strona Główna (Hero)
            </li>
            <li 
              className={`${styles.navItem} ${activeTab === "fleet" ? styles.active : ""}`}
              onClick={() => setActiveTab("fleet")}
            >
              Nasza Flota
            </li>
            <li 
              className={`${styles.navItem} ${activeTab === "recruitment" ? styles.active : ""}`}
              onClick={() => setActiveTab("recruitment")}
            >
              Kroki Rekrutacji
            </li>
            <li 
              className={`${styles.navItem} ${activeTab === "partner" ? styles.active : ""}`}
              onClick={() => setActiveTab("partner")}
            >
              Sekcja Partnera
            </li>
            <li 
              className={`${styles.navItem} ${activeTab === "contact" ? styles.active : ""}`}
              onClick={() => setActiveTab("contact")}
            >
              Kontakt i Adres
            </li>
            <li 
              className={`${styles.navItem} ${activeTab === "settings" ? styles.active : ""}`}
              onClick={() => setActiveTab("settings")}
            >
              Ustawienia Konta
            </li>
          </ul>
        </aside>
        
        <section className={styles.content}>
          {activeTab === "hero" && <HeroEditor />}
          {activeTab === "fleet" && <FleetEditor />}
          {activeTab === "recruitment" && <RecruitmentEditor />}
          {activeTab === "partner" && <PartnerEditor />}
          {activeTab === "contact" && <ContactEditor />}
          {activeTab === "settings" && <AccountSettings />}
        </section>
      </main>
    </div>
  );
}
