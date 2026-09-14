import "../styles/exxonMobilPhotos.css";
import "../styles/nasaPhotos.css";
import "../styles/johnDeerePhotos.css";
import NotebookLayout from "../components/NotebookLayout";
import NotebookHero from "../components/NotebookHero";
import { siteContent } from "../content/siteContent";
import { pathTo } from "../components/pathUtils";

export default function WorkDetailPage({
  depth,
  detailKey
}) {
  const content =
    siteContent.workDetails[detailKey];

  if (!content) {
    return (
      <NotebookLayout
        depth={depth}
        activePage="work"
      >
        <a
          className="pencil-link back-link"
          href={pathTo("work", depth)}
        >
          ← back to work experience
        </a>

        <NotebookHero
          eyebrow="WORK EXPERIENCE"
          title="Page not found"
          intro="This work entry has not been added to src/content/siteContent.js."
        />
      </NotebookLayout>
    );
  }

  const accomplishments =
    Array.isArray(content.sections)
      ? content.sections
      : [];

  return (
    <NotebookLayout
      depth={depth}
      activePage="work"
      pageClass="work-detail-notebook"
    >
      <a
        className="pencil-link back-link"
        href={pathTo("work", depth)}
      >
        ← back to work experience
      </a>

      <NotebookHero
        title={content.company}
      >
        <div className="work-detail-meta">
          <p>
            <strong>Position:</strong> {content.role}
          </p>
          <p>
            <strong>Location:</strong> {content.location}
          </p>
          <p>
            <strong>Duration:</strong> {content.dates}
          </p>
        </div>
      </NotebookHero>

      <section className="work-detail-content">
        <p className="work-detail-description">
          {content.team}
        </p>

        <ul className="resume-bullets">
          {accomplishments.map((item) => (
            <li key={item.title}>{item.body}</li>
          ))}
        </ul>

        {detailKey === "johnDeere" ? (
          <div className="john-deere-photos" aria-label="John Deere internship photos">
            {[
              { file: "field-survey", width: 1280, height: 720,
                alt: "Field survey equipment on a tripod beside a pickup truck and team outdoors.",
                caption: "01 / Field survey" },
              { file: "welding-team", width: 828, height: 1097,
                alt: "A group wearing welding helmets and green protective jackets in a workshop.",
                caption: "02 / In the welding workshop" },
              { file: "wheel-loader", width: 1920, height: 1440,
                alt: "A person climbing into a yellow John Deere wheel loader at an outdoor site.",
                caption: "03 / Up close with the equipment" },
            ].map((photo) => (
              <figure className={"john-deere-photo john-deere-photo--" + photo.file} key={photo.file}>
                <span className="note-tape" aria-hidden="true" />
                <a href={pathTo("home", depth) + "images/john-deere/john-deere-" + photo.file + ".jpg"}
                   aria-label={"View full-size photo: " + photo.caption}>
                  <img
                    src={pathTo("home", depth) + "images/john-deere/john-deere-" + photo.file + ".jpg"}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : detailKey === "nasa" ? (
          <div className="nasa-photos" aria-label="NASA experience photos">
            {[
              { file: "rocket-display", width: 1920, height: 2560,
                alt: "A person standing in front of tall rockets on outdoor display.",
                caption: "01 / Rocket display" },
              { file: "payload-operations-center", width: 1440, height: 1920,
                alt: "The NASA International Space Station Payload Operations Center building beneath a blue sky.",
                caption: "02 / ISS Payload Operations Center" },
              { file: "rocket-engine-display", width: 1920, height: 1440,
                alt: "A rocket engine and horizontal rocket exhibits on outdoor display.",
                caption: "03 / Rocket engine display" },
            ].map((photo) => (
              <figure className={"nasa-photo nasa-photo--" + photo.file} key={photo.file}>
                <span className="note-tape" aria-hidden="true" />
                <a href={pathTo("home", depth) + "images/nasa/nasa-" + photo.file + ".jpg"}
                   aria-label={"View full-size photo: " + photo.caption}>
                  <img
                    src={pathTo("home", depth) + "images/nasa/nasa-" + photo.file + ".jpg"}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : detailKey === "exxonMobil" ? (
          <div className="exxonmobil-photos" aria-label="ExxonMobil internship photos">
            {[
              { file: "refinery-portrait", width: 1920, height: 2240,
                alt: "A person wearing an ExxonMobil hard hat, safety glasses, and coveralls at the refinery.",
                caption: "01 / At the refinery" },
              { file: "process-equipment", width: 1440, height: 1920,
                alt: "Large cylindrical process equipment with bolted covers and surrounding refinery piping.",
                caption: "02 / Process equipment" },
              { file: "refinery-view", width: 1440, height: 1920,
                alt: "An elevated view across refinery towers, structures, and interconnected piping.",
                caption: "03 / A view across the refinery" },
            ].map((photo) => (
              <figure className="exxonmobil-photo" key={photo.file}>
                <span className="note-tape" aria-hidden="true" />
                <a href={pathTo("home", depth) + "images/exxonmobil/exxonmobil-" + photo.file + ".jpg"}
                   aria-label={"View full-size photo: " + photo.caption}>
                  <img
                    src={pathTo("home", depth) + "images/exxonmobil/exxonmobil-" + photo.file + ".jpg"}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : detailKey === "blueOrigin" ? null : (
        <div className="case-photo-grid">
          <div className="sketch-placeholder">
            <span>ADD APPROVED TEAM OR WORKSPACE PHOTO</span>
          </div>
          <div className="sketch-placeholder">
            <span>ADD APPROVED PROJECT OR HARDWARE PHOTO</span>
          </div>
        </div>
        )}
      </section>
    </NotebookLayout>
  );
}
