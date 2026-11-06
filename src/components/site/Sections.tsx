import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  MapPin, Star, ArrowLeft, ArrowRight, Camera, Headphones, Compass, Clock, Users, Gauge, Quote,
  Search, CalendarDays, Sparkles,
} from "lucide-react";
import { destinations, packages, testimonials, images, posts } from "./data";

export function SectionHead({ eyebrow, title, text, center }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</span>
      <h2 className="mt-3 text-4xl md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden text-on-image">
      <img src={images.hero} alt="Fotógrafo em cume de montanha ao pôr do sol" width={1920} height={1088} className="absolute inset-0 h-full w-full scale-105 object-cover" />
      <div className="absolute inset-0 bg-overlay" />
      <span aria-hidden className="pointer-events-none absolute inset-x-0 top-[18%] select-none text-center font-display text-[24vw] leading-none opacity-15">WANDER</span>
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-28 pb-40 md:px-8">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-on-image/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur"><Camera className="h-3.5 w-3.5" /> Expedições fotográficas</span>
        <h1 className="mt-6 max-w-4xl text-6xl leading-[0.95] md:text-8xl">Sua próxima jornada começa aqui</h1>
        <p className="mt-6 max-w-xl text-lg opacity-90">Roteiros de aventura guiados por fotógrafos profissionais. Viaje para lugares extraordinários e volte com imagens que contam sua história.</p>
      </div>
      <div className="absolute inset-x-0 bottom-8 px-5 md:px-8">
        <form onSubmit={(e) => e.preventDefault()} className="mx-auto grid max-w-5xl gap-2 rounded-3xl bg-card p-3 text-foreground shadow-lift md:grid-cols-[1fr_1fr_1fr_auto]">
          {[
            { icon: MapPin, label: "Destino", ph: "Para onde?" },
            { icon: CalendarDays, label: "Data", ph: "Quando?" },
          ].map((f) => (
            <label key={f.label} className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-muted">
              <f.icon className="h-5 w-5 text-accent" />
              <span className="flex flex-col"><span className="text-xs font-semibold">{f.label}</span><input placeholder={f.ph} className="bg-transparent text-sm outline-none" /></span>
            </label>
          ))}
          <label className="flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-muted">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="flex flex-1 flex-col"><span className="text-xs font-semibold">Tipo de roteiro</span>
              <select className="bg-transparent text-sm outline-none"><option>Fotografia</option><option>Aventura</option><option>Relax</option></select>
            </span>
          </label>
          <button className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:opacity-90"><Search className="h-4 w-4" /> Explorar</button>
        </form>
      </div>
    </section>
  );
}

export function WhyUs() {
  const stats = [["+12k", "Viajantes atendidos"], ["10", "Anos de experiência"], ["+50", "Destinos"], ["4.9★", "Avaliação média"]];
  const feats = [
    { icon: Camera, t: "Fotógrafo especialista", d: "Cada grupo acompanhado por um fotógrafo profissional e guia local." },
    { icon: Headphones, t: "Suporte 24/7", d: "Equipe disponível antes, durante e depois da viagem." },
    { icon: Compass, t: "Roteiros exclusivos", d: "Horários pensados para a melhor luz, longe das multidões." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
        <SectionHead eyebrow="Por que nos escolher" title="Viagens feitas para quem enxerga além" text="Unimos turismo de aventura e fotografia autoral para criar experiências que ficam na memória — e no portfólio." />
        <div className="grid grid-cols-2 gap-4">
          {stats.map(([n, l]) => (
            <div key={l} className="rounded-3xl bg-secondary p-6">
              <div className="font-display text-4xl md:text-5xl">{n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {feats.map((f) => (
          <div key={f.t} className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary transition group-hover:bg-primary group-hover:text-primary-foreground"><f.icon className="h-5 w-5" /></div>
            <h3 className="mt-6 font-sans text-lg font-bold normal-case">{f.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DestinationCard({ d }: { d: (typeof destinations)[number] }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={d.img} alt={d.name} loading="lazy" width={800} height={1008} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-glass px-3 py-1 text-xs font-semibold backdrop-blur"><MapPin className="h-3 w-3" />{d.place}</span>
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground"><Star className="h-3 w-3 fill-current" />{d.rating.toFixed(1)}</span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl">{d.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
        <div className="mt-5 flex items-center justify-between">
          <div><span className="text-xs text-muted-foreground">a partir de</span><div className="font-bold">{d.price}</div></div>
          <Link to="/destinos" className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-semibold transition group-hover:bg-primary group-hover:text-primary-foreground">Ver detalhes <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </article>
  );
}

export function Destinations() {
  const [ref, api] = useEmblaCarousel({ align: "start", loop: true });
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Destinos populares" title="Lugares que pedem uma câmera" />
          <div className="flex gap-2">
            <button onClick={() => api?.scrollPrev()} aria-label="Anterior" className="grid h-12 w-12 place-items-center rounded-full border border-foreground/20 transition hover:bg-primary hover:text-primary-foreground"><ArrowLeft className="h-5 w-5" /></button>
            <button onClick={() => api?.scrollNext()} aria-label="Próximo" className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground transition hover:opacity-90"><ArrowRight className="h-5 w-5" /></button>
          </div>
        </div>
        <div className="mt-12 overflow-hidden" ref={ref}>
          <div className="-ml-6 flex">
            {destinations.map((d) => (
              <div key={d.name} className="min-w-0 shrink-0 basis-[85%] pl-6 sm:basis-1/2 lg:basis-1/3"><DestinationCard d={d} /></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Packages() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHead eyebrow="Pacotes & Expedições" title="Experiências exclusivas" text="Grupos pequenos, mentoria fotográfica e logística completa." />
      <div className="mt-12 space-y-6">
        {packages.map((p, i) => (
          <article key={p.title} className={`group grid overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-lift md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="relative min-h-[260px] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute left-5 top-5 rounded-full bg-glass px-3 py-1 text-xs font-semibold backdrop-blur">{p.spots}</span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl">{p.title}</h3>
              <p className="mt-4 text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5"><Clock className="h-4 w-4" />{p.days}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5"><Gauge className="h-4 w-4" />{p.level}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5"><Users className="h-4 w-4" />{p.spots}</span>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div><span className="text-xs text-muted-foreground">por pessoa</span><div className="text-xl font-bold">{p.price}</div></div>
                <Link to="/pacotes" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5">Reservar vaga</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Gallery() {
  const g = [images.patagonia, images.lencois, images.safari, images.suica, images.jalapao, images.elnido];
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
      <SectionHead eyebrow="Portfólio" title="Pelas lentes dos viajantes" center />
      <div className="mt-12 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {g.map((src, i) => (
          <div key={i} className="group overflow-hidden rounded-3xl">
            <img src={src} alt="Foto de viajante" loading="lazy" className={`w-full object-cover transition duration-700 group-hover:scale-105 ${i % 3 === 1 ? "aspect-square" : i % 3 === 2 ? "aspect-[4/3]" : "aspect-[4/5]"}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function Steps() {
  const s = [
    { n: "01", t: "Escolha o destino", d: "Explore roteiros e encontre a expedição ideal para você." },
    { n: "02", t: "Personalize a experiência", d: "Ajuste datas, nível fotográfico e acomodações." },
    { n: "03", t: "Confirme e viaje", d: "Reserve com segurança e prepare sua câmera." },
  ];
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead eyebrow="Como reservar" title="Três passos até a aventura" center />
        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div aria-hidden className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-foreground/15 md:block" />
          {s.map((x) => (
            <div key={x.n} className="relative text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary font-display text-xl text-primary-foreground shadow-lift">{x.n}</div>
              <h3 className="mt-6 font-sans text-lg font-bold normal-case">{x.t}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <SectionHead eyebrow="Depoimentos" title="Quem viajou, recomenda" center />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
            <Quote className="h-8 w-8 text-accent" />
            <div className="mt-4 flex gap-0.5 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
            <blockquote className="mt-4">{t.text}</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-sm font-bold">{t.initials}</span>
              <span><span className="block font-semibold">{t.name}</span><span className="text-sm text-muted-foreground">{t.trip}</span></span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function BlogGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {posts.map((p) => (
        <article key={p.title} className="group overflow-hidden rounded-3xl bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <span className="absolute left-4 top-4 rounded-full bg-glass px-3 py-1 text-xs font-semibold backdrop-blur">{p.tag}</span>
          </div>
          <div className="p-6"><div className="text-xs text-muted-foreground">{p.date}</div><h3 className="mt-2 font-sans text-lg font-bold normal-case">{p.title}</h3></div>
        </article>
      ))}
    </div>
  );
}

export function CTA() {
  const r = useRef(null);
  return (
    <section ref={r} className="px-5 pb-24 md:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] text-on-image">
        <img src={images.patagonia} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative px-8 py-20 text-center md:py-28">
          <h2 className="mx-auto max-w-3xl text-5xl md:text-6xl">Pronto para explorar a beleza da natureza?</h2>
          <p className="mx-auto mt-4 max-w-lg opacity-90">Vagas limitadas por expedição. Garanta a sua e fale com um especialista.</p>
          <Link to="/pacotes" className="mt-8 inline-flex items-center gap-2 rounded-full bg-on-image px-8 py-4 font-semibold text-foreground transition hover:-translate-y-0.5">Fale Conosco <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
