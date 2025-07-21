// src/pages/JoinUs.jsx

import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FiMail, FiUser, FiBriefcase } from "react-icons/fi";
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
import { MainTitle, SubTitle } from "../../components/common/texts";
import { api } from "../../utils/api/api";

import countryDataEn from "../../assets/countryEn.json";
import countryDataAr from "../../assets/countryAr.json";
import { useSelector } from "react-redux";
import axios from "axios";
export default function JoinUsPage() {
  const lang = useSelector((state) => state.lang.language);
  const countryData = lang === "ar" ? countryDataAr : countryDataEn;

  const initialValues = {
    email: "",
    name: "",
    specialist: "",
    country: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    specialist: Yup.string().required("Specialist is required"),
    country: Yup.string().required("Country is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const today = new Date();
    const year = today.getFullYear(); // الحصول على السنة (مثل 2025)
    const month = String(today.getMonth() + 1).padStart(2, "0"); // الحصول على الشهر (0-11، لذا نضيف 1) وتنسيقه
    const day = String(today.getDate()).padStart(2, "0"); // الحصول على اليوم وتنسيقه
    const formattedDate = `${year}-${month}-${day}`; // الصيغة: YYYY-MM-DD

    console.log(formattedDate); // مثال الإخراج: 2025-07-18
    axios
      .post("https://toxiqr.pythonanywhere.com/api/joinus", {
        email: "mm@m.com",
        name: "mm",
        specialist: "mm",
        country: "mm",
        date: "2025-07-18",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data)); // Display error message
    console.log({
      ...values,
      country: countryData[values.country],
      date: formattedDate,
    });

    resetForm();
  };

  return (
    <StyledJoinUs>
      <Container style={{ maxWidth: 500, margin: "2rem auto" }}>
        <MainTitle style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Join Us
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
              {/* Email */}
              <Form.Group controlId="formEmail" className="mb-3">
                <RowGroup>
                  <IconWrapper>
                    <FiMail />
                  </IconWrapper>
                  <StyledControl
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && !!errors.email}
                  />
                </RowGroup>
                {touched.email && errors.email && (
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ display: "block" }}
                  >
                    {errors.email}
                  </Form.Control.Feedback>
                )}
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
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.name && !!errors.name}
                  />
                </RowGroup>
                {touched.name && errors.name && (
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ display: "block" }}
                  >
                    {errors.name}
                  </Form.Control.Feedback>
                )}
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
                    placeholder="Specialist"
                    value={values.specialist}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.specialist && !!errors.specialist}
                  />
                </RowGroup>
                {touched.specialist && errors.specialist && (
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ display: "block" }}
                  >
                    {errors.specialist}
                  </Form.Control.Feedback>
                )}
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
                {touched.country && errors.country && (
                  <div
                    className="invalid-feedback"
                    style={{ display: "block" }}
                  >
                    {errors.country}
                  </div>
                )}
              </Form.Group>

              {/* Send Button */}
              <div className="d-flex justify-content-center mt-5">
                <SendButton type="submit">Send</SendButton>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </StyledJoinUs>
  );
}
