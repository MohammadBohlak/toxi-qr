// npm install react-window

// src/components/countrySelect/CountrySelect.jsx
import React, { useMemo, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import { useSelector } from "react-redux";
import Select, { components } from "react-select";
import ReactCountryFlag from "react-country-flag";
import countryDataEn from "../../assets/countryEn.json";
import countryDataAr from "../../assets/countryAr.json";
import { Wrapper } from "./countrySelect.styles";
import { useTranslation } from "react-i18next";

// 1) Custom Option, memoized so it's never re-created
const Option = React.memo((props) => (
  <components.Option {...props}>
    <ReactCountryFlag
      countryCode={props.data.value}
      svg
      style={{ width: "1.2em", height: "1.2em", marginRight: 8 }}
    />
    {props.data.label}
  </components.Option>
));

// 2) Custom SingleValue, memoized as well
const SingleValue = React.memo((props) => (
  <components.SingleValue {...props}>
    <ReactCountryFlag
      countryCode={props.data.value}
      svg
      style={{ width: "1.2em", height: "1.2em", marginRight: 8 }}
    />
    {props.data.label}
  </components.SingleValue>
));

// 3) Virtualized MenuList
const MenuList = React.memo((props) => {
  const { options, children, maxHeight, getValue } = props;
  const heightPerItem = 40; // adjust if your padding/font differs
  const [selected] = getValue();
  const initialOffset = options.indexOf(selected) * heightPerItem;

  return (
    <List
      height={Math.min(maxHeight, options.length * heightPerItem)}
      itemCount={children.length}
      itemSize={heightPerItem}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  );
});

export default function CountrySelect({ name, value, onChange }) {
  const lang = useSelector((s) => s.lang.language);
  const countryData = useMemo(
    () => (lang === "ar" ? countryDataAr : countryDataEn),
    [lang]
  );

  const { t } = useTranslation("home");

  // 4) Memoize options so they never re-build unless data changes
  const options = useMemo(
    () =>
      Object.entries(countryData).map(([code, label]) => ({
        value: code,
        label,
      })),
    [countryData]
  );

  // 5) Memoize the selected option lookup
  const selectedOption = useMemo(
    () => options.find((o) => o.value === value) || null,
    [options, value]
  );

  // 6) Stable onChange
  const handleChange = useCallback(
    (opt) => {
      onChange(opt.value);
    },
    [onChange]
  );

  return (
    <Wrapper className="select">
      <Select
        name={name}
        options={options}
        components={{ Option, SingleValue, MenuList }}
        placeholder={t("detection.form.country.placeholder")}
        isSearchable
        value={selectedOption}
        onChange={handleChange}
        // ↓ this prevents react-select from doing its own expensive re-filtering
        filterOption={(candidate, input) =>
          candidate.label.toLowerCase().includes(input.toLowerCase())
        }
        // any other props you need…
      />
    </Wrapper>
  );
}
