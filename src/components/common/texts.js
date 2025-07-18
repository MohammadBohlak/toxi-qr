import styled from "styled-components";

export const MainTitle = styled.h2`
  font-size: var(--big-text);
  text-align: ${({ $align }) => ($align ? $align : "center")};
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.text)};
  font-weight: ${({ $normal }) => ($normal ? "normal" : "bold")};
`;
export const SubTitle = styled.h2`
  font-size: var(--normal-text) !important;
  text-align: ${({ $align }) => ($align ? $align : "initial")};
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.text)};
  font-weight: ${({ $normal }) => ($normal ? "normal" : "bold")};
`;
export const Text = styled.div`
  font-size: var(--small-text);
  text-align: ${({ $align }) => ($align ? $align : "initial")};
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.text)};
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
`;
export const SmallText = styled.div`
  font-size: var(--min-text);
  text-align: ${({ $align }) => ($align ? `${$align}` : "initial")};
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.text)};
`;
