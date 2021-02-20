import ezCooking from "../images/EzCooking.png";
import portfolio from "../images/portfolio.png";

export const listOfProjects = [
  {
    name: "Ez Cooking - Front End",
    image: ezCooking,
    size: "Large",
    tooltip: "More than three weeks",
    link: "https://ez-cooking.netlify.app",
    description: "An easy to use recipe-finder with many filters available",
    technologies: ["React", "Redux"],
    challenges: [
      "Mobile First",
      "Responsiveness",
      "Makes custom requests to the server depending on wich filters is selected by the user",
      "The user is able to save favorite recipes",
      "Using REDUX to store all the recipes Data"
    ],
    deployed: ["Netlify"]
  },
  {
    name: "Ez Cooking - Back End",
    image: ezCooking,
    size: "Large",
    tooltip: "More than three weeks",
    link: "https://ez-cooking.netlify.app",
    description: "An easy to use recipe-finder with many filters available",
    technologies: ["Express", "Node", "FireStore", "Firebase"],
    challenges: [
      "Learned how to use authentification",
      "Uses of RESTful APIs",
      "Sorting data received from the Recipe API, before sending everything to the FE",
      "Using MVC principle"
    ],
    deployed: ["Heroku"]
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
      "Fully Responsive"
    ],
    deployed: ["Netlify"]
  }
];
