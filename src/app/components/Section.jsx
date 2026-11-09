export default function Section({ children, className = '', id, bg = 'white', dotGrid = false }) {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-cream',
    primary: 'bg-primary-50',
    dark: 'bg-primary-950 text-white',
  };

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${bgClasses[bg] || bgClasses.white} ${
        dotGrid ? 'relative isolate overflow-hidden' : ''
      } ${className}`}
    >
      {/* Siatka kropek (motyw z hero) widoczna tylko przy krawędziach — środek pod
          treścią zostaje czysty, żeby dekoracja nie obciążała sekcji */}
      {dotGrid && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_center,var(--color-primary-400)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_100%)]"
        />
      )}
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
