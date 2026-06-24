export default function Section({ children, className = '', id, bg = 'white' }) {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-cream',
    primary: 'bg-primary-50',
    dark: 'bg-primary-950 text-white',
  };

  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${bgClasses[bg] || bgClasses.white} ${className}`}>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
