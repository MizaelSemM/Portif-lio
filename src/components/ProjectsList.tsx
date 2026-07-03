"use client";

import { useProjects } from "@/lib/queries";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  const { data: projects, isLoading, isError, refetch } = useProjects();

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-[132px] animate-pulse rounded-[10px] border border-line bg-panel"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-[10px] border border-line bg-panel p-6 text-center">
        <p className="mb-3 font-mono text-sm text-muted">
          Não foi possível carregar os projetos agora.
        </p>
        <button
          onClick={() => refetch()}
          className="rounded-md border border-line px-4 py-2 font-mono text-xs hover:border-teal hover:text-teal"
        >
          tentar de novo
        </button>
      </div>
    );
  }

  if (!projects?.length) {
    return (
      <p className="font-mono text-sm text-muted">Nenhum projeto cadastrado ainda.</p>
    );
  }

  return (
    <div>
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
  );
}
