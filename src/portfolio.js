
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Parul Gupta",
  title: "Parul Gupta",
  subTitle: "Engineering @ Meta",
  paragraph_emp: "10+ international talks ",
  paragraph: "on ongoing advancements in AI technology and women in the tech industry.",
  paragraph2_emp: "CPython Triager",
  paragraph2: ", Python Software Foundation (PSF).",
  paragraph3_emp: "Early contributor to Fairlearn",
  paragraph3: ", a Python library for fairness of AI systems.",
};

// Your Social Media Link
const socialMediaLinks = {
  github: "https://github.com/parulgupta1004",
  linkedin: "https://www.linkedin.com/in/parulgupta04/",
  instagram: "https://www.instagram.com/parul_gupta_insights/",
};

const acadSection = {
  title: "Academics",
  subTitle: "EDUCATION",
  thunder: emoji("⚡ "),
  subTitle2: "CERTIFICATION",

  softwareSkills1: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    }

  ],
};

const Workex = {
  title: "Work Experience",
  subtitle: "Companies I have worked in..."
};

const projectSection = {
  title: "Machine Learning Projects",
  subtitle: "Some Cool Stuff that I have done in machine learning...",
  title2: "Other Projects"
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "I love to write and share the knowledge gained..."
};

export { greeting, socialMediaLinks, acadSection, Workex, projectSection, blogSection};
