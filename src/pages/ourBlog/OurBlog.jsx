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

export default function OurBlog() {
  const { t } = useTranslation();
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

  return (
    <StyledSection>
      <MyContainer>
        <MainTitle $align="initial" className="mb-4">
          {t("ourBlog.title")}
        </MainTitle>

        <Row className="justify-content-between m-0">
          <Col md={8}>
            <StyledInputGroup className="mb-4">
              <Form.Control
                placeholder={t("ourBlog.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSearch();
                  }
                }}
              />
              <Button onClick={handleSearch}>{t("ourBlog.search")}</Button>
            </StyledInputGroup>
          </Col>

          {/* ← this column is now your outlet */}
          <Col md={8}>
            <Outlet context={{ allBlogs, blogs, setBlogs }} />
          </Col>

          <Col md={3}>
            <ArchiveSection />
          </Col>
        </Row>
      </MyContainer>
    </StyledSection>
  );
}
