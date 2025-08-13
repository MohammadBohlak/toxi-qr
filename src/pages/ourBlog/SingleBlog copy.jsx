// src/pages/ourBlog/SingleBlog.jsx
import { useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import Blogs from "../../components/ourBlogComponents/blogs/Blogs";
import { useTranslation } from "react-i18next";
import { SubTitle } from "../../components/common/texts";

export default function SingleBlog() {
  const { id } = useParams();
  const { allBlogs, blogs, setBlogs, setContextBlogs } = useOutletContext();
  const { t } = useTranslation("ourBlog");

  useEffect(() => {
    const found = allBlogs.find((b) => b.id.toString() === id);
    const one = found ? [found] : [];
    // setContextBlogs(one);
    setBlogs(one);
  }, [id, allBlogs, setContextBlogs, setBlogs]);

  return blogs.length > 0 ? (
    <Blogs blogs={blogs} isOneBlog />
  ) : (
    <SubTitle> {t("searchNotFound")}</SubTitle>
  );
}
