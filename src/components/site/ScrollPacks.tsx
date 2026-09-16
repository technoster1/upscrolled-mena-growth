import { scrollPacks } from "@/data/scrollPacks";

export function ScrollPacks() {
  return (
    <section id="scroll-packs" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-24">
        <p className="label-eyebrow text-primary">Scroll Packs</p>
        <h2 className="mt-5 max-w-3xl font-editorial text-[2rem] leading-[1.08] tracking-[-0.02em] sm:text-[3rem]">
          Turn discovery into community density.
        </h2>
        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
          Curated entry points can make a first session feel local and useful. Each Pack below is a
          concept for combining recognisable creators with a reason to come back.
        </p>

        <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-2">
          {scrollPacks.map((pack) => (
            <article key={pack.id} className="bg-background p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">{pack.emoji}</span>
                <div>
                  <h3 className="font-editorial text-[1.5rem] leading-tight">{pack.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{pack.purpose}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
                <div>
                  <p className="label-eyebrow text-muted-foreground">Example creators</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-foreground/80">
                    {pack.creators.join(" · ")}
                  </p>
                </div>
                <div>
                  <p className="label-eyebrow text-muted-foreground">Who follows it</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-foreground/80">{pack.audience}</p>
                </div>
              </div>

              <div className="mt-5 space-y-4 border-t border-border pt-5">
                <div>
                  <p className="label-eyebrow text-primary">Acquisition loop</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-foreground/80">{pack.acquisitionLoop}</p>
                </div>
                <div>
                  <p className="label-eyebrow text-primary">Return loop</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-foreground/80">{pack.returnLoop}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
