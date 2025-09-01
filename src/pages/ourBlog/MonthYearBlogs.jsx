// src/pages/ourBlog/MonthYearBlogs.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blogs from "../../components/ourBlogComponents/blogs/Blogs";
import { useTranslation } from "react-i18next";
import { SubTitle } from "../../components/common/texts";
import { api } from "../../utils/api/api";
import { useSelector } from "react-redux";

export default function MonthYearBlogs() {
  const { month, year, search } = useParams();
  const { t } = useTranslation("ourBlog");
  const [blogs, setBlogs] = useState([]);
  const showLoader = useSelector((state) => state.loader.isLoading);

  useEffect(() => {
    if (search && month && year)
      api
        .get(`/blogs?month=${month}&year=${year}&search=${search}`)
        .then((res) => {
          setBlogs(res.data);
        });
    else if (month && year)
      api.get(`/blogs?month=${month}&year=${year}`).then((res) => {
        setBlogs(res.data);
      });
    else if (search)
      api.get(`/blogs?search=${search}`).then((res) => {
        setBlogs(res.data);
      });
  }, [month, year, search]);

  return (
    !showLoader &&
    (blogs.length > 0 ? (
      <Blogs blogs={blogs} />
    ) : (
      <SubTitle> {t("searchNotFound")}</SubTitle>
    ))
  );
}
