import React, { useEffect, useState } from "react";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { MainTitle, SubTitle, Text } from "../../components/common/texts";
import { Col, Row } from "react-bootstrap";
import { highlights } from "./data";
import { useTranslation } from "react-i18next";
import { StyledPress, TextContent } from "./press.styles";
import { api } from "../../utils/api/api";

const Press = () => {
  const [presses, setPtresses] = useState([]);
  useEffect(() => {
    api.get("/press").then((res) => {
      console.log(res.data);
      setPtresses(res.data);
    });
  }, []);

  const { t } = useTranslation();
  return (
    <MyContainer>
      <StyledPress className="m-0 pt-5 pb-5 gap-5">
        <Col md={7} className="d-flex flex-column  gap-5">
          <MainTitle $align="initial">{t("press.title")}</MainTitle>
          <SubTitle>{t("press.subtitle")}</SubTitle>
          <Text>{t("press.description")}</Text>
          {presses.map((item, idx) => (
            <TextContent key={idx} className="highlight">
              <div className="meta">
                {item.date} • {item.website_name}
              </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            </TextContent>
          ))}
        </Col>
        <Col md={4} className="d-flex flex-column  gap-5">
          <MainTitle $align="initial">{t("press.contactTitle")}</MainTitle>
          <Text>{t("press.contact.invite")}</Text>
          <Text>{t("press.contact.contribute")}</Text>
          <Text>{t("press.contact.legal")}</Text>
          <Text>
            <div>{t("press.contact.avilable")}</div>
            <a
              href="https://toxi-qr.vercel.app/"
              style={{ color: "#0d6efd", textDecoration: "none" }}
            >
              {t("press.contact.linkLabel")}
            </a>{" "}
            {t("press.contact.access")}
          </Text>
        </Col>
      </StyledPress>
    </MyContainer>
  );
};

export default Press;
