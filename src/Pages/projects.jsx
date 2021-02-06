import React from "react";
import styled from "styled-components";

import { Colors } from "../Global/Color";
import { NavBar } from "../Components/navBar";
import { Logo } from "../Components/logo";
import { LinkBar } from "../Components/linkBar";
import { Globe } from "../Components/globe";
import { ProjectDeckOfCards } from "../Components/Cards/projectDeckOfCard";

export const Projects = () => {
  return (
    <Wrapper>
      <NavBar />
      <Logo />
      <MainContainer>
        <ProjectsContainer>
          <Title>Some projects that I have completed recently</Title>
          <ProjectDeckOfCards />
        </ProjectsContainer>
        <Globe />
      </MainContainer>
      <LinkBar />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-top: 80px;
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.background};
  @media (max-width: 500px) {
  }
`;

const MainContainer = styled.div`
  width: 80%;
  margin: 45px auto auto auto;
  height: 850px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1440px) {
    height: 750px;
    margin: 0px auto;
  }
  @media (max-width: 1024px) {
    height: 700px;
    margin: 20px auto;
    width: 90%;
  }
  @media (max-width: 770px) {
    height: 700px;
    margin: 0px auto;
    width: 95%;
  }
  @media (max-width: 500px) {
    width: 450px;
    height: 600px;
    width: 95%;
    margin: 10px auto auto auto;
  }
`;

const Title = styled.p`
  margin: auto auto 10px auto;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${Colors.blue};
  text-shadow: 4px 3px 2px ${Colors.hoverBlue};
  font-family: "Indie Flower", cursive;
  @media (max-width: 1440px) {
    font-size: 2rem;
    margin: auto auto 60px auto;
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    margin: -30px auto 60px auto;
  }
  @media (max-width: 770px) {
    font-size: 1.5rem;
    margin: -30px auto 70px auto;
  }
  @media (max-width: 500px) {
    font-size: 1.3rem;
    margin: -60px auto 90px auto;
  }
`;

const ProjectsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
  @media (max-width: 500px) {
  }
`;
