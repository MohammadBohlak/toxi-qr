import { Row, Col } from "react-bootstrap";
import { blogPosts } from "./data";
import ArchiveSection from "../../components/ourBlogComponents/archiveSection/ArchiveSection";
import { MainTitle } from "../../components/common/texts";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import Blogs from "../../components/ourBlogComponents/blogs/Blogs";
import { StyledSection } from "../../components/common/sections";
import { useEffect, useState } from "react";
import { api } from "../../utils/api/api";

const OurBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    api.get("/blogs").then((res) => {
      setBlogs(res.data);
      console.log(res.data[0]);
    });
  }, []);

  return (
    <>
      <StyledSection>
        <MyContainer>
          <MainTitle $align="initial" className="mb-5">
            Our Blog
          </MainTitle>
          <Row className="justify-content-between m-0">
            <Col md={8}>
              <Blogs blogs={blogs} />
            </Col>
            <Col md={3}>
              <ArchiveSection />
            </Col>
          </Row>
        </MyContainer>
      </StyledSection>
    </>
  );
};
export default OurBlog;
