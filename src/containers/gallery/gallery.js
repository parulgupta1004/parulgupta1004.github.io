import Disclosure from "../../components/disclosure/Disclosure";
import ExternalLink from "../../components/externalLink/ExternalLink";
import Section from "../../components/section/Section";
import SocialPostPreview from "../../components/socialPostPreview/SocialPostPreview";
import VideoCard from "../../components/videoCard/VideoCard";
import { socialProfiles, videos } from "../../data/media";
import "./gallery.css";

function SocialProfilePosts({ profile }) {
  return (
    <article className="social-update">
      <ExternalLink className="text-link" href={profile.url}>
        {profile.name}
      </ExternalLink>
      <div className="social-links">
        <ul aria-label={`Selected ${profile.name} posts`}>
          {profile.posts.map((post) => (
            <li key={post.url}>
              <SocialPostPreview post={post} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Gallery() {
  return (
    <Section id="gallery" title="Talk recordings" className="gallery-section">
      <div className="media-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <Disclosure className="social-archive" summary="Community updates">
        <div className="social-updates">
          {socialProfiles.map((profile) => (
            <SocialProfilePosts key={profile.name} profile={profile} />
          ))}
        </div>
      </Disclosure>
    </Section>
  );
}
