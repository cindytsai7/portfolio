"use client";

import { useEffect } from "react";

/**
 * Suppresses the browser context menu (right-click / long-press) site-wide.
 *
 * NOTE: this only deters casual right-clicking — it does NOT protect source.
 * DevTools still open via keyboard shortcuts and the browser menu, and all
 * front-end code is delivered to the client regardless.
 */
export default function DisableContextMenu() {
  useEffect(() => {
    const handler = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handler);
    return () => document.removeEventListener("contextmenu", handler);
  }, []);

  return null;
}
