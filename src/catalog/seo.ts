import { SITE_NAME } from "@/site/meta";
import type { CatalogItem } from "./items";

/**
 * Search copy for a component page, built from the catalog entry so the 37
 * pages share one template instead of hand-written copy per component.
 */

const TITLE_MAX = 60;
const DESCRIPTION_MIN = 120;
const DESCRIPTION_MAX = 160;

// Use case shared by every widget, taken from SITE_DESCRIPTION.
const USE_CASE = "analytics dashboards";
// Tails from SITE_DESCRIPTION, longest first, to bring short blurbs to 120+.
const TAILS = [
  "Works with Vercel, Plausible, GA4, Umami or PostHog data.",
  "Provider-agnostic analytics widget.",
];
const TRAILING_FILLER = /\s+(?:a|an|and|or|the|with|of|to|in|on|for)$/i;

/** "Area chart" -> "area chart": the catalog titles are sentence case. */
function lowerName(item: CatalogItem): string {
  return item.title.charAt(0).toLowerCase() + item.title.slice(1);
}

/** "React area chart component" — used in the lead sentence. */
export function componentPhrase(item: CatalogItem): string {
  return `React ${lowerName(item)} component`;
}

/**
 * Page title without the site suffix (the root layout template adds
 * " — Wingtics"). Drops "component" when the full title would pass 60 chars.
 */
export function componentTitle(item: CatalogItem): string {
  const suffix = ` — ${SITE_NAME}`;
  const full = componentPhrase(item);
  if (full.length + suffix.length <= TITLE_MAX) return full;
  return `React ${lowerName(item)}`;
}

/** "A React area chart component for analytics dashboards." */
export function componentLead(item: CatalogItem): string {
  return `A ${componentPhrase(item)} for ${USE_CASE}.`;
}

function clampAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  // Prefer a whole sentence when one ends late enough.
  const sentenceEnd = text.lastIndexOf(". ", max - 1);
  if (sentenceEnd + 1 >= DESCRIPTION_MIN) return text.slice(0, sentenceEnd + 1);
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  let trimmed = cut.slice(0, lastSpace > 0 ? lastSpace : cut.length);
  while (TRAILING_FILLER.test(trimmed)) trimmed = trimmed.replace(TRAILING_FILLER, "");
  return `${trimmed.replace(/[\s,.;:—-]+$/, "")}…`;
}

/**
 * Meta description, aimed at 120–160 chars: the component phrase plus use
 * case, the catalog blurb, and a provider line from SITE_DESCRIPTION when
 * the first two run short. Long blurbs are cut at a sentence or word.
 */
export function componentDescription(item: CatalogItem): string {
  const base = `${componentPhrase(item)} for ${USE_CASE}. ${item.blurb}`;
  if (base.length >= DESCRIPTION_MIN) return clampAtWord(base, DESCRIPTION_MAX);
  for (const tail of TAILS) {
    const withTail = `${base} ${tail}`;
    if (withTail.length <= DESCRIPTION_MAX) return withTail;
  }
  return base;
}
