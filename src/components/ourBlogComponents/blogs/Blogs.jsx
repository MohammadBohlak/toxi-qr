import { Card } from "react-bootstrap";
import { SmallText, SubTitle, Text } from "../../common/texts";
import { Link } from "react-router-dom";
import { BlogCard } from "./blogs.styles";
import logo from "../../../assets/images/logo.png";
const Blogs = ({ blogs, isOneBlog = false }) => {
  return (
    <>
      {blogs.map((item, idx) => {
        return (
          <BlogCard $shadow={!isOneBlog} key={idx}>
            <SubTitle className="mb-4">
              {idx + 1}. In the{" "}
              {item.country.charAt(0).toUpperCase() +
                item.country.slice(1).toLowerCase()}
              {console.log(blogs[0])}
            </SubTitle>
            <Card.Img
              style={{ maxHeight: "180px", objectFit: "contain" }}
              src={item.imasge ? item.image : logo}
              alt={item.title}
            />
            <Card.Body className="p-0 pt-3">
              <Text $bold={true} className="mb-2">
                {item.title}
              </Text>
              <SmallText className="mb-2 text-muted text-uppercase ">
                {item.date}
              </SmallText>
              <SmallText className="mb-2">
                {isOneBlog
                  ? `${item.description}`
                  : `${item.short_description}`}
              </SmallText>
              <SmallText>
                {!isOneBlog && (
                  <Link to={`/blog/${item.id}`}>Read the full article</Link>
                )}
              </SmallText>
            </Card.Body>
          </BlogCard>
        );
      })}
    </>
  );
};

export default Blogs;
