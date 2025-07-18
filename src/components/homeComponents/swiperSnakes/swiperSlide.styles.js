import styled, { css } from "styled-components";
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

export const Box = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20%;
  right: ${({ theme }) => (theme.lang === "en" ? "5%" : "auto")};
  left: ${({ theme }) => (theme.lang === "ar" ? "5%" : "auto")};
  background-color: ${({ theme }) => theme.colors.backLight};
  z-index: 1;
  transition: opacity 1.5s;
  border-radius: 8px;
  ${({ $active }) =>
    $active &&
    css`
      opacity: 1;
    `}

  ${({ $transitioning }) =>
    $transitioning &&
    css`
      opacity: 0;
    `}

  > div {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 20px;
    > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    svg {
      font-size: 80px;
    }
  }
  .hr {
    width: 100%;
    height: 2px;
    transform: translateY(2px);
    background-color: black;
    margin: 2px 0;
  }
`;
