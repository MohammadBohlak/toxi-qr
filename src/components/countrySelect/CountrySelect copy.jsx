//src/components/countrySelect/CountrySelect.jsx
import React, { useEffect, useMemo, useState } from "react";
import Select, { components } from "react-select";
import ReactCountryFlag from "react-country-flag";
import countryDataEn from "../../assets/countryEn.json"; // عدّل المسار حسب مشروعك
import countryDataAr from "../../assets/countryAr.json"; // عدّل المسار حسب مشروعك
import { useSelector } from "react-redux";
import { IoEllipseSharp } from "react-icons/io5";
import { Wrapper } from "./countrySelect.styles";

// 2. Component للأوبشن داخل القائمة مع العلم
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

// 3. Component للـ single value (بعد الاختيار)
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

// 4. تنسيقات بسيطة
const customStyles = {
  control: (provided) => ({
    ...provided,
    fontFamily: "'Tajawal', sans-serif",
    padding: "0px",
    // width: "300px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? "#f0f0f0"
      : state.isSelected
      ? "#e6e6e6"
      : "#fff",
    color: "#333",
  }),
};

export default function CountrySelect() {
  const lang = useSelector((state) => state.lang.language);
  const [countryData, setCountryData] = useState(countryDataEn);
  useEffect(() => {
    if (lang == "en") setCountryData(countryDataEn);
    else setCountryData(countryDataAr);
  }, [lang]);

  // 1. حوّل JSON إلى مصفوفة من { value, label }
  const countryOptions = Object.entries(countryData).map(([code, name]) => ({
    value: code,
    label: name,
  }));

  const [value, setValue] = useState(null);
  const onChnge = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <Wrapper className="select">
      <Select
        options={countryOptions}
        components={{ Option, SingleValue }}
        styles={customStyles}
        placeholder="اختر الدولة"
        isSearchable
        value={value}
        onChange={(e) => {
          onChnge(e);
        }}
      />
    </Wrapper>
  );
}
