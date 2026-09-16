import { useEffect, useState } from "react";

const steps = [
  "Creator joins",
  "Brings trust",
  "Audience discovers",
  "Community forms",
  "People participate",
  "People return",
  "More creators",
];

export function Flywheel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % steps.length), 1800);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="mt-16">
      <div className="flex items-baseline justify-between gap-4 border-t border-ink-border pt-5">
        <p className="label-eyebrow text-primary">The flywheel</p>
        <p className="text-[11px] uppercase tracking-[0.14em] text-background/40">
          Step {String(active + 1).padStart(2, "0")} / {steps.length}
        </p>
      </div>

      {/* Circular loop */}
      <div
        className="relative mx-auto mt-10 hidden aspect-square w-full max-w-[680px] md:block"
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute inset-[8%] rounded-full border border-ink-border" />
        <div className="absolute inset-[22%] rounded-full border border-dashed border-ink-border/70 animate-spin-slow" />

        <div className="absolute inset-[30%] flex flex-col items-center justify-center text-center">
          <p className="label-eyebrow text-background/40">Compounding loop</p>
          <p className="mt-3 font-editorial text-2xl leading-tight text-background lg:text-3xl">
            {steps[active]}
          </p>
        </div>

        {steps.map((step, i) => {
          const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
          const r = 42;
          const left = 50 + r * Math.cos(angle);
          const top = 50 + r * Math.sin(angle);
          const isActive = i === active;
          return (
            <button
              key={step}
              type="button"
              onMouseEnter={() => {
                setPaused(true);
                setActive(i);
              }}
              onFocus={() => {
                setPaused(true);
                setActive(i);
              }}
              onBlur={() => setPaused(false)}
              style={{ left: `${left}%`, top: `${top}%` }}
              className={`absolute w-[9.5rem] -translate-x-1/2 -translate-y-1/2 border px-3 py-2.5 text-center text-[12px] leading-tight transition-all duration-500 ${
                isActive
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_0_0_6px_rgba(217,93,57,0.12)]"
                  : "border-ink-border bg-ink-soft text-background/70 hover:border-background/40"
              }`}
            >
              <span className="block text-[10px] tracking-[0.14em] opacity-60">
                {String(i + 1).padStart(2, "0")}
              </span>
              {step.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Mobile loop */}
      <ol className="mt-10 space-y-px border border-ink-border bg-ink-border md:hidden">
        {steps.map((step, i) => (
          <li
            key={step}
            className={`flex items-center gap-4 px-4 py-4 transition-colors ${
              i === active ? "bg-primary text-primary-foreground" : "bg-ink-soft text-background/70"
            }`}
          >
            <span className="text-[11px] tracking-[0.14em] opacity-60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[13px] uppercase tracking-[0.1em]">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
