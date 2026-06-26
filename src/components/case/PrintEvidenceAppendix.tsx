import { exhibitById } from "@/data";
import { SCHEDULE_SHOTS } from "@/components/case/ScheduleSourceGallery";

const RENDERED_PAGE_COUNTS: Record<string, number> = {
  "EX-001-COD": 9,
  "EX-002-record-deletion-oct-2025": 11,
  "EX-003-hardship-timeline": 20,
  "EX-004-race-comments-jul-2025": 5,
  "EX-005-hbcu-aug-2025": 3,
  "EX-006-verint-monitoring": 7,
  "EX-007-leave-misclassification": 28,
  "EX-008-temp-vs-perm": 3,
  "EX-009-april-2026-return": 16,
  "EX-014-may29-2024-email": 2,
  "EX-015-may31-2024-hr-transcript": 20,
  "EX-016-june5-2024-followup": 7,
  "EX-017-july19-2024-complaint": 12,
  "EX-018-july19-2024-followup": 6,
  "EX-021-hardship-financial-crisis-timeline": 20,
  "EX-022-schedule-movement-comparator-evidence": 18,
  "EX-048-midshift-waitlist-version-history-narrative": 31,
};

/** Resolve a possibly-relative filePath to an absolute URL so the browser
 *  print pipeline never tries to fetch it against an unexpected base. */
function resolveSrc(path: string): string {
  if (typeof window === "undefined") return path;
  try { return new URL(path, window.location.origin).href; } catch { return path; }
}

function renderedPagesFor(path?: string): string[] {
  if (!path) return [];
  const fileName = path.split("/").pop() ?? "";
  const stem = fileName.replace(/\.(pdf|docx)$/i, "");
  const count = RENDERED_PAGE_COUNTS[stem];
  if (!count) return [];
  const pad = count >= 10 ? 2 : 1;
  return Array.from({ length: count }, (_, index) => {
    const page = String(index + 1).padStart(pad, "0");
    return `/exhibits/rendered-pages/${stem}-${page}.jpg`;
  });
}

function isImagePath(path?: string): path is string {
  return Boolean(path && /\.(png|jpe?g|webp|gif)$/i.test(path));
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
        {items.map(ex => {
          const renderedPages = renderedPagesFor(ex.filePath);
          return (
          <article key={ex.id} className="evidence-appendix-item" style={{ pageBreakInside: "auto", breakInside: "auto", border: "2px solid #000", padding: 0, background: "#fff" }}>
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
              {isImagePath(ex.filePath) && (
                <div>
                  <img src={resolveSrc(ex.filePath)} alt={ex.fileName} loading="eager" decoding="sync" style={{ display: "block", width: "100%", maxWidth: "100%", height: "auto", border: "1px solid #ddd", breakInside: "avoid", pageBreakInside: "avoid" }} />
                  {ex.extraImagePaths?.map((p, i) => (
                    <img key={p} src={resolveSrc(p)} alt={`${ex.fileName} — page ${i + 2}`} loading="eager" decoding="sync" style={{ display: "block", width: "100%", maxWidth: "100%", height: "auto", border: "1px solid #ddd", marginTop: 8, breakInside: "avoid", pageBreakInside: "avoid" }} />
                  ))}
                </div>
              )}

              {/* Render PDF/DOCX exhibits as actual page images so the formal response PDF contains the raw document pages, not a file-path placeholder. */}
              {renderedPages.length > 0 && (
                <div className="rendered-document-pages" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
                  {renderedPages.map((p, i) => (
                    <figure key={p} className="rendered-document-page" style={{ margin: 0, breakInside: "avoid", pageBreakInside: "avoid" }}>
                      <img
                        src={resolveSrc(p)}
                        alt={`${ex.fileName} — page ${i + 1}`}
                        loading="eager"
                        decoding="sync"
                        style={{ display: "block", width: "100%", maxWidth: "100%", height: "auto", border: "1px solid #ddd" }}
                      />
                      <figcaption style={{ marginTop: 4, fontSize: 9, color: "#444" }}>
                        {ex.exhibitNumber} · raw document page {i + 1} of {renderedPages.length}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {ex.id === "EX-022" && (
                <section className="schedule-source-appendix" style={{ marginTop: 16, borderTop: "1px solid #999", paddingTop: 12 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 800, margin: "0 0 6px" }}>
                    Raw Schedule Workbook Screenshots Submitted for EX-022
                  </h3>
                  <p style={{ fontSize: 10.5, color: "#333", margin: "0 0 10px", lineHeight: 1.35 }}>
                    These are the original schedule images submitted for the schedule-movement evidence. They are reproduced here so the Formal Response PDF contains the actual schedule pictures, not only the summarized schedule table.
                  </p>
                  <div className="print-schedule-evidence-grid">
                    {SCHEDULE_SHOTS.map((shot) => (
                      <figure key={shot.file} className="print-schedule-evidence-shot">
                        <img
                          src={resolveSrc(`/exhibits/schedule-screenshots/${shot.file}`)}
                          alt={`Schedule workbook ${shot.file} (${shot.month})`}
                          loading="eager"
                          decoding="sync"
                        />
                        <figcaption>
                          <strong>{shot.file}</strong> · {shot.month}{shot.verified ? " · month verified" : " · workbook capture"}
                          {shot.note ? ` · ${shot.note}` : ""}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              )}

              {/* Always reproduce raw transcript text when present */}
              {ex.transcriptText && (
                <pre style={{ fontSize: 11, color: "#000", whiteSpace: "pre-wrap", fontFamily: "ui-sans-serif, system-ui", margin: "8px 0 0" }}>
                  {ex.transcriptText}
                </pre>
              )}
              {/* Fallback file reference only when neither image nor transcript is available */}
              {ex.filePath && !isImagePath(ex.filePath) && renderedPages.length === 0 && !ex.transcriptText && (
                <div style={{ fontSize: 11, color: "#555", fontFamily: "monospace" }}>
                  File: {ex.filePath}
                </div>
              )}

            </div>
          </article>
        );})}
      </div>
    </section>
  );
}
