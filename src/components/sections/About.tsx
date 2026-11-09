import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/ui/Section";
import { Testimonial } from "@/components/ui/Testimonial";
import { depoimentos, sobre } from "@/content/home";

export function About() {
  return (
    <Section id="marketing" title={sobre.titulo} muted>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">{sobre.texto}</p>
        <Placeholder aspect="aspect-video" label="Foto da equipe (provisória)" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{sobre.subtitulo}</h3>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">{sobre.chamada}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {sobre.cards.map((c) => (
          <article key={c.titulo} className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">{c.titulo}</h4>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">{c.texto}</p>
          </article>
        ))}
      </div>
      <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{sobre.confiancaTitulo}</h3>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sobre.estatisticas.map((e) => (
          <li key={e} className="rounded-xl bg-indigo-600 p-5 font-medium text-white">
            {e}
          </li>
        ))}
      </ul>
      <div className="max-w-2xl">
        <Testimonial {...depoimentos[3]} />
      </div>
    </Section>
  );
}
