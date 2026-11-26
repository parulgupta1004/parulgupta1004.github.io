export default function ExternalLink({
  href,
  children,
  className = "",
  showArrow = true,
  wrapLabel = true,
  ...props
}) {
  return (
    <a
      {...props}
      href={href}
      className={["external-link", className].filter(Boolean).join(" ")}
      target="_blank"
      rel="noopener noreferrer"
      data-external-arrow={showArrow ? "true" : "false"}
    >
      {wrapLabel ? (
        <span className="external-link-label">{children}</span>
      ) : (
        children
      )}
    </a>
  );
}
