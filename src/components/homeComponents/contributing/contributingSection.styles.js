import { Col } from "react-bootstrap";
import styled from "styled-components";
import { SubTitle } from "../../common/texts";
import img from "../../../assets/images/snakes/contributing.jpg";

export const LeftContent = styled(Col)`
  background-color: #000;
  color: #fff;
  ${SubTitle} {
    margin-bottom: 15px;
    @media (min-width: 992px) {
      margin-left: -5px;
      font-size: 20px !important;
    }
  }
  padding: 50px 20px 20px 15px;
  min-height: 350px;
  @media (max-width: 768px) {
    text-align: center;
    * {
      text-align: center !important;
    }
  }
`;
export const RightContent = styled(Col)`
  min-height: 350px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  padding: 0;
`;
