import { Button } from "@/components/ui/Button";
import { Placeholder } from "@/components/ui/Placeholder";
import { Testimonial } from "@/components/ui/Testimonial";
import { depoimentos, hero } from "@/content/home";

export function Hero() {
  return (
    <section id="design" className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          {hero.titulo}
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">{hero.subtitulo}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#abordagem">{hero.botaoPrimario}</Button>
          <Button href="#cases" variant="secondary">
            {hero.botaoSecundario}
          </Button>
        </div>
        <Testimonial {...depoimentos[0]} />
      </div>
      <Placeholder aspect="aspect-[4/3]" label="Banner do hero (imagem provisória)" />
    </section>
  );
}
