export type ScrollPack = {
  id: string;
  title: string;
  emoji: string;
  purpose: string;
  creators: string[];
  audience: string;
  acquisitionLoop: string;
  returnLoop: string;
};

export const scrollPacks: ScrollPack[] = [
  {
    id: "palestinian-creators",
    title: "Palestinian Creators",
    emoji: "🇵🇸",
    purpose: "Bring together Palestinian voices across music, culture, lifestyle and sport.",
    creators: ["Saint Levant", "Elyanna", "Mohamad Adnan", "Azza Zarour"],
    audience: "Palestinians, diaspora communities and people following Palestinian culture.",
    acquisitionLoop:
      "Creator joins → shares the Pack → audience arrives → audience discovers adjacent Palestinian voices.",
    returnLoop:
      "New releases, matches and cultural moments create recurring reasons for the community to return.",
  },
  {
    id: "arab-independent-music",
    title: "Arab Independent Music",
    emoji: "🎵",
    purpose: "Make emerging and independent Arab music easier to discover in one place.",
    creators: ["Saint Levant", "Elyanna", "Marwan Pablo", "Wegz"],
    audience: "Listeners looking for artists, scenes and releases beyond mainstream playlists.",
    acquisitionLoop:
      "Artist joins → fans follow → fans discover related artists → more artists see value in joining.",
    returnLoop:
      "Releases, shows and artist conversations create a recurring discovery habit.",
  },
  {
    id: "mena-football",
    title: "MENA Football Voices",
    emoji: "⚽",
    purpose: "Turn recurring match moments into recurring community conversation.",
    creators: ["Mohamad Adnan", "Amr Nassouhy"],
    audience: "Arabic-speaking football fans who want analysis, reaction and debate.",
    acquisitionLoop:
      "Creator joins → shares analysis → fans arrive → fans discover other analysts and fan voices.",
    returnLoop:
      "Match happens → creators post → fans debate → fans return for the next fixture.",
  },
  {
    id: "arab-founders",
    title: "Arab Founders & Builders",
    emoji: "🚀",
    purpose: "Create a useful discovery layer for founders, operators and startup communities.",
    creators: ["Anas Bukhash", "Karen Wazen"],
    audience: "Founders, operators, students and people building companies across MENA.",
    acquisitionLoop:
      "Founder joins → shares the Pack → peers arrive → peers discover other builders and communities.",
    returnLoop:
      "Founder updates, launches, events and Q&As create ongoing reasons to participate.",
  },
  {
    id: "arab-film-culture",
    title: "Arab Film & Culture",
    emoji: "🎬",
    purpose: "Surface cultural voices around film, identity, interviews and regional storytelling.",
    creators: ["Joe Hattab", "Khalid Al Ameri", "Anas Bukhash"],
    audience: "People interested in Arab storytelling, identity and contemporary culture.",
    acquisitionLoop:
      "Storyteller joins → audience follows → audience discovers adjacent cultural voices.",
    returnLoop:
      "New interviews, releases and cultural moments keep the conversation moving.",
  },
  {
    id: "mena-food",
    title: "MENA Food Creators",
    emoji: "🍽️",
    purpose: "Use food as a low-friction, highly participatory community wedge.",
    creators: ["Abir El Saghir"],
    audience: "People discovering regional dishes, food traditions and creators.",
    acquisitionLoop:
      "Creator posts → audience joins → audience contributes recipes and recommendations.",
    returnLoop:
      "Everyday cooking and seasonal food moments generate continuous user participation.",
  },
  {
    id: "arabic-science",
    title: "Arabic Science & Ideas",
    emoji: "🧠",
    purpose: "Create a home for Arabic explainers, science and curiosity-led discussion.",
    creators: ["Ahmed El-Ghandour (Da7ee7)", "Ahmad Aburob"],
    audience: "Arabic-speaking users who return for useful, discussion-worthy knowledge content.",
    acquisitionLoop:
      "Explainer creator joins → audience arrives → audience discovers more educators and specialists.",
    returnLoop:
      "Questions, explainers and debate create a repeat learning habit.",
  },
  {
    id: "saudi-creative-voices",
    title: "Saudi Creative Voices",
    emoji: "🇸🇦",
    purpose: "Seed a distinctly Saudi discovery experience rather than a generic regional feed.",
    creators: ["Amy Roko", "The Saudi Reporters", "Thunayyan Khalid"],
    audience: "Saudi users looking for local entertainment, humour and culture.",
    acquisitionLoop:
      "Local creator joins → Saudi audience follows → audience discovers more local voices.",
    returnLoop:
      "Recurring local formats and shared references build familiarity and repeat participation.",
  },
];
