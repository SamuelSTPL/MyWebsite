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
  padding: 40px 10px 10px 20px;
  position: absolute;
  width: 400px;
  height: 270px;
  right: 10%;
  top: 25%;
  background-color: whitesmoke;
  border-radius: 50px;
  box-shadow: 5px 5px 15px 5px #a3abb3;
`;

const Title = styled.p`
  font-size: 3rem;
  color: ${Colors.blue};
`;

const TechnologyName = styled.p`
  font-size: 2.5rem;
  color: ${Colors.blue};
  margin: 70px 0 0 60px; ;
`;
