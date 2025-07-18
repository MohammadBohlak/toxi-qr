import React from "react";
import styled from "styled-components";
import { StyledSection } from "../../components/common/sections";
import { SubTitle, Text } from "../../components/common/texts";
import MyContainer from "../../components/ui/myContainer/MyContainer";
const StyledTerms = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  ol > li {
    margin-top: 30px;
  }
`;

const Terms = () => {
  return (
    <MyContainer>
      <StyledSection>
        <StyledTerms>
          <div>
            <SubTitle $align={"initial"}>Terms of Use</SubTitle>
          </div>
          <div>
            <Text>
              Read our Privacy Policy at{" "}
              <a href="https://toxi-qr.vercel.app/privacy">
                https://toxi-qr.vercel.app/privacy
              </a>
            </Text>
          </div>
          <div>
            <Text>
              Welcome to the ToxiQR website ("ToxiQR" or the "Platform"). The
              following Terms of Use govern all use of the ToxiQR website, iOS
              App and Android App, the ToxiQR Network Member websites, API, and
              all content, services and products available at or through the
              websites and apps (collectively, the "Platform"). The Platform is
              owned and operated by ToxiQR, an independent 501(c)(3) nonprofit
              based in the state of California in the United States of America
              (EIN 92-1296468). ToxiQR country portals in collaboration with
              ToxiQR Network "Members," are operated by ToxiQR. The Platform is
              offered subject to Your acceptance without modification of all of
              the terms and conditions contained herein and all other operating
              rules, policies (including, without limitation, the ToxiQR Privacy
              Policy at
              <a href="https://toxi-qr.vercel.app/privacy">
                https://toxi-qr.vercel.app/privacy
              </a>{" "}
              and procedures that may be published from time to time on this
              Site by ToxiQR (collectively, the “Agreement”).
            </Text>
          </div>
          <Text>
            Please read this Agreement carefully before accessing or using the
            Platform. By accessing or using any part of the Platform, each user
            ("You", "Your" or "User") agrees to the terms and conditions of this
            Agreement. If You do not agree to all the terms and conditions of
            this Agreement, You should not access the Platform or use any
            services made available via the Platform (the “Services”). The
            Platform and Services are available only to individuals who are at
            least 13 years old, unless parental permission has been obtained.
          </Text>
          <Text>
            <ol>
              <li>
                <strong>Your ToxiQR Account and Site.</strong>If You create an
                account on the Platform, You are responsible for maintaining the
                security of Your account, and You are fully responsible for all
                activities that occur under the account and any other actions
                taken in connection with the account. You must not post content
                to Your account in a misleading or unlawful manner, including in
                a manner intended to trade on the name or reputation of others.
                ToxiQR may, at its discretion, change or remove any content that
                it considers inappropriate or unlawful. Please immediately
                notify ToxiQR of any unauthorized uses of Your account or any
                other breaches of security. ToxiQR will not be liable for any
                acts or omissions by You, including any damages of any kind
                incurred as a result of such acts or omissions.
              </li>
              <li>
                <StyledTerms>
                  <Text>
                    <strong>Responsibility of Contributors.</strong> If You post
                    material to the Platform, or otherwise make (or allow any
                    third party to make) material available by means of the
                    Platform (any such material, “Content”), You are entirely
                    responsible for the content of, and any harm resulting from
                    Your use of, that Content. That is the case regardless of
                    whether the Content in question constitutes text, graphics,
                    an audio file, or computer software. If you own the Content
                    prior to contributing the Content to the Site, and that
                    Content is subject to Intellectual Property rights, you
                    retain ownership of those rights. Unless you specify
                    otherwise when you post Content, you agree to license
                    Content you contribute to the Platform under the Creative
                    Commons Attribution Noncommercial license (CC BY-NC).
                  </Text>
                  <Text>
                    By making Content available, You represent and warrant that:
                  </Text>
                  <ul style={{ listStyleType: "circle" }}>
                    <li>
                      <Text>
                        {" "}
                        the Content does not contain or install any viruses,
                        worms, malware, Trojan horses or other harmful or
                        destructive content;
                      </Text>
                    </li>
                    <li>
                      <Text>
                        {" "}
                        the Content is not spam and does not contain unethical
                        or unwanted commercial content designed to drive traffic
                        to third party sites or boost the search engine rankings
                        of third party sites, or to further unlawful acts (such
                        as phishing) or mislead recipients as to the source of
                        the material (such as spoofing);
                      </Text>
                    </li>
                    <li>
                      <Text>
                        {" "}
                        You will post only Content that is relevant to ToxiQR
                        and at a rate and volume that does not hinder other
                        Users' ability to use ToxiQR;
                      </Text>
                    </li>
                    <li>
                      <Text>
                        {" "}
                        the Content is not libelous or defamatory, does not
                        contain threats or incite violence towards individuals
                        or entities, and does not violate the privacy or
                        publicity rights of any third party;
                      </Text>
                    </li>
                    <li>
                      <Text>
                        {" "}
                        Your account details do not mislead others into thinking
                        they represent another specific person or organization
                        (unique pseudonyms are allowed). For example, Your login
                        name is not the name of a person other than Yourself or
                        company other than Your own;
                      </Text>
                    </li>
                    <li>
                      <Text>
                        {" "}
                        Your content is not getting advertised via unwanted
                        electronic messages such as spam links on newsgroups,
                        email lists, journals and web sites, and similar
                        unsolicited promotional methods.
                      </Text>
                    </li>
                  </ul>
                  <Text>
                    By submitting Content to ToxiQR for inclusion on the
                    Platform, You grant ToxiQR a world-wide, royalty-free, and
                    non-exclusive license to reproduce, modify, adapt, and
                    publish the Content solely for the purpose of displaying,
                    distributing, and promoting Your observations and journal
                    via ToxiQR, and for the purpose of displaying or promoting
                    the Content or ToxiQR itself in other venues, such as social
                    media or software distribution platforms. We may repackage
                    publicly available information associated with the Content
                    in a machine-readable format for a handful of partners,
                    including the Global Biodiversity Information Facility
                    (“GBIF”) and the Amazon Web Services (“AWS”) Open Data
                    Sponsorship Program, and others. You represent and warrant
                    that (a) You own and control all of the rights to the
                    Content that You post or You otherwise have the right to
                    post such Content to the Site; (b) the Content is accurate
                    and not misleading; and (c) use and posting of the Content
                    You supply does not violate these Terms of Use and will not
                    violate any rights of or cause injury to any person or
                    entity. If You delete Content, ToxiQR will use reasonable
                    efforts to remove it from the Platform, but You acknowledge
                    that caching or references to the Content may not be made
                    unavailable immediately.
                  </Text>
                  <Text>
                    Without limiting any of those representations or warranties,
                    ToxiQR has the right (though not the obligation), in
                    ToxiQR’s sole discretion, to terminate or deny access to and
                    use of the Platform to any individual or entity for any
                    reason.
                  </Text>
                </StyledTerms>
              </li>
              <li>
                <Text>
                  <strong>Responsibility of Website Visitors.</strong>
                  ToxiQR has not reviewed, and cannot review, all of the
                  material, including computer software, posted to the Platform,
                  and cannot therefore be responsible for that material’s
                  content, use or effects. By operating the Platform, ToxiQR
                  does not represent or imply that it endorses the material
                  posted to the Platform, or that it believes such material to
                  be accurate, useful, non-infringing or non-harmful. You are
                  responsible for taking precautions as necessary to protect
                  Yourself and Your computer systems from viruses, worms, Trojan
                  horses, and other harmful or destructive content. The Platform
                  may contain content that is offensive, indecent, or otherwise
                  objectionable, as well as content containing technical
                  inaccuracies, typographical mistakes, and other errors. The
                  Platform may also contain material that violates the privacy
                  or publicity rights, or infringes the intellectual property
                  and other proprietary rights, of third parties, or the
                  downloading, copying or use of which is subject to additional
                  terms and conditions, stated or unstated. ToxiQR disclaims any
                  responsibility for any harm resulting from the use by visitors
                  of the Platform, any mislabeling by Platform visitors of
                  observations, or from any downloading by those visitors of
                  content posted to the Platform.
                </Text>
              </li>
              <li>
                {" "}
                <strong>Inappropriate Use.</strong> You agree not to use the
                Platform, the ToxiQR Services, or any ToxiQR Content for any
                illegal, unlawful, or unauthorized purpose or activity,
                including but not limited to threatening, abusing, soliciting,
                spam, harassing, stalking, impersonating, or intimidating other
                ToxiQR Users.
              </li>
              <li>
                {" "}
                <strong>Copyright Infringement and DMCA Policy. </strong> ToxiQR
                respects the intellectual property rights of others, and
                requests that Users of the ToxiQR Platform and Service do the
                same.
              </li>
            </ol>
          </Text>
        </StyledTerms>
      </StyledSection>
    </MyContainer>
  );
};

export default Terms;
