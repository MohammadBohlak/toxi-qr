import { FaBed, FaHandPaper } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { BsFillBandaidFill } from "react-icons/bs";
import MyContainer from "../../ui/myContainer/MyContainer";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { MainTitle, SubTitle, Text } from "../../common/texts";
import { BoxFeatures, FeatureIcon, StyledFeature } from "./features.styles";
import noSugar from "../../../assets/no-sugar-icon.svg";
const featuresList = [
  { icon: <FaAmbulance />, key: "callEmergency" },
  { icon: <FaHandHolding />, key: "cleanBite" },
  {
    icon: <img className="no-sugar" src={noSugar} alt="no sugar icon" />,
    key: "avoidIce",
  },
  { icon: <FaBed />, key: "immobilize" },
  { icon: <FaHandPaper />, key: "removeTightItems" },
  { icon: <BsFillBandaidFill />, key: "coverBite" },
];

const Features = () => {
  const { t } = useTranslation();

  return (
    <StyledFeature>
      <MyContainer>
        <MainTitle style={{ marginBottom: "20px" }} $align="center">
          {t("features.title")}
        </MainTitle>
        <Row className="m-0 gap-5 justify-content-between">
          {featuresList.map(({ icon, key }, idx) => (
            <Col md={5} key={idx}>
              <BoxFeatures className="d-flex gap-3 align-items-center">
                <FeatureIcon>{icon}</FeatureIcon>
                <div>
                  <SubTitle>{t(`features.${key}.title`)}</SubTitle>
                  <Text>{t(`features.${key}.description`)}</Text>
                </div>
              </BoxFeatures>
            </Col>
          ))}
        </Row>
      </MyContainer>
    </StyledFeature>
  );
};

export default Features;
