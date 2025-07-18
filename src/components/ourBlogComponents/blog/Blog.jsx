import { useParams } from "react-router-dom";
import { blogPosts } from "../../../pages/ourBlog/data.js";
import Blogs from "../blogs/Blogs.jsx";
import MyContainer from "../../ui/myContainer/MyContainer.jsx";
import { StyledSection } from "../../common/sections.js";
import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api.js";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const { month, year } = useParams();
  useEffect(() => {
    api.get(`/blogs/?month=${month}&year=${year}&search=Toxiqr`).then((res) => {
      setBlog(res.data);
    });
  }, []);

  return (
    <StyledSection>
      <MyContainer>
        <Blogs blogs={blog} isOneBlog={true} />
      </MyContainer>
    </StyledSection>
  );
};
export default Blog;
