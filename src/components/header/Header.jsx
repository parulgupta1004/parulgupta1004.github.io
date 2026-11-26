import ExternalLink from "../externalLink/ExternalLink";
import { navigation } from "../../data/navigation";
import { greeting, socialMediaLinks } from "../../portfolio";
import useActiveSection from "../../hooks/useActiveSection";
import useDismissibleMenu from "../../hooks/useDismissibleMenu";
import "./Header.css";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSection(navigation);
  const menu = useDismissibleMenu();
  const selectSection = (id) => {
    setActiveSection(id);
    menu.close();
  };

  return (
    <header className="site-header" ref={menu.containerRef}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="page-container header-inner">
        <a
          href="#greeting"
          className="site-brand"
          onClick={() => selectSection("greeting")}
        >
          <span className="brand-monogram" aria-hidden="true">
            PG
          </span>
          <span>{greeting.username}</span>
        </a>
        <button
          className="menu-toggle"
          ref={menu.toggleRef}
          type="button"
          aria-expanded={menu.isOpen}
          aria-controls="site-navigation"
          onClick={menu.toggle}
        >
          {menu.isOpen ? "Close" : "Menu"}
          <span aria-hidden="true">{menu.isOpen ? "×" : "+"}</span>
        </button>
        <nav
          id="site-navigation"
          className={`site-navigation${menu.isOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={() => selectSection(id)}
            >
              {label}
            </a>
          ))}
          <ExternalLink
            className="nav-connect"
            href={socialMediaLinks.linkedin}
          >
            LinkedIn
          </ExternalLink>
        </nav>
      </div>
    </header>
  );
}
