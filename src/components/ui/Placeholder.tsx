import Image from "next/image";

type PlaceholderProps = {
  /** Proporção em Tailwind, ex.: "aspect-video", "aspect-square". */
  aspect?: string;
  /** Texto descritivo da imagem provisória. */
  label?: string;
  /** Quando informado, renderiza a imagem real no lugar do placeholder. */
  src?: string;
  alt?: string;
  className?: string;
  rounded?: string;
};

export function Placeholder({
  aspect = "aspect-video",
  label = "Imagem provisória",
  src,
  alt = "",
  className = "",
  rounded = "rounded-xl",
}: PlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${aspect} ${rounded} ${className}`}>
        <Image src={src} alt={alt || label} fill sizes="100vw" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-zinc-200 text-center text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 ${aspect} ${rounded} ${className}`}
    >
      <span className="px-2">{label}</span>
    </div>
  );
}
