import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import GalleryPreview from "@/components/GalleryPreview";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "DM AutoSPA | Detailing Polańczyk z dojazdem – Bieszczady",
  description:
    "Premium auto detailing z dojazdem do klienta w Polańczyku i Bieszczadach. Powłoki ceramiczne, folia PPF, korekta lakieru. Umów się: 733 028 686.",
  alternates: { canonical: COMPANY.siteUrl },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <GalleryPreview />
    </>
  );
}
