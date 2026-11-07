import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/Layout";
import { Hero, WhyUs, Destinations, Packages, Gallery, Steps, Testimonials, CTA } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Modelo de Site — Agência de Fotografia e Viagens" }, { name: "description", content: "Modelo demonstrativo de site para agências de fotografia e viagens, desenvolvido por tientrega.com.br." }, { property: "og:title", content: "Modelo de Site — Agência de Fotografia e Viagens" }, { property: "og:description", content: "Modelo demonstrativo de site para agências de fotografia e viagens, desenvolvido por tientrega.com.br." }] }),
  component: () => (
    <Shell transparent>
      <Hero /><WhyUs /><Destinations /><Packages /><Gallery /><Steps /><Testimonials /><CTA />
    </Shell>
  ),
});
