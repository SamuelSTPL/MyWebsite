import React from "react";
import styled from "styled-components";

import { Colors } from "../Global/Color";
import { moveWave } from "../Global/keyframesAnimation";

export const BackgroundWaves = () => {
  return (
    <Wrapper>
      <BgTop>
        <WaveTop></WaveTop>
      </BgTop>
      <BgMiddle>
        <WaveMiddle></WaveMiddle>
      </BgMiddle>
      <BgBottom>
        <WaveBottom></WaveBottom>
      </BgBottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
  margin: auto;
  background-color: ${Colors.blue};
`;

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  bottom: -1px;
  background: linear-gradient(
    180deg,
    rgba(223, 233, 243, 1) 60%,
    rgba(141, 164, 206, 1) 100%
  );
`;

const BgTop = styled(InnerWrapper)`
  z-index: 15;
  opacity: 0.25;
`;

const BgMiddle = styled(InnerWrapper)`
  z-index: 10;
  opacity: 0.25;
`;

const BgBottom = styled(InnerWrapper)`
  z-index: 5;
  opacity: 0.25;
`;

const Wave = styled.div`
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
`;

const WaveTop = styled(Wave)`
background-size: 50% 100px;
animation: ${moveWave} 3s;
animation-delay: 1s;
--webkit-animation: animation: ${moveWave} 3s;
--webkit-animation: animation-delay: 1s;
background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png');
`;

const WaveMiddle = styled(Wave)`
  background-size: 50% 120px;
  animation: ${moveWave} 10s linear infinite;
  background-image: url("http://front-end-noobs.com/jecko/img/wave-mid.png");
`;

const WaveBottom = styled(Wave)`
  background-size: 50% 100px;
  animation: ${moveWave} 12s linear infinite;
  background-image: url("http://front-end-noobs.com/jecko/img/wave-bot.png");
`;
