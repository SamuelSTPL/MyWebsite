import ezCooking from "../images/EzCooking.png";
import portfolio from "../images/portfolio.png";

export const listOfProjects = [
  {
    name: "Ez Cooking",
    image: ezCooking,
    size: "Large",
    tooltip: "More than three weeks",
    link: "https://ez-cooking.netlify.app",
    description: "An easy to use recipe-finder with many filters available",
    technologies: [
      "React",
      "Redux",
      "Express",
      "Node",
      "FireStore",
      "Firebase Auth",
    ],
    challenges: [
      "Combine all technologies learned in Concordia' Bootcamp",
      "Mobile First",
      "Responsiveness",
      "Learned how to use authentification",
    ],
    deployed: ["Netlify", "Heroku"],
  },
  {
    name: "Portfolio",
    image: portfolio,
    size: "Medium",
    tooltip: "1 - 2 weeks",
    link: "https://samuelstpl.netlify.app/",
    description: "My personal web page",
    technologies: ["React", "Css Keyframes", "Styled-components"],
    challenges: [
      "Create many custom animations with CSS & JavaScript",
      "Fully Responsive",
    ],
    deployed: ["Netlify"],
  },
];
