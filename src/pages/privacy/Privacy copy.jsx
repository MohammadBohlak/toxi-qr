import React from "react";
import { MainTitle, SubTitle, Text } from "../../components/common/texts";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const StyledPrivacy = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  li {
    margin: 20px 0px;
  }
  li div {
    margin-top: 15px;
  }
  ol li ol li .title {
    margin-bottom: 20px;
  }
`;

const Privacy = () => {
  const { t } = useTranslation();
  return (
    <MyContainer>
      <StyledSection>
        <StyledPrivacy>
          <MainTitle $align="initial">{t("privacy.title")}</MainTitle>
          <div>
            <Text>{t("privacy.intro")}</Text>
          </div>
          <ol>
            <SubTitle>
              <li>
                <SubTitle $align="initial">Information We Collect</SubTitle>
                <Text>
                  <ol type="a">
                    <li>
                      <div className="title">
                        <Text $bold={true}>Image Uploads</Text>
                      </div>
                      By sending photos to ToxiQR for AI scanning, we receive
                      the photos and hold them on a temporary basis to scan and
                      identify the presence of poisonous or harmless species.
                      You grant us permission to use the photo for:
                      <div>AI detection and in-house testing</div>
                      <div>
                        Scientific research and public awareness campaigns
                      </div>
                      <div>
                        Education blogs or published news on wildlife
                        identification and safety
                      </div>
                      <div>
                        We take care that no identifying personal information
                        (e.g., names, geolocation data) is associated with
                        images published in any public or scientific
                        environment.
                      </div>
                    </li>
                    <li>
                      <div className="title">
                        <Text $bold={true}>Contact Details</Text>
                      </div>

                      <div>
                        If you request professional confirmation or wish to be
                        notified, we may retain your e-mail address or other
                        contact information for the exclusive purpose of
                        communicating results or information related to your
                        inquiry.
                      </div>
                    </li>
                    <li>
                      <div className="title">
                        <Text $bold={true}>Technical and Usage Data</Text>
                      </div>

                      <div>
                        We are able to collect non-personal data like IP
                        address, browser type, device information, accessed
                        pages, time on site, and referring URLs. We use this
                        data in tracking the performance of websites, improving
                        user experience, and determining unauthorized misuse or
                        abuse.
                      </div>
                    </li>
                  </ol>
                </Text>
              </li>
              <li>
                <SubTitle $align="initial">
                  {" "}
                  How We Use Your Information
                </SubTitle>
                <Text>
                  <div>
                    For providing accurate species identification using our AI
                    facilities
                  </div>
                  <div>
                    For answering user queries and expert verification requests
                  </div>
                  <div>
                    For improving the functionality and security of our platform
                  </div>
                  <div>
                    For conducting scientific research or posting content for
                    learning and knowledge reasons
                  </div>
                </Text>
              </li>
              <li>
                Legal Basis for Processing
                <Text>
                  <div>
                    We process your information based on one or more of the
                    following legal basis:
                  </div>
                  <div>
                    Your consent (e.g., sending photos, requesting us to
                    confirm)
                  </div>
                  <div>
                    Legitimate interests in improving our services and promoting
                    public knowledge
                  </div>
                  <div>Being required by law</div>
                </Text>
              </li>
              <li>
                Disclosure and Sharing of Data
                <Text>
                  <div>
                    ToxiQR does not sell or rent out your personal data to other
                    parties. We might disclose your data:
                  </div>
                  <div>
                    To service providers assisting in website operation (under
                    strict confidentiality agreements)
                  </div>
                  <div>
                    When required by law or to respond to lawful requests from
                    public authorities
                  </div>
                  <div>
                    To protect the rights, property, or safety of ToxiQR, our
                    users, or others
                  </div>
                </Text>
              </li>
              <li>
                Data Retention
                <Text>
                  <div>
                    Uploaded images and associated data are retained only as
                    long as necessary for the purposes outlined in this policy.
                    Irrelevant or unused data may be deleted periodically.
                  </div>
                </Text>
              </li>
              <li>
                Your Rights
                <Text>
                  <div>Depending on where you are, you may be entitled to:</div>
                  <div>
                    Have access to the personal data we retain about you
                  </div>
                  <div>Have your information corrected or removed</div>
                  <div>Object or restrict specific processing activities</div>
                  <div>
                    Withdraw consent at any time (without affecting any prior
                    processing)
                  </div>
                  <div>
                    To exercise any of these, please contact us on:{" "}
                    <a href="mailto:support@toxiqr.com">support@toxiqr.com</a>
                  </div>
                </Text>
              </li>
              <li>Data Security</li>
              <Text>
                <div>
                  We take the proper technical and organizational measures to
                  protect your data. There is no way that is 100% secure, but we
                  aim to keep your information safe from unauthorized access,
                  modification, disclosure, or destruction.
                </div>
              </Text>
              <li>
                Children's Privacy
                <Text>
                  <div>
                    ToxiQR is not designed for kids under 13 years old. We don't
                    knowingly collect information from kids. If we find this
                    type of information has been collected, we will delete it
                    immediately.
                  </div>
                </Text>
              </li>
              <li>
                Changes to This Privacy Policy
                <Text>
                  We may change this Privacy Policy at any time. We encourage
                  the users to visit this page often. Continued use of ToxiQR
                  after changes will be deemed to be your consent to the new
                  policy.
                </Text>
              </li>
              <li>
                Contact Us
                <Text>
                  <div>
                    If you have any questions or concerns about this Privacy
                    Policy, please contact us: Email:{" "}
                    <a href="mailto:support@toxiqr.com">support@toxiqr.com</a>
                  </div>
                </Text>
              </li>
            </SubTitle>
          </ol>
        </StyledPrivacy>
      </StyledSection>
    </MyContainer>
  );
};

export default Privacy;
