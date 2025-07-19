// src/pages/ourBlog/MonthYearBlogs.jsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Blogs from "../../components/ourBlogComponents/blogs/Blogs";

export default function MonthYearBlogs() {
  const { month, year } = useParams();
  const { allBlogs, blogs, setBlogs } = useOutletContext();

  useEffect(() => {
    const m = parseInt(month, 10);
    const y = parseInt(year, 10);

    const filtered = allBlogs.filter((b) => {
      const d = new Date(b.date);
      return d.getMonth() + 1 === m && d.getFullYear() === y;
    });

    setBlogs(filtered);
  }, [month, year, allBlogs, setBlogs]);

  return <Blogs blogs={blogs} />;
}
