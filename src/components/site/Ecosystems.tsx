import { useMemo, useState } from "react";

import {
  ecosystems,
  ecosystemsDisclaimer,
  ecosystemMarketFilters,
  type Ecosystem,
} from "@/data/ecosystems";

export function Ecosystems() {
  const [market, setMarket] = useState("All");
  const [type, setType] = useState("All");

  const types = useMemo(
    () => ["All", ...Array.from(new Set(ecosystems.map((item) => item.type))).sort()],
    [],
  );

  const filtered = ecosystems.filter(
    (item) =>
      (market === "All" || item.markets.includes(market)) &&
      (type === "All" || item.type === type),
  );

  return (
    <section id="ecosystems" className="border-b border-border bg-ink text-background">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="label-eyebrow text-primary">Ecosystem targets</p>
        <h2 className="mt-5 max-w-4xl font-editorial text-[2rem] leading-[1.08] tracking-[-0.02em] sm:text-[3rem]">
          Creators start the conversation. Ecosystems help it spread.
        </h2>
        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-background/65 sm:text-[16px]">
          The fastest route may not be dozens of isolated outreach messages. Existing creator,
          youth, music and startup ecosystems already bring together many of the communities
          UpScrolled wants to reach.
        </p>

        <div className="mt-12 space-y-5 border-y border-background/15 py-7">
          <FilterRow
            label="Market"
            options={[...ecosystemMarketFilters]}
            value={market}
            onChange={setMarket}
          />
          <FilterRow label="Type" options={types} value={type} onChange={setType} />
        </div>

        <div className="mt-10 grid gap-px border border-background/15 bg-background/15 lg:grid-cols-2">
          {filtered.map((item) => (
            <EcosystemCard key={item.id} item={item} />
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-[11.5px] leading-relaxed text-background/50">
          {ecosystemsDisclaimer}
        </p>
      </div>
    </section>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 lg:grid-cols-[120px_1fr] lg:items-baseline">
      <p className="label-eyebrow text-background/45">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = option === value;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`border px-3 py-1.5 text-[12px] transition-colors ${
                active
                  ? "border-primary bg-primary text-white"
                  : "border-background/20 text-background/65 hover:border-background/45"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function EcosystemCard({ item }: { item: Ecosystem }) {
  return (
    <article className="bg-ink p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <span className="border border-primary px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-primary">
          {item.type}
        </span>
        <span className="text-[11px] uppercase tracking-[0.12em] text-background/45">
          {item.markets.join(" · ")}
        </span>
      </div>
      <h3 className="mt-4 font-editorial text-[1.45rem] leading-tight">{item.name}</h3>
      <div className="mt-6 space-y-5 border-t border-background/15 pt-5">
        <div>
          <p className="label-eyebrow text-background/40">Why relevant</p>
          <p className="mt-2 text-[14px] leading-relaxed text-background/70">{item.whyRelevant}</p>
        </div>
        <div>
          <p className="label-eyebrow text-background/40">Possible pilot</p>
          <p className="mt-2 text-[14px] leading-relaxed text-background/70">{item.pilot}</p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-background/10 pt-4">
          <span className="text-[11px] uppercase tracking-[0.13em] text-background/45">
            {item.timing}
          </span>
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] uppercase tracking-[0.13em] text-primary hover:underline"
            >
              Source ↗
            </a>
          ) : (
            <span className="text-[11px] text-background/35">{item.source}</span>
          )}
        </div>
      </div>
    </article>
  );
}
