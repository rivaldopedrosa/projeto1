import { Section } from "@/components/ui/Section";
import { Testimonial } from "@/components/ui/Testimonial";
import { depoimentos } from "@/content/home";

export function Testimonials() {
  return (
    <Section id="depoimentos" title="O que dizem nossos clientes">
      <div className="grid gap-6 md:grid-cols-3">
        {depoimentos.slice(0, 3).map((d) => (
          <Testimonial key={d.nome} {...d} />
        ))}
      </div>
      <a href="#" className="text-sm font-semibold text-indigo-600 hover:underline">
        Ler mais recomendações de clientes →
      </a>
    </Section>
  );
}
