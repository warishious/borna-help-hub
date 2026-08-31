import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { HelpFooter, HelpHeader, SupportCta } from "@/components/help/chrome";
import {
  Accordion,
  ArticleSection,
  Breadcrumb,
  Callout,
  KindBadge,
  OnThisPage,
  ProductBadge,
  Step,
  YouTubePlayer,
} from "@/components/help/pieces";
import { topics, videos, type Block } from "@/lib/help-content";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const topic = topics.find((t) => t.slug === params.slug);
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article unavailable — Borna Help Center" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.topic.title} — Borna Help Center`;
    const description = loaderData.topic.description;
    const meta: { title?: string; name?: string; property?: string; content?: string }[] = [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ];
    if (loaderData.topic.youtubeId) {
      const img = `https://i.ytimg.com/vi/${loaderData.topic.youtubeId}/maxresdefault.jpg`;
      meta.push({ property: "og:image", content: img });
      meta.push({ name: "twitter:image", content: img });
    }
    return { meta };
  },
  component: ArticlePage,
});

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p className="text-sm leading-relaxed text-muted-foreground">{block.text}</p>;
    case "list":
      return (
        <ul className="grid gap-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <div className="space-y-8">
          {block.items.map((s, i) => (
            <Step key={s.title} index={i + 1} title={s.title}>
              <ul className="space-y-1.5">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Step>
          ))}
        </div>
      );
    case "callout":
      return (
        <Callout title={block.title}>
          <ul className="grid gap-2 sm:grid-cols-2">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Callout>
      );
    case "faq":
      return <Accordion items={block.items} />;
    default:
      return null;
  }
}

function ArticlePage() {
  const { topic } = Route.useLoaderData();
  const video = videos.find((v) => v.topicSlug === topic.slug);
  const youtubeId = topic.youtubeId ?? video?.youtubeId;
  const videoTitle = topic.videoTitle ?? video?.title ?? `${topic.title} video tutorial`;
  const related = topics.filter((t) => t.slug !== topic.slug).slice(0, 6);
  const nav = topic.sections.map((s) => ({ id: s.id, label: s.title }));

  return (
    <div className="min-h-screen bg-background">
      <HelpHeader />
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12">
          <article className="min-w-0">
            <Breadcrumb items={[{ label: "Help Center", to: "/" }, { label: topic.title }]} />
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <ProductBadge product={topic.product} />
              <KindBadge kind="Article" />
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {topic.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {topic.intro}
            </p>

            {youtubeId && (
              <section className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Video tutorial
                </p>
                <div className="surface-panel mt-3 p-3">
                  <YouTubePlayer youtubeId={youtubeId} title={videoTitle} />
                  <div className="flex flex-wrap items-center justify-between gap-2 p-3">
                    <h2 className="text-sm font-semibold text-foreground">{videoTitle}</h2>
                    <a
                      href={`https://youtu.be/${youtubeId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-primary hover:underline"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </section>
            )}

            {topic.sections.map((section) => (
              <ArticleSection key={section.id} id={section.id} title={section.title}>
                {section.blocks.map((block, i) => (
                  <BlockView key={i} block={block} />
                ))}
              </ArticleSection>
            ))}

            <section className="mt-16">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                You might also find this helpful
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((t) => (
                  <Link
                    key={t.slug}
                    to="/articles/$slug"
                    params={{ slug: t.slug }}
                    className="surface-panel p-4 transition-all hover:-translate-y-0.5 hover:shadow-float"
                  >
                    <div className="flex items-center gap-2">
                      <t.icon className="h-4 w-4 text-primary" />
                      <h3 className="text-sm font-semibold text-foreground">{t.title}</h3>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{t.description}</p>
                  </Link>
                ))}
              </div>
            </section>

            <div className="mt-12">
              <SupportCta compact />
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:h-fit lg:pt-24 order-first lg:order-last">
            {nav.length > 1 && <OnThisPage items={nav} />}
          </aside>
        </div>
      </main>
      <HelpFooter />
    </div>
  );
}
