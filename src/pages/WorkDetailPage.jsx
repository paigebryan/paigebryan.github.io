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

  const sections =
    Array.isArray(content.sections)
      ? content.sections
      : [];

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
        eyebrow={`${content.company} / ${content.dates}`}
        title={content.role}
        intro={content.summary}
      >
        <p className="formula-strip">
          {content.sketch ??
            "ENGINEERING CASE STUDY"}
        </p>
      </NotebookHero>

      <section className="case-study-notes">
        {sections.length > 0 ? (
          sections.map((section, index) => (
            <article
              className="case-note"
              key={section.title}
            >
              <div className="case-number">
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </div>

              <div>
                <h2>{section.title}</h2>

                <p>{section.body}</p>

                <div className="sketch-placeholder">
                  <span>
                    Add CAD, diagram, photograph,
                    plot, or test result
                  </span>

                  <svg
                    viewBox="0 0 300 130"
                    aria-hidden="true"
                  >
                    <path d="M18 103c62-74 105-68 137-8 27 52 69 37 126-51" />
                    <circle
                      cx="42"
                      cy="78"
                      r="21"
                    />
                    <path d="M42 56v44M20 78h44" />
                  </svg>
                </div>
              </div>
            </article>
          ))
        ) : (
          <article className="case-note">
            <div className="case-number">
              01
            </div>

            <div>
              <h2>Details coming soon</h2>

              <p>
                Add the problem, your
                responsibility, engineering
                approach, and final result inside
                src/content/siteContent.js.
              </p>
            </div>
          </article>
        )}
      </section>
    </NotebookLayout>
  );
}