import Link from "next/link";
import { profile, highlights, projects } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <p className="font-mono text-sm text-accent">Hi, my name is</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <h2 className="mt-2 text-2xl font-semibold text-muted sm:text-4xl">
          {profile.headline}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download résumé
          </a>
          <Link
            href="/projects"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
          >
            View my work
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card"
          >
            Get in touch
          </Link>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {profile.status}
        </p>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-2 gap-4 border-t border-border py-12 sm:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.label}>
            <div className="text-3xl font-bold text-accent">{h.value}</div>
            <div className="mt-1 text-sm text-muted">{h.label}</div>
          </div>
        ))}
      </section>

      {/* Featured projects */}
      <section className="border-t border-border py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Featured projects</h2>
          <Link href="/projects" className="text-sm text-accent hover:underline">
            All projects →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
