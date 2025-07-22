import React, { useEffect, useState } from "react";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { MainTitle, SubTitle, Text } from "../../components/common/texts";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { StyledPress, TextContent } from "./press.styles";
import { api } from "../../utils/api/api";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Skeleton = styled.div`
  height: ${({ $h }) => $h || "40px"};
  width: ${({ $w }) => $w || "200px"};
  border-radius: 8px;
`;
const Press = () => {
  const [presses, setPtresses] = useState([]);
  useEffect(() => {
    api.get("/press").then((res) => {
      console.log(res.data);
      setPtresses(res.data);
    });
  }, []);
  const showLoader = useSelector((state) => state.loader.isLoading);
  const { t } = useTranslation("press");
  return (
    <>
      {!showLoader ? (
        <MyContainer>
          <StyledPress className="m-0 pt-5 pb-5 gap-5">
            <Col md={7} className="d-flex flex-column  gap-5">
              <>
                <MainTitle $align="initial">{t("title")}</MainTitle>
                <SubTitle>{t("subtitle")}</SubTitle>
                <Text>{t("description")}</Text>
                {presses.map((item, idx) => (
                  <TextContent key={idx} className="highlight">
                    <div className="meta">
                      {item.date} • {item.website_name}
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link}
                    </a>
                  </TextContent>
                ))}
              </>
            </Col>
            <Col md={4} className="d-flex flex-column  gap-5">
              <>
                <MainTitle $align="initial">{t("contactTitle")}</MainTitle>
                <Text>{t("contact.invite")}</Text>
                <Text>{t("contact.contribute")}</Text>
                <Text>{t("contact.legal")}</Text>
                <Text>
                  <div>{t("contact.avilable")}</div>
                  <a
                    href="https://toxi-qr.vercel.app/"
                    style={{ color: "#0d6efd", textDecoration: "none" }}
                  >
                    {t("contact.linkLabel")}
                  </a>{" "}
                  {t("contact.access")}
                </Text>
              </>
            </Col>
          </StyledPress>
        </MyContainer>
      ) : (
        <div style={{ minHeight: "500px" }}></div>
      )}
    </>
  );
};

export default Press;
