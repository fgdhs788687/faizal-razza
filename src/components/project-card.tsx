import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-muted">{project.blurb}</p>

      <ul className="mt-4 space-y-2 text-sm">
        {project.description.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
