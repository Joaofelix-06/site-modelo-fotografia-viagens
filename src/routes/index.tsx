import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/Layout";
import { Hero, WhyUs, Destinations, Packages, Gallery, Steps, Testimonials, CTA } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Wander — Viagens e Expedições Fotográficas" }, { name: "description", content: "Roteiros de aventura guiados por fotógrafos profissionais em destinos extraordinários." }, { property: "og:title", content: "Wander — Viagens e Expedições Fotográficas" }, { property: "og:description", content: "Roteiros de aventura guiados por fotógrafos profissionais em destinos extraordinários." }] }),
  component: () => (
    <Shell transparent>
      <Hero /><WhyUs /><Destinations /><Packages /><Gallery /><Steps /><Testimonials /><CTA />
    </Shell>
  ),
});
