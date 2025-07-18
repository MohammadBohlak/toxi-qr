// src/components/formDetection/FormDetection.jsx
import React from "react";
import { useFormikContext } from "formik";
import Form from "react-bootstrap/Form";
import { Form as RBForm } from "react-bootstrap";

import CountrySelect from "../countrySelect/CountrySelect";
import { StyledForm } from "./formDetection.styles";
import { useTranslation } from "react-i18next";

export default function FormDetection() {
  const { values, handleChange, handleBlur, errors, touched, setFieldValue } =
    useFormikContext();
  const { t } = useTranslation();

  return (
    <StyledForm>
      <div className="d-flex gap-4 flex-wrap">
        {/* حقل Country باستخدام المكوّن المخصص */}
        <Form.Group controlId="formCountry" style={{ flex: "1 1 300px" }}>
          <Form.Label>{t("detection.form.country.label")}:</Form.Label>
          <CountrySelect
            name="country"
            value={values.country}
            onChange={(val) => setFieldValue("country", val)}
          />
          {touched.country && errors.country && (
            <div className="invalid-feedback d-block">{errors.country}</div>
          )}
        </Form.Group>

        {/* حقل State */}
        <Form.Group controlId="formState" style={{ flex: "1 1 300px" }}>
          <Form.Label>{t("detection.form.state")}:</Form.Label>
          <Form.Control
            type="text"
            name="state"
            placeholder={t("detection.form.state")}
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.state && !!errors.state}
          />
          <Form.Control.Feedback type="invalid">
            {errors.state}
          </Form.Control.Feedback>
        </Form.Group>
        {/* حقل البريد الإلكتروني */}
        <Form.Group controlId="formEmail" style={{ flex: "1 1 300px" }}>
          <Form.Label>{t("detection.form.email.label")}:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder={t("detection.form.email.placeholder")}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.email && !!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
      </div>
    </StyledForm>
  );
}
