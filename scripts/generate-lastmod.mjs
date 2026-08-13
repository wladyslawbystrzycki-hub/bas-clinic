// Generuje realne daty `lastmod` dla sitemap z historii git (data ostatniego
// commita dotykającego `page.jsx` danej trasy) → src/app/sitemap.xml/lastmod.json.
//
// DLACZEGO commit do repo, a nie liczenie przy buildzie:
// Vercel klonuje płytko (shallow), więc `git log` per plik przy `next build` jest
// niewiarygodny (brak pełnej historii → jednakowe/puste daty = ten sam fałszywy
// sygnał, który naprawiamy). Dlatego daty wyliczamy lokalnie z PEŁNEJ historii i
// commitujemy mapę; route tylko ją odczytuje (deterministycznie na prod).
//
// Użycie: `npm run lastmod` po każdej publikowanej zmianie treści (najlepiej tuż
// po commicie). Trasy bez realnej daty są pomijane — lepiej brak `<lastmod>` niż
// data zmyślona (kompendium SEO 03-02-03).
import { execFileSync } from 'node:child_process';
import { readdirSync, writeFileSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APP_DIR = join(ROOT, 'src', 'app');
const OUT = join(APP_DIR, 'sitemap.xml', 'lastmod.json');

// Zbierz wszystkie strony (page.jsx) → mapa trasa → ścieżka pliku.
function collectPages(dir) {
  const pages = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      pages.push(...collectPages(full));
    } else if (entry.name === 'page.jsx') {
      const rel = relative(APP_DIR, dir).split('\\').join('/');
      const route = rel === '' ? '/' : `/${rel}/`;
      pages.push({ route, file: full });
    }
  }
  return pages;
}

function gitLastModified(file) {
  // %cI = data commitera w ISO 8601; ostatni commit dotykający pliku.
  const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
    cwd: ROOT,
    encoding: 'utf8',
  }).trim();
  return out || null;
}

const map = {};
for (const { route, file } of collectPages(APP_DIR)) {
  const date = gitLastModified(file);
  if (date) map[route] = date;
}

// Stabilna kolejność kluczy → czytelny, deterministyczny diff.
const sorted = Object.fromEntries(Object.keys(map).sort().map((k) => [k, map[k]]));
writeFileSync(OUT, `${JSON.stringify(sorted, null, 2)}\n`);
console.log(`lastmod: zapisano ${Object.keys(sorted).length} tras → ${relative(ROOT, OUT)}`);
