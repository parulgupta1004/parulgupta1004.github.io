import { socialMediaLinks } from "../portfolio";
import socialPosts from "./social-posts.json";

export const videos = [
  {
    id: "BdTv07T7hmg",
    title: "Python Packaging Expressway: A Path Worth Taking",
    event: "PyBeach · 2025",
  },
  {
    id: "x-xQj6EcQbI",
    title: "PyLadies Panel: Experiences in Tech & Open Source",
    event: "PyCascades · 2025",
  },
  {
    id: "GqIgy_wVNfA",
    title: "Accelerating AI Lifecycle: Fast ML Prototyping Insights",
    event: "Conf42 Python · 2025",
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
