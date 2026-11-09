"use client";

import { useState, type FormEvent } from "react";
import { Section } from "@/components/ui/Section";
import { formulario } from "@/content/home";

const campo =
  "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50";

export function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  // Provisório: ainda não há envio real, será integrado depois.
  function aoEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <Section id="contato" title={formulario.titulo}>
      <p className="-mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">{formulario.texto}</p>
      <form onSubmit={aoEnviar} className="grid max-w-2xl gap-4">
        <label className="grid gap-1 text-sm font-medium">
          Seu nome*
          <input name="nome" required className={campo} />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Seu e-mail*
          <input name="email" type="email" required className={campo} />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Seu telefone*
          <input name="telefone" type="tel" required className={campo} />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Serviço de que você precisa*
          <select name="servico" required defaultValue="" className={campo}>
            <option value="" disabled>
              - Selecione
            </option>
            {formulario.servicos.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Sua mensagem
          <textarea name="mensagem" rows={4} className={campo} />
        </label>
        {/* Honeypot anti-spam: deve permanecer vazio. */}
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button
          type="submit"
          className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Enviar
        </button>
        {enviado && (
          <p role="status" className="text-sm text-green-600">
            Mensagem recebida (envio provisório, ainda sem integração).
          </p>
        )}
      </form>
    </Section>
  );
}
