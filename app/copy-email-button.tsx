"use client";

import { useState } from "react";

const EMAIL_ADDRESS = "chriskejw@gmail.com";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-live="polite"
      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--copy-button)] px-5 text-sm font-bold text-[var(--ink)] transition hover:border-[var(--accent)] hover:bg-[var(--copy-button-hover)] hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--footer)] sm:w-auto"
    >
      {copied ? "Email copied" : "Copy email"}
      {!copied ? <span className="text-[var(--accent)]">-&gt;</span> : null}
    </button>
  );
}
