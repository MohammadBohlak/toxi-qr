// src/pages/Detection/DetectionPage.jsx
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import { MainTitle, SubTitle } from "../../components/common/texts";

import UploadImage from "../../components/homeComponents/uploadImage/UploadImage";
import FormDetection from "../../components/formDetection/FormDetection";
import { useTranslation } from "react-i18next";
import { Submit } from "./detection.styles";

export default function DetectionPage() {
  const { t } = useTranslation();

  // 1) القيم الابتدائية
  const initialValues = {
    email: "",
    state: "",
    country: "",
    image: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t("detection.validation.email_invalid"))
      .required(t("detection.validation.email_required")),

    state: Yup.string().required(t("detection.validation.state_required")),

    country: Yup.string().required(t("detection.validation.country_required")),

    image: Yup.mixed()
      .required(t("detection.validation.image_required"))
      .test(
        "is-image",
        t("detection.validation.image_invalid"),
        (file) => file && file.type.startsWith("image/")
      ),
  });

  // 3) عند الإرسال
  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    // هنا ترسل البيانات للسيرفر أو أي إجراء آخر
  };
  return (
    <div style={{ background: "#fff0b6f0", paddingTop: "var(--m-top)" }}>
      <MyContainer>
        <StyledSection>
          <Row className="m-0 mb-4">
            <Col>
              <MainTitle $align="center" className="mb-3">
                {t("detection.title")}
              </MainTitle>
              <SubTitle $align="center">{t("detection.subtitle")}</SubTitle>
            </Col>
          </Row>

          {/* 4) غلاف Formik يوفّر السياق للمكونات الفرعية */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <Row className="m-0 mt-4 justify-content-center">
                  <Col md={8}>
                    {/* مكوّن رفع الصورة مرتبط بحقل "image" */}
                    <UploadImage name="image" />
                  </Col>

                  <Col md={12}>
                    {/* الحقول النصية واختيار الدولة */}
                    <FormDetection name="country" />
                  </Col>
                </Row>

                <div style={{ textAlign: "center", marginTop: "16px" }}>
                  <Submit type="submit">{t("detection.form.submit")}</Submit>
                </div>
              </Form>
            )}
          </Formik>
        </StyledSection>
      </MyContainer>
    </div>
  );
}
