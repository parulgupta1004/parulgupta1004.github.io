
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Parul Gupta",
  title: "Hi, I'm Parul",
  subTitle: "A learner and an explorer of new domains, challenges and opportunities. Love to talk about ALGORITHMS and MACHINE LEARNING.",
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/parul100495",
  linkedin: "https://www.linkedin.com/in/parul-gupta-umass/",
  twitter: "https://twitter.com/parul100495",
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


  softwareSkills: [
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fab fa-pytorch"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ]
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
