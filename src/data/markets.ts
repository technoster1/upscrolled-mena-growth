export type Metrics = {
  internetUsers: string;
  penetration: string;
  socialIdentities: string;
};

export type Market = {
  id: string;
  name: string;
  role: string;
  metrics: Metrics;
  signals: string[];
  hypothesis: string;
  experiment: string;
  verticals: string[];
  risks: string[];
};

export const markets: Market[] = [
  {
    id: "saudi-arabia",
    name: "Saudi Arabia",
    role: "Scale + creator economy",
    metrics: {
      internetUsers: "34.4M",
      penetration: "99.0%",
      socialIdentities: "38.6M",
    },
    signals: [
      "Strong Arabic creator market",
      "Large entertainment and lifestyle creator ecosystem",
      "MDLBEAST and XP Music Futures provide established music infrastructure",
      "Misk provides a large youth and entrepreneurship ecosystem",
    ],
    hypothesis:
      "Saudi Arabia combines digital intensity with strong creator and entertainment infrastructure. The most useful test may be vertical-led growth rather than a broad country launch.",
    experiment:
      "Recruit a small cohort around two high-affinity verticals and test whether curated Scroll Packs drive repeat participation.",
    verticals: ["Music", "Football", "Entertainment", "Technology", "Entrepreneurship"],
    risks: [
      "Large creators may be difficult to activate",
      "Broad influencer campaigns could generate downloads without retention",
      "Regional reach should not be confused with Saudi-specific community density",
    ],
  },
  {
    id: "uae",
    name: "UAE",
    role: "Creator + partnership hub",
    metrics: {
      internetUsers: "11.3M",
      penetration: "99.0%",
      socialIdentities: "12.5M",
    },
    signals: [
      "Dubai hosts Creators HQ",
      "Dubai hosts the 1 Billion Followers Summit",
      "Strong concentration of Arab creators and media companies",
      "STEP connects startup communities",
      "in5 supports media, design and technology startups",
      "Anghami is headquartered in Abu Dhabi",
    ],
    hypothesis:
      "The UAE may be more valuable as a regional creator and partnership hub than purely as an end-user acquisition market.",
    experiment:
      "Use Dubai to recruit creators and ecosystem partners whose audiences span Saudi Arabia, Egypt, Jordan and the wider Arab world.",
    verticals: ["Creator economy", "Startups", "Business", "Media", "Lifestyle", "Music"],
    risks: [
      "UAE audiences are highly international",
      "Creator location does not necessarily equal audience location",
    ],
  },
  {
    id: "egypt",
    name: "Egypt",
    role: "Audience scale + culture",
    metrics: {
      internetUsers: "98.2M",
      penetration: "82.7%",
      socialIdentities: "51.6M",
    },
    signals: [
      "Very large Arabic-speaking digital audience",
      "Major music, comedy and football creator ecosystems",
      "RiseUp connects a large startup community",
      "SceneNoise supports independent music discovery",
      "The GrEEK Campus provides startup and creative community infrastructure",
    ],
    hypothesis:
      "Egypt offers scale, cultural production and strong existing communities. The challenge is finding which vertical produces repeat participation rather than one-off reach.",
    experiment:
      "Test two culturally dense categories such as football and music through creator-led Scroll Packs and recurring community conversations.",
    verticals: ["Football", "Music", "Comedy", "Film", "Education", "Entrepreneurship"],
    risks: [
      "Audience size can encourage chasing reach instead of retention",
      "Creators alone will not automatically create community density",
    ],
  },
  {
    id: "jordan",
    name: "Jordan",
    role: "Community-led testbed",
    metrics: {
      internetUsers: "10.6M",
      penetration: "92.5%",
      socialIdentities: "6.8M",
    },
    signals: [
      "Strong youth and entrepreneurship networks",
      "Zain Innovation Campus operates a national innovation ecosystem",
      "Crown Prince Foundation has youth programmes across the country",
      "Smaller market could make concentrated community experiments easier to observe",
    ],
    hypothesis:
      "Jordan’s smaller scale may make it useful for testing whether deliberately seeded communities can reach meaningful density.",
    experiment:
      "Recruit a concentrated group across creators, founders, university communities and culture, then measure whether those users invite others and return.",
    verticals: ["Entrepreneurship", "Technology", "Football", "Music", "Universities", "Culture"],
    risks: [
      "Smaller total audience",
      "Success in Jordan would not automatically prove scalability elsewhere",
    ],
  },
];

export type ComparisonRow = {
  dimension: string;
  values: Record<string, string>;
};

/** Qualitative comparison only — no scores, no ranking. */
export const comparisonMatrix: ComparisonRow[] = [
  {
    dimension: "Digital audience",
    values: {
      "saudi-arabia": "Large and highly connected",
      uae: "Smaller, highly connected, very international",
      egypt: "Largest Arabic-speaking audience in the set",
      jordan: "Small but highly connected",
    },
  },
  {
    dimension: "Creator infrastructure",
    values: {
      "saudi-arabia": "Deep entertainment, music and lifestyle creators",
      uae: "Dense hub of regional creators and media companies",
      egypt: "Major music, comedy and football creator scenes",
      jordan: "Emerging, closely networked creator base",
    },
  },
  {
    dimension: "Community infrastructure",
    values: {
      "saudi-arabia": "Youth and entrepreneurship programmes at scale",
      uae: "Startup and industry events as connective tissue",
      egypt: "Large startup and creative community spaces",
      jordan: "National innovation and youth programmes",
    },
  },
  {
    dimension: "Regional partnership leverage",
    values: {
      "saudi-arabia": "Strong within the Gulf",
      uae: "Strongest cross-market reach in the region",
      egypt: "Cultural exports travel widely across the Arab world",
      jordan: "Focused, relationship-led partnerships",
    },
  },
  {
    dimension: "Ease of focused experimentation",
    values: {
      "saudi-arabia": "Needs vertical focus to stay observable",
      uae: "Easy to convene, harder to isolate audiences",
      egypt: "Scale makes signal harder to read",
      jordan: "Easiest market to observe density directly",
    },
  },
  {
    dimension: "Best initial role",
    values: {
      "saudi-arabia": "Vertical-led growth",
      uae: "Creator and partnership hub",
      egypt: "Culture-led audience building",
      jordan: "Controlled community testbed",
    },
  },
];

export const marketsMethodologyNote =
  "Digital figures are based primarily on DataReportal Digital 2026 country reports using late-2025 data. ‘Social media user identities’ may include duplicated or non-unique accounts and should be treated as a directional audience indicator.";
