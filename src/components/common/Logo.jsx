import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
const StyledLogo = styled.div`
  width: 60px;
  @media (max-width: 992px) {
    /* width: 150px; */
  }
  @media (max-width: 768px) {
    /* width: 100px; */
  }
  img {
    max-width: 100%;
  }
`;
const Logo = () => {
  return (
    <StyledLogo className="logo">
      <img src={logo} alt="logo" />
    </StyledLogo>
  );
};

export default Logo;
