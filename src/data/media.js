import { socialMediaLinks } from "../portfolio";
import socialPosts from "./social-posts.json";

export const videos = [
  {
    id: "BdTv07T7hmg",
    title: "Python Packaging Expressway: A Path Worth Taking",
    event: "PyBeach · 2025",
    description: "Parul Gupta's talk on Python packaging at PyBeach 2025.",
    uploadDate: "2025-10-03T18:24:37-07:00",
  },
  {
    id: "x-xQj6EcQbI",
    title: "PyLadies Panel: Experiences in Tech & Open Source",
    event: "PyCascades · 2025",
    description:
      "A PyLadies panel on experiences in technology and open source at PyCascades 2025, featuring Parul Gupta.",
    uploadDate: "2025-02-25T22:25:04-08:00",
  },
  {
    id: "GqIgy_wVNfA",
    title: "Accelerating AI Lifecycle: Fast ML Prototyping Insights",
    event: "Conf42 Python · 2025",
    description:
      "Parul Gupta's talk on rapid machine learning prototyping at Conf42 Python 2025.",
    uploadDate: "2025-02-06T11:00:06-08:00",
  },
];

export const socialProfiles = [
  {
    name: "LinkedIn",
    url: socialMediaLinks.linkedin,
    posts: socialPosts.LinkedIn,
  },
  {
    name: "Instagram",
    url: socialMediaLinks.instagram,
    posts: socialPosts.Instagram,
  },
];

export const footerProfiles = [
  { name: "GitHub", url: socialMediaLinks.github },
  { name: "LinkedIn", url: socialMediaLinks.linkedin },
  { name: "Instagram", url: socialMediaLinks.instagram },
  { name: "Google Developer", url: socialMediaLinks.google_dev },
];
