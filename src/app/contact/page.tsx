import type { Metadata } from "next";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
};

const items = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "GitHub", value: "View profile", href: profile.github },
  { label: "LinkedIn", value: "View profile", href: profile.linkedin },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in touch</h1>
      <p className="mt-4 text-base text-muted">
        I&apos;m {profile.status.toLowerCase()}. Feel free to reach out — I&apos;d love to hear from you.
      </p>

      <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-card">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between gap-4 px-6 py-4">
            <span className="text-sm font-medium text-muted">{item.label}</span>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-sm text-accent hover:underline"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-sm">{item.value}</span>
            )}
          </div>
        ))}
      </div>

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
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-background"
        >
          Send an email
        </a>
      </div>
    </div>
  );
}
