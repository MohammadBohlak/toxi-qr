// src/pages/ourBlog/SingleBlog.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SmallText, SubTitle, Text } from "../../components/common/texts";
import { BlogCard } from "../../components/ourBlogComponents/blogs/blogs.styles";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import blogImg from "../../assets/images/blog.jpg";
import { api } from "../../utils/api/api";

export default function SingleBlog({ isOneBlog = false }) {
  const [blog, setBlog] = useState([]);

  const { id } = useParams();
  const { t } = useTranslation("ourBlog");
  const showLoader = useSelector((state) => state.loader.isLoading);

  const lang = useSelector((state) => state.lang.language);
  const isLangEn = () => {
    return lang === "en";
  };
  useEffect(() => {
    api.get(`/blogs/${id}`).then((res) => {
      setBlog([res.data]);
    });
  }, []);

  return (
    !showLoader &&
    (blog.length > 0 ? (
      <>
        {blog.map((item, idx) => {
          const title = isLangEn() ? item.title : item.title_ar;
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
                src={item.image ? item.image : blogImg}
                alt={title}
              />

              <Card.Body className="p-0 pt-3">
                <Text $bold className="mb-2">
                  {title}
                </Text>

                <SmallText className="mb-2 text-muted text-uppercase">
                  {item.date}
                </SmallText>

                <SmallText className="mb-2">
                  {item.sections.map((section) => {
                    const description =
                      section.description_ar && !isLangEn()
                        ? section.description_ar
                        : section.description;
                    const images = section.images;
                    return (
                      <div key={section.id} className="mb-3 mt-3">
                        <Text>{description}</Text>
                        {images.map((image) => (
                          <img
                            className="mb-2 mt-2"
                            key={image.id}
                            src={image.image}
                            style={{
                              width: "100%",
                              maxWidth: "100%",
                              maxHeight: "250px",
                              objectFit: "cover",
                            }}
                            alt={image.image_note ? image.image_note : "Image"}
                          />
                        ))}
                      </div>
                    );
                  })}
                </SmallText>
              </Card.Body>
            </BlogCard>
          );
        })}
      </>
    ) : (
      <SubTitle> {t("searchNotFound")}</SubTitle>
    ))
  );
}
