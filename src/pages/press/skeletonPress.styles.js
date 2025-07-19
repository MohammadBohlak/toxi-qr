import styled from "styled-components";

const Skeleton = styled.div`
  height: ${({ $h }) => $h || "40px"};
  width: ${({ $w }) => $w || "200px"};
  border-radius: 8px;
`;

export const LeftSceleton = () => {
  return (
    <>
      <Skeleton $w="25%" className="skeleton" />
      <Skeleton $w="50%" className="skeleton" />
      <Skeleton $w="100%" $h="80px" className="skeleton" />
      {[1, 2, 3].map((e, i) => (
        <Skeleton key={i} $w="100%" $h="50px" className="skeleton" />
      ))}
    </>
  );
};
export const RightSceleton = () => {
  return (
    <>
      <Skeleton $w="70%" className="skeleton" />
      <Skeleton $w="100%" $h="150px" className="skeleton" />
      <Skeleton $w="100%" $h="150px" className="skeleton" />
    </>
  );
};
