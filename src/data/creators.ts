export type Creator = {
  id: string;
  name: string;
  market: string;
  category: string;
  why?: string;
};

/** Researched creator prospects. Populated from external research. */
export const creators: Creator[] = [];

export const creatorProspectCount = 20;
