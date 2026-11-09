import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { Section } from "@/components/ui/Section";
import { inteligencia } from "@/content/home";

export function Intelligence() {
  return (
    <Section id="desenvolvimento" title={inteligencia.titulo} muted>
      <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">{inteligencia.texto}</p>
      <div className="grid gap-6 md:grid-cols-3">
        {inteligencia.itens.map((item) => (
          <article key={item.titulo} className="flex flex-col gap-4">
            <Placeholder aspect="aspect-[3/2]" label="Ícone / imagem provisória" />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{item.titulo}</h3>
            <p className="text-zinc-600 dark:text-zinc-400">{item.texto}</p>
          </article>
        ))}
      </div>
      <div>
        <Button href="#contato">{inteligencia.botao}</Button>
      </div>
    </Section>
  );
}
