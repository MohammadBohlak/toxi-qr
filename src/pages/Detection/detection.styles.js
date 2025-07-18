import styled from "styled-components";

export const Submit = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: var(--small-text);
  font-weight: bold;
  border: 2px solid #ddd;
  padding: 10px 20px;
  border-radius: 6px;
  transition: color 0.3s ease, background 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: white;
  }
`;
