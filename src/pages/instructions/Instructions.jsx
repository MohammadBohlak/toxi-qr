import React from "react";
import { MainTitle, Text } from "../../components/common/texts";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";

const StyledInsrtuctions = styled.section`
  ul li {
    margin: 20px 30px 0 30px;
  }
`;
const Instructions = () => {
  const { t } = useTranslation();
  return (
    <StyledInsrtuctions>
      <MyContainer>
        <StyledSection>
          <MainTitle style={{ marginBottom: "10px" }} $align={"initial"}>
            {t("instructions.title")}
          </MainTitle>
          <Text>
            <ul>
              <li>{t("instructions.i1")}</li>
              <li>{t("instructions.i2")}</li>
              <li>{t("instructions.i3")}</li>
              <li>{t("instructions.i4")}</li>
              <li>{t("instructions.i5")}</li>
              <li>{t("instructions.i6")}</li>
              <li>{t("instructions.i7")}</li>
              <li>{t("instructions.i8")}</li>
              <li>{t("instructions.i9")}</li>
            </ul>
          </Text>
        </StyledSection>
      </MyContainer>
    </StyledInsrtuctions>
  );
};

export default Instructions;
