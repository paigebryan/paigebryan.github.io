import { siteContent } from "../content/siteContent";
import { pathTo } from "./pathUtils";

export default function NotebookLayout({
  depth,
  activePage,
  children,
  pageClass = ""
}) {
  return (
    <div className="portfolio-shell">
      <div className={`notebook ${pageClass}`}>

        <header className="notebook-header">
          <a className="notebook-mark" href={pathTo("home", depth)}>
            ENGINEERING NOTEBOOK
          </a>

          <nav className="notebook-tabs" aria-label="Portfolio sections">
            {siteContent.navigation.map((item, index) => (
              <a
                key={item.key}
                href={pathTo(item.key, depth)}
                className={`tab tab-${index + 1}`}
                aria-current={activePage === item.key ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <main>{children}</main>

        <footer className="notebook-footer">
          <span>Paige Bryan</span>
          <a href={pathTo("resume", depth)}>Résumé + contact</a>
        </footer>
      </div>
    </div>
  );
}
