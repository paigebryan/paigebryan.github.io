export default function StickyNote({
  color = "yellow",
  tilt = 0,
  children,
  className = ""
}) {
  return (
    <article
      className={`sticky-note sticky-${color} ${className}`}
      style={{ "--tilt": `${tilt}deg` }}
    >
      <span className="pin" aria-hidden="true" />
      {children}
    </article>
  );
}
