import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// apple-touch-icon (ekran startowy iOS) — sygnet marki na pełnym białym tle
// (iOS nie obsługuje przezroczystości i sam nakłada zaokrąglenie).
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
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
          backgroundColor: '#ffffff',
        }}
      >
        {/* satori (ImageResponse) rozumie tylko <img> + data URI — next/image tu nie działa */}
        <img
          src={`data:image/svg+xml;base64,${logo.toString('base64')}`}
          width={150}
          height={150}
          alt=""
        />
      </div>
    ),
    size
  );
}
