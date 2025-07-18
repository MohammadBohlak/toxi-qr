import { Card } from "react-bootstrap";
import { SmallText, SubTitle, Text } from "../../common/texts";
import { Link } from "react-router-dom";
import { BlogCard } from "./blogs.styles";

const Blogs = ({ blogs }) => {
  return (
    <>
      {blogs.map((item, idx) => (
        <BlogCard $shadow={blogs.length > 1} key={idx}>
          <SubTitle className="mb-4">
            {idx + 1}. In the {item.location}
          </SubTitle>
          {item.image && (
            <Card.Img variant="top" src={item.image} alt={item.title} />
          )}
          <Card.Body className="p-0 pt-3">
            <Text $bold={true} className="mb-2">
              {item.title}
            </Text>
            <SmallText className="mb-2 text-muted text-uppercase ">
              {item.date}
            </SmallText>
            <SmallText className="mb-2">
              {blogs.length == 1 ? `${item.fullText}` : `${item.summary}`}
            </SmallText>
            <SmallText>
              {" "}
              {blogs.length != 1 && (
                <Link to={`/blog/${item.id}`}>Read the full article</Link>
              )}
            </SmallText>
          </Card.Body>
        </BlogCard>
      ))}
    </>
  );
};

export default Blogs;
