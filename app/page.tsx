import Image from "next/image";
import { CopyEmailButton } from "./copy-email-button";
import { MobileMenu } from "./mobile-menu";
import { ProjectsSection } from "./projects-section";
import { ThemeToggle } from "./theme-toggle";

const values = [
  {
    title: "Human first",
    description: "Risk decisions that protect people, not just processes.",
    icon: "people",
  },
  {
    title: "Clarity",
    description: "Clear reasoning, evidence, and actions that others can trust.",
    icon: "sun",
  },
  {
    title: "Craft",
    description: "Thoughtful systems that improve quality, consistency, and scale.",
    icon: "pen",
  },
  {
    title: "Curiosity",
    description: "Always learning, testing, and improving how risk is managed.",
    icon: "lens",
  },
];

const projects = [
  {
    title: "Speedie 2026",
    status: "Completed",
    description:
      "A browser game project published on GitHub Pages, built as a playful interactive web experience.",
    tech: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
    tag: "Game",
    tone: "from-[#13251f] via-[#1f6f5a] to-[#f5c85f]",
    url: "https://chriskejw.github.io/speedie-2026/",
    repoUrl: "https://github.com/chriskejw/speedie-2026",
    action: "View project",
  },
  {
    title: "CProReview",
    status: "Completed",
    description:
      "A tech review site for gadget reviews, buying guides, videos, curated recommendations, and newsletter signups.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "GitHub Pages"],
    tag: "Content Site",
    tone: "from-[#0f172a] via-[#2563eb] to-[#22c55e]",
    url: "https://cpro-review.com/",
    repoUrl: "https://github.com/chriskejw/cpro-review.com",
    action: "View project",
  },
  {
    title: "Risk Review Assistant",
    status: "Planned / Prototype",
    description:
      "An AI-assisted tool that helps review seller-risk notes, identify evidence gaps, and draft structured case summaries.",
    tech: ["Python", "OpenAI API", "Next.js"],
    tag: "Trust & Safety",
    tone: "from-[#151918] via-[#1f2b29] to-[#11100f]",
    url: null,
    repoUrl: null,
    action: "View project",
  },
  {
    title: "AI Case Summary Tool",
    status: "Planned / Prototype",
    description:
      "A tool that converts messy investigation notes into key facts, policy issues, risk signals, and recommended next actions.",
    tech: ["OpenAI API", "Python", "Streamlit or Next.js"],
    tag: "AI Ops",
    tone: "from-[#f8efe3] via-[#efd6bc] to-[#d9a67c]",
    url: null,
    repoUrl: null,
    action: "View project",
  },
  {
    title: "Raspberry Pi Dashboard",
    status: "Planned",
    description:
      "A local dashboard for monitoring sensor data, device status, and simple home automation experiments.",
    tech: ["Raspberry Pi", "Python", "Flask", "SQLite"],
    tag: "Systems",
    tone: "from-[#ffe0be] via-[#ffc08d] to-[#f36f4a]",
    url: null,
    repoUrl: null,
    action: "View project",
  },
];

const experience = [
  {
    years: "Foundation",
    role: "Financial Crime Compliance",
    company: "AML, KYC & Sanctions",
    description:
      "Built a grounding in financial crime controls, customer due diligence, sanctions screening, and risk-based review.",
  },
  {
    years: "Platform Risk",
    role: "Trust & Safety",
    company: "Meta",
    description:
      "Worked on compliance and platform-risk reviews supporting app developer ecosystem protection and user data privacy.",
  },
  {
    years: "Marketplace Risk",
    role: "Risk Manager",
    company: "Amazon",
    description:
      "Detecting and mitigating abuse, counterfeit, fraud, restricted products, and infringement risks across e-commerce marketplaces.",
  },
  {
    years: "Ongoing",
    role: "AI Builder",
    company: "Practical Tools",
    description: "Learning to build useful tools with AI.",
  },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function ValueIcon({ type }: { type: string }) {
  const base = "relative h-11 w-11 shrink-0 text-[var(--ink)]";

  if (type === "people") {
    return (
      <span className={base} aria-hidden="true">
        <span className="absolute left-2 top-2 h-3.5 w-3.5 rounded-full border border-current" />
        <span className="absolute right-2 top-2.5 h-3 w-3 rounded-full border border-current" />
        <span className="absolute bottom-2 left-1 h-4 w-5 rounded-t-full border border-current border-b-0" />
        <span className="absolute bottom-2 right-1 h-3.5 w-4 rounded-t-full border border-current border-b-0" />
        <span className="absolute bottom-2 left-5 h-2 w-2 rounded-full bg-[var(--accent)]" />
      </span>
    );
  }

  if (type === "sun") {
    return (
      <span className={base} aria-hidden="true">
        <span className="absolute left-3.5 top-3.5 h-4 w-4 rounded-full border border-current" />
        <span className="absolute left-5 top-0 h-2.5 w-px bg-current" />
        <span className="absolute bottom-0 left-5 h-2.5 w-px bg-current" />
        <span className="absolute left-0 top-5 h-px w-2.5 bg-current" />
        <span className="absolute right-0 top-5 h-px w-2.5 bg-current" />
        <span className="absolute bottom-2 right-2 h-2 w-2 rounded-full border border-[var(--accent)]" />
      </span>
    );
  }

  if (type === "pen") {
    return (
      <span className={base} aria-hidden="true">
        <span className="absolute left-4 top-1 h-8 w-3 rotate-45 rounded-sm border border-current" />
        <span className="absolute bottom-1 left-1 h-px w-8 rotate-[-14deg] bg-[var(--accent)]" />
      </span>
    );
  }

  return (
    <span className={base} aria-hidden="true">
      <span className="absolute left-2 top-2 h-6 w-6 rounded-full border border-current" />
      <span className="absolute bottom-2 right-2 h-px w-4 rotate-45 bg-current" />
      <span className="absolute left-4 top-1 h-2 w-2 rounded-full border border-[var(--accent)]" />
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page)] px-0 py-2.5 text-[var(--ink)] sm:px-5 sm:py-5">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,var(--glow),transparent_30%),linear-gradient(120deg,transparent,rgba(255,112,78,0.05),transparent)]" />

      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[1.1rem] border border-[var(--line)] bg-[var(--surface)] shadow-2xl shadow-black/20 sm:rounded-[1.6rem]">
        <div className="grid h-12 grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-[var(--line)] bg-[var(--chrome)] px-4 sm:gap-4 sm:px-6">
          <div className="flex shrink-0 items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="mx-auto hidden h-7 min-w-0 w-full max-w-xl items-center justify-center rounded-md border border-[var(--line)] bg-[var(--address)] px-3 text-xs font-medium text-[var(--muted)] sm:flex">
            chriske.com
          </div>
          <div className="flex w-auto shrink-0 items-center justify-end gap-1.5 sm:gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>

        <div className="paper-texture">
          <header className="relative z-20 flex items-center justify-between gap-4 px-5 py-5 sm:px-10 lg:px-14">
            <a
              href="#top"
              className="font-script min-w-0 whitespace-nowrap text-[clamp(1.4rem,6vw,2.25rem)] leading-none text-[var(--ink)] sm:text-4xl"
            >
              Hey there! I&apos;m Chris.
            </a>
            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-8 text-sm font-semibold text-[var(--ink)] lg:flex"
            >
              <a
                className="inline-flex min-h-11 shrink-0 items-center transition hover:text-[var(--accent)]"
                href="#about"
              >
                About
              </a>
              <a
                className="inline-flex min-h-11 shrink-0 items-center transition hover:text-[var(--accent)]"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="inline-flex min-h-11 shrink-0 items-center transition hover:text-[var(--accent)]"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="inline-flex min-h-11 shrink-0 items-center transition hover:text-[var(--accent)]"
                href="#contact"
              >
                Contact
              </a>
            </nav>
            {/* <a
              href="#contact"
              className="hidden h-11 items-center justify-center rounded-lg bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(255,91,55,0.24)] transition hover:bg-[var(--accent-strong)] sm:inline-flex"
            >
              Let&apos;s talk
            </a> */}
          </header>

          <section
            id="top"
            className="grid items-center gap-7 px-5 pb-8 pt-2 sm:gap-8 sm:px-10 sm:pb-9 sm:pt-6 md:grid-cols-[1fr_0.92fr] lg:px-24 lg:pb-6 lg:pt-10"
          >
            <div className="relative z-10 w-full min-w-0 text-center md:text-left">
              <h1 className="font-editorial mx-auto max-w-4xl text-[clamp(3rem,12vw,4.8rem)] font-semibold leading-[0.92] text-[var(--ink)] sm:text-[clamp(3.7rem,8vw,6.9rem)] sm:leading-[0.9] md:mx-0 md:leading-[0.86]">
                <span className="block md:inline">Reducing </span>
                <span className="block italic text-[var(--accent)] md:inline">
                  risk,
                </span>
                <span className="block">protecting</span>
                <span className="block italic text-[var(--accent)]">
                  trust.
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-[23rem] text-base leading-7 text-[var(--muted)] sm:mt-7 sm:max-w-xl sm:text-lg md:mx-0">
                I help companies protect customers and platforms by reducing risk, strengthening compliance, and building safer systems.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href="https://www.linkedin.com/in/chriskejw"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-auto inline-flex h-12 w-full max-w-[23rem] items-center justify-center rounded-lg bg-[var(--accent)] px-6 text-sm font-bold text-white shadow-[0_16px_36px_rgba(255,91,55,0.26)] transition hover:bg-[var(--accent-strong)] sm:w-auto sm:px-7 md:mx-0"
                >
                  View LinkedIn
                  <span className="ml-3 text-lg leading-none">-&gt;</span>
                </a>
                {/* <a
                  href="#contact"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-[var(--line)] px-4 text-sm font-semibold text-[var(--ink)] transition hover:text-[var(--accent)] sm:w-auto sm:border-x-0 sm:border-t-0 sm:px-1"
                >
                  Contact Chris
                </a> */}
              </div>
            </div>

            <div className="relative min-h-[330px] overflow-hidden sm:min-h-[460px] md:min-h-[560px]">
              <div className="absolute left-0 top-10 h-60 w-60 rounded-full bg-[var(--shape-one)] opacity-85 sm:h-96 sm:w-96" />
              <div className="absolute right-4 top-2 h-[20rem] w-[14rem] rounded-full bg-[var(--shape-two)] opacity-90 sm:right-6 sm:h-[32rem] sm:w-[25rem]" />
              <div className="absolute right-0 top-14 h-[22rem] w-[15rem] rounded-full border border-[var(--grid-line)] bg-[linear-gradient(90deg,var(--grid-line)_1px,transparent_1px),linear-gradient(var(--grid-line)_1px,transparent_1px)] bg-[size:18px_18px] opacity-60 sm:right-4 sm:h-[34rem] sm:w-[27rem]" />

              <div className="absolute left-1/2 top-5 h-[20rem] w-[14.5rem] -translate-x-1/2 rotate-1 overflow-hidden rounded-full border border-white/10 bg-black/10 shadow-2xl shadow-black/25 sm:top-8 sm:h-[31rem] sm:w-[23rem] md:left-[54%]">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={`${basePath}/profile.jpg`}
                    alt="Chris profile photo"
                    fill
                    sizes="(min-width: 768px) 23rem, 14.5rem"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* <div className="hero-note absolute bottom-6 left-3 rotate-[-8deg] font-script text-xl leading-tight sm:bottom-16 sm:left-0 sm:text-3xl">
                Thoughtful systems.
                <br />
                Trusted outcomes.
                <span className="mt-1 block h-1 w-24 rounded-full bg-[var(--accent)]" />
              </div> */}
              {/* <div className="stamp absolute bottom-14 right-0 hidden h-32 w-32 items-center justify-center rounded-full border-2 border-[var(--accent)] text-center text-[10px] font-black uppercase tracking-[0.24em] text-[var(--accent)] sm:flex">
                Building
                <br />
                Solutions
                <br />
                .........
              </div> */}
            </div>
          </section>

          <section
            id="about"
            className="grid justify-items-center border-y border-[var(--line)] px-5 sm:grid-cols-2 sm:justify-items-stretch sm:px-10 lg:grid-cols-4 lg:px-24"
          >
            {values.map((value) => (
              <article
                key={value.title}
                className="flex w-full max-w-[19rem] gap-5 border-b border-[var(--line)] py-6 sm:max-w-none sm:border-r sm:last:border-r-0 lg:border-b-0"
              >
                <ValueIcon type={value.icon} />
                <div>
                  <h2 className="font-bold text-[var(--ink)]">{value.title}</h2>
                  <p className="mt-1 max-w-44 text-sm leading-5 text-[var(--muted)]">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </section>

          <ProjectsSection projects={projects} />

          <section
            id="experience"
            className="grid justify-items-center gap-8 px-5 py-12 sm:justify-items-stretch sm:px-10 lg:grid-cols-[12rem_1fr] lg:gap-12 lg:px-24 lg:py-16"
          >
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <h2 className="font-editorial text-3xl leading-none text-[var(--ink)] sm:text-4xl">
                Experience
              </h2>
              <span className="mt-2 block h-1 w-24 rounded-full bg-[var(--accent)]" />
            </div>

            <div className="mobile-measure grid gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-10 xl:grid-cols-4">
              {experience.map((item) => (
                <article
                  key={`${item.years}-${item.role}`}
                  className="relative border-l border-[var(--line)] pb-2 pl-5 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pt-6"
                >
                  <span className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-[var(--accent)] md:-top-1.5 md:left-0" />
                  <p className="text-xs font-black uppercase tracking-[0.06em] text-[var(--accent)]">
                    {item.years}
                  </p>
                  <h3 className="mt-2 text-sm font-bold text-[var(--ink)]">
                    {item.role}
                  </h3>
                  <p className="text-sm text-[var(--ink)]">{item.company}</p>
                  <p className="mt-2 text-sm leading-5 text-[var(--muted)]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            {/* <div className="relative hidden min-h-44 lg:block">
              <div className="absolute bottom-2 left-2 h-28 w-36 border-b border-[var(--ink)]" />
              <div className="absolute bottom-10 left-3 h-px w-28 -rotate-45 bg-[var(--ink)]" />
              <div className="absolute bottom-10 left-20 h-px w-24 rotate-45 bg-[var(--ink)]" />
              <div className="absolute right-7 top-2 h-10 w-10 rounded-full border-4 border-[var(--accent)]" />
            </div> */}
          </section>

          <footer id="contact" className="px-5 pb-6 pt-4 sm:px-10 sm:pb-8 lg:px-14">
            <div className="mobile-measure grid gap-8 rounded-[1.2rem] border border-[var(--line)] bg-[var(--footer)] p-5 shadow-xl shadow-black/10 sm:rounded-[1.6rem] sm:p-7 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16 lg:p-10">
              {/* <div className="hidden min-h-28 md:block">
                <div className="relative h-full">
                  <span className="absolute left-8 top-6 h-px w-24 rotate-[-28deg] bg-[var(--ink)]" />
                  <span className="absolute left-24 top-3 h-px w-10 rotate-45 bg-[var(--ink)]" />
                  <span className="absolute left-20 top-12 h-20 w-24 rounded-full border-b-2 border-[var(--accent)]" />
                </div>
              </div> */}
              <div className="text-center md:pr-4 md:text-left">
                <h2 className="font-editorial text-[clamp(2.25rem,10vw,3.25rem)] leading-tight text-[var(--ink)]">
                  Interested in working together?
                  <br />
                  I&apos;d <span className="circled">love</span> to connect.
                </h2>
              </div>
              <div className="space-y-5 border-t border-[var(--line)] pt-6 text-center md:border-l md:border-t-0 md:pl-12 md:pt-0 md:text-left lg:pl-16">
                <p className="mx-auto max-w-sm text-sm leading-6 text-[var(--muted)] md:mx-0">
                  Whether you&apos;re exploring a role, a collaboration, or just
                  want to connect, I&apos;d be happy to hear from you.
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5 md:justify-start">
                  <a
                    href="mailto:chriskejw@gmail.com"
                    className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[var(--accent)] px-5 text-sm font-bold text-white transition hover:bg-[var(--accent-strong)] sm:w-auto"
                  >
                    Email me
                    <span className="ml-3">-&gt;</span>
                  </a>
                  <CopyEmailButton />
                </div>
                <div className="space-y-2 text-sm text-[var(--ink)]">
                  <p className="font-mono text-[13px] text-[var(--muted)]">
                    chriskejw@gmail.com
                  </p>
                  <p>Based in Singapore</p>
                  <p className="flex items-center justify-center gap-2 md:justify-start">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#65c987]" />
                    Available
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
