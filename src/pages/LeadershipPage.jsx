import NotebookLayout from "../components/NotebookLayout";
import NotebookHero from "../components/NotebookHero";
import StickyNote from "../components/StickyNote";
import { siteContent } from "../content/siteContent";

export default function LeadershipPage({ depth }) {
  const content = siteContent.leadership;

  return (
    <NotebookLayout depth={depth} activePage="leadership">
      <NotebookHero
        eyebrow="LEADERSHIP SECTION / INDEX 02"
        title={content.title}
        intro={content.intro}
      />

      <section className="metric-notes">
        {content.metrics.map(([value, label], index) => (
          <StickyNote
            key={label}
            color={["yellow", "blue", "green", "pink"][index]}
            tilt={[1, -2, 2, -1][index]}
            className="metric-note"
          >
            <strong>{value}</strong>
            <span>{label}</span>
          </StickyNote>
        ))}
      </section>

      <section className="ruled-list">
        {content.roles.map((role, index) => (
          <article key={role.title}>
            <span className="margin-number">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p className="hand-note">{role.subtitle}</p>
              <h2>{role.title}</h2>
              <p>{role.body}</p>
            </div>
          </article>
        ))}
      </section>
    </NotebookLayout>
  );
}
