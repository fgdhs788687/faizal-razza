import type { Metadata } from "next";
import { skillGroups, profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `Skills — ${profile.name}`,
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h1>
      <p className="mt-4 max-w-2xl text-base text-muted">
        Languages, tools and concepts I work with.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              {group.title}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border px-3 py-1 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
