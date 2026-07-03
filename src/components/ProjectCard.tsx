import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types/project";
import { statusLabel } from "@/types/project";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="mb-4 grid gap-6 rounded-[10px] border border-line bg-panel p-6 transition-all hover:-translate-y-0.5 hover:border-[#31404F] sm:grid-cols-[1fr_auto]">
      <div>
        <div className="mb-2 font-mono text-[11.5px] text-muted">
          projeto <b className="text-amber">#{String(index + 1).padStart(2, "0")}</b> ·{" "}
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-[#28C840] shadow-[0_0_8px_#28C840]" />
            {statusLabel[project.status]}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
        <p className="mb-4 max-w-lg text-[14.5px] text-muted">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-md border border-line bg-panel2 px-2.5 py-1 font-mono text-[11px]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="flex min-w-[150px] flex-col gap-2.5">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono text-[12.5px] text-muted transition-colors hover:text-teal"
        >
          <Github size={13} /> código-fonte
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[12.5px] text-muted transition-colors hover:text-teal"
          >
            <ExternalLink size={13} /> ver deploy
          </a>
        )}
      </div>
    </div>
  );
}
