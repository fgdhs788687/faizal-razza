import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-5">
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">
            Email
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
