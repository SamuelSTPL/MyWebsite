import React from "react";
import styled from "styled-components";
import { FaRegSmileBeam } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import { Colors } from "../Global/Color";

export const EnterBox = () => {
  const history = useHistory();

  const enterWebSite = () => {
    history.push("/homepage");
  };

  return (
    <Wrapper>
      <Overlay1 />
      <ContentBox>
        <Text>My name is Samuel,</Text>
        <Text>I am a Full-Stack Web Dev</Text>
        <Text>Welcome to my website!</Text>
        <EnterButton onClick={() => enterWebSite()}>
          <ButtonContent>
            <ButtonText>Come in</ButtonText>
            <FaRegSmileBeam />
          </ButtonContent>
        </EnterButton>
      </ContentBox>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Overlay1 = styled.div`
  border-radius: 70px;
  z-index: 3;
  position: absolute;
  width: 30%;
  height: 35%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
  opacity: 0.6;
`;

const ContentBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: ${Colors.blue};
  text-shadow: 4px 3px 2px ${Colors.hoverBlue};
  font-family: "Indie Flower", cursive;
  margin-bottom: 35px;
`;

const EnterButton = styled.button`
  background-color: whitesmoke;
  border-radius: 20px;
  font-size: 2.2rem;
  font-family: "Indie Flower", cursive;
  color: ${Colors.blue};
  border: none;
  width: 220px;
  height: 60px;
  border: 5px solid ${Colors.blue};
  &:hover {
    cursor: pointer;
    background: ${Colors.hoverBlue};
  }
  &:focus {
    outline: none;
    background: ${Colors.hoverBlue};
  }
`;

const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ButtonText = styled.p`
  font-weight: bold;
  margin-right: 20px;
`;
