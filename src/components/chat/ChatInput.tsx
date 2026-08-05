import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  onSend: (text: string) => void;
  disabled?: boolean;
  value: string;
  onChange: (v: string) => void;
}

export function ChatInput({ onSend, disabled, value, onChange }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }, [value]);

  const submit = () => {
    const text = value.trim();
    if (!text || disabled) return;
    onSend(text);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="sticky bottom-0 z-20 border-t border-border/70 bg-gradient-to-t from-background via-background to-background/70 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-3xl px-4 pb-4 pt-3 sm:px-6 sm:pb-6">
        <div
          className={cn(
            "flex items-end gap-2 rounded-3xl border bg-card p-2 pl-4 transition-all duration-200",
            focused
              ? "border-primary/40 shadow-lift"
              : "border-border shadow-soft hover:border-border/80",
          )}
        >
          <textarea
            ref={ref}
            rows={1}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Ask a question..."
            aria-label="Message"
            className="scrollbar-slim max-h-[200px] flex-1 resize-none bg-transparent py-2 text-[0.9rem] leading-relaxed text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            onClick={submit}
            disabled={disabled || !value.trim()}
            aria-label="Send message"
            className="mb-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-all duration-200 hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            <ArrowUp className="size-4.5" strokeWidth={2.4} />
          </button>
        </div>
        <p className="mt-2 text-center text-[0.7rem] text-muted-foreground">
          Press <kbd className="font-sans font-medium text-foreground/70">Enter</kbd> to
          send, <kbd className="font-sans font-medium text-foreground/70">Shift + Enter</kbd>{" "}
          for a new line. Demo interface — responses are simulated.
        </p>
      </div>
    </div>
  );
}
