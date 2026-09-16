import { Flywheel } from "./Flywheel";

const stages = [
  { n: "01", title: "Creators", body: "Bring trusted voices onto the platform." },
  {
    n: "02",
    title: "Communities",
    body: "Build conversation around shared interests and identities.",
  },
  {
    n: "03",
    title: "Ecosystems",
    body: "Use existing networks to accelerate discovery and distribution.",
  },
];

export function Thesis() {
  return (
    <section className="bg-ink text-background">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 sm:py-28">
        <p className="label-eyebrow text-primary">The thesis</p>
        <h2 className="mt-6 max-w-3xl font-editorial text-[2rem] leading-[1.12] tracking-[-0.02em] sm:text-[3rem]">
          “Don’t launch into MENA. Build with MENA.”
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-background/60 sm:text-[17px]">
          The opportunity isn’t simply to acquire MENA users. It’s to create pockets of community
          density around people and interests users already care about, then give those communities
          a reason to return.
        </p>

        <div className="mt-14 grid gap-px border border-ink-border bg-ink-border sm:grid-cols-3">
          {stages.map((stage) => (
            <article key={stage.n} className="bg-ink-soft p-7">
              <span className="font-editorial text-[13px] text-primary">{stage.n}</span>
              <h3 className="mt-4 font-editorial text-2xl">{stage.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-background/55">{stage.body}</p>
            </article>
          ))}
        </div>

        <Flywheel />
      </div>
    </section>
  );
}
