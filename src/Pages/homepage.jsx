import React from "react";
import styled from "styled-components";

import { Colors } from "../Global/Color";
import { NavBar } from "../Components/navBar";
import { LinkBar } from "../Components/linkBar";
import { Logo } from "../Components/logo";
import profileImg from "../images/LinkedProfile.jpg";
import backgroundImg from "../images/world.png";

export const Homepage = () => {
  return (
    <Wrapper>
      <NavBar />
      <LinkBar />
      <Logo />
      <BackgroundImgContainer>
        <BackgroundImg src={backgroundImg} />
      </BackgroundImgContainer>
      <MainContentContainer>
        <ProfileImg src={profileImg} />
        <TextContainer>
          <Overlay />
          <Title>" Connecting the world, a cup of coffee at a time "</Title>
        </TextContainer>
      </MainContentContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${Colors.background};
  padding-top: 15px;
  max-width: 100%;
`;

const BackgroundImgContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
  }
`;

const BackgroundImg = styled.img`
  width: 90%;
  height: auto;
  @media (max-width: 1024px) {
    width: 100%;
    height: 90vh;
    margin-top: 30px;
  }
  @media (max-width: 770px) {
    width: 100%;
    height: 70vh;
    margin-top: 100px;
  }
  @media (max-width: 500px) {
    margin-top: 40%;
    width: 100%;
    height: 400px;
  }
`;

const MainContentContainer = styled.div`
  width: 60%;
  height: 30%;
  position: absolute;
  top: 43%;
  left: 55%;
  transform: translate(-50%, -50%);
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 90%;
    left: 50%;
  }
`;

const ProfileImg = styled.img`
  max-width: 250px;
  max-height: 200px;
  border: 5px solid ${Colors.blue};
  border-radius: 50%;
  align-self: center;

  @media (max-width: 1200px) {
    max-width: 200px;
    max-height: 150px;
  }
  @media (max-width: 800px) {
    max-width: 150px;
    max-height: 100px;
  }
  /* @media (max-width: 500px) {
    max-width: 300px;
    max-height: 300px;
  } */
`;

const TextContainer = styled.div`
  position: relative;
  max-width: 700px;
  max-height: 250px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
  }
  @media (max-width: 500px) {
    width: 90%;
    margin-top: 20px;
  }
`;

const Overlay = styled.div`
  z-index: 1;
  margin-left: 20px;
  position: absolute;
  width: 95%;
  height: 60%;
  background-color: #dfe9f3;
  opacity: 0.6;
  @media (max-width: 500px) {
    width: 100%;
    height: 90%;
  }
`;

const Title = styled.p`
  z-index: 2;
  font-size: 3.4vw;
  font-weight: bold;
  color: ${Colors.blue};
  text-shadow: 4px 3px 2px ${Colors.hoverBlue};
  font-family: "Indie Flower", cursive;
  line-height: 1.4;
  /* @media (max-width: 1024px) {
    font-size: 3rem;
  }
  @media (max-width: 800px) {
    font-size: 2.5rem;
  }*/
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
