import React from "react";
import styled from "styled-components";

import { Colors } from "../Global/Color";
import { NavBar } from "../Components/navBar";
import { LinkBar } from "../Components/linkBar";

export const Projects = () => {
  return (
    <Wrapper>
      <NavBar />
      <Title>A list of all projects that I did over the past year</Title>
      <ProjectsContainer>
        <Project>
          <h1>My First one</h1>
        </Project>
        <Project>
          <h1>My Second one</h1>
        </Project>
      </ProjectsContainer>
      <LinkBar />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  box-sizing: border-box;
  padding-top: 100px;
  width: 100%;
  height: 100%;
  background-color: ${Colors.background};
`;

const Title = styled.p`
  margin: 30px 0 30px 10%;
  font-size: 3rem;
  font-weight: bold;
  color: ${Colors.blue};
  text-shadow: 4px 3px 2px ${Colors.hoverBlue};
  font-family: "Indie Flower", cursive;
`;

const ProjectsContainer = styled.div`
  box-sizing: border-box;
  margin: auto;
  width: 80%;
  height: 65vh;
  /* background-color: gray; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Project = styled.div`
  height: 63vh;
  width: 400px;
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px;
  border: 2px solid ${Colors.blue};
  border-radius: 30px;
  box-shadow: 5px 5px 15px 5px #a3abb3;
`;
