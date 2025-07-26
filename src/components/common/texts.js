import styled from "styled-components";

const TitleShared = styled.h2`
  text-align: ${({ $align }) => ($align ? $align : "initial")};
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.text)};
  font-weight: ${({ $normal }) => ($normal ? "normal" : "bold")};
`;

export const MainTitle = styled(TitleShared)`
  font-size: var(--big-text);
`;
export const SubTitle = styled(TitleShared)`
  font-size: var(--normal-text) !important;
`;

const TextShared = styled.div`
  text-align: ${({ $align }) => ($align ? $align : "initial")};
  color: ${({ theme, $color }) => ($color ? $color : theme.colors.text)};
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  word-wrap: keep-all;
  hyphens: manual;
  text-align: justify;
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
`;
export const Text = styled(TextShared)`
  font-size: var(--small-text);
`;
export const SmallText = styled(TextShared)`
  font-size: var(--min-text);
`;
