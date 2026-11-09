import { Placeholder } from "./Placeholder";
import type { Depoimento } from "@/content/home";

export function Testimonial({ texto, nome, origem }: Depoimento) {
  return (
    <figure className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <blockquote className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
        “{texto}”
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <Placeholder aspect="aspect-square" label="Foto" className="w-12 shrink-0" rounded="rounded-full" />
        <span className="text-sm">
          <strong className="block text-zinc-900 dark:text-zinc-50">{nome}</strong>
          <span className="text-zinc-500">{origem}</span>
        </span>
      </figcaption>
    </figure>
  );
}
