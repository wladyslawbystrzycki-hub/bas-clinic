import Link from 'next/link';

export default function ServiceCard({ name, description, href, onDark = false }) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-300 motion-safe:hover:-translate-y-1 ${
        onDark
          ? 'border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]'
          : 'border-gray-200/70 bg-white shadow-sm hover:border-primary-300 hover:shadow-lg'
      }`}
    >
      {/* hairline accent that grows on hover */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
          onDark ? 'bg-secondary-500/60' : 'bg-primary-400'
        }`}
      />
      <h3
        className={`text-lg font-semibold leading-snug ${
          onDark
            ? 'text-white group-hover:text-secondary-200'
            : 'text-primary-900 group-hover:text-primary-700'
        }`}
      >
        {name}
      </h3>
      {description && (
        <p
          className={`mt-2.5 flex-1 text-sm leading-relaxed ${
            onDark ? 'text-primary-200' : 'text-gray-600'
          }`}
        >
          {description}
        </p>
      )}
      <span
        className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${
          onDark ? 'text-secondary-300' : 'text-primary-700'
        }`}
      >
        Dowiedz się więcej
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-300 ${
            onDark
              ? 'bg-white/10 text-white group-hover:bg-secondary-500 group-hover:text-primary-950'
              : 'bg-primary-50 text-primary-700 group-hover:bg-primary-700 group-hover:text-white'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </span>
      </span>
    </Link>
  );
}
