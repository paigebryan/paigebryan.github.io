import NotebookLayout from "../components/NotebookLayout";
import NotebookHero from "../components/NotebookHero";
import { siteContent } from "../content/siteContent";
import { pathTo } from "../components/pathUtils";

export default function WorkDetailPage({
  depth,
  detailKey
}) {
  const content =
    siteContent.workDetails[detailKey];

  if (!content) {
    return (
      <NotebookLayout
        depth={depth}
        activePage="work"
      >
        <a
          className="pencil-link back-link"
          href={pathTo("work", depth)}
        >
          ← back to work experience
        </a>

        <NotebookHero
          eyebrow="WORK EXPERIENCE"
          title="Page not found"
          intro="This work entry has not been added to src/content/siteContent.js."
        />
      </NotebookLayout>
    );
  }

  const accomplishments =
    Array.isArray(content.sections)
      ? content.sections
      : [];

  return (
    <NotebookLayout
      depth={depth}
      activePage="work"
      pageClass="work-detail-notebook"
    >
      <a
        className="pencil-link back-link"
        href={pathTo("work", depth)}
      >
        ← back to work experience
      </a>

      <NotebookHero
        title={content.company}
      >
        <div className="work-detail-meta">
          <p>
            <strong>Position:</strong> {content.role}
          </p>
          <p>
            <strong>Location:</strong> {content.location}
          </p>
          <p>
            <strong>Duration:</strong> {content.dates}
          </p>
        </div>
      </NotebookHero>

      <section className="work-detail-content">
        <p className="work-detail-description">
          {content.team}
        </p>

        <ul className="resume-bullets">
          {accomplishments.map((item) => (
            <li key={item.title}>{item.body}</li>
          ))}
        </ul>

        <div className="case-photo-grid">
          <div className="sketch-placeholder">
            <span>ADD APPROVED TEAM OR WORKSPACE PHOTO</span>
          </div>
          <div className="sketch-placeholder">
            <span>ADD APPROVED PROJECT OR HARDWARE PHOTO</span>
          </div>
        </div>
      </section>
    </NotebookLayout>
  );
}
