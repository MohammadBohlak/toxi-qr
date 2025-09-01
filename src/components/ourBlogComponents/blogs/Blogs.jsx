import { Card } from "react-bootstrap";
import { SmallText, SubTitle, Text } from "../../common/texts";
import { Link } from "react-router-dom";
import { BlogCard } from "./blogs.styles";
import blog from "../../../assets/images/blog.jpg";
import { useSelector } from "react-redux";

const Blogs = ({ blogs, isOneBlog = false }) => {
  const lang = useSelector((state) => state.lang.language);
  const showLoader = useSelector((state) => state.loader.isLoading);

  const isLangEn = () => {
    return lang === "en";
  };
  return (
    <>
      {!showLoader &&
        blogs.map((item, idx) => {
          const title = isLangEn() ? item.title : item.title_ar;
          const shortDesc = isLangEn()
            ? item.short_description
            : item.short_description_ar;
          const fullDesc =
            item.description_ar && lang === "ar"
              ? item.description_ar
              : item.description;
          // const country = item.displayCountry || item.country;
          const imageSrc = item.image || blog;

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

                <SmallText className="mb-2">
                  {isOneBlog ? fullDesc : shortDesc}
                </SmallText>

                {!isOneBlog && (
                  <SmallText>
                    <Link to={`/blog/${item.id}`}>
                      {lang === "ar"
                        ? "اقرأ المقال كاملًا"
                        : "Read the full article"}
                    </Link>
                  </SmallText>
                )}
              </Card.Body>
            </BlogCard>
          );
        })}
    </>
  );
};

export default Blogs;
