import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Image as ImageIcon,
  Play,
  Search,
  Info,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import type { SearchResult, Topic, VideoItem } from "@/lib/help-content";

export function ProductBadge({ product }: { product: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-1 text-[11px] font-semibold text-secondary-foreground">
      {product}
    </span>
  );
}

export function KindBadge({ kind }: { kind: "Article" | "Video" }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
      {kind === "Article" ? <FileText className="h-3 w-3" /> : <Play className="h-3 w-3" />}
      {kind}
    </span>
  );
}

export function SearchBar({
  value,
  onChange,
  onSubmit,
  size = "lg",
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit?: () => void;
  size?: "lg" | "md";
}) {
  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
      className="w-full"
    >
      <label htmlFor="help-search" className="sr-only">
        Search the Borna Help Center
      </label>
      <div
        className={`flex items-center gap-3 rounded-full border border-border bg-card shadow-float transition-shadow focus-within:border-primary/40 ${
          size === "lg" ? "px-5 py-3 sm:px-6 sm:py-4" : "px-4 py-2.5"
        }`}
      >
        <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
        <input
          id="help-search"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for articles, guides, or answers..."
          className={`min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground ${
            size === "lg" ? "text-base sm:text-lg" : "text-sm"
          }`}
        />
        <button
          type="submit"
          className={`gradient-brand shrink-0 rounded-full font-semibold text-white transition-opacity hover:opacity-90 ${
            size === "lg" ? "px-5 py-2.5 text-sm" : "px-4 py-1.5 text-xs"
          }`}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export function TopicCard({ topic }: { topic: Topic }) {
  const Icon = topic.icon;
  return (
    <Link
      to="/articles/$slug"
      params={{ slug: topic.slug }}
      className="surface-panel group flex flex-col p-5 transition-all hover:-translate-y-0.5 hover:shadow-float"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-base font-semibold text-foreground">{topic.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
      <span className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        {topic.articles > 0 && <span>{topic.articles} article{topic.articles > 1 ? "s" : ""}</span>}
        {topic.videos > 0 && (
          <>
            <span aria-hidden="true">·</span>
            <span>{topic.videos} video{topic.videos > 1 ? "s" : ""}</span>
          </>
        )}
      </span>
    </Link>
  );
}

export function VideoThumb({ label }: { label?: string }) {
  return (
    <div className="relative grid aspect-video w-full place-items-center overflow-hidden rounded-xl border border-border bg-[image:var(--gradient-soft)]">
      <div
        className="absolute inset-0 opacity-[0.07] gradient-brand"
        aria-hidden="true"
      />
      <span className="gradient-brand relative grid h-12 w-12 place-items-center rounded-full text-white shadow-card">
        <Play className="h-5 w-5 translate-x-[1px]" fill="currentColor" />
      </span>
      {label && (
        <span className="absolute bottom-2 right-2 rounded-md bg-navy/85 px-2 py-0.5 text-[11px] font-medium text-white">
          {label}
        </span>
      )}
    </div>
  );
}

export function VideoCard({ video }: { video: VideoItem }) {
  return (
    <article className="surface-panel overflow-hidden p-3 transition-all hover:-translate-y-0.5 hover:shadow-float">
      <VideoThumb {...(video.duration ? { label: video.duration } : {})} />
      <div className="p-3">
        <div className="flex flex-wrap items-center gap-2">
          <ProductBadge product={video.product} />
          <span className="text-[11px] font-medium text-muted-foreground">{video.topic}</span>
        </div>
        <h3 className="mt-2.5 text-sm font-semibold text-foreground">{video.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{video.description}</p>
      </div>
    </article>
  );
}

export function ResultCard({ result }: { result: SearchResult }) {
  return (
    <Link
      to="/articles/$slug"
      params={{ slug: result.topicSlug }}
      className="surface-panel flex flex-col gap-2 p-5 transition-all hover:-translate-y-0.5 hover:shadow-float"
    >
      <div className="flex flex-wrap items-center gap-2">
        <KindBadge kind={result.kind} />
        <span className="text-xs font-medium text-muted-foreground">{result.topic}</span>
        {result.duration && (
          <span className="text-xs text-muted-foreground">· {result.duration}</span>
        )}
      </div>
      <h3 className="text-base font-semibold text-foreground">{result.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{result.description}</p>
      <ProductBadge product={result.product} />
    </Link>
  );
}

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ArticleSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 pt-10">
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function Step({
  index,
  title,
  children,
  screenshot,
}: {
  index: number;
  title: string;
  children: ReactNode;
  screenshot?: string;
}) {
  return (
    <div className="relative pl-12">
      <span className="gradient-brand absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-white">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="pt-1.5 text-base font-semibold text-foreground">{title}</h3>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
      {screenshot && <Screenshot caption={screenshot} />}
    </div>
  );
}

export function Screenshot({ caption }: { caption: string }) {
  return (
    <figure className="mt-4">
      <div className="grid aspect-[16/7] place-items-center rounded-xl border border-border bg-surface-muted">
        <ImageIcon className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
      </div>
      <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-accent/60 p-5">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Info className="h-4 w-4" aria-hidden="true" />
        {title}
      </h3>
      <div className="mt-2 text-sm leading-relaxed text-foreground/80">{children}</div>
    </div>
  );
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="overflow-hidden rounded-xl border border-border bg-card">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-foreground"
              >
                {item.q}
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function OnThisPage({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <details className="surface-panel mb-6 p-4 lg:hidden">
        <summary className="cursor-pointer text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          On this page
        </summary>
        <ul className="mt-3 space-y-2">
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} className="text-sm text-muted-foreground hover:text-primary">
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </details>
      <nav aria-label="On this page" className="hidden lg:block">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          On this page
        </p>
        <ul className="mt-4 space-y-1 border-l border-border">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                aria-current={active === i.id ? "true" : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                  active === i.id
                    ? "border-primary font-medium text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
