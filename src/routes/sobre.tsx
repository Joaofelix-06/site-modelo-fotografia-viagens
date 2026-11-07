import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero } from "@/components/site/Layout";
import { WhyUs, Gallery, CTA } from "@/components/site/Sections";
import { images } from "@/components/site/data";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [{ title: "Sobre Nós | Modelo de Agência" }, { name: "description", content: "Conteúdo ilustrativo de apresentação para um modelo de site de agência de fotografia e viagens." }, { property: "og:title", content: "Sobre Nós | Modelo de Agência" }, { property: "og:description", content: "Conteúdo ilustrativo de apresentação para um modelo de site de agência de fotografia e viagens." }] }),
  component: () => (
    <Shell transparent>
      <PageHero title="Sobre Nós" subtitle="Fotógrafos, guias e viajantes. Criamos expedições que transformam a forma de ver o mundo." img={images.hero} />
      <WhyUs /><Gallery /><CTA />
    </Shell>
  ),
});
