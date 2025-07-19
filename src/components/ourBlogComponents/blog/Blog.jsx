import { useParams } from "react-router-dom";
import Blogs from "../blogs/Blogs.jsx";
import MyContainer from "../../ui/myContainer/MyContainer.jsx";
import { StyledSection } from "../../common/sections.js";
import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api.js";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const { id, month, year } = useParams();
  useEffect(() => {
    if (id) {
      api.get(`/blogs/${id}`).then((res) => {
        setBlog([res.data]);
      });
    } else if (month && year) {
      api.get(`/blogs?month=${month}&year=${year}`).then((res) => {
        setBlog(res.data);
      });
    }
  }, []);

  return (
    <StyledSection>
      <MyContainer>
        <Blogs blogs={blog} isOneBlog={id} />
      </MyContainer>
    </StyledSection>
  );
};
export default Blog;
