import "./ProjectCard.css";
import ExternalLink from "../externalLink/ExternalLink";

function DownloadStats({ stats }) {
  return (
    <p className="project-downloads">
      <strong>{stats.lastMonth.toLocaleString("en-US")}</strong>
      <span>Monthly downloads</span>
      <small>
        <ExternalLink href={stats.source}>PyPI Stats</ExternalLink>
        {" · Updated "}
        <time dateTime={stats.asOf}>{stats.asOf}</time>
      </small>
    </p>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="opensource-card">
      <p className="project-role">{project.role}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      {project.stats && <DownloadStats stats={project.stats} />}
      <ExternalLink
        className="text-link"
        href={project.url}
        aria-label={`${project.name}: ${project.linkLabel}`}
      >
        {project.linkLabel}
      </ExternalLink>
    </article>
  );
}
