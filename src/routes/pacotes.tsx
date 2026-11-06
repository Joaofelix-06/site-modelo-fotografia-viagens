import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero } from "@/components/site/Layout";
import { Packages, Steps, CTA } from "@/components/site/Sections";
import { images } from "@/components/site/data";

export const Route = createFileRoute("/pacotes")({
  head: () => ({ meta: [{ title: "Pacotes Fotográficos | Wander Expedições" }, { name: "description", content: "Workshops, tours de ilhas e safáris fotográficos com grupos pequenos e mentoria profissional." }, { property: "og:title", content: "Pacotes Fotográficos | Wander Expedições" }, { property: "og:description", content: "Workshops, tours de ilhas e safáris fotográficos com grupos pequenos e mentoria profissional." }] }),
  component: () => (
    <Shell transparent>
      <PageHero title="Pacotes Fotográficos" subtitle="Expedições com mentoria, logística completa e as melhores horas de luz." img={images.workshop} />
      <Packages /><Steps /><div className="pt-24"><CTA /></div>
    </Shell>
  ),
});
