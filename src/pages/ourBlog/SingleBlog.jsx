// src/pages/ourBlog/SingleBlog.jsx
import { useEffect } from "react";
import { useParams, useOutletContext, Link } from "react-router-dom";
import Blogs from "../../components/ourBlogComponents/blogs/Blogs";
import { useTranslation } from "react-i18next";
import { SmallText, SubTitle, Text } from "../../components/common/texts";
import { BlogCard } from "../../components/ourBlogComponents/blogs/blogs.styles";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import blog from "../../assets/images/blog.jpg";
import styled from "styled-components";

export default function SingleBlog({ isOneBlog = false }) {
  const { id } = useParams();
  const { allBlogs, blogs, setBlogs, setContextBlogs } = useOutletContext();
  const { t } = useTranslation("ourBlog");
  const lang = useSelector((state) => state.lang.language);

  useEffect(() => {
    const found = allBlogs.find((b) => b.id.toString() === id);
    const one = found ? [found] : [];
    // setContextBlogs(one);
    setBlogs(one);
  }, [id, allBlogs, setContextBlogs, setBlogs]);

  return blogs.length > 0 ? (
    <>
      {blogs.map((item, idx) => {
        const title = item.displayTitle || item.title;
        const shortDesc = item.displayShortDesc || item.short_description;
        // const fullDesc =
        //   item.description_ar && lang === "ar"
        //     ? item.description_ar
        //     : item.description;
        // const country = item.displayCountry || item.country;
        const imageSrc = item.image || blog;
        // console.log(item.sections);
        return (
          <BlogCard $shadow={!isOneBlog} key={idx}>
            <SubTitle className="mb-4">
              {/* {idx + 1}. {lang === "ar" ? "في" : "In the"} {country} */}
            </SubTitle>

            <Card.Img
              style={{
                maxHeight: "180px",
                width: "100%",
                objectFit: "contain",
                backgroundColor: item.image ? "#212832" : "white",
              }}
              src={item.image ? item.image : blog}
              alt={title}
            />

            <Card.Body className="p-0 pt-3">
              <Text $bold className="mb-2">
                {title}
              </Text>

              <SmallText className="mb-2 text-muted text-uppercase">
                {item.date}
              </SmallText>

              <SmallText lText className="mb-2">
                {item.sections.map((section) => {
                  const description =
                    section.description_ar && lang === "ar"
                      ? section.description_ar
                      : section.description;
                  const images = section.images;
                  console.log(images);
                  return (
                    <div key={section.id} className="mb-3">
                      <Text>{description}</Text>
                      {images.map((image) => (
                        <img
                          key={image.id}
                          src={image.image}
                          style={{ width: "200px" }}
                          alt={image.image_note ? image.image_note : "Image"}
                        />
                      ))}
                    </div>
                  );
                })}
                {/* {isOneBlog ? fullDesc : shortDesc} */}
              </SmallText>
            </Card.Body>
          </BlogCard>
        );
      })}
    </>
  ) : (
    <SubTitle> {t("searchNotFound")}</SubTitle>
  );
}
