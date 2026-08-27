import {
  Compass,
  Users,
  CalendarDays,
  FileText,
  CreditCard,
  Building2,
  MessageSquare,
  Mail,
  PhoneCall,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

export type Product = "Borna Care" | "Borna Connect";

export type Topic = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  product: Product;
  articles: number;
  videos: number;
};

export const topics: Topic[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Learn the basics and start using Borna confidently.",
    icon: Compass,
    product: "Borna Care",
    articles: 1,
    videos: 1,
  },
  {
    slug: "dependents",
    title: "Dependents",
    description: "Manage dependent profiles and their information securely.",
    icon: Users,
    product: "Borna Care",
    articles: 1,
    videos: 1,
  },
  {
    slug: "appointments",
    title: "Appointments",
    description: "Book, manage, review, and update appointments easily.",
    icon: CalendarDays,
    product: "Borna Care",
    articles: 1,
    videos: 1,
  },
  {
    slug: "forms",
    title: "Forms",
    description: "Complete, review, and submit your forms securely.",
    icon: FileText,
    product: "Borna Care",
    articles: 1,
    videos: 1,
  },
  {
    slug: "payments",
    title: "Payments",
    description: "Review payment requests, make payments, and view history.",
    icon: CreditCard,
    product: "Borna Care",
    articles: 1,
    videos: 1,
  },
  {
    slug: "branches",
    title: "Branches",
    description: "View, manage, and switch between connected clinic branches.",
    icon: Building2,
    product: "Borna Care",
    articles: 1,
    videos: 0,
  },
  {
    slug: "chatting-sms",
    title: "Chatting & SMS",
    description: "Chat with clinics and send SMS messages easily.",
    icon: MessageSquare,
    product: "Borna Connect",
    articles: 1,
    videos: 1,
  },
  {
    slug: "automatic-messages",
    title: "Automatic Messages",
    description: "Create automated reminders, confirmations, and follow-ups easily.",
    icon: Mail,
    product: "Borna Connect",
    articles: 1,
    videos: 1,
  },
  {
    slug: "ai-calls",
    title: "AI Calls",
    description: "Manage AI calls, summaries, and patient conversations.",
    icon: PhoneCall,
    product: "Borna Connect",
    articles: 1,
    videos: 1,
  },
  {
    slug: "follow-ups",
    title: "Follow-ups",
    description: "Create, manage, and track patient follow-ups easily.",
    icon: CheckCircle2,
    product: "Borna Connect",
    articles: 1,
    videos: 0,
  },
];

export type VideoItem = {
  id: string;
  title: string;
  topic: string;
  topicSlug: string;
  product: Product;
  duration?: string | undefined;
  description: string;
};

export const videos: VideoItem[] = [
  {
    id: "v-appointments",
    title: "How to Manage Appointments",
    topic: "Appointments",
    topicSlug: "appointments",
    product: "Borna Care",
    duration: "4:32",
    description: "Watch a step-by-step walkthrough of booking, rescheduling, and cancelling.",
  },
  {
    id: "v-chat",
    title: "Using Chat in Borna Care",
    topic: "Chatting & SMS",
    topicSlug: "chatting-sms",
    product: "Borna Connect",
    duration: "5:10",
    description: "Start a chat with your clinic, ask questions, and book through chat.",
  },
  {
    id: "v-forms",
    title: "Completing and Submitting Forms",
    topic: "Forms",
    topicSlug: "forms",
    product: "Borna Care",
    duration: "3:48",
    description: "Fill in, review, and securely submit the forms your clinic sends you.",
  },
  {
    id: "v-payments",
    title: "Making a Payment",
    topic: "Payments",
    topicSlug: "payments",
    product: "Borna Care",
    duration: "2:55",
    description: "Review a payment request, pay it, and find it again in your history.",
  },
  {
    id: "v-dependents",
    title: "Adding and Managing Dependents",
    topic: "Dependents",
    topicSlug: "dependents",
    product: "Borna Care",
    duration: "3:20",
    description: "Create a dependent profile and keep their information up to date.",
  },
  {
    id: "v-auto",
    title: "Creating Automatic Messages",
    topic: "Automatic Messages",
    topicSlug: "automatic-messages",
    product: "Borna Connect",
    duration: "6:04",
    description: "Set up automated reminders, confirmations, and follow-up messages.",
  },
];

export const popularGuides = [
  { title: "Booking an appointment", slug: "appointments" },
  { title: "Managing dependents", slug: "dependents" },
  { title: "Completing forms", slug: "forms" },
  { title: "Making payments", slug: "payments" },
];

export type SearchResult = {
  kind: "Article" | "Video";
  title: string;
  description: string;
  topic: string;
  topicSlug: string;
  product: Product;
  duration?: string | undefined;
};

const articleResults: SearchResult[] = topics.map((t) => ({
  kind: "Article",
  title: t.title,
  description: t.description,
  topic: t.title,
  topicSlug: t.slug,
  product: t.product,
}));

const videoResults: SearchResult[] = videos.map((v) => ({
  kind: "Video",
  title: v.title,
  description: v.description,
  topic: v.topic,
  topicSlug: v.topicSlug,
  product: v.product,
  duration: v.duration,
}));

export const allResults: SearchResult[] = [...articleResults, ...videoResults];

export function searchHelp(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return allResults.filter((r) =>
    `${r.title} ${r.description} ${r.topic} ${r.product}`.toLowerCase().includes(q),
  );
}
