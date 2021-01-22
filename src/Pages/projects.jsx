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
            <ProjectSubtitleSmall>Technologies</ProjectSubtitleSmall>
            <Ul>
              <Li>React</Li>
              <Li>CSS</Li>
              <Li>KeyFrames</Li>
              <Li>Styled-components</Li>
            </Ul>
            <ProjectSubtitleSmall>Challenges</ProjectSubtitleSmall>
            <ul>
              <Challenge2>
                <BsCheckCircle />
                Create many customs animations
              </Challenge2>
            </ul>
            <ProjectSubtitleSmall>Deployed on:</ProjectSubtitleSmall>
            <Ul>
              <Li>Netlify</Li>
            </Ul>
          </Project>
        </ProjectsContainer>
      </MainContainer>
      <LinkBar />
      <UnderConstruction>
        <Optimisation>
          This page is not yet optimised for a mobile version.
        </Optimisation>
      </UnderConstruction>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-top: 80px;
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.background};
  @media (max-width: 500px) {
    padding-top: 0px;
    max-height: 100%;
    position: relative;
    overflow: hidden;
  }
`;

const MainContainer = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  @media (max-width: 500px) {
    width: 95%;
  }
`;

const Title = styled.p`
  margin: -0.3vw 0 30px 1.2vw;
  font-size: 2vw;
  font-weight: bold;
  color: ${Colors.blue};
  text-shadow: 4px 3px 2px ${Colors.hoverBlue};
  font-family: "Indie Flower", cursive;
  @media (max-width: 500px) {
    font-size: 1.3rem;
    text-align: center;
    padding-top: 70px;
  }
`;

const ProjectsContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: left;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Project = styled.div`
  background-color: whitesmoke;
  height: 100%;
  min-height: 590px;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2vw;
  margin-top: 2vw;
  border: 2px solid ${Colors.blue};
  border-radius: 30px;
  box-shadow: 5px 5px 15px 5px #a3abb3;
  @media (max-width: 500px) {
    width: 95%;
    margin-top: 30px;
  }
`;

const ProjectTitle = styled.a`
  font-size: 1.5rem;
  color: ${Colors.blue};
  text-decoration: underline;
  margin: 5px 0 10px 0;
`;

const ProjectImg = styled.img`
  border: 1px solid ${Colors.blue};
  width: 95%;
  border-radius: 20px;
`;

const ProjectSubTitle = styled.p`
  text-decoration: underline;
  margin: 5px 0 10px 0;
  font-size: 1.5rem;
  color: ${Colors.blue};
`;

const ProjectSubtitleSmall = styled(ProjectSubTitle)`
  margin: 15px 0 10px 0;
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
  font-size: 1.2rem;
  color: ${Colors.blue};
`;

const Challenge = styled(Li)`
  margin: 5px auto;
  width: 90%;
`;

const Challenge2 = styled(Li)`
  margin: 8px auto;
  width: 90%;
`;

const UnderConstruction = styled.div`
  visibility: none;
  @media (max-width: 500px) {
    visibility: visible;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: ${Colors.hoverBlue};
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Optimisation = styled.p`
  visibility: hidden;
  @media (max-width: 500px) {
    visibility: visible;
  }
`;
