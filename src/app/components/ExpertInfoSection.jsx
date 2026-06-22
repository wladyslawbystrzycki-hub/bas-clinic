/**
 * ExpertInfoSection — „Informacje od specjalisty" (strony usług + landingi).
 *
 * Treść dydaktyczna dzielona na zatytułowane podsekcje. Gdy są ≥2 tytuły,
 * renderujemy edytorski układ dwukolumnowy: przyklejony (sticky) spis treści
 * po lewej + treść po prawej; na mobile spis treści jest kartą na górze.
 * Linki w spisie to natywne kotwice (#slug) — `scroll-behavior: smooth` jest
 * ustawione globalnie w globals.css, więc to czysty Server Component bez JS.
 *
 * `content` to zaufany HTML (dangerouslySetInnerHTML) — stylujemy go selektorami
 * potomków (Preflight zeruje marginesy/punktory, a typografii nie ma w projekcie).
 */

const PL_DIACRITICS = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' };

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (ch) => PL_DIACRITICS[ch] || ch)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Klasy dla wstrzykiwanego HTML — naprawiają listy, linki, akapity, <strong>. */
function injectedHtmlClass(light) {
  return [
    'mt-3 leading-relaxed',
    light ? 'text-primary-100' : 'text-gray-600',
    '[&>*+*]:mt-4', // odstęp między blokami (akapity, listy, h4)
    // Listy: marker w kolorze marki, wcięcie pod tekst, oddech między pozycjami
    '[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-[0.9em]',
    '[&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ol]:marker:font-semibold',
    '[&_li]:pl-1.5 [&_li]:leading-relaxed',
    light ? '[&_li]:marker:text-secondary-400' : '[&_li]:marker:text-primary-500',
    // Podnagłówki w treści: h3 = poziom pod tytułem podsekcji (h2), h4 = głębsze
    '[&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold',
    '[&_h4]:mt-5 [&_h4]:font-display [&_h4]:text-base [&_h4]:font-semibold',
    '[&_strong]:font-semibold',
    light
      ? '[&_h3]:text-white [&_h4]:text-white [&_strong]:text-white'
      : '[&_h3]:text-gray-900 [&_h4]:text-gray-900 [&_strong]:text-gray-900',
    '[&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2',
    light
      ? '[&_a]:text-secondary-300 [&_a:hover]:text-white'
      : '[&_a]:text-primary-700 [&_a:hover]:text-primary-800',
    // Tabela: karta z obramowaniem i zaokrągleniem, nagłówek na tle, wiersze z liniami
    '[&_table]:my-2 [&_table]:w-full [&_table]:border-separate [&_table]:border-spacing-0',
    '[&_table]:overflow-hidden [&_table]:rounded-xl [&_table]:border [&_table]:text-left [&_table]:text-[0.95em]',
    '[&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:align-top [&_th]:font-semibold [&_th]:border-b',
    '[&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_td]:border-b',
    '[&_tr:last-child_td]:border-b-0',
    light
      ? '[&_table]:border-white/15 [&_th]:bg-white/10 [&_th]:text-white [&_th]:border-white/15 [&_td]:border-white/10'
      : '[&_table]:border-gray-200 [&_th]:bg-cream [&_th]:text-gray-900 [&_th]:border-gray-200 [&_td]:border-gray-100',
  ].join(' ');
}

export default function ExpertInfoSection({ items, light = false, eyebrow }) {
  if (!items || items.length === 0) return null;

  // Unikalny slug na pozycję — kotwica + cel linku ze spisu treści.
  const used = {};
  const sections = items.map((item, i) => {
    let id = item.title ? slugify(item.title) : `sekcja-${i + 1}`;
    if (used[id]) id = `${id}-${used[id]++}`;
    else used[id] = 1;
    return { ...item, id };
  });

  const tocItems = sections.filter((s) => s.title);
  const hasToc = tocItems.length >= 2;

  const article = (
    <div className={hasToc ? '' : 'mx-auto max-w-3xl'}>
      {sections.map((s) => (
        <div key={s.id} id={s.id} className="scroll-mt-28 [&:not(:first-child)]:mt-10">
          {s.title && (
            <h2
              className={`font-display text-xl font-bold tracking-tight sm:text-2xl ${
                light ? 'text-white' : 'text-gray-900'
              }`}
            >
              {s.title}
            </h2>
          )}
          <div
            className={injectedHtmlClass(light)}
            dangerouslySetInnerHTML={{ __html: s.content }}
          />
        </div>
      ))}
    </div>
  );

  const body = !hasToc ? (
    article
  ) : (
    <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12 xl:gap-20">
      <TableOfContents items={tocItems} light={light} />
      {article}
    </div>
  );

  if (!eyebrow) return body;

  // Eyebrow = mała etykieta sekcji (NIE nagłówek) — pozwala, by tytuły podsekcji
  // były właściwymi H2 strony, bez konkurującego, generycznego H2 nad nimi.
  return (
    <>
      <p
        className={`mb-8 text-sm font-semibold uppercase tracking-widest ${
          light ? 'text-secondary-400' : 'text-primary-600'
        }`}
      >
        {eyebrow}
      </p>
      {body}
    </>
  );
}

/** Spis treści — przyklejona karta (desktop) / karta na górze (mobile). */
function TableOfContents({ items, light }) {
  return (
    <aside className="mb-10 lg:mb-0">
      <nav
        aria-label="Spis treści"
        className={`rounded-2xl border p-6 lg:sticky lg:top-28 ${
          light ? 'border-white/15 bg-white/[0.04]' : 'border-gray-100 bg-cream shadow-sm'
        }`}
      >
        <p
          className={`text-xs font-semibold uppercase tracking-widest ${
            light ? 'text-secondary-400' : 'text-primary-600'
          }`}
        >
          Spis treści
        </p>
        <ol className="mt-4 space-y-0.5">
          {items.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`group flex items-baseline gap-3 rounded-lg px-3 py-2 text-sm leading-snug transition-colors ${
                  light
                    ? 'text-primary-200 hover:bg-white/5 hover:text-white'
                    : 'text-gray-600 hover:bg-white hover:text-primary-700'
                }`}
              >
                <span
                  className={`text-xs font-semibold tabular-nums ${
                    light
                      ? 'text-secondary-400'
                      : 'text-primary-400 group-hover:text-primary-600'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{s.tocLabel || s.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
