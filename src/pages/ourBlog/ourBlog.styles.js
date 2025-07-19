import { InputGroup } from "react-bootstrap";
import styled from "styled-components";

export const SkeletonTitle = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 8px;
`;

export const StyledInputGroup = styled(InputGroup)`
  input,
  button {
    font-size: 16px;
    height: 33px;
    border-radius: 0;
  }
  input {
    border-top-left-radius: ${({ theme }) =>
      theme.lang === "en" ? "5px" : "0px"} !important;
    border-bottom-left-radius: ${({ theme }) =>
      theme.lang === "en" ? "5px" : "0px"} !important;
    border-top-right-radius: ${({ theme }) =>
      theme.lang === "ar" ? "5px" : "0px"} !important;
    border-bottom-right-radius: ${({ theme }) =>
      theme.lang === "ar" ? "5px" : "0px"} !important;
  }
  button {
    border-top-right-radius: ${({ theme }) =>
      theme.lang === "en" ? "5px" : "0px"} !important;
    border-bottom-right-radius: ${({ theme }) =>
      theme.lang === "en" ? "5px" : "0px"} !important;
    border-top-left-radius: ${({ theme }) =>
      theme.lang === "ar" ? "5px" : "0px"} !important;
    border-bottom-left-radius: ${({ theme }) =>
      theme.lang === "ar" ? "5px" : "0px"} !important;
  }
  input:focus {
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  button {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    &:hover,
    &:active,
    &:focus {
      background-color: #fff !important;
      color: ${({ theme }) => theme.colors.primary} !important;
      border-color: ${({ theme }) => theme.colors.primary} !important;
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: space-between;
      height: 66px;
      transition: transform 0.3s;
      svg {
        font-size: 24px;
      }
    }
  }
`;
