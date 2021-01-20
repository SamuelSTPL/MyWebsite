import React from "react";
import styled from "styled-components";
import { IoIosArrowDropright } from "react-icons/io";

import pdf from "../images/resume.pdf";
import { Colors } from "../Global/Color";
import { BackgroundWaves } from "../Components/backgroundWaves";
import { NavBar } from "../Components/navBar";
import { Logo } from "../Components/logo";
import { LinkBar } from "../Components/linkBar";

export const Resume = () => {
  return (
    <Wrapper>
      <NavBar />
      <Logo />
      <LinkBar />
      <BackgroundWaves />
      <Text>
        " The technological universe fascinates me by the rigour it requires,
        but also by its multiple possibilities to solve problems. Becoming a Web
        developer was for me an aspiration to be professionally happy. I am a
        person who is curious, hard-working and persevering. I handle logistics
        and creativity very well. I used to work in the restaurant industry as a
        restaurant manager, which got me used to work under pressure."
      </Text>
      <Text1>
        " I started learning Web development independently by watching several
        videos produced by Web developers, among others. I then took the CS 50
        online course at Harvard University. This course confirmed my desire to
        work in the technology field and inspired me to expand my knowledge of
        computer sciences, such as data structures and how computers function
        under the hood. I then decided to officially register for a Full-Stack
        Web Development Bootcamp in Quebec (also known as DECODE) at Concordia
        University. Since the fall of 2020, I have learned immensely in Web
        Development, and I can now say that I can create entire web applications
        front to back, and I am very proud of it. "
      </Text1>
      <Text2>
        " I know that this is a field where I can continuously learn and develop
        my skills. That is what drives me: learning, creating, and solving
        problems with multiple solutions. "
      </Text2>
      <ResumePDF href={pdf} target="_blank">
        Open my Resume{" "}
        <IconSpan>
          <IoIosArrowDropright />
        </IconSpan>
      </ResumePDF>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 20;
  width: 100%;
  height: 100vh;
`;

const ResumePDF = styled.a`
  color: black;
  z-index: 20;
  width: 20.5vw;
  height: 6.5vh;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
  text-decoration: none;
  text-align: center;
  border: 3px solid ${Colors.blue};
  font-size: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.blue};
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 2px #70767c;

  &:hover {
    background-color: ${Colors.hoverBlue};
  }
  @media (min-width: 1250px) {
    width: 18vw;
    height: 6.5vh;
    font-size: 1.5vw;
  }
`;

const Text = styled.p`
  text-align: center;
  width: 90%;
  z-index: 21;
  font-size: 2vw;
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.1;

  @media (min-width: 1250px) {
    font-size: 1.5vw;
  }
`;

const Text1 = styled(Text)`
  top: 41%;
`;

const Text2 = styled(Text)`
  top: 61%;
`;
const IconSpan = styled.span`
  margin: 8px 0 0 4px;
  font-size: 2.5rem;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
    margin: 4px 0 0 4px;
    font-size: 1.2rem;
  }
`;
