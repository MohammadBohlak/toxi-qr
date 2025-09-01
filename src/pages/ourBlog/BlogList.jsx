// src/pages/ourBlog/BlogList.jsx
import { useOutletContext } from "react-router-dom";
import Blogs from "../../components/ourBlogComponents/blogs/Blogs";
import { SubTitle } from "../../components/common/texts";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function BlogList() {
  const showLoader = useSelector((state) => state.loader.isLoading);

  const { blogs } = useOutletContext();
  const { t } = useTranslation("ourBlog");
  return (
    !showLoader &&
    (blogs.length > 0 ? (
      <Blogs blogs={blogs} />
    ) : (
      <SubTitle> {t("searchNotFound")}</SubTitle>
    ))
  );
}
