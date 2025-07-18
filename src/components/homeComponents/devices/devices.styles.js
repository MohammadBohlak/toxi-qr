import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import mockups from "../../../assets/images/mockups.jpg";

export const StyledDevices = styled(Row)`
  --min-height: 320px;
  min-height: var(--min-height);
  > div {
    padding: 50px 20px 20px 20px;
  }
  @media (max-width: 768px) {
    * {
      text-align: center;
    }
  }
`;
export const LeftDevices = styled(Col)`
  background-color: white;

  padding-left: var(--p-container) !important;
  min-height: var(--min-height);
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    width: 160px;
    img {
      max-width: 100%;
    }
  }
  @media (max-width: 768px) {
    .buttons {
      justify-content: center;
    }
  }
  @media (max-width: 992px) {
    a {
      width: 140px;
    }
  }
`;
export const RightDevices = styled(Col)`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-image: url(${mockups});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: var(--min-height);
`;
