import styled from "styled-components";
import { StyledSection } from "../../components/common/sections";

export const GlassSection = styled(StyledSection)`
  /* خلفية متدرجة */
  background: radial-gradient(
    circle at top left,
    ${({ theme }) => theme.colors.backLight},
    ${({ theme }) => theme.colors.primary}
  );
  padding: 4rem 0;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  /* بطاقات جيّدة من 1 عمود إلى 3 أعمدة */
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

export const GlassCard = styled.div`
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

export const IconWrapper = styled.div`
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
