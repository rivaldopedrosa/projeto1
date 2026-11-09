import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/ui/Section";
import { solucoes } from "@/content/home";

export function Solutions() {
  return (
    <Section id="parcerias" title={solucoes.titulo}>
      <div className="flex flex-col gap-16">
        {solucoes.categorias.map((cat) => (
          <article key={cat.titulo} className="flex flex-col gap-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{cat.titulo}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">{cat.descricao}</p>
              </div>
              <ul className="flex flex-wrap content-start gap-2">
                {cat.publicos.map((p) => (
                  <li
                    key={p}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: cat.projetos }, (_, i) => (
                <Placeholder key={i} aspect="aspect-[3/4]" label={`Projeto ${i + 1}`} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
