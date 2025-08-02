// src/pages/ourBlog/BlogList.jsx
import { useOutletContext } from "react-router-dom";
import Blogs from "../../components/ourBlogComponents/blogs/Blogs";
import { SubTitle } from "../../components/common/texts";
import { useTranslation } from "react-i18next";

export default function BlogList() {
  const { blogs } = useOutletContext();
  const { t } = useTranslation("ourBlog");
  return blogs.length > 0 ? (
    <Blogs blogs={blogs} />
  ) : (
    <SubTitle> {t("searchNotFound")}</SubTitle>
  );
}
