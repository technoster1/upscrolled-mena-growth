import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhyNow } from "@/components/site/WhyNow";
import { Thesis } from "@/components/site/Thesis";
import { Markets } from "@/components/site/Markets";
import { Creators } from "@/components/site/Creators";

import { SectionPlaceholder } from "@/components/site/SectionPlaceholder";
import { sources } from "@/data/sources";


const title = "UpScrolled MENA Growth Map — A strategic concept";
const description =
  "An unofficial strategic concept for UpScrolled growth across MENA: priority markets, creator strategy, ecosystem targets and a 90-day plan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyNow />
        <Thesis />

        <Markets />
        <Creators />


        <SectionPlaceholder
          id="scroll-packs"
          index="03"
          eyebrow="Scroll Packs"
          title="Curated entry points"
          description="Pack concepts that make the first session feel local: people and interests worth following from day one."
        />

        <SectionPlaceholder
          id="ecosystems"
          index="04"
          eyebrow="Ecosystem targets"
          title="Networks that accelerate discovery"
          description="Existing communities, institutions and media networks that can carry distribution further than paid reach."
        />

        <SectionPlaceholder
          id="experiments"
          index="05"
          eyebrow="Growth experiments"
          title="Tests worth running"
          description="Small, measurable experiments designed to validate community density rather than raw installs."
        />

        <SectionPlaceholder
          id="90-days"
          index="06"
          eyebrow="90-day plan"
          title="A sequenced first quarter"
          description="What would happen in the first 30, 60 and 90 days, and what success would look like at each checkpoint."
        />

        <SectionPlaceholder
          id="learnings"
          index="07"
          eyebrow="What I’d want to learn"
          title="The open questions"
          description="The unknowns this concept cannot answer from the outside, and the data that would resolve them."
        />

        <SectionPlaceholder
          id="why-built"
          index="08"
          eyebrow="Why I built this"
          title="A note from Adnan Aklouk"
          description="The reasoning behind putting an external growth hypothesis on paper, and how it is meant to be read."
        />

        <SectionPlaceholder
          id="sources"
          index="09"
          eyebrow="Sources"
          title="Public references"
          description="Everything here is built from publicly available information. Sources are listed in full."
        >
          <ul className="space-y-3">
            {sources.map((source) => (
              <li key={source.id} className="text-[14px] leading-relaxed text-muted-foreground">
                {source.label}
              </li>
            ))}
          </ul>
        </SectionPlaceholder>
      </main>

      <footer className="bg-ink text-background/55">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-editorial text-[15px] text-background">UpScrolled MENA Growth Map</p>
          <p className="text-[12px]">
            Unofficial strategic concept — an external growth hypothesis by Adnan Aklouk.
          </p>
        </div>
      </footer>
    </div>
  );
}
