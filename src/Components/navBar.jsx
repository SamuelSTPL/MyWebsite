import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Colors } from "../Global/Color";
import { slideDown } from "../Global/keyframesAnimation";

export const NavBar = () => {
  return (
    <Wrapper>
      <Li>
        <Link to="/homepage">Home</Link>
      </Li>
      <Li>
        <Link to="/projects">Projects</Link>
      </Li>
      <Li>
        <Link to="/skillset">Skillset</Link>
      </Li>
      <Li>
        <Link to="/resume">Resume</Link>
      </Li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  z-index: 20;
  position: absolute;
  top: -5%;
  right: 3%;
  list-style: none;
  display: flex;
  transform: translate(0%, -50%);
  animation: ${slideDown} 0.5s forwards;
  animation-delay: 2s;
  @media (max-width: 500px) {
    left: 44%;
    transform: translate(-50%, -50%);
  }
`;

const Li = styled.div`
  margin-right: 3vw;
  position: relative;
  padding: 10px;
  width: 8vw;
  height: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    margin-right: 13px;
    width: 70px;
    height: 30px;
  }

  &:after,
  &:before {
    color: ${Colors.blue};
    content: "";
    display: block;
    position: absolute;
    width: 20%;
    height: 20%;
    border: 2px solid;
    transition: all 0.6s ease;
    border-radius: 2px;
  }

  &:after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: ${Colors.blue};
    border-right-color: ${Colors.blue};
  }

  &:before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: ${Colors.blue};
    border-left-color: ${Colors.blue};
  }

  &:hover:after,
  &:hover:before {
    width: 100%;
    height: 100%;
  }
`;

const Link = styled(NavLink)`
  position: relative;
  z-index: 2;
  font-weight: bolder;
  font-size: 1.7vw;
  text-decoration: none;
  color: ${Colors.blue};
  font-family: "Indie Flower", cursive;
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
