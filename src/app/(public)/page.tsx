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

export const dynamic = "force-dynamic";

export default async function Home() {
  await connectToDatabase();
  const heroContent = await WebsiteContent.findOne({ sectionId: "hero" });
  const fleetContent = await WebsiteContent.findOne({ sectionId: "fleet" });
  const recruitmentContent = await WebsiteContent.findOne({ sectionId: "recruitment" });
  const partnerContent = await WebsiteContent.findOne({ sectionId: "partner" });
  const contactContent = await WebsiteContent.findOne({ sectionId: "contact" });

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
      <ContactMap data={contactContent?.data} cities={recruitmentContent?.data?.cities} />
      <Footer />
    </main>
  );
}
