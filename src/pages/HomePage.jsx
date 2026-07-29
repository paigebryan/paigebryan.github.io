import NotebookLayout from "../components/NotebookLayout";
import StickyNote from "../components/StickyNote";
import EngineeringDoodles from "../components/EngineeringDoodles";
import { siteContent } from "../content/siteContent";
import { workPath, pathTo } from "../components/pathUtils";

export default function HomePage({ depth }) {
  return (
    <NotebookLayout depth={depth} activePage="home" pageClass="home-notebook">
      <section className="home-hero">
        <EngineeringDoodles />

        <div className="hero-writing">
          <p className="hand-note">MECHANICAL ENGINEERING / FIELD NOTES</p>
          <h1>{siteContent.person.name}</h1>
          <p className="hero-tagline">{siteContent.person.tagline}</p>
          <p className="hero-intro">{siteContent.person.intro}</p>
        </div>

        <div className="hero-scribble" aria-hidden="true">
          <span>ideas → models → tests → better ideas</span>
          <svg viewBox="0 0 400 70">
            <path d="M6 46c90-37 196 15 381-29" />
          </svg>
        </div>

        <a className="scroll-note" href="#work-log">
          scroll for the work log ↓
        </a>
      </section>

      <section className="timeline-section" id="work-log">
        <div className="section-title-row">
          <div>
            <p className="hand-note">PINNED TIMELINE</p>
            <h2>Work log</h2>
          </div>
          <a className="pencil-link" href={pathTo("work", depth)}>
            open full work section →
          </a>
        </div>

        <div className="sticky-timeline">
          <div className="timeline-line" aria-hidden="true" />

          {siteContent.workTimeline.map((job, index) => (
            <div
              className={`timeline-entry ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}
              key={job.key}
            >
              <StickyNote color={job.color} tilt={job.tilt}>
                <p className="sticky-date">{job.date}</p>
                <h3>{job.company}</h3>
                <p className="sticky-role">{job.role}</p>
                <p>{job.note}</p>
                <a href={workPath(job.slug ?? job.key, depth)}>read notes →</a>
              </StickyNote>
              <span className="timeline-dot" aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      <section className="home-index">
        <p className="hand-note">NOTEBOOK INDEX</p>
        <h2>Other sections</h2>

        <div className="index-grid">
          {siteContent.navigation
            .filter((item) => !["home", "work"].includes(item.key))
            .map((item, index) => (
              <a className={`index-card index-card-${index + 1}`} href={pathTo(item.key, depth)} key={item.key}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.label}</strong>
                <p>Open the {item.label.toLowerCase()} notes.</p>
              </a>
            ))}
        </div>
      </section>
    </NotebookLayout>
  );
}
