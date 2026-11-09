# projeto1

Aplicação web construída com [Next.js](https://nextjs.org) (App Router), React e TypeScript, estilizada com Tailwind CSS. A primeira página (`/`) segue o modelo de uma página de design de sites, com 11 seções: cabeçalho, hero, problema, abordagem, inteligência, soluções, cases, depoimentos, sobre, formulário e rodapé.

Os textos são provisórios e ficam em `src/content/home.ts`. Todas as imagens são provisórias: usam o componente `Placeholder` (`src/components/ui/Placeholder.tsx`). Para trocar por uma imagem real, passe a prop `src` (por exemplo, `<Placeholder src="/hero.webp" alt="..." />`) com o arquivo em `public/`. O formulário de contato ainda não envia dados.

## Stack

| Tecnologia | Versão | Uso |
| --- | --- | --- |
| [Next.js](https://nextjs.org) | 16.4.5 | Framework (App Router, Turbopack) |
| [React](https://react.dev) | 19.3.0 | Interface |
| [TypeScript](https://www.typescriptlang.org) | ^5 | Tipagem (modo `strict`) |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | Estilização (via `@tailwindcss/turbopack`) |
| [ESLint](https://eslint.org) | ^9 | Lint (`eslint-config-next`: core-web-vitals + typescript) |

Fontes [Geist](https://vercel.com/font) (Sans e Mono) carregadas com `next/font/google`.

## Pré-requisitos

- [Node.js](https://nodejs.org) compatível com o Next.js 16 (versão LTS recente)
- npm (o projeto usa `package-lock.json`)

## Primeiros passos

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador. A página atualiza automaticamente ao editar `src/app/page.tsx`.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Serve o build de produção |
| `npm run lint` | Executa o ESLint |

Não há testes automatizados configurados.

## Estrutura do projeto

```
projeto1/
├── public/                 # Arquivos estáticos (coloque aqui as imagens reais)
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css     # Tailwind, variáveis de tema (claro/escuro) e fontes
│   │   ├── layout.tsx      # Layout raiz: fontes Geist e metadata
│   │   └── page.tsx        # Página inicial (compõe as seções)
│   ├── components/
│   │   ├── sections/       # Seções da página (Header, Hero, Problem, ...)
│   │   └── ui/             # Button, Placeholder, Section, Testimonial
│   └── content/
│       └── home.ts         # Textos da página inicial
├── AGENTS.md               # Instruções para agentes de IA
├── CLAUDE.md               # Diretrizes para o Claude Code
├── eslint.config.mjs       # Configuração do ESLint
├── next.config.ts          # Configuração do Next.js
├── tsconfig.json           # Configuração do TypeScript
└── package.json
```

O alias de import `@/*` aponta para `src/*`.

## Configuração

Em `next.config.ts`:

- `cacheComponents: true` e `partialPrefetching: true` — recursos de cache e prefetch do Next.js 16.
- Regra do Turbopack que processa arquivos `*.css` com `@tailwindcss/turbopack`.

Em `globals.css`, as cores `--background` e `--foreground` mudam automaticamente conforme `prefers-color-scheme` (tema claro/escuro).

> **Atenção:** esta versão do Next.js tem mudanças incompatíveis com versões anteriores. Antes de escrever código, consulte a documentação em `node_modules/next/dist/docs/`.

## Convenções

- Conteúdo e comunicação em português (pt-BR), com acentuação correta.

## Saiba mais

- [Documentação do Next.js](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)

## Deploy

A forma mais simples de publicar é a [plataforma Vercel](https://vercel.com/new). Veja também a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying).
