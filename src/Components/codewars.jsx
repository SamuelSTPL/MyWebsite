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
  width: 450px;
  height: 230px;
  border: 2px solid ${Colors.blue};
  background-color: whitesmoke;
  border-radius: 50px;
  box-shadow: 5px 5px 15px 5px #a3abb3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 1440px) {
    width: 350px;
    height: 200px;
  }
  @media (max-width: 800px) {
    width: 250px;
    height: 180px;
  }
  @media (max-width: 500px) {
    width: 170px;
    height: 60px;
    /* right: 7%; */
    /* top: 80%; */
    min-height: 100px;
  }
`;

const Anchor = styled.a`
  margin-top: 1vw;
  @media (max-width: 500px) {
    margin-top: 5px;
  }
`;

const Text = styled.p`
  font-size: 2.6rem;
  color: ${Colors.blue};
  @media (max-width: 1440px) {
    font-size: 1.7rem;
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    margin-left: 1px;
    margin-top: 7px;
    font-weight: bold;
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
