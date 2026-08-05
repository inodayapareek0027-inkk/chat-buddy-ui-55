import { memo, useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, Check, Copy, RefreshCw, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatTime, type ChatMessage } from "@/lib/demo-responses";

function Markdown({ children }: { children: string }) {
  return (
    <div className="text-[0.9rem] leading-relaxed [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p className="my-2.5">{children}</p>,
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          ul: ({ children }) => (
            <ul className="my-2.5 list-disc space-y-1.5 pl-5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-2.5 list-decimal space-y-1.5 pl-5">{children}</ol>
          ),
          li: ({ children }) => <li className="pl-0.5">{children}</li>,
          a: ({ children, href }) => (
            <a
              href={href}
              className="font-medium text-primary underline decoration-primary/35 underline-offset-2 transition-colors hover:decoration-primary"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-3 border-l-2 border-primary/40 bg-accent/50 py-1.5 pl-3 text-muted-foreground">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.8rem]">
              {children}
            </code>
          ),
          h1: ({ children }) => (
            <h3 className="mb-2 mt-4 text-base font-semibold">{children}</h3>
          ),
          h2: ({ children }) => (
            <h3 className="mb-2 mt-4 text-base font-semibold">{children}</h3>
          ),
          h3: ({ children }) => (
            <h4 className="mb-1.5 mt-3.5 text-sm font-semibold">{children}</h4>
          ),
          table: ({ children }) => (
            <div className="my-3 w-full overflow-x-auto rounded-xl border border-border scrollbar-slim">
              <table className="w-full border-collapse text-left text-[0.83rem]">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-muted/70">{children}</thead>,
          th: ({ children }) => (
            <th className="whitespace-nowrap px-3 py-2 font-semibold">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border-t border-border px-3 py-2 align-top text-muted-foreground">
              {children}
            </td>
          ),
          hr: () => <hr className="my-4 border-border" />,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}

function ActionButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      {children}
    </button>
  );
}

interface Props {
  message: ChatMessage;
  onRegenerate?: () => void;
}

export const MessageBubble = memo(function MessageBubble({
  message,
  onRegenerate,
}: Props) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";

  const copy = () => {
    void navigator.clipboard?.writeText(message.content);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div
      className={cn(
        "animate-msg-in group flex items-start gap-3",
        isUser && "flex-row-reverse",
      )}
    >
      <div
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-xl shadow-soft",
          isUser
            ? "bg-secondary text-secondary-foreground"
            : "border border-border bg-card text-primary",
        )}
      >
        {isUser ? <User className="size-4" /> : <Bot className="size-4" />}
      </div>

      <div className={cn("min-w-0 max-w-[min(88%,42rem)]", isUser && "items-end")}>
        <div
          className={cn(
            "overflow-hidden px-4 py-3 shadow-soft transition-shadow duration-200 group-hover:shadow-lift",
            isUser
              ? "rounded-2xl rounded-tr-md bg-bubble-user text-bubble-user-foreground"
              : "rounded-2xl rounded-tl-md border border-border bg-bubble-assistant text-bubble-assistant-foreground",
          )}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap text-[0.9rem] leading-relaxed">
              {message.content}
            </p>
          ) : (
            <Markdown>{message.content}</Markdown>
          )}
        </div>

        <div
          className={cn(
            "mt-1.5 flex items-center gap-1 px-1",
            isUser && "justify-end",
          )}
        >
          <span className="text-[0.7rem] tabular-nums text-muted-foreground">
            {formatTime(message.createdAt)}
          </span>
          <div className="flex items-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-within:opacity-100">
            <ActionButton label="Copy message" onClick={copy}>
              {copied ? (
                <Check className="size-3.5 text-online" />
              ) : (
                <Copy className="size-3.5" />
              )}
              {copied ? "Copied" : "Copy"}
            </ActionButton>
            {!isUser && onRegenerate && (
              <ActionButton label="Regenerate response" onClick={onRegenerate}>
                <RefreshCw className="size-3.5" />
                Regenerate
              </ActionButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
