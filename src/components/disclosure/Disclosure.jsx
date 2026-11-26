import "./Disclosure.css";

export default function Disclosure({
  summary,
  expandedSummary = summary,
  className = "",
  children,
}) {
  return (
    <details className={["disclosure", className].filter(Boolean).join(" ")}>
      <summary className="archive-button">
        {summary === expandedSummary ? (
          summary
        ) : (
          <>
            <span className="archive-label-closed">{summary}</span>
            <span className="archive-label-open">{expandedSummary}</span>
          </>
        )}
        <span className="archive-icon" aria-hidden="true" />
      </summary>
      {children}
    </details>
  );
}
