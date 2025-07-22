// src/pages/Instructions.jsx

import { useTranslation } from "react-i18next";
import { FiCheckCircle } from "react-icons/fi";
import styled from "styled-components";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import { MainTitle } from "../../components/common/texts";

const GlassSection = styled(StyledSection)`
  /* خلفية متدرجة */
  background: radial-gradient(
    circle at top left,
    ${({ theme }) => theme.colors.backLight},
    ${({ theme }) => theme.colors.primary}
  );
  padding: 4rem 0;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  /* بطاقات جيّدة من 1 عمود إلى 3 أعمدة */
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

const GlassCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px); /* تأثير زجاجي */
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  padding: 1.75rem;
  min-height: 160px;
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-bottom: 1rem;

  svg {
    color: #fff;
    font-size: 20px;
  }
`;

const InstructionText = styled.p`
  margin: 0;
  font-size: var(--small-text);
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
`;

export default function Instructions() {
  const { t } = useTranslation("instructions");
  const items = Array.from({ length: 9 }, (_, i) => t(`i${i + 1}`));

  return (
    <GlassSection>
      <MyContainer>
        <MainTitle style={{ textAlign: "center", marginBottom: "2rem" }}>
          {t("title")}
        </MainTitle>

        <Grid>
          {items.map((text, idx) => (
            <GlassCard key={idx}>
              <IconWrapper>
                <FiCheckCircle />
              </IconWrapper>
              <InstructionText>{text}</InstructionText>
            </GlassCard>
          ))}
        </Grid>
      </MyContainer>
    </GlassSection>
  );
}
