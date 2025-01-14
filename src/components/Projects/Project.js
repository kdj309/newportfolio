import React from "react";
import "./Project.scss";
import projimg1 from "../../Assets/project1.jpg";
import projimg2 from "../../Assets/project2.jpg";
import projimg3 from "../../Assets/leetcodelogo.png";
import projimg4 from "../../Assets/project4.jpg";
import Projectitem from "./Projectitem";
export default function Project() {
  const projects = [
    {
      projectName: "Linkedin Clone",
      projectDesc: `User can perform operations on posts and comments ,can upload a photo`,
      projectLink: "https://web-linkedin.netlify.app/",
      gitrepo: "https://github.com/kdj309/Linkedin-clone",
      alterstyle: false,
      projectImg: projimg1,
      isActive: false
    },
    {
      projectName: "Online Notes",
      projectDesc: `Notes site where Users can perform store their notes and filter`,
      projectLink: "https://notessaver.netlify.app/",
      gitrepo: "https://github.com/kdj309/notescllient",
      projectImg: projimg2,
      alterstyle: false,
      isActive: false
    },
    {
      projectName: "Let's Code",
      projectDesc: `A LeetCode-inspired platform with features like problem solving, searching, and filtering.`,
      projectLink: "https://leetcode-clone-liard.vercel.app/",
      gitrepo: "https://github.com/kdj309/leetcode-clone",
      alterstyle: false,
      projectImg: projimg3,
      isActive: true
    },
    {
      projectName: "E-Commerce Web App",
      projectDesc: `The application offers a seamless and secure shopping experience with core functionalities`,
      projectLink: "https://myntraclone-inky.vercel.app/",
      gitrepo: "https://github.com/kdj309/e-commerce-frontend",
      alterstyle: false,
      projectImg: projimg4,
      isActive: true
    },
  ];
  return (
    <div className="ProjectMainContainer my-2">
      <div className="container Project-Section">
        {projects.map((proj) => (
          <Projectitem
            key={proj.projectName}
            projectTitle={proj.projectName}
            projectDescription={proj.projectDesc}
            projectLink={proj.projectLink}
            projectimg={proj.projectImg}
            alterstyle={proj.alterstyle}
            isActive={proj.isActive}
            gitrepo={proj.gitrepo}
          />
        ))}
      </div>
      <div className="Project-Background"></div>
    </div>
  );
}
