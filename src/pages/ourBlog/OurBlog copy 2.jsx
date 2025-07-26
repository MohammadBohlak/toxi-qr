// src/pages/OurBlog.jsx
import { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { api } from "../../utils/api/api";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import { MainTitle } from "../../components/common/texts";
import { Outlet } from "react-router-dom";
import { StyledInputGroup } from "./ourBlog.styles";
import { useTranslation } from "react-i18next";
import ArchiveSection from "../../components/ourBlogComponents/archiveSection/ArchiveSection";
import { useSelector } from "react-redux";

export default function OurBlog() {
  const lang = useSelector((state) => state.lang.language);
  const { t } = useTranslation("ourBlog");

  // 1) مخزن للبيانات الخام
  const [rawBlogs, setRawBlogs] = useState([]);
  // 2) مخزن للبيانات المعروضة (عربي أو إنجليزي)
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // جلب البيانات مرة واحدة عند المونت
  useEffect(() => {
    api.get("/blogs").then((res) => {
      setRawBlogs(res.data);
    });
  }, []);

  // تحويل rawBlogs إلى localizedBlogs كلما تغيرت اللغة أو البيانات الخام
  useEffect(() => {
    const localized = rawBlogs.map((b) => ({
      ...b,
      displayTitle: lang === "ar" ? b.title_ar || b.title : b.title,
      displayShortDesc:
        lang === "ar"
          ? b.short_description_ar || b.description_ar
          : b.short_description || b.description,
      displayCountry: lang === "ar" ? b.country_ar : b.country,
      displayDate: b.date, // لو تحتاج ترجمة التاريخ ممكن تضيف i18n
    }));

    setBlogs(localized);
  }, [lang, rawBlogs]);

  // فلترة البحث على الخاصية الناتجة displayTitle
  useEffect(() => {
    if (!searchTerm.trim()) {
      setBlogs((prev) => [...prev]); // دون تغيير
    } else {
      const term = searchTerm.trim().toLowerCase();
      setBlogs((prev) =>
        prev.filter((b) => b.displayTitle.toLowerCase().includes(term))
      );
    }
  }, [searchTerm]);

  const showLoader = useSelector((state) => state.loader.isLoading);

  return (
    <StyledSection>
      <MyContainer>
        <Row className="justify-content-between m-0">
          {!showLoader ? (
            <>
              <Col md={8} className="p-0">
                <MainTitle $align="initial" className="mb-4">
                  {t("title")}
                </MainTitle>
              </Col>

              <Col md={8}>
                <StyledInputGroup className="mb-4">
                  <Form.Control
                    placeholder={t("searchPlaceholder")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                      }
                    }}
                  />
                  <Button onClick={() => {}}>{t("search")}</Button>
                </StyledInputGroup>
              </Col>
            </>
          ) : (
            <div style={{ minHeight: "500px" }} />
          )}

          <Col md={8}>
            {!showLoader && (
              // هنا نمرر المصفوفة المترجمة
              <Outlet context={{ allBlogs: rawBlogs, blogs, setBlogs }} />
            )}
          </Col>

          <Col md={3}>
            <ArchiveSection />
          </Col>
        </Row>
      </MyContainer>
    </StyledSection>
  );
}
