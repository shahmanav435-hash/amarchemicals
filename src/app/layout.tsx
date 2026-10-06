import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import QuoteModal from "@/components/QuoteModal";
import SampleRequestModal from "@/components/SampleRequestModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amar Chemicals | B2B Industrial Chemical Manufacturer & Supplier",
  description: "Amar Chemicals (Est. 1990) is a premium manufacturer of high-purity Sodium Metabisulfite, Sodium Sulfite, Sodium Bisulfite, and Sodium Bicarbonate in Vatva GIDC, Ahmedabad, India.",
  keywords: [
    "Industrial Chemical Manufacturer in Ahmedabad",
    "Sodium Metabisulfite Manufacturer India",
    "Sodium Sulfite Supplier Gujarat",
    "Sodium Bisulfite Manufacturer Ahmedabad",
    "Industrial Chemical Supplier India",
    "Chemical Manufacturer in Vatva GIDC",
  ],
  openGraph: {
    title: "Amar Chemicals | B2B Industrial Chemical Manufacturer & Supplier",
    description: "Trusted supplier of sulfites and bisulfites since 1990. Certified manufacturing facility in Vatva GIDC, Ahmedabad.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="font-sans min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* Lead Generation Floating Widgets */}
        <FloatingCTAs />
        <ExitIntentPopup />
        <QuoteModal />
        <SampleRequestModal />
      </body>
    </html>
  );
}
