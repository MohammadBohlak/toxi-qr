// Timeline.js

import { useTranslation } from "react-i18next";
import { MainTitle, SubTitle, Text } from "../../common/texts";
import MyContainer from "../../ui/myContainer/MyContainer";
import {
  Circle,
  Connector,
  Stage,
  StageContainer,
  TimelineContainer,
} from "./howWork.styles";
import styled from "styled-components";
import handPhone from "../../../assets/images/howWork/handPhone.png";
import msg from "../../../assets/images/howWork/msg.png";
import screen from "../../../assets/images/howWork/screen.png";

const StyledHowWork = styled.section`
  background-color: #fff;
  padding: var(--m-top) 0 calc(var(--m-top) + 30px) 0;
`;
export default function HowWork() {
  const { t } = useTranslation();
  return (
    <StyledHowWork>
      <MyContainer>
        <MainTitle style={{ marginBottom: "30px" }} $align="center">
          {t("howWork.title")}
        </MainTitle>
        <TimelineContainer>
          <StageContainer className="stages">
            <Stage>
              {/* <img className="phone" src={phone} /> */}
              <img className="handPhone" src={handPhone} />
            </Stage>
            <Stage>
              <img className="screen" src={screen} />
            </Stage>
            <Stage>
              <img className="msg" src={msg} />
            </Stage>
          </StageContainer>

          <StageContainer className="tl">
            <Circle>
              <span>1</span>
              <SubTitle>{t("howWork.steps.step1")}</SubTitle>
            </Circle>
            <Connector></Connector>
            <Circle>
              <span>2</span>
              <SubTitle>{t("howWork.steps.step2")}</SubTitle>
            </Circle>
            <Connector></Connector>
            <Circle>
              <span>3</span>
              <SubTitle>{t("howWork.steps.step3")}</SubTitle>
            </Circle>
          </StageContainer>
        </TimelineContainer>
      </MyContainer>
    </StyledHowWork>
  );
}
