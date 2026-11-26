import "./VideoCard.css";
import { useState } from "react";
import ExternalLink from "../externalLink/ExternalLink";

export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="video-card">
      <div className="video-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="video-preview"
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
          >
            <img
              src={`/images/talk-${video.id}.webp`}
              alt=""
              width="480"
              height="360"
              loading="lazy"
              decoding="async"
            />
            <span className="video-play" aria-hidden="true">
              ▶
            </span>
          </button>
        )}
      </div>
      <div className="media-card-body">
        <p className="media-meta">{video.event}</p>
        <h3>{video.title}</h3>
        <ExternalLink
          className="text-link"
          href={`https://www.youtube.com/watch?v=${video.id}`}
        >
          Watch on YouTube
        </ExternalLink>
      </div>
    </article>
  );
}
