// The marks on /work: the company's own mark beside each role, or its initials.
//
// A row here is a label, a monogram, and optionally a `logo`, a file in
// `app/icons/logos/`, which the build compiles into one `/logos.svg`. Until a
// logo exists the mark is the monogram, which is a finished default rather than
// a gap.
//
// A role names its row with `brand:`. A role with no row still gets a mark,
// derived from the company name, so nothing here is required.

/**
 * @typedef {object} Brand
 * @property {string} label the name, as it is written
 * @property {string} initials two or three letters, shown when there is no logo
 * @property {string} [logo] a file in `app/icons/logos/`, without the extension
 */

/**
 * Written out rather than derived, because three of them would collide or read
 * badly if they were not: DockYard and Detroit Trading both start `D`,
 * Tradeweb and transclude both start `TR`.
 *
 * @type {Record<string, Brand>}
 */
export const brands = {
  heyo: { label: "Heyo", initials: "HE", logo: "heyo" },
  freelance: { label: "Freelance", initials: "FR", logo: "dakroub" },
  kajabi: { label: "Kajabi", initials: "KA", logo: "kajabi" },
  dockyard: { label: "DockYard", initials: "DY", logo: "dockyard" },
  "detroit-trading": {
    label: "Detroit Trading Company",
    initials: "DT",
    logo: "detroit-trading",
  },
  "hand-whittled": {
    label: "Hand Whittled",
    initials: "HW",
    logo: "hand-whittled",
  },
  tradeweb: { label: "Tradeweb", initials: "TW", logo: "tradeweb" },
  "quicken-loans": {
    label: "Quicken Loans",
    initials: "QL",
    logo: "quicken-loans",
  },
  transclude: { label: "transclude", initials: "TC" },
};

/**
 * The monogram a name falls back to: two words give their initials, one word
 * gives its first two letters.
 *
 * @param {string} name
 * @returns {string}
 */
export function initialsOf(name) {
  const words = String(name).split(/\s+/).filter(Boolean);
  const letters =
    words.length > 1
      ? words.slice(0, 2).map((word) => word[0])
      : [String(name).slice(0, 2)];
  return letters.join("").toUpperCase();
}

/**
 * What a template needs to draw one mark: the registered row for `key`, or a
 * monogram worked out from `name`.
 *
 * @param {string|undefined} key a row in `brands`
 * @param {string} name the organization, for the fallback
 * @returns {{ label: string, initials: string, logo: string }}
 */
export function markOr(key, name) {
  const brand = key ? brands[key] : null;
  if (!brand)
    return {
      label: name,
      initials: initialsOf(name),
      logo: "",
    };
  return {
    label: brand.label,
    initials: brand.initials,
    logo: brand.logo ?? "",
  };
}
