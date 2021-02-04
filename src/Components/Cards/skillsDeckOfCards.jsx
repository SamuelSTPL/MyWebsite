import React, {useRef} from "react";
import styled from "styled-components";
import Carousel from 'react-elastic-carousel'

import './cards-styles.css'; 
import { SkillsCards } from "./skillsCards";
import {cardItems} from "../../Data/skills";

export const SkillsDeckOfCards = () => {
  const carouselRef = useRef(null);
  let resetTimeout;

  return (
    <Wrapper>
      <Carousel itemsToShow={1} enableAutoPlay={true} autoPlaySpeed={6000}
      ref={carouselRef} 
      onNextEnd={({ index }) => {
        clearTimeout(resetTimeout)
        if (index + 1 === 4) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0)
           }, 4000)}}} //
      >
    {cardItems.map((card) => {
      return(<SkillsCards key={card.title} areaOfSkills={card.area} title={card.title}/>)
    })}
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 700px;
  height: 800px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  background: none;
  @media (max-width: 1440px) {
    width: 600px;
    height: 500px;
  }
  @media (max-width: 770px) {
    width: 450px;
    height: 500px;
  } 
  @media (max-width: 500px) {
    width: 450px;
    height: 500px;
    margin-top: -70px;
  }
  `
