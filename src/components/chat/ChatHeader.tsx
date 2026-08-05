import { Bot } from "lucide-react";

export function ChatHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-3xl items-center gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
          <Bot className="size-5" strokeWidth={2.2} />
        </div>
        <div className="min-w-0">
          <h1 className="truncate text-[0.975rem] font-semibold leading-tight tracking-tight sm:text-base">
            AI Customer Support
          </h1>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-online opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-online" />
            </span>
            <span className="font-medium text-online">Online</span>
            <span className="text-border">·</span>
            <span>Replies in seconds</span>
          </p>
        </div>
      </div>
    </header>
  );
}
