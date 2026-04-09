import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "@/styles/globals.scss";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Mida Polska | Autoryzowany partner flotowy Bolt, Uber, FreeNow",
  description: "Dołącz do grona zadowolonych kierowców. Pracuj z najlepszym partnerem flotowym w Polsce.",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${lato.variable}`}>
        {children}
    </div>
  );
}
