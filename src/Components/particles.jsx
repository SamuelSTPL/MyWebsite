import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";

export const Particle = () => {
  return (
    <Wrapper>
      <Particles
        width={"100%"}
        height={"100vh"}
        params={{
          particles: {
            number: {
              value: 90,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#395485",
            },
            shape: {
              type: "circle",
              polygon: { nb_sides: 7 },
              stroke: {
                width: 0,
                color: "#b6b2b2",
              },
            },
            opacity: {
              anim: {
                enable: false,
                speed: 100,
                opacity_min: 0.1,
                sync: false,
              },
              value: 0.4,
              random: false,
            },
            size: {
              value: 3,
              sync: true,
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#395485",
              opacity: 0.8,
              width: 1,
            },
            move: {
              enable: true,
              speed: 4,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            modes: {
              grab: {
                distance: 200,
                line_linked: { opacity: 1 },
              },
            },
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: whitesmoke;
`;
