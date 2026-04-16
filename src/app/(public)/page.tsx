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
import connectToDatabase from "@/lib/mongoose";
import WebsiteContent from "@/models/WebsiteContent";
import styles from "./page.module.scss";

// ISR: strona jest cache'owana i odświeżana w tle co 60 sekund.
// Eliminuje opóźnienie MongoDB przy każdym wejściu na stronę.
export const revalidate = 60;

export default async function Home() {
  await connectToDatabase();

  // Wszystkie zapytania równolegle – ~4x szybciej niż sekwencyjne await
  const [heroContent, fleetContent, recruitmentContent, partnerContent, contactContent] =
    await Promise.all([
      WebsiteContent.findOne({ sectionId: "hero" }),
      WebsiteContent.findOne({ sectionId: "fleet" }),
      WebsiteContent.findOne({ sectionId: "recruitment" }),
      WebsiteContent.findOne({ sectionId: "partner" }),
      WebsiteContent.findOne({ sectionId: "contact" }),
    ]);

  return (
    <main className={styles.main}>
      <Navbar />
      <Hero data={heroContent?.data} />
      <PartnerBanner data={partnerContent?.data} />
      <Recruitment data={recruitmentContent?.data} />
      <HowToStart />
      <Flexibility />
      <EarningsChart />
      <Fleet data={fleetContent?.data?.cars} />
      <ContactMap
        data={contactContent?.data}
        cities={recruitmentContent?.data?.cities}
      />
      <Footer />
    </main>
  );
}
