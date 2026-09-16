const funnel = [
  "Creator contacted",
  "Creator activated",
  "Creator publishes",
  "Audience arrives",
  "Audience follows",
  "Audience participates",
  "Audience returns",
  "Audience invites others",
];

const metrics = [
  "Creator response rate",
  "Creator activation rate",
  "First-post rate",
  "Pack follows",
  "Creator-attributed signups",
  "Conversations per active user",
  "7-day retention",
  "30-day retention",
  "Repeat participation",
  "Invites per retained user",
];

const experiments = [
  {
    title: "Creator-Led Scroll Pack",
    question: "Can one trusted creator accelerate discovery of 10 adjacent creators?",
    test: "Recruit one anchor creator and nine adjacent accounts around one topic.",
    measure: "Pack follows, creator-attributed joins, repeat visits and cross-following.",
  },
  {
    title: "Jordan Community Density Test",
    question: "Can a smaller market reach meaningful network density faster?",
    test: "Seed founders, students, creators and cultural voices into a concentrated Jordan community.",
    measure: "Connections per user, conversations, invitations and return.",
  },
  {
    title: "Music Community Test",
    question: "Can music turn UpScrolled into somewhere users return between releases and events?",
    test: "Seed artists, DJs, producers, music media and fans around Arab Independent Music.",
    measure: "Repeat participation and creator-to-creator interaction.",
    note: "Potential ecosystem: MDLBEAST / XP · SceneNoise · Anghami · Kord",
  },
  {
    title: "Football Conversation Test",
    question: "Can recurring sports moments create habitual conversation?",
    test: "Seed analysts and fan creators around MENA Football Voices.",
    measure: "Conversation depth, repeat participation across successive matches, follows and invites.",
    note: "Creator examples: Mohamad Adnan · Amr Nassouhy",
  },
];

export function Experiments() {
  return (
    <section id="experiments" className="border-b border-border bg-cream-deep">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="label-eyebrow text-primary">Growth experiments</p>
        <h2 className="mt-5 max-w-4xl font-editorial text-[2rem] leading-[1.08] tracking-[-0.02em] sm:text-[3rem]">
          Reach gets someone through the door. Return tells us whether we built anything.
        </h2>

        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-4">
          {funnel.map((step, index) => (
            <div key={step} className="bg-background p-5">
              <p className="text-[10px] uppercase tracking-[0.14em] text-primary">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-[14px] font-medium leading-snug">{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="label-eyebrow text-muted-foreground">Measure</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {metrics.map((metric) => (
              <span key={metric} className="border border-border bg-background px-3 py-2 text-[12px] text-muted-foreground">
                {metric}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[12px] text-muted-foreground">
            Targets should only be set after reviewing UpScrolled’s internal baselines.
          </p>
        </div>

        <div className="mt-16">
          <p className="label-eyebrow text-primary">What I’d actually test</p>
          <div className="mt-6 grid gap-px border border-border bg-border lg:grid-cols-2">
            {experiments.map((item, index) => (
              <article key={item.title} className="bg-background p-6 sm:p-7">
                <p className="text-[10px] uppercase tracking-[0.14em] text-primary">Experiment {index + 1}</p>
                <h3 className="mt-3 font-editorial text-[1.45rem]">{item.title}</h3>
                <dl className="mt-6 space-y-5 border-t border-border pt-5">
                  <div>
                    <dt className="label-eyebrow text-muted-foreground">Question</dt>
                    <dd className="mt-2 text-[14px] leading-relaxed text-foreground/80">{item.question}</dd>
                  </div>
                  <div>
                    <dt className="label-eyebrow text-muted-foreground">Test</dt>
                    <dd className="mt-2 text-[14px] leading-relaxed text-foreground/80">{item.test}</dd>
                  </div>
                  <div>
                    <dt className="label-eyebrow text-muted-foreground">Measure</dt>
                    <dd className="mt-2 text-[14px] leading-relaxed text-foreground/80">{item.measure}</dd>
                  </div>
                </dl>
                {item.note && <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground">{item.note}</p>}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
