import { Bot } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="animate-msg-in flex items-start gap-3">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-soft">
        <Bot className="size-4" />
      </div>
      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md border border-border bg-bubble-assistant px-4 py-3 shadow-soft">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="animate-dot size-1.5 rounded-full bg-primary"
            style={{ animationDelay: `${i * 160}ms` }}
          />
        ))}
        <span className="ml-1.5 text-xs text-muted-foreground">Typing…</span>
      </div>
    </div>
  );
}
