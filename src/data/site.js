import { greeting } from "../portfolio";

export const site = {
  url: "https://parulgupta1004.github.io/",
  name: greeting.username,
  title: "Parul Gupta | Responsible AI & Open Source Python",
  description:
    "Parul Gupta, software engineer at Meta, Fairlearn maintainer and Fair-Seldonian creator. Explore responsible AI projects, Python talks and community work.",
};

export const personId = `${site.url}#parul-gupta`;
export const profileId = `${site.url}#profile`;
export const projectId = (id) => `${site.url}#project-${id}`;
export const videoId = (id) => `${site.url}#video-${id}`;
