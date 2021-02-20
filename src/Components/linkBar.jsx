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
  width: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 500px) {
    width: 40%;
    bottom: 7%;
  }
`;

const ImgGit = styled.img`
  width: 2vw;
  transition: transform 0.8s ease-in-out;
  @media (max-width: 500px) {
    width: 25px;
  }
  &:hover {
    transform: rotate(360deg);
  }
`;

const ImgLin = styled(ImgGit)`
  width: 1.8vw;
  @media (max-width: 500px) {
    width: 20px;
  }
`;
