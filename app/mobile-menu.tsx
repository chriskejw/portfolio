"use client";

import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-30 lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="grid h-7 w-7 place-items-center rounded-md border border-[var(--line)] bg-[var(--copy-button)] text-[var(--ink)] transition hover:border-[var(--accent)] hover:bg-[var(--copy-button-hover)] hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--chrome)] sm:h-8 sm:w-8"
      >
        <span className="relative h-3.5 w-4 sm:h-4 sm:w-5" aria-hidden="true">
          <span
            className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition sm:w-5 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[6px] h-0.5 w-4 rounded-full bg-current transition sm:top-[7px] sm:w-5 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-3 h-0.5 w-4 rounded-full bg-current transition sm:top-[14px] sm:w-5 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="absolute right-0 top-10 z-30 w-52 overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--card)] p-2 shadow-2xl shadow-black/20"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 text-sm font-bold text-[var(--ink)] transition hover:bg-[var(--copy-button-hover)] hover:text-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
