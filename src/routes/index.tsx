import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, SearchX } from "lucide-react";
import { HelpFooter, HelpHeader, SupportCta } from "@/components/help/chrome";
import { ResultCard, SearchBar, TopicCard, VideoCard } from "@/components/help/pieces";
import { popularGuides, searchHelp, topics, videos } from "@/lib/help-content";

const title = "Borna Help Center — Guides, Tutorials & Answers";
const description =
  "Find answers, watch tutorials, and learn how to get the most out of Borna Care and Borna Connect.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HelpCenter,
});

type Filter = "All" | "Articles" | "Videos";

function HelpCenter() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const results = useMemo(() => searchHelp(query), [query]);
  const filtered = results.filter((r) =>
    filter === "All" ? true : filter === "Articles" ? r.kind === "Article" : r.kind === "Video",
  );

  const searching = query.trim().length > 0;

  const clear = () => {
    setInput("");
    setQuery("");
    setFilter("All");
  };

  return (
    <div className="min-h-screen bg-background">
      <HelpHeader />
      <main>
        <section className="bg-[image:var(--gradient-soft)] border-b border-border">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              How can we <span className="gradient-text">help?</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Find answers, watch tutorials, and learn how to get the most out of Borna.
            </p>
            <div className="mt-8">
              <SearchBar
                value={input}
                onChange={(v) => {
                  setInput(v);
                  setQuery(v);
                }}
                onSubmit={() => setQuery(input)}
              />
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="text-muted-foreground">Popular:</span>
              {["Appointments", "Forms", "Payments"].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => {
                    setInput(p);
                    setQuery(p);
                  }}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {searching ? (
            filtered.length > 0 ? (
              <section aria-live="polite">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Search results for &ldquo;{query}&rdquo;
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(["All", "Articles", "Videos"] as Filter[]).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFilter(f)}
                      aria-pressed={filter === f}
                      className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                        filter === f
                          ? "border-transparent bg-primary text-primary-foreground"
                          : "border-border bg-card text-foreground hover:bg-secondary"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {filtered.map((r) => (
                    <ResultCard key={`${r.kind}-${r.title}`} result={r} />
                  ))}
                </div>
              </section>
            ) : (
              <section aria-live="polite" className="mx-auto max-w-xl py-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <SearchX className="h-6 w-6" />
                </span>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                  No results found
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  We couldn&apos;t find anything matching &ldquo;{query}&rdquo;.
                </p>
                <ul className="mx-auto mt-5 inline-block space-y-1.5 text-left text-sm text-muted-foreground">
                  <li>· Using fewer words</li>
                  <li>· Checking your spelling</li>
                  <li>· Searching for a feature or topic</li>
                </ul>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={clear}
                    className="gradient-brand rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Clear Search
                  </button>
                  <a
                    href="https://borna.ai/contact/"
                    className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    Contact Support
                  </a>
                </div>
                <div className="mt-10">
                  <SupportCta compact />
                </div>
              </section>
            )
          ) : (
            <>
              <section>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Explore Help Center
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {topics.map((t) => (
                    <TopicCard key={t.slug} topic={t} />
                  ))}
                </div>
              </section>

              <section className="mt-16">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
                  <div className="min-w-0">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                      Watch & Learn
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Short walkthroughs of the features patients and teams use most.
                    </p>
                  </div>
                </div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {videos.map((v) => (
                    <VideoCard key={v.id} video={v} />
                  ))}
                </div>
              </section>

              <section className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
                <div className="surface-panel p-6">
                  <h2 className="text-lg font-semibold tracking-tight text-foreground">
                    Popular guides
                  </h2>
                  <ul className="mt-4 divide-y divide-border">
                    {popularGuides.map((g) => (
                      <li key={g.slug}>
                        <Link
                          to="/articles/$slug"
                          params={{ slug: g.slug }}
                          className="group flex items-center justify-between gap-4 py-3 text-sm font-medium text-foreground"
                        >
                          {g.title}
                          <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <SupportCta />
              </section>
            </>
          )}
        </div>
      </main>
      <HelpFooter />
    </div>
  );
}
