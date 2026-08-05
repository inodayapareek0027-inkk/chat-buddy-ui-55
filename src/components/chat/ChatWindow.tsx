import { useEffect, useRef, useState } from "react";
import { Bot } from "lucide-react";
import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { MessageBubble } from "./MessageBubble";
import { SuggestionChips } from "./SuggestionChips";
import { TypingIndicator } from "./TypingIndicator";
import { getDemoResponse, type ChatMessage } from "@/lib/demo-responses";

const newId = () => Math.random().toString(36).slice(2, 10);

export function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping]);

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);

  const reply = (prompt: string) => {
    setIsTyping(true);
    timer.current = window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: newId(),
          role: "assistant",
          content: getDemoResponse(prompt),
          createdAt: Date.now(),
        },
      ]);
      setIsTyping(false);
    }, 2000);
  };

  const send = (text: string) => {
    if (isTyping) return;
    setMessages((prev) => [
      ...prev,
      { id: newId(), role: "user", content: text, createdAt: Date.now() },
    ]);
    setDraft("");
    reply(text);
  };

  const regenerate = (id: string) => {
    if (isTyping) return;
    const index = messages.findIndex((m) => m.id === id);
    if (index === -1) return;
    const prompt =
      [...messages.slice(0, index)].reverse().find((m) => m.role === "user")?.content ??
      "";
    setMessages((prev) => prev.filter((_, i) => i !== index));
    reply(prompt);
  };

  const isEmpty = messages.length === 0 && !isTyping;

  return (
    <div className="flex h-dvh flex-col bg-background">
      <ChatHeader />

      <main className="scrollbar-slim flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
          {isEmpty ? (
            <div className="flex min-h-[52vh] flex-col items-center justify-center">
              <div className="animate-msg-in w-full rounded-3xl border border-border bg-card px-6 py-8 text-center shadow-soft sm:px-10 sm:py-12">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lift">
                  <Bot className="size-7" strokeWidth={2.1} />
                </div>
                <h2 className="mt-5 text-balance text-xl font-semibold tracking-tight sm:text-2xl">
                  Welcome to AI Customer Support
                </h2>
                <p className="mx-auto mt-2.5 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
                  Ask questions about products, pricing, shipping, refunds, warranties,
                  or company policies.
                </p>
                <div className="mt-7">
                  <SuggestionChips onSelect={send} />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((m) => (
                <MessageBubble
                  key={m.id}
                  message={m}
                  onRegenerate={
                    m.role === "assistant" ? () => regenerate(m.id) : undefined
                  }
                />
              ))}
              {isTyping && <TypingIndicator />}
            </div>
          )}
          <div ref={bottomRef} className="h-px" />
        </div>
      </main>

      <ChatInput value={draft} onChange={setDraft} onSend={send} disabled={isTyping} />
    </div>
  );
}
