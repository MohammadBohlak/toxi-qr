import { Row } from "react-bootstrap";
import styled from "styled-components";

export const TextContent = styled.div`
  div {
    color: #555;
    text-transform: uppercase;
    font-size: var(--min-text);
  }
  a {
    font-size: var(--small-text);
    text-decoration: none;
  }
`;
export const StyledPress = styled(Row)`
  @media (max-width: 768px) {
    > div {
      justify-content: center;
      * {
        text-align: center !important;
      }
    }
  }
`;
