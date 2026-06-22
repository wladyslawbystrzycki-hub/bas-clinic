import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');

export function loadJsonData(relativePath) {
  const filePath = path.join(dataDir, relativePath);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

export function loadServiceData(category, slug) {
  return loadJsonData(`${category}/${slug}.json`);
}

export function loadBodyAreaData(slug) {
  return loadJsonData(`medycyna-estetyczna/body-areas/${slug}.json`);
}

export function loadAestheticServiceData(slug) {
  return loadJsonData(`medycyna-estetyczna/services/${slug}.json`);
}
