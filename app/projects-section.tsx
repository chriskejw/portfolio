"use client";

import { useMemo, useState } from "react";

type Project = {
  title: string;
  status: string;
  description: string;
  tech: string[];
  tag: string;
  tone: string;
  url: string | null;
  repoUrl: string | null;
  action: string;
};

const INITIAL_PROJECT_COUNT = 6;

function getProjectState(status: string) {
  const normalizedStatus = status.toLowerCase();

  if (normalizedStatus.includes("completed")) {
    return "completed";
  }

  return "planned";
}

function getCompactStatusLabel(status: string) {
  const normalizedStatus = status.toLowerCase();

  if (normalizedStatus.includes("completed")) {
    return "Completed";
  }

  if (normalizedStatus.includes("prototype")) {
    return "Prototype";
  }

  return "Planned";
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="m3.5 8.5 3 3 6-7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.96c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.83c0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const cardClass =
    "group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--card)] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15";
  const isCompleted = getProjectState(project.status) === "completed";

  return (
    <article className={cardClass}>
      <div
        className={`relative h-40 shrink-0 overflow-hidden bg-gradient-to-br ${project.tone}`}
      >
        <div className="absolute inset-5 rounded-lg border border-white/15 bg-black/10" />
        <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full border border-white/20 bg-white/10 transition duration-300 group-hover:scale-110" />
        <div className="absolute left-6 top-7 max-w-[10rem] break-words font-editorial text-2xl leading-6 text-white">
          {project.title}
        </div>
        <div className="absolute bottom-5 right-5 h-16 w-16 rounded-full border border-white/30 bg-white/10" />
        <div className="absolute bottom-9 right-9 h-8 w-8 rounded-full bg-[var(--accent)]/80" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-5 p-4">
        <div className="min-w-0">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-md border border-[var(--tag-line)] bg-[var(--tag-bg)] px-2 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--tag)]">
              {project.tag}
            </span>
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} GitHub repository`}
                title="View repository"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--line)] bg-[var(--copy-button)] text-[var(--ink)] transition hover:border-[var(--accent)] hover:bg-[var(--copy-button-hover)] hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--card)]"
              >
                <GitHubIcon />
              </a>
            ) : null}
          </div>
          <h3 className="mt-3 font-bold text-[var(--ink)]">{project.title}</h3>
          <p className="mt-1 break-words text-sm leading-5 text-[var(--muted)]">
            {project.description}
          </p>
        </div>
        <div className="flex min-w-0 flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={`${project.title}-${item}`}
              className="rounded-md bg-[var(--tech-chip)] px-2 py-1 text-xs font-medium text-[var(--ink)]"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex min-h-8 flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-3 text-sm font-bold">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex whitespace-nowrap text-[var(--accent)] transition hover:text-[var(--accent-strong)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--card)]"
            >
              {project.action}
              <span className="ml-2 text-base leading-none">-&gt;</span>
            </a>
          ) : (
            <span className="whitespace-nowrap text-[var(--status-soon)]">
              Coming soon
            </span>
          )}
          <span
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] ${
              isCompleted
                ? "border-[var(--status-complete-line)] bg-[var(--status-complete-bg)] text-[var(--status-complete)]"
                : "border-[var(--status-planned-line)] bg-[var(--status-planned-bg)] text-[var(--status-planned)]"
            }`}
          >
            {isCompleted ? (
              <CheckIcon />
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
            )}
            {getCompactStatusLabel(project.status)}
          </span>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);

  const filters = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.tag)))],
    [projects],
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.tag === activeFilter);
  }, [activeFilter, projects]);

  const visibleProjects = isExpanded
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_PROJECT_COUNT);
  const hasMoreProjects = filteredProjects.length > INITIAL_PROJECT_COUNT;

  function selectFilter(filter: string) {
    setActiveFilter(filter);
    setIsExpanded(false);
  }

  return (
    <section
      id="projects"
      className="border-b border-[var(--line)] px-5 py-12 sm:px-10 lg:px-24 lg:py-16"
    >
      <div className="mx-auto mb-7 flex max-w-[19rem] flex-col items-center gap-4 text-center sm:max-w-none sm:flex-row sm:items-end sm:justify-between sm:text-left">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="font-editorial text-3xl leading-none text-[var(--ink)] sm:text-4xl">
            Projects
          </h2>
          <span className="mt-2 block h-1 w-24 rounded-full bg-[var(--accent)]" />
        </div>
        {/* <a
          href="https://github.com/chriskejw"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--ink)] transition hover:text-[var(--accent)]"
        >
          View my GitHub
          <span className="ml-2 text-base leading-none">-&gt;</span>
        </a> */}
      </div>

      <div
        className="mx-auto mb-6 flex max-w-[19rem] flex-wrap justify-center gap-2 sm:max-w-none sm:justify-start"
        aria-label="Project filters"
      >
        {filters.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => selectFilter(filter)}
              className={`min-h-10 rounded-lg border px-4 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--surface)] ${
                isActive
                  ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                  : "border-[var(--line)] bg-[var(--card)] text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mobile-measure grid min-w-0 gap-5 sm:w-auto md:grid-cols-2 xl:grid-cols-4">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {hasMoreProjects ? (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded((current) => !current)}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--card)] px-5 text-sm font-bold text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]"
          >
            {isExpanded ? "Show less" : "Show more"}
            <span className="ml-2 text-base leading-none">
              {isExpanded ? "up" : "down"}
            </span>
          </button>
        </div>
      ) : null}
    </section>
  );
}
