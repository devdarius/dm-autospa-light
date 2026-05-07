import type { Metadata } from "next";
import { SERVICES, COMPANY } from "@/lib/constants";
import ServiceDetailPage from "./client";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${COMPANY.siteUrl}/uslugi/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
    },
  };
}

export default function Page({ params }: Props) {
  return <ServiceDetailPage params={params} />;
}
