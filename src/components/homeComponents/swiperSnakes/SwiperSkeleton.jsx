import React from "react";
import styled from "styled-components";

const SkeletonSwiper = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  /* animation: skeleton 1.5s infinite ease-in-out; */
`;
const SkeletonBox = styled.div`
  position: absolute;
  width: 400px;
  height: 200px;
  top: 20%;
  right: 5%;
  content: "";
  z-index: 1000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 30px;
`;
const TextSkeleton = styled.div`
  width: 80%;
  height: 30%;
  border-radius: 8px;
`;
const WorkSkeleton = styled.div`
  margin: 50px auto;
  width: 30%;
  height: 50px;
  border-radius: 8px;
`;
const SwiperSkeleton = () => {
  return (
    <>
      <SkeletonSwiper className="skeleton">
        <SkeletonBox className="sub-skeleton">
          <TextSkeleton className="skeleton" />
          <TextSkeleton className="skeleton" />
        </SkeletonBox>
      </SkeletonSwiper>
      <WorkSkeleton className="skeleton" />
    </>
  );
};

export default SwiperSkeleton;
