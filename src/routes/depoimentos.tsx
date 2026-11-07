import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero } from "@/components/site/Layout";
import { Testimonials, CTA } from "@/components/site/Sections";
import { images } from "@/components/site/data";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({ meta: [{ title: "Depoimentos | Modelo de Agência" }, { name: "description", content: "Depoimentos ilustrativos para o modelo de site de uma agência de fotografia e viagens." }, { property: "og:title", content: "Depoimentos | Modelo de Agência" }, { property: "og:description", content: "Depoimentos ilustrativos para o modelo de site de uma agência de fotografia e viagens." }] }),
  component: () => (
    <Shell transparent>
      <PageHero title="Depoimentos" subtitle="Histórias reais de quem viajou com a gente." img={images.jalapao} />
      <Testimonials /><CTA />
    </Shell>
  ),
});
