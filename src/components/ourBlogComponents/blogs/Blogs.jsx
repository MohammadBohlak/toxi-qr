import { Card } from "react-bootstrap";
import { SmallText, SubTitle, Text } from "../../common/texts";
import { Link } from "react-router-dom";
import { BlogCard } from "./blogs.styles";
import { useEffect, useState } from "react";

const Blogs = ({ blogs, isOneBlog = false }) => {
  const [dates, setDates] = useState([]);

  return (
    <>
      {blogs.map((item, idx) => {
        const date = new Date(); // تحويل النص إلى كائن تاريخ
        const monthNumber = date.getMonth() + 1; // getMonth() يبدأ من 0، لذا نضيف 1
        const yearNumber = date.getFullYear();
        return (
          <BlogCard $shadow={!isOneBlog} key={idx}>
            <SubTitle className="mb-4">
              {/* {idx + 1}. In the India */}
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
                {isOneBlog
                  ? `${item.description}`
                  : `${item.short_description}`}
              </SmallText>
              <SmallText>
                {" "}
                {!isOneBlog && (
                  <Link to={`/blog/${monthNumber}/${yearNumber}/`}>
                    Read the full article
                  </Link>
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
