export default function NotebookHero({ eyebrow, title, intro, children }) {
  return (
    <header className="page-heading">
      {eyebrow && <p className="hand-note">{eyebrow}</p>}
      <h1>{title}</h1>
      <p className="page-intro">{intro}</p>
      {children}
    </header>
  );
}
