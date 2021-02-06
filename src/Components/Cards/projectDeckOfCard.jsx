import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

import "./cards-styles.css";
import { ProjectCards } from "./projectCards";
import { listOfProjects } from "../../Data/projects";

export const ProjectDeckOfCards = () => {
  return (
    <Wrapper>
      <Carousel itemsToShow={1}>
        {listOfProjects.map((card) => {
          return (
            <ProjectCards
              key={card.title}
              image={card.image}
              name={card.name}
              size={card.size}
              link={card.link}
              description={card.description}
              technologies={card.technologies}
              challenges={card.challenges}
              deployed={card.deployed}
            />
          );
        })}
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 700px;
  height: 770px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  background: none;
  @media (max-width: 1440px) {
    width: 600px;
    height: 600px;
  }
  @media (max-width: 770px) {
    width: 450px;
    height: 500px;
  }
  @media (max-width: 500px) {
    width: 400px;
    height: 500px;
    margin-top: -70px;
  }
`;
