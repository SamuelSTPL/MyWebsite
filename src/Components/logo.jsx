import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import logo from "../images/logo.png";

export const Logo = () => {
  const history = useHistory();
  return (
    <Wrapper onClick={() => history.push("/")}>
      <Img src={logo} alt="SamSTPL Logo" />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  z-index: 20;
  position: absolute;
  top: 5%;
  left: 10%;
  background: transparent;
  border: none;
  transform: translate(-50%, -50%);

  @media (max-width: 500px) {
    top: 95%;
    left: 50%;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const Img = styled.img`
  width: 14vw;
  @media (max-width: 500px) {
    width: 100px;
  }
`;
