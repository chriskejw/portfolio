"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";
const listeners = new Set<() => void>();

// Hydrates from the pre-paint script in layout.tsx.
let currentTheme: Theme = "dark";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getPreferredTheme(): Theme {
  const savedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return getSystemTheme();
}

function hasSavedTheme() {
  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  return savedTheme === "light" || savedTheme === "dark";
}

function applyTheme(theme: Theme) {
  // CSS variables read this attribute to switch palettes.
  document.documentElement.dataset.theme = theme;
}

function emitChange() {
  listeners.forEach((listener) => listener());
}

function setTheme(theme: Theme) {
  currentTheme = theme;
  applyTheme(theme);
  window.localStorage.setItem(STORAGE_KEY, theme);
  emitChange();
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  // Initialize from browser state after hydration without a useEffect state loop.
  const preferredTheme = getPreferredTheme();
  applyTheme(preferredTheme);

  if (currentTheme !== preferredTheme) {
    currentTheme = preferredTheme;
    window.setTimeout(listener, 0);
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
  const handleSystemThemeChange = () => {
    if (hasSavedTheme()) {
      return;
    }

    const systemTheme = getSystemTheme();
    currentTheme = systemTheme;
    applyTheme(systemTheme);
    emitChange();
  };

  mediaQuery.addEventListener("change", handleSystemThemeChange);

  return () => {
    listeners.delete(listener);
    mediaQuery.removeEventListener("change", handleSystemThemeChange);
  };
}

function getSnapshot() {
  return currentTheme;
}

function getServerSnapshot() {
  return "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const isLight = theme === "light";

  function toggleTheme() {
    setTheme(isLight ? "dark" : "light");
  }

  return (
    <button
      type="button"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={isLight}
      onClick={toggleTheme}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="group grid h-7 w-7 place-items-center rounded-md border border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_8px_18px_rgba(255,91,55,0.25)] transition hover:bg-[var(--accent-strong)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--chrome)] sm:h-8 sm:w-8"
    >
      {isLight ? (
        <svg
          aria-hidden="true"
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.9 4.9 1.4 1.4" />
          <path d="m17.7 17.7 1.4 1.4" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.3 17.7-1.4 1.4" />
          <path d="m19.1 4.9-1.4 1.4" />
        </svg>
      )}
    </button>
  );
}
