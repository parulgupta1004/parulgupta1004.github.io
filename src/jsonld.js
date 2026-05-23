
function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Parul Gupta",
    "description": "Software Engineer at Meta, CPython Triager, Responsible AI advocate, and international tech speaker.",
    "url": "https://parulgupta1004.github.io/",
    "image": "https://parulgupta1004.github.io/parul.png",
    "jobTitle": ["Software Engineer", "Tech Speaker", "Responsible AI Advocate"],
    "worksFor": {
      "@type": "Organization",
      "name": "Meta"
    },
    "alumniOf": [
    {
        "@type": "Organization",
        "name": "University of Massachusetts Amherst"
    },
    {
        "@type": "Organization",
        "name": "Indian Institute of Technology Indore"
    }
    ],
    "knowsAbout": ["Python", "Machine Learning", "Responsible AI", "Fairlearn", "Ethical AI", "AI", "AI infrastructure", "CPython"],
    "sameAs": [
      "https://www.linkedin.com/in/parulgupta04/",
      "https://www.instagram.com/parul_gupta_insights/",
      "https://developers.google.com/profile/u/parul-gupta",
      "https://github.com/parulgupta1004",
      "https://sessionize.com/parul-gupta/",
      "https://scholar.google.com/citations?user=YnZsWOAAAAAJ&hl=en"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default JsonLd;