export type Ecosystem = {
  id: string;
  name: string;
  market: string;
  type: string;
  why?: string;
};

/** Ecosystem targets: networks that accelerate discovery and distribution. */
export const ecosystems: Ecosystem[] = [];

export const ecosystemTargetCount = 15;
