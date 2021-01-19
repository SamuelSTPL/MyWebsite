import React from "react";
import styled from "styled-components";
import { BsCheckCircle } from "react-icons/bs";

import { Colors } from "../Global/Color";
import { NavBar } from "../Components/navBar";
import { Logo } from "../Components/logo";
import { LinkBar } from "../Components/linkBar";
import { Globe } from "../Components/globe";
import ezCooking from "../images/EzCooking.png";
import portfolio from "../images/portfolio.png";

export const Projects = () => {
  return (
    <Wrapper>
      <Globe />
      <NavBar />
      <Logo />
      <MainContainer>
        <Title>Some projects that I have completed recently</Title>
        <ProjectsContainer>
          <Project>
            <ProjectTitle
              href="https://ez-cooking.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ez Cooking
            </ProjectTitle>
            <ProjectImg src={ezCooking} />
            <ProjectSubTitle>Technologies</ProjectSubTitle>
            <Ul>
              <Li>React</Li>
              <Li>Redux</Li>
              <Li>Node</Li>
              <Li>Express</Li>
              <Li>Firecloud</Li>
              <Li>Firebas Auth</Li>
            </Ul>
            <ProjectSubTitle>Challenges</ProjectSubTitle>
            <ul>
              <Challenge>
                <BsCheckCircle />
                Combine all technologies learned in the Bootcamp
              </Challenge>
              <Challenge>
                <BsCheckCircle />
                Mobile first, then desktop responsive
              </Challenge>
              <Challenge>
                <BsCheckCircle />
                How to use authentification + storing users on cloud
              </Challenge>
            </ul>
            <ProjectSubTitle>Deployed on:</ProjectSubTitle>
            <Ul>
              <Li>Netlify</Li>
              <Li>Heroku</Li>
            </Ul>
          </Project>
          <Project>
            <ProjectTitle
              href="https://samuelstpl.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </ProjectTitle>
            <ProjectImg src={portfolio} />
            <ProjectSubTitle>Technologies</ProjectSubTitle>
            <Ul>
              <Li>React</Li>
              <Li>CSS</Li>
              <Li>KeyFrames</Li>
              <Li>Styled-components</Li>
            </Ul>
            <ProjectSubTitle>Challenges</ProjectSubTitle>
            <ul>
              <Challenge2>
                <BsCheckCircle />
                Create many customs animations
              </Challenge2>
            </ul>
            <ProjectSubTitle>Deployed on:</ProjectSubTitle>
            <Ul>
              <Li>Netlify</Li>
            </Ul>
          </Project>
        </ProjectsContainer>
      </MainContainer>
      <Citation>And many more to come !</Citation>
      <LinkBar />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100%;
  background-color: ${Colors.background};
`;

const MainContainer = styled.div`
  width: 80%;
  margin: auto;
`;

const Title = styled.p`
  margin: 30px 0 30px 0;
  font-size: 3rem;
  font-weight: bold;
  color: ${Colors.blue};
  text-shadow: 4px 3px 2px ${Colors.hoverBlue};
  font-family: "Indie Flower", cursive;
`;

const ProjectsContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Project = styled.div`
  background-color: whitesmoke;
  height: 65vh;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 90px;
  border: 2px solid ${Colors.blue};
  border-radius: 30px;
  box-shadow: 5px 5px 15px 5px #a3abb3;
`;

const ProjectTitle = styled.a`
  font-size: 3rem;
  color: ${Colors.blue};
  text-decoration: underline;
  margin: 5px 0 15px 0;
`;

const ProjectImg = styled.img`
  border: 1px solid ${Colors.blue};
  width: 385px;
  border-radius: 20px;
`;

const ProjectSubTitle = styled.p`
  text-decoration: underline;
  margin: 5px 0 10px 0;
  font-size: 2rem;
  color: ${Colors.blue};
`;

const Ul = styled.ul`
  width: 100%;
  columns: 2;
  text-align: center;
  text-decoration: none !important;
`;

const Li = styled.li`
  text-decoration: none !important;
  margin: 0 20px;
  font-size: 1.3rem;
  color: ${Colors.blue};
`;

const Challenge = styled(Li)`
  width: 90%;
  margin: auto;
`;

const Challenge2 = styled(Li)`
  width: 100%;
  margin: auto;
`;

const Citation = styled.p`
  position: absolute;
  top: 70%;
  right: 8%;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${Colors.blue};
`;
