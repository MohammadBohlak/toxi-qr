import React from "react";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import styled from "styled-components";
import { MainTitle, SubTitle, Text } from "../../components/common/texts";
import { useTranslation } from "react-i18next";

const StyledAid = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 30px;
  ul li {
    margin: 15px 40px 0 20px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    ul {
      list-style-type: none;
    }
  }
`;

const FirstAid = () => {
  const { t } = useTranslation();

  return (
    <StyledSection>
      <MyContainer>
        <StyledAid>
          <MainTitle className="mb-3 col-md-12">
            {t("firstAid.title")}
          </MainTitle>

          <div className="col-md-6">
            <SubTitle>{t("firstAid.snake.title")}</SubTitle>
            <Text>
              <ul>
                {t("firstAid.snake.steps", { returnObjects: true }).map(
                  (step, index) => (
                    <li key={index}>{step}</li>
                  )
                )}
              </ul>
            </Text>
          </div>

          <div className="col-md-6">
            <SubTitle>{t("firstAid.spider.title")}</SubTitle>
            <Text>
              <ul>
                {t("firstAid.spider.steps", { returnObjects: true }).map(
                  (step, index) => (
                    <li key={index}>{step}</li>
                  )
                )}
              </ul>
            </Text>
          </div>
        </StyledAid>
      </MyContainer>
    </StyledSection>
  );
};

export default FirstAid;
