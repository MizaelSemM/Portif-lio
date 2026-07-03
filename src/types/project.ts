export type ProjectStatus = "PRODUCAO" | "EM_DESENVOLVIMENTO" | "ARQUIVADO";

export interface Project {
  id: string;
  order: number;
  title: string;
  description: string;
  badges: string[];
  githubUrl: string;
  demoUrl: string | null;
  status: ProjectStatus;
}

export const statusLabel: Record<ProjectStatus, string> = {
  PRODUCAO: "produção",
  EM_DESENVOLVIMENTO: "em desenvolvimento",
  ARQUIVADO: "arquivado",
};
