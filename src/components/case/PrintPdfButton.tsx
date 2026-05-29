import { useState } from "react";
import { Loader2, Printer } from "lucide-react";

const IMAGE_PRELOAD_TIMEOUT_MS = 12000;

async function preloadPrintableImages() {
  const imageUrls = Array.from(document.querySelectorAll<HTMLImageElement>("img"))
    .map((img) => img.currentSrc || img.src || img.getAttribute("src") || "")
    .filter(Boolean)
    .map((src) => new URL(src, window.location.href).href);

  const uniqueUrls = Array.from(new Set(imageUrls));

  await Promise.all(uniqueUrls.map((src) => new Promise<void>((resolve) => {
    const image = new Image();
    const timeout = window.setTimeout(resolve, IMAGE_PRELOAD_TIMEOUT_MS);

    image.onload = () => { window.clearTimeout(timeout); resolve(); };
    image.onerror = () => { window.clearTimeout(timeout); resolve(); };
    image.decoding = "sync";
    image.src = src;

    if (image.complete) {
      window.clearTimeout(timeout);
      resolve();
    }
  })));

  if (document.fonts?.ready) await document.fonts.ready;
}

export function PrintPdfButton({ label = "Download PDF", title }: { label?: string; title?: string }) {
  const [isPreparing, setIsPreparing] = useState(false);

  return (
    <button
      onClick={async () => {
        setIsPreparing(true);
        const prev = document.title;
        try {
          if (title) document.title = title;
          await preloadPrintableImages();
          await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
          window.print();
        } finally {
          setTimeout(() => { document.title = prev; setIsPreparing(false); }, 1000);
        }
      }}
      disabled={isPreparing}
      className="no-print inline-flex items-center gap-2 rounded-md border-2 border-border bg-card px-3 py-1.5 text-xs font-medium hover:bg-secondary"
      title="Opens your browser's print dialog. Choose 'Save as PDF' to download."
    >
      {isPreparing ? <Loader2 className="size-3.5 animate-spin" /> : <Printer className="size-3.5" />}
      {isPreparing ? "Preparing evidence images…" : label}
    </button>
  );
}
