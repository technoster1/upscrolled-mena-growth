export type EcosystemTiming =
  | "Early test"
  | "After initial traction"
  | "Scale phase"
  | "High-priority near-term opportunity";

export type Ecosystem = {
  id: string;
  name: string;
  markets: string[];
  type: string;
  whyRelevant: string;
  pilot: string;
  timing: EcosystemTiming;
  source: string;
  url?: string;
};

export const ecosystemsDisclaimer =
  "These are external research targets to investigate. None are presented as current UpScrolled partners.";

export const ecosystems: Ecosystem[] = [
  {
    id: "misk-foundation",
    name: "Misk Foundation",
    markets: ["Saudi Arabia"],
    type: "Youth + entrepreneurship + culture",
    whyRelevant:
      "A major Saudi ecosystem focused on young people, entrepreneurship, technology and culture.",
    pilot: "A Saudi Builders Scroll Pack and a focused young-founder community test.",
    timing: "After initial traction",
    source: "Misk Foundation",
    url: "https://misk.org.sa/en/",
  },
  {
    id: "mdlbeast-xp",
    name: "MDLBEAST / XP Music Futures",
    markets: ["Saudi Arabia", "Regional"],
    type: "Music + culture",
    whyRelevant:
      "Established regional music infrastructure around talent, scenes, events and the wider creator economy.",
    pilot: "A Saudi / MENA Music community around artists, DJs, producers and music-industry voices.",
    timing: "Early test",
    source: "XP Music Futures",
    url: "https://mdlbeast.com/",
  },
  {
    id: "sand-circus",
    name: "Sand Circus",
    markets: ["Saudi Arabia", "UAE"],
    type: "Creator agency",
    whyRelevant:
      "A creator-marketing network with access to Saudi and Gulf talent, making cohort onboarding easier than isolated outreach.",
    pilot: "Recruit a small five-creator test cohort through one agency relationship.",
    timing: "Early test",
    source: "Sand Circus",
  },
  {
    id: "creators-hq",
    name: "Creators HQ + 1 Billion Followers Summit",
    markets: ["UAE", "Regional"],
    type: "Creator economy",
    whyRelevant:
      "Dubai-based creator infrastructure with a major global creator-economy gathering and strong regional concentration of talent.",
    pilot: "A creator-community activation, workshop or founder conversation around regional onboarding.",
    timing: "High-priority near-term opportunity",
    source: "Creators HQ / 1 Billion Followers Summit",
    url: "https://creatorshq.com/",
  },
  {
    id: "step-conference",
    name: "STEP Conference",
    markets: ["UAE", "Regional"],
    type: "Startups + technology",
    whyRelevant:
      "A long-running regional platform connecting founders, investors and technology communities.",
    pilot: "An Arab Founders & Builders Scroll Pack plus a live founder-community test.",
    timing: "After initial traction",
    source: "STEP Conference",
    url: "https://stepconference.com/",
  },
  {
    id: "in5",
    name: "in5",
    markets: ["UAE"],
    type: "Startups + media + design",
    whyRelevant:
      "A Dubai ecosystem spanning media, design and technology startups, useful for a concentrated community test.",
    pilot: "Onboard a focused group of founders and creative startups into one discovery cluster.",
    timing: "Early test",
    source: "in5",
    url: "https://infive.ae/",
  },
  {
    id: "anghami",
    name: "Anghami",
    markets: ["UAE", "Regional"],
    type: "Music platform",
    whyRelevant:
      "A major regional music platform with Arabic artists, listeners and podcast audiences across MENA.",
    pilot: "An independent Arab music discovery community built around artists and adjacent music voices.",
    timing: "Scale phase",
    source: "Anghami",
    url: "https://www.anghami.com/",
  },
  {
    id: "diwan-group",
    name: "Diwan Group",
    markets: ["UAE", "Regional"],
    type: "Creator network",
    whyRelevant:
      "A regional creator network that could make a multi-creator onboarding experiment easier to coordinate.",
    pilot: "A small managed creator cohort across several verticals rather than one-off outreach.",
    timing: "Early test",
    source: "Diwan Group",
  },
  {
    id: "riseup",
    name: "RiseUp",
    markets: ["Egypt", "Regional"],
    type: "Entrepreneurship",
    whyRelevant:
      "A large Egyptian-founded startup ecosystem with events, founders and a strong regional community layer.",
    pilot: "An Egyptian Founders & Builders community with an event-linked onboarding test.",
    timing: "Early test",
    source: "RiseUp",
    url: "https://riseupsummit.com/",
  },
  {
    id: "scenenoise",
    name: "SceneNoise / SceneNow",
    markets: ["Egypt", "Regional"],
    type: "Music + culture + media",
    whyRelevant:
      "Independent cultural media covering emerging artists and scenes across Egypt and the wider region.",
    pilot: "An Emerging Arab Music Scroll Pack built around artists and scenes already being discussed.",
    timing: "Early test",
    source: "SceneNoise / SceneNow",
    url: "https://scenenoise.com/",
  },
  {
    id: "greek-campus",
    name: "The GrEEK Campus",
    markets: ["Egypt"],
    type: "Startup + creative community",
    whyRelevant:
      "A physical Cairo ecosystem built around startups, technology, creativity and community events.",
    pilot: "A concentrated Cairo founder and creative-community test.",
    timing: "Early test",
    source: "The GrEEK Campus",
    url: "https://thegreekcampus.com/",
  },
  {
    id: "kord",
    name: "Kord",
    markets: ["Egypt", "Regional"],
    type: "Music + events",
    whyRelevant:
      "A useful node for connecting artists, live events and fan communities around recurring cultural moments.",
    pilot: "An event-linked artist and fan community experiment.",
    timing: "After initial traction",
    source: "Kord",
  },
  {
    id: "zinc",
    name: "Zain Innovation Campus — ZINC",
    markets: ["Jordan"],
    type: "Entrepreneurship + youth",
    whyRelevant:
      "A Jordanian innovation network connecting entrepreneurs, students, mentors and startups.",
    pilot: "A Jordan Builders community plus university and young-founder discovery packs.",
    timing: "Early test",
    source: "Zain Innovation Campus",
    url: "https://www.jo.zain.com/english/Pages/ZINC.aspx",
  },
  {
    id: "crown-prince-foundation",
    name: "Crown Prince Foundation",
    markets: ["Jordan"],
    type: "Youth + leadership",
    whyRelevant:
      "A nationwide youth network spanning entrepreneurship, leadership and community development.",
    pilot: "A youth innovation and leadership discovery community.",
    timing: "After initial traction",
    source: "Crown Prince Foundation",
    url: "https://cpf.jo/",
  },
  {
    id: "arab-youth-center-jordan",
    name: "Arab Youth Center — Jordan",
    markets: ["Jordan", "Regional"],
    type: "Youth",
    whyRelevant:
      "A regional youth node that could connect Jordan-based participants with wider Arab youth communities.",
    pilot: "A cross-border Arab youth voices and community-discovery experiment.",
    timing: "Scale phase",
    source: "Arab Youth Center",
    url: "https://arabyouthcenter.org/",
  },
];

export const ecosystemTargetCount = ecosystems.length;

export const ecosystemMarketFilters = [
  "All",
  "Saudi Arabia",
  "UAE",
  "Egypt",
  "Jordan",
  "Regional",
] as const;

export const ecosystemTypeFilters = [
  "All",
  "Creator agency",
  "Creator economy",
  "Entrepreneurship",
  "Music + culture",
  "Music + culture + media",
  "Music + events",
  "Music platform",
  "Creator network",
  "Startups + media + design",
  "Startups + technology",
  "Startup + creative community",
  "Entrepreneurship + youth",
  "Youth",
  "Youth + entrepreneurship + culture",
  "Youth + leadership",
] as const;
