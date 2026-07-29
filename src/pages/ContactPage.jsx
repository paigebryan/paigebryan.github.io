import NotebookLayout from "../components/NotebookLayout";
import NotebookHero from "../components/NotebookHero";
import { siteContent } from "../content/siteContent";

export default function ContactPage({ depth }) {
  const content = siteContent.contact;
  const links = siteContent.resume.links;

  return (
    <NotebookLayout
      depth={depth}
      activePage="contact"
    >
      <NotebookHero
        eyebrow="CONTACT / NOTEBOOK SECTION"
        title={content.title}
        intro={content.intro}
      />

      <section className="contact-sheet">
        <p className="hand-note">
          CONTACT INFORMATION
        </p>

        <div className="contact-list">
          <a href={links.email}>
            <span>Email</span>

            <strong>
              {content.emailLabel}
            </strong>
          </a>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>

            <strong>
              Professional profile
            </strong>
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>

            <strong>
              Projects and source code
            </strong>
          </a>

          <div className="contact-location">
            <span>Location</span>

            <strong>
              {content.location}
            </strong>
          </div>
        </div>

        <p className="contact-reminder">
          Replace the placeholder email and
          LinkedIn address inside
          src/content/siteContent.js.
        </p>
      </section>
    </NotebookLayout>
  );
}