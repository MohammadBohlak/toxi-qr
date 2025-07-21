import styled from "styled-components";
import Logo from "../common/Logo";

const StyledLoader = styled.div`
  --s: 40px;

  --_d: calc(0.353 * var(--s));
  width: calc(var(--s) + var(--_d));
  aspect-ratio: 1;
  display: grid;
  position: fixed;
  z-index: 10000000;
  top: 50%;
  left: 50%;
  transform: translate(-150%, -100%);
  &:before,
  &:after {
    content: "";
    grid-area: 1/1;
    clip-path: polygon(
      var(--_d) 0,
      100% 0,
      100% calc(100% - var(--_d)),
      calc(100% - var(--_d)) 100%,
      0 100%,
      0 var(--_d)
    );
    background: conic-gradient(
      from -90deg at calc(100% - var(--_d)) var(--_d),
      #ffe16a 135deg,
      #c5a115 0 270deg,
      #a5870d 0
    );
    animation: l6 2s infinite;
  }
  &:after {
    animation-delay: -1s;
  }
  @keyframes l6 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(55px, 0);
    }
    50% {
      transform: translate(55px, 55px);
    }
    75% {
      transform: translate(0, 55px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
const Loader = () => {
  return <StyledLoader></StyledLoader>;
};

export default Loader;
