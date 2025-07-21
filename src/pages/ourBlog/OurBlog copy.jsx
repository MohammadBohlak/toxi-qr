// src/pages/OurBlog.jsx
import { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import { api } from "../../utils/api/api";

import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import { MainTitle, SubTitle } from "../../components/common/texts";
import Blogs from "../../components/ourBlogComponents/blogs/Blogs";
import ArchiveSection from "../../components/ourBlogComponents/archiveSection/ArchiveSection";
import { StyledInputGroup } from "./ourBlog.styles";
import { useTranslation } from "react-i18next";

export default function OurBlog() {
  const { t } = useTranslation();
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // جلب البيانات الأولى للمقالات
  useEffect(() => {
    api.get("/blogs").then((res) => {
      setAllBlogs(res.data);
      setBlogs(res.data);
    });
  }, []);

  // إذا تم مسح مربع البحث، أعد عرض جميع المقالات
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setBlogs(allBlogs);
    }
  }, [searchTerm, allBlogs]);

  // البحث عند الضغط على الزر أو Enter
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
            {/* مربع البحث */}
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
          <Col md={8}>
            {blogs.length > 0 ? (
              <Blogs blogs={blogs} />
            ) : (
              <SubTitle>
                {t("ourBlog.searchNotFound")}
                {/* {searchTerm && ` for "${searchTerm}"`} */}
              </SubTitle>
            )}
          </Col>
          <Col md={3}>
            <ArchiveSection
              blogs={blogs}
              setAllBlogs={setAllBlogs}
              setBlogs={setBlogs}
            />
          </Col>
        </Row>
      </MyContainer>
    </StyledSection>
  );
}
