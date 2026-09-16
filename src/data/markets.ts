export type Market = {
  id: string;
  name: string;
  country: string;
  note?: string;
};

/** Priority markets for the growth hypothesis. */
export const markets: Market[] = [
  { id: "sa", name: "Saudi Arabia", country: "KSA" },
  { id: "ae", name: "United Arab Emirates", country: "UAE" },
  { id: "eg", name: "Egypt", country: "EG" },
  { id: "ma", name: "Morocco", country: "MA" },
];
