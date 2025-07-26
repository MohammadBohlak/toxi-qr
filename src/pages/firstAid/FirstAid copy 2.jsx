import React from "react";
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";

// Animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Main container with modern gradient background
const FirstAidContainer = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(120, 119, 198, 0.3) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 50%
      );
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  position: relative;
  z-index: 1;
`;

// Modern title with glass morphism effect
const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 60px;
  color: #ffffff;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: ${fadeInUp} 1s ease-out;

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
    margin: 20px auto;
    border-radius: 2px;
  }
`;

// Cards container with modern grid layout
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

// Modern card with glass morphism and hover effects
const FirstAidCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: ${slideInLeft} 1s ease-out;

  &:nth-child(even) {
    animation: ${slideInRight} 1s ease-out;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${(props) =>
      props.gradient || "linear-gradient(90deg, #ff6b6b, #4ecdc4)"};
    border-radius: 24px 24px 0 0;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.15);

    .card-icon {
      animation: ${pulse} 1s infinite;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 20px;

    &:hover {
      transform: translateY(-5px) scale(1.01);
    }
  }
`;

// Icon container with modern styling
const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  background: ${(props) =>
    props.gradient || "linear-gradient(135deg, #ff6b6b, #ee5a52)"};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  svg {
    width: 40px;
    height: 40px;
    color: white;
  }
`;

// Modern subtitle
const CardTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

// Steps container with modern list styling
const StepsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StepItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border-left: 4px solid ${(props) => props.color || "#4ecdc4"};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(5px);
  }

  &::before {
    content: "${(props) => props.index}";
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: ${(props) => props.color || "#4ecdc4"};
    color: white;
    border-radius: 50%;
    font-weight: 700;
    font-size: 0.9rem;
    margin-right: 16px;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const StepText = styled.span`
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

// Emergency banner
const EmergencyBanner = styled.div`
  background: linear-gradient(135deg, #ff4757, #ff3838);
  color: white;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(255, 71, 87, 0.3);
  animation: ${fadeInUp} 1s ease-out 0.5s both;

  h3 {
    margin: 0 0 10px 0;
    font-size: 1.4rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 1rem;
    opacity: 0.9;
  }
`;

// Icons components
const SnakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const SpiderIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const FirstAid = () => {
  const { t } = useTranslation("firstAid");

  return (
    <FirstAidContainer>
      <ContentWrapper>
        <MainTitle>{t("title")}</MainTitle>

        <EmergencyBanner>
          <h3>⚠️ تذكر دائماً</h3>
          <p>في حالات الطوارئ، اتصل بالإسعاف فوراً على الرقم 911</p>
        </EmergencyBanner>

        <CardsContainer>
          <FirstAidCard gradient="linear-gradient(135deg, #ff6b6b, #ee5a52)">
            <IconContainer
              className="card-icon"
              gradient="linear-gradient(135deg, #ff6b6b, #ee5a52)"
            >
              <SnakeIcon />
            </IconContainer>
            <CardTitle>{t("snake.title")}</CardTitle>
            <StepsList>
              {t("snake.steps", { returnObjects: true }).map((step, index) => (
                <StepItem key={index} index={index + 1} color="#ff6b6b">
                  <StepText>{step}</StepText>
                </StepItem>
              ))}
            </StepsList>
          </FirstAidCard>

          <FirstAidCard gradient="linear-gradient(135deg, #4ecdc4, #44a08d)">
            <IconContainer
              className="card-icon"
              gradient="linear-gradient(135deg, #4ecdc4, #44a08d)"
            >
              <SpiderIcon />
            </IconContainer>
            <CardTitle>{t("spider.title")}</CardTitle>
            <StepsList>
              {t("spider.steps", { returnObjects: true }).map((step, index) => (
                <StepItem key={index} index={index + 1} color="#4ecdc4">
                  <StepText>{step}</StepText>
                </StepItem>
              ))}
            </StepsList>
          </FirstAidCard>
        </CardsContainer>
      </ContentWrapper>
    </FirstAidContainer>
  );
};

export default FirstAid;
