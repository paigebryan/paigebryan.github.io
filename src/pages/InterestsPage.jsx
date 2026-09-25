import NotebookLayout from "../components/NotebookLayout";
import NotebookHero from "../components/NotebookHero";
import StickyNote from "../components/StickyNote";
import ScrollWrittenText from "../components/ScrollWrittenText";
import { siteContent } from "../content/siteContent";
import { pathTo } from "../components/pathUtils";

const colors = ["yellow", "blue", "green", "pink"];
const tilts = [-2, 1, -1, 2];

function PersonalNotes({ items, depth }) {
  return (
    <div className="hobby-scrapbook">
      {items.map(({ title, body, photo, alt, width, height }, index) => (
        <div className={`hobby-pair${photo ? " hobby-pair-with-photo" : ""}`} key={title}>
          <StickyNote
            color={colors[index % colors.length]}
            tilt={tilts[index % tilts.length]}
          >
            <h3>{title}</h3>
            <p>{body}</p>
          </StickyNote>
          {photo && (
            <div className={`involvement-card hobby-note-photo${height > width ? " hobby-note-photo-portrait" : ""}`}>
              <img
                src={`${pathTo("home", depth)}${photo}`}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function InterestsPage({ depth }) {
  const content = siteContent.interests;

  return (
    <NotebookLayout
      depth={depth}
      activePage="about"
      pageClass="centered-section about-page"
    >
      <NotebookHero title="About Me" />

      <section className="about-intro" aria-labelledby="about-bio-heading">
        <figure className="about-portrait">
          {content.photo ? (
            <img
              src={`${pathTo("home", depth)}${content.photo}`}
              alt="Paige Bryan"
              width="1677"
              height="2516"
            />
          ) : (
            <div className="about-photo-placeholder">Portrait coming soon</div>
          )}
        </figure>
        <div className="about-bio">
          <ScrollWrittenText as="p" className="hand-note">A LITTLE ABOUT ME</ScrollWrittenText>
          <h2 id="about-bio-heading">Hi, I'm Paige.</h2>
          <p>{content.bio}</p>
        </div>
      </section>

      <section className="about-section" aria-labelledby="school-heading">
        <ScrollWrittenText as="p" className="hand-note">ON CAMPUS</ScrollWrittenText>
        <h2 id="school-heading">School Involvements</h2>
        <div className="involvement-list">
          {content.involvements.map((club) => (
            <article key={club.title}>
              <h3>{club.title}</h3>

            </article>
          ))}
        </div>
        <div className="involvement-board">
          {content.involvementPhotos.map((photo) => (
            <div className={`involvement-card${photo.portrait ? " involvement-card-portrait" : ""}`} key={photo.photo}>
              <img
                src={`${pathTo("home", depth)}${photo.photo}`}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" aria-labelledby="hobbies-heading">
        <ScrollWrittenText as="p" className="hand-note">OUTSIDE THE CLASSROOM</ScrollWrittenText>
        <h2 id="hobbies-heading">Hobbies</h2>
        <PersonalNotes items={content.items} depth={depth} />
      </section>
    </NotebookLayout>
  );
}
