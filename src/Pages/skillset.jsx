import React from "react";
import styled from "styled-components";

import { Logo } from "../Components/logo";
import { LinkBar } from "../Components/linkBar";
import { NavBar } from "../Components/navBar";
import { CurrentlyLearning } from "../Components/currentlyLearning";
import { Codewars } from "../Components/codewars";
import { SkillsDeckOfCards } from "../Components/Cards/skillsDeckOfCards";

export const Skillset = () => {
  return (
    <Wrapper>
      <NavBar />
      <Logo />
      <LinkBar />
      <SkillsContainer>
        <SkillsDeckOfCards />
      </SkillsContainer>
      <LearningAndCodeWarContainer>
        <Codewars />
        <CurrentlyLearning />
      </LearningAndCodeWarContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    326deg,
    rgba(223, 233, 243, 1) 0%,
    rgba(139, 160, 199, 1) 41%,
    rgba(223, 233, 243, 1) 100%
  );
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
    padding-top: 40px;
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
    visibility: hidden;
  }
`;
