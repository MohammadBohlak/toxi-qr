import { Card } from "react-bootstrap";
import { SmallText, SubTitle, Text } from "../../common/texts";
import { Link } from "react-router-dom";
import { BlogCard } from "./blogs.styles";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { SkeletonBlogs } from "./skeleton";

const Blogs = ({ blogs, isOneBlog = false }) => {
  const [dates, setDates] = useState([]);
  const showLoader = useSelector((state) => state.loader.isLoading);
  return (
    <>
      {showLoader ? (
        <>
          {[1, 2].map((e, i) => (
            <SkeletonBlogs key={i} className="skeleton">
              <div style={{ width: "100%" }} className="sub-skeleton" />
              <div style={{ width: "25%" }} className="sub-skeleton" />
              <div style={{ width: "60%" }} className="sub-skeleton" />
              <div style={{ width: "80%" }} className="sub-skeleton" />
              <div style={{ width: "40%" }} className="sub-skeleton" />
            </SkeletonBlogs>
          ))}
        </>
      ) : (
        <>
          {blogs.map((item, idx) => {
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
                    {!isOneBlog && (
                      <Link to={`/blog/${item.id}`}>Read the full article</Link>
                    )}
                  </SmallText>
                </Card.Body>
              </BlogCard>
            );
          })}
        </>
      )}
    </>
  );
};

export default Blogs;
