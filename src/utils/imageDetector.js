import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import probe from 'probe-image-size';

const readdir = promisify(fs.readdir);

export async function detectImages() {
  const dataDir = path.join(__dirname, '../data');
  const files = await readdir(dataDir);
  
  const images = {};
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.png', '.jpeg', '.webp'].includes(ext)) {
      const filePath = path.join(dataDir, file);
      try {
        const result = await probe(fs.createReadStream(filePath));
        images[file] = {
          width: result.width,
          height: result.height,
          path: `/src/data/${file}`,
        };
      } catch (err) {
        console.error(`Error reading ${file}:`, err);
      }
    }
  }
  return images;
}