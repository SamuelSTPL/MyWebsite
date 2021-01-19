import React from "react";
import styled from "styled-components";

import GitHub from "../images/github.png";
import Linkedin from "../images/linkedin.png";

export const LinkBar = () => {
  return (
    <Wrapper>
      <a
        href="https://github.com/SamuelSTPL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImgGit src={GitHub} />
      </a>
      <a
        href="https://www.linkedin.com/in/samuel-st-pierre-larivi%C3%A8re/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImgLin src={Linkedin} />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 20;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImgGit = styled.img`
  width: 40px;
  transition: transform 0.8s ease-in-out;

  &:hover {
    transform: rotate(360deg);
  }
`;

const ImgLin = styled(ImgGit)`
  width: 35px;
  height: 35px;
`;
