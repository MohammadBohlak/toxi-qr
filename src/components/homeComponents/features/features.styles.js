import styled from "styled-components";

export const BoxFeatures = styled.div`
  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;
    * {
      text-align: center;
    }
    svg {
      font-size: 60px;
    }
  }
`;

export const StyledFeature = styled.section`
  background-color: ${({ theme }) => theme.colors.backLight};
  padding: var(--m-top) 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const FeatureIcon = styled.div`
  svg {
    font-size: 80px;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 10px;
  }
`;
