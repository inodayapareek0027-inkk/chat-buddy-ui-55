import { Sparkle } from "lucide-react";
import { SUGGESTIONS } from "@/lib/demo-responses";

export function SuggestionChips({ onSelect }: { onSelect: (text: string) => void }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {SUGGESTIONS.map((s, i) => (
        <button
          key={s}
          type="button"
          onClick={() => onSelect(s)}
          style={{ animationDelay: `${80 + i * 45}ms` }}
          className="animate-msg-in group inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-[0.8rem] font-medium text-foreground/85 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-accent hover:text-accent-foreground hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <Sparkle className="size-3.5 text-primary/70 transition-transform duration-200 group-hover:rotate-90" />
          {s}
        </button>
      ))}
    </div>
  );
}
