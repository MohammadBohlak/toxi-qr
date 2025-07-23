import { useTranslation } from "react-i18next";
import { SubTitle, Text } from "../../common/texts";
import { LeftContent, RightContent } from "./contributingSection.styles";
import { Row } from "react-bootstrap";

export const ContributingSection = () => {
  const { t } = useTranslation("home");
  return (
    <section>
      <Row style={{ maxWidth: "100%", margin: "0" }}>
        <LeftContent
          md={6}
          className="d-flex justify-content-center flex-column"
        >
          <SubTitle $bold style={{ whiteSpace: "nowrap" }} $color="white">
            {t("contributing.title")}
          </SubTitle>
          <Text $color="white"> {t("contributing.description")}</Text>
        </LeftContent>
        <RightContent md={6}></RightContent>
      </Row>
    </section>
  );
};
