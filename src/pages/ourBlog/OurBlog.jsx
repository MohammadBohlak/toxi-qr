// src/pages/OurBlog.jsx
import { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import MyContainer from "../../components/ui/myContainer/MyContainer";
import { StyledSection } from "../../components/common/sections";
import { MainTitle } from "../../components/common/texts";
import { StyledInputGroup } from "./ourBlog.styles";
import ArchiveSection from "../../components/ourBlogComponents/archiveSection/ArchiveSection";
import { api } from "../../utils/api/api";
import styled from "styled-components";
const ResetButton = styled.button`
  width: fit-content;
  /* height: 40px; */
  padding: 2px 16px;
  color: white;
  font-weight: 500;
  font-size: var(--small-text);
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
export default function OurBlog() {
  const getBlogs = () => {
    api.get("/blogs").then((res) => {
      setBlogs(res.data);
    });
  };
  const { month, year, search, id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation("ourBlog");
  const showLoader = useSelector((state) => state.loader.isLoading);
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [showResetButton, setShowResetButton] = useState(false);
  useEffect(() => {
    getBlogs();
  }, []);
  useEffect(() => {
    if ((month && year) || search || id) {
      // setSearchTerm(search);
      setShowResetButton(true);
    } else {
      setShowResetButton(false);
    }
  }, [month, year, search, id]);
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      if (month && year) {
        navigate(`/blogs/${month}/${year}/${searchTerm}`);
      } else {
        navigate(`/blogs/${searchTerm}`);
      }
    }
  };

  return (
    <>
      <StyledSection>
        <MyContainer>
          <Row className="justify-content-between m-0">
            {!showLoader ? (
              <>
                <Col
                  md={8}
                  className="p-0 d-flex align-items-center justify-content-between"
                >
                  <MainTitle $align="initial" className="mb-4">
                    {t("title")}
                  </MainTitle>
                  {showResetButton && (
                    <ResetButton
                      onClick={() => {
                        navigate("/blogs");
                        getBlogs();
                      }}
                      className="mb-4"
                    >
                      {t("all")}
                    </ResetButton>
                  )}
                </Col>

                <Col md={8}>
                  <StyledInputGroup className="mb-4">
                    <Form.Control
                      placeholder={t("searchPlaceholder")}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                    />
                    <Button
                      onClick={() => {
                        handleSearch();
                      }}
                    >
                      {t("search")}
                    </Button>
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
              <ArchiveSection getBlogs={getBlogs} />
            </Col>
          </Row>
        </MyContainer>
      </StyledSection>
    </>
  );
}
