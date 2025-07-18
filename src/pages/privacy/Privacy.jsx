import React from "react";
import { MainTitle, Text } from "../../components/common/texts";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import styled from "styled-components";
const StyledPrivacy = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const Privacy = () => {
  return (
    <MyContainer>
      <StyledSection>
        <StyledPrivacy>
          <MainTitle $align="initial">Privacy Policy</MainTitle>
          <div>
            <Text>
              This is the privacy policy ("Privacy Policy") of the ToxiQR.org
              website, iOS App, and Android App, the ToxiQR Network Member
              websites, and describes how ToxiQR ("ToxiQR," "We," "Us" or "Our")
              handles Personal Information (as defined below) that users ("You,"
              "Your” or "User") provide to Us, or that We collect from You
              through the use of Our Website, which is located at www.ToxiQR.org
              ) and through the ToxiQR Network Member websites (collectively,
              the "Websites"), and through the ToxiQR iOS App, and the ToxiQR
              Android App and the Seek by ToxiQR App (the “App(s)”) (the
              “Websites” and “App(s)” are collectively, the “Platform”).
            </Text>
          </div>
          <div>
            <Text>
              Each country has different laws and rights relating to Personal
              Information of their residents. If You are a resident located
              outside the United States, in addition to this Privacy Policy,
              please also see Your country specific disclosures including those
              for: Argentina; Australia; Canada; Chile; Colombia; Costa Rica;
              Ecuador; Finland; Greece; Guatemala; Israel; Mexico; New Zealand;
              Panama; Portugal; South Africa; Spain; Sweden; Taiwan; Uruguay;
              and the United Kingdom;
            </Text>
          </div>
          <div>
            <Text>
              This Privacy Policy is subject to Our Terms of Use at
              https://www.ToxiQR.org/pages/terms. We may update this Privacy
              Policy from time to time, as specified in the “Privacy Policy
              Changes” section below.
            </Text>
          </div>
          <div>
            <Text $bold={true}>Your Consent</Text>
            <Text>
              You should read this entire Privacy Policy before submitting
              information to Us or using Our Platform. Whenever You submit
              personal and non-personal information via Our Platform or
              otherwise to Us, whether online or offline, You consent to the
              collection, use disclosure, transfer, and storage of that
              information in accordance with this Privacy Policy.
            </Text>
          </div>
          <div>
            <Text $bold={true}>Types of Information We Collect</Text>
            <Text>
              "Personal Information" means information such as Your first/middle
              initial or name, last name, e-mail address, street address,
              mailing address if different, town or city, state, zip code,
              telephone number, profile photograph, Internet Protocol (IP)
              addresses, credit card information and any other information that
              could allow someone to identify You or contact You, including
              information collected through cookies and other technology.
            </Text>
          </div>
          <div>
            <Text>
              ToxiQR collects Personal Information of the sort that web
              browsers, hardware, software and servers typically make available,
              such as the IP address, device ID, browser type, language
              preference, referring site, pages viewed, one or more cookies that
              may uniquely identify your browser, and the date and time of each
              visitor request. ToxiQR's purpose in collecting this information
              is to better understand how ToxiQR's visitors use its Platform.
              From time to time, ToxiQR may release such information in the
              aggregate, e.g., by publishing a report on trends in the usage of
              its Platform.
            </Text>
          </div>
          <div>
            <Text $bold={true}>How We Collect Personal Information</Text>
            <Text>
              ToxiQR may collect Personal Information when You choose to
              interact with ToxiQR in ways that require ToxiQR to gather such
              information, such as if You browse on ToxiQR, register as an
              ToxiQR User, update or add information to Your ToxiQR profile,
              provide content to ToxiQR through Your computer or phone, make a
              donation to ToxiQR through the Platform, make a purchase from the
              ToxiQR Store (collectively, the ToxiQR "Services"), or otherwise
              communicate or engage with Us about the ToxiQR Services. When You
              record an encounter with an individual organism at a particular
              time and location and post it on ToxiQR (an “Observation”), We may
              collect Your User ID, latitude and longitude of the site of the
              Observation, the place name of the site of the Observation, the
              date and time of the Observation, the metadata associated with
              image or sound files, the app You used to contribute data, and the
              time zone of the site of the Observation. The amount and type of
              information that ToxiQR gathers depends on the nature of the
              interaction. In each case, ToxiQR collects such information only
              insofar as is necessary or appropriate to fulfill the purpose of
              Your interaction with ToxiQR. ToxiQR does not disclose Personal
              Information other than as described herein. You can refuse to
              supply Personal Information, with the caveat that doing so may
              prevent You from engaging in certain Website and App-related
              activities, such as registering as an ToxiQR User, maintaining an
              ToxiQR profile, posting content to ToxiQR, making a donation, or
              purchasing an item from the ToxiQR Store. Without providing
              personal information (other than the automatic provision of Your
              IP address), You will still be able to access and use ToxiQR on a
              read-only basis.
            </Text>
          </div>
          <div>
            <Text $bold={true}>How We Use Personal Information</Text>
            <Text>
              We may use the Personal Information that You provide in order to
              deliver the ToxiQR Services and to administer and maintain the
              ToxiQR Websites, respond to Your inquiries, improve our services,
              business, and Platform, manage our business including spam
              detection and fraud prevention purposes, for marketing, legal and
              research purposes, and to understand how You use Our Platform and
              Services. If You register as an ToxiQR User, You must give Us
              current, complete and accurate information and keep the
              information You provide to Us up to date. We cannot and shall not
              be responsible for any problems or liability that may arise if You
              do not give Us current, accurate, truthful, or complete
              information or if You fail to update the information You give Us.{" "}
            </Text>
          </div>
          <div>
            <Text $bold={true}>
              When We Disclose and Share Personal Information
            </Text>
            <Text>
              Personal Information You provide related to the Observations You
              post (user name, date, time, location) is published in venues on
              ToxiQR where it is visible to anyone ("Published") as matter of
              normal usage and therefore is publicly shared with other ToxiQR
              Users, whether or not they are signed in. We also explicitly and
              publicly share this information in a machine-readable format with
              a handful of partners, including the Global Biodiversity
              Information Facility ("GBIF"), the Amazon Web Services ("AWS")
              Open Data Sponsorship Program, and others.
            </Text>
          </div>
          <div>
            <Text>
              We share Personal Information associated with Users’ registration
              and account (non-public location data from Observations You post,
              IP address, email address, etc.) with representatives from ToxiQR
              Network Members (see https://www.ToxiQR.org/pages/network for
              information about the ToxiQR Network) only for Users who have
              chosen to affiliate with that specific Network Member as their
              primary site. ToxiQR Network Members are responsible for the
              secure storage and responsible use of the data, and develop their
              own criteria on how data may or may not be reshared for
              non-commercial research, conservation, and species management
              purposes. You can prevent this sharing by affiliating with
              ToxiQR.org in your account settings.
            </Text>
          </div>
          <div>
            <Text>
              Unless you have specifically chosen to hide it, ToxiQR, in its
              sole discretion, may disclose non-public location data of
              threatened or sensitive species to researchers and affiliated
              organizations for research, conservation, and species management
              purposes.
            </Text>
          </div>
          <div>
            <Text>
              ToxiQR discloses Personal Information to contractors, service
              providers, consultants and affiliated organizations that (i) need
              to know that information in order to process it on ToxiQR's behalf
              or to provide Services available at ToxiQR's Platform, and (ii)
              that have agreed not to disclose it to others.
            </Text>
          </div>
          <div>
            <Text>
              Some of ToxiQR’s contractors, service providers and affiliated
              organizations may be located outside of Your home country; by
              using ToxiQR's Platform, You consent to the transfer of such
              information to them. ToxiQR will not rent or sell Personal
              Information to anyone. We share your Personal information with
              entities that support Our Websites and data, communicating with
              You, fraud and spam detection, data analytics, and other
              legitimate business purposes including communicating with the
              Apple App Store, the Google Play Store, Google Analytics, Google
              Firebase and New Relic.
            </Text>
          </div>
          <div>
            <Text>
              We use Microsoft Azure and Amazon Web Services, Google Maps
              Platform (to display geographic content), and SendGrid. If You
              choose to participate in some optional services, We will share
              Personal Information with entities that make those services
              possible, such as Civilized Discourse Construction Kit (for the
              ToxiQR Forum); Freshworks (for support emails); Typeform (for
              optional surveys); Donorbox, PayPal, Stripe, and Double the
              Donation (for charitable donations); FreeWill (for legacy giving);
              and Threadless (for the ToxiQR Store). You can withdraw from
              participation in these optional services by contacting them
              directly.
            </Text>
          </div>
          <div>
            <Text>
              Other than as described above, ToxiQR discloses Personal
              Information only when required to do so by law, or when ToxiQR
              believes in good faith that disclosure is reasonably necessary to
              protect the property or rights of ToxiQR, third parties, or the
              public at large. Unless authorized by You through Your opt-in, or
              as provided above, We will make Your Personal Information
              available to non-affiliated third parties only in the following
              circumstances:
            </Text>
          </div>
          <ul style={{ listStyleType: "circle" }}>
            <li>
              <Text>
                If We are compelled to do so by a governmental agency, court, or
                other entity (e.g., to respond to subpoenas, court orders or
                legal process);
              </Text>
            </li>
            <li>
              <Text>
                If We believe Your actions violate a law, regulation, this
                Privacy Policy, or any applicable website or app's terms of use,
                or if You threaten the rights, property or safety of Us, Our
                Websites, Our Apps, any other Users, or third party;
              </Text>
            </li>
            <li>
              <Text>
                If, in Our sole discretion, We believe disclosure is necessary
                to investigate or resolve possible problems or inquiries, to
                protect Our assets, to defend Our interests or comply with Our
                legal and regulatory obligations; or to protect a User's safety;
              </Text>
            </li>
            <li>
              <Text>
                If there is a bankruptcy, merger, acquisition, transfer of
                control, joint venture or other business combination involving
                ToxiQR.
              </Text>
            </li>
          </ul>
          <div>
            <Text>
              If You are a registered User of ToxiQR and have supplied Your
              email address, ToxiQR may occasionally send You an email to tell
              You about new features, solicit Your feedback, or just keep You up
              to date with what's going on with ToxiQR and Our services. We
              primarily use blogs and groups to communicate this type of
              information, so We expect to keep this type of email to a minimum.
              If You send Us a request (for example via a support email or via
              one of Our feedback mechanisms), We reserve the right to publish
              it in order to help Us clarify or respond to Your request or to
              help Us support other Users. ToxiQR takes all measures reasonably
              necessary to protect against the unauthorized access, use,
              alteration, or destruction of Personal Information. You can
              unsubscribe from email communications by changing your account
              settings, deleting your account, or contacting Us at
              privacy@ToxiQR.org.
            </Text>
          </div>
          <div>
            <Text $bold={true}>
              Legal Basis for Processing Personal Information Under the General
              Data Protection Regulation (GDPR)
            </Text>
            <Text>
              If You are a resident of the European Economic Area (EEA), or
              otherwise subject to the GDPR, ToxiQR's legal basis for collecting
              and using the Personal Information described in this Privacy
              Policy depends on the Personal Information We collect and the
              specific context in which We collect it. In addition, We process
              Personal Information with the principle of data minimization in
              mind. This means that We limit ourselves to the minimum amount of
              personal information which is needed to achieve the particular
              purpose for which We process the Personal Information. Below are
              some examples of the purposes for which Personal Information may
              be processed.
            </Text>
          </div>
        </StyledPrivacy>
      </StyledSection>
    </MyContainer>
  );
};

export default Privacy;
