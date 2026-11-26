import "./SocialPostPreview.css";
import ExternalLink from "../externalLink/ExternalLink";

export default function SocialPostPreview({ post }) {
  return (
    <ExternalLink
      className="social-post-link social-post-preview"
      href={post.url}
      wrapLabel={false}
    >
      <img
        src={post.image}
        alt=""
        width="96"
        height="96"
        loading="lazy"
        decoding="async"
      />
      <span className="social-post-copy">
        <time dateTime={post.date}>{post.dateLabel}</time>
        <strong>{post.title}</strong>
        <span className="social-post-excerpt">{post.excerpt}</span>
      </span>
    </ExternalLink>
  );
}
