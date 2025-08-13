// src/pages/OurBlog.jsx
import { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import { MainTitle } from "../../components/common/texts";
import { StyledInputGroup } from "./ourBlog.styles";
import ArchiveSection from "../../components/ourBlogComponents/archiveSection/ArchiveSection";
import { api } from "../../utils/api/api";

export default function OurBlog() {
  const { t } = useTranslation("ourBlog");
  const lang = useSelector((state) => state.lang.language);
  const showLoader = useSelector((state) => state.loader.isLoading);
  const params = useParams();
  // 1) البيانات الخام
  const [rawBlogs, setRawBlogs] = useState([]);
  // 2) after i18n transform
  const [localBlogs, setLocalBlogs] = useState([]);
  // 3) based on archive / detail / all
  const [contextBlogs, setContextBlogs] = useState([]);
  // 4) final list + search
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // ————————————— Mount once —————————————
  useEffect(() => {
    // fetch from API or use mock
    api.get("/blogs").then((res) => {
      setRawBlogs(res.data);
    });
  }, []);

  // —————— Localize titles/descriptions on lang/rawBlogs ——————
  useEffect(() => {
    const localized = rawBlogs.map((b) => ({
      ...b,
      displayTitle: lang === "ar" ? b.title_ar || b.title : b.title,
      displayShortDesc:
        lang === "ar"
          ? b.short_description_ar || b.description_ar
          : b.short_description || b.description,
      displayCountry: lang === "ar" ? b.country_ar : b.country,
      displayDate: b.date,
    }));
    setLocalBlogs(localized);
  }, [lang, rawBlogs]);

  // ————— Filter into archive / single-detail / all —————
  useEffect(() => {
    const keys = Object.keys(params);

    // 1) Archive view: /blog/:month/:year
    if (keys.includes("month") && keys.includes("year") && keys.length === 2) {
      const monthNum = parseInt(params.month, 10);
      const yearNum = parseInt(params.year, 10);

      const filtered = localBlogs.filter((b) => {
        const d = new Date(b.date);
        return d.getMonth() + 1 === monthNum && d.getFullYear() === yearNum;
      });

      setContextBlogs(filtered);
      setBlogs(filtered);
      return;
    }

    // 2) Detail view: /blog/:id  (keys length === 3)
    if (keys.length === 1) {
      const id = params.id;
      const single = localBlogs.find((b) => b.id?.toString() === id);
      if (single) {
        setContextBlogs([single]);
        setBlogs([single]);
        return;
      }
    }

    // 3) Default: all blogs
    setContextBlogs(localBlogs);
    setBlogs(localBlogs);
  }, [params, localBlogs]);

  // ————— Search within the current contextBlogs —————
  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setBlogs(contextBlogs);
    } else {
      setBlogs(
        contextBlogs.filter((b) => b.displayTitle?.toLowerCase().includes(term))
      );
    }
  }, [searchTerm, contextBlogs]);

  return (
    <>
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
                      onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
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
                <Outlet
                  context={{
                    blogs,
                    setBlogs,
                    allBlogs: localBlogs,
                    contextBlogs,
                    setContextBlogs,
                  }}
                />
              )}
            </Col>

            <Col md={3}>
              <ArchiveSection />
            </Col>
          </Row>
        </MyContainer>
      </StyledSection>
    </>
  );
}
