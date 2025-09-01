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
  // const getBlogs = () => {
  //   api.get("/blogs").then((res) => {
  //     setRawBlogs(res.data);
  //   });
  // };

  const { t } = useTranslation("ourBlog");
  const lang = useSelector((state) => state.lang.language);
  const showLoader = useSelector((state) => state.loader.isLoading);
  const params = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    api.get("/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      api.get(`/blogs?search=${searchTerm}`).then((res) => {
        setBlogs(res.data);
        // setContextBlogs(res.data);
      });
    }
  };
  useEffect(() => {}, []);

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
                    <Button onClick={handleSearch}>{t("search")}</Button>
                  </StyledInputGroup>
                </Col>
              </>
            ) : (
              <div style={{ minHeight: "500px" }} />
            )}

            <Col md={8}>
              <Outlet
                context={{
                  blogs,
                }}
              />
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
