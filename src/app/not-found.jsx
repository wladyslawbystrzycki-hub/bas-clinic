import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-6xl font-bold text-primary-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-900">
        Strona nie znaleziona
      </h2>
      <p className="mt-2 text-gray-600">
        Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
      >
        Wróć na stronę główną
      </Link>
    </div>
  );
}
