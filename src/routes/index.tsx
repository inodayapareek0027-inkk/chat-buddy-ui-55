import { createFileRoute } from "@tanstack/react-router";
import { ChatWindow } from "@/components/chat/ChatWindow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Customer Support Chat — Instant Answers, 24/7" },
      {
        name: "description",
        content:
          "Chat with AI Customer Support for instant answers on products, pricing, shipping, refunds, warranties, and company policies.",
      },
      { property: "og:title", content: "AI Customer Support Chat — Instant Answers, 24/7" },
      {
        property: "og:description",
        content:
          "Chat with AI Customer Support for instant answers on products, pricing, shipping, refunds, warranties, and company policies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <ChatWindow />;
}
