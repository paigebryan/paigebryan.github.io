import NotebookLayout from "../components/NotebookLayout";
import NotebookHero from "../components/NotebookHero";
import { siteContent } from "../content/siteContent";

export default function ResumePage({ depth }) {
  const content = siteContent.resume;
  const links = content.links;

  return (
    <NotebookLayout depth={depth} activePage="resume">
      <NotebookHero
        eyebrow="RÉSUMÉ SECTION / INDEX 05"
        title={content.title}
        intro={content.intro}
      >
        <div className="resume-actions">
          {links.resumeReady ? (
            <a className="ink-button" href={links.resumePath} download>
              Download résumé
            </a>
          ) : (
            <span className="disabled-ink-button">Add public/resume.pdf</span>
          )}
          <a href={links.gitlab} target="_blank" rel="noreferrer">GitLab</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={links.email}>Email</a>
        </div>
      </NotebookHero>

      <section className="resume-grid">
        <article className="resume-sheet">
          <p className="hand-note">FORMAL SUMMARY</p>
          <h2>{siteContent.person.name}</h2>
          <p>{siteContent.person.tagline}</p>
          <hr />
          <h3>Experience</h3>
          <p>NASA · Blue Origin · John Deere</p>
          <h3>Education</h3>
          <p>Add university, degree, graduation date, GPA, certificates, and awards.</p>
          <h3>Leadership</h3>
          <p>Add the strongest roles and measurable outcomes.</p>
        </article>

        <aside className="skills-margin">
          {content.skills.map(([group, skills]) => (
            <div key={group}>
              <p className="hand-note">{group}</p>
              <ul>
                {skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </aside>
      </section>
    </NotebookLayout>
  );
}
