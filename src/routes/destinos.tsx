import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero } from "@/components/site/Layout";
import { DestinationCard, CTA } from "@/components/site/Sections";
import { destinations, images } from "@/components/site/data";

export const Route = createFileRoute("/destinos")({
  head: () => ({ meta: [{ title: "Destinos | Wander Expedições" }, { name: "description", content: "Conheça os destinos das nossas expedições fotográficas pelo Brasil e pelo mundo." }, { property: "og:title", content: "Destinos | Wander Expedições" }, { property: "og:description", content: "Conheça os destinos das nossas expedições fotográficas pelo Brasil e pelo mundo." }] }),
  component: () => (
    <Shell transparent>
      <PageHero title="Destinos" subtitle="Paisagens escolhidas a dedo pela luz, pela história e pela aventura." img={images.suica} />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-24 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
        {destinations.map((d) => <DestinationCard key={d.name} d={d} />)}
      </section>
      <CTA />
    </Shell>
  ),
});
