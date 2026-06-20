import type { Metadata } from "next";
import { projects, profile } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-base text-muted">
        A selection of academic and self-driven projects spanning software
        development, data analysis and machine learning.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
