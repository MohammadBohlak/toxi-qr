// src/components/countrySelect/CountrySelect.jsx
import React, { useMemo } from "react";
import { useField, useFormikContext } from "formik";
import Select, { components } from "react-select";
import ReactCountryFlag from "react-country-flag";
import countryDataEn from "../../assets/countryEn.json";
import countryDataAr from "../../assets/countryAr.json";
import { useSelector } from "react-redux";
import { Wrapper } from "./countrySelect.styles";
import { useTranslation } from "react-i18next";

export default function CountrySelect({ name, value, onChange }) {
  const lang = useSelector((state) => state.lang.language);
  const countryData = lang === "ar" ? countryDataAr : countryDataEn;
  const { t } = useTranslation();
  // 1) خيارات react-select
  const options = useMemo(
    () =>
      Object.entries(countryData).map(([code, name]) => ({
        value: code,
        label: name,
      })),
    [countryData]
  );

  // 2) تخصيص عرض الخيار مع العلم
  const Option = (props) => (
    <components.Option {...props}>
      <ReactCountryFlag
        countryCode={props.data.value}
        svg
        style={{ width: "1.2em", height: "1.2em", marginRight: 8 }}
      />
      {props.data.label}
    </components.Option>
  );

  // 3) تخصيص عرض القيمة المختارة
  const SingleValue = (props) => (
    <components.SingleValue {...props}>
      <ReactCountryFlag
        countryCode={props.data.value}
        svg
        style={{ width: "1.2em", height: "1.2em", marginRight: 8 }}
      />
      {props.data.label}
    </components.SingleValue>
  );

  // 4) تنسيقات بسيطة
  const customStyles = {
    control: (base) => ({
      ...base,
      padding: 0,
      fontFamily: "'Tajawal', sans-serif",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? "#f0f0f0"
        : state.isSelected
        ? "#e6e6e6"
        : "#fff",
      color: "#333",
    }),
  };

  return (
    <Wrapper className="select">
      <Select
        name={name}
        options={options}
        components={{ Option, SingleValue }}
        // styles={customStyles}
        placeholder={t("detection.form.country.placeholder")}
        isSearchable
        value={options.find((o) => o.value === value) || null}
        onChange={(opt) => onChange(opt.value)}
      />
    </Wrapper>
  );
}
