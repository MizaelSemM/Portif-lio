"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Project } from "@/types/project";

interface ContactInput {
  name: string;
  email: string;
  message: string;
}

async function fetchProjects(): Promise<Project[]> {
  const res = await fetch("/api/projects");
  if (!res.ok) throw new Error("Falha ao buscar projetos");
  const data = await res.json();
  return data.projects;
}

// Busca os projetos vindos da API (que consulta o PostgreSQL via Prisma)
export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
}

async function sendContact(input: ContactInput) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.error ?? "Não foi possível enviar sua mensagem.");
  }

  return res.json();
}

// Envia a mensagem do formulário de contato para a API
export function useSendContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: sendContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contact-messages"] });
    },
  });
}
