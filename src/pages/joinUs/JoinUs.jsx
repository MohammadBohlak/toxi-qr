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

export default function JoinUsPage() {
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
    console.log("Form Values:", values);
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
