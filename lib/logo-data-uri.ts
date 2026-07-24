import fs from "node:fs";
import path from "node:path";

let cached: string | null = null;

export function getLogoDataUri() {
  if (cached) return cached;
  const file = fs.readFileSync(path.join(process.cwd(), "public", "logo-mark.png"));
  cached = `data:image/png;base64,${file.toString("base64")}`;
  return cached;
}
