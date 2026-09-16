export type SourceGroup = "UpScrolled" | "Market Data" | "Creator Research" | "Ecosystem Research";

export type Source = {
  id: string;
  group: SourceGroup;
  label: string;
  url?: string;
};

/** Public sources referenced by this external concept. */
export const sources: Source[] = [
  { id: "upscrolled-about", group: "UpScrolled", label: "UpScrolled — About", url: "https://upscrolled.com/about" },
  { id: "upscrolled-faq", group: "UpScrolled", label: "UpScrolled — FAQ", url: "https://upscrolled.com/faq" },
  { id: "upscrolled-scroll-packs", group: "UpScrolled", label: "UpScrolled Help Center — What are Scroll Packs on UpScrolled?" },
  { id: "upscrolled-languages", group: "UpScrolled", label: "UpScrolled Help Center — What languages does UpScrolled support?" },
  { id: "upscrolled-communities", group: "UpScrolled", label: "UpScrolled Newsroom — The shift from audiences to communities" },
  { id: "upscrolled-5m", group: "UpScrolled", label: "UpScrolled Newsroom — UpScrolled Hits 5 Million Users" },

  { id: "datareportal-saudi", group: "Market Data", label: "DataReportal — Digital 2026: Saudi Arabia", url: "https://datareportal.com/reports/digital-2026-saudi-arabia" },
  { id: "datareportal-uae", group: "Market Data", label: "DataReportal — Digital 2026: United Arab Emirates", url: "https://datareportal.com/reports/digital-2026-united-arab-emirates" },
  { id: "datareportal-egypt", group: "Market Data", label: "DataReportal — Digital 2026: Egypt", url: "https://datareportal.com/reports/digital-2026-egypt" },
  { id: "datareportal-jordan", group: "Market Data", label: "DataReportal — Digital 2026: Jordan", url: "https://datareportal.com/reports/digital-2026-jordan" },

  { id: "creator-aburob", group: "Creator Research", label: "Ahmad Aburob — official creator website", url: "https://aburob.com/" },
  { id: "creator-joe-hattab", group: "Creator Research", label: "Joe Hattab — official website" },
  { id: "creator-khalid", group: "Creator Research", label: "Khalid Al Ameri — official website" },
  { id: "creator-anas", group: "Creator Research", label: "Anas Bukhash — official website" },
  { id: "creator-saint-levant", group: "Creator Research", label: "Saint Levant — official artist profiles" },
  { id: "creator-abir", group: "Creator Research", label: "Abir El Saghir — official website" },
  { id: "creator-da7ee7", group: "Creator Research", label: "Da7ee7 — official / public creator profiles" },
  { id: "creator-amr", group: "Creator Research", label: "Amr Nassouhy — public creator profiles" },

  { id: "eco-misk", group: "Ecosystem Research", label: "Misk Foundation", url: "https://misk.org.sa/en/" },
  { id: "eco-mdlbeast", group: "Ecosystem Research", label: "MDLBEAST / XP Music Futures", url: "https://mdlbeast.com/" },
  { id: "eco-creators-hq", group: "Ecosystem Research", label: "Creators HQ", url: "https://creatorshq.com/" },
  { id: "eco-step", group: "Ecosystem Research", label: "STEP Conference", url: "https://stepconference.com/" },
  { id: "eco-in5", group: "Ecosystem Research", label: "in5", url: "https://infive.ae/" },
  { id: "eco-anghami", group: "Ecosystem Research", label: "Anghami", url: "https://www.anghami.com/" },
  { id: "eco-riseup", group: "Ecosystem Research", label: "RiseUp", url: "https://riseupsummit.com/" },
  { id: "eco-scenenoise", group: "Ecosystem Research", label: "SceneNoise / SceneNow", url: "https://scenenoise.com/" },
  { id: "eco-greek-campus", group: "Ecosystem Research", label: "The GrEEK Campus", url: "https://thegreekcampus.com/" },
  { id: "eco-zinc", group: "Ecosystem Research", label: "Zain Innovation Campus — ZINC" },
  { id: "eco-cpf", group: "Ecosystem Research", label: "Crown Prince Foundation", url: "https://cpf.jo/" },
  { id: "eco-ayc", group: "Ecosystem Research", label: "Arab Youth Center", url: "https://arabyouthcenter.org/" },
];

export const sourceGroups: SourceGroup[] = [
  "UpScrolled",
  "Market Data",
  "Creator Research",
  "Ecosystem Research",
];
