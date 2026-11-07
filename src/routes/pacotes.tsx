import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero } from "@/components/site/Layout";
import { Packages, Steps, CTA } from "@/components/site/Sections";
import { images } from "@/components/site/data";

export const Route = createFileRoute("/pacotes")({
  head: () => ({ meta: [{ title: "Pacotes Fotográficos | Modelo de Agência" }, { name: "description", content: "Exemplos de pacotes, workshops e expedições para o modelo de site de uma agência de fotografia e viagens." }, { property: "og:title", content: "Pacotes Fotográficos | Modelo de Agência" }, { property: "og:description", content: "Exemplos de pacotes, workshops e expedições para o modelo de site de uma agência de fotografia e viagens." }] }),
  component: () => (
    <Shell transparent>
      <PageHero title="Pacotes Fotográficos" subtitle="Expedições com mentoria, logística completa e as melhores horas de luz." img={images.workshop} />
      <Packages /><Steps /><div className="pt-24"><CTA /></div>
    </Shell>
  ),
});
