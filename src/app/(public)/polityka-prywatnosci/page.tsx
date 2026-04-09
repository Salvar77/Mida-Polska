import React from "react";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Main/Footer";
import styles from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności | Mida Polska",
  description: "Polityka prywatności firmy Mida Polska.",
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.main}>
      <Navbar />
      
      <article className={styles.wrapper}>
        <div className={styles.container}>
          <header className={styles.header}>
            <span className={styles.subtitle}>INFORMACJE PRAWNE</span>
            <h1 className={styles.title}>
              Polityka <span>Prywatności</span>
            </h1>
          </header>

          <div className={styles.content}>
            <section>
              <h2>1. Informacje ogólne</h2>
              <p>
                Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem ze strony internetowej <strong>Mida Polska</strong>.
              </p>
              <p>
                Administratorem danych osobowych zawartych w serwisie jest Mida Polska z siedzibą w Lublinie (20-701) przy ul. Nałęczowskiej 30 lok. 12.
              </p>
            </section>

            <section>
              <h2>2. Cel zbierania danych</h2>
              <p>
                Dane osobowe Użytkowników są zbierane w celu:
              </p>
              <ul>
                <li>Obsługi zapytań i zgłoszeń przesyłanych przez formularze kontaktowe i rekrutacyjne.</li>
                <li>Prowadzenia procesów rekrutacyjnych dla kierowców współpracujących z aplikacjami Bolt, Uber i FreeNow.</li>
                <li>Bieżącej komunikacji z Użytkownikiem.</li>
              </ul>
            </section>

            <section>
              <h2>3. Rodzaj przetwarzanych danych</h2>
              <p>
                Serwis zbiera informacje podane dobrowolnie przez użytkownika w formularzach (np. imię i nazwisko, adres e-mail, numer telefonu, miasto). Serwis może zapisać ponadto informacje o parametrach połączenia (oznaczenie czasu, adres IP).
              </p>
            </section>

            <section>
              <h2>4. Udostępnianie danych</h2>
              <p>
                Dane podlegają udostępnieniu podmiotom zewnętrznym wyłącznie w granicach prawnie dozwolonych. W procesie rekrutacji dane mogą być przekazywane operatorom aplikacji (Uber, Bolt, FreeNow) w celu weryfikacji kierowcy.
              </p>
            </section>

            <section>
              <h2>5. Prawa Użytkownika</h2>
              <p>
                Każdy Użytkownik ma prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo wniesienia sprzeciwu. W celu realizacji swoich praw, Użytkownik może skontaktować się z Administratorem pod adresem e-mail: <a href="mailto:biuro@mida-polska.pl">biuro@mida-polska.pl</a>.
              </p>
            </section>

            <section>
              <h2>6. Pliki Cookies</h2>
              <p>
                Strona główna może wykorzystywać pliki cookies, czyli małe pliki tekstowe wysyłane do komputera internauty identyfikujące go w sposób potrzebny do uproszczenia lub umorzenia danej operacji. Cookies są nieszkodliwe dla komputera, dla jego użytkownika i jego danych. Warunkiem działania cookies jest ich akceptacja przez przeglądarkę i nie usuwanie ich z dysku.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer variant="simple" />
    </main>
  );
}
