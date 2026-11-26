import Disclosure from "../disclosure/Disclosure";
import ExternalLink from "../externalLink/ExternalLink";
import { SectionHeading } from "../section/Section";

function EngagementRow({ entry }) {
  return (
    <li className="engagement-row">
      <span className="engagement-date">{entry.date}</span>
      <p>
        {entry.parts.map((part, index) =>
          part.href ? (
            <ExternalLink
              key={`${part.href}-${index}`}
              href={part.href}
              showArrow={false}
            >
              {part.text}
            </ExternalLink>
          ) : (
            part.text
          ),
        )}
      </p>
    </li>
  );
}

export default function EngagementList({
  id,
  title,
  topics,
  entries,
  archiveLabel,
  previewCount = 3,
}) {
  const recentEntries = entries.slice(0, previewCount);
  const olderEntries = entries.slice(previewCount);
  const renderEntry = (entry) => <EngagementRow key={entry.id} entry={entry} />;

  return (
    <section
      id={id}
      className={`portfolio-section ${id}-section`}
      aria-labelledby={`${id}-title`}
    >
      <div className="page-container section-layout">
        <div className="section-intro">
          <SectionHeading id={id} title={title} topics={topics} />
        </div>
        <div className="engagements">
          <ol className="engagement-list">{recentEntries.map(renderEntry)}</ol>
          {olderEntries.length > 0 && (
            <Disclosure
              className="engagement-archive"
              summary={`View all ${entries.length} ${archiveLabel}`}
              expandedSummary={`Show fewer ${archiveLabel}`}
            >
              <ol className="engagement-list" start={previewCount + 1}>
                {olderEntries.map(renderEntry)}
              </ol>
            </Disclosure>
          )}
        </div>
      </div>
    </section>
  );
}
