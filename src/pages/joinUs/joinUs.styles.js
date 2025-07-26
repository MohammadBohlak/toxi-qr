import { Form } from "react-bootstrap";
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
  margin-right: ${({ theme }) => (theme.lang === "en" ? "10px" : "auto")};
  margin-left: ${({ theme }) => (theme.lang === "ar" ? "10px" : "auto")};
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
    /* background-color: light-dark(
      rgba(232, 240, 254, 0),
      rgba(70, 90, 126, 0)
    ) !important; */
    background-color: white;
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

export const SendButton = styled.button`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: var(--normal-text);
  font-weight: bold;
  height: 50px;
  color: white;
  transition: background 0.3s, color 0.3s;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: white;
  }
`;
