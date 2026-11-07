import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero } from "@/components/site/Layout";
import { BlogGrid, CTA } from "@/components/site/Sections";
import { images } from "@/components/site/data";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Blog | Modelo de Agência" }, { name: "description", content: "Exemplos de conteúdo sobre fotografia, viagens e natureza para o modelo de site de uma agência." }, { property: "og:title", content: "Blog | Modelo de Agência" }, { property: "og:description", content: "Exemplos de conteúdo sobre fotografia, viagens e natureza para o modelo de site de uma agência." }] }),
  component: () => (
    <Shell transparent>
      <PageHero title="Blog" subtitle="Dicas de fotografia, roteiros e histórias de estrada." img={images.lencois} />
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8"><BlogGrid /></section>
      <CTA />
    </Shell>
  ),
});
