"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSendContact } from "@/lib/queries";

const schema = z.object({
  name: z.string().min(2, "Informe seu nome completo."),
  email: z.string().email("Informe um e-mail válido."),
  message: z.string().min(10, "Escreva uma mensagem com pelo menos 10 caracteres."),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const { mutate, isPending, isSuccess, isError, error } = useSendContact();

  const onSubmit = (data: FormData) => {
    mutate(data, { onSuccess: () => reset() });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-muted">
          nome
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full rounded-lg border border-line bg-panel2 px-3.5 py-2.5 text-sm text-[#E8EDF3] outline-none transition-colors focus:border-teal"
          placeholder="Como podemos te chamar?"
        />
        {errors.name && <p className="mt-1 text-xs text-[#F5B85A]">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-muted">
          e-mail
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded-lg border border-line bg-panel2 px-3.5 py-2.5 text-sm text-[#E8EDF3] outline-none transition-colors focus:border-teal"
          placeholder="voce@email.com"
        />
        {errors.email && <p className="mt-1 text-xs text-[#F5B85A]">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-muted">
          mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full resize-none rounded-lg border border-line bg-panel2 px-3.5 py-2.5 text-sm text-[#E8EDF3] outline-none transition-colors focus:border-teal"
          placeholder="Conte um pouco sobre o projeto ou a oportunidade..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-[#F5B85A]">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isPending}
        className="mt-1 rounded-lg border border-teal bg-teal px-5 py-3 font-mono text-sm font-medium text-[#08161A] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {isPending ? "Enviando..." : "Enviar mensagem →"}
      </button>

      {isSuccess && (
        <p className="font-mono text-xs text-teal">Mensagem enviada! Retorno em breve.</p>
      )}
      {isError && (
        <p className="font-mono text-xs text-[#F5B85A]">
          {error instanceof Error ? error.message : "Erro ao enviar. Tente novamente."}
        </p>
      )}
    </form>
  );
}
