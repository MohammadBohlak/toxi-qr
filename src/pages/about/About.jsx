import React from "react";
import styled from "styled-components";
import { StyledSection } from "../../components/common/sections";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { MainTitle, SubTitle, Text } from "../../components/common/texts";
import { useTranslation } from "react-i18next";

const StyledAbout = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  row-gap: 30px;
  flex-wrap: wrap;
`;
const About = () => {
  const { t } = useTranslation("about");
  return (
    <MyContainer>
      <StyledSection>
        <StyledAbout>
          <div className="col-md-12">
            <MainTitle $align="initial" className="mb-3">
              {t("title")}
            </MainTitle>
            <Text>{t("text")}</Text>
          </div>

          <div className="col-md-6 p-3">
            <SubTitle>{t("mision.title")}</SubTitle>
            <Text>{t("mision.text")}</Text>
          </div>
          <div className="col-md-6 p-3">
            <SubTitle>{t("vision.title")}</SubTitle>
            <Text>{t("vision.text")}</Text>
          </div>
          <div className="m-auto">
            <SubTitle $align="center">{t("team.title")}</SubTitle>
            {[1, 2, 3].map((e, i) => (
              <Text key={i} $align="center">
                <strong>{t(`team.member${e}.name`)}</strong> ,{" "}
                {t(`team.member${e}.specialist`)}
              </Text>
            ))}
          </div>
        </StyledAbout>
      </StyledSection>
    </MyContainer>
  );
};

export default About;
