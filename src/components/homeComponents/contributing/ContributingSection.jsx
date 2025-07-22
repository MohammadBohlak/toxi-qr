import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

import img from "../../../assets/images/snakes/contributing.jpg";
import { useTranslation } from "react-i18next";
import { SubTitle, Text } from "../../common/texts";
const LeftContent = styled(Col)`
  background-color: #000;
  color: #fff;
  ${SubTitle} {
    margin-bottom: 15px;
    margin-left: -5px;
    font-size: 20px !important;
  }
  hyphens: auto !important;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  /* padding: 50px 20px 20px 20px; */
  padding: 50px 20px 20px 15px;
  min-height: 350px;
  @media (max-width: 768px) {
    text-align: center;
    * {
      text-align: center !important;
    }
  }
`;
const RightContent = styled(Col)`
  min-height: 350px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  padding: 0;
`;
export const ContributingSection = () => {
  const { t } = useTranslation("home");
  return (
    <section>
      <Row style={{ maxWidth: "100%", margin: "0" }}>
        <LeftContent
          md={6}
          className="d-flex justify-content-center flex-column"
        >
          <SubTitle $bold style={{ whiteSpace: "nowrap" }} $color="white">
            {t("contributing.title")}
          </SubTitle>
          <Text $color="white"> {t("contributing.description")}</Text>
        </LeftContent>
        <RightContent md={6}></RightContent>
      </Row>
    </section>
  );
};
