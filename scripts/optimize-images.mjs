import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgDir = path.join(__dirname, "../public/assets/img");
const MAX_WIDTH = 900;
const WEBP_QUALITY = 78;

const files = (await readdir(imgDir)).filter((f) =>
  /\.(png|jpe?g)$/i.test(f)
);

let beforeTotal = 0;
let afterTotal = 0;

for (const file of files) {
  const inputPath = path.join(imgDir, file);
  const outputPath = path.join(
    imgDir,
    file.replace(/\.(png|jpe?g)$/i, ".webp")
  );

  const before = (await stat(inputPath)).size;
  beforeTotal += before;

  await sharp(inputPath)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toFile(outputPath);

  const after = (await stat(outputPath)).size;
  afterTotal += after;

  const saved = (((before - after) / before) * 100).toFixed(0);
  console.log(
    `${file} → ${path.basename(outputPath)} | ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (−${saved}%)`
  );
}

console.log(
  `\nTotal: ${(beforeTotal / 1024 / 1024).toFixed(1)}MB → ${(afterTotal / 1024 / 1024).toFixed(1)}MB (−${(((beforeTotal - afterTotal) / beforeTotal) * 100).toFixed(0)}%)`
);
