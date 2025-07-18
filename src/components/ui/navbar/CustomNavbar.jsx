import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import MyContainer from "../myContainer/MyContainer";
import LangSwitch from "../../langSwitch/LangSwitch";
import { StyledNavbar, StyledNavLink } from "./navbar.styles";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Logo from "../../common/Logo";

// زر الانضمام
const JoinBtn = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  color: #fff;
  height: 35px;
  width: 100px;
  font-weight: bold;
  border-radius: 10px;
  font-size: var(--min-text);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: #eee;
    border-color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 768px) {
    width: 60px;
  }
`;

export default function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(true);
  const prevScrollY = useRef(0);
  const navRef = useRef(null);
  const location = useLocation();
  const { t } = useTranslation();

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // إغلاق القائمة عند تغيير المسار
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  // إخفاء/إظهار عند التمرير
  useEffect(() => {
    prevScrollY.current = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > prevScrollY.current && currentY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      prevScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // نمط الحركة
  const navbarStyle = {
    transform: show ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div ref={navRef}>
      <StyledNavbar expand="lg" expanded={expanded} style={navbarStyle}>
        <MyContainer>
          <Navbar.Brand as={NavLink} to="/" className="m-0 p-0">
            {/* <Logo>
              <img src={logo} alt="logo" />
            </Logo> */}
            <Logo />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <StyledNavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("navbar.home")}
              </StyledNavLink>
              <StyledNavLink
                to="/instructions"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("navbar.instructions")}
              </StyledNavLink>
              <StyledNavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("navbar.ourBlog")}
              </StyledNavLink>
              <StyledNavLink
                to="/press"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {t("navbar.press")}
              </StyledNavLink>
              {/* <StyledNavLink
                to="/detection"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Detection
              </StyledNavLink> */}
            </Nav>
          </Navbar.Collapse>
          <div
            className="nav-buttons"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <JoinBtn to="/join">{t("navbar.join")}</JoinBtn>
            <LangSwitch />
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(expanded ? false : true)}
            />
          </div>
        </MyContainer>
      </StyledNavbar>
    </div>
  );
}
