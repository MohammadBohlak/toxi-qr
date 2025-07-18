import styled from "styled-components";
import MyContainer from "../../ui/myContainer/MyContainer";

// الحاوية الرئيسية: أفقي على الديسكتوب، عمودي على الموبايل
export const TimelineContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  --width-stage: 300px;
  --gap: 30px;
  gap: var(--gap);
  @media (max-width: 1200px) {
    --width-stage: 200px;
  }
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    column-gap: var(--gap);
    justify-content: center;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
  }
`;

// تغليف كل مرحلة (LargeCircle فوق و Circle الرقم تحت)
export const Stage = styled.div`
  width: var(--width-stage);
  height: var(--width-stage);

  border-radius: 50%;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 80%;
    &.screen {
      max-width: 75%;
    }
  }
  .handPhone {
    margin-top: 50px;
  }
`;

// الدائرة الصغيرة للرقم (كما قبل)
export const Circle = styled.span`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  padding: 0px;
  box-sizing: initial;
  margin: 0;
  span {
    font-family: sans-serif !important;
  }
  /* font-size: var(--min-text);  */
  font-size: 16px;
  color: white;
  background-color: #d79e21;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: relative;
  vertical-align: middle;
  text-align: center;
  h2 {
    position: absolute;
    width: 300px;
    text-align: center;
    bottom: -50px;
    color: #d79e21;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

// الخط الواصل بين المراحل
export const Connector = styled.div`
  flex: 1;
  height: 4px;
  background-color: #d79e21;
  margin: 0 2px;

  @media (max-width: 768px) {
    width: 4px;
    margin: 2px 0;
  }
`;
export const StageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.tl {
    padding: 0 calc(calc(var(--width-stage) / 2) - calc(var(--gap) / 2));
  }
  &.txt {
    /* padding: 0 calc(calc(var(--width-stage) / 4) + calc(var(--gap) / 2)); */
    h2 {
      color: #d79e21;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    &.tl {
      padding: calc(calc(var(--width-stage) / 2) - calc(var(--gap) / 2)) 0;
    }
    &.stages {
      row-gap: var(--gap);
    }
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-size: var(--normal-text);
  font-weight: bold;
  margin-bottom: 30px;
`;
