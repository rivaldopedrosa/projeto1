import { Button } from "@/components/ui/Button";
import { menu, site } from "@/content/home";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#" className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
          {site.nome}
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="#contato" className="!px-4 !py-2">
          Fale sobre seu projeto
        </Button>
      </div>
    </header>
  );
}
