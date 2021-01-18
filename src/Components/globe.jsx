import React from "react";
import styled from "styled-components";

import { Colors } from "../Global/Color";
import { animeEarth } from "../Global/keyframesAnimation";
import earth from "../images/earth.png";

export const Globe = () => {
  return (
    <Wrapper>
      <Earth />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 30%;
  right: 10%;
  background-color: ${Colors.blue};
  border-radius: 50%;
  box-shadow: 4px 4px 5px 0px #757575;
`;

const Earth = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.5);
  background: url(${earth});
  background-size: cover;
  animation: ${animeEarth} 60s linear infinite;
`;
