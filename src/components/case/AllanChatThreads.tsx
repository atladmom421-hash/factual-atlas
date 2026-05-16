import { clsx } from "clsx";
import { FileText, MessageSquare } from "lucide-react";
import { chatThreads, type ChatMessage } from "@/data/chat-transcripts";
import { eventById } from "@/data";
import { useExhibit } from "@/components/case/ExhibitProvider";

export function AllanChatThreads() {
  const { open } = useExhibit();

  return (
    <section className="rounded-lg border border-border bg-card p-5 sm:p-7">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <MessageSquare className="size-3.5" />
        Chat transcripts — Allan Glover threads
      </div>
      <h2 className="mt-2 font-display text-2xl sm:text-3xl tracking-tight">
        Verbatim message blocks, attached to the timeline.
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-foreground/75">
        Each thread below is the literal message-by-message extraction from the
        Teams screenshot, tied to the corresponding protected-activity or
        management-acknowledgment event in the case timeline.
      </p>

      <div className="mt-6 space-y-8">
        {chatThreads.map((thread) => {
          const ev = eventById(thread.id);
          return (
            <article
              key={thread.id}
              className="rounded-md border border-border bg-background/60 p-4 sm:p-5"
            >
              <header className="flex flex-wrap items-start justify-between gap-3 border-b border-border pb-3">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {thread.dateLabel}
                  </div>
                  <h3 className="mt-1 font-display text-lg leading-snug">
                    {thread.title}
                  </h3>
                  <div className="mt-1 text-[11px] text-foreground/70">
                    Participants: {thread.participants.join(" · ")}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <button
                    onClick={() => open(thread.exhibitId)}
                    className="inline-flex items-center gap-1 rounded-sm bg-secondary px-2 py-1 text-[11px] hover:bg-secondary/70"
                  >
                    <FileText className="size-3" />
                    {thread.exhibitId}
                  </button>
                  {ev && (
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      → Event: {ev.id}
                    </div>
                  )}
                </div>
              </header>

              <div className="mt-3 grid gap-3 text-[13px] sm:grid-cols-2">
                <div className="rounded-sm bg-secondary/40 p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Context
                  </div>
                  <p className="mt-1 text-foreground/85">{thread.context}</p>
                </div>
                <div className="rounded-sm bg-secondary/40 p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Why it matters
                  </div>
                  <p className="mt-1 text-foreground/85">{thread.significance}</p>
                </div>
              </div>

              <ol className="mt-5 space-y-2">
                {thread.messages.map((m, i) => (
                  <Bubble key={i} m={m} />
                ))}
              </ol>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Bubble({ m }: { m: ChatMessage }) {
  const fromHarbin = m.role === "harbin";
  return (
    <li
      className={clsx(
        "flex",
        fromHarbin ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={clsx(
          "max-w-[85%] rounded-md px-3 py-2 ring-1",
          fromHarbin
            ? "bg-indigo-500/15 ring-indigo-500/30 text-foreground"
            : m.role === "allan"
              ? "bg-amber-500/10 ring-amber-500/25 text-foreground"
              : "bg-rose-500/10 ring-rose-500/25 text-foreground",
          m.emphasis && "ring-2 ring-red-500/60 shadow-[0_0_0_3px_rgba(244,63,94,0.08)]",
        )}
      >
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-foreground/70">
          <span className="font-medium">{m.speaker}</span>
          <span>·</span>
          <span>{m.timestamp}</span>
        </div>
        <div className="mt-1 whitespace-pre-wrap leading-relaxed">{m.text}</div>
        {m.attachment && (
          <div className="mt-2 rounded-sm border border-dashed border-border bg-background/50 px-2 py-1.5 text-[11px] text-foreground/70">
            {m.attachment}
          </div>
        )}
        {m.reaction && (
          <div className="mt-1 text-[11px]">{m.reaction}</div>
        )}
      </div>
    </li>
  );
}
