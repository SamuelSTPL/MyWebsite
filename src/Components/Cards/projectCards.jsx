import React from "react";
import styled from "styled-components";
import { BsCheckCircle } from "react-icons/bs";

import { Colors } from "../../Global/Color";

export const ProjectCards = ({
  name,
  image,
  //   size,
  link,
  //   description,
  technologies,
  challenges,
  deployed,
}) => {
  return (
    <Card>
      <ProjectTitle href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </ProjectTitle>
      <ProjectImg src={image} />
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
      <Ul>{deployed && deployed.map((site) => <Li key={site}>-{site}</Li>)}</Ul>
    </Card>
  );
};

const Card = styled.div`
  background-color: whitesmoke;
  height: 700px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${Colors.blue};
  border-radius: 30px;
  box-shadow: 3px 3px 10px 5px #a3abb3;
  margin: 20px 10px;
  @media (max-width: 1440px) {
    width: 600px;
    height: 650px;
  }
  @media (max-width: 770px) {
    width: 450px;
    height: 580px;
  }
  @media (max-width: 500px) {
    margin: 10px;
    width: 500px;
    height: 450px;
  }
`;

const ProjectTitle = styled.a`
  font-size: 2.5rem;
  color: ${Colors.blue};
  text-decoration: underline;
  margin: 5px 0 10px 0;
  @media (max-width: 1024px) {
    font-size: 2rem;
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
  margin: 5px 0 10px 0;
  font-size: 2rem;
  color: ${Colors.blue};
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
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
  margin: 0 20px;
  font-size: 1.2rem;
  color: ${Colors.blue};
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

const Challenge = styled(Li)`
  margin: 5px auto;
  width: 90%;
`;
