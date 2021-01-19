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
        <img
          src="https://www.codewars.com/users/SamuelSTPL/badges/small"
          alt="codewar badge"
        />
      </Anchor>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px 10px 10px 20px;
  position: absolute;
  width: 400px;
  height: 150px;
  right: 10%;
  top: 60%;
  border: 3px solid ${Colors.blue};
  background-color: whitesmoke;
  border-radius: 50px;
  box-shadow: 5px 5px 15px 5px #a3abb3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
`;

const Anchor = styled.a`
  margin-top: 10px;
`;

const Text = styled.p`
  font-size: 2.1rem;
  color: ${Colors.blue};
`;
