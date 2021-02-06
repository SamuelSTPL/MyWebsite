import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaLaptopCode } from "react-icons/fa";

import { Colors } from "../Global/Color";

export const Logo = () => {
  const history = useHistory();
  return (
    <Wrapper onClick={() => history.push("/")}>
      <FaLaptopCode />
      <Name>SamSTPL</Name>
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
  display: flex;
  align-items: center;
  color: ${Colors.blue};
  font-size: 2.2rem;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (max-width: 770px) {
    font-size: 1.3rem;
    left: 15%;
  }
  @media (max-width: 500px) {
    top: 95%;
    font-size: 1.2rem;
    left: 50%;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const Name = styled.p`
  margin-left: 10px;
  letter-spacing: 0.15em;
  background: -webkit-linear-gradient(${Colors.hoverBlue}, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
