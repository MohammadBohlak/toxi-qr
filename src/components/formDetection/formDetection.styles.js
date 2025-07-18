// import { Form } from "react-bootstrap";
import { Form as RBForm } from "react-bootstrap";
import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: var(--small-text) !important;

  padding: 20px 0;
  font-size: var(--normal-text);
  input {
    height: 36px;
  }
  input {
    font-size: var(--small-text);
    border: 2px solid #ddd;
    border-radius: 5px;
    padding: 2px 5px;
    height: 40px;
    border: 2px solid #ddd;
    transition: border-color 0.3s;
    &:focus {
      box-shadow: none;
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
    &:hover {
      border-color: #aaa !important;
    }
  }
  button {
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid transparent;
    color: white;
    font-size: var(--normal-text);
    height: 60px;
    width: 120px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
  }
`;
