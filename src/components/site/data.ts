import elnido from "@/assets/elnido.jpg";
import jalapao from "@/assets/jalapao.jpg";
import suica from "@/assets/suica.jpg";
import patagonia from "@/assets/patagonia.jpg";
import lencois from "@/assets/lencois.jpg";
import safari from "@/assets/safari.jpg";
import workshop from "@/assets/workshop.jpg";
import hero from "@/assets/hero.jpg";

export const images = { elnido, jalapao, suica, patagonia, lencois, safari, workshop, hero };

export const destinations = [
  { name: "El Nido", place: "Palawan, Filipinas", img: elnido, rating: 4.9, price: "R$ 8.900", desc: "Lagoas cristalinas entre falésias de calcário." },
  { name: "Jalapão", place: "Tocantins, Brasil", img: jalapao, rating: 4.8, price: "R$ 3.490", desc: "Dunas douradas, fervedouros e cachoeiras." },
  { name: "Alpes Suíços", place: "Suíça", img: suica, rating: 5.0, price: "R$ 14.200", desc: "Vilarejos, lagos e picos nevados." },
  { name: "Patagônia", place: "Chile", img: patagonia, rating: 4.9, price: "R$ 11.700", desc: "Torres de granito e luz dramática." },
  { name: "Lençóis", place: "Maranhão, Brasil", img: lencois, rating: 4.9, price: "R$ 2.980", desc: "Dunas brancas e lagoas azuis." },
];

export const packages = [
  { title: "Workshop de Fotografia de Paisagem", img: workshop, days: "7 dias", level: "Intermediário", spots: "8 vagas", price: "R$ 6.400", desc: "Nascer do sol nas montanhas com mentoria de composição, filtros e edição." },
  { title: "Tour Fotográfico de Ilhas", img: elnido, days: "9 dias", level: "Todos os níveis", spots: "10 vagas", price: "R$ 9.800", desc: "Barco privativo, lagoas secretas e fotografia aquática." },
  { title: "Safári Fotográfico", img: safari, days: "10 dias", level: "Avançado", spots: "6 vagas", price: "R$ 21.500", desc: "Vida selvagem na savana com veículos adaptados para teleobjetivas." },
];

export const testimonials = [
  { name: "Mariana Costa", trip: "Patagônia", text: "A melhor viagem da minha vida. Voltei com fotos que nunca imaginei conseguir fazer.", initials: "MC" },
  { name: "Rafael Lima", trip: "Safári Fotográfico", text: "Guias incríveis, logística impecável e luz perfeita todos os dias.", initials: "RL" },
  { name: "Beatriz Souza", trip: "Jalapão", text: "Roteiro pensado em cada detalhe para a fotografia. Recomendo de olhos fechados.", initials: "BS" },
];

export const posts = [
  { title: "10 dicas para fotografar paisagens ao nascer do sol", img: workshop, date: "12 out 2026", tag: "Técnica" },
  { title: "Guia completo: Jalapão em 7 dias", img: jalapao, date: "28 set 2026", tag: "Roteiro" },
  { title: "O que levar na mochila para um safári", img: safari, date: "10 set 2026", tag: "Equipamento" },
];
