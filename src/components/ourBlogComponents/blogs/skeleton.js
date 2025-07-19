import styled from "styled-components";

export const SkeletonBlogs = styled.div`
  height: 380px;
  margin-top: var(--m-top);
  padding: 10px;
  div {
    border-radius: 8px;
  }
  display: grid;
  grid-template-rows: 160px 30px 30px 50px 30px;
  grid-template-columns: 100%;
  row-gap: 15px;
`;
