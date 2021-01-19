import React from "react";
import styled from "styled-components";

import { Colors } from "../Global/Color";
import { Logo } from "../Components/logo";
import { NavBar } from "../Components/navBar";
import { LinkBar } from "../Components/linkBar";
import { CurrentlyLearning } from "../Components/currentlyLearning";
import waves from "../images/waves.png";
import sand from "../images/sand.jpg";
import { crashingWaves } from "../Global/keyframesAnimation";
import { Codewars } from "../Components/codewars";

export const Skillset = () => {
  return (
    <Wrapper>
      <NavBar />
      <LinkBar />
      <Logo />
      <Codewars />
      <CurrentlyLearning />
      <SkillsWrapper>
        <SubTitle>Front-End</SubTitle>
        <SkillsContainer>
          <SkillName>Styling / Desing</SkillName>
          <SkillBarBackground>
            <SkillBars width={"80%"}></SkillBars>
          </SkillBarBackground>
        </SkillsContainer>
        <SkillsContainer>
          <SkillName>HTML / CSS (Animations & Responsive Design)</SkillName>
          <SkillBarBackground>
            <SkillBars width={"84%"}></SkillBars>
          </SkillBarBackground>
        </SkillsContainer>
        <SkillsContainer>
          <SkillName>JavaScript (ES6 & Vanilla)</SkillName>
          <SkillBarBackground>
            <SkillBars width={"80%"}></SkillBars>
          </SkillBarBackground>
        </SkillsContainer>
        <SkillsContainer>
          <SkillName>React (Hooks & Context)</SkillName>
          <SkillBarBackground>
            <SkillBars width={"75%"}></SkillBars>
          </SkillBarBackground>
        </SkillsContainer>
        <SkillsContainer>
          <SkillName>Redux</SkillName>
          <SkillBarBackground>
            <SkillBars width={"55%"}></SkillBars>
          </SkillBarBackground>
        </SkillsContainer>
        <SkillsContainer>
          <SkillName>Styled-Components</SkillName>
          <SkillBarBackground>
            <SkillBars width={"75%"}></SkillBars>
          </SkillBarBackground>
        </SkillsContainer>
        <SubTitle>Back-End</SubTitle>
        <SkillsContainer>
          <SkillName>Node</SkillName>
          <SkillBarBackground>
            <SkillBars width={"63%"}></SkillBars>
          </SkillBarBackground>
        </SkillsContainer>
        <SkillsContainer>
          <SkillName>Express</SkillName>
          <SkillBarBackground>
            <SkillBars width={"65%"}></SkillBars>
          </SkillBarBackground>
        </SkillsContainer>
        <SkillsContainer>
          <SkillName>Python</SkillName>
          <SkillBarBackground>
            <SkillBars width={"25%"}></SkillBars>
          </SkillBarBackground>
        </SkillsContainer>
        <SubTitle>Databases</SubTitle>
        <SkillsContainer>
          <SkillName>Firebase (Firestore & Auth)</SkillName>
          <SkillBarBackground>
            <SkillBars width={"55%"}></SkillBars>
          </SkillBarBackground>
        </SkillsContainer>
        <SkillsContainer>
          <SkillName>MongoDB</SkillName>
          <SkillBarBackground>
            <SkillBars width={"20%"}></SkillBars>
          </SkillBarBackground>
        </SkillsContainer>
      </SkillsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 120px;
  width: 100%;
  height: 100%;
  background-color: ${Colors.background};
`;
const SkillsWrapper = styled.div`
  width: 50%;
  margin-left: 12%;
  border: 3px solid ${Colors.blue};
  background-color: whitesmoke;
  border-radius: 50px;
  box-shadow: 5px 5px 15px 5px #a3abb3;
  padding: 0 20px 30px 20px;
`;

const SkillsContainer = styled.div`
  width: 100%;
  margin: 3px;
`;

const SkillBarBackground = styled.div`
  background-image: url(${sand});
  background-size: cover;
  width: 100%;
  border-radius: 0 20px 20px 0;
`;

const SkillBars = styled.div`
  width: ${(props) => props.width};
  height: 23px;
  background-image: url(${waves});
  background-size: cover;
  border-radius: 0 20px 20px 0;

  &:hover {
    animation: ${crashingWaves} 10s linear infinite;
  }
`;

const SubTitle = styled.p`
  color: ${Colors.blue};
  font-size: 1.7rem;
  margin: 10px 0 -10px 0;
  text-align: center;
  font-weight: bolder;
`;

const SkillName = styled.p`
  color: ${Colors.blue};
  font-size: 1.4rem;
  margin: 5px 0;
  font-weight: bold;
`;
