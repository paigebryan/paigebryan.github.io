import NotebookLayout from "../components/NotebookLayout";
import StickyNote from "../components/StickyNote";
import ScrollWrittenText from "../components/ScrollWrittenText";
import { siteContent } from "../content/siteContent";
import {
  pathTo,
  workPath
} from "../components/pathUtils";

export default function HomePage({ depth }) {
  const secondarySections =
    siteContent.navigation.filter(
      (item) =>
        !["home", "work"].includes(item.key)
    );

  return (
    <NotebookLayout
      depth={depth}
      activePage="home"
      pageClass="home-notebook"
    >
      <section className="home-hero">
        <div className="hero-writing">
          <ScrollWrittenText as="p" className="hand-note">
            MECHANICAL ENGINEER
          </ScrollWrittenText>

          <h1>{siteContent.person.name}</h1>

          <p className="hero-tagline">
            {siteContent.person.tagline}
          </p>

          <p className="hero-intro">
            {siteContent.person.intro}
          </p>
        </div>

        <a
          className="scroll-note"
          href="#work-log"
        >
          scroll for the work log ↓
        </a>
      </section>

      <section
        className="timeline-section"
        id="work-log"
      >
        <div className="section-title-row">
          <div>
            <ScrollWrittenText as="p" className="hand-note">
              PINNED TIMELINE
            </ScrollWrittenText>

            <h2>Work log</h2>
          </div>

          <a
            className="pencil-link"
            href={pathTo("work", depth)}
          >
            open full work section →
          </a>
        </div>

        <div className="sticky-timeline">
          <div
            className="timeline-line"
            aria-hidden="true"
          />

          {siteContent.workTimeline.map(
            (job, index) => {
              const sideClass =
                index % 2 === 0
                  ? "timeline-left"
                  : "timeline-right";

              return (
                <div
                  className={`timeline-entry ${sideClass}`}
                  key={job.key}
                >
                  <StickyNote
                    color={job.color}
                    tilt={job.tilt}
                  >
                    <p className="sticky-date">
                      {job.date}
                    </p>

                    <h3>{job.company}</h3>

                    <p className="sticky-role">
                      {job.role}
                    </p>

                    <p>{job.note}</p>

                    <a
                      href={workPath(
                        job.slug ?? job.key,
                        depth
                      )}
                    >
                      read notes →
                    </a>
                  </StickyNote>

                  <span
                    className="timeline-dot"
                    aria-hidden="true"
                  />
                </div>
              );
            }
          )}
        </div>
      </section>

      <section className="home-index">
        <ScrollWrittenText as="p" className="hand-note">
          NOTEBOOK INDEX
        </ScrollWrittenText>

        <h2>Other sections</h2>

        <div className="index-grid">
          {secondarySections.map(
            (item, index) => (
              <a
                className={`index-card index-card-${
                  index + 1
                }`}
                href={pathTo(item.key, depth)}
                key={item.key}
              >
                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <strong>{item.label}</strong>

                <p>
                  Open the{" "}
                  {item.label.toLowerCase()} section.
                </p>
              </a>
            )
          )}
        </div>
      </section>
    </NotebookLayout>
  );
}