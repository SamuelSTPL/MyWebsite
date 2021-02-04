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
  border: 2px solid ${Colors.blue};
  width: 450px;
  height: 230px;
  background-color: whitesmoke;
  border-radius: 50px;
  box-shadow: 5px 5px 15px 5px #a3abb3;
  display: flex;
  flex-direction: column;
  margin-top: 10%;

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
    height: 100px;
  margin-top: 0%;
  margin-left: 10px;
  }
`;

const Title = styled.p`
  margin: 40px auto 50px auto;
  font-size: 2.7rem;
  color: ${Colors.blue};

  @media (max-width: 1440px) {
    font-size: 2.1rem;
  }
  @media (max-width: 800px) {
    font-size: 1.8rem;
  }
  @media (max-width: 500px) {
    margin: 25px 0 0 10px;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const TechnologyName = styled.p`
  font-size: 2.5rem;
  color: ${Colors.blue};
  align-self: left;
  margin-left: 35%;
  margin-top: 20px;
  @media (max-width: 1440px) {
    font-size: 2rem;
    margin-left: 30%;
    margin-top: 1.5px;
  }
  @media (max-width: 800px) {
    margin-left: 35%;
    font-size: 1.8rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    margin-left: 15px;
    margin-top: 10px;
  }
`;
