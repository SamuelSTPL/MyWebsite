import React from "react";
import styled from "styled-components";

import { EnterBox } from "../Components/enterBox";
import { Particle } from "../Components/particles";

export const Welcome = () => {
  return (
    <Wrapper>
      <EnterBox />
      <Particle />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
