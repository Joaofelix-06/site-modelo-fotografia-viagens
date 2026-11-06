import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Facebook, Youtube, Mountain, ArrowRight } from "lucide-react";

const nav = [
  { to: "/destinos", label: "Destinos" },
  { to: "/pacotes", label: "Pacotes Fotográficos" },
  { to: "/sobre", label: "Sobre Nós" },
  { to: "/depoimentos", label: "Depoimentos" },
  { to: "/blog", label: "Blog" },
] as const;

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const solid = !transparent || scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? "bg-glass shadow-soft backdrop-blur-md text-foreground" : "text-on-image"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl uppercase tracking-wide">
          <Mountain className="h-6 w-6" /> Wander
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium opacity-80 transition hover:opacity-100" activeProps={{ className: "opacity-100 underline underline-offset-8" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/pacotes" className={`hidden rounded-full px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 lg:inline-flex ${solid ? "bg-primary text-primary-foreground" : "bg-on-image text-foreground"}`}>
          Reservar Agora
        </Link>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border px-5 pb-6 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-3 font-medium">{n.label}</Link>
          ))}
          <Link to="/pacotes" className="mt-3 block rounded-full bg-primary py-3 text-center font-semibold text-primary-foreground">Reservar Agora</Link>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-display text-2xl uppercase"><Mountain className="h-6 w-6" /> Wander</div>
          <p className="mt-4 text-sm opacity-70">Expedições fotográficas para quem viaja com o olhar. Desde 2016.</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((I, i) => (
              <a key={i} href="#" aria-label="Rede social" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 transition hover:bg-primary-foreground hover:text-primary"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-70">
            {nav.map((n) => <li key={n.to}><Link to={n.to} className="hover:opacity-100">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-70">
            <li>contato@wander.com.br</li><li>+55 (85) 99999-0000</li><li>Fortaleza, CE</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <p className="mt-4 text-sm opacity-70">Receba novos roteiros e vagas abertas.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex rounded-full bg-primary-foreground/10 p-1">
            <input type="email" placeholder="Seu e-mail" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-primary-foreground/50" />
            <button className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground text-primary" aria-label="Inscrever"><ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs opacity-60">© 2026 Wander Expedições. Todos os direitos reservados.</div>
    </footer>
  );
}

export function PageHero({ title, subtitle, img }: { title: string; subtitle: string; img: string }) {
  return (
    <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden text-on-image">
      <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
        <h1 className="text-5xl md:text-7xl">{title}</h1>
        <p className="mt-4 max-w-xl text-lg opacity-90">{subtitle}</p>
      </div>
    </section>
  );
}

export function Shell({ children, transparent }: { children: ReactNode; transparent?: boolean }) {
  return (
    <>
      <Header transparent={transparent} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
