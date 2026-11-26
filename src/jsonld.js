import { greeting, socialMediaLinks } from "./portfolio";

export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://parulgupta1004.github.io/#parul-gupta",
      name: "Parul Gupta",
      description: "Software engineer at Meta, Fairlearn maintainer, creator of Fair-Seldonian, CPython triager, and speaker on responsible AI and Python.",
      url: "https://parulgupta1004.github.io/",
      image: "https://parulgupta1004.github.io/images/parul-gupta-speaking.webp",
      jobTitle: "Software Engineer",
      worksFor: { "@type": "Organization", name: "Meta" },
      alumniOf: [ { "@type": "CollegeOrUniversity", name: "University of Massachusetts Amherst" }, { "@type": "CollegeOrUniversity", name: "Indian Institute of Technology Indore" } ],
      knowsAbout: ["Python", "Machine Learning", "Responsible AI", "Machine Learning Fairness", "Fairlearn", "Fair-Seldonian", "CPython"],
      sameAs: [...Object.values(socialMediaLinks), "https://sessionize.com/parul-gupta/", "https://scholar.google.com/citations?user=YnZsWOAAAAAJ&hl=en"],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://parulgupta1004.github.io/#profile",
      url: "https://parulgupta1004.github.io/",
      name: "Parul Gupta | Responsible AI & Open Source Python",
      mainEntity: { "@id": "https://parulgupta1004.github.io/#parul-gupta" },
    },
    {
      "@type": "SoftwareSourceCode",
      name: "Fairlearn",
      url: greeting.fairlearnUrl,
      programmingLanguage: "Python",
      description: "A Python package to assess and improve fairness of machine learning models.",
      contributor: { "@id": "https://parulgupta1004.github.io/#parul-gupta" },
    },
    {
      "@type": "SoftwareSourceCode",
      name: "Fair-Seldonian",
      url: greeting.fairSeldonianUrl,
      programmingLanguage: "Python",
      description: "A Python library for building machine learning models with probabilistic fairness and safety guarantees.",
      creator: { "@id": "https://parulgupta1004.github.io/#parul-gupta" },
    },
  ],
};

export default function JsonLd() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}
