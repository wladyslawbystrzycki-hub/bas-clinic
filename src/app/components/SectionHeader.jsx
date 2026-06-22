export default function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p
          className={`text-sm font-semibold uppercase tracking-widest ${
            light ? 'text-primary-300' : 'text-primary-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
