import styled from "styled-components";

export const Wrapper = styled.div`
  /* max-width: 400px; */
  /* width: 200px; */
  /* height: 40px; */
  /* margin: 2rem auto; */
  .css-t3ipsp-control {
    border: none;
    box-shadow: none;
  }
  .css-19bb58m {
    padding: 0;
    margin: 0;
  }
  .css-1o9seal-control {
    max-height: 40px;
    border: 2px solid #ddd;
    transition: border-color 0.3s;
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }
    &:hover {
      border-color: #aaa !important;
    }
  }
  .css-kp7kzw-control:hover {
    border-color: #ddd;
  }
  [class$="control"] {
    border: 2px solid #ddd;
    box-shadow: none;
  }
  [class$="control"]:hover {
    border-color: #aaa;
  }

  .css-kp7kzw-control {
    border: 2px solid #ddd;
  }

  .css-1jqq78o-placeholder {
    margin: 0;
  }
  .css-19bb58m {
    height: 30px;
  }
  .css-1cfo1cf {
    input {
      height: 24px;
    }
  }
`;
