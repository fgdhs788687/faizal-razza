import type { Metadata } from "next";
import { summary, experience, education, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About me</h1>
      <p className="mt-6 text-base leading-relaxed text-muted">{summary}</p>

      {/* Experience */}
      <section className="mt-14">
        <h2 className="text-xl font-bold tracking-tight">Experience</h2>
        <div className="mt-6 space-y-8">
          {experience.map((e) => (
            <div key={e.company} className="border-l-2 border-border pl-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{e.role}</h3>
                <span className="font-mono text-xs text-muted">{e.period}</span>
              </div>
              <p className="text-sm text-accent">{e.company}</p>
              <p className="text-sm text-muted">{e.location}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-14">
        <h2 className="text-xl font-bold tracking-tight">Education</h2>
        <div className="mt-6 space-y-6">
          {education.map((ed) => (
            <div key={ed.degree} className="border-l-2 border-border pl-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{ed.degree}</h3>
                <span className="font-mono text-xs text-muted">{ed.period}</span>
              </div>
              <p className="text-sm text-muted">
                {ed.school} · {ed.location}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
