import { sourceGroups, sources } from "@/data/sources";

const phases = [
  {
    days: "Days 1–30",
    title: "Seed",
    output: "First community seeds",
    actions: [
      "Review existing UpScrolled adoption by country and language",
      "Identify where MENA retention already exists organically",
      "Select one larger market and one focused test market",
      "Contact the first 20 researched creators",
      "Recruit a small cohort across 2–3 verticals",
      "Launch 4 Scroll Packs",
      "Establish acquisition and retention baselines",
    ],
  },
  {
    days: "Days 31–60",
    title: "Build density",
    output: "Evidence of repeat participation",
    actions: [
      "Measure which creator audiences actually return",
      "Add 5–8 ecosystem/community nodes",
      "Run creator-led conversation experiments",
      "Compare music, football, culture and founder communities",
      "Test invitation loops",
      "Speak with activated creators about product friction",
      "Remove tactics that create reach without retention",
    ],
  },
  {
    days: "Days 61–90",
    title: "Double down",
    output: "Repeatable MENA community playbook",
    actions: [
      "Identify strongest market + vertical combinations",
      "Concentrate recruitment around winning clusters",
      "Pursue larger ecosystem relationships",
      "Develop a local community playbook",
      "Build the next creator list through referrals",
      "Document what can be repeated in the next market",
    ],
  },
];

const questions = [
  "Which MENA countries already show organic adoption?",
  "Which countries show retention, not just downloads?",
  "Which languages and content categories correlate with return?",
  "Which creators are users already following or searching for?",
  "Where are users inviting other users?",
  "Which communities already have enough density to become launch wedges?",
  "Which MENA users are already acting as community connectors?",
];

export function NinetyDays() {
  return (
    <section id="90-days" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="label-eyebrow text-primary">From idea to test</p>
        <h2 className="mt-5 max-w-3xl font-editorial text-[2rem] leading-[1.08] tracking-[-0.02em] sm:text-[3rem]">
          What I’d test in the first 90 days.
        </h2>

        <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-3">
          {phases.map((phase) => (
            <article key={phase.days} className="bg-background p-6 sm:p-7">
              <p className="label-eyebrow text-primary">{phase.days}</p>
              <h3 className="mt-3 font-editorial text-[1.65rem]">{phase.title}</h3>
              <ul className="mt-6 space-y-3 border-t border-border pt-5">
                {phase.actions.map((action) => (
                  <li key={action} className="flex gap-3 text-[13.5px] leading-relaxed text-foreground/75">
                    <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-border pt-5">
                <p className="label-eyebrow text-muted-foreground">Output</p>
                <p className="mt-2 text-[14px] font-medium">{phase.output}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Learnings() {
  return (
    <section id="learnings" className="border-b border-border bg-cream-deep">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="label-eyebrow text-primary">What I’d want to learn</p>
        <h2 className="mt-5 max-w-4xl font-editorial text-[2rem] leading-[1.08] tracking-[-0.02em] sm:text-[3rem]">
          The strongest signals are probably already inside UpScrolled.
        </h2>
        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
          I can research markets from the outside. What I can’t see is where UpScrolled already has community pull.
        </p>

        <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
          {questions.map((question, index) => (
            <div key={question} className="bg-background p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.14em] text-primary">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 font-editorial text-[1.15rem] leading-snug">{question}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-[14px] leading-relaxed text-foreground/75">
          The answers would determine which parts of this external thesis are worth testing and which should be discarded.
        </p>
      </div>
    </section>
  );
}

export function WhyBuilt() {
  return (
    <section id="why-built" className="border-b border-background/15 bg-ink text-background">
      <div className="mx-auto max-w-[900px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="label-eyebrow text-primary">Why I built this</p>
        <h2 className="mt-5 font-editorial text-[2.2rem] leading-[1.08] tracking-[-0.02em] sm:text-[3.2rem]">
          This one is personal.
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 text-[15px] leading-relaxed text-background/70 sm:text-[16px]">
          <p>
            I’m Palestinian/Jordanian. After years working with multinationals, I’ve become much more intentional about where I put my energy.
          </p>
          <p>
            UpScrolled stood out because the mission feels connected to something I genuinely care about: building technology that serves communities instead of asking communities to fit the interests of platforms.
          </p>
          <p>
            My background is in business development, partnerships and growth. I built this because I wanted to explore, practically, where those skills could be useful to what UpScrolled is building.
          </p>
        </div>
        <p className="mt-8 font-editorial text-[1.05rem] leading-relaxed text-background">
          — Adnan Aklouk<br />
          <span className="text-background/50">Dublin</span>
        </p>
      </div>
    </section>
  );
}

export function Sources() {
  return (
    <section id="sources" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="label-eyebrow text-primary">Sources & methodology</p>
        <h2 className="mt-5 max-w-3xl font-editorial text-[2rem] leading-[1.08] tracking-[-0.02em] sm:text-[3rem]">
          Public references behind the external thesis.
        </h2>
        <p className="mt-6 max-w-3xl text-[14px] leading-relaxed text-muted-foreground">
          This is an external strategic exploration built from public information. Public facts and strategic hypotheses are intentionally kept separate, and no creator or organisation is presented as an existing UpScrolled partner.
        </p>

        <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
          {sourceGroups.map((group) => (
            <details key={group} className="group bg-background p-6" open={group === "UpScrolled" || group === "Market Data"}>
              <summary className="cursor-pointer list-none font-editorial text-[1.25rem]">
                <span className="flex items-center justify-between gap-4">
                  {group}
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <ul className="mt-5 space-y-3 border-t border-border pt-5">
                {sources.filter((source) => source.group === group).map((source) => (
                  <li key={source.id} className="text-[13px] leading-relaxed text-muted-foreground">
                    {source.url ? (
                      <a href={source.url} target="_blank" rel="noreferrer" className="underline-offset-4 hover:text-foreground hover:underline">
                        {source.label} ↗
                      </a>
                    ) : (
                      source.label
                    )}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="bg-ink text-background">
      <div className="mx-auto max-w-[980px] px-5 py-20 text-center sm:px-8 sm:py-28">
        <p className="font-editorial text-[2.1rem] leading-[1.08] tracking-[-0.025em] sm:text-[3.4rem]">
          The opportunity isn’t simply to grow in MENA.
          <br className="hidden sm:block" /> It’s to build UpScrolled with the communities that already understand why it needs to exist.
        </p>
        <p className="mt-8 text-[15px] text-background/60">Would love to compare notes.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/adnan-aklouk"
            target="_blank"
            rel="noreferrer"
            className="bg-primary px-5 py-3 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Connect with Adnan
          </a>
          <a
            href="mailto:adnan_aklouk@hotmail.com"
            className="border border-background/25 px-5 py-3 text-[13px] font-medium text-background/80 transition-colors hover:border-background/60 hover:text-background"
          >
            Email Adnan
          </a>
        </div>
      </div>
    </section>
  );
}
