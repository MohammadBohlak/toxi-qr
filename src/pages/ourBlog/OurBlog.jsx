import { Row, Col } from "react-bootstrap";
import { blogPosts } from "./data";
import ArchiveSection from "../../components/ourBlogComponents/archiveSection/ArchiveSection";
import { MainTitle } from "../../components/common/texts";
import MyContainer from "../../components/ui/myContainer/MyContainer";
import Blogs from "../../components/ourBlogComponents/blogs/Blogs";
import { StyledSection } from "../../components/common/sections";

const OurBlog = () => (
  <StyledSection>
    <MyContainer>
      <MainTitle $align="initial" className="mb-5">
        Our Blog
      </MainTitle>
      <Row className="justify-content-between m-0">
        <Col md={8}>
          <Blogs blogs={blogPosts} />
        </Col>
        <Col md={3}>
          <ArchiveSection />
        </Col>
      </Row>
    </MyContainer>
  </StyledSection>
);

export default OurBlog;
