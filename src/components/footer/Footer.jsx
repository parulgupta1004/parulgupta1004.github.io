import ExternalLink from "../externalLink/ExternalLink";
import { footerProfiles } from "../../data/media";
import { greeting } from "../../portfolio";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <p>
          © {new Date().getFullYear()} {greeting.username}
        </p>
        <nav className="footer-links" aria-label="Social profiles">
          {footerProfiles.map((profile) => (
            <ExternalLink
              key={profile.name}
              href={profile.url}
              showArrow={false}
            >
              {profile.name}
            </ExternalLink>
          ))}
        </nav>
        <a href="#greeting" className="footer-top">
          <span className="link-label">Back to top</span>{" "}
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
