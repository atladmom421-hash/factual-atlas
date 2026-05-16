import { useEffect } from "react";

/**
 * On mount and on hash changes, if location hash matches an element id,
 * scroll it into view and apply a brief highlight class.
 */
export function useHashFocus() {
  useEffect(() => {
    const focus = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      // Defer to next frame so freshly-mounted nodes exist
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("search-flash");
        window.setTimeout(() => el.classList.remove("search-flash"), 2200);
      });
    };
    focus();
    window.addEventListener("hashchange", focus);
    return () => window.removeEventListener("hashchange", focus);
  }, []);
}
