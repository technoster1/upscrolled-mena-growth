const cards = [
  { title: "Arabic ready", body: "UpScrolled already supports Arabic." },
  {
    title: "Community product",
    body: "Scroll Packs help people discover curated creators and communities.",
  },
  {
    title: "Momentum",
    body: "UpScrolled publicly reported passing 5 million users in February 2026.",
  },
  {
    title: "MENA fit",
    body: "UpScrolled’s focus on control, transparent reach and community has clear relevance to digitally active MENA audiences.",
  },
];

export function WhyNow() {
  return (
    <section id="opportunity" className="border-b border-border bg-cream-deep">
      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16">
        <p className="label-eyebrow text-muted-foreground">Why now</p>
        <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article key={card.title} className="bg-background p-6">
              <h3 className="label-eyebrow text-primary">{card.title}</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
