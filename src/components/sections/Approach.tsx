import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/ui/Section";
import { Testimonial } from "@/components/ui/Testimonial";
import { abordagem, depoimentos } from "@/content/home";

export function Approach() {
  return (
    <Section id="abordagem" title={abordagem.titulo}>
      <div className="grid gap-6 md:grid-cols-3">
        {abordagem.cards.map((card, i) => (
          <article key={card.titulo} className="flex flex-col gap-4 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <span className="text-sm font-semibold text-indigo-600">0{i + 1}</span>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{card.titulo}</h3>
            {card.itens ? (
              <ul className="list-disc space-y-1 pl-5 text-zinc-600 dark:text-zinc-400">
                {card.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-zinc-600 dark:text-zinc-400">{card.texto}</p>
            )}
          </article>
        ))}
      </div>
      <Placeholder aspect="aspect-[21/9]" label="Imagem da abordagem (provisória)" />
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <Testimonial {...depoimentos[2]} />
        </div>
        <Button href="#contato">{abordagem.botao}</Button>
      </div>
    </Section>
  );
}
