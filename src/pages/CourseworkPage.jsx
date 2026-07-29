import NotebookLayout from "../components/NotebookLayout";
import NotebookHero from "../components/NotebookHero";
import { siteContent } from "../content/siteContent";

export default function CourseworkPage({ depth }) {
  const content = siteContent.coursework;

  return (
    <NotebookLayout depth={depth} activePage="coursework">
      <NotebookHero
        eyebrow="COURSEWORK SECTION / INDEX 03"
        title={content.title}
        intro={content.intro}
      />

      <section className="course-index">
        {content.groups.map((group, index) => (
          <article className="course-entry" key={group.title}>
            <span className="course-tab">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{group.title}</h2>
              <p>{group.note}</p>
              <ul>
                {group.courses.map((course) => <li key={course}>{course}</li>)}
              </ul>
            </div>
            <div className="mini-diagram" aria-hidden="true">
              <svg viewBox="0 0 180 120">
                <path d="M17 89h145M36 89l36-54 36 54 35-39" />
                <circle cx="36" cy="89" r="6" />
                <circle cx="72" cy="35" r="6" />
                <circle cx="108" cy="89" r="6" />
                <circle cx="143" cy="50" r="6" />
              </svg>
            </div>
          </article>
        ))}
      </section>
    </NotebookLayout>
  );
}
