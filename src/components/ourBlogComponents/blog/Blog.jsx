import { useParams } from "react-router-dom";
import { blogPosts } from "../../../pages/ourBlog/data.js";
import Blogs from "../blogs/Blogs.jsx";
import MyContainer from "../../ui/myContainer/MyContainer.jsx";
import { StyledSection } from "../../common/sections.js";

const Blog = () => {
  const { id } = useParams();
  const blog = blogPosts.find((item) => item.id == id);

  return (
    <StyledSection>
      <MyContainer>
        <Blogs blogs={[blog]} />
      </MyContainer>
    </StyledSection>
  );
};
export default Blog;
