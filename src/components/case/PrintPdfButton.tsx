import { Printer } from "lucide-react";

export function PrintPdfButton({ label = "Download PDF", title }: { label?: string; title?: string }) {
  return (
    <button
      onClick={() => {
        const prev = document.title;
        if (title) document.title = title;
        window.print();
        // restore after print dialog
        setTimeout(() => { document.title = prev; }, 1000);
      }}
      className="no-print inline-flex items-center gap-2 rounded-md border-2 border-border bg-card px-3 py-1.5 text-xs font-medium hover:bg-secondary"
      title="Opens your browser's print dialog. Choose 'Save as PDF' to download."
    >
      <Printer className="size-3.5" />
      {label}
    </button>
  );
}
