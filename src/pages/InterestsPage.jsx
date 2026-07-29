import NotebookLayout from "../components/NotebookLayout";
import NotebookHero from "../components/NotebookHero";
import StickyNote from "../components/StickyNote";
import { siteContent } from "../content/siteContent";

export default function InterestsPage({ depth }) {
  const content = siteContent.interests;
  const colors = ["yellow", "blue", "green", "pink", "yellow", "blue"];
  const tilts = [-2, 1, -1, 2, -2, 1];

  return (
    <NotebookLayout depth={depth} activePage="interests">
      <NotebookHero
        eyebrow="INTERESTS SECTION / INDEX 04"
        title={content.title}
        intro={content.intro}
      />

      <section className="interest-board">
        {content.items.map(([title, body], index) => (
          <StickyNote color={colors[index]} tilt={tilts[index]} key={title}>
            <p className="sticky-date">PERSONAL NOTE {String(index + 1).padStart(2, "0")}</p>
            <h2>{title}</h2>
            <p>{body}</p>
            <div className="photo-tape">add photo</div>
          </StickyNote>
        ))}
      </section>
    </NotebookLayout>
  );
}
