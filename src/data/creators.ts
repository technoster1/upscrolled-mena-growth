export type StrategicRole = "Anchor" | "Community Builder" | "Vertical Specialist";

export type Creator = {
  id: string;
  name: string;
  markets: string[];
  categories: string[];
  role: StrategicRole;
  signal: string;
  whyRelevant: string;
  scrollPack: string;
  experiment: string;
  source: string;
};

export const roleDefinitions: { role: StrategicRole; description: string }[] = [
  {
    role: "Anchor",
    description: "Recognisable names that can create awareness and credibility.",
  },
  {
    role: "Community Builder",
    description:
      "Creators whose audiences actively gather around a recurring identity or topic.",
  },
  {
    role: "Vertical Specialist",
    description:
      "Creators capable of seeding a specific community such as football, music, food or science.",
  },
];

export const creatorsDisclaimer =
  "These prospects are external research candidates for investigation only. None have expressed interest in or affiliation with UpScrolled.";

export const creatorsBadge =
  "External exploratory research set. Not an endorsement or partnership claim.";

const publicProfiles = "Publicly available profiles, interviews and press coverage.";

export const creators: Creator[] = [
  {
    id: "ahmad-aburob",
    name: "Ahmad Aburob",
    markets: ["Jordan", "Palestine", "UAE"],
    categories: ["Education", "Entertainment"],
    role: "Community Builder",
    signal: "Audience returns for recurring explainer-style formats rather than one-off virality.",
    whyRelevant:
      "Bridges Levant and Gulf audiences with content people watch habitually, which is the behaviour a community product needs.",
    scrollPack: "Learn Something Daily — explainer creators worth following in Arabic.",
    experiment:
      "Run a recurring weekly thread around one topic and measure whether the same accounts return across four weeks.",
    source: publicProfiles,
  },
  {
    id: "joe-hattab",
    name: "Joe Hattab",
    markets: ["Jordan", "Regional"],
    categories: ["Travel", "Culture"],
    role: "Anchor",
    signal: "Documentary-scale storytelling with pan-Arab reach and high trust.",
    whyRelevant:
      "An anchor name can make a new platform feel credible in markets where creators decide where audiences go next.",
    scrollPack: "Arab World in Motion — travel and documentary storytellers.",
    experiment:
      "Publish a behind-the-scenes series exclusive to the platform and track follow-through from announcement to repeat visits.",
    source: publicProfiles,
  },
  {
    id: "khalid-al-ameri",
    name: "Khalid Al Ameri",
    markets: ["UAE", "Regional"],
    categories: ["Culture", "Entertainment"],
    role: "Anchor",
    signal: "Mainstream recognition across the Gulf with a family-and-culture register.",
    whyRelevant:
      "Broad credibility makes him useful for the awareness layer that surrounds smaller community experiments.",
    scrollPack: "Everyday Gulf — culture and family storytelling.",
    experiment:
      "Test a single launch conversation and measure how many new accounts join a community rather than only follow.",
    source: publicProfiles,
  },
  {
    id: "anas-bukhash",
    name: "Anas Bukhash",
    markets: ["UAE", "Regional"],
    categories: ["Culture", "Business", "Interviews"],
    role: "Anchor",
    signal: "Long-form interview audience that discusses episodes after watching.",
    whyRelevant:
      "Interview audiences are already conversational, which transfers well to community formats.",
    scrollPack: "Conversations Worth Having — interviewers and long-form voices.",
    experiment:
      "Host a post-episode discussion space and measure comment depth and return rate versus passive views.",
    source: publicProfiles,
  },
  {
    id: "ghaith-marwan",
    name: "Ghaith Marwan",
    markets: ["UAE", "Regional"],
    categories: ["Entertainment", "Lifestyle"],
    role: "Community Builder",
    signal: "Highly participatory audience that responds to prompts and challenges.",
    whyRelevant:
      "Participation, not reach, is the metric this hypothesis is trying to test.",
    scrollPack: "Daily Entertainment — creators who invite responses.",
    experiment:
      "Run a participation prompt series and measure the share of viewers who post rather than watch.",
    source: publicProfiles,
  },
  {
    id: "noor-stars",
    name: "Noor Stars",
    markets: ["UAE", "Regional"],
    categories: ["Entertainment", "Lifestyle"],
    role: "Anchor",
    signal: "One of the largest Arabic-language entertainment followings.",
    whyRelevant:
      "Scale is useful specifically as a top-of-funnel input into smaller, denser communities.",
    scrollPack: "Arabic Entertainment Now.",
    experiment:
      "Route an audience from a single post into one curated Scroll Pack and measure week-two retention.",
    source: publicProfiles,
  },
  {
    id: "mo-vlogs",
    name: "Mo Vlogs",
    markets: ["UAE"],
    categories: ["Lifestyle", "Automotive"],
    role: "Vertical Specialist",
    signal: "Durable automotive and lifestyle niche with an identifiable subculture.",
    whyRelevant:
      "Automotive communities are self-sustaining once seeded and generate ongoing conversation.",
    scrollPack: "Cars of the Gulf.",
    experiment:
      "Seed an automotive pack with a handful of creators and measure whether members post without prompting.",
    source: publicProfiles,
  },
  {
    id: "karen-wazen",
    name: "Karen Wazen",
    markets: ["UAE", "Regional"],
    categories: ["Lifestyle", "Business"],
    role: "Community Builder",
    signal: "Audience follows both the brand-building story and the personal one.",
    whyRelevant:
      "Founder-creator audiences bring an entrepreneurial community alongside a lifestyle one.",
    scrollPack: "Built by Women — founders and fashion entrepreneurs.",
    experiment:
      "Run a founder Q&A series and measure repeat attendance across sessions.",
    source: publicProfiles,
  },
  {
    id: "amy-roko",
    name: "Amy Roko",
    markets: ["Saudi Arabia", "UAE"],
    categories: ["Entertainment", "Culture"],
    role: "Community Builder",
    signal: "Distinct comedic voice with a strongly identifying Saudi audience.",
    whyRelevant:
      "Identity-led humour creates the shared-reference behaviour that keeps communities returning.",
    scrollPack: "Saudi Comedy Now.",
    experiment:
      "Test a comedy pack in Saudi Arabia and measure reply volume per member, not follower growth.",
    source: publicProfiles,
  },
  {
    id: "the-saudi-reporters",
    name: "The Saudi Reporters",
    markets: ["Saudi Arabia"],
    categories: ["Entertainment"],
    role: "Anchor",
    signal: "Large, consistently active Saudi entertainment following.",
    whyRelevant:
      "A domestic anchor gives Saudi-specific credibility rather than generic regional reach.",
    scrollPack: "Saudi Entertainment Daily.",
    experiment:
      "Compare a Saudi-only pack against a regional pack and read the difference in return rate.",
    source: publicProfiles,
  },
  {
    id: "thunayyan-khalid",
    name: "Thunayyan Khalid",
    markets: ["Saudi Arabia"],
    categories: ["Entertainment", "Lifestyle"],
    role: "Community Builder",
    signal: "Recurring formats that audiences follow as a series rather than as clips.",
    whyRelevant:
      "Serialised content is the simplest way to create a reason to come back.",
    scrollPack: "Saudi Everyday.",
    experiment:
      "Publish one serialised format for four weeks and track cohort retention by week.",
    source: publicProfiles,
  },
  {
    id: "ahmed-el-ghandour",
    name: "Ahmed El-Ghandour (Da7ee7)",
    markets: ["Egypt", "Regional"],
    categories: ["Education", "Science"],
    role: "Vertical Specialist",
    signal: "One of the strongest Arabic science and education audiences.",
    whyRelevant:
      "Education audiences discuss, argue and share sources — ideal density-testing behaviour.",
    scrollPack: "Arabic Science & Curiosity.",
    experiment:
      "Seed a science pack and measure the ratio of discussion posts to passive views.",
    source: publicProfiles,
  },
  {
    id: "amr-nassouhy",
    name: "Amr Nassouhy",
    markets: ["Egypt", "Regional"],
    categories: ["Football"],
    role: "Vertical Specialist",
    signal: "Football commentary audience that shows up around fixtures.",
    whyRelevant:
      "Football gives a built-in schedule for recurring participation without paid prompting.",
    scrollPack: "Matchday Arabic.",
    experiment:
      "Run live matchday conversations for one month and measure repeat attendance across fixtures.",
    source: publicProfiles,
  },
  {
    id: "marwan-pablo",
    name: "Marwan Pablo",
    markets: ["Egypt", "Regional"],
    categories: ["Music"],
    role: "Anchor",
    signal: "Cult-level fan attachment within Egyptian and regional rap.",
    whyRelevant:
      "Music fandoms already behave like communities before any platform work begins.",
    scrollPack: "Egyptian Rap Now.",
    experiment:
      "Seed a release-week pack and measure fan-to-fan conversation volume.",
    source: publicProfiles,
  },
  {
    id: "wegz",
    name: "Wegz",
    markets: ["Egypt", "Regional"],
    categories: ["Music"],
    role: "Anchor",
    signal: "Mainstream regional music reach with a young, highly online audience.",
    whyRelevant:
      "An anchor artist can make a music vertical visible quickly across several markets at once.",
    scrollPack: "New Arabic Music.",
    experiment:
      "Test an artist-led pack around one release and measure return visits the following week.",
    source: publicProfiles,
  },
  {
    id: "saint-levant",
    name: "Saint Levant",
    markets: ["Palestine", "Jordan", "Regional"],
    categories: ["Music", "Culture"],
    role: "Anchor",
    signal: "Multilingual audience spanning MENA and the diaspora.",
    whyRelevant:
      "Diaspora audiences connect markets and can carry a community across borders.",
    scrollPack: "Levant Sound.",
    experiment:
      "Compare diaspora and in-market cohorts for participation and retention differences.",
    source: publicProfiles,
  },
  {
    id: "elyanna",
    name: "Elyanna",
    markets: ["Palestine", "Regional"],
    categories: ["Music", "Culture"],
    role: "Anchor",
    signal: "Fast-growing global profile rooted in Arabic-language music.",
    whyRelevant:
      "Cultural pride is a strong reason to gather, and this audience gathers already.",
    scrollPack: "Arabic Music, Global Stage.",
    experiment:
      "Seed a culture-and-music pack and measure invites sent per active member.",
    source: publicProfiles,
  },
  {
    id: "mohamad-adnan",
    name: "Mohamad Adnan",
    markets: ["Palestine", "Jordan", "Regional"],
    categories: ["Football"],
    role: "Community Builder",
    signal: "Football audience organised around recurring commentary and debate.",
    whyRelevant:
      "Debate formats create the fastest path to member-to-member conversation.",
    scrollPack: "Levant Football Talk.",
    experiment:
      "Run a weekly debate prompt and measure the number of unique participants per week.",
    source: publicProfiles,
  },
  {
    id: "azza-zarour",
    name: "Azza Zarour",
    markets: ["Palestine", "UAE"],
    categories: ["Lifestyle", "Entertainment"],
    role: "Community Builder",
    signal: "Close, conversational relationship with a returning audience.",
    whyRelevant:
      "Smaller, tighter audiences are the best early test of community density.",
    scrollPack: "Everyday Levant.",
    experiment:
      "Seed a small cohort and measure what share are still active after 30 days.",
    source: publicProfiles,
  },
  {
    id: "abir-el-saghir",
    name: "Abir El Saghir",
    markets: ["Regional", "Lebanon"],
    categories: ["Food", "Culture"],
    role: "Vertical Specialist",
    signal: "Food-and-culture format with strong cross-market travel.",
    whyRelevant:
      "Food is a low-barrier entry community that invites contributions from ordinary users.",
    scrollPack: "Arab Kitchens.",
    experiment:
      "Seed a food pack and measure user-generated posts per member in the first month.",
    source: publicProfiles,
  },
];

export const marketFilters = [
  "All",
  "Saudi Arabia",
  "UAE",
  "Egypt",
  "Jordan",
  "Palestine",
  "Regional",
] as const;

export const categoryFilters = [
  "All",
  "Music",
  "Football",
  "Culture",
  "Entertainment",
  "Education",
  "Food",
  "Business",
  "Lifestyle",
  "Travel",
] as const;

export const roleFilters = [
  "All",
  "Anchor",
  "Community Builder",
  "Vertical Specialist",
] as const;
