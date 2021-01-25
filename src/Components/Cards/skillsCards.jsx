import React from "react";
import styled from "styled-components";

import { Colors } from "../../Global/Color";

export const SkillsCards = ({ areaOfSkills, title }) => {
  areaOfSkills.map((skill) => console.log(skill.score));
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
  width: 100%;
`;

const Title = styled.h1`
  color: ${Colors.blue};
  font-size: 1.5rem;
  margin: 15px 0 7px 0;
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
  font-size: 1.1rem;
  margin: 5px 0;
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
