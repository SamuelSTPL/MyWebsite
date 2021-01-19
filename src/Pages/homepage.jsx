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
  box-sizing: border-box;
  background-color: ${Colors.background};
  height: 100vh;
  padding-top: 15px;
`;

const BackgroundImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const BackgroundImg = styled.img`
  /* margin: auto; */
  width: 90%;
  height: 95vh;
`;

const MainContentContainer = styled.div`
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;

const ProfileImg = styled.img`
  width: 300px;
  border: 5px solid ${Colors.blue};
  border-radius: 50%;
`;

const TextContainer = styled.div`
  position: relative;
  width: 700px;
  display: flex;
  text-align: center;
  /* justify-content: center; */
  align-items: center;
`;

const Overlay = styled.div`
  z-index: 1;
  margin-left: 20px;
  position: absolute;
  width: 95%;
  height: 60%;
  background-color: #dfe9f3;
  opacity: 0.6;
`;

const Title = styled.p`
  z-index: 2;
  font-size: 4rem;
  font-weight: bold;
  color: ${Colors.blue};
  text-shadow: 4px 3px 2px ${Colors.hoverBlue};
  font-family: "Indie Flower", cursive;
  line-height: 1.4;
`;
