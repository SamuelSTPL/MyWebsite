import React from "react";
import styled from "styled-components";

import { Colors } from "../Global/Color";
import { animeEarth } from "../Global/keyframesAnimation";
import earth from "../images/earth.png";

export const Globe = () => {
  return (
    <Wrapper>
      <Earth />
      <Citation>And many more to come !</Citation>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background-color: ${Colors.blue};
  border-radius: 50%;
  box-shadow: 4px 4px 5px 0px #757575;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Earth = styled.div`
  width: 25vw;
  height: 25vw;
  border-radius: 50%;
  box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.5);
  background: url(${earth});
  background-size: cover;
  animation: ${animeEarth} 60s linear infinite;
`;

const Citation = styled.p`
  position: absolute;
  top: 107%;
  font-size: 2.2vw;
  font-weight: bold;
  color: ${Colors.blue};
  width: 100%;
`;
