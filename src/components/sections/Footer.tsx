import { rodape, site } from "@/content/home";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{rodape.titulo}</p>
          <p className="mt-2 text-sm">{rodape.descricao}</p>
        </div>
        <div>
          <p className="font-semibold text-white">Capacidades</p>
          <ul className="mt-2 space-y-1 text-sm">
            {rodape.capacidades.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Empresa</p>
          <ul className="mt-2 space-y-1 text-sm">
            {rodape.empresa.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Vamos conversar</p>
          <a href={`mailto:${site.email}`} className="mt-2 block text-sm hover:underline">
            {site.email}
          </a>
        </div>
      </div>
      <div className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="font-semibold text-white">Construído com experiência. Comprovado na entrega.</p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-4">
            {rodape.numeros.map((n) => (
              <li key={n.rotulo}>
                <span className="block text-2xl font-bold text-white">{n.valor}</span>
                <span className="text-sm">{n.rotulo}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-zinc-500">
            © {site.ano} {site.nome}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
