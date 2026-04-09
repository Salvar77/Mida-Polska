import Navbar from "@/components/Nav/Navbar";
import Hero from "@/components/Main/Hero";
import PartnerBanner from "@/components/Main/PartnerBanner";
import HowToStart from "@/components/Main/HowToStart";
import Flexibility from "@/components/Main/Flexibility";
import EarningsChart from "@/components/Main/EarningsChart";
import Fleet from "@/components/Main/Fleet";
import ContactMap from "@/components/Main/ContactMap";
import Recruitment from "@/components/Main/Recruitment";
import Footer from "@/components/Main/Footer";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <PartnerBanner />
      <Recruitment />
      <HowToStart />
      <Flexibility />
      <EarningsChart />
      <Fleet />
      <ContactMap />
      <Footer />
    </main>
  );
}
