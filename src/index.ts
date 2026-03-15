export * from "./parsePy";
export * from "./parseMd";
export * from "./parseClassicMd";
export * from "./parseMystMd";
export * from "./parseSphinxGallery";
export * from "./notebook";

import { parsePy } from "./parsePy";
import { parseMd } from "./parseMd";
import { parseSphinxGallery } from "./parseSphinxGallery";
import type { Notebook } from "./notebook";

export function parse(text: string, format: "py" | "md" | "sphinx-gallery"): Notebook {
  if (format === "py") return parsePy(text);
  if (format === "md") return parseMd(text);
  if (format === "sphinx-gallery") return parseSphinxGallery(text);
  throw new Error(`Unknown format: "${format}". Expected "py", "md", or "sphinx-gallery".`);
}
