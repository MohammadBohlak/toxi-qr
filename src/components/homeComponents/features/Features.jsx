import React from "react";
import { CiBullhorn } from "react-icons/ci";
import { FaCcDiscover, FaUserSecret } from "react-icons/fa";
import { MdOutlineGroups2 } from "react-icons/md";
import { GiHoneycomb } from "react-icons/gi";
import { BiClipboard } from "react-icons/bi";
import MyContainer from "../../ui/myContainer/MyContainer";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { MainTitle, SubTitle, Text } from "../../common/texts";
import { BoxFeatures, FeatureIcon, StyledFeature } from "./features.styles";

const featuresList = [
  { icon: <BiClipboard />, key: "continueTracking" },
  { icon: <GiHoneycomb />, key: "createUsefulData" },
  { icon: <MdOutlineGroups2 />, key: "collectiveIdentification" },
  { icon: <FaUserSecret />, key: "beCitizenScientist" },
  { icon: <FaCcDiscover />, key: "discoverNature" },
  { icon: <CiBullhorn />, key: "fuelDiversity" },
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
