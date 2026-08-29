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
      pageClass="centered-section"
    >
      <NotebookHero title="Contact" />

      <section className="contact-sheet">
        <div className="contact-list">
          <a
            className="contact-link contact-link-email"
            href={`mailto:${links.email}`}
          >
            <span>Email</span>
            <strong>{content.emailLabel}</strong>
            <span aria-hidden="true">→</span>
          </a>

          <a
            className="contact-link contact-link-linkedin"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <strong>View profile</strong>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </NotebookLayout>
  );
}
