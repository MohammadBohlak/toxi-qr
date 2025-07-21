// src/components/Loader/Loader.jsx

import React from "react";
import styled from "styled-components";
import Logo from "../common/Logo";

const StyledLoader = styled.div`
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  > div {
    @keyframes spin {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
      }
      50% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(2);
      }
      100% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
      }
    }
  }

  animation: spin 1.5s linear infinite;
`;

const AnimatedLogo = styled(Logo)`
  width: 100px;
`;

const Loader = () => (
  <StyledLoader>
    <div>
      <AnimatedLogo />
    </div>
  </StyledLoader>
);

export default Loader;
