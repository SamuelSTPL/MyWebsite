import React from "react";
import styled from "styled-components";
import { Colors } from "../Global/Color";

export const Codewars = () => {
  return (
    <Wrapper>
      <Text>Join me on Code Wars!</Text>
      <Anchor
        href="https://www.codewars.com/users/SamuelSTPL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          src="https://www.codewars.com/users/SamuelSTPL/badges/small"
          alt="codewar badge"
        />
      </Anchor>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 25%;
  height: 10vw;
  right: 5%;
  top: 58%;
  border: 3px solid ${Colors.blue};
  background-color: whitesmoke;
  border-radius: 50px;
  box-shadow: 5px 5px 15px 5px #a3abb3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 300px;

  @media (max-width: 1440px) {
    top: 55%;
    min-height: 200px;
  }
  @media (max-width: 800px) {
    top: 55%;
    min-height: 150px;
  }
  @media (max-width: 500px) {
    min-height: 150px;
  }
`;

const Anchor = styled.a`
  margin-top: 1vw;
`;

const Text = styled.p`
  font-size: 3rem;
  color: ${Colors.blue};
  @media (max-width: 1440px) {
    font-size: 1.7rem;
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 500px) {
  }
`;

const Img = styled.img`
  width: 95%;
  height: 100%;
  @media (max-width: 1440px) {
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 500px) {
  }
`;
