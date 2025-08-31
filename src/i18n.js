// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// استيراد ملفات الترجمة الموحدة لكل لغة
// import translationEn from "./locales/en/translation.json";
// import translationAr from "./locales/ar/translation.json";
import homeEn from "./locales/en/home.json";
import homeAr from "./locales/ar/home.json";
import instructionsEn from "./locales/en/instructions.json";
import instructionsAr from "./locales/ar/instructions.json";
import ourBlogEn from "./locales/en/ourBlog.json";
import ourBlogAr from "./locales/ar/ourBlog.json";
import pressEn from "./locales/en/press.json";
import pressAr from "./locales/ar/press.json";
import aboutEn from "./locales/en/about.json";
import aboutAr from "./locales/ar/about.json";
import firstAidEn from "./locales/en/firstAid.json";
import firstAidAr from "./locales/ar/firstAid.json";
import footerEn from "./locales/en/footer.json";
import footerAr from "./locales/ar/footer.json";
import privacyEn from "./locales/en/privacy.json";
import privacyAr from "./locales/ar/privacy.json";
import joinUsEn from "./locales/en/joinUs.json";
import joinUsAr from "./locales/ar/joinUs.json";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      // translation: translationEn,
      home: homeEn,
      instructions: instructionsEn,
      ourBlog: ourBlogEn,
      press: pressEn,
      about: aboutEn,
      firstAid: firstAidEn,
      footer: footerEn,
      privacy: privacyEn,
      joinUs: joinUsEn,
    },
    ar: {
      // translation: translationAr,
      home: homeAr,
      instructions: instructionsAr,
      ourBlog: ourBlogAr,
      press: pressAr,
      about: aboutAr,
      firstAid: firstAidAr,
      footer: footerAr,
      privacy: privacyAr,
      joinUs: joinUsAr,
    },
  },
  lng: "en", // تعيين اللغة الافتراضية
  fallbackLng: "en", // في حال عدم توفر ترجمة للغة المطلوبة

  // لا داعي لتعريف الـ namespaces المتعددة الآن
  interpolation: {
    escapeValue: false, // React يتعامل مع الحماية بشكل أمثل
  },
});

export default i18n;
