import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhyNow } from "@/components/site/WhyNow";
import { Thesis } from "@/components/site/Thesis";
import { Markets } from "@/components/site/Markets";
import { Creators } from "@/components/site/Creators";
import { ScrollPacks } from "@/components/site/ScrollPacks";
import { Ecosystems } from "@/components/site/Ecosystems";
import { Experiments } from "@/components/site/Experiments";
import {
  Closing,
  Learnings,
  NinetyDays,
  Sources,
  WhyBuilt,
} from "@/components/site/FinalSections";

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
        <ScrollPacks />
        <Ecosystems />
        <Experiments />
        <NinetyDays />
        <Learnings />
        <WhyBuilt />
        <Sources />
        <Closing />
      </main>

      <footer className="border-t border-background/10 bg-ink text-background/55">
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
