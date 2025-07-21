// src/pages/Privacy.jsx

import React from "react";
import { useTranslation } from "react-i18next";
import { MainTitle, SubTitle, Text } from "../../components/common/texts";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import styled from "styled-components";

const StyledPrivacy = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  li {
    margin: 20px 0;
  }
  li div {
    margin-top: 15px;
  }
  ol li ol li .title {
    margin-bottom: 20px;
  }
`;

export default function Privacy() {
  const { t } = useTranslation();

  // نقط المصفوفات المترجمة
  const imagePoints = t("privacy.informationCollect.imageUploads.points", {
    returnObjects: true,
  });
  const useInfoPoints = t("privacy.useYourInformation.points", {
    returnObjects: true,
  });
  const legalBasisPoints = t("privacy.legalBasis.points", {
    returnObjects: true,
  });
  const disclosurePoints = t("privacy.disclosure.points", {
    returnObjects: true,
  });
  const yourRightsPoints = t("privacy.yourRights.points", {
    returnObjects: true,
  });

  return (
    <MyContainer>
      <StyledSection>
        <StyledPrivacy>
          <MainTitle $align="initial">{t("privacy.title")}</MainTitle>

          <div>
            <Text
              dangerouslySetInnerHTML={{
                __html: t("privacy.intro"),
              }}
            />
          </div>

          <ol>
            {/* 1. Information We Collect */}
            <li>
              <SubTitle $align="initial">
                {t("privacy.informationCollect.title")}
              </SubTitle>

              <Text>
                <ol type="a">
                  {/* a) Image Uploads */}
                  <li>
                    <div className="title">
                      <Text $bold>
                        {t("privacy.informationCollect.imageUploads.title")}
                      </Text>
                    </div>
                    <div>
                      {t("privacy.informationCollect.imageUploads.desc")}
                    </div>
                    {imagePoints.map((pt, i) => (
                      <div key={i}>{pt}</div>
                    ))}
                  </li>

                  {/* b) Contact Details */}
                  <li>
                    <div className="title">
                      <Text $bold>
                        {t("privacy.informationCollect.contactDetails.title")}
                      </Text>
                    </div>
                    <div>
                      {t("privacy.informationCollect.contactDetails.desc")}
                    </div>
                  </li>

                  {/* c) Technical and Usage Data */}
                  <li>
                    <div className="title">
                      <Text $bold>
                        {t(
                          "privacy.informationCollect.technicalUsageData.title"
                        )}
                      </Text>
                    </div>
                    <div>
                      {t("privacy.informationCollect.technicalUsageData.desc")}
                    </div>
                  </li>
                </ol>
              </Text>
            </li>

            {/* 2. How We Use Your Information */}
            <li>
              <SubTitle $align="initial">
                {t("privacy.useYourInformation.title")}
              </SubTitle>
              <Text>
                {useInfoPoints.map((pt, i) => (
                  <div key={i}>{pt}</div>
                ))}
              </Text>
            </li>

            {/* 3. Legal Basis for Processing */}
            <li>
              <SubTitle $align="initial">
                {t("privacy.legalBasis.title")}
              </SubTitle>
              <Text>
                <div>{t("privacy.legalBasis.desc")}</div>
                {legalBasisPoints.map((pt, i) => (
                  <div key={i}>{pt}</div>
                ))}
              </Text>
            </li>

            {/* 4. Disclosure and Sharing of Data */}
            <li>
              <SubTitle $align="initial">
                {t("privacy.disclosure.title")}
              </SubTitle>
              <Text>
                <div>{t("privacy.disclosure.desc")}</div>
                {disclosurePoints.map((pt, i) => (
                  <div key={i}>{pt}</div>
                ))}
              </Text>
            </li>

            {/* 5. Data Retention */}
            <li>
              <SubTitle $align="initial">
                {t("privacy.dataRetention.title")}
              </SubTitle>
              <Text>{t("privacy.dataRetention.desc")}</Text>
            </li>

            {/* 6. Your Rights */}
            <li>
              <SubTitle $align="initial">
                {t("privacy.yourRights.title")}
              </SubTitle>
              <Text>
                <div>{t("privacy.yourRights.desc")}</div>
                {yourRightsPoints.map((pt, i) => (
                  <div key={i}>{pt}</div>
                ))}
              </Text>
            </li>

            {/* 7. Data Security */}
            <li>
              <SubTitle $align="initial">
                {t("privacy.dataSecurity.title")}
              </SubTitle>
              <Text>{t("privacy.dataSecurity.desc")}</Text>
            </li>

            {/* 8. Children’s Privacy */}
            <li>
              <SubTitle $align="initial">
                {t("privacy.childPrivacy.title")}
              </SubTitle>
              <Text>{t("privacy.childPrivacy.desc")}</Text>
            </li>

            {/* 9. Changes to This Privacy Policy */}
            <li>
              <SubTitle $align="initial">
                {t("privacy.policyChanges.title")}
              </SubTitle>
              <Text>{t("privacy.policyChanges.desc")}</Text>
            </li>

            {/* 10. Contact Us */}
            <li>
              <SubTitle $align="initial">
                {t("privacy.contactUs.title")}
              </SubTitle>
              <Text
                dangerouslySetInnerHTML={{
                  __html: t("privacy.contactUs.desc"),
                }}
              />
            </li>
          </ol>
        </StyledPrivacy>
      </StyledSection>
    </MyContainer>
  );
}
