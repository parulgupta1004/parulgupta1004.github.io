import "./Greeting.css";
import ExternalLink from "../../components/externalLink/ExternalLink";
import { greeting, socialMediaLinks } from "../../portfolio";

export default function Greeting() {
  return (
    <section
      className="greet-main page-container"
      id="greeting"
      aria-labelledby="greeting-title"
    >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <p className="eyebrow">Responsible AI & Python</p>
          <h1 className="greeting-text" id="greeting-title">
            {greeting.title}
          </h1>
          <div className="greeting-roles">
            <p className="greeting-text-p">{greeting.subTitle}</p>
            <p className="greeting-text-p2">
              <ExternalLink href={greeting.fairlearnUrl} showArrow={false}>
                {greeting.subTitle3}
              </ExternalLink>
            </p>
            <p className="greeting-text-p2">
              <ExternalLink href={greeting.fairSeldonianUrl} showArrow={false}>
                {greeting.subTitle4}
              </ExternalLink>
            </p>
          </div>
          <div className="greeting-actions">
            <a className="text-link greeting-primary" href="#talks">
              <span className="link-label">Selected talks</span>{" "}
              <span aria-hidden="true">↓</span>
            </a>
            <ExternalLink
              className="text-link"
              href={socialMediaLinks.linkedin}
            >
              LinkedIn
            </ExternalLink>
          </div>
        </div>
        <figure className="greeting-image-div">
          <div className="portrait-frame">
            <img
              alt="Parul Gupta speaking at a technology conference"
              src="/images/parul-gupta-speaking.webp"
              srcSet="/images/parul-gupta-speaking-small.webp 520w, /images/parul-gupta-speaking.webp 1040w"
              sizes="(max-width: 768px) calc(100vw - 60px), (max-width: 1280px) 45vw, 540px"
              width="1040"
              height="708"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
