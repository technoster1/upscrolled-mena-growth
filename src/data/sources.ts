export type Source = {
  id: string;
  label: string;
  url?: string;
  note?: string;
};

/** Public sources referenced by this concept. */
export const sources: Source[] = [
  {
    id: "upscrolled-5m",
    label: "UpScrolled publicly reported passing 5 million users (February 2026)",
  },
];
