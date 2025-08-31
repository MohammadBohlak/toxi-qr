import styled from "styled-components";
import { MainTitle } from "../../components/common/texts";

// ======== المكونات الأساسية ========
export const FirstAidSection = styled.section`
  padding: 5rem 0;
  position: relative;
`;

export const AidTitle = styled(MainTitle)`
  text-align: center;
  margin-bottom: 4rem;
  color: #1d3557;
  position: relative;
  letter-spacing: -0.5px;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: #e63946;
    margin: 20px auto 0;
    border-radius: 2px;
  }
`;

export const AidGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AidCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  position: relative;
  border-top: 4px solid ${(props) => props.$themeColor};
  transition: none;
`;

export const CardHeader = styled.div`
  background: ${(props) => props.$bgColor};
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
`;

export const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
`;

export const CardContent = styled.div`
  padding: 30px;
  position: relative;
`;

export const StepList = styled.ul`
  list-style: none;
  padding: 0;
  counter-reset: step-counter;
`;

export const StepItem = styled.li`
  padding-left: ${({ theme }) => (theme.lang === "en" ? "60px" : "auto")};
  padding-right: ${({ theme }) => (theme.lang === "ar" ? "60px" : "auto")};
  position: relative;
  margin-bottom: 25px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1d3557;
  min-height: 50px;
  display: flex;
  align-items: center;

  &::before {
    counter-increment: step-counter;
    content: counter(step-counter);
    position: absolute;
    left: ${({ theme }) => (theme.lang === "en" ? "0px" : "auto")};
    right: ${({ theme }) => (theme.lang === "ar" ? "0px" : "auto")};
    width: 40px;
    height: 40px;
    background: ${(props) => props.$bgColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--small-text);
    font-family: sans-serif;
    font-weight: bold;
    color: white;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
