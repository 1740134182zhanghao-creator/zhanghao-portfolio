import { en } from "./en";
import type { Locale, Messages } from "./types";
import { zh } from "./zh";

export const messages: Record<Locale, Messages> = { zh, en };
export type { Locale, Messages };
