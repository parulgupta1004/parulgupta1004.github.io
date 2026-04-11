
function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Parul Gupta",
    "url": "https://parulgupta1004.github.io/",
    "jobTitle": ["Engineering", "Tech Speaker", "Responsible AI"],
    "affiliation": [
    {
        "@type": "Organization",
        "name": "Meta"
    },
    {
        "@type": "Organization",
        "name": "University of Massachusetts Amherst"
    },
    {
        "@type": "Organization",
        "name": "Indian Institute of Technology Indore"
    }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/parulgupta04/",
      "https://www.instagram.com/parul_gupta_insights/",
      "https://developers.google.com/profile/u/parul-gupta",
      "https://github.com/parulgupta1004",
      "https://sessionize.com/parul-gupta/",
      "https://scholar.google.com/citations?user=YnZsWOAAAAAJ&hl=en",
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