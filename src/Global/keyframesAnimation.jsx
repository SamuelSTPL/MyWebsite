import { keyframes } from "styled-components";

export const slideDown = keyframes`
100% {top: 5%}
`;

export const slideUp = keyframes`
100% {bottom: 5%}
`;

export const animeEarth = keyframes`
0% {background-position: 0 0};
100% {background-position: 719px 0};
`;

export const crashingWaves = keyframes`
0% {background-position: 0 0};
100% {background-position: 700px 0};
`;

export const treeGrows = keyframes`
0% {transform: scale(1);}
15% {transform: scale(1.1);}
25% {transform: scale(1.2);}
40% {transform: scale(1.3);}
50% {transform: scale(1.4);}
65% {transform: scale(1.5);}
75% {transform: scale(1.6);}
90% {transform: scale(1.7);}
100% {transform: scale(1.8);}
`;
export const moveWave = keyframes`
0%{
    transform: translateX(0) translateZ(0) scaleY(1)
}
50%{
    transform: translateX(-25%) translateZ(0) scaleY(0.55)
}
100%{
    transform: translateX(-50%) translateZ(0) scaleY(1)
}
`;
