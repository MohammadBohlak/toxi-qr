import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

export const StyledJoinUs = styled.section`
  .invalid-feedback {
    font-size: var(--small-text);
  }
  h2 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: var(--normal-text);
  margin-right: 0.5rem;
`;

export const RowGroup = styled.div`
  display: flex;
  align-items: center;
  input,
  select {
    border: 2px solid #eee;
  }
  input:focus,
  select:focus {
    box-shadow: none;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
  input:-internal-autofill-selected {
    appearance: menulist-button;
    background-image: none !important;
    background-color: light-dark(
      rgba(232, 240, 254, 0),
      rgba(70, 90, 126, 0)
    ) !important;
    color: fieldtext !important;
  }
`;

export const StyledControl = styled(Form.Control)`
  flex: 1;
  font-size: var(--normal-text);
`;

export const CountryWrapper = styled.div`
  flex: 1;
  font-size: var(--normal-text);
`;

export const SendButton = styled(Button)`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: var(--normal-text);
  font-weight: bold;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: white;
  }
`;
