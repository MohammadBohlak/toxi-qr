import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  height: var(--height-nav);
  background-color: ${({ theme }) => theme.colors.bacgroundNav};
  font-size: var(--small-text);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  width: 100%;
  z-index: 10000000;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;

  .navbar-collapse {
    justify-content: flex-start !important;
    background: ${({ theme }) => theme.colors.bacgroundNav};
    @media (min-width: 992px) {
      height: var(--height-nav);
    }
  }
  @media (max-width: 768px) {
  }
  .navbar-nav {
    height: 100%;
  }
  .show > .navbar-nav {
    width: 100%;
    /* height: 150px; */
    margin: 10px 0;
    text-align: center;
  }
  .navbar-toggler {
    font-size: var(--small-text);
    height: 35px;
  }
  .navbar-toggler:focus {
    box-shadow: none;

    box-shadow: 0 0 3px 0px ${({ theme }) => theme.colors.primary} inset;
  }
  .show + .nav-buttons {
    padding: 0 0 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px !important;
    width: 100%;
    background: ${({ theme }) => theme.colors.bacgroundNav};
  }
  @media (max-width: 480px) {
    .nav-buttons button {
      width: 60px;
      font-size: 1.2rem;

      &.navbar-toggler {
        width: fit-content;
      }
    }
  }
`;

// إنشاء أنماط مخصصة للروابط باستخدام styled-components
export const StyledNavLink = styled(NavLink)`
  margin: 0;
  margin-left: 15px;
  padding: 10px 20px;
  height: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  position: relative;
  text-decoration: none;
  transition: color 0.3s;
  &.active {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    bottom: 0;
    transition: width 0.3s;
  }
  &:not(.active):hover::before {
    width: 100%;
  }
`;
