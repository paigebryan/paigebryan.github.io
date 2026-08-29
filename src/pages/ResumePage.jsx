import NotebookLayout from "../components/NotebookLayout";
import NotebookHero from "../components/NotebookHero";
import { siteContent } from "../content/siteContent";

export default function ResumePage({ depth }) {
  const { links } = siteContent.resume;

  return (
    <NotebookLayout
      depth={depth}
      activePage="resume"
      pageClass="centered-section"
    >
      <NotebookHero title="Résumé" />

      <section className="resume-launch">
        <a
          className="ink-button"
          href={links.resumePath}
          target="_blank"
          rel="noreferrer"
        >
          Open Résumé
          <span aria-hidden="true">↗</span>
        </a>
      </section>
    </NotebookLayout>
  );
}
