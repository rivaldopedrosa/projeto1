import { Section } from "@/components/ui/Section";
import { Testimonial } from "@/components/ui/Testimonial";
import { depoimentos, problema } from "@/content/home";

export function Problem() {
  return (
    <Section title={problema.titulo} muted>
      <div className="grid gap-10 lg:grid-cols-2">
        <ul className="flex flex-col gap-3">
          {problema.dores.map((dor) => (
            <li
              key={dor}
              className="rounded-xl border border-zinc-200 bg-white p-4 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {dor}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-6">
          <Testimonial {...depoimentos[1]} />
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">{problema.transicao}</p>
        </div>
      </div>
    </Section>
  );
}
