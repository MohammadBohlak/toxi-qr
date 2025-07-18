import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const SwiperSection = styled.section`
  width: 100%;
  height: 500px;

  .swiper {
    width: 100%;
    height: 100%;
    direction: ltr;
  }

  .swiper-wrapper-with-custom-nav {
    position: relative;
  }

  .custom-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    color: white;
    border: none;
    padding: 8px;
    cursor: pointer;
    z-index: 10000;
    height: 100%;
  }
  .custom-nav-btn svg {
    font-weight: bold;
  }
  .prev-btn {
    left: 0px;
  }

  .next-btn {
    right: 0px;
  }
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after,
  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    content: "";
  }
`;

export const StyledSlide = styled(SwiperSlide)`
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  background-image: url(${({ img }) => img});
  position: relative;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
