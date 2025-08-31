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
  li::marker {
    font-size: var(--normal-text) !important;
    font-weight: bold;
  }
  li {
    margin: 20px 0;
  }
  li div {
    margin-top: 15px;
  }
  ol li ol li .title {
    margin-bottom: 20px;
  }
  li ol {
    margin-left: 30px;
    margin-right: 30px;
  }
  li ol {
  }
`;

export default function Privacy() {
  const { t } = useTranslation("privacy");

  // نقط المصفوفات المترجمة
  const imagePoints = t("informationCollect.imageUploads.points", {
    returnObjects: true,
  });
  const useInfoPoints = t("useYourInformation.points", {
    returnObjects: true,
  });
  const legalBasisPoints = t("legalBasis.points", {
    returnObjects: true,
  });
  const disclosurePoints = t("disclosure.points", {
    returnObjects: true,
  });
  const yourRightsPoints = t("yourRights.points", {
    returnObjects: true,
  });

  return (
    <MyContainer>
      <StyledSection>
        <StyledPrivacy>
          <MainTitle $align="initial">{t("title")}</MainTitle>

          <div>
            <Text
              dangerouslySetInnerHTML={{
                __html: t("intro"),
              }}
            />
          </div>

          <ol>
            {/* 1. Information We Collect */}
            <li>
              <SubTitle $align="initial">
                {t("informationCollect.title")}
              </SubTitle>

              <Text>
                <ol type="a">
                  {/* a) Image Uploads */}
                  <li>
                    <div className="title">
                      <Text $bold>
                        {t("informationCollect.imageUploads.title")}
                      </Text>
                    </div>
                    <div>{t("informationCollect.imageUploads.desc")}</div>
                    {imagePoints.map((pt, i) => (
                      <div key={i}>{pt}</div>
                    ))}
                  </li>

                  {/* b) Contact Details */}
                  <li>
                    <div className="title">
                      <Text $bold>
                        {t("informationCollect.contactDetails.title")}
                      </Text>
                    </div>
                    <div>{t("informationCollect.contactDetails.desc")}</div>
                  </li>

                  {/* c) Technical and Usage Data */}
                  <li>
                    <div className="title">
                      <Text $bold>
                        {t("informationCollect.technicalUsageData.title")}
                      </Text>
                    </div>
                    <div>{t("informationCollect.technicalUsageData.desc")}</div>
                  </li>
                </ol>
              </Text>
            </li>

            {/* 2. How We Use Your Information */}
            <li>
              <SubTitle $align="initial">
                {t("useYourInformation.title")}
              </SubTitle>
              <Text>
                {useInfoPoints.map((pt, i) => (
                  <div key={i}>{pt}</div>
                ))}
              </Text>
            </li>

            {/* 3. Legal Basis for Processing */}
            <li>
              <SubTitle $align="initial">{t("legalBasis.title")}</SubTitle>
              <Text>
                <div>{t("legalBasis.desc")}</div>
                {legalBasisPoints.map((pt, i) => (
                  <div key={i}>{pt}</div>
                ))}
              </Text>
            </li>

            {/* 4. Disclosure and Sharing of Data */}
            <li>
              <SubTitle $align="initial">{t("disclosure.title")}</SubTitle>
              <Text>
                <div>{t("disclosure.desc")}</div>
                {disclosurePoints.map((pt, i) => (
                  <div key={i}>{pt}</div>
                ))}
              </Text>
            </li>

            {/* 5. Data Retention */}
            <li>
              <SubTitle $align="initial">{t("dataRetention.title")}</SubTitle>
              <Text>{t("dataRetention.desc")}</Text>
            </li>

            {/* 6. Your Rights */}
            <li>
              <SubTitle $align="initial">{t("yourRights.title")}</SubTitle>
              <Text>
                <div>{t("yourRights.desc")}</div>
                {yourRightsPoints.map((pt, i) => (
                  <div key={i}>
                    {pt}
                    {i === yourRightsPoints.length - 1 && (
                      <a href="mailto:support@toxiqr.com">support@toxiqr.com</a>
                    )}
                  </div>
                ))}
              </Text>
            </li>

            {/* 7. Data Security */}
            <li>
              <SubTitle $align="initial">{t("dataSecurity.title")}</SubTitle>
              <Text>{t("dataSecurity.desc")}</Text>
            </li>

            {/* 8. Children’s Privacy */}
            <li>
              <SubTitle $align="initial">{t("childPrivacy.title")}</SubTitle>
              <Text>{t("childPrivacy.desc")}</Text>
            </li>

            {/* 9. Changes to This Privacy Policy */}
            <li>
              <SubTitle $align="initial">{t("policyChanges.title")}</SubTitle>
              <Text>{t("policyChanges.desc")}</Text>
            </li>

            {/* 10. Contact Us */}
            <li>
              <SubTitle $align="initial">{t("contactUs.title")}</SubTitle>
              <Text
                dangerouslySetInnerHTML={{
                  __html: t("contactUs.desc"),
                }}
              />
            </li>
          </ol>
        </StyledPrivacy>
      </StyledSection>
    </MyContainer>
  );
}
