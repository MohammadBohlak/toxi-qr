// src/pages/ourBlog/MonthYearBlogs.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blogs from "../../components/ourBlogComponents/blogs/Blogs";
import { useTranslation } from "react-i18next";
import { SubTitle } from "../../components/common/texts";
import { api } from "../../utils/api/api";
import { useSelector } from "react-redux";

export default function MonthYearBlogs() {
  const { month, year } = useParams();
  const { t } = useTranslation("ourBlog");
  const [blogs, setBlogs] = useState([]);
  const showLoader = useSelector((state) => state.loader.isLoading);

  useEffect(() => {
    api.get(`/blogs?month=${month}&year=${year}`).then((res) => {
      setBlogs(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    !showLoader &&
    (blogs.length > 0 ? (
      <Blogs blogs={blogs} />
    ) : (
      <SubTitle> {t("searchNotFound")}</SubTitle>
    ))
  );
}
