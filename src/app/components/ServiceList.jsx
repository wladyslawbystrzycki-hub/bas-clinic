import Link from 'next/link';

export default function ServiceList({ services }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200/70 bg-gray-200/70 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link
          key={service.id || service.slug}
          href={`/${service.slug}/`}
          className="group flex items-center gap-4 bg-white p-5 transition-colors hover:bg-cream sm:p-6"
        >
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold leading-snug text-primary-900 transition-colors group-hover:text-primary-700">
              {service.name}
            </h3>
            {service.shortDesc && (
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{service.shortDesc}</p>
            )}
          </div>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
