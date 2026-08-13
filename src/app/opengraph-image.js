import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Statyczny, brandowy podgląd społecznościowy (og:image + twitter:image) dla całej
// witryny — Next stosuje ten plik-konwencję do każdej strony. Generowany w buildzie
// (SSG). Poppins wczytywany z repo, bo domyślny font @vercel/og (Noto Sans „latin")
// nie ma polskich znaków z Latin Extended-A (ł, ą, ę, ć, ń, ś, ź, ż).

export const alt = 'Bas Clinic — prywatna klinika medyczna we Wrocławiu';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const [semibold, regular] = await Promise.all([
    readFile(join(process.cwd(), 'src/app/_fonts/Poppins-SemiBold.ttf')),
    readFile(join(process.cwd(), 'src/app/_fonts/Poppins-Regular.ttf')),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '84px 96px',
          backgroundColor: '#14171a',
          backgroundImage:
            'radial-gradient(120% 120% at 12% -10%, #262c30 0%, transparent 52%), radial-gradient(90% 90% at 100% 108%, #20262a 0%, transparent 55%)',
          fontFamily: 'Poppins',
          color: '#ffffff',
        }}
      >
        {/* Eyebrow — platynowy nadtytuł */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 26,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#cdd1d2',
            fontWeight: 400,
          }}
        >
          Prywatna klinika medyczna
        </div>

        {/* Wordmark + zakres */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 132, fontWeight: 600, letterSpacing: -2, lineHeight: 1 }}>
            Bas Clinic
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 30,
              fontSize: 38,
              fontWeight: 400,
              color: '#b8bec2',
            }}
          >
            Stomatologia · Medycyna estetyczna · USG · Wlewy witaminowe
          </div>
        </div>

        {/* Stopka — lokalizacja + domena, z platynową kreską */}
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 30, fontWeight: 400 }}>
          <div style={{ display: 'flex', width: 64, height: 3, backgroundColor: '#c4c8cb', marginRight: 26 }} />
          <div style={{ display: 'flex', color: '#e8eaeb' }}>Wrocław</div>
          <div style={{ display: 'flex', color: '#6b7378', margin: '0 16px' }}>·</div>
          <div style={{ display: 'flex', color: '#cdd1d2' }}>bas.clinic</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Poppins', data: semibold, weight: 600, style: 'normal' },
        { name: 'Poppins', data: regular, weight: 400, style: 'normal' },
      ],
    }
  );
}
