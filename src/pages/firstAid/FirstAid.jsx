import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { MainTitle, SubTitle, Text } from "../../components/common/texts";
import MyContainer from "../../components/ui/myContainer/MyContainer";

// ======== المكونات الأساسية ========
const FirstAidSection = styled.section`
  /* background: #f8f9fa; */
  padding: 5rem 0;
  position: relative;
  /* overflow: hidden; */
`;

const AidTitle = styled(MainTitle)`
  text-align: center;
  margin-bottom: 4rem;
  color: #1d3557;
  position: relative;
  letter-spacing: -0.5px;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: #e63946;
    margin: 20px auto 0;
    border-radius: 2px;
  }
`;

const AidGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AidCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  position: relative;
  border-top: 4px solid ${(props) => props.themeColor};
  transition: none;
`;

const CardHeader = styled.div`
  background: ${(props) => props.bgColor};
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
`;

const CardContent = styled.div`
  padding: 30px;
  position: relative;
`;

const StepList = styled.ul`
  list-style: none;
  padding: 0;
  counter-reset: step-counter;
`;

const StepItem = styled.li`
  padding-left: ${({ theme }) => (theme.lang === "en" ? "60px" : "auto")};
  padding-right: ${({ theme }) => (theme.lang === "ar" ? "60px" : "auto")};
  position: relative;
  margin-bottom: 25px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1d3557;
  min-height: 50px;
  display: flex;
  align-items: center;

  &::before {
    counter-increment: step-counter;
    content: counter(step-counter);
    position: absolute;
    left: ${({ theme }) => (theme.lang === "en" ? "0px" : "auto")};
    right: ${({ theme }) => (theme.lang === "ar" ? "0px" : "auto")};
    width: 40px;
    height: 40px;
    background: ${(props) => props.bgColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--small-text);
    font-family: sans-serif;
    font-weight: bold;
    color: white;
  }

  &:last-child {
    margin-bottom: 0;
  }
  div {
    /* hyphens: none;
    -webkit-hyphens: none;
    -moz-hyphens: none;

    word-break: normal;
    word-wrap: normal;
    text-align: inherit; */
  }
`;

// ======== المكون الرئيسي ========
const FirstAid = () => {
  const { t } = useTranslation("firstAid");

  return (
    <FirstAidSection>
      {/* <DecorativeElement /> */}
      {/* <DecorativeElement /> */}

      <MyContainer>
        <AidTitle>{t("title")}</AidTitle>

        <AidGrid>
          <AidCard themeColor="#457b9d">
            <CardHeader bgColor="linear-gradient(135deg, #1d3557 0%, #457b9d 100%)">
              <CardIcon>🐍</CardIcon>
              <SubTitle $color="white">{t("snake.title")}</SubTitle>
            </CardHeader>

            <CardContent>
              <StepList>
                {t("snake.steps", { returnObjects: true }).map(
                  (step, index) => (
                    <StepItem key={index} bgColor="#457b9d">
                      <Text>{step}</Text>
                    </StepItem>
                  )
                )}
              </StepList>
            </CardContent>
          </AidCard>

          <AidCard themeColor="#e63946">
            <CardHeader bgColor="linear-gradient(135deg, #6a040f 0%, #e63946 100%)">
              <CardIcon>🕷️</CardIcon>
              <SubTitle $color="white">{t("spider.title")}</SubTitle>
            </CardHeader>

            <CardContent>
              <StepList>
                {t("spider.steps", { returnObjects: true }).map(
                  (step, index) => (
                    <StepItem key={index} bgColor="#e63946">
                      <Text>{step}</Text>
                    </StepItem>
                  )
                )}
              </StepList>
            </CardContent>
          </AidCard>
        </AidGrid>
      </MyContainer>
    </FirstAidSection>
  );
};

export default FirstAid;
