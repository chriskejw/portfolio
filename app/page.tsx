const values = [
  {
    title: "Human first",
    description: "Risk judgment that respects people and context.",
    icon: "people",
  },
  {
    title: "Clarity",
    description: "Simple, intuitive systems that are easy to explain.",
    icon: "sun",
  },
  {
    title: "Craft",
    description: "Thoughtful details that raise quality and trust.",
    icon: "pen",
  },
  {
    title: "Curiosity",
    description: "Always learning, testing, and improving.",
    icon: "lens",
  },
];

const projects = [
  {
    title: "Risk Review Assistant",
    description: "Decision support for consistent policy review.",
    tag: "Trust & Safety",
    tone: "from-[#151918] via-[#1f2b29] to-[#11100f]",
  },
  {
    title: "AI Case Summary Tool",
    description: "Case notes turned into summaries and escalation context.",
    tag: "AI Ops",
    tone: "from-[#f8efe3] via-[#efd6bc] to-[#d9a67c]",
  },
  {
    title: "Raspberry Pi Dashboard",
    description: "A compact dashboard for signals and experiments.",
    tag: "Systems",
    tone: "from-[#ffe0be] via-[#ffc08d] to-[#f36f4a]",
  },
  {
    title: "Personal Portfolio Website",
    description: "A static portfolio built for GitHub Pages.",
    tag: "Frontend",
    tone: "from-[#2b241f] via-[#6b523f] to-[#d8b58f]",
  },
];

const experience = [
  {
    years: "2023 - Present",
    role: "Risk Manager",
    company: "Trust & Safety / Compliance",
    description:
      "Leading review quality, policy interpretation, escalation handling, and operational risk decisions.",
  },
  {
    years: "2021 - 2023",
    role: "Operations Specialist",
    company: "Risk Workflows",
    description:
      "Improved review paths, documentation, and repeatable processes for ambiguous cases.",
  },
  {
    years: "Building",
    role: "AI Builder",
    company: "Internal Tools",
    description:
      "Designing practical AI assistants for summarization, classification, and structured review.",
  },
  {
    years: "Ongoing",
    role: "Systems Thinker",
    company: "Personal Projects",
    description:
      "Experimenting with dashboards, automations, and clean interfaces for daily decision-making.",
  },
];

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
    <main className="min-h-screen bg-[var(--page)] px-3 py-3 text-[var(--ink)] sm:px-5 sm:py-5">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,var(--glow),transparent_30%),linear-gradient(120deg,transparent,rgba(255,112,78,0.05),transparent)]" />

      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] shadow-2xl shadow-black/20">
        <div className="flex h-12 items-center justify-between border-b border-[var(--line)] bg-[var(--chrome)] px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="hidden h-7 w-full max-w-xl items-center justify-center rounded-md border border-[var(--line)] bg-[var(--address)] text-xs font-medium text-[var(--muted)] sm:flex">
            chrisdesigned.com
          </div>
          <div className="h-7 w-7 rounded-md border border-[var(--line)] bg-[var(--address)]" />
        </div>

        <div className="paper-texture">
          <header className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
            <a
              href="#top"
              className="font-script text-4xl leading-none text-[var(--ink)]"
            >
              Chris.
            </a>
            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-8 text-sm font-medium text-[var(--ink)] lg:flex"
            >
              <a className="nav-active" href="#top">
                Home
              </a>
              <a className="transition hover:text-[var(--accent)]" href="#about">
                About
              </a>
              <a
                className="transition hover:text-[var(--accent)]"
                href="#projects"
              >
                Work
              </a>
              <a
                className="transition hover:text-[var(--accent)]"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="transition hover:text-[var(--accent)]"
                href="#contact"
              >
                Contact
              </a>
            </nav>
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(255,91,55,0.24)] transition hover:bg-[var(--accent-strong)]"
            >
              Let&apos;s talk
            </a>
          </header>

          <section
            id="top"
            className="grid items-center gap-8 px-6 pb-10 pt-8 sm:px-10 md:grid-cols-[1fr_0.92fr] lg:px-24 lg:pb-6 lg:pt-10"
          >
            <div className="relative z-10">
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--accent)]">
                Hey, I&apos;m Chris
              </p>
              <h1 className="font-editorial max-w-4xl text-[clamp(3.4rem,9vw,6.9rem)] font-semibold leading-[0.86] tracking-[-0.02em] text-[var(--ink)]">
                Building thoughtful{" "}
                <span className="italic text-[var(--accent)]">risk</span>{" "}
                systems.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                Risk Manager working across Trust & Safety, Compliance, and AI
                tooling. I build clean, human-centered workflows for complex
                decisions.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-[var(--accent)] px-7 text-sm font-bold text-white shadow-[0_16px_36px_rgba(255,91,55,0.26)] transition hover:bg-[var(--accent-strong)]"
                >
                  View my work
                  <span className="ml-3 text-lg leading-none">-&gt;</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center border-b border-[var(--accent)] px-1 text-sm font-semibold text-[var(--ink)] transition hover:text-[var(--accent)]"
                >
                  Contact Chris
                </a>
              </div>
            </div>

            <div className="relative min-h-[420px] md:min-h-[560px]">
              <div className="absolute left-0 top-12 h-72 w-72 rounded-full bg-[var(--shape-one)] opacity-85 sm:h-96 sm:w-96" />
              <div className="absolute right-6 top-3 h-[25rem] w-[18rem] rounded-full bg-[var(--shape-two)] opacity-90 sm:h-[32rem] sm:w-[25rem]" />
              <div className="absolute right-4 top-16 h-[28rem] w-[20rem] rounded-full border border-[var(--grid-line)] bg-[linear-gradient(90deg,var(--grid-line)_1px,transparent_1px),linear-gradient(var(--grid-line)_1px,transparent_1px)] bg-[size:18px_18px] opacity-60 sm:h-[34rem] sm:w-[27rem]" />

              <div className="portrait-card absolute left-1/2 top-8 h-[25rem] w-[18rem] -translate-x-1/2 rotate-1 overflow-hidden bg-[var(--portrait-edge)] p-3 shadow-2xl shadow-black/25 sm:h-[31rem] sm:w-[23rem] md:left-[54%]">
                <div className="relative h-full overflow-hidden bg-[linear-gradient(180deg,#cf8f67,#f4c6a0_38%,#171311_39%,#0f0e0d)]">
                  <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-[#f3c09b]" />
                  <div className="absolute left-1/2 top-[8.7rem] h-36 w-48 -translate-x-1/2 rounded-t-[4rem] bg-[#181412]" />
                  <div className="absolute left-1/2 top-20 h-24 w-24 -translate-x-1/2 rounded-[46%] bg-[#f0b98f]" />
                  <div className="absolute left-1/2 top-16 h-12 w-32 -translate-x-1/2 rounded-t-full bg-[#6b3e25]" />
                  <div className="absolute left-[45%] top-[7.15rem] h-2 w-2 rounded-full bg-[#21150f]" />
                  <div className="absolute right-[35%] top-[7.15rem] h-2 w-2 rounded-full bg-[#21150f]" />
                  <div className="absolute left-1/2 top-[9.2rem] h-px w-11 -translate-x-1/2 bg-[#9b6548]" />
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.42))]" />
                </div>
              </div>

              <div className="absolute bottom-16 left-4 rotate-[-8deg] font-script text-2xl leading-tight text-[var(--ink)] sm:left-0 sm:text-3xl">
                Crafted with
                <br />
                clarity and care.
                <span className="mt-1 block h-1 w-24 rounded-full bg-[var(--accent)]" />
              </div>
              <div className="stamp absolute bottom-14 right-0 hidden h-32 w-32 items-center justify-center rounded-full border-2 border-[var(--accent)] text-center text-[10px] font-black uppercase tracking-[0.24em] text-[var(--accent)] sm:flex">
                Crafting
                <br />
                solutions
              </div>
            </div>
          </section>

          <section
            id="about"
            className="grid border-y border-[var(--line)] px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-24"
          >
            {values.map((value) => (
              <article
                key={value.title}
                className="flex gap-5 border-b border-[var(--line)] py-6 sm:border-r sm:last:border-r-0 lg:border-b-0"
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

          <section id="projects" className="px-6 py-8 sm:px-10 lg:px-24">
            <div className="mb-5 flex items-end justify-between gap-6">
              <h2 className="font-editorial text-3xl leading-none text-[var(--ink)] sm:text-4xl">
                Selected Work
              </h2>
              <a
                href="#contact"
                className="hidden text-sm font-semibold text-[var(--ink)] transition hover:text-[var(--accent)] sm:block"
              >
                View all projects -&gt;
              </a>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--card)] shadow-sm"
                >
                  <div
                    className={`relative h-40 bg-gradient-to-br ${project.tone}`}
                  >
                    <div className="absolute inset-5 rounded-lg border border-white/12 bg-black/10" />
                    <div className="absolute left-6 top-7 max-w-[10rem] font-editorial text-2xl leading-6 text-white">
                      {project.title}
                    </div>
                    <div className="absolute bottom-5 right-5 h-16 w-16 rounded-full border border-white/30 bg-white/10" />
                    <div className="absolute bottom-9 right-9 h-8 w-8 rounded-full bg-[var(--accent)]/80" />
                  </div>
                  <div className="flex items-end justify-between gap-4 p-4">
                    <div>
                      <span className="rounded-md border border-[var(--tag-line)] bg-[var(--tag-bg)] px-2 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--tag)]">
                        {project.tag}
                      </span>
                      <h3 className="mt-3 font-bold text-[var(--ink)]">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {project.description}
                      </p>
                    </div>
                    <span className="text-xl text-[var(--ink)]">-&gt;</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="experience"
            className="grid gap-6 px-6 py-8 sm:px-10 lg:grid-cols-[10rem_1fr_14rem] lg:px-24"
          >
            <div>
              <h2 className="font-editorial text-3xl leading-none text-[var(--ink)] sm:text-4xl">
                Experience
              </h2>
              <span className="mt-2 block h-1 w-24 rounded-full bg-[var(--accent)]" />
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {experience.map((item) => (
                <article
                  key={`${item.years}-${item.role}`}
                  className="relative border-l border-[var(--line)] pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-5"
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

            <div className="relative hidden min-h-44 lg:block">
              <div className="absolute bottom-2 left-2 h-28 w-36 border-b border-[var(--ink)]" />
              <div className="absolute bottom-10 left-3 h-px w-28 -rotate-45 bg-[var(--ink)]" />
              <div className="absolute bottom-10 left-20 h-px w-24 rotate-45 bg-[var(--ink)]" />
              <div className="absolute right-7 top-2 h-10 w-10 rounded-full border-4 border-[var(--accent)]" />
            </div>
          </section>

          <footer id="contact" className="px-6 pb-8 pt-4 sm:px-10 lg:px-14">
            <div className="grid gap-8 rounded-[1.6rem] border border-[var(--line)] bg-[var(--footer)] p-7 shadow-xl shadow-black/10 md:grid-cols-[1fr_0.8fr_0.8fr] md:items-center lg:p-10">
              <div className="hidden min-h-28 md:block">
                <div className="relative h-full">
                  <span className="absolute left-8 top-6 h-px w-24 rotate-[-28deg] bg-[var(--ink)]" />
                  <span className="absolute left-24 top-3 h-px w-10 rotate-45 bg-[var(--ink)]" />
                  <span className="absolute left-20 top-12 h-20 w-24 rounded-full border-b-2 border-[var(--accent)]" />
                </div>
              </div>
              <div>
                <h2 className="font-editorial text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
                  Have a project in mind?
                  <br />
                  I&apos;d <span className="circled">love</span> to hear about
                  it.
                </h2>
              </div>
              <div className="space-y-5 border-[var(--line)] md:border-l md:pl-9">
                <p className="max-w-xs text-sm leading-6 text-[var(--muted)]">
                  Whether you have a question or just want to say hi, I&apos;ll
                  get back to you.
                </p>
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-[var(--accent)] px-5 text-sm font-bold text-white transition hover:bg-[var(--accent-strong)]"
                >
                  Let&apos;s talk
                  <span className="ml-3">-&gt;</span>
                </a>
                <div className="space-y-2 text-sm text-[var(--ink)]">
                  <p>hello@example.com</p>
                  <p>Based in Singapore</p>
                  <p className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#65c987]" />
                    Available for selected projects
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
