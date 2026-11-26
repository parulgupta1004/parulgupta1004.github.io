import { socialMediaLinks } from "./portfolio";
import { projects } from "./data/projects";
import { videos } from "./data/media";
import { site, personId, profileId, projectId, videoId } from "./data/site";

export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      description:
        "Software engineer at Meta, Fairlearn maintainer, creator of Fair-Seldonian, CPython triager, and speaker on responsible AI and Python.",
      url: site.url,
      image:
        "https://parulgupta1004.github.io/images/parul-gupta-speaking.webp",
      jobTitle: "Software Engineer",
      worksFor: { "@type": "Organization", name: "Meta" },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of Massachusetts Amherst",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Indian Institute of Technology Indore",
        },
      ],
      knowsAbout: [
        "Python",
        "Machine Learning",
        "Responsible AI",
        "AI Ethics",
        "Machine Learning Fairness",
        "Fairlearn",
        "Fair-Seldonian",
        "CPython",
      ],
      sameAs: [
        ...Object.values(socialMediaLinks),
        "https://sessionize.com/parul-gupta/",
        "https://scholar.google.com/citations?user=YnZsWOAAAAAJ&hl=en",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": profileId,
      url: site.url,
      name: site.title,
      mainEntity: { "@id": personId },
      hasPart: [
        ...projects.map((project) => ({ "@id": projectId(project.id) })),
        ...videos.map((video) => ({ "@id": videoId(video.id) })),
      ],
    },
    ...projects.map((project) => ({
      "@type": "SoftwareSourceCode",
      "@id": projectId(project.id),
      name: project.name,
      url: project.id === "cpython" ? project.repository : project.url,
      codeRepository: project.repository,
      programmingLanguage: "Python",
      description: project.description,
      [project.role === "Creator" ? "creator" : "contributor"]: {
        "@id": personId,
      },
      isPartOf: { "@id": profileId },
    })),
    ...videos.map((video) => ({
      "@type": "VideoObject",
      "@id": videoId(video.id),
      name: video.title,
      description: video.description,
      url: `https://www.youtube.com/watch?v=${video.id}`,
      thumbnailUrl: `${site.url}images/talk-${video.id}.webp`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
      uploadDate: video.uploadDate,
      contributor: { "@id": personId },
      isPartOf: { "@id": profileId },
    })),
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
