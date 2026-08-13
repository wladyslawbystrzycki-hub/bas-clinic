import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Ikona PNG w wysokiej rozdzielczości (obok favicon.ico) — zasila też manifest
// (instalacja PWA). Sam sygnet na przezroczystym tle, żeby wpasował się w jasny
// i ciemny motyw przeglądarki.
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default async function Icon() {
  const logo = await readFile(join(process.cwd(), 'public/logo-bas-clinic-wroclaw.svg'));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* satori (ImageResponse) rozumie tylko <img> + data URI — next/image tu nie działa */}
        <img
          src={`data:image/svg+xml;base64,${logo.toString('base64')}`}
          width={430}
          height={430}
          alt=""
        />
      </div>
    ),
    size
  );
}
