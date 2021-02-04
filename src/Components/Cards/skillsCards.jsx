import React from "react";
import styled from "styled-components";

import { Colors } from "../../Global/Color";


export const SkillsCards = ({ areaOfSkills, title, }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <List>
        {areaOfSkills &&
          areaOfSkills.map((skill) => {
            return (
              <SkillsContainer key={skill.name}>
                <SkillName>{skill.name}</SkillName>
                <SkillBarBackground>
                  <SkillBars width={skill.score}></SkillBars>
                </SkillBarBackground>
              </SkillsContainer>
            );
          })}
      </List>
    </Card>
  );
};

const Card = styled.div`
  width: 90%;
  background-color: whitesmoke;
  border-radius: 8px;
  border: 2px solid ${Colors.blue};
  box-shadow: 3px 3px 10px 5px #a3abb3;
  padding: 40px;
  margin: 20px auto;
  height: 600px;
  
  @media (max-width: 1440px) {
  height: 650px;
  }
  @media (max-width: 770px) {
    height: 550px;
  }
  @media (max-width: 500px) {
  padding: 20px;
  margin: 60px auto 15px auto;
  height: 350px;
  }
`;

const Title = styled.h1`
  color: ${Colors.blue};
  font-size: 2.5rem;
  margin: 20px 0;
  text-align: center;
  font-weight: bolder;

  @media (max-height: 850px) {
    font-size: 1.3rem;
  }
  @media (max-width: 500px) {
    font-size: 1.1rem;
    margin: 10px 0 5px 0;
  }
`;

const SkillsContainer = styled.li`
  width: 100%;
  max-height: 100%;
  margin: 3px;
`;

const List = styled.ul``;

const SkillName = styled.p`
  color: ${Colors.blue};
  font-size: 1.5rem;
  margin: 20px 0 7px 0;
  font-weight: bold;
  @media (max-width: 1440px) {
    font-size: 0.9rem;
  }
  @media (max-width: 770px) {
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

const SkillBarBackground = styled.div`
  background-color: ${Colors.hoverBlue};
  background-size: cover;
  width: 100%;
  border-radius: 0 20px 20px 0;
`;

const SkillBars = styled.div`
  max-width: ${(props) => props.width};
  height: 25px;
  background-color: ${Colors.blue};
  background-size: cover;
  border-radius: 0 20px 20px 0;

  /* &:hover {
  }*/
  @media (max-width: 1440px) {
    max-height: 17px;
  }
  @media (max-width: 770px) {
    height: 14px;
  }
  @media (max-width: 500px) {
    height: 14px;
  }
`;
