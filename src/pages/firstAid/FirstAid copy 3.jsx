import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

// Main container with clean, professional design
const FirstAidContainer = styled.section`
  min-height: 100vh;
  background: #f8fafc;
  padding: 60px 0;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Clean, modern title
const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 80px;
  color: #1a202c;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 60px;
  }
`;

// Modern grid layout
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

// Clean card design with subtle borders
const FirstAidCard = styled.div`
  background: #ffffff;
  border: 2px solid ${(props) => props.borderColor || "#e2e8f0"};
  border-radius: 0;
  padding: 50px;
  position: relative;

  @media (max-width: 768px) {
    padding: 30px 25px;
  }
`;

// Header section of each card
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 25px;
  border-bottom: 1px solid #e2e8f0;
`;

// Large, bold icon
const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  background: ${(props) => props.bgColor || "#3182ce"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;

  svg {
    width: 35px;
    height: 35px;
    color: white;
  }
`;

// Clean typography for titles
const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  line-height: 1.2;
`;

// Steps container with clean list design
const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StepItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 25px;
  background: #f7fafc;
  border-right: 4px solid ${(props) => props.accentColor || "#3182ce"};
`;

const StepNumber = styled.div`
  width: 35px;
  height: 35px;
  background: ${(props) => props.bgColor || "#3182ce"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  margin-right: 20px;
  flex-shrink: 0;
`;

const StepText = styled.p`
  color: #4a5568;
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0;
  font-weight: 400;
`;

// Emergency info banner
const EmergencyInfo = styled.div`
  background: #fed7d7;
  border: 2px solid #fc8181;
  padding: 30px;
  margin-bottom: 60px;
  text-align: center;

  h3 {
    color: #c53030;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 15px 0;
  }

  p {
    color: #742a2a;
    font-size: 1.1rem;
    margin: 0;
    font-weight: 500;
  }
`;

// Statistics section
const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 80px;
  padding-top: 60px;
  border-top: 2px solid #e2e8f0;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 30px 20px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.color || "#3182ce"};
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: #718096;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

// Custom icons
const SnakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V8H13V6H11M11,10V16H13V10H11Z" />
  </svg>
);

const SpiderIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V8H13V6H11M11,10V16H13V10H11Z" />
  </svg>
);

const FirstAid = () => {
  const { t } = useTranslation("firstAid");

  return (
    <FirstAidContainer>
      <ContentWrapper>
        <MainTitle>{t("title")}</MainTitle>

        <EmergencyInfo>
          <h3>معلومات مهمة للطوارئ</h3>
          <p>في حالات الطوارئ الطبية، اتصل فوراً برقم الطوارئ المحلي</p>
        </EmergencyInfo>

        <CardsGrid>
          <FirstAidCard borderColor="#e53e3e">
            <CardHeader>
              <IconContainer bgColor="#e53e3e">
                <SnakeIcon />
              </IconContainer>
              <CardTitle>{t("snake.title")}</CardTitle>
            </CardHeader>

            <StepsList>
              {t("snake.steps", { returnObjects: true }).map((step, index) => (
                <StepItem key={index} accentColor="#e53e3e">
                  <StepNumber bgColor="#e53e3e">{index + 1}</StepNumber>
                  <StepText>{step}</StepText>
                </StepItem>
              ))}
            </StepsList>
          </FirstAidCard>

          <FirstAidCard borderColor="#38a169">
            <CardHeader>
              <IconContainer bgColor="#38a169">
                <SpiderIcon />
              </IconContainer>
              <CardTitle>{t("spider.title")}</CardTitle>
            </CardHeader>

            <StepsList>
              {t("spider.steps", { returnObjects: true }).map((step, index) => (
                <StepItem key={index} accentColor="#38a169">
                  <StepNumber bgColor="#38a169">{index + 1}</StepNumber>
                  <StepText>{step}</StepText>
                </StepItem>
              ))}
            </StepsList>
          </FirstAidCard>
        </CardsGrid>

        <StatsSection>
          <StatCard>
            <StatNumber color="#e53e3e">24/7</StatNumber>
            <StatLabel>خدمة الطوارئ</StatLabel>
          </StatCard>

          <StatCard>
            <StatNumber color="#38a169">911</StatNumber>
            <StatLabel>رقم الإسعاف</StatLabel>
          </StatCard>

          <StatCard>
            <StatNumber color="#3182ce">100%</StatNumber>
            <StatLabel>فعالية الإسعاف السريع</StatLabel>
          </StatCard>

          <StatCard>
            <StatNumber color="#805ad5">5</StatNumber>
            <StatLabel>دقائق حرجة</StatLabel>
          </StatCard>
        </StatsSection>
      </ContentWrapper>
    </FirstAidContainer>
  );
};

export default FirstAid;
