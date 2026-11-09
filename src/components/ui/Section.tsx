import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
  muted = false,
}: {
  id?: string;
  title?: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={muted ? "bg-zinc-50 dark:bg-zinc-950" : ""}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20">
        {title && (
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
