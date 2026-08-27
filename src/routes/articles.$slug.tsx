import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, Play } from "lucide-react";
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
  VideoThumb,
} from "@/components/help/pieces";
import { topics, videos } from "@/lib/help-content";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const topic = topics.find((t) => t.slug === params.slug);
    if (!topic) throw notFound();
    return { topic };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article unavailable — Borna Help Center" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.topic.title} — Borna Help Center`;
    const description = loaderData.topic.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArticlePage,
});

const sections = [
  { id: "overview", label: "Overview" },
  { id: "before-you-start", label: "Before you start" },
  { id: "book", label: "Book an Appointment" },
  { id: "review", label: "Review Appointment" },
  { id: "reschedule", label: "Reschedule" },
  { id: "cancel", label: "Cancel" },
  { id: "best-practices", label: "Best Practices" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "summary", label: "Summary" },
];

const troubleshooting = [
  {
    q: "I can't see available appointment slots",
    a: "The clinic may not have open availability for the selected service or date range. Choose a different service or move to another date, and confirm you selected the correct clinic branch.",
  },
  {
    q: "I selected the wrong appointment time",
    a: "Open the appointment from your Appointments list and use Reschedule to pick a different slot. The original time is released once the new time is confirmed.",
  },
  {
    q: "I cannot cancel or reschedule",
    a: "Some appointments are locked close to the start time or after the clinic confirms them. If the actions are unavailable, contact the clinic directly through Chat.",
  },
  {
    q: "I booked an appointment but did not receive confirmation",
    a: "Check the Appointments list first — if the appointment appears there, the booking was successful. Confirmation messages depend on your contact details, so make sure your phone number and email are up to date in your profile.",
  },
];

function ArticlePage() {
  const { topic } = Route.useLoaderData();
  const isAppointments = topic.slug === "appointments";
  const video = videos.find((v) => v.topicSlug === topic.slug);
  const related = topics.filter((t) => t.slug !== topic.slug).slice(0, 6);

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
              {isAppointments
                ? "Use this guide to learn how patients can book a new appointment, review appointment details, reschedule or cancel a booking, and book again after a cancellation from the Borna Care patient portal."
                : topic.description}
            </p>

            {video && (
              <section className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Video tutorial
                </p>
                <div className="surface-panel mt-3 p-3">
                  <VideoThumb {...(video.duration ? { label: video.duration } : {})} />
                  <div className="flex flex-wrap items-center justify-between gap-2 p-3">
                    <h2 className="text-sm font-semibold text-foreground">{video.title}</h2>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Play className="h-3.5 w-3.5" />
                      Video placeholder
                      {video.duration && (
                        <>
                          <Clock className="ml-2 h-3.5 w-3.5" />
                          {video.duration}
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </section>
            )}

            {isAppointments ? (
              <>
                <ArticleSection id="overview" title="Overview">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    The Appointments section in Borna Care lets patients manage their visits with
                    the clinic from the patient portal. Patients can:
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {[
                      "Book a new appointment",
                      "Review appointment details",
                      "Reschedule an existing appointment",
                      "Cancel an appointment",
                      "Book again after a cancellation",
                      "View past and upcoming appointments",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </ArticleSection>

                <ArticleSection id="before-you-start" title="Before you start">
                  <Callout title="Make sure you have">
                    <ul className="grid gap-2 sm:grid-cols-2">
                      <li>Access to your Borna Care patient account.</li>
                      <li>Selected the correct clinic from your dashboard.</li>
                      <li>A connected clinic profile.</li>
                      <li>A stable internet connection.</li>
                    </ul>
                  </Callout>
                </ArticleSection>

                <ArticleSection id="book" title="Book an Appointment">
                  <div className="space-y-8">
                    <Step index={1} title="Open your clinic dashboard" screenshot="Clinic dashboard with the Appointments entry point.">
                      <p>Sign in to Borna Care and select the clinic you want to visit.</p>
                    </Step>
                    <Step index={2} title="Open the Appointments section">
                      <p>Select Appointments from the navigation to see upcoming and past visits.</p>
                    </Step>
                    <Step index={3} title="Choose Book Appointment" screenshot="Booking panel showing services and available slots.">
                      <p>
                        Select the service you need, then pick an available date and time slot from
                        the clinic&apos;s availability.
                      </p>
                    </Step>
                    <Step index={4} title="Confirm the booking">
                      <p>
                        Review the service, date, time, and clinic branch, then confirm. The new
                        appointment appears in your Appointments list.
                      </p>
                    </Step>
                  </div>
                </ArticleSection>

                <ArticleSection id="review" title="Review Appointment Details">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Open any appointment from the list to review the service, date and time, clinic
                    branch, and status. Use this view before rescheduling or cancelling.
                  </p>
                </ArticleSection>

                <ArticleSection id="reschedule" title="Reschedule an Appointment">
                  <div className="space-y-8">
                    <Step index={1} title="Open the appointment">
                      <p>Select the appointment you want to change from the Appointments list.</p>
                    </Step>
                    <Step index={2} title="Select Reschedule">
                      <p>Choose a new available slot and confirm. The previous slot is released.</p>
                    </Step>
                  </div>
                </ArticleSection>

                <ArticleSection id="cancel" title="Cancel an Appointment">
                  <div className="space-y-8">
                    <Step index={1} title="Open the appointment and select Cancel">
                      <p>Confirm the cancellation when prompted. The status updates to cancelled.</p>
                    </Step>
                    <Step index={2} title="Book a new appointment after cancellation">
                      <p>
                        Return to Book Appointment, select the service again, and choose a new
                        available slot.
                      </p>
                    </Step>
                  </div>
                </ArticleSection>

                <ArticleSection id="best-practices" title="Best Practices">
                  <ol className="list-decimal space-y-2 rounded-2xl border border-border bg-card p-6 pl-10 text-sm text-muted-foreground">
                    <li>Select the correct clinic branch before booking.</li>
                    <li>Choose the service that matches the reason for your visit.</li>
                    <li>Review the date, time, and branch before confirming.</li>
                    <li>Reschedule instead of cancelling when you only need a different time.</li>
                    <li>Cancel as early as possible so the slot can be released.</li>
                    <li>Keep your contact details up to date to receive confirmations.</li>
                  </ol>
                </ArticleSection>

                <ArticleSection id="troubleshooting" title="Troubleshooting">
                  <Accordion items={troubleshooting} />
                </ArticleSection>

                <ArticleSection id="summary" title="Summary">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    The Appointments feature in Borna Care gives patients a simple way to book,
                    review, reschedule, and cancel visits with their clinic — and to book again
                    after a cancellation — all from the patient portal.
                  </p>
                </ArticleSection>
              </>
            ) : (
              <ArticleSection id="overview" title="Overview">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  This guide is being prepared. In the meantime, the{" "}
                  <Link to="/articles/$slug" params={{ slug: "appointments" }} className="text-primary underline">
                    Appointments guide
                  </Link>{" "}
                  shows the full article experience, or contact support below.
                </p>
              </ArticleSection>
            )}

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
            {isAppointments && <OnThisPage items={sections} />}
          </aside>
        </div>
      </main>
      <HelpFooter />
    </div>
  );
}
