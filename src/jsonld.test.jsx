import { schema } from "./jsonld";
import { site, personId, profileId, projectId, videoId } from "./data/site";
import { projects } from "./data/projects";
import { videos } from "./data/media";

it("links project roles and videos to the profile using resolvable entity IDs", () => {
  const entities = new Map(
    schema["@graph"].map((entity) => [entity["@id"], entity]),
  );
  expect(entities.size).toBe(2 + projects.length + videos.length);
  expect(entities.get(profileId).mainEntity["@id"]).toBe(personId);
  expect(entities.get(personId).knowsAbout).toContain("AI Ethics");
  for (const reference of entities.get(profileId).hasPart) {
    expect(entities.has(reference["@id"])).toBe(true);
  }
  for (const project of projects) {
    const entity = entities.get(projectId(project.id));
    expect(entity.codeRepository).toBe(project.repository);
    const role = project.role === "Creator" ? "creator" : "contributor";
    expect(entity[role]["@id"]).toBe(personId);
  }
  for (const video of videos) {
    const entity = entities.get(videoId(video.id));
    expect(entity["@type"]).toBe("VideoObject");
    expect(entity.name).toBe(video.title);
    expect(entity.thumbnailUrl).toBe(`${site.url}images/talk-${video.id}.webp`);
    expect(entity.uploadDate).toMatch(/^\d{4}-\d{2}-\d{2}T.*[+-]\d{2}:\d{2}$/);
    expect(Number.isFinite(Date.parse(entity.uploadDate))).toBe(true);
    expect(entity.contributor["@id"]).toBe(personId);
  }
});
