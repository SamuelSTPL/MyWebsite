import React from "react";
import styled from "styled-components";

import { Colors } from "../Global/Color";
import { Logo } from "../Components/logo";
import { NavBar } from "../Components/navBar";
import { CurrentlyLearning } from "../Components/currentlyLearning";
import { Codewars } from "../Components/codewars";
import { SkillsDeckOfCards } from "../Components/Cards/skillsDeckOfCards";

export const Skillset = () => {
  return (
    <Wrapper>
      <NavBar />
      <Logo />
      <SkillsContainer>
        <SkillsDeckOfCards />
      </SkillsContainer>
      <LearningAndCodeWarContainer>
        <Codewars />
        <CurrentlyLearning />
      </LearningAndCodeWarContainer>
      <UnderConstruction>
        <Optimisation>
          This page is not yet optimised for a mobile version.
        </Optimisation>
      </UnderConstruction>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1300px) {
    padding-top: 100px;
  }
  @media (max-height: 850px) {
    padding-top: 100px;
  }
  @media (max-width: 500px) {
    padding-top: 140px;
    flex-direction: column;
  }
`;
const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LearningAndCodeWarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    padding-top: 40px;
    flex-direction: row;
    align-items: top;
  }
`;

const UnderConstruction = styled.div`
  display: none;
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
