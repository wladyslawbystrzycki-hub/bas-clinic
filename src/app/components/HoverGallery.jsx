/**
 * HoverGallery — kontener na zdjęcia z efektem hover.
 * Pierwsze zdjęcie widoczne domyślnie, reszta pojawia się przy najechaniu myszką.
 * Obsługuje do 10 obrazów.
 *
 * Użycie:
 *   <HoverGallery images={[{ src: "...", alt: "..." }, ...]} className="max-w-60" />
 */
export default function HoverGallery({ images = [], className = "" }) {
  if (!images.length) return null;

  return (
    <figure className={`hover-gallery ${className}`.trim()}>
      {images.slice(0, 10).map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt || ""}
          width={image.width}
          height={image.height}
        />
      ))}
    </figure>
  );
}
