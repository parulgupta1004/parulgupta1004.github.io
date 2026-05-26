import { InstagramEmbed, LinkedInEmbed, YouTubeEmbed } from 'react-social-media-embed';
import "./gallery.css";
import "../projects/Projects.css";
import "../community/community.css";

import { Fade } from "react-reveal";

const instagramPosts = [
  'https://www.instagram.com/p/DYdGxHqkoKx/?utm_source=ig_embed&amp;utm_campaign=loading',
  'https://www.instagram.com/p/DP-G9j-D1sS/?utm_source=ig_embed&amp;utm_campaign=loading',
  'https://www.instagram.com/p/DAguvWPypc8/?utm_source=ig_embed&amp;utm_campaign=loading',
];

const linkedinPosts = [
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7342271834983231488",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7067199153621135362",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:6719411812103716864",
];

const youtubeVideos = [
  "https://www.youtube.com/watch?v=BdTv07T7hmg",
  "https://www.youtube.com/watch?v=x-xQj6EcQbI",
  "https://www.youtube.com/watch?v=GqIgy_wVNfA"
]

export default function Gallery() {
  return (
    <Fade bottom duration={1000}>
    <div id="gallery" className="main" >
        <div className="project-main-div">
          <div className="project-header">
        <h2 className="heading project-heading">Gallery</h2>    
        <div className="instagram-gallery">

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
              marginTop: "24px",
            }}
          >
            {youtubeVideos.map((url) => (
              <YouTubeEmbed key={url} url={url} width="100%" height={220}/>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              marginTop: "24px",
            }}
          >
            {linkedinPosts.map((embedUrl, i) => (
              <div
                style={{
                  position: "center",
                }}
              >
                <LinkedInEmbed
                  url={embedUrl}
                  width="100%"
                  height={320}
                />
                <div
                  style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "24px",
                  }}
                  >
                <a
                  href={embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-button"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#004182";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0A66C2";
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.11H5.67V18H8.34V10.11ZM7 6.5A1.56 1.56 0 1 0 7 9.62A1.56 1.56 0 1 0 7 6.5ZM18.33 13.55C18.33 11.17 17.06 10.06 15.37 10.06C14 10.06 13.39 10.82 13.05 11.36V10.11H10.39C10.42 10.94 10.39 18 10.39 18H13.05V13.6C13.05 13.37 13.07 13.14 13.14 12.98C13.32 12.52 13.73 12.04 14.43 12.04C15.36 12.04 15.74 12.75 15.74 13.79V18H18.4L18.33 13.55Z" />
                  </svg>
                  Open on LinkedIn
                </a>
                </div>
              </div>
            ))}
          </div>
          
          <div
          style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              marginTop: "24px",
          }}
          >
          {instagramPosts.map((url, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                minHeight: "540px",
                display: "flex",
                justifyContent: "center",
                overflow: "visible",
              }}
            >
              <InstagramEmbed
                url={url}
                width={328}
              />
            </div>
          ))}
          </div>
          <div
          style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "24px",
          }}
          >
          <a
              href="https://www.instagram.com/parul_gupta_insights/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
              padding: "12px 24px",
              backgroundColor: "#E1306C",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              }}
          >
              More on Instagram
          </a>
          </div>

       
        
      </div>

       </div>
       </div>
        </div>
      </Fade>
  );
}