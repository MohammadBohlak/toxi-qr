import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../store/slices/languageSlice";
import { useDispatch } from "react-redux";

const SwitchWrapper = styled.button`
  box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.colors.primary};
  height: 35px;
  border-radius: 10px;
  width: 100px;
  font-weight: bold;
  font-size: var(--min-text);
  transition: background 0.3s;
  border: none;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: #e0e0e0;
  }
  @media (max-width: 768px) {
    width: 60px;
  }
`;

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("ar");
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  // دالة التبديل بين اللغتين
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
    i18n.changeLanguage(language);
    dispatch(changeLanguage());
  };

  return (
    <SwitchWrapper
      className="d-flex justify-content-center align-items-center p-0"
      onClick={toggleLanguage}
    >
      {language === "ar" ? "English" : "العربية"}
    </SwitchWrapper>
  );
};

export default LanguageSwitcher;
