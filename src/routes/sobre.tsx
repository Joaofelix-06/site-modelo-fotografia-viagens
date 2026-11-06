import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero } from "@/components/site/Layout";
import { WhyUs, Gallery, CTA } from "@/components/site/Sections";
import { images } from "@/components/site/data";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [{ title: "Sobre Nós | Wander Expedições" }, { name: "description", content: "Somos fotógrafos e guias apaixonados por aventura, criando viagens autorais desde 2016." }, { property: "og:title", content: "Sobre Nós | Wander Expedições" }, { property: "og:description", content: "Somos fotógrafos e guias apaixonados por aventura, criando viagens autorais desde 2016." }] }),
  component: () => (
    <Shell transparent>
      <PageHero title="Sobre Nós" subtitle="Fotógrafos, guias e viajantes. Criamos expedições que transformam a forma de ver o mundo." img={images.hero} />
      <WhyUs /><Gallery /><CTA />
    </Shell>
  ),
});
