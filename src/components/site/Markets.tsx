import { useState } from "react";

import { comparisonMatrix, markets, marketsMethodologyNote } from "@/data/markets";

export function Markets() {
  const [activeId, setActiveId] = useState(markets[0].id);
  const market = markets.find((m) => m.id === activeId) ?? markets[0];

  return (
    <section id="markets" className="border-b border-border">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="label-eyebrow text-primary">Where to start</p>
        <h2 className="mt-5 max-w-3xl font-editorial text-[2rem] leading-[1.1] tracking-[-0.02em] sm:text-[3rem]">
          “Four markets. Four different jobs.”
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
          These markets are starting hypotheses, not a final ranking. UpScrolled’s internal adoption
          and retention data should ultimately determine where to focus.
        </p>

        {/* Selector */}
        <div
          role="tablist"
          aria-label="Priority markets"
          className="mt-12 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4"
        >
          {markets.map((m) => {
            const isActive = m.id === market.id;
            return (
              <button
                key={m.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActiveId(m.id)}
                className={`group relative px-4 py-5 text-left transition-colors sm:px-5 ${
                  isActive ? "bg-foreground text-background" : "bg-background hover:bg-cream-deep"
                }`}
              >
                <span className="block font-editorial text-[17px] leading-tight sm:text-[19px]">
                  {m.name}
                </span>
                <span
                  className={`mt-2 block text-[10px] uppercase tracking-[0.14em] ${
                    isActive ? "text-background/55" : "text-muted-foreground"
                  }`}
                >
                  {m.role}
                </span>
                <span
                  className={`absolute inset-x-0 bottom-0 h-[3px] transition-opacity ${
                    isActive ? "bg-primary opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Detail */}
        <div key={market.id} className="animate-rise mt-px border border-border border-t-0">
          <div className="grid gap-px bg-border sm:grid-cols-3">
            <Metric label="Internet users" value={market.metrics.internetUsers} />
            <Metric label="Penetration" value={market.metrics.penetration} />
            <Metric label="Social media user identities" value={market.metrics.socialIdentities} />
          </div>

          <div className="grid gap-px border-t border-border bg-border lg:grid-cols-2">
            <div className="bg-background p-6 sm:p-8">
              <h3 className="label-eyebrow text-primary">Creator & ecosystem signals</h3>
              <ul className="mt-5 space-y-3">
                {market.signals.map((signal) => (
                  <li
                    key={signal}
                    className="flex gap-3 text-[14px] leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-[9px] h-px w-3 shrink-0 bg-primary" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>

              <h3 className="label-eyebrow mt-10 text-primary">Potential verticals</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {market.verticals.map((vertical) => (
                  <li
                    key={vertical}
                    className="border border-border px-3 py-1.5 text-[12px] text-muted-foreground"
                  >
                    {vertical}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-px bg-border">
              <div className="bg-ink p-6 text-background sm:p-8">
                <h3 className="label-eyebrow text-primary">Hypothesis</h3>
                <p className="mt-4 font-editorial text-[1.2rem] leading-snug sm:text-[1.45rem]">
                  {market.hypothesis}
                </p>
              </div>

              <div className="bg-cream-deep p-6 sm:p-8">
                <h3 className="label-eyebrow text-primary">Suggested first experiment</h3>
                <p className="mt-4 text-[14px] leading-relaxed text-foreground/80">
                  {market.experiment}
                </p>
              </div>

              <div className="flex-1 bg-background p-6 sm:p-8">
                <h3 className="label-eyebrow text-muted-foreground">Risks</h3>
                <ul className="mt-4 space-y-3">
                  {market.risks.map((risk) => (
                    <li
                      key={risk}
                      className="border-l border-border pl-4 text-[14px] leading-relaxed text-muted-foreground"
                    >
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-[11.5px] leading-relaxed text-muted-foreground/80">
          {marketsMethodologyNote}
        </p>

        {/* Comparison matrix */}
        <div className="mt-20">
          <h3 className="max-w-2xl font-editorial text-[1.6rem] leading-tight tracking-[-0.015em] sm:text-[2.1rem]">
            “Different markets solve different problems.”
          </h3>

          {/* Desktop */}
          <div className="mt-8 hidden border-t border-border lg:block">
            <div className="grid grid-cols-[minmax(0,200px)_repeat(4,minmax(0,1fr))] border-b border-border">
              <div className="label-eyebrow py-4 text-muted-foreground">Dimension</div>
              {markets.map((m) => (
                <div key={m.id} className="border-l border-border px-5 py-4">
                  <span className="font-editorial text-[17px]">{m.name}</span>
                </div>
              ))}
            </div>
            {comparisonMatrix.map((row) => (
              <div
                key={row.dimension}
                className="grid grid-cols-[minmax(0,200px)_repeat(4,minmax(0,1fr))] border-b border-border"
              >
                <div className="py-5 pr-5 text-[13px] font-medium leading-snug">
                  {row.dimension}
                </div>
                {markets.map((m) => (
                  <div
                    key={m.id}
                    className="border-l border-border px-5 py-5 text-[13px] leading-relaxed text-muted-foreground"
                  >
                    {row.values[m.id]}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="mt-8 space-y-px bg-border lg:hidden">
            {markets.map((m) => (
              <div key={m.id} className="bg-background p-5">
                <p className="font-editorial text-[19px]">{m.name}</p>
                <dl className="mt-4 space-y-3">
                  {comparisonMatrix.map((row) => (
                    <div key={row.dimension} className="border-t border-border pt-3">
                      <dt className="text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
                        {row.dimension}
                      </dt>
                      <dd className="mt-1 text-[13.5px] leading-relaxed">{row.values[m.id]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background px-6 py-7 sm:px-8">
      <p className="font-editorial text-[2.25rem] leading-none tracking-tight sm:text-[2.75rem]">
        {value}
      </p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
    </div>
  );
}
