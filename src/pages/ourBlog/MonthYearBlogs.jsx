// src/pages/ourBlog/MonthYearBlogs.jsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Blogs from "../../components/ourBlogComponents/blogs/Blogs";
import { useTranslation } from "react-i18next";
import { SubTitle } from "../../components/common/texts";

export default function MonthYearBlogs() {
  const { month, year } = useParams();
  const { allBlogs, blogs, setBlogs } = useOutletContext();
  const { t } = useTranslation("ourBlog");

  useEffect(() => {
    const m = parseInt(month, 10);
    const y = parseInt(year, 10);

    const filtered = allBlogs.filter((b) => {
      const d = new Date(b.date);
      return d.getMonth() + 1 === m && d.getFullYear() === y;
    });

    setBlogs(filtered);
  }, [month, year, allBlogs, setBlogs]);
 return blogs.length > 0 ? (
    <Blogs blogs={blogs} />
  ) : (
    <SubTitle> {t("searchNotFound")}</SubTitle>
  );
}
