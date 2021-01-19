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
  position: absolute;
  top: 0.5%;
  left: 5%;
  background: transparent;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const Img = styled.img`
  width: 250px;
`;
