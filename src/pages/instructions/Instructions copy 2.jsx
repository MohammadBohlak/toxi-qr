// src/pages/Instructions.jsx

import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { MainTitle, Text } from "../../components/common/texts";
import { StyledSection } from "../../components/common/sections";

const TimelineSection = styled.section`
  position: relative;
  padding: 4rem 0;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  width: 50%;
  padding: 1rem 2rem;
  box-sizing: border-box;

  &:nth-child(even) {
    left: ${({ theme }) => (theme.lang === "en" ? 0 : "auto")};
    right: ${({ theme }) => (theme.lang === "ar" ? 0 : "auto")};
    /* text-align: right; */
  }

  &:nth-child(odd) {
    left: ${({ theme }) => (theme.lang === "en" ? "50%" : "auto")};
    right: ${({ theme }) => (theme.lang === "ar" ? "50%" : "auto")};
    /* text-align: left; */
  }
`;

const Circle = styled.span`
  font-size: 15px !important;
  font-family: sans-serif;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  margin-left: auto;
  margin-right: auto;
`;

const InstructionText = styled.div`
  display: inline-block;
  margin: 0.5rem 0 0 0;
  padding: 10px 20px;
  background: #fff;
  /* background: ${({ theme }) => theme.colors.backLight}; */
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export default function Instructions() {
  const { t } = useTranslation();
  // نجمع التعليمات من الترجمة
  const items = Array.from({ length: 9 }, (_, i) =>
    t(`instructions.i${i + 1}`)
  );

  return (
    <StyledSection>
      <MainTitle>{t("instructions.title")}</MainTitle>

      <TimelineSection>
        <MyContainer>
          {items.map((text, idx) => (
            <TimelineItem key={idx}>
              <InstructionText>
                <Circle>{idx + 1}</Circle>
                <Text className="mt-2">{text}</Text>
              </InstructionText>
            </TimelineItem>
          ))}
        </MyContainer>
      </TimelineSection>
    </StyledSection>
  );
}
