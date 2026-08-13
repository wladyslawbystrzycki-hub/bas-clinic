import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Ikona PNG w wysokiej rozdzielczości (obok istniejącego favicon.ico) — zasila też
// manifest (instalacja PWA). Grafitowe „B" w markowym monogramie.
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default async function Icon() {
  const semibold = await readFile(join(process.cwd(), 'src/app/_fonts/Poppins-SemiBold.ttf'));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#14171a',
          backgroundImage: 'radial-gradient(120% 100% at 50% 0%, #2a3034 0%, transparent 60%)',
          fontFamily: 'Poppins',
          color: '#e8eaeb',
          fontSize: 340,
          fontWeight: 600,
        }}
      >
        B
      </div>
    ),
    { ...size, fonts: [{ name: 'Poppins', data: semibold, weight: 600, style: 'normal' }] }
  );
}
