// Footer.jsx
import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logoImg from "../../../assets/images/logo.png";
import googlePlayImg from "../../../assets/images/google-play.png";
import appStoreImg from "../../../assets/images/app-store.png";
import MyContainer from "../myContainer/MyContainer";
import { StyledSection } from "../../common/sections";
import { SmallText, Text } from "../../common/texts";
import logoTwittter from "../../../assets/images/logoX.webp";
import {
  BottomBar,
  DownloadBtn,
  DownloadButtons,
  FooterContent,
  FooterLink,
  Icons,
  Links,
  // Logo,
  NavList,
  SocialIcon,
  StyledFooter,
} from "./footer.styles";
import Logo from "../../common/Logo";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter style={{ background: "#eee" }}>
      <MyContainer>
        <Row className="m-0 p-0 pts-5 pb-5 justify-content-between   ">
          <Col
            sm={12}
            md={12}
            lg={2}
            className="d-flex align-items-center justify-content-md-center justify-content-lg-start"
          >
            <Logo src={logoImg} alt="Logo" />
          </Col>

          <Links sm={12} md={4} lg={2} className="d-flex align-items-center">
            <NavList>
              <li>
                <Text>
                  <FooterLink to="/about">{t("footer.nav1.about")}</FooterLink>
                </Text>
              </li>
              <li>
                <Text>
                  <FooterLink to="/terms">{t("footer.nav1.terms")}</FooterLink>
                </Text>
              </li>
              <li>
                <Text>
                  <FooterLink to="/privacy">
                    {t("footer.nav1.privacy")}
                  </FooterLink>
                </Text>
              </li>
              <li>
                <Text>
                  <FooterLink to="/aid">{t("footer.nav1.aid")}</FooterLink>
                </Text>
              </li>
            </NavList>
          </Links>

          {/* <Col sm={12} md={4} lg={2}>
            <NavList>
              <li>
                <Text>
                  <FooterLink to="/press">{t("footer.nav2.press")}</FooterLink>
                </Text>
              </li>
              <li>
                <Text>
                  <FooterLink to="/blog">{t("footer.nav2.blog")}</FooterLink>
                </Text>
              </li>
              <li>
                <Text>
                  <FooterLink to="/instructions">
                    {t("footer.nav2.instructions")}
                  </FooterLink>
                </Text>
              </li>
            </NavList>
          </Col> */}

          <Icons sm={12} md={4} lg={3} className="icons">
            <SocialIcon
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", background: "#3b5998" }}
            >
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", background: "#000" }}
            >
              {/* <FaTwitter /> */}
              <img src={logoTwittter} />
            </SocialIcon>
            <SocialIcon
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
                background:
                  "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
              }}
            >
              <FaInstagram />
            </SocialIcon>
          </Icons>

          <DownloadButtons sm={12} md={4} lg={4}>
            <DownloadBtn
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googlePlayImg} alt="Get it on Google Play" />
            </DownloadBtn>
            <DownloadBtn
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appStoreImg} alt="Download on the App Store" />
            </DownloadBtn>
          </DownloadButtons>
        </Row>
      </MyContainer>

      <BottomBar>
        <SmallText $align="center" className="text-white">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </SmallText>
      </BottomBar>
    </StyledFooter>
  );
};

export default Footer;
