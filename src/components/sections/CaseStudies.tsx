import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/ui/Section";
import { cases } from "@/content/home";

export function CaseStudies() {
  return (
    <Section id="cases" title={cases.titulo} muted>
      <div className="grid gap-6 md:grid-cols-3">
        {cases.itens.map((c) => (
          <article
            key={c.cliente}
            className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <Placeholder aspect="aspect-[4/3]" label={`Miniatura — ${c.cliente}`} />
            <Placeholder aspect="aspect-[5/1]" label="Logo do cliente" className="w-32" rounded="rounded-md" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{c.titulo}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{c.descricao}</p>
            <dl className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              <div>
                <dt className="inline font-semibold">Segmento: </dt>
                <dd className="inline">{c.segmento}</dd>
              </div>
              <div>
                <dt className="inline font-semibold">Serviços: </dt>
                <dd className="inline">{c.servicos.join(", ")}</dd>
              </div>
              <div>
                <dt className="inline font-semibold">Foco: </dt>
                <dd className="inline">{c.foco.join(", ")}</dd>
              </div>
            </dl>
            <Button href="#" variant="secondary" className="mt-auto">
              Ver história do projeto
            </Button>
          </article>
        ))}
      </div>
      <div>
        <Button href="#">{cases.botao}</Button>
      </div>
    </Section>
  );
}
