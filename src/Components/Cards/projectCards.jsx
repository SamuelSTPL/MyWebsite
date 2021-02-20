import React, { useState } from "react";
import styled from "styled-components";
import { BsCheckCircle } from "react-icons/bs";
import ReactCardFlip from "react-card-flip";
import ReactTooltip from "react-tooltip";

import { Colors } from "../../Global/Color";

export const ProjectCards = ({
  name,
  image,
  size,
  tooltip,
  link,
  description,
  technologies,
  challenges,
  deployed
}) => {
  //Show either front or back.
  const [isFlipped, setIsFlipped] = useState(false);
  // State changes on click
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      {/* Front side */}
      <Card>
        <ProjectTitle href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </ProjectTitle>
        <ProjectImg src={image} />
        <Text>
          Size of the project: <Size data-tip={tooltip}>{size}</Size>
          <ReactTooltip place="right" />
        </Text>
        <Text>{description}</Text>
        <FlipButton onClick={(e) => handleClick(e)}>Flip me</FlipButton>
      </Card>
      {/* Back Side */}
      <Card>
        <ProjectSubTitle>Technologies</ProjectSubTitle>
        <Ul>
          {technologies &&
            technologies.map((technology) => (
              <Li key={technology}>-{technology}</Li>
            ))}
        </Ul>
        <ProjectSubTitle>Challenges</ProjectSubTitle>
        <ul>
          {challenges &&
            challenges.map((challenge) => (
              <Challenge key={challenge}>
                <BsCheckCircle />
                {challenge}
              </Challenge>
            ))}
        </ul>
        <ProjectSubTitle>Deployed on:</ProjectSubTitle>
        <Ul>
          {deployed && deployed.map((site) => <Li key={site}>-{site}</Li>)}
        </Ul>
        <LinkToWebSite href={link} target="_blank" rel="noreferrer">
          Link to website
        </LinkToWebSite>
        <FlipButton onClick={(e) => handleClick(e)}>Flip me</FlipButton>
      </Card>
    </ReactCardFlip>
  );
};

const Card = styled.div`
  background-color: whitesmoke;
  height: 700px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px solid ${Colors.blue};
  border-radius: 30px;
  box-shadow: 3px 3px 10px 5px #a3abb3;
  margin: 20px 10px;
  @media (max-width: 1440px) {
    width: 400px;
    height: 650px;
  }
  @media (max-width: 770px) {
    width: 300px;
    height: 550px;
  }
  @media (max-width: 500px) {
    margin: 10px;
    width: 300px;
    height: 450px;
  }
  @media (max-width: 375px) {
    width: 95%;
  }
`;

const ProjectTitle = styled.a`
  font-size: 2.5rem;
  color: ${Colors.blue};
  text-decoration: underline;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 770px) {
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const ProjectImg = styled.img`
  border: 1px solid ${Colors.blue};
  width: 95%;
  border-radius: 20px;
`;

const ProjectSubTitle = styled.p`
  text-decoration: underline;
  font-size: 2rem;
  color: ${Colors.blue};
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
    font-weight: bold;
    font-size: 1rem;
  }
`;

const Ul = styled.ul`
  width: 100%;
  columns: 2;
  text-align: center;
  text-decoration: none !important;
`;

const Li = styled.li`
  text-decoration: none !important;
  font-size: 1.2rem;
  margin: 5px auto;
  color: ${Colors.blue};
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

const Challenge = styled(Li)`
  width: 90%;
`;

const FlipButton = styled.button`
  background-color: whitesmoke;
  border-radius: 20px;
  font-size: 1.6rem;
  font-family: "Indie Flower", cursive;
  color: ${Colors.blue};
  border: 2px solid ${Colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  box-shadow: 0px 10px 13px -7px #585858,
    5px 5px 15px 5px rgba(137, 137, 137, 0);
  &:hover {
    cursor: pointer;
    background: ${Colors.hoverBlue};
    color: whitesmoke;
  }
  &:focus {
    outline: none;
    background: ${Colors.hoverBlue};
  }

  @media (max-width: 1024px) {
    font-size: 1.4rem;
    width: 200px;
    height: 40px;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    width: 150px;
    height: 30px;
  }
`;

const Text = styled.p`
  color: ${Colors.blue};
  font-size: 1.3rem;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Size = styled.span`
  font-weight: bolder;
  font-size: 1.5rem;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const LinkToWebSite = styled.a`
  color: ${Colors.blue};
  font-weight: bold;
  font-size: 1.3rem;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
