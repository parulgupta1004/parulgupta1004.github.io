export function SectionHeading({ id, title, topics = [] }) {
  return (
    <>
      <h2 id={`${id}-title`}>{title}</h2>
      {topics.length > 0 && (
        <ul className="topic-list" aria-label="Areas of focus">
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function Section({ id, title, className = "", children }) {
  return (
    <section
      id={id}
      className={["portfolio-section", className].filter(Boolean).join(" ")}
      aria-labelledby={`${id}-title`}
    >
      <div className="page-container">
        <div className="section-heading">
          <SectionHeading id={id} title={title} />
        </div>
        {children}
      </div>
    </section>
  );
}
