import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero } from "@/components/site/Layout";
import { BlogGrid, CTA } from "@/components/site/Sections";
import { images } from "@/components/site/data";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Blog | Wander Expedições" }, { name: "description", content: "Dicas de fotografia, roteiros e equipamentos para viajantes que amam registrar a natureza." }, { property: "og:title", content: "Blog | Wander Expedições" }, { property: "og:description", content: "Dicas de fotografia, roteiros e equipamentos para viajantes que amam registrar a natureza." }] }),
  component: () => (
    <Shell transparent>
      <PageHero title="Blog" subtitle="Dicas de fotografia, roteiros e histórias de estrada." img={images.lencois} />
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8"><BlogGrid /></section>
      <CTA />
    </Shell>
  ),
});
