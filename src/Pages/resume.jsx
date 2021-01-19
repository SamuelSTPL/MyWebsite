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
        "The technological universe fascinates me by the rigour it requires, but
        also by its multiple possibilities to solve problems. Becoming a Web
        developer was for me an aspiration to be professionally happy. I am a
        person who is curious, hard-working and persevering. I handle logistics
        and creativity very well. I used to work in the restaurant industry as a
        restaurant manager, which got me used to working under pressure."
      </Text>
      <Text1>
        "I started learning Web development on my own by watching several videos
        produced by Web developers, among others. I then took the CS 50 online
        course at Harvard University. This course allowed me to confirm my
        desire to work in the technology field, but also to practise my
        knowledge of computer sciences such as data structures, and how
        computers function under the hood. I then decided to officially register
        for a course offered in Quebec by enrolling in the Bootcamp (also known
        as DECODE) at Concordia University. Since the fall of 2020, I have
        learned immensely in Web Development and I can now say that I can create
        entire web applications front to back and I am very proud of it."
      </Text1>
      <Text2>
        "I know that this is a field where I will be able to continually learn
        and improve my knowledge and that is what drives me: learning, creating
        and solving problems with multiple solutions."
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
  width: 300px;
  height: 60px;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: whitesmoke;
  text-decoration: none;
  text-align: center;
  border: 3px solid ${Colors.blue};
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.blue};
  font-weight: bold;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 2px #70767c;
`;

const Text = styled.p`
  text-align: center;
  width: 90%;
  z-index: 21;
  font-size: 2.2rem;
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
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
`;
