import "./OpenSource.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Section from "../../components/section/Section";
import { projects } from "../../data/projects";

export default function OpenSource() {
  return (
    <Section id="opensource" title="Open source">
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
