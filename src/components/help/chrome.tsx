import { Link } from "@tanstack/react-router";
import { ArrowUpRight, LifeBuoy } from "lucide-react";
import { BornaLogo } from "../borna-logo";

export function HelpHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <BornaLogo className="h-6 w-auto shrink-0 text-navy sm:h-7" />
          <span className="h-5 w-px shrink-0 bg-border" aria-hidden="true" />
          <span className="truncate text-sm font-semibold tracking-tight text-muted-foreground">
            Help Center
          </span>
        </Link>
        <a
          href="https://borna.ai/"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary sm:text-sm"
        >
          <span className="hidden sm:inline">Back to</span> Borna.ai
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

const footerColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Products",
    links: [
      { label: "Borna Care", href: "https://borna.ai/products/care/" },
      { label: "Borna Connect", href: "https://borna.ai/products/connect/" },
      { label: "Borna Core", href: "https://borna.ai/products/core/" },
      { label: "Borna Insight", href: "https://borna.ai/products/insight/" },
      { label: "Borna Engage", href: "https://borna.ai/products/engage/" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Platform overview", href: "https://borna.ai/#how-it-works" },
      { label: "Why Borna", href: "https://borna.ai/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "https://borna.ai/contact/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/bornaai/" },
      { label: "Instagram", href: "https://www.instagram.com/borna.ai.saas/" },
    ],
  },
  {
    title: "Industries",
    links: [{ label: "Dental & medical practices", href: "https://borna.ai/" }],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/" },
      { label: "FAQ", href: "https://borna.ai/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [{ label: "HIPAA & data protection", href: "https://borna.ai/#faq" }],
  },
];

export function HelpFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_3fr]">
          <div className="max-w-xs">
            <BornaLogo className="h-6 w-auto text-navy" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Borna AI is a unified healthcare platform helping practices improve patient
              engagement, streamline communication, and automate operations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                  {col.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          {new Date().getFullYear()} © Borna, Inc. | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export function SupportCta({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`surface-panel flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between ${
        compact ? "p-6" : "p-8"
      }`}
    >
      <div className="flex min-w-0 items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
          <LifeBuoy className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h2 className="text-base font-semibold text-foreground">Still need help?</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? Contact Borna support.
          </p>
        </div>
      </div>
      <a
        href="https://borna.ai/contact/"
        className="gradient-brand inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-card transition-opacity hover:opacity-90"
      >
        Contact Support
      </a>
    </section>
  );
}
