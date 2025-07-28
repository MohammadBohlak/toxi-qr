// src/pages/Detection/DetectionPage.jsx
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import { MainTitle, SubTitle } from "../../components/common/texts";

import UploadImage from "../../components/homeComponents/uploadImage/UploadImage";
import FormDetection from "../../components/formDetection/FormDetection";
import { useTranslation } from "react-i18next";
import { Submit } from "./detection.styles";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import Toast from "../../components/ui/toast/Toast";

export default function DetectionPage() {
  const { t } = useTranslation("home");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prediction, setPrediction] = useState({
    confidence: 0,
    image_url: "",
    is_toxic: false,
  });

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
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Values:", values);
    const formData = new FormData();
    formData.append("country", values.country);
    formData.append("email", values.email);
    formData.append("state", values.state);
    formData.append("image", values.image);

    setIsLoading(true);
    axios
      .post(
        "https://toxiqr.pythonanywhere.com/snake_detector/api/predict/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log("✅ Response:", res.data);
        resetForm();
        setErr(false);
        setPrediction(res.data);
        setShowModal(true);
      })
      .catch((err) => {
        console.error(err);
        setErr(true);
        setMessage(t("detection.form.message"));
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleModalOk = () => {
    setShowModal(false);
    setMessage(
      "An expert will contact you soon via email to confirm the information."
    );
    setErr(false);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div style={{ background: "#fff0b6f0", paddingTop: "var(--m-top)" }}>
      {showModal && (
        <Modal show={showModal} onHide={handleModalOk} centered>
          <Modal.Header closeButton>
            <Modal.Title>Detection Result</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {prediction.is_toxic
                ? "This snake is venomous."
                : "This snake is non-venomous."}
            </p>
            <p>Confidence: {(prediction.confidence * 100).toFixed(2)}%</p>
            <img
              src={prediction.image_url}
              alt="Detected Snake"
              className="img-fluid"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleModalOk}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      )}

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
