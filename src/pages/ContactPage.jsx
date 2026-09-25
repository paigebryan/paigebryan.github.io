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
        <form
          className="contact-form"
          action={content.formEndpoint || undefined}
          method="POST"
          onSubmit={content.formEndpoint ? undefined : (event) => event.preventDefault()}
          aria-labelledby="contact-form-heading"
        >
          <h2 id="contact-form-heading">Leave me a note</h2>
          <p>I'd love to hear from you.</p>
          <input type="hidden" name="_subject" value="New message from Paige Bryan's portfolio" />
          <div className="contact-form-row">
            <label htmlFor="contact-name">Name
              <input id="contact-name" name="name" autoComplete="name" required maxLength={100} />
            </label>
            <label htmlFor="contact-email">Email
              <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
            </label>
          </div>
          <label htmlFor="contact-message">Message
            <textarea id="contact-message" name="message" rows={6} required maxLength={10000} />
          </label>
          <button type="submit" disabled={!content.formEndpoint}>Send message →</button>
          {!content.formEndpoint && <p className="contact-form-status">The form is being connected. You can email me directly below.</p>}
        </form>
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
