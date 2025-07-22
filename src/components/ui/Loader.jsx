// src/components/Loader/Loader.jsx

import styled from "styled-components";
import logo from "../../assets/images/logo.png";
const StyledLoader = styled.div`
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  > div {
    width: 150px;
    img {
      max-width: 100%;
    }
    @keyframes rotate {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  }
  animation: rotate 1.5s ease-in-out infinite;

  /* > div {
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
    } */
  /* } */

  /* animation: spin 1.5s linear infinite; */
`;

const Loader = () => (
  <StyledLoader>
    <div>
      <img src={logo} alt="logo" />
    </div>
  </StyledLoader>
);

export default Loader;
