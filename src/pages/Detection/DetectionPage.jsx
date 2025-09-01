// src/pages/Detection/DetectionPage.jsx
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Spinner } from "react-bootstrap";

import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import { MainTitle, SubTitle } from "../../components/common/texts";

import UploadImage from "../../components/homeComponents/uploadImage/UploadImage";
import FormDetection from "../../components/formDetection/FormDetection";
import DetectionResultModal from "./DetectionResultModal";
import Toast from "../../components/ui/toast/Toast";

import { useTranslation } from "react-i18next";
import { Submit } from "./detection.styles";
import axios from "axios";
import { useSelector } from "react-redux";

export default function DetectionPage() {
  const { t } = useTranslation("home");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showPercent, setShowPercent] = useState(false);

  const lang = useSelector((state) => state.lang.language);
  const [showModal, setShowModal] = useState(false);
  const [prediction, setPrediction] = useState({
    confidence: 0,
    image_url: "",
    is_toxic: false,
  });

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

  const handleSubmit = (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("country", values.country);
    formData.append("email", values.email);
    formData.append("state", values.state);
    formData.append("image", values.image);

    setIsLoading(true);
    const handleShowToast = () => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    };
    axios
      .post(
        "https://toxiqr.pythonanywhere.com/snake_detector/api/predict/",
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
            "x-platform": "web",
          },
        }
      )
      .then((res) => {
        resetForm();
        setErr(false);
        setPrediction(res.data);
        if (res.data.confidence >= 90) setShowModal(true);
        else handleShowToast();
        // setShowPercent(res.data.confidence >= 90);
      })
      .catch((err) => {
        setErr(true);

        // لو الخطأ 403
        if (err.response && err.response.status === 403) {
          // لنفترض أن الـ backend بيبعت { message: "نص الخطأ" }
          const backendMsg =
            lang == "en"
              ? err.response.data.error_en
              : err.response.data.error_ar;
          setMessage(backendMsg);
        } else {
          // بقية الأخطاء
          setMessage(t("detection.form.msgErr"));
        }

        handleShowToast();
      })
      .finally(() => setIsLoading(false));
  };

  const handleModalOk = () => {
    setShowModal(false);
    setErr(false);

    setMessage(t("detection.form.message"));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div style={{ background: "#fff0b6f0", paddingTop: "var(--m-top)" }}>
      <DetectionResultModal
        show={showModal}
        onHide={handleModalOk}
        prediction={prediction}
        showPercent={showPercent}
      />

      {showToast && <Toast $err={err} message={message} />}

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

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <Row className="m-0 mt-4 justify-content-center">
                  <Col md={8}>
                    <UploadImage name="image" />
                  </Col>
                  <Col md={12}>
                    <FormDetection name="country" />
                  </Col>
                </Row>

                <div style={{ textAlign: "center", marginTop: "16px" }}>
                  <Submit type="submit" disabled={isLoading}>
                    {!isLoading ? (
                      t("detection.form.submit")
                    ) : (
                      <Spinner
                        animation="border"
                        style={{ width: "40px", height: "40px" }}
                      />
                    )}
                  </Submit>
                </div>
              </Form>
            )}
          </Formik>
        </StyledSection>
      </MyContainer>
    </div>
  );
}
