import React from "react";
import styled from "styled-components";

import { GrowingPlant } from "../Components/growingPlant";
import { Colors } from "../Global/Color";

export const CurrentlyLearning = () => {
  return (
    <Wrapper>
      <GrowingPlant />
      <Title>Currently Learning: </Title>
      <TechnologyName>TypeScript</TechnologyName>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 3px solid ${Colors.blue};
  position: absolute;
  width: 25%;
  right: 5%;
  top: 20%;
  background-color: whitesmoke;
  border-radius: 50px;
  box-shadow: 5px 5px 15px 5px #a3abb3;
  display: flex;
  flex-direction: column;
  min-height: 300px;

  @media (max-width: 1440px) {
    top: 18%;
    min-height: 200px;
  }
  @media (max-width: 800px) {
    top: 25%;
    min-height: 150px;
  }
  @media (max-width: 500px) {
    min-height: 150px;
  }
`;

const Title = styled.p`
  margin: 35px auto 50px auto;
  font-size: 4rem;
  color: ${Colors.blue};
  @media (max-width: 1440px) {
    font-size: 2.1rem;
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 500px) {
  }
`;

const TechnologyName = styled.p`
  font-size: 3.5rem;
  color: ${Colors.blue};
  align-self: left;
  margin-left: 30%;
  @media (max-width: 1440px) {
    font-size: 2rem;
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 500px) {
  }
`;
