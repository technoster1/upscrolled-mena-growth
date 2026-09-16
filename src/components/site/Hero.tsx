const stats = [
  { value: "4", label: "Priority markets" },
  { value: "20", label: "Researched creator prospects" },
  { value: "15", label: "Ecosystem targets" },
  { value: "90", label: "Days to test the thesis" },
];

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-[1200px] px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <p className="label-eyebrow animate-rise text-primary">UpScrolled × MENA</p>

        <h1 className="animate-rise mt-6 max-w-4xl font-editorial text-[2.35rem] font-normal leading-[1.08] tracking-[-0.02em] sm:text-[3.6rem] lg:text-[4.3rem]">
          “The next wave of growth could already be here.”
        </h1>

        <p className="animate-rise mt-7 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-[17px]">
          UpScrolled has created something that naturally resonates with communities across MENA.
          The opportunity is to turn that affinity into deliberate growth by starting with trusted
          creators and the communities around them.
        </p>

        <div className="mt-14 border-t border-border">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`border-b border-border px-0 py-7 sm:py-9 lg:border-b-0 ${
                  i % 2 === 1 ? "pl-6" : "pr-6"
                } lg:pl-0 lg:pr-6 ${i > 0 ? "lg:border-l lg:border-border lg:pl-7" : ""}`}
              >
                <dt className="font-editorial text-[2.75rem] leading-none tracking-tight sm:text-[3.25rem]">
                  {stat.value}
                </dt>
                <dd className="mt-3 max-w-[12rem] text-[12px] uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
          <p className="border-t border-border py-4 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            External research set
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#markets"
            className="bg-primary px-5 py-3 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore the markets
          </a>
          <a
            href="#90-days"
            className="border border-foreground/25 px-5 py-3 text-[13px] font-medium transition-colors hover:border-foreground"
          >
            See the 90-day plan
          </a>
          <span className="text-[12px] text-muted-foreground">
            An external growth hypothesis by Adnan Aklouk
          </span>
        </div>
      </div>
    </section>
  );
}
