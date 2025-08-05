// src/pages/JoinUs.jsx

import React, { useState } from "react";
import { Container, Form, Spinner } from "react-bootstrap";
import {
  FiMail,
  FiUser,
  FiBriefcase,
  FiUser as FiPrefix,
} from "react-icons/fi";
import { Formik } from "formik";
import * as Yup from "yup";
import CountrySelect from "../../components/countrySelect/CountrySelect";
import {
  CountryWrapper,
  IconWrapper,
  RowGroup,
  SendButton,
  StyledControl,
  StyledJoinUs,
} from "./joinUs.styles";
import { useSelector } from "react-redux";
import countryDataEn from "../../assets/countryEn.json";
import countryDataAr from "../../assets/countryAr.json";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { MainTitle } from "../../components/common/texts";
import axios from "axios";
import Toast from "../../components/ui/toast/Toast";

const StyledSelect = styled(Form.Select)`
  flex: 1;
  font-size: var(--normal-text);
  color: #595c5f;
`;

export default function JoinUsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const { t } = useTranslation("joinUs");
  const lang = useSelector((state) => state.lang.language);
  const countryData = lang === "ar" ? countryDataAr : countryDataEn;

  const initialValues = {
    title: "",
    email: "",
    name: "",
    specialist: "",
    country: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required(t("form.prefix.validation")),
    email: Yup.string()
      .email(t("form.email.invalid"))
      .required(t("form.email.required")),
    name: Yup.string().required(t("form.name.required")),
    specialist: Yup.string().required(t("form.specialist.required")),
    country: Yup.string().required(t("form.country.required")),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const date = new Date().toISOString().slice(0, 10);
    const data = { ...values, country: countryData[values.country], date };
    setIsLoading(true);

    axios
      .post("https://toxiqr.pythonanywhere.com/api/joinus/", data)
      .then((res) => {
        resetForm();
        setErr(false);
        setMessage(t("form.joinSuccess"));
      })
      .catch((err) => {
        setMessage(t("form.joinError"));
        setErr(true);
      })
      .finally(() => {
        setIsLoading(false);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      });
    resetForm();
  };

  return (
    <StyledJoinUs>
      {showToast && <Toast $err={err} message={message} />}

      <Container style={{ maxWidth: 500, margin: "2rem auto" }}>
        <MainTitle style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          {t("title")}
        </MainTitle>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              {/* Prefix */}
              <Form.Group controlId="formTitle" className="mb-3">
                <RowGroup>
                  <IconWrapper>
                    <FiPrefix />
                  </IconWrapper>
                  <StyledSelect
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.title && !!errors.title}
                  >
                    <option value="">{t("form.prefix.select")}</option>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Dr">Dr</option>
                    <option value="Prof">Prof</option>
                    <option value="Eng">Eng</option>
                    <option value="Nurse">Nurse</option>
                    <option value="Pharm.D">Pharm.D</option>
                    <option value="Pharmacist">Pharmacist</option>
                  </StyledSelect>
                </RowGroup>
                <Form.Control.Feedback
                  type="invalid"
                  style={{ display: "block" }}
                >
                  {touched.title && errors.title}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Email */}
              <Form.Group controlId="formEmail" className="mb-3">
                <RowGroup>
                  <IconWrapper>
                    <FiMail />
                  </IconWrapper>
                  <StyledControl
                    name="email"
                    type="email"
                    placeholder={t("form.email.placeholder")}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && !!errors.email}
                  />
                </RowGroup>
                <Form.Control.Feedback
                  type="invalid"
                  style={{ display: "block" }}
                >
                  {touched.email && errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Name */}
              <Form.Group controlId="formName" className="mb-3">
                <RowGroup>
                  <IconWrapper>
                    <FiUser />
                  </IconWrapper>
                  <StyledControl
                    name="name"
                    type="text"
                    placeholder={t("form.name.placeholder")}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.name && !!errors.name}
                  />
                </RowGroup>
                <Form.Control.Feedback
                  type="invalid"
                  style={{ display: "block" }}
                >
                  {touched.name && errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Specialist */}
              <Form.Group controlId="formSpecialist" className="mb-3">
                <RowGroup>
                  <IconWrapper>
                    <FiBriefcase />
                  </IconWrapper>
                  <StyledControl
                    name="specialist"
                    type="text"
                    placeholder={t("form.specialist.placeholder")}
                    value={values.specialist}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.specialist && !!errors.specialist}
                  />
                </RowGroup>
                <Form.Control.Feedback
                  type="invalid"
                  style={{ display: "block" }}
                >
                  {touched.specialist && errors.specialist}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Country */}
              <Form.Group controlId="formCountry" className="mb-3">
                <RowGroup>
                  <CountryWrapper>
                    <CountrySelect
                      name="country"
                      value={values.country}
                      onChange={(val) => setFieldValue("country", val)}
                    />
                  </CountryWrapper>
                </RowGroup>
                <div className="invalid-feedback" style={{ display: "block" }}>
                  {touched.country && errors.country}
                </div>
              </Form.Group>

              {/* Send */}
              <div className="d-flex justify-content-center mt-5">
                <SendButton type="submit">
                  {!isLoading ? (
                    t("form.send")
                  ) : (
                    <Spinner
                      animation="border"
                      style={{ width: "40px", height: "40px" }}
                    />
                  )}
                </SendButton>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </StyledJoinUs>
  );
}
