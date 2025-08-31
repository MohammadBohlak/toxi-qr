import { useTranslation } from "react-i18next";
import { SubTitle, Text } from "../../components/common/texts";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import {
  AidCard,
  AidGrid,
  AidTitle,
  CardContent,
  CardHeader,
  CardIcon,
  FirstAidSection,
  StepItem,
  StepList,
} from "./firstAid.styles";

const FirstAid = () => {
  const { t } = useTranslation("firstAid");

  return (
    <FirstAidSection>
      <MyContainer>
        <AidTitle>{t("title")}</AidTitle>

        <AidGrid>
          <AidCard $themeColor="#457b9d">
            <CardHeader $bgColor="linear-gradient(135deg, #1d3557 0%, #457b9d 100%)">
              <CardIcon>🐍</CardIcon>
              <SubTitle $color="white">{t("snake.title")}</SubTitle>
            </CardHeader>

            <CardContent>
              <StepList>
                {t("snake.steps", { returnObjects: true }).map(
                  (step, index) => (
                    <StepItem key={index} $bgColor="#457b9d">
                      <Text>{step}</Text>
                    </StepItem>
                  )
                )}
              </StepList>
            </CardContent>
          </AidCard>

          <AidCard $themeColor="#e63946">
            <CardHeader $bgColor="linear-gradient(135deg, #6a040f 0%, #e63946 100%)">
              <CardIcon>🕷️</CardIcon>
              <SubTitle $color="white">{t("spider.title")}</SubTitle>
            </CardHeader>

            <CardContent>
              <StepList>
                {t("spider.steps", { returnObjects: true }).map(
                  (step, index) => (
                    <StepItem key={index} $bgColor="#e63946">
                      <Text>{step}</Text>
                    </StepItem>
                  )
                )}
              </StepList>
            </CardContent>
          </AidCard>
        </AidGrid>
      </MyContainer>
    </FirstAidSection>
  );
};

export default FirstAid;
