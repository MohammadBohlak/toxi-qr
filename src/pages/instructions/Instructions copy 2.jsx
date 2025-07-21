// src/pages/Instructions.jsx

import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import { MainTitle } from "../../components/common/texts";

const InstrSection = styled(StyledSection)`
  background: #f7f9fc;
  padding: 4rem 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  position: relative;
  padding: 2rem 1rem 2rem 3.5rem;
  margin-bottom: 1.5rem;
  background: ${({ theme, odd }) => (odd ? "#ffffff" : "#eef3fa")};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  overflow: hidden;

  &::before {
    content: "${({ step }) => step}";
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    font-size: 4rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.05);
    pointer-events: none;
  }
`;

const StepText = styled.p`
  position: relative;
  margin: 0;
  font-size: var(--small-text);
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

export default function Instructions() {
  const { t } = useTranslation();
  const items = Array.from({ length: 9 }, (_, i) =>
    t(`instructions.i${i + 1}`)
  );

  return (
    <InstrSection>
      <MyContainer>
        <MainTitle style={{ marginBottom: "2rem" }} $align="center">
          {t("instructions.title")}
        </MainTitle>

        <List>
          {items.map((text, idx) => (
            <Item key={idx} step={idx + 1} odd={idx % 2 === 0}>
              <StepText>{text}</StepText>
            </Item>
          ))}
        </List>
      </MyContainer>
    </InstrSection>
  );
}
