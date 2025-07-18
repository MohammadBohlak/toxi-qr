import { Card } from "react-bootstrap";
import styled from "styled-components";

export const BlogCard = styled(Card)`
  border: none;
  margin-bottom: 2rem;
  box-shadow: ${({ $shadow }) =>
    $shadow ? "0px 0px 4px 0px rgba(0, 0, 0, 0.1)" : "none"};
  padding: ${({ $shadow }) => ($shadow ? "2rem" : "0")};
  .card-img-top {
    max-height: 180px;
    object-fit: cover;
  }

  a {
    color: #0d6efd;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
