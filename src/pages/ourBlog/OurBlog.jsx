// src/pages/OurBlog.jsx
import { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { api } from "../../utils/api/api";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import { MainTitle } from "../../components/common/texts";
// ↓ import Outlet
import { Outlet } from "react-router-dom";
import { StyledInputGroup } from "./ourBlog.styles";
import { useTranslation } from "react-i18next";
import ArchiveSection from "../../components/ourBlogComponents/archiveSection/ArchiveSection";
import { useSelector } from "react-redux";

export default function OurBlog() {
  const { t } = useTranslation("ourBlog");
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    api.get("/blogs").then((res) => {
      setAllBlogs(res.data);
      setBlogs(res.data);
    });
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setBlogs(allBlogs);
    }
  }, [searchTerm, allBlogs]);

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setBlogs(allBlogs);
      return;
    }
    const filtered = allBlogs.filter((b) =>
      b.title.toLowerCase().includes(term)
    );
    setBlogs(filtered);
  };

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
                        handleSearch();
                      }
                    }}
                  />
                  <Button onClick={handleSearch}>{t("search")}</Button>
                </StyledInputGroup>
              </Col>
            </>
          ) : (
            <div style={{ minHeight: "500px" }}></div>
          )}

          {/* ← this column is now your outlet */}
          <Col md={8}>
            {!showLoader && <Outlet context={{ allBlogs, blogs, setBlogs }} />}
          </Col>

          <Col md={3}>
            <ArchiveSection />
          </Col>
        </Row>
      </MyContainer>
    </StyledSection>
  );
}
