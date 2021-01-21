import React from "react";
import styled from "styled-components";

import { treeGrows } from "../Global/keyframesAnimation";
import { Colors } from "../Global/Color";

export const GrowingPlant = () => {
  return (
    <Wrapper>
      <Tree>
        <TopLeft></TopLeft>
        <TopRight></TopRight>
        <Left></Left>
        <Right></Right>
      </Tree>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  top: 55px;
  left: 90px;
  @media (max-width: 1440px) {
    top: 5px;
    left: 25px;
  }
  @media (max-width: 800px) {
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const Tree = styled.div`
  background-color: black;
  position: absolute;
  top: 120px;
  left: 20px;
  min-width: 4px;
  min-height: 40px;
  background-color: ${Colors.blue};
  transform-origin: bottom;
  animation: ${treeGrows} 15s linear infinite;
`;

const Leaf = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: ${Colors.blue};
  border: 0;
  border-top-right-radius: 100%;
  border-bottom-left-radius: 100%;
`;

const TopLeft = styled(Leaf)`
  top: -10px;
  left: -10px;
  width: 12px;
  height: 12px;
`;

const TopRight = styled(Leaf)`
  top: -5px;
  right: -10px;
  width: 12px;
  height: 12px;
  transform: rotate(90deg);
`;

const Left = styled(Leaf)`
  top: 7px;
  left: -20px;
`;
const Right = styled(Leaf)`
  top: 12px;
  right: -20px;
  transform: rotate(90deg);
`;
