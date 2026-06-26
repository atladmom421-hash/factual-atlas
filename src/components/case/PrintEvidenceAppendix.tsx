import { exhibitById } from "@/data";

/** Resolve a possibly-relative filePath to an absolute URL so the browser
 *  print pipeline never tries to fetch it against an unexpected base. */
function resolveSrc(path: string): string {
  if (typeof window === "undefined") return path;
  try { return new URL(path, window.location.origin).href; } catch { return path; }
}

/** Print-only appendix that shows evidence photos & metadata for the given exhibit IDs.
 *  Hidden on screen; revealed by @media print rules in styles.css. */
export function PrintEvidenceAppendix({ exhibitIds, title = "Evidence Appendix" }: { exhibitIds: string[]; title?: string }) {
  const seen = new Set<string>();
  const items = exhibitIds
    .filter(id => { if (seen.has(id)) return false; seen.add(id); return true; })
    .map(id => exhibitById(id))
    .filter((x): x is NonNullable<ReturnType<typeof exhibitById>> => Boolean(x));

  if (items.length === 0) return null;


  return (
    <section className="mt-10 border-t-2 border-black pt-6">
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 12px" }}>{title}</h2>
      <p style={{ fontSize: 11, color: "#444", margin: "0 0 18px" }}>
        Evidentiary rebuttal. The full text of each transcript and the full screenshot of each document/chat record is reproduced below. No exhibit is referenced by file path alone — the raw content is included in this appendix.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18 }}>
        {items.map(ex => (
          <article key={ex.id} style={{ pageBreakInside: "avoid", border: "2px solid #000", padding: 0, background: "#fff" }}>
            {/* Large prominent EXHIBIT banner */}
            <div style={{ background: "#000", color: "#fff", padding: "12px 14px" }}>
              <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 1.5, fontFamily: "Arial, Helvetica, sans-serif", textTransform: "uppercase", lineHeight: 1.2 }}>
                EXHIBIT {ex.exhibitNumber} — {ex.fileName}
              </div>
              <div style={{ marginTop: 4, fontSize: 11, fontFamily: "Arial, Helvetica, sans-serif", textTransform: "uppercase", letterSpacing: 1, opacity: 0.85 }}>
                {ex.date}{ex.category ? ` · ${ex.category}` : ""}
              </div>
            </div>
            <div style={{ padding: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#000", marginBottom: 6 }}>{ex.fileName}</div>
              {ex.summary && (
                <p style={{ fontSize: 12, color: "#222", margin: "0 0 8px", lineHeight: 1.4 }}>{ex.summary}</p>
              )}
              {/* Always reproduce raw image content when an image path exists */}
              {ex.filePath && /\.(png|jpe?g|webp|gif)$/i.test(ex.filePath) && (
                <div>
                  <img src={resolveSrc(ex.filePath)} alt={ex.fileName} loading="eager" decoding="sync" style={{ display: "block", width: "100%", maxWidth: "100%", height: "auto", border: "1px solid #ddd", breakInside: "avoid", pageBreakInside: "avoid" }} />
                  {ex.extraImagePaths?.map((p, i) => (
                    <img key={p} src={resolveSrc(p)} alt={`${ex.fileName} — page ${i + 2}`} loading="eager" decoding="sync" style={{ display: "block", width: "100%", maxWidth: "100%", height: "auto", border: "1px solid #ddd", marginTop: 8, breakInside: "avoid", pageBreakInside: "avoid" }} />
                  ))}
                </div>
              )}

              {/* Always reproduce raw transcript text when present */}
              {ex.transcriptText && (
                <pre style={{ fontSize: 11, color: "#000", whiteSpace: "pre-wrap", fontFamily: "ui-sans-serif, system-ui", margin: "8px 0 0" }}>
                  {ex.transcriptText}
                </pre>
              )}
              {/* Fallback file reference only when neither image nor transcript is available */}
              {ex.filePath && !/\.(png|jpe?g|webp|gif)$/i.test(ex.filePath) && !ex.transcriptText && (
                <div style={{ fontSize: 11, color: "#555", fontFamily: "monospace" }}>
                  File: {ex.filePath}
                </div>
              )}

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
