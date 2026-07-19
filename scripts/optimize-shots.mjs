/**
 * Optimize raw ProNobat screenshots (../ProNobat/tools/shots) into
 * public/images/screenshot-*.png at <= 1600px width. Run: node scripts/optimize-shots.mjs
 */
import sharp from "sharp";
import { mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const SRC = join(root, "..", "ProNobat", "tools", "shots");
const OUT = join(root, "public", "images");
mkdirSync(OUT, { recursive: true });

// raw shot name -> public screenshot name
const MAP = {
  dashboard: "screenshot-dashboard",
  appointments: "screenshot-appointments",
  "form-builder": "screenshot-form-builder",
  "flow-builder": "screenshot-flow-builder",
  waitlist: "screenshot-waitlist",
  "analytics-funnel": "screenshot-analytics",
  reports: "screenshot-reports",
  payments: "screenshot-payments",
  "sms-notifications": "screenshot-sms",
  reviews: "screenshot-reviews",
  settings: "screenshot-settings",
  "booking-form": "screenshot-booking-form",
  "directory-grid": "screenshot-directory",
  "directory-map": "screenshot-directory-map",
};

let ok = 0;
for (const [src, dst] of Object.entries(MAP)) {
  const inPath = join(SRC, `${src}.png`);
  const outPath = join(OUT, `${dst}.png`);
  try {
    const meta = await sharp(inPath).metadata();
    const pipe = sharp(inPath);
    if ((meta.width || 0) > 1600) pipe.resize({ width: 1600 });
    await pipe.png({ compressionLevel: 9, quality: 82 }).toFile(outPath);
    const outMeta = await sharp(outPath).metadata();
    console.log(`✓ ${dst}.png  ${outMeta.width}×${outMeta.height}`);
    ok++;
  } catch (e) {
    console.log(`✗ ${src}: ${String(e).slice(0, 80)}`);
  }
}
console.log(`optimized ${ok}/${Object.keys(MAP).length}`);
