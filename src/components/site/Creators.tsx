import { useMemo, useState } from "react";

import {
  categoryFilters,
  creators,
  creatorsBadge,
  creatorsDisclaimer,
  marketFilters,
  roleDefinitions,
  roleFilters,
  type Creator,
} from "@/data/creators";

const INITIAL_COUNT = 8;

export function Creators() {
  const [market, setMarket] = useState<string>("All");
  const [category, setCategory] = useState<string>("All");
  const [role, setRole] = useState<string>("All");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(
    () =>
      creators.filter(
        (c) =>
          (market === "All" || c.markets.includes(market)) &&
          (category === "All" || c.categories.includes(category)) &&
          (role === "All" || c.role === role),
      ),
    [market, category, role],
  );

  const filtersActive = market !== "All" || category !== "All" || role !== "All";
  const visible = filtersActive || expanded ? filtered : filtered.slice(0, INITIAL_COUNT);

  const reset = () => {
    setMarket("All");
    setCategory("All");
    setRole("All");
  };

  const count = (predicate: (c: Creator) => boolean) => creators.filter(predicate).length;

  return (
    <section id="creators" className="border-b border-border bg-cream-deep">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="label-eyebrow text-primary">The growth wedge</p>
        <h2 className="mt-5 max-w-3xl font-editorial text-[2rem] leading-[1.1] tracking-[-0.02em] sm:text-[3rem]">
          “Don’t chase influencers. Seed communities.”
        </h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
          The first MENA creators shouldn’t be selected only by follower count. Prioritise people
          whose audiences already behave like communities: they return, discuss, recommend and
          identify with the creator’s work.
        </p>
        <p className="mt-6 inline-block border border-border bg-background px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          {creatorsBadge}
        </p>

        {/* Role taxonomy */}
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
          {roleDefinitions.map((item) => (
            <article key={item.role} className="bg-background p-6">
              <h3 className="label-eyebrow text-primary">{item.role}</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground/70">
                {count((c) => c.role === item.role)} prospects
              </p>
            </article>
          ))}
        </div>

        {/* Filters */}
        <div className="mt-14 space-y-5 border-y border-border py-7">
          <FilterRow
            label="Market"
            options={[...marketFilters]}
            value={market}
            onChange={setMarket}
            countFor={(option) =>
              option === "All" ? creators.length : count((c) => c.markets.includes(option))
            }
          />
          <FilterRow
            label="Category"
            options={[...categoryFilters]}
            value={category}
            onChange={setCategory}
            countFor={(option) =>
              option === "All" ? creators.length : count((c) => c.categories.includes(option))
            }
          />
          <FilterRow
            label="Strategic role"
            options={[...roleFilters]}
            value={role}
            onChange={setRole}
            countFor={(option) =>
              option === "All" ? creators.length : count((c) => c.role === option)
            }
          />

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <p className="text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              Showing {visible.length} of {creators.length} prospects
            </p>
            {filtersActive && (
              <button
                type="button"
                onClick={reset}
                className="text-[12px] uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Cards */}
        {visible.length === 0 ? (
          <p className="mt-12 border border-dashed border-border bg-background px-6 py-12 text-center text-[13px] text-muted-foreground">
            No prospects match this combination of filters.
          </p>
        ) : (
          <div className="mt-10 grid gap-px border border-border bg-border lg:grid-cols-2">
            {visible.map((creator) => (
              <CreatorCard key={creator.id} creator={creator} />
            ))}
          </div>
        )}

        {!filtersActive && filtered.length > INITIAL_COUNT && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="border border-foreground/25 px-6 py-3 text-[13px] font-medium transition-colors hover:border-foreground"
            >
              {expanded
                ? `Show first ${INITIAL_COUNT} prospects`
                : `View all ${creators.length} prospects`}
            </button>
          </div>
        )}

        <p className="mt-10 max-w-3xl text-[11.5px] leading-relaxed text-muted-foreground/80">
          {creatorsDisclaimer}
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
  countFor,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  countFor: (option: string) => number;
}) {
  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,140px)_minmax(0,1fr)] lg:items-baseline">
      <p className="label-eyebrow text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = option === value;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`border px-3 py-1.5 text-[12px] transition-colors ${
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-muted-foreground hover:border-foreground/40"
              }`}
            >
              {option}
              <span className={`ml-2 text-[10px] ${isActive ? "opacity-60" : "opacity-50"}`}>
                {countFor(option)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CreatorCard({ creator }: { creator: Creator }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="animate-rise flex flex-col bg-background p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <span className="border border-primary px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-primary">
          {creator.role}
        </span>
        <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          {creator.markets.join(" · ")}
        </span>
      </div>

      <h3 className="mt-4 font-editorial text-[1.5rem] leading-tight tracking-tight">
        {creator.name}
      </h3>

      <ul className="mt-3 flex flex-wrap gap-2">
        {creator.categories.map((cat) => (
          <li key={cat} className="border border-border px-2.5 py-1 text-[11px] text-muted-foreground">
            {cat}
          </li>
        ))}
      </ul>

      <dl className="mt-6 space-y-5 border-t border-border pt-5">
        <div>
          <dt className="label-eyebrow text-muted-foreground">Why this person</dt>
          <dd className="mt-2 text-[14px] leading-relaxed text-foreground/80">
            {creator.whyRelevant}
          </dd>
        </div>
        <div>
          <dt className="label-eyebrow text-muted-foreground">What community</dt>
          <dd className="mt-2 text-[14px] leading-relaxed text-foreground/80">
            {creator.scrollPack}
          </dd>
        </div>
        <div>
          <dt className="label-eyebrow text-muted-foreground">What experiment</dt>
          <dd className="mt-2 text-[14px] leading-relaxed text-foreground/80">
            {creator.experiment}
          </dd>
        </div>
      </dl>

      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="text-[11px] uppercase tracking-[0.14em] text-primary underline-offset-4 hover:underline"
        >
          {open ? "Hide signal & source" : "Signal & source"}
        </button>
        <div
          className={`grid transition-all duration-300 ${
            open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-l border-border pl-4">
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                <span className="text-foreground/70">Signal — </span>
                {creator.signal}
              </p>
              <p className="mt-3 text-[11.5px] leading-relaxed text-muted-foreground/80">
                Source: {creator.source}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
