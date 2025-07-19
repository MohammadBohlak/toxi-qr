// src/pages/ourBlog/SingleBlog.jsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Blogs from "../../components/ourBlogComponents/blogs/Blogs";

export default function SingleBlog() {
  const { id } = useParams();
  const { allBlogs, blogs, setBlogs } = useOutletContext();

  useEffect(() => {
    const found = allBlogs.find((b) => b.id.toString() === id);
    setBlogs(found ? [found] : []);
  }, [id, allBlogs, setBlogs]);

  return <Blogs blogs={blogs} isOneBlog />;
}
