import NotebookLayout from "../components/NotebookLayout";
import NotebookHero from "../components/NotebookHero";
import StickyNote from "../components/StickyNote";
import { siteContent } from "../content/siteContent";
import { workPath } from "../components/pathUtils";

export default function WorkPage({ depth }) {
  return (
    <NotebookLayout depth={depth} activePage="work">
      <NotebookHero
        eyebrow="WORK SECTION / INDEX 01"
        title="Work notes"
        intro="A deeper look at the engineering problems, decisions, and results behind each role."
      />

      <section className="work-board">
        {siteContent.workTimeline.map((job, index) => (
          <StickyNote
            color={job.color}
            tilt={index === 1 ? -1 : job.tilt}
            className="work-note"
            key={job.key}
          >
            <p className="sticky-date">{job.date}</p>
            <h2>{job.company}</h2>
            <p className="sticky-role">{job.role}</p>
            <p>{job.note}</p>
            <a href={workPath(job.slug ?? job.key, depth)}>open case study →</a>
          </StickyNote>
        ))}
      </section>
    </NotebookLayout>
  );
}
