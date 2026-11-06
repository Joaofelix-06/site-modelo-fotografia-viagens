import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero } from "@/components/site/Layout";
import { Testimonials, CTA } from "@/components/site/Sections";
import { images } from "@/components/site/data";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({ meta: [{ title: "Depoimentos | Wander Expedições" }, { name: "description", content: "Veja o que dizem os viajantes que já participaram das nossas expedições fotográficas." }, { property: "og:title", content: "Depoimentos | Wander Expedições" }, { property: "og:description", content: "Veja o que dizem os viajantes que já participaram das nossas expedições fotográficas." }] }),
  component: () => (
    <Shell transparent>
      <PageHero title="Depoimentos" subtitle="Histórias reais de quem viajou com a gente." img={images.jalapao} />
      <Testimonials /><CTA />
    </Shell>
  ),
});
