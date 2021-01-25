import React from "react";
import styled from "styled-components";

import { Colors } from "../../Global/Color";
import { SkillsCards } from "./skillsCards";
import {
  ListOfSkillsFE,
  ListOfSkillsBE,
  ListOfSkillsDB,
  ListOfSkillsTools,
} from "../../Data/skills";

export const SkillsDeckOfCards = () => {
  return (
    <Wrapper>
      <SkillsCards areaOfSkills={ListOfSkillsFE} title={"Front End"} />
      <SkillsCards areaOfSkills={ListOfSkillsBE} title={"Back End"} />
      <SkillsCards areaOfSkills={ListOfSkillsDB} title={"Databases"} />
      <SkillsCards areaOfSkills={ListOfSkillsTools} title={"Tools"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  padding: 15px;
  background-color: whitesmoke;
  border: 2px solid ${Colors.blue};
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px #a3abb3;

  @media (max-width: 500px) {
    max-height: 500px;
  }
`;
